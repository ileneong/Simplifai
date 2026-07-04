"""Fetch live ads for a brand from the Meta Ad Library via Playwright + Chromium.

The Meta Ad Library is a JavaScript shell — WebFetch and plain HTTP get nothing.
A headless browser renders it, so this script loads the library for a brand,
waits for ad cards to appear, scrolls to load a batch, and dumps the visible ad
text (with launch dates and active-ad count) to a JSON + readable text file that
the simplifai-competitor-ads-research skill then reads.

RECOMMENDED — ad-id mode (no login, automated):
    # The single-ad permalink (?id=<LibraryID>) renders WITHOUT a login, and it also
    # lists the advertiser's OTHER active ads — so one id yields a whole angle set.
    # Grab any one of the competitor's ad permalinks (open the Ad Library in any
    # browser, click an ad, "Link to ad" / copy the ?id=... URL), then:
    python3 fetch_meta_ads.py --ad-id "https://www.facebook.com/ads/library/?id=1276696327884014"
    python3 fetch_meta_ads.py --ad-id 1276696327884014        # bare id also works

Alternative — paste mode (no login):
    # In your own logged-in browser, open the competitor, click the advertiser,
    # scroll, Select All (Cmd+A) > Copy into a .txt, then:
    python3 fetch_meta_ads.py "Jasper" --country US --paste ~/Desktop/jasper-ads.txt

Last resort — live search fetch (needs the script logged in; often blocked):
    python3 fetch_meta_ads.py --login                    # one-time sign-in into .fb-profile
    python3 fetch_meta_ads.py "Jasper" --country US --page-id 123456789
    # Without a session the search view returns a generic, unscoped feed.

IMPORTANT — keyword vs. page search:
    Plain keyword search (q=) returns EVERY ad mentioning the term. For an ad
    *platform* brand (e.g. GoHighLevel), that floods results with the platform's
    CUSTOMERS' ads, not the brand's own. For a clean teardown of a competitor's
    OWN ads, pass --page-id. Find the id: search the brand in the Ad Library UI,
    click the advertiser, copy view_all_page_id=<id> from the URL. A keyword run
    also reports "advertiser_page_ids_seen" to help you grab the right id.

Output (default): research/_scratch/meta-ads_<slug>_<country>.json  (+ .txt)
Each ad record: { "text", "dates", "cta" } as far as the DOM exposes.

This is best-effort scraping of a public page. The Ad Library DOM changes often;
if a run returns 0 ads for a brand you can see ads for in a browser, the selectors
below need refreshing. The script ALWAYS reports what it could and couldn't read
so the skill can log coverage gaps honestly rather than fabricate.
"""
from __future__ import annotations

import argparse
import json
import re
import time
from pathlib import Path

from playwright.sync_api import sync_playwright, TimeoutError as PWTimeout

LIBRARY_Q = (
    "https://www.facebook.com/ads/library/"
    "?active_status=active&ad_type=all&country={country}&q={q}&media_type=all"
)
# Page-scoped search: returns ONLY this advertiser's ads (no platform-customer noise).
LIBRARY_PAGE = (
    "https://www.facebook.com/ads/library/"
    "?active_status=active&ad_type=all&country={country}&view_all_page_id={page_id}&media_type=all"
)
SCRATCH = Path(__file__).resolve().parents[1] / "_scratch"
# Dedicated Playwright profile — log into Facebook ONCE here (via --login) and the
# session persists for all future runs. NOT your real Chrome profile (kept separate
# so Chrome needn't be closed). Gitignored. Logged-in state is what makes the Ad
# Library actually scope results to the brand instead of returning a generic feed.
PROFILE = Path(__file__).resolve().parent / ".fb-profile"
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
      "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36")


def slugify(s: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def open_context(p, headless: bool):
    """Persistent logged-in context. Reuses the .fb-profile session cookies."""
    return p.chromium.launch_persistent_context(
        str(PROFILE),
        headless=headless,
        viewport={"width": 1400, "height": 1800},
        locale="en-US",
        user_agent=UA,
        args=["--disable-blink-features=AutomationControlled"],
    )


def is_logged_in(ctx) -> bool:
    return any(c["name"] == "c_user" for c in ctx.cookies())


def login(timeout_s: int = 240):
    """Open a visible browser, let the user log into Facebook, persist the session."""
    PROFILE.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as p:
        ctx = open_context(p, headless=False)
        page = ctx.pages[0] if ctx.pages else ctx.new_page()
        page.goto("https://www.facebook.com/login", wait_until="domcontentloaded")
        print(f"A browser window opened. Log into Facebook there.\n"
              f"Waiting up to {timeout_s}s for login to complete ...")
        deadline = time.time() + timeout_s
        while time.time() < deadline:
            if is_logged_in(ctx):
                print("Login detected — session saved to .fb-profile. You can close the window.")
                page.wait_for_timeout(1500)
                ctx.close()
                return True
            time.sleep(3)
        print("Timed out waiting for login. Re-run --login and finish signing in.")
        ctx.close()
        return False


def parse_ad_text(text: str) -> list[dict]:
    """Parse ads from text COPIED out of a logged-in Ad Library page (no scraping).

    Workflow for the user: open the competitor in the Ad Library in your own browser
    (where you're already logged in), scroll to load ads, Select All (Cmd+A), Copy,
    paste into a .txt file, then run with --paste. Each ad block is anchored on the
    'Library ID' line; surrounding chrome without a Library ID is ignored.
    """
    chunks = re.split(r"(?=Library ID)", text)
    ads = []
    seen = set()
    for chunk in chunks:
        if "Library ID" not in chunk:
            continue
        raw = chunk.strip()
        idm = re.search(r"Library ID:?\s*(\d+)", raw)
        ad_id = idm.group(1) if idm else raw[:40]
        if ad_id in seen:
            continue
        seen.add(ad_id)
        dates = re.findall(r"(?:Started running on|Active|Inactive)[^\n]*\d{4}", raw)
        cta = re.findall(r"(Learn More|Sign Up|Shop Now|Book Now|Get Offer|Contact Us|Subscribe|Download|Apply Now|Get Quote|Send Message|Watch More)", raw)
        ads.append({"text": raw, "dates": dates, "cta": list(dict.fromkeys(cta))})
    return ads


def from_paste(brand: str, country: str, paste_file: Path) -> dict:
    text = paste_file.read_text(errors="ignore")
    ads = parse_ad_text(text)
    result = {"brand": brand, "country": country, "source": f"paste:{paste_file.name}",
              "logged_in": "user-browser", "active_count": len(ads), "ads": ads, "notes": []}
    if not ads:
        result["notes"].append(
            "No 'Library ID' blocks found in the pasted file. Make sure you copied the "
            "ad results (Select All on the Ad Library page after ads loaded), not the empty shell."
        )
    return result


AD_PERMALINK = "https://www.facebook.com/ads/library/?id={ad_id}"
# Chrome lines to strip from a captured single-ad page.
CHROME_LINES = {
    "System status", "Link to ad", "Close", "Open Drop-down", "See ad details",
    "EU transparency", "Platforms", "Sponsored", "This ad is from a URL link",
    "Ad Library APIAbout ads and data usePrivacyTermsCookies",
    "Meta © 2026 | English (UK)", "Filters", "Ad Library",
}


def fetch_by_id(ad_id: str, headless: bool = True) -> dict:
    """Fetch a single ad by its Library ID. The ?id= permalink renders WITHOUT a
    login (unlike the search/page views), so this is the dependable automated path:
    grab an ad's Library ID from the Ad Library in any browser, pass it here. The
    page also lists the advertiser's other current creatives, which often gives a
    whole angle set from one id."""
    url = AD_PERMALINK.format(ad_id=ad_id)
    result: dict = {"ad_id": ad_id, "url": url, "advertiser": None,
                    "dates": [], "raw": "", "notes": []}
    with sync_playwright() as p:
        b = p.chromium.launch(headless=headless)
        pg = b.new_page(locale="en-US", user_agent=UA,
                        viewport={"width": 1400, "height": 1800})
        try:
            pg.goto(url, wait_until="domcontentloaded", timeout=45000)
        except PWTimeout:
            result["notes"].append("Page load timed out.")
            b.close()
            return result
        pg.wait_for_timeout(6000)
        for label in ("Allow all cookies", "Decline optional cookies", "Only allow essential cookies"):
            try:
                btn = pg.get_by_role("button", name=label)
                if btn.count():
                    btn.first.click(timeout=2000)
                    pg.wait_for_timeout(1500)
                    break
            except Exception:
                pass
        pg.wait_for_timeout(1500)
        body = pg.inner_text("body")
        b.close()

    if "Library ID" not in body:
        result["notes"].append("No ad content rendered — id may be invalid or the ad is down.")
        result["raw"] = body[:2000]
        return result
    am = re.search(r"\n([A-Za-z0-9.,'&\- ]{2,40})\nSponsored\n", body)
    if am:
        result["advertiser"] = am.group(1).strip()
    result["dates"] = re.findall(r"(?:Started running on|Active|Inactive)[^\n]*\d{4}", body)
    # Keep meaningful lines: drop chrome and bare separators.
    kept = [ln.strip() for ln in body.splitlines()
            if ln.strip() and ln.strip() not in CHROME_LINES and ln.strip() != "​"]
    result["raw"] = "\n".join(kept)
    return result


def fetch(brand: str, country: str, scrolls: int, headless: bool, page_id: str | None) -> dict:
    if page_id:
        url = LIBRARY_PAGE.format(country=country, page_id=page_id)
    else:
        url = LIBRARY_Q.format(country=country, q=brand.replace(" ", "%20"))
    result: dict = {"brand": brand, "country": country, "page_id": page_id, "url": url,
                    "logged_in": None, "active_count": None, "ads": [], "notes": []}
    if not page_id:
        result["notes"].append(
            "Keyword search (no --page-id): results may include OTHER advertisers' ads "
            "that mention the term. For a platform/tool brand, pass --page-id for clean results."
        )

    with sync_playwright() as p:
        ctx = open_context(p, headless=headless)
        result["logged_in"] = is_logged_in(ctx)
        if not result["logged_in"]:
            result["notes"].append(
                "NOT logged in — the Ad Library returns a generic, unscoped feed without a "
                "session. Run:  python3 research/_scripts/fetch_meta_ads.py --login  first."
            )
        page = ctx.pages[0] if ctx.pages else ctx.new_page()
        try:
            page.goto(url, wait_until="domcontentloaded", timeout=45000)
        except PWTimeout:
            result["notes"].append("Page load timed out at 45s.")
            ctx.close()
            return result

        page.wait_for_timeout(5000)  # let the SPA hydrate

        # Dismiss the cookie/login dialog if present (it blocks rendering).
        for label in ("Allow all cookies", "Decline optional cookies", "Only allow essential cookies"):
            try:
                btn = page.get_by_role("button", name=label)
                if btn.count():
                    btn.first.click(timeout=2000)
                    page.wait_for_timeout(1500)
                    break
            except Exception:
                pass

        # Pull the "~N results" count if shown. The library prints it as
        # "~123 results" / "About 123 results" near the top of the list.
        try:
            body_text = page.inner_text("body", timeout=5000)
            m = re.search(r"~?\s*([\d,]+)\s+results?", body_text, re.I)
            if m:
                result["active_count"] = int(m.group(1).replace(",", ""))
        except Exception:
            result["notes"].append("Could not read results count.")

        # Scroll to load a batch of ad cards.
        for _ in range(scrolls):
            page.mouse.wheel(0, 2400)
            page.wait_for_timeout(1800)

        # Ad cards: each contains a "Library ID:" line plus the creative copy and a
        # "Started running on" date. The innermost div matching "Library ID" is just
        # the ID label, so from each such leaf we climb to the nearest ancestor that
        # is the whole card (contains "Library ID" AND the date/sponsored line and is
        # reasonably long), then capture that ancestor's text. Dedupe by Library ID.
        blocks = page.evaluate(
            """() => {
                const out = [];
                const seenIds = new Set();
                const all = [...document.querySelectorAll('div')];
                // Leaves: smallest divs whose own text mentions Library ID.
                const leaves = all.filter(n => {
                    const t = (n.innerText || '');
                    if (!/Library ID/i.test(t)) return false;
                    return ![...n.querySelectorAll('div')].some(c => /Library ID/i.test(c.innerText || ''));
                });
                for (const leaf of leaves) {
                    let node = leaf, card = leaf;
                    // Climb up to 10 ancestors; pick the first that is the FULL card.
                    // A full card contains the Library ID, the "Sponsored" marker that
                    // sits above the creative, and the body copy (so it's long). The
                    // metadata-only sub-block lacks "Sponsored", which forces the climb
                    // past it to the real card root.
                    for (let i = 0; i < 10 && node; i++) {
                        const t = node.innerText || '';
                        if (/Library ID/i.test(t) && /Sponsored/i.test(t) && t.length > 120) {
                            card = node;
                            break;
                        }
                        node = node.parentElement;
                    }
                    const text = (card.innerText || '').trim();
                    const idm = text.match(/Library ID:?\\s*(\\d+)/i);
                    const id = idm ? idm[1] : text.slice(0, 40);
                    if (seenIds.has(id)) continue;
                    seenIds.add(id);
                    out.push(text);
                }
                return out;
            }"""
        )

        # Surface advertiser page-ids seen in links, so keyword runs hand back the
        # page-id you'd want to reuse for a clean page-scoped fetch next time.
        try:
            page_ids = page.eval_on_selector_all(
                "a[href*='view_all_page_id']",
                """els => [...new Set(els.map(e => {
                    const m = (e.getAttribute('href')||'').match(/view_all_page_id=(\\d+)/);
                    return m ? m[1] : null;
                }).filter(Boolean))]"""
            )
            if page_ids:
                result["advertiser_page_ids_seen"] = page_ids[:25]
        except Exception:
            pass

        for raw in blocks:
            dates = re.findall(r"(?:Started running on|Active|Inactive).*?\d{4}", raw)
            cta = re.findall(r"(Learn More|Sign Up|Shop Now|Book Now|Get Offer|Contact Us|Subscribe|Download|Apply Now)", raw)
            result["ads"].append({
                "text": raw,
                "dates": dates,
                "cta": list(dict.fromkeys(cta)),
            })

        if not result["ads"]:
            result["notes"].append(
                "No ad cards parsed. Either the brand has no active ads in this "
                "country, the page needed a login wall, or the DOM selectors are stale."
            )
        ctx.close()
    return result


def write_outputs(result: dict, out: Path):
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(result, indent=2, ensure_ascii=False))
    txt = out.with_suffix(".txt")
    lines = [
        f"Meta Ad Library — {result['brand']} ({result['country']})",
        f"Source: {result.get('url') or result.get('source', 'n/a')}",
        f"Active ads (reported by page): {result['active_count']}",
        f"Ad cards parsed: {len(result['ads'])}",
        "",
    ]
    for i, ad in enumerate(result["ads"], 1):
        lines += [f"--- Ad {i} ---", ad["text"], ""]
    if result["notes"]:
        lines += ["=== Coverage notes ==="] + result["notes"]
    txt.write_text("\n".join(lines))
    return txt


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("brand", nargs="?", help="Brand / Meta Page name to search")
    ap.add_argument("--login", action="store_true",
                    help="One-time: open a visible browser to log into Facebook; the session is "
                         "saved to .fb-profile and reused by all later runs.")
    ap.add_argument("--paste", type=Path, default=None,
                    help="Parse ads from a text file you copied out of the Ad Library in your own "
                         "logged-in browser (Select All > Copy > paste into a .txt). No login/scraping.")
    ap.add_argument("--ad-id", default=None,
                    help="Fetch a single ad by its Library ID (or paste the full ?id=... URL). "
                         "This permalink renders without login — the dependable automated path.")
    ap.add_argument("--country", default="AU", help="Country code (default AU; try US for US-heavy brands)")
    ap.add_argument("--page-id", default=None,
                    help="Advertiser Page ID for a clean, page-scoped search (recommended for "
                         "platform/tool brands). Find it: search the brand in the Ad Library UI, "
                         "click the advertiser, copy view_all_page_id=<id> from the URL.")
    ap.add_argument("--scrolls", type=int, default=4, help="How many times to scroll for more ads (default 4)")
    ap.add_argument("--show", action="store_true", help="Run with a visible browser (debug)")
    ap.add_argument("-o", "--out", type=Path, default=None, help="Output JSON path")
    args = ap.parse_args()

    if args.login:
        login()
        return

    if args.ad_id:
        ad_id = args.ad_id
        m = re.search(r"[?&]id=(\d+)", ad_id)
        if m:
            ad_id = m.group(1)
        print(f"Fetching ad {ad_id} ...")
        result = fetch_by_id(ad_id, headless=not args.show)
        out = args.out or (SCRATCH / f"meta-ad_{ad_id}.json")
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(json.dumps(result, indent=2, ensure_ascii=False))
        out.with_suffix(".txt").write_text(
            f"Ad {ad_id} | advertiser: {result['advertiser']} | {result['dates']}\n"
            f"URL: {result['url']}\n\n{result['raw']}"
        )
        print(f"  advertiser={result['advertiser']}  dates={result['dates']}")
        for note in result["notes"]:
            print(f"  NOTE: {note}")
        print(f"  -> {out}\n  -> {out.with_suffix('.txt')}")
        return

    if not args.brand:
        ap.error("brand is required (or pass --login / --ad-id)")

    out = args.out or (SCRATCH / f"meta-ads_{slugify(args.brand)}_{args.country}.json")
    if args.paste:
        print(f"Parsing pasted ads for '{args.brand}' from {args.paste} ...")
        result = from_paste(args.brand, args.country, args.paste)
    else:
        print(f"Fetching Meta Ad Library for '{args.brand}' ({args.country}) ...")
        result = fetch(args.brand, args.country, args.scrolls, headless=not args.show, page_id=args.page_id)
    txt = write_outputs(result, out)
    print(f"  logged_in={result['logged_in']}  active_count={result['active_count']}  "
          f"ads_parsed={len(result['ads'])}")
    for note in result["notes"]:
        print(f"  NOTE: {note}")
    print(f"  -> {out}")
    print(f"  -> {txt}")


if __name__ == "__main__":
    main()
