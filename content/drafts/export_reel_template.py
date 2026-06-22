"""Export the 4 Reel-template frames as 1080x1920 PNGs using Playwright + Chromium."""
from pathlib import Path
from playwright.sync_api import sync_playwright

HTML_FILE = Path(__file__).parent / "DRAFT_pingo_reel-template_2026-06-01.html"
OUT_DIR   = Path(__file__).parent / "reel-template-frames"
BG_DIR    = Path(__file__).parent / "reel-template-frames" / "backgrounds"
TOTAL     = 4
W, H      = 1080, 1920


def main():
    OUT_DIR.mkdir(exist_ok=True)
    url = HTML_FILE.as_uri()
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": W, "height": H})
        page.goto(url, wait_until="networkidle")
        page.wait_for_timeout(2500)  # let webfonts load

        page.evaluate("document.body.style.cssText = 'margin:0;padding:0;background:transparent;overflow:hidden;';")

        # Pass 1 — full reference frames (with safe-zone guides + placeholder text)
        for i in range(1, TOTAL + 1):
            out_path = OUT_DIR / f"reel-template-{i:02d}.png"
            page.evaluate(f"""
                document.querySelectorAll('.frame').forEach(f => f.style.display='none');
                const el = document.getElementById('slide-{i}');
                el.style.display='block';
                el.style.position='fixed'; el.style.left='0'; el.style.top='0';
                el.style.width='{W}px'; el.style.height='{H}px'; el.style.zIndex='1';
            """)
            page.wait_for_timeout(250)
            page.screenshot(path=str(out_path), clip={"x": 0, "y": 0, "width": W, "height": H})
            print(f"  Saved {out_path.name}")

        # Pass 2 — upload-ready BACKGROUNDS: hide guides + all editable text/pills,
        # keep only bg colour, accent asterisk, and wordmark. Add your text in Canva.
        BG_DIR.mkdir(exist_ok=True)
        page.evaluate("""
            const s = document.createElement('style');
            s.textContent = '.headline,.support,.kicker,.cta,.safe,.safe-label{display:none !important;}';
            document.head.appendChild(s);
        """)
        for i in range(1, TOTAL + 1):
            out_path = BG_DIR / f"reel-bg-{i:02d}.png"
            page.evaluate(f"""
                document.querySelectorAll('.frame').forEach(f => f.style.display='none');
                const el = document.getElementById('slide-{i}');
                el.style.display='block';
                el.style.position='fixed'; el.style.left='0'; el.style.top='0';
                el.style.width='{W}px'; el.style.height='{H}px'; el.style.zIndex='1';
            """)
            page.wait_for_timeout(200)
            page.screenshot(path=str(out_path), clip={"x": 0, "y": 0, "width": W, "height": H})
            print(f"  Saved backgrounds/{out_path.name}")
        browser.close()
    print(f"\nDone — {TOTAL} reference + {TOTAL} background PNGs saved.")


if __name__ == "__main__":
    main()
