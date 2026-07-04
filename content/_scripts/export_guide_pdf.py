"""Export the Prompt Like a Pro guide HTML to a print-ready PDF via Playwright.

Uses print_background=True so the coral hero/CTA gradients render in colour
(the previous Chrome export dropped backgrounds -> black/white first & last pages).
Honours the @page A4 rules in the HTML's @media print block.
"""
from pathlib import Path
from playwright.sync_api import sync_playwright

HTML_FILE = Path(__file__).parent / "DRAFT_simplifai_prompt-guide_2026-05.html"
OUT_PDF   = Path(__file__).parent / "DRAFT_simplifai_prompt-guide_2026-05.pdf"


def main() -> None:
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto(HTML_FILE.as_uri(), wait_until="networkidle")
        page.wait_for_timeout(2500)  # let webfonts load
        page.emulate_media(media="print")
        page.pdf(
            path=str(OUT_PDF),
            print_background=True,
            prefer_css_page_size=True,
        )
        browser.close()
    print(f"Wrote {OUT_PDF}")


if __name__ == "__main__":
    main()
