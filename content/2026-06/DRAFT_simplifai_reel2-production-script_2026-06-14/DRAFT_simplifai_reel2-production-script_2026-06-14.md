# Simplifai Reel — Production Prompt-Script
## Reel 2 · "Most people use AI like a vending machine."

**Your first reel.** Lane A (text-on-screen + AI voiceover) — cheapest, most on-brand, easiest to build.
The *script* is already written (see [Batch 01, Reel 2](../../content-calendars/Simplifai_Reels-Batch-01_2026-06.md)).
This file is the **production pack**: the exact copy-paste prompts + settings to turn that script into a finished MP4.

Built per [`simplifai-faceless-reel.md`](../../.claude/skills/simplifai-faceless-reel.md). Made with AI assistance (disclosed per Simplifai practice).

---

## Reel spec (lock these before you start)

| Field | Value |
|---|---|
| **Canvas** | 1080 × 1920 px (9:16 vertical) — always |
| **Duration** | ≤ 30s (this VO reads ~22s) |
| **Pillar** | Reframe |
| **Lane** | A — text-on-screen + AI voiceover |
| **Colour scheme** | **B — Coral** · bg `#ff7a59` · text `#ffffff` · accent yellow `#ffc857` |
| **Accent element** | Asterisk ✳ (one only) |
| **Fonts** | Headline **Poppins 800** · captions **Plus Jakarta Sans** · sentence case |
| **Primary mechanic** | **Share** ("send this to someone whose AI sounds like a robot") |
| **Loop** | Last line loops back to the hook |
| **Safe zones** | Core text in the middle ~1080×1280 region. Keep top ~220px, bottom ~420px, right ~180px clear of IG UI |

---

## STEP 1 — Generate the voiceover (ElevenLabs or similar)

**Voice direction prompt** (paste into the tool's style/instructions field, or use to pick a voice):

> Warm, credible, unhurried — a knowledgeable friend, not a brand announcer. Australian or neutral
> English. Conversational pacing with a light pause before each new idea. Confident on the hook,
> reassuring on the resolve. No hype, no hard-sell energy. Sentence case, natural emphasis.

**VO script — read exactly as written** (this is the full audio track, ~22s):

```
Most people use AI like a vending machine.

You type a request, you grab whatever falls out, and half of it sounds like everyone else.

That's not an AI problem. That's a no-system problem.

A system gives it your voice, your audience, and your goal before you ever hit go —
so the output actually sounds like you.

Stop using AI like a vending machine — and it stops sounding like one.
```

**Settings:** Stability ~50% · Similarity/clarity ~75% · Style/exaggeration low. Generate 2–3 takes,
keep the one with the most natural pause structure. Export as WAV/MP3.

> Keep the VO **low in the final mix** — a trending track sits on top (Step 4).

---

## STEP 2 — (Optional) background b-roll prompts

Lane A is **flat coral + kinetic text** by default — that *is* the Simplifai brand, and you can ship with
no b-roll at all. If you want subtle motion behind the text, generate ONE looping clip and wash it in
coral at low opacity so it never competes with the words.

**AI video prompt (Runway / Pika / Sora-style), if used:**

> Abstract slow-moving soft shapes, minimal and flat, single warm coral colour field, gentle drift,
> no people, no text, no logos, seamless loop, 9:16 vertical, calm premium feel. Low contrast.

**Or skip b-roll entirely** — flat `#ff7a59` background reads cleaner and is more on-brand. Recommended for a first reel.

---

## STEP 3 — On-screen text (kinetic, beat by beat)

Build these as text layers in CapCut/Canva. Headline = Poppins 800, very large, 2–3 words per line,
white on coral, **one asterisk ✳** as the only accent (top-left). Hard cuts in — snappy, on the beat,
no slow fades. One idea per cut.

| Time | On-screen text | Note |
|---|---|---|
| 0–3s **HOOK** | **Most people use AI like a vending machine.** | Oversized ✳ top-left, hard cut in |
| 3–9s **Beat 1** | *Type a request. Grab whatever falls out.* | Text stacks in |
| 9–14s **Beat 2** | *That's why it feels generic.* | Punch-in (scale up slightly) |
| 14–19s **Beat 3** | *A system feeds it your voice every time.* | ✳ pulses once |
| 19–22s **LOOP/CTA** | **Stop vending. Start systemising.**  →  *Send this to someone whose AI sounds like a robot.* | Wordmark lower-third |

**Wordmark lower-third:** `pin` + yellow `go`, inside the bottom safe zone. On coral, use white `pin`
+ yellow `go`.

---

## STEP 4 — Assemble (CapCut or Canva)

1. New project **1080×1920**. Load the Simplifai brand kit / tokens (coral `#ff7a59`, yellow `#ffc857`, Poppins, Plus Jakarta Sans).
2. Drop the VO from Step 1 on the audio track; line text cuts to the VO beats (Step 3 table).
3. **Auto-captions ON**, styled in **Plus Jakarta Sans**, sentence case — keep them out of the bottom
   ~420px and right ~180px safe zones.
4. **`[TRENDING AUDIO]` slot** — add a punchy/snappy trending track from the IG/TikTok library; duck it
   under the VO (VO stays clearly audible, music ~20–30%).
5. Confirm the **last line loops cleanly into the first** so replays feel seamless.
6. Add the wordmark lower-third on the final beat.

> ⚠️ Do **not** use the carousel Playwright HTML→PNG pipeline for video — reels are assembled in
> CapCut/Canva and exported as MP4.

---

## STEP 5 — Export

- **1080 × 1920**, MP4, ≤ 30s, 30fps.
- Check captions + CTA sit inside the safe zones on a phone preview.
- Save the final MP4 alongside this file in `content/drafts/` (then `APPROVED_` once signed off).

---

## STEP 6 — Caption (paste into Instagram)

> Vending-machine AI: type a request, grab whatever falls out, wonder why it's generic. The fix isn't
> a better prompt you copied off someone — it's a *system* that feeds AI your voice, your audience and
> your goal every single time. Same tool, completely different output. Send this to the person whose
> captions sound like a robot wrote them. *(Made with AI assistance — disclosed.)*

Suggested hashtags: keep light and relevant — small business / marketing / AI-for-owners. No URL, no simplifai.co.

---

## Pre-flight checklist (from the skill)

- [ ] Canvas 1080×1920; ≤30s; core text inside the middle safe region
- [ ] Hook lands in first 1–3s (on-screen **and** spoken)
- [ ] Last line loops back to the hook
- [ ] One explicit **share** mechanic, named on screen
- [ ] `[TRENDING AUDIO]` slot filled; VO sits under it
- [ ] Closing line resolves to the **system** message (not a tactic)
- [ ] Coral scheme; one asterisk accent; wordmark in safe zone
- [ ] Caption has AI disclosure; no URL/simplifai.co; no health-adjacent claims
- [ ] Lane A noted

---

## After it ships — log it

Add a row to the **Rotation Log** in [`simplifai-faceless-reel.md`](../../.claude/skills/simplifai-faceless-reel.md):

| Reel | Date | Pillar | Lane | Scheme | Primary mechanic | Status |
|---|---|---|---|---|---|---|
| Vending machine | 2026-06-?? | Reframe | A | B Coral | Share | Shipped |

> Next reel: rotate the scheme (≠ Coral). Reel 3 (Yellow, Save) or Reel 4 (Light, Share) both work.

---

*Created: 2026-06-14 · Simplifai AI Work Team · Made with AI assistance (disclosed per Simplifai practice).*
