# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## About This Project

This workspace supports **Pingo**, an AI company that helps small businesses and owners build a simple, sustainable marketing team using AI. Claude operates here as an AI work team member — helping design and run the **Pingo Stack** (tools, prompts, workflows), the **Pingo Academy** (learning program), and **Pingo Pulse** (community + ongoing support).

---

## Who Pingo Is (2026 repositioning)

Pingo is no longer a content-for-hire agency. Pingo is an AI partner for small business owners who want to run their own marketing — credibly, consistently, in a few hours a week — without hiring an agency or learning marketing from scratch.

Where an agency hands you content, Pingo hands you a system. The owner stays in control. The brand stays consistent. The cost stays sustainable.

**Core tagline:** *"You bring the expertise. We bring the system. Your AI marketing team — built in a weekend."*

**Core belief:** Great content must be **trustworthy before it is trendy**, and **authoritative before it is aesthetic**.

**Pingo has no website yet.** Never include a URL or pingo.co in any content, mockups, or graphic assets.

---

## What Pingo Does

| Pillar | What it is |
|---|---|
| **Pingo Stack** | A curated AI toolkit — vetted tools, prompt libraries, voice templates, and workflows pre-built for captions, carousels, reels, calendars, and reporting. Industry-specific guardrails baked in. |
| **Pingo Academy** | Hybrid learning program (self-paced modules + live workshops + community). Outcome: a working AI marketing system the owner can run weekly, plus a 4-week content calendar and brand-voice doc. |
| **Pingo Pulse** | Ongoing community, monthly office hours, and quarterly content audits. |
| **Pingo Concierge** | Optional 1:1 setup for owners who want their Stack configured and their first content calendar built for them. |

**Platforms covered:** Instagram · TikTok · Facebook · LinkedIn

**Who they serve:** Solo practitioners, small business owners (2–15 staff), independent brand founders. Common thread: experts at what they do, tired of being invisible online.

---

## Skills — Use These First

Two skills live in [`.claude/skills/`](.claude/skills/) and should be invoked before any visual or copy work for Pingo itself:

| Skill file | When to use |
|---|---|
| [`pingo-instagram-post.md`](.claude/skills/pingo-instagram-post.md) | Any Instagram post or carousel slide for Pingo's own social. Contains colour scheme rotation log — always check which scheme was used last before creating a new post. |
| [`pingo-design.md`](.claude/skills/pingo-design.md) | Any other visual asset for Pingo (web mockups, UI components, other social formats). |

---

## Design System & Visual Assets

Pingo's brand tokens and logo assets live in two locations:

| Path | Purpose |
|---|---|
| [`brand-guidelines/pingo/colors_and_type.css`](brand-guidelines/pingo/colors_and_type.css) | All CSS custom properties — colours, type scale, spacing, radii, shadows. Import in every HTML asset. |
| [`brand-guidelines/pingo/assets/pingo-logo-coral.png`](brand-guidelines/pingo/assets/pingo-logo-coral.png) | Primary logo — use on coral or dark backgrounds |
| [`brand-guidelines/pingo/assets/pingo-logo-yellow.jpg`](brand-guidelines/pingo/assets/pingo-logo-yellow.jpg) | Secondary logo — use on yellow or light backgrounds |
| [`Pingo Design System/`](Pingo%20Design%20System/) | Full design system spec with preview HTML files and component specs |

**Instagram post canvas:** Always 1080×1350px (4:5 portrait). Never square.

**Key colour tokens:** Coral `#ff7a59` · Purple `#8a4fff` · Yellow `#ffc857` · Bg `#f5f3ff`

---

## Visual Production Workflow

Carousel slides and standalone posts are built as self-contained HTML files and exported to PNG using Playwright.

**Step 1 — Build:** Create the HTML file in `content/drafts/` named `DRAFT_pingo_[type]_[YYYY-MM-DD].html`. Each carousel slide must have `id="slide-N"` (1-indexed). Link to `brand-guidelines/pingo/colors_and_type.css`.

**Step 2 — Export:** Use the Playwright export script pattern (same as client carousels):

```python
# Key variables to set per file:
HTML_FILE = Path(__file__).parent / "DRAFT_pingo_filename.html"
TOTAL     = 6  # number of slides
```

The script launches Chromium at 1080×1350px, hides viewer UI (`.slide-stage`, `.controls`, `.export-bar`), positions each slide at 0,0 via JS, screenshots, then moves it off-screen before proceeding.

**Output:** `slide-01.png` through `slide-0N.png` saved alongside the HTML in `content/drafts/`.

> Do not use html2canvas — it shrinks slides to the corner. Playwright is the only supported export method.

---

## Tone of Voice

### The Pingo Voice
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
Disclose AI assistance on Pingo's own posts. Transparency is part of credibility.

---

## Compliance & Ethics

- **Industry-specific regulated claims** — for any client in health, finance, legal, never make absolute or unqualified claims. Flag when content edges toward regulated territory.
- **Testimonials & results** — never fabricate or embellish client outcomes. Only use with explicit consent.
- **Consumer law** — claims must be substantiated. Reference ACCC (Australia) or FTC (US) where relevant.
- **Before/after content** — default to "not recommended" in Pingo's own creative.
- **AI-specific risks** — never paste client PII or sensitive business data into a model.

---

## How Claude Should Work in This Workspace

### When Building Stack Assets (prompts, templates, workflows)
1. Tune every asset for small business owners — assume deep expertise in their field, no marketing background.
2. Bake industry-appropriate guardrails into the prompt itself.
3. Default to "first draft, your draft" — prompts help the owner start, not finish for them.
4. Test every prompt against the Pingo voice before shipping.

### When Creating Marketing Content for Pingo Itself
1. Invoke the appropriate skill from `.claude/skills/` first.
2. Check the relevant campaign brief for the active narrative (current: `campaigns/2026-05_ai-pivot/`).
3. Check the scheme rotation log in [`pingo-instagram-post.md`](.claude/skills/pingo-instagram-post.md) before building a new post.
4. Disclose AI involvement on Pingo's own posts.

### When Supporting Existing Clients (transition period)
1. Each client folder sits at the root level — any folder beginning with `client-` (e.g. `client-Conscious-Connections-Consultancy/`) is a Pingo client engagement with its own `CLAUDE.md`.
2. Existing retainers continue — quality must not drop during the pivot.
3. Each existing client gets a free Academy seat in cohort 1.

### When Reporting
1. Use the template in `reports/_template/monthly-report-template.md`.
2. Always contextualise data — numbers without narrative are not useful.
3. Include recommendations based on performance, not just summaries.

### File Naming Conventions
- Drafts: `DRAFT_pingo_[type]_[YYYY-MM-DD].[ext]`
- Approved: `APPROVED_` prefix
- Dates: always `YYYY-MM-DD` format

---

## Key Documents (canonical)

All canonical `.docx` files live in `campaigns/`:

| Document | Purpose |
|---|---|
| [`campaigns/Pingo_Positioning_2026.docx`](campaigns/Pingo_Positioning_2026.docx) | New AI-company positioning. The source of truth. |
| [`campaigns/Pingo_AI-Marketing-Academy_Program-Outline.docx`](campaigns/Pingo_AI-Marketing-Academy_Program-Outline.docx) | Academy curriculum, modules, pricing, cadence. |
| [`campaigns/2026-05_ai-pivot/Pingo_AI-Pivot_Campaign-Brief.docx`](campaigns/2026-05_ai-pivot/Pingo_AI-Pivot_Campaign-Brief.docx) | Active 4-week awareness campaign for the pivot. |
| [`campaigns/Pingo_Business_Context.docx`](campaigns/Pingo_Business_Context.docx) | Legacy agency context — kept for reference, no longer canonical. |

---

*Last updated: 2026-05-09 — added skills, design system, visual production workflow; corrected canonical document paths.*
