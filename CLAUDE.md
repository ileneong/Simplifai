# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## About This Project

This workspace supports **Simplifai**, an AI company that helps small businesses and owners build a simple, sustainable marketing team using AI. Claude operates here as an AI work team member — helping design and run the **Simplifai Stack** (tools, prompts, workflows), the **Simplifai Academy** (learning program), and **Simplifai Pulse** (community + ongoing support).

---

## Who Simplifai Is (2026 repositioning)

Simplifai is no longer a content-for-hire agency. Simplifai is an AI partner for small business owners who want to run their own marketing — credibly, consistently, in a few hours a week — without hiring an agency or learning marketing from scratch.

Where an agency hands you content, Simplifai hands you a system. The owner stays in control. The brand stays consistent. The cost stays sustainable.

**Core tagline:** *"You bring the expertise. We bring the system. Your AI marketing team — built in a weekend."*

**Core belief:** Great content must be **trustworthy before it is trendy**, and **authoritative before it is aesthetic**.

**Simplifai has no website yet.** Never include a URL or simplifai.co in any content, mockups, or graphic assets.

---

## What Simplifai Does

| Pillar | What it is |
|---|---|
| **Simplifai Stack** | A curated AI toolkit — vetted tools, prompt libraries, voice templates, and workflows pre-built for captions, carousels, reels, calendars, and reporting. Industry-specific guardrails baked in. |
| **Simplifai Academy** | Hybrid learning program (self-paced modules + live workshops + community). Outcome: a working AI marketing system the owner can run weekly, plus a 4-week content calendar and brand-voice doc. |
| **Simplifai Pulse** | Ongoing community, monthly office hours, and quarterly content audits. |
| **Simplifai Concierge** | Optional 1:1 setup for owners who want their Stack configured and their first content calendar built for them. |

**Platforms covered:** Instagram · TikTok · Facebook · LinkedIn

**Who they serve:** Solo practitioners, small business owners (2–15 staff), independent brand founders. Common thread: experts at what they do, tired of being invisible online.

---

## Skills — Use These First

Two skills live in [`.claude/skills/`](.claude/skills/) and should be invoked before any visual or copy work for Simplifai itself:

| Skill file | When to use |
|---|---|
| [`simplifai-instagram-post.md`](.claude/skills/simplifai-instagram-post.md) | Any Instagram post or carousel slide for Simplifai's own social. Contains colour scheme rotation log — always check which scheme was used last before creating a new post. |
| [`simplifai-design.md`](.claude/skills/simplifai-design.md) | Any other visual asset for Simplifai (web mockups, UI components, other social formats). |

---

## Design System & Visual Assets

Simplifai's brand tokens and logo assets live in two locations:

| Path | Purpose |
|---|---|
| [`brand-guidelines/simplifai/colors_and_type.css`](brand-guidelines/simplifai/colors_and_type.css) | All CSS custom properties — colours, type scale, spacing, radii, shadows. Import in every HTML asset. |
| [`brand-guidelines/simplifai/assets/logo-2026/`](brand-guidelines/simplifai/assets/logo-2026/) | **Current logo set ("Stack", 2026).** SVG (vector, wordmark outlined to paths) + transparent PNG. See logo table below. |
| [`Simplifai Design System/`](Simplifai%20Design%20System/) | Full design system spec with preview HTML files and component specs |

### Logo files (canonical — "Stack" mark, layered rounded tiles + lowercase wordmark)

| File (in `assets/logo-2026/`) | Use |
|---|---|
| `simplifai-lockup-horizontal.svg` | **Primary lockup** — icon + wordmark, on light/neutral/white |
| `simplifai-lockup-horizontal-white.svg` | Primary lockup, white — on coral/dark backgrounds |
| `simplifai-lockup-stacked.svg` | Vertical lockup — for tight/square spaces |
| `simplifai-icon.svg` | Standalone icon, full colour — app icons, favicons, avatars |
| `simplifai-icon-white.svg` | Standalone icon, white — on coral/dark |
| `simplifai-icon-mono.svg` | Standalone icon, one-colour — stamps, engraving, single-colour print |

Each `.svg` has a matching transparent `.png`. SVGs are the source of truth (infinitely scalable; wordmark is outlined paths, no font dependency). Source build files: [`content/drafts/simplifai-logo-svg/`](content/drafts/simplifai-logo-svg/) and brand sheet [`content/drafts/DRAFT_simplifai_logo-concept-c-stack_2026-06-26.html`](content/drafts/DRAFT_simplifai_logo-concept-c-stack_2026-06-26.html).

> **Deprecated:** the old blob logo set (`SimplifaiTransparent.png` / `SimplifaiWhite.png` / `SimplifaiYellow.png`) is superseded by the Stack mark above. The old files remain in `assets/` only because earlier rendered content still embeds them — do not use them in new work.

**Instagram post canvas:** Always 1080×1350px (4:5 portrait). Never square.

**Key colour tokens:** Coral `#ff7a59` · Purple `#8a4fff` · Yellow `#ffc857` · Bg `#f5f3ff`

---

## Visual Production Workflow

Carousel slides and standalone posts are built as self-contained HTML files and exported to PNG using Playwright.

**Step 1 — Build:** Create the HTML file in `content/drafts/` named `DRAFT_simplifai_[type]_[YYYY-MM-DD].html`. Each carousel slide must have `id="slide-N"` (1-indexed). Link to `brand-guidelines/simplifai/colors_and_type.css`.

**Step 2 — Export:** Use the Playwright export script pattern (same as client carousels):

```python
# Key variables to set per file:
HTML_FILE = Path(__file__).parent / "DRAFT_simplifai_filename.html"
TOTAL     = 6  # number of slides
```

The script launches Chromium at 1080×1350px, hides viewer UI (`.slide-stage`, `.controls`, `.export-bar`), positions each slide at 0,0 via JS, screenshots, then moves it off-screen before proceeding.

**Output:** `slide-01.png` through `slide-0N.png` saved alongside the HTML in `content/drafts/`.

> Do not use html2canvas — it shrinks slides to the corner. Playwright is the only supported export method.

---

## Tone of Voice

### The Simplifai Voice
- **Warm** — human, approachable, genuine care
- **Credible** — evidence-informed, authoritative
- **Empowering** — motivates action, builds community, educates

### Always Avoid
- Sensationalism or fearmongering
- Unsubstantiated claims or misleading promises
- Empty inspiration (quotes without substance)
- Overly salesy or pushy language
- "AI cringe" — generic, robotic, voice-flattening output

### Every Post Should Do At Least One Of:
1. **Educate** — teach the audience something genuinely useful
2. **Motivate** — inspire meaningful action toward their goals
3. **Build community** — create a sense of belonging and shared values

### Disclosure
Disclose AI assistance on Simplifai's own posts. Transparency is part of credibility.

---

## Compliance & Ethics

- **Industry-specific regulated claims** — for any client in health, finance, legal, never make absolute or unqualified claims. Flag when content edges toward regulated territory.
- **Testimonials & results** — never fabricate or embellish client outcomes. Only use with explicit consent.
- **Consumer law** — claims must be substantiated. Reference ACCC (Australia) or FTC (US) where relevant.
- **Before/after content** — default to "not recommended" in Simplifai's own creative.
- **AI-specific risks** — never paste client PII or sensitive business data into a model.

---

## How Claude Should Work in This Workspace

### When Building Stack Assets (prompts, templates, workflows)
1. Tune every asset for small business owners — assume deep expertise in their field, no marketing background.
2. Bake industry-appropriate guardrails into the prompt itself.
3. Default to "first draft, your draft" — prompts help the owner start, not finish for them.
4. Test every prompt against the Simplifai voice before shipping.

### When Creating Marketing Content for Simplifai Itself
1. Invoke the appropriate skill from `.claude/skills/` first.
2. Check the relevant campaign brief for the active narrative (current: `campaigns/2026-05_ai-pivot/`).
3. Check the scheme rotation log in [`simplifai-instagram-post.md`](.claude/skills/simplifai-instagram-post.md) before building a new post.
4. Disclose AI involvement on Simplifai's own posts.

### When Supporting Existing Clients (transition period)
1. Each client folder sits at the root level — any folder beginning with `client-` (e.g. `client-Conscious-Connections-Consultancy/`) is a Simplifai client engagement with its own `CLAUDE.md`.
2. Existing retainers continue — quality must not drop during the pivot.
3. Each existing client gets a free Academy seat in cohort 1.

### When Reporting
1. Use the template in `reports/_template/monthly-report-template.md`.
2. Always contextualise data — numbers without narrative are not useful.
3. Include recommendations based on performance, not just summaries.

### File Naming Conventions
- Drafts: `DRAFT_simplifai_[type]_[YYYY-MM-DD].[ext]`
- Approved: `APPROVED_` prefix
- Dates: always `YYYY-MM-DD` format

---

## Key Documents (canonical)

All canonical `.docx` files live in `campaigns/`:

| Document | Purpose |
|---|---|
| [`campaigns/Simplifai_Positioning_2026.docx`](campaigns/Simplifai_Positioning_2026.docx) | New AI-company positioning. The source of truth. |
| [`campaigns/Simplifai_AI-Marketing-Academy_Program-Outline.docx`](campaigns/Simplifai_AI-Marketing-Academy_Program-Outline.docx) | Academy curriculum, modules, pricing, cadence. |
| [`campaigns/2026-05_ai-pivot/Simplifai_AI-Pivot_Campaign-Brief.docx`](campaigns/2026-05_ai-pivot/Simplifai_AI-Pivot_Campaign-Brief.docx) | Active 4-week awareness campaign for the pivot. |
| [`campaigns/Simplifai_Business_Context.docx`](campaigns/Simplifai_Business_Context.docx) | Legacy agency context — kept for reference, no longer canonical. |

---

*Last updated: 2026-06-26 — adopted new "Stack" logo (minimal geometric: layered rounded tiles + lowercase wordmark) as the canonical mark; files in `brand-guidelines/simplifai/assets/logo-2026/` (SVG + transparent PNG, wordmark outlined to paths). Old blob set deprecated. Earlier 2026-06-26 — rebranded Pingo → Simplifai across all files, folders, guidelines, skills, and rendered assets. Root project folder intentionally left named "Pingo". Previous: 2026-05-09 — added skills, design system, visual production workflow; corrected canonical document paths.*
