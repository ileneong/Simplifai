---
name: pingo-faceless-reel
description: >
  Plan, script, and produce AI faceless videos (Instagram Reels) for Pingo — the AI company that
  helps small business owners build a marketing SYSTEM, not buy content. Use this skill whenever
  asked to create, script, storyboard, or plan a Reel / short-form video for Pingo's own social
  (not for Pingo's clients). Covers the narrative spine, two production lanes (text-on-screen + AI
  voiceover, and AI presenter/avatar), reach mechanics, script structure, brand-motion spec, voice,
  compliance, and the tool workflow. Pairs with pingo-instagram-post.md (static) and pingo-design.md.
user-invocable: true
metadata:
  version: 1.0.0
---

## Maintenance Note

Bump the version when edited — minor for tweaks (1.0.0 → 1.1.0), major for behavioural changes.
Log every shipped Reel in the **Rotation Log** at the bottom so colour + format keep rotating.

---

## The Narrative Spine — read this first

**Every Pingo Reel sells AI-as-a-*system*, never AI as a marketing trick.**

Pingo's whole differentiator: *"An agency hands you content. Pingo hands you a system."* So the
throughline across every script is:

> One-off AI prompts give you random, generic output. An AI **system** — a brand-voice doc + a
> prompt library + a workflow + a calendar (**the Pingo Stack**) — gives you consistent, on-brand
> output in a few hours a week, with **you still in control**.

Rules that follow from this:
- A tactic ("here's a caption prompt", "here's a hook formula") may appear **only as a proof point
  of the system** — never as the headline or the takeaway.
- Every script's **closing line resolves to the system** ("that's what a system does", not "that's
  a clever AI hack").
- If a Reel could have been posted by any generic "AI marketing tips" account, it's wrong. Rewrite
  it until the system message is the thing only Pingo would say.

### The four content pillars (every Reel ladders up to the system)
| Pillar | Job | Example angle |
|---|---|---|
| **Reframe** | Correct a wrong belief about AI | "AI isn't a robot or magic — it's a system you run." |
| **Build** | Show a piece of the Stack | "The 4 pieces of an AI marketing system." |
| **Reassure** | Keep the owner in control | "5 things AI will never do for your business." |
| **Show** | The system actually running | "A full week of content, done by Tuesday." |

---

## When to use / canvas spec

Use for any Pingo Reel or short-form video (IG Reels primary; the same export works for TikTok /
Shorts). For static feed posts or carousels, use [`pingo-instagram-post.md`](pingo-instagram-post.md)
instead.

- **Canvas:** 1080 × 1920 px (9:16 vertical) — always.
- **Duration:** ≤ 30s default; hard cap ~45s. Under a minute reads as higher-completion content.
- **IG UI safe zones** — keep all text and the CTA out of these so the IG interface never covers them:
  | Zone | Keep clear |
  |---|---|
  | Top | ~220px (status bar / "Reels" label) |
  | Bottom | ~420px (caption, username, audio ticker, action rail base) |
  | Right | ~180px (like / comment / share / save rail) |
  - Net result: design the **core text block inside the middle ~1080×1280 region**, centre-weighted.

---

## Two production lanes

Pick a lane per Reel. Lane A is the default and should be most posts; Lane B is a measured pilot.

### Lane A — Text-on-screen + AI voiceover *(primary, most posts)*
Bold animated brand-colour text + an AI voiceover + light b-roll or screen-capture. This *is* the
Pingo brand (flat + typographic), it's the cheapest to make, and it batches well — one script
template becomes many Reels.
- Best for: Reframe, Build, Show pillars; lists; before/after; demos.
- Visuals: full-bleed brand-colour background per the scheme rotation, big kinetic text, optional
  small screen-capture inset or simple b-roll behind a colour wash.

### Lane B — AI presenter / avatar *(pilot, ~1 in 5 Reels)*
An AI host (HeyGen / Synthesia-style) delivers the script to camera. Adds human warmth where it
helps — reassurance and story beats — but it is **less on-brand** (Pingo is flat-typographic) and
costs more. Treat it as an **explicit test**: tag it in the Rotation Log and compare reach/saves
against Lane A before scaling it up.
- Best for: Reassure pillar, founder-voice / story moments.
- Keep brand text overlays and lower-third wordmark on top of the avatar so it still reads as Pingo.

---

## Reach mechanics — bake these into every script

The 2026 Reels algorithm rewards completion, replays, **saves, and DM-shares** far above likes.
Engineer for them:

1. **Hook in the first 1–3s** — the scroll-stopper must be *both* on-screen text **and** the first
   spoken line. Lead with tension, a pattern-interrupt, or a number ("Most people use AI like a
   vending machine.").
2. **Design for full watch + replay** — make the **last line loop back into the first** so the Reel
   reads as seamless on repeat (replays are weighted).
3. **Engineer one explicit *save* reason** — a list, the 4 pieces, a template, a before/after — the
   thing a viewer bookmarks for later. Name it on screen ("Save the 4 pieces").
4. **Engineer one explicit *share* reason** — a single line a viewer will DM to a peer ("Send this
   to the expert who's invisible online").
5. **Trending audio** under the VO bed — adds ~30% reach vs original audio. Leave a clearly marked
   **`[TRENDING AUDIO]`** slot in every script; keep VO low so a swappable trending track sits under it.
6. **Cadence** — 3–5 Reels/week is the consistency bar. Batch-script so this is sustainable.

> A Reel needs **one** save reason *or* **one** share reason as its primary mechanic — pick the one
> that fits the pillar (Build/Show → save; Reframe/Reassure → share). Don't dilute with both as headline.

---

## Script structure

Extends [`templates/reel-scripts/reel-script-template.md`](../../templates/reel-scripts/reel-script-template.md)
— same Hook / Body / CTA bones, with Pingo specifics. Each beat carries three tracks: **on-screen
text**, **VO line**, **visual note**.

```
HOOK (0–3s)
  On-screen: [scroll-stopping line — large, one idea]
  VO:        [same idea, spoken — pattern interrupt / tension / number]
  Visual:    [scheme bg + accent; hard cut in]

BODY (3–22s) — one idea per cut, 3–4 beats
  Beat 1 → On-screen / VO / Visual
  Beat 2 → On-screen / VO / Visual
  Beat 3 → On-screen / VO / Visual
  (tactics appear here only as proof of the system)

LOOP / CTA (final 3–5s)
  On-screen: [the SYSTEM resolution line + save/share prompt]
  VO:        [closing line that loops back to the hook]
  Visual:    [wordmark lower-third; accent]
```

Per script, always specify: **Lane (A/B) · Colour scheme · Accent element · Pillar · Primary
mechanic (save or share) · `[TRENDING AUDIO]` slot · Caption + AI disclosure.**

---

## Brand-motion spec

Pull all tokens from [`brand-guidelines/pingo/colors_and_type.css`](../../brand-guidelines/pingo/colors_and_type.css).
Reuse the **same 4-scheme colour rotation as static posts** so Reels match the feed — see
[`pingo-instagram-post.md`](pingo-instagram-post.md) "Color Rotation System" for the full table.

| Element | Spec |
|---|---|
| Background | Flat solid scheme colour — **no gradients** (Yellow `#ffc857` / Coral `#ff7a59` / Purple `#8a4fff` / Light `#f5f3ff`) |
| Headline text | Poppins 800 (`--font-display`), very large, tight tracking (`--tracking-tight`), 2–3 words per line, kinetic in |
| Body / VO captions | Plus Jakarta Sans (`--font-body`), auto-captions ON, sentence case |
| Accent | **One** per Reel — asterisk, circle-underline, thick bar, dot cluster (rotate, same set as static) |
| Logo | Wordmark lower-third inside the bottom safe zone — `pin`+yellow `go` on dark/purple; logo asset on yellow/light |
| Motion | Snappy, on the beat; `--ease-bounce` / `--ease-out` feel. Cuts, not slow fades. |

Colour scheme rotates per Reel — **never two consecutive Reels on the same scheme** (track in the log).

---

## Voice + CTA-for-reach

- **Voice:** warm · credible · empowering. Second person ("you", "your"). Sentence case everywhere.
  No AI-cringe, no fearmongering, no empty hype. Sound like a knowledgeable friend, not a brand.
- **Every script resolves to the system message** (Narrative Spine) — the closing line reframes the
  takeaway as "this is what a system does for you."
- **CTAs are save / share / follow-first** (reach goal):
  - Save: *"Save the 4 pieces of the system."*
  - Share: *"Send this to the expert who's invisible online."*
  - Follow: *"Follow for the weekend build."*
- A soft DM hook ("DM 'system' and I'll talk you through it") is allowed occasionally, but the
  lead-gen "comment prompt" funnel is **not** the primary CTA for these reach-first Reels.

---

## Compliance

- **Disclose AI assistance** in the caption (Pingo practice — transparency is part of credibility).
- **Never a URL or pingo.co** anywhere on screen or in caption — Pingo has no website yet.
- **No fabricated results or testimonials.** Honest numbers only ("90 mins", not invented growth stats).
- **Flag health-adjacent claims** — many viewers are wellness/coaching owners; never imply a health
  outcome. The system message is about marketing operations, not wellbeing claims.

---

## Tool workflow *(recommended, not locked)*

1. **Script** here (this skill + the batch file).
2. **Voiceover** — generate VO with an AI voice tool (e.g. ElevenLabs); warm, natural, unhurried.
3. **Assemble:**
   - **Lane A** → CapCut or Canva (load the Pingo brand kit / tokens) — kinetic text, b-roll /
     screen-capture, on-beat cuts.
   - **Lane B** → HeyGen or Synthesia for the avatar, then overlay brand text + wordmark.
4. **Auto-captions ON**, styled in brand fonts; check they sit inside the safe zones.
5. **Export 1080 × 1920**, ≤ 30s. Save the script + final to the batch / drafts folder.

> ⚠️ **The carousel Playwright HTML→PNG pipeline does NOT apply to video.** Don't reuse it for
> Reels — video is assembled in CapCut/Canva/HeyGen and exported as MP4.

---

## Output checklist

Before a Reel is "shoot-ready", verify:
- [ ] Canvas 1080×1920; ≤30s; core text inside the middle safe region
- [ ] Hook lands in first 1–3s (on-screen **and** spoken)
- [ ] Last line loops back to the hook
- [ ] One explicit save **or** share mechanic, named on screen
- [ ] `[TRENDING AUDIO]` slot marked; VO sits under it
- [ ] **Closing line resolves to the system message** (not a tactic)
- [ ] Colour scheme rotates (≠ previous Reel); one accent element; wordmark in safe zone
- [ ] Caption written with AI disclosure; no URL/pingo.co; health-adjacent lines flagged
- [ ] Lane noted (Lane B kept to ~1 in 5)

---

## Rotation Log

Track scheme + format + lane so successive Reels rotate and the Lane B pilot stays measurable.

| Reel | Date | Pillar | Lane | Scheme | Primary mechanic | Status |
|---|---|---|---|---|---|---|
| _(first batch lives in `content-calendars/Pingo_Reels-Batch-01_2026-06.md`)_ | | | | | | |
