---
name: simplifai-design
description: >
  Use this skill to generate well-branded interfaces, social media mockups, and visual assets for
  Simplifai — an AI company helping small business owners build simple, sustainable marketing teams.
  Trigger whenever the user asks to create, design, or mock up anything visual for Simplifai itself
  (not for Simplifai's clients). Contains brand colors, typography, spacing, shadows, radii, and logo assets.
user-invocable: true
metadata:
  version: 1.2.0
---

## Maintenance Note

When this skill is edited, bump the version in the frontmatter — minor version for tweaks (1.0.0 → 1.1.0), major version for behavioural changes (1.0.0 → 2.0.0).

---

## Design System Location

All design tokens, brand assets, and implementation files live in:

```
brand-guidelines/simplifai/
├── colors_and_type.css          ← All CSS custom properties (import this)
├── assets/
│   ├── logo-2026/                  ← CURRENT logo set ("Stack" mark) — SVG + transparent PNG
│   │   ├── simplifai-lockup-horizontal.svg        ← Primary lockup (light bg)
│   │   ├── simplifai-lockup-horizontal-white.svg  ← Primary lockup (coral/dark bg)
│   │   ├── simplifai-lockup-stacked.svg           ← Vertical lockup (tight/square)
│   │   ├── simplifai-icon.svg                      ← Standalone icon, full colour
│   │   ├── simplifai-icon-white.svg               ← Standalone icon, white
│   │   └── simplifai-icon-mono.svg               ← Standalone icon, one-colour
│   └── (DEPRECATED) SimplifaiTransparent.png / SimplifaiWhite.png / SimplifaiYellow.png ← old blob logo, do not use
```

Prefer the `.svg` files (vector, wordmark outlined to paths). Each has a matching transparent `.png` for tools that need raster.

**Always read `brand-guidelines/simplifai/colors_and_type.css` before generating any visual output.**

---

## Brand at a Glance

**Simplifai** is an AI partner for small business owners who want to run their own marketing — credibly, consistently, in a few hours a week. The brand is warm, playful, and approachable — designed to make AI feel friendly and accessible to non-technical founders.

**Vibe:** Duolingo meets Mailchimp — encouraging, a little playful, never condescending.

---

## Color System

| Token | Hex | Role |
|---|---|---|
| `--color-coral` | `#ff7a59` | Primary brand — hero backgrounds, energetic CTAs |
| `--color-purple` | `#8a4fff` | Logo type, interactive elements, CTA buttons |
| `--color-yellow` | `#ffc857` | Secondary accent, highlights, success, blob fills |
| `--color-blue` | `#4a90e2` | Info, secondary actions, data contexts |
| `--color-bg` | `#f5f3ff` | Subtle background tint (purple-shifted white) |
| `--color-text-primary` | `#1a1a2e` | Body text, dark backgrounds |

---

## Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Display / H1 | Poppins | 800 | 56–72px |
| H2 | Plus Jakarta Sans | 700 | 32–40px |
| H3 | Plus Jakarta Sans | 600 | 24px |
| Body | Plus Jakarta Sans | 400 | 16px |
| Label | Plus Jakarta Sans | 700 uppercase | 12–14px |

Google Fonts import:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
```

---

## Shapes & Motifs

- **Blob shapes** — organic, irregular SVG/CSS rounded shapes; the defining visual motif
- **Floating circles** — small decorative dots scattered around blobs; yellow or white
- **Bird-feet / flame marks** — golden accent beneath the logo (penguin energy)
- **Corner radii** — very rounded throughout: buttons are pill (9999px), cards are 16–24px
- **Shadows** — purple-tinted, soft: `0 4px 24px rgba(138,79,255,0.12)`

---

## Component Defaults

### Buttons
- **Primary (coral):** `background: #ff7a59; color: #fff; border-radius: 9999px; box-shadow: 0 4px 16px rgba(255,122,89,0.30)`
- **Action (purple):** `background: #8a4fff; color: #fff; border-radius: 9999px; box-shadow: 0 4px 24px rgba(138,79,255,0.35)`
- **Highlight (yellow):** `background: #ffc857; color: #1a1a2e; border-radius: 9999px`
- Font: Poppins 600, sentence case

### Cards
- `background: #fff; border-radius: 16–24px; padding: 24px; box-shadow: 0 4px 24px rgba(138,79,255,0.10)`

### Tags / Pill labels
- `border-radius: 9999px; font: Plus Jakarta Sans 700 uppercase; letter-spacing: 0.08em`

---

## Social Media Mockup Standards

### Instagram square (1080×1080px)
- Coral `#ff7a59` hero background for high-impact posts
- Large bold Poppins headline, white
- Yellow `#ffc857` accent on key phrase
- Purple pill CTA at bottom
- Organic blob shapes (white/10–12% opacity) top-right; yellow blob (20% opacity) bottom-left
- Floating dots scattered (white 20–28% opacity, yellow 30–38% opacity)
- Simplifai logo top-left (110px, border-radius 18px)

### Content voice in visuals
- Warm and direct — not corporate
- One clear idea per post
- Sentence case everywhere
- Yellow highlights the emotional hook; purple drives action

---

## Logo Usage

The current mark is **"Stack"** — three layered rounded tiles (yellow → coral → purple, back to front) with knockout gaps, paired with a lowercase Poppins 800 wordmark ("simplif" dark + "ai" coral accent).

| Background | Use |
|---|---|
| Light / neutral / white | `logo-2026/simplifai-lockup-horizontal.svg` — primary lockup |
| Coral `#ff7a59` / dark | `logo-2026/simplifai-lockup-horizontal-white.svg` — white lockup |
| Tight / square space | `logo-2026/simplifai-lockup-stacked.svg` — vertical lockup |
| App icon / favicon / avatar | `logo-2026/simplifai-icon.svg` (or `-white` on coral/dark) |
| One-colour print / engraving | `logo-2026/simplifai-icon-mono.svg` |

**Clearspace:** keep ≥ one tile-width of space around the mark. **Min size:** icon down to 16px; full lockup ≥ ~140px wide. Don't recolour, squash, or rotate the mark.

### Social profile & cover assets (solid-background PNGs, in `logo-2026/`)

Pre-rendered, opaque-background exports for social profiles and covers — use these instead of compositing the transparent logo onto a coloured box.

| File (in `logo-2026/`) | Size | Use |
|---|---|---|
| `simplifai-profile-icon-{coral,purple,navy,white,light,yellow}.png` | 1080×1080 | **Profile pictures** (FB/IG/LinkedIn). Icon centred inside the circular crop. Coral = primary. |
| `simplifai-profile-lockup-{coral,purple,white,light}.png` | 1080×1080 | Profile pictures with the wordmark — use only where the avatar renders large. |
| `simplifai-fb-cover-{coral,light}.png` | 1640×856 | Facebook page cover. Logo sits in the mobile safe zone. |

Source builds + the square exporter: `content/drafts/DRAFT_simplifai_profile-pics*_2026-06-26.html`, `DRAFT_simplifai_fb-cover_2026-06-26.html`, and `content/drafts/export_square.py`.

---

## Your Workflow

1. Read `brand-guidelines/simplifai/colors_and_type.css` for all tokens.
2. Identify the asset type (Instagram post, carousel slide, web component, etc.).
3. Apply the correct background pattern for the context (coral for hero/social, `#f5f3ff` for content).
4. Use Poppins for headlines and Plus Jakarta Sans for body/labels.
5. Add blob shapes and floating dots as decorative layer.
6. Embed the relevant logo asset (base64 or relative path from `brand-guidelines/simplifai/assets/`).
7. Save output to `content/drafts/` using naming convention: `DRAFT_simplifai_[type]_[YYYY-MM-DD].html`
8. Disclose AI assistance in the post copy or as a caption note (Simplifai practice).
