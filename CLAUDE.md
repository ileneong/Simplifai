# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## About This Project

This workspace supports **Simplifai**, an AI company that helps small business owners run their whole business with AI — marketing, yes, but also customer care, bookings, admin, operations, and the everyday work of running the place — simply and sustainably, in a few hours a week. It serves small business owners across sectors, with no single lead industry. Claude operates here as an AI work team member — helping design and run the **Simplifai Stack** (tools, prompts, workflows), the **Simplifai Academy** (learning program), and **Simplifai Pulse** (community + ongoing support).

> **One thing defines the scope of every decision here:** Simplifai is **whole-business** (not marketing-only — marketing is one lane of many). Its tools, prompts, and workflows serve small business owners across sectors, not any single industry. When in doubt, widen the *task* across the business rather than narrowing it to one type of owner. For clients in regulated fields (health, finance, legal), keep the field-appropriate guardrails, but treat no single sector as the default audience.

---

## Who Simplifai Is (2026 repositioning)

Simplifai is no longer a content-for-hire agency. Simplifai is an AI partner for small business owners who want to run their own business credibly, consistently, in a few hours a week, without hiring an agency or learning each new tool from scratch. It started in marketing, and marketing is still the front door, but the system now reaches across the whole business: the content *and* the customer messages, the bookings, the admin, the reporting.

Where an agency hands you content, Simplifai hands you a system. The owner stays in control. The brand stays consistent. The cost stays sustainable.

**Core tagline:** *"You bring the expertise. We bring the system. Your AI work team — built in a weekend."*

**Core belief:** Great content must be **trustworthy before it is trendy**, and **authoritative before it is aesthetic**.

**Simplifai has no website yet.** Never include a URL or simplifai.co in any content, mockups, or graphic assets.

---

## What Simplifai Does

| Pillar | What it is |
|---|---|
| **Simplifai Stack** | A curated AI toolkit — vetted tools, prompt libraries, voice templates, and workflows pre-built across the business: captions, carousels, reels, calendars and reporting, plus customer replies, enquiry triage, bookings, and admin. Guardrails adapt to the owner's sector, with field-appropriate care for regulated industries like health, finance, and legal. |
| **Simplifai Academy** | Hybrid learning program (self-paced modules + live workshops + community). Outcome: a working AI system the owner can run weekly across marketing and day-to-day operations, plus a 4-week content calendar and brand-voice doc. |
| **Simplifai Pulse** | Ongoing community, monthly office hours, and quarterly audits. |
| **Simplifai Concierge** | Optional 1:1 setup for owners who want their Stack configured and their first calendar and workflows built for them. |

**Platforms covered:** Instagram · TikTok · Facebook · LinkedIn

**Who they serve:** Small business owners (typically solo up to about 15 staff) who are experts at their craft but invisible online and buried in admin: solo practitioners and consultants, service businesses, studios and clinics, trades, retailers, and brand founders across sectors. For owners in regulated fields (health, finance, legal), the Stack knows the relevant guardrails (for example TGA, FDA, and mental-health language for health), but no single sector is the lead audience.

---

## Skills — Use These First

Skills live in [`.claude/skills/`](.claude/skills/) and should be invoked before the matching work for Simplifai itself:

| Skill file | When to use |
|---|---|
| [`simplifai-instagram-post.md`](.claude/skills/simplifai-instagram-post.md) | Any Instagram post or carousel slide for Simplifai's own social. Contains colour scheme rotation log — always check which scheme was used last before creating a new post. |
| [`simplifai-design.md`](.claude/skills/simplifai-design.md) | Any other visual asset for Simplifai (web mockups, UI components, other social formats). |
| [`simplifai-trend-research.md`](.claude/skills/simplifai-trend-research.md) | Researching what's new in AI and turning it into owner-ready content. Outputs the weekly intel digest + a carousel brief. |
| [`simplifai-competitor-ads-research.md`](.claude/skills/simplifai-competitor-ads-research.md) | Researching how competitors advertise (Meta Ad Library) to sharpen Simplifai's own ads. Sweeps the curated watch list, outputs a dated competitor-ads digest in `research/digests/`. |
| [`simplifai-competitor-content-research.md`](.claude/skills/simplifai-competitor-content-research.md) | Researching competitors' best-performing organic content (YouTube top videos by views) to sharpen Simplifai's content. Reads the §3 YouTube handles in the watch list, outputs a dated competitor-content digest in `research/digests/`. |
| [`simplifai-weekly-briefing.md`](.claude/skills/simplifai-weekly-briefing.md) | The weekly marketing briefing — fuses the latest digests, both performance trackers, and a pipeline audit into one prioritized plan in `reports/briefings/`, then hands off to the calendar skill. |
| [`simplifai-content-calendar.md`](.claude/skills/simplifai-content-calendar.md) | The week's Sunday-to-Saturday content calendar in `content-calendars/` — organic lane (day-by-day slots) plus an ads lane driven by the ads tracker's scale/refresh/kill decisions. |
| [`simplifai-organic-performance.md`](.claude/skills/simplifai-organic-performance.md) | Logging and reading organic post performance. Owner pastes IG Insights numbers; the skill validates, computes derived rates, and appends to `growth/organic/simplifai_organic-performance-tracker.csv`. Read mode answers "what's working?" honestly (signals need 2–3+ posts). |
| [`simplifai-content-pipeline.md`](.claude/skills/simplifai-content-pipeline.md) | Read-only pipeline audit: stuck drafts, approved-but-unpublished, incomplete folders, rotation-log drift, calendar gaps, unmeasured publishes. Prints a status report in chat; never renames folders. |

## Agents

Agents live in [`.claude/agents/`](.claude/agents/):

| Agent | Role |
|---|---|
| [`ben.md`](.claude/agents/ben.md) | **Ben — marketing operations lead.** Orchestrates the skills above: runs the weekly research sweep, produces the Sunday briefing and content calendar, audits the pipeline, logs performance, and builds draft posts. Invoke with "Ben, ..." (e.g. "Ben, run the weekly sweep"). **Autonomy boundary:** Ben creates `DRAFT_` content only — he never renames folders to `APPROVED_`/`PUBLISHED_`, never publishes, and never invents metrics (numbers come only from the trackers in `growth/` or owner-pasted input). **Scope boundary:** Simplifai's own marketing only — Ben never touches `client-*` folders or mixes client work into Simplifai outputs. His standing Sunday sweep can run hands-off via a scheduled cloud routine, or on demand. |

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

Each `.svg` has a matching transparent `.png`. SVGs are the source of truth (infinitely scalable; wordmark is outlined paths, no font dependency). Source build files live alongside the canonical set in [`brand-guidelines/simplifai/assets/logo-2026/_source-svg/`](brand-guidelines/simplifai/assets/logo-2026/_source-svg/).

> **Deprecated:** the old blob logo set (`SimplifaiTransparent.png` / `SimplifaiWhite.png` / `SimplifaiYellow.png`) is superseded by the Stack mark above. The old files remain in `assets/` only because earlier rendered content still embeds them — do not use them in new work.

**Instagram post canvas:** Always 1080×1350px (4:5 portrait). Never square.

**Key colour tokens:** Coral `#ff7a59` · Purple `#8a4fff` · Yellow `#ffc857` · Bg `#f5f3ff`

---

## Visual Production Workflow

Carousel slides and standalone posts are built as self-contained HTML files and exported to PNG using Playwright.

**Step 1 — Build:** Content is organised by month, one folder per post. Create the post folder at `content/[YYYY-MM]/DRAFT_simplifai_[type]_[YYYY-MM-DD]/` and put the HTML inside it, named `DRAFT_simplifai_[type]_[YYYY-MM-DD].html`. Each carousel slide must have `id="slide-N"` (1-indexed). Link to `brand-guidelines/simplifai/colors_and_type.css`. (See [`content/README.md`](content/README.md) for the full folder convention.)

**Step 2 — Export:** Use the canonical Playwright export script at [`content/_scripts/export_slides.py`](content/_scripts/export_slides.py). It takes the HTML path as an argument, auto-detects slide count from `id="slide-N"` elements, and writes PNGs to a `-slides` dir next to the HTML (use `-o` to target the post's `slides/` folder):

```bash
python content/_scripts/export_slides.py \
  content/[YYYY-MM]/DRAFT_simplifai_[type]_[YYYY-MM-DD]/DRAFT_simplifai_[type]_[YYYY-MM-DD].html \
  -o content/[YYYY-MM]/DRAFT_simplifai_[type]_[YYYY-MM-DD]/slides
```

The script launches Chromium at 1080×1350px, positions each slide at 0,0 via JS, screenshots, then moves it off-screen before proceeding.

**Output:** `slide-01.png` through `slide-0N.png` saved into a `slides/` subfolder inside the post folder, alongside the HTML and caption.

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
2. Check the relevant campaign brief for the active narrative (current: [`campaigns/2026-05_quiet-expertise-loud-online/`](campaigns/2026-05_quiet-expertise-loud-online/)).
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
- Content is organised by month, **one folder per post**: `content/[YYYY-MM]/STATUS_simplifai_[type]_[YYYY-MM-DD]/` holding the `.html`, `_caption_` md, and a `slides/` subfolder. See [`content/README.md`](content/README.md).
- Status is a folder prefix: `DRAFT_` → `APPROVED_` → `PUBLISHED_` (rename in place as a post advances).
- Dates: always `YYYY-MM-DD` format.

---

## Key Documents (canonical)

Canonical `.docx` files live in `campaigns/`. Current files that actually exist:

| Document | Purpose |
|---|---|
| [`campaigns/Simplifai_Positioning_2026.docx`](campaigns/Simplifai_Positioning_2026.docx) | AI-company positioning (April 2026). **Stale on two axes** as of 2026-07-04: it frames Simplifai as marketing-only (scope is now whole-business) and as wellness-exclusive (audience is now small business owners across sectors, with no single lead industry). See "About This Project"; CLAUDE.md leads until the docx is revised. |
| [`campaigns/2026-05_quiet-expertise-loud-online/simplifai_campaign-brief_practitioners-facebook_2026-04-25.docx`](campaigns/2026-05_quiet-expertise-loud-online/simplifai_campaign-brief_practitioners-facebook_2026-04-25.docx) | "Quiet expertise, loud online" — practitioner-facing Facebook lead-gen campaign brief. |

> **Removed 2026-06-28:** earlier versions of this table listed three `.docx` files that do not exist in the repo — `Simplifai_AI-Marketing-Academy_Program-Outline.docx`, `2026-05_ai-pivot/Simplifai_AI-Pivot_Campaign-Brief.docx`, and `Simplifai_Business_Context.docx`. If any of these is created later, re-add its row.

---

*Last updated: 2026-07-05 — **added Ben, the marketing-ops agent, and the weekly operating loop.** New agent at `.claude/agents/ben.md` (drafts-only autonomy; orchestrates the skills, never advances post status, never invents metrics). Four new skills: `simplifai-weekly-briefing` (Sunday briefing in `reports/briefings/`), `simplifai-content-calendar` (Sun–Sat calendar with organic + ads lanes), `simplifai-organic-performance` (new tracker at `growth/organic/simplifai_organic-performance-tracker.csv` + README), `simplifai-content-pipeline` (read-only audit). Added the Agents section, updated `research/digests/README.md` cadence to Ben's Sunday sweep. Earlier 2026-07-04 — **removed health-and-wellness as the lead audience.** Simplifai now serves small business owners across sectors with no single lead industry; wellness is one sector among many, not the primary audience or default guardrail set. Updated About/scope blockquote/Who-Simplifai-Is/Stack-pillar/Who-they-serve and the stale-docx note accordingly. Regulated-field guardrails (health, finance, legal) are retained as sector-appropriate care, not as a default lens. Note: `.claude/skills/simplifai-trend-research.md` and `research/sources/simplifai-ai-tool-sources.md` still carry a wellness-led framing and should be broadened separately if that alignment is wanted. Earlier 2026-06-28 — clarified positioning on two axes: **scope is whole-business** (marketing is one lane, not the boundary — the Stack/Academy now reach customer care, bookings, admin, and operations, not just content) and **audience is health-and-wellness-led but no longer sector-exclusive** (wellness is the home turf and default guardrail set; adjacent small businesses are welcome). Updated About/Who/Pillars/Who-they-serve and the tagline ("Your AI work team"); broadened the weekly research engine to match (whole-business lanes, wellness-led lens) in `research/sources/simplifai-ai-tool-sources.md` and `.claude/skills/simplifai-trend-research.md`. Cleaned the Key Documents table to the two `.docx` files that actually exist and flagged `Simplifai_Positioning_2026.docx` as stale on both axes pending a revision pass. Earlier 2026-06-28 — renamed the local root project folder from `Pingo` to `Simplifai` (path is now `~/Desktop/Simplifai`); no in-repo paths referenced the old name, so nothing else changed. Earlier 2026-06-28 — reorganised `content/` by month, one folder per post (`content/[YYYY-MM]/STATUS_…/` with html + caption + `slides/`); status is now a folder prefix rather than a top-level dir. Moved export scripts to `content/_scripts/`, logo source builds to `brand-guidelines/simplifai/assets/logo-2026/_source-svg/`; added `content/_archive/`. Bumped relative asset paths in moved HTML to `../../../`. Earlier 2026-06-26 — adopted new "Stack" logo (minimal geometric: layered rounded tiles + lowercase wordmark) as the canonical mark; files in `brand-guidelines/simplifai/assets/logo-2026/` (SVG + transparent PNG, wordmark outlined to paths). Old blob set deprecated. Earlier 2026-06-26 — rebranded Pingo → Simplifai across all files, folders, guidelines, skills, and rendered assets (root folder renamed to `Simplifai` on 2026-06-28). Previous: 2026-05-09 — added skills, design system, visual production workflow; corrected canonical document paths.*
