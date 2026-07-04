# Content

All content production lives here, **organised by month**, one folder per post.

```
content/
  YYYY-MM/                              ← month bucket (e.g. 2026-06/)
    STATUS_simplifai_[slug]_YYYY-MM-DD/ ← one folder per post
      ...[slug]_YYYY-MM-DD.html         ← the build file (carousels & static posts)
      ...[slug]_caption_YYYY-MM-DD.md   ← the caption
      slides/                           ← exported PNGs (slide-01.png …)
  _scripts/                             ← shared tooling (export_slides.py, etc.)
  _archive/                             ← superseded renders / retired assets
```

## Conventions

- **Month folder** (`YYYY-MM/`) is the top-level bucket, taken from the post's date.
- **One folder per post**, named `STATUS_simplifai_[slug]_YYYY-MM-DD/`. The `STATUS_`
  prefix tracks where the post is in the pipeline:
  - `DRAFT_` — work in progress
  - `APPROVED_` — approved, ready to schedule
  - `PUBLISHED_` — live/posted (rename the folder in place once it goes out)
- Inside each post folder: the `.html` build file, the `_caption_` markdown, and a
  `slides/` subfolder for exported PNGs. Reels and script-only posts hold just their
  `.md` files.
- A post moving status is a **folder rename** (`DRAFT_…` → `APPROVED_…`), not a move
  between directories.

## Naming

`STATUS_simplifai_[platform/type]-[slug]_YYYY-MM-DD`
Example: `APPROVED_simplifai_carousel-ai-roundup_2026-06-22/`

Dates are always `YYYY-MM-DD`.

## Tooling

- [`_scripts/export_slides.py`](_scripts/export_slides.py) — canonical Playwright
  exporter. Pass the HTML path; use `-o <post-folder>/slides` to write PNGs into the
  post's `slides/` folder. Auto-detects slide count from `id="slide-N"` elements.
- `_scripts/export_square.py`, `_scripts/export_guide_pdf.py` — format-specific variants.
