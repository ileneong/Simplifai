"""Export square 1080x1080 tiles (e.g. profile pictures) to PNGs via Playwright + Chromium.

Same mechanics as export_slides.py but square. Slide count auto-detected from id="slide-N".
Output goes to ./<html-stem>-slides/ as slide-01.png, ...

Usage:
    python export_square.py DRAFT_simplifai_profile-pics_2026-06-26.html
"""
from __future__ import annotations

import argparse
from pathlib import Path

from playwright.sync_api import sync_playwright

W, H = 1080, 1080


def export(page, html_file: Path, out_dir: Path, total: int | None):
    page.goto(html_file.as_uri(), wait_until="networkidle")
    page.wait_for_timeout(2500)  # let webfonts load
    page.evaluate("document.body.style.cssText = 'margin:0;padding:0;background:transparent;overflow:hidden;';")
    # hide viewer labels
    page.evaluate("document.querySelectorAll('.label').forEach(e => e.style.display='none');")

    if total is None:
        total = page.evaluate("document.querySelectorAll('[id^=\"slide-\"]').length")
        if total < 1:
            raise SystemExit(f"No elements with id=\"slide-N\" found in {html_file.name}")

    out_dir.mkdir(parents=True, exist_ok=True)
    for i in range(1, total + 1):
        out_path = out_dir / f"slide-{i:02d}.png"
        page.evaluate(f"""
            document.querySelectorAll('.slide').forEach(s => s.style.display='none');
            const el = document.getElementById('slide-{i}');
            el.style.display='flex';
            el.style.position='fixed'; el.style.left='0'; el.style.top='0'; el.style.zIndex='1';
        """)
        page.wait_for_timeout(250)
        page.screenshot(path=str(out_path), clip={"x": 0, "y": 0, "width": W, "height": H})
        print(f"  {out_dir.name}/{out_path.name}")
    return total


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("html", nargs="+", type=Path, help="HTML file(s) to export")
    ap.add_argument("-n", "--slides", type=int, default=None)
    args = ap.parse_args()

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": W, "height": H})
        for html_file in args.html:
            if not html_file.exists():
                raise SystemExit(f"Not found: {html_file}")
            html_file = html_file.resolve()
            out_dir = html_file.parent / f"{html_file.stem}-slides"
            print(f"Exporting {html_file.name} ...")
            n = export(page, html_file, out_dir, args.slides)
            print(f"  -> {n} tile(s) in {out_dir.name}/")
        browser.close()
    print("\nDone.")


if __name__ == "__main__":
    main()
