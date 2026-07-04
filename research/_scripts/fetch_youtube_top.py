"""Fetch a YouTube channel's top videos by views via Playwright + Chromium.

YouTube renders fully in a headless browser with no login (unlike Instagram or the
Meta Ad Library), and its "Popular" sort exposes public view counts — the cleanest
signal for what a creator-type competitor's BEST content actually is. This feeds the
simplifai-competitor-content-research skill.

Usage:
    python3 fetch_youtube_top.py @LiamOttley
    python3 fetch_youtube_top.py https://www.youtube.com/@nicksaraev -n 15
    python3 fetch_youtube_top.py @LiamOttley -o ~/Desktop/ottley-top.json

Output (default): research/_scratch/youtube_<handle>.json  (+ .txt)
Each record: { rank, title, views, views_n, age, duration }.

Note: "Popular" returns the channel's all-time most-viewed, so older hits dominate.
That's the point — it shows what resonated. The skill cross-reads the dates to tell
an evergreen winner from a recent breakout.
"""
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

from playwright.sync_api import sync_playwright, TimeoutError as PWTimeout

SCRATCH = Path(__file__).resolve().parents[1] / "_scratch"
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
      "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36")


def normalize_handle(s: str) -> str:
    m = re.search(r"@[\w.\-]+", s)
    if m:
        return m.group(0)
    return "@" + s.lstrip("@")


def views_to_int(s: str) -> int | None:
    m = re.match(r"([\d.]+)\s*([KMB]?)", s.strip(), re.I)
    if not m:
        return None
    n = float(m.group(1))
    mult = {"": 1, "K": 1_000, "M": 1_000_000, "B": 1_000_000_000}[m.group(2).upper()]
    return int(n * mult)


def parse_item(text: str) -> dict | None:
    # Rich-item innerText looks like:
    #   "22:43 | Title here | 50K views | • | 2 weeks ago"   (we join lines with ' | ')
    parts = [p.strip() for p in text.split(" | ") if p.strip() and p.strip() != "•"]
    if not parts:
        return None
    duration = parts[0] if re.match(r"^\d+(:\d+)+$", parts[0]) else None
    views = next((p for p in parts if re.search(r"views?", p, re.I)), None)
    age = next((p for p in parts if re.search(r"ago", p, re.I)), None)
    # Title: the longest part that isn't duration/views/age.
    cand = [p for p in parts if p not in (duration, views, age)]
    title = max(cand, key=len) if cand else None
    if not title:
        return None
    return {
        "title": title,
        "views": views,
        "views_n": views_to_int(views.replace("views", "").replace("view", "")) if views else None,
        "age": age,
        "duration": duration,
    }


def fetch(handle: str, n: int, headless: bool) -> dict:
    url = f"https://www.youtube.com/{handle}/videos?view=0&sort=p"  # sort=p = Popular
    result: dict = {"handle": handle, "url": url, "videos": [], "notes": []}
    with sync_playwright() as p:
        b = p.chromium.launch(headless=headless)
        pg = b.new_page(locale="en-US", user_agent=UA, viewport={"width": 1400, "height": 2200})
        try:
            pg.goto(url, wait_until="domcontentloaded", timeout=45000)
        except PWTimeout:
            result["notes"].append("Page load timed out.")
            b.close()
            return result
        pg.wait_for_timeout(4000)
        for label in ("Accept all", "Reject all", "Accept the use of cookies"):
            try:
                btn = pg.get_by_role("button", name=label)
                if btn.count():
                    btn.first.click(timeout=2000)
                    pg.wait_for_timeout(2500)
                    break
            except Exception:
                pass
        # Scroll a little to load more than the first viewport of videos.
        for _ in range(max(0, (n // 8))):
            pg.mouse.wheel(0, 2600)
            pg.wait_for_timeout(1200)
        items = pg.eval_on_selector_all(
            "ytd-rich-item-renderer",
            "els=>els.map(e=>(e.innerText||'').replace(/\\n/g,' | ').trim()).filter(Boolean)"
        )
        b.close()

    seen = set()
    for raw in items:
        rec = parse_item(raw)
        if not rec or rec["title"] in seen:
            continue
        seen.add(rec["title"])
        result["videos"].append(rec)

    # Popular sort is usually already ranked, but enforce by views where parsed.
    result["videos"].sort(key=lambda v: v["views_n"] or -1, reverse=True)
    result["videos"] = result["videos"][:n]
    if not result["videos"]:
        result["notes"].append(
            "No videos parsed. The channel handle may be wrong, the channel may have no "
            "public videos, or YouTube's DOM changed (refresh the ytd-rich-item-renderer selector)."
        )
    return result


def write_outputs(result: dict, out: Path):
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(result, indent=2, ensure_ascii=False))
    txt = out.with_suffix(".txt")
    lines = [f"YouTube top (by views) — {result['handle']}", f"URL: {result['url']}", ""]
    for i, v in enumerate(result["videos"], 1):
        lines.append(f"{i:>2}. {v['views'] or '?':>10}  [{v['duration'] or '?'}]  "
                     f"{v['title']}   ({v['age'] or '?'})")
    if result["notes"]:
        lines += ["", "=== Notes ==="] + result["notes"]
    txt.write_text("\n".join(lines))
    return txt


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("channel", help="Channel handle (@name) or URL")
    ap.add_argument("-n", "--num", type=int, default=12, help="How many top videos (default 12)")
    ap.add_argument("--show", action="store_true", help="Run with a visible browser (debug)")
    ap.add_argument("-o", "--out", type=Path, default=None, help="Output JSON path")
    args = ap.parse_args()

    handle = normalize_handle(args.channel)
    out = args.out or (SCRATCH / f"youtube_{handle.lstrip('@').lower()}.json")
    print(f"Fetching top videos for {handle} ...")
    result = fetch(handle, args.num, headless=not args.show)
    txt = write_outputs(result, out)
    print(f"  videos_parsed={len(result['videos'])}")
    for note in result["notes"]:
        print(f"  NOTE: {note}")
    print(f"  -> {out}\n  -> {txt}")


if __name__ == "__main__":
    main()
