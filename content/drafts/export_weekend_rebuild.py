"""Export the 7 'Weekend Rebuild' carousel slides as 1080x1350 PNGs via Playwright + Chromium."""
from pathlib import Path
from playwright.sync_api import sync_playwright

HTML_FILE = Path(__file__).parent / "DRAFT_pingo_carousel-weekend-rebuild_2026-06-21.html"
OUT_DIR   = Path(__file__).parent / "weekend-rebuild-slides"
TOTAL     = 6
W, H      = 1080, 1350


def main():
    OUT_DIR.mkdir(exist_ok=True)
    url = HTML_FILE.as_uri()
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": W, "height": H})
        page.goto(url, wait_until="networkidle")
        page.wait_for_timeout(2500)  # let webfonts load

        page.evaluate("document.body.style.cssText = 'margin:0;padding:0;background:transparent;overflow:hidden;';")

        for i in range(1, TOTAL + 1):
            out_path = OUT_DIR / f"slide-{i:02d}.png"
            page.evaluate(f"""
                document.querySelectorAll('.slide').forEach(s => s.style.display='none');
                const el = document.getElementById('slide-{i}');
                el.style.display='block';
                el.style.position='fixed'; el.style.left='0'; el.style.top='0';
                el.style.zIndex='1';
            """)
            page.wait_for_timeout(250)
            page.screenshot(path=str(out_path), clip={"x": 0, "y": 0, "width": W, "height": H})
            print(f"  Saved {out_path.name}")
        browser.close()
    print(f"\nDone — {TOTAL} slides saved to {OUT_DIR.name}/")


if __name__ == "__main__":
    main()
