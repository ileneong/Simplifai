# Simplifai Reel — Production Prompt-Script
## Reel 3 · "The 4 pieces of an AI marketing system."

**Your next reel.** Lane A (text-on-screen + AI voiceover). Rotates off Reel 2's coral →
**Yellow** scheme, and switches the mechanic from Share to **Save** (a list people bookmark).
The *script* is already written (see [Batch 01, Reel 3](../../content-calendars/Simplifai_Reels-Batch-01_2026-06.md)).
This file is the **production pack**: the exact copy-paste prompts + settings to turn that script into a finished MP4.

Built per [`simplifai-faceless-reel.md`](../../.claude/skills/simplifai-faceless-reel.md). Made with AI assistance (disclosed per Simplifai practice).

---

## Reel spec (lock these before you start)

| Field | Value |
|---|---|
| **Canvas** | 1080 × 1920 px (9:16 vertical) — always |
| **Duration** | **≤ 20s** (this VO reads ~18–20s) |
| **Pillar** | Build |
| **Lane** | A — text-on-screen + AI voiceover |
| **Colour scheme** | **A — Yellow** · bg `#ffc857` · text dark `#1a1a2e` · accent coral `#ff7a59` |
| **Accent element** | Thick bar (one only) — under "4 pieces" |
| **Fonts** | Headline **Poppins 800** · captions **Plus Jakarta Sans** · sentence case |
| **Primary mechanic** | **Save** ("save the 4 pieces") |
| **Loop** | Last line loops back to the hook |
| **Safe zones** | Core text in the middle ~1080×1280 region. Keep top ~220px, bottom ~420px, right ~180px clear of IG UI |

---

## STEP 1 — Generate the voiceover (ElevenLabs or similar)

**Voice direction prompt** (paste into the tool's style/instructions field, or use to pick a voice):

> Warm, credible, unhurried — a knowledgeable friend, not a brand announcer. Australian or neutral
> English. Conversational pacing with a light, even beat as you count each piece. Confident on the
> hook, clear and steady through the list. No hype, no hard-sell energy. Sentence case, natural emphasis.

**VO script — read exactly as written** (this is the full audio track, ~18–20s):

```
An AI marketing system isn't one clever prompt — it's four pieces.

One, a brand-voice doc, so it sounds like you.

Two, a prompt library you reuse.

Three, a workflow you run every week.

Four, a calendar, so you're never guessing what to post.

That's the system. Save the four pieces — and follow for the weekend build.
```

> The closing line carries the **CTA** ("save the four pieces" + "follow for the weekend build")
> *and* loops back to the hook ("the system" → "an AI marketing system… four pieces"). Keep it tight
> so the whole read still lands **≤20s**.

**Settings:** Stability ~50% · Similarity/clarity ~75% · Style/exaggeration low. Generate 2–3 takes,
keep the one with the cleanest count rhythm. Export as WAV/MP3.

> Keep the VO **low in the final mix** — a trending track sits on top (Step 4). Tighten any long
> pauses in editing so the whole thing lands **under 20s**.

---

## STEP 2 — (Optional) background b-roll prompts

Lane A is **flat yellow + kinetic text** by default — that *is* the Simplifai brand, and you can ship with
no b-roll at all. If you want subtle motion behind the text, generate ONE looping clip and wash it in
yellow at low opacity so it never competes with the words.

**AI video prompt (Runway / Pika / Sora-style), if used:**

> Abstract slow-moving soft shapes, minimal and flat, single warm yellow colour field, gentle drift,
> no people, no text, no logos, seamless loop, 9:16 vertical, calm premium feel. Low contrast.

**Or skip b-roll entirely** — flat `#ffc857` background reads cleaner and keeps the four pieces legible. Recommended for a list reel.

---

## STEP 3 — On-screen text (kinetic, beat by beat)

Build these as text layers in CapCut/Canva. Headline = Poppins 800, very large, 2–3 words per line,
dark `#1a1a2e` on yellow, **one coral thick bar** as the only accent (under "4 pieces"). Hard cuts in —
snappy, on the beat, no slow fades. One idea per cut. Tighten gaps so the whole reel stays **≤20s**.

| Time | On-screen text | Note |
|---|---|---|
| 0–3s **HOOK** | **An AI marketing system has 4 pieces.** | Coral thick bar under "4 pieces", hard cut in |
| 3–7s **Beat 1** | **1. A brand-voice doc** | Number snaps in |
| 7–11s **Beat 2** | **2. A prompt library** | Cut |
| 11–14s **Beat 3** | **3. A workflow** | Cut |
| 14–17s **Beat 4** | **4. A content calendar** | Cut |
| 17–20s **LOOP/CTA** | **Voice · Prompts · Workflow · Calendar.**  →  *Save the 4 pieces.* | All four listed; wordmark lower-third |
| End card (holds) | *Save the 4 pieces · Follow for the weekend build* | Primary = save; **follow CTA** sits with the wordmark |

**Wordmark lower-third:** `pin` + yellow `go`, inside the bottom safe zone. On yellow, use the
**logo asset** (dark/coral wordmark) so `go` doesn't disappear into the background.

> **CTA rule (always):** every reel ends with a CTA. Keep the primary save/share mechanic as the
> headline; layer a small **follow CTA** ("Follow for the weekend build") on the end card so it never
> dilutes the primary one. Never ship a reel without a CTA.

---

## STEP 4 — Assemble (CapCut or Canva)

1. New project **1080×1920**. Load the Simplifai brand kit / tokens (yellow `#ffc857`, coral `#ff7a59`, dark `#1a1a2e`, Poppins, Plus Jakarta Sans).
2. Drop the VO from Step 1 on the audio track; line text cuts to the VO beats (Step 3 table).
3. **Auto-captions ON**, styled in **Plus Jakarta Sans**, sentence case — keep them out of the bottom
   ~420px and right ~180px safe zones.
4. **`[TRENDING AUDIO]` slot** — add a list/checklist-style trending track; duck it under the VO
   (VO stays clearly audible, music ~20–30%).
5. Confirm the **last line loops cleanly into the first** so replays feel seamless.
6. Add the wordmark lower-third on the final beat.
7. **Trim to ≤20s** — pull the cuts tight; this is a fast list reel, not a slow build.

> ⚠️ Do **not** use the carousel Playwright HTML→PNG pipeline for video — reels are assembled in
> CapCut/Canva and exported as MP4.

---

## STEP 5 — Export

- **1080 × 1920**, MP4, **≤ 20s**, 30fps.
- Check captions + CTA sit inside the safe zones on a phone preview.
- Save the final MP4 alongside this file in `content/drafts/` (then `APPROVED_` once signed off).

---

## STEP 6 — Caption (paste into Instagram)

> Save this. An AI marketing system = four pieces working together: ① a brand-voice doc, so it sounds
> like you, not everyone ② a reusable prompt library, instead of a blank box ③ a simple weekly workflow
> ④ a content calendar, so you're never guessing what to post. One clever prompt is a party trick. These
> four are why your content gets *consistent* — and why it only takes a few hours a week. Which piece are
> you missing? 👇 Save this, and follow for the weekend build. *(Made with AI assistance — disclosed.)*

Suggested hashtags: keep light and relevant — small business / marketing / AI-for-owners. No URL, no simplifai.co.

---

## Pre-flight checklist (from the skill)

- [ ] Canvas 1080×1920; **≤20s**; core text inside the middle safe region
- [ ] Hook lands in first 1–3s (on-screen **and** spoken)
- [ ] Last line loops back to the hook
- [ ] One explicit **save** mechanic, named on screen ("Save the 4 pieces")
- [ ] **CTA present** — end card always carries a CTA (primary save/share + a follow CTA)
- [ ] `[TRENDING AUDIO]` slot filled; VO sits under it
- [ ] Closing line resolves to the **system** message (not a tactic)
- [ ] Yellow scheme (rotates ≠ Reel 2 coral); one thick-bar accent; wordmark in safe zone
- [ ] Caption has AI disclosure; no URL/simplifai.co; no health-adjacent claims
- [ ] Lane A noted

---

## After it ships — log it

Add a row to the **Rotation Log** in [`simplifai-faceless-reel.md`](../../.claude/skills/simplifai-faceless-reel.md):

| Reel | Date | Pillar | Lane | Scheme | Primary mechanic | Status |
|---|---|---|---|---|---|---|
| 4 pieces of the system | 2026-06-?? | Build | A | A Yellow | Save | Shipped |

> Next reel: rotate the scheme (≠ Yellow). Reel 4 (Light, Share) or Reel 5 (Purple, Save) both work.

---

*Created: 2026-06-14 · Simplifai AI Work Team · Made with AI assistance (disclosed per Simplifai practice).*
