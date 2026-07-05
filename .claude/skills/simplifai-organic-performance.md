---
name: simplifai-organic-performance
description: >
  Log and read the organic performance of Simplifai's own published posts. Use this skill
  when the owner pastes Instagram Insights numbers for a post ("log these numbers"), or asks
  what's working, which formats/schemes/pillars perform, or for an organic performance
  readout. Log mode appends validated rows to growth/organic/simplifai_organic-performance-
  tracker.csv; read mode aggregates the CSV into honest signals. Never invents a number.
argument-hint: "[optional: post folder name to log, or a question like 'what's working?']"
user-invocable: true
metadata:
  version: 1.0.0
---

## Maintenance Note

Bump the version when edited — minor for tweaks (1.0.0 → 1.1.0), major for behavioural changes.

---

## What this skill is for

The build side of the engine records what was made (the Scheme Usage Log tracks format, scheme, accent). This skill records what it **earned**, in [`growth/organic/simplifai_organic-performance-tracker.csv`](../../growth/organic/simplifai_organic-performance-tracker.csv). The join key is `content_piece` = the post's folder name under `content/[YYYY-MM]/` — that is what lets performance map back to scheme, format, and pillar, and lets the weekly briefing say "make more of X" with evidence.

Method, column legend, and formulas live in [`growth/organic/README.md`](../../growth/organic/README.md) — read it before the first log pass. Instagram Insights numbers are private and cannot be fetched; the owner pastes them. There is no other source.

**The one hard rule: never invent a number.** A metric the owner did not provide stays blank, with a line in `notes`. "No data" is always the right answer over an estimate.

---

## Log mode — owner pastes IG Insights numbers

1. **Identify the post.** Resolve `$ARGUMENTS` (or the owner's message) to a real folder under `content/[YYYY-MM]/`. Verify it exists before writing anything; if ambiguous, list the candidates and ask.
2. **Look up the build facts.** Pull `format`, `scheme`, and pillar from the Scheme Usage Log in [`simplifai-instagram-post.md`](simplifai-instagram-post.md) (or the Reel Rotation Log in [`simplifai-faceless-reel.md`](simplifai-faceless-reel.md) for reels). If the post is missing from the log, flag the drift and ask the owner to confirm scheme/pillar rather than guessing.
3. **Take the numbers.** Accept whatever Insights metrics the owner pastes: views, likes, comments, saves, shares, profile_visits, new_follows, plus publish_date and snapshot_date (default snapshot_date to today if numbers are being pasted live).
4. **Compute the derived columns** (formulas in the README):
   - `save_rate` = saves ÷ views × 100
   - `engagement_rate` = (likes + comments + saves + shares) ÷ views × 100
   - `follow_rate` = new_follows ÷ profile_visits × 100
   Round to 2 decimals. If an input is blank, leave the derived cell blank too.
5. **Ask for the verdict** — repeat / iterate / retire — or propose one from the numbers and let the owner confirm. Record the reasoning in `notes`.
6. **Append the row** to the CSV. Quote any field containing commas. If the `EXAMPLE ROW` is still present and this is the first real row, replace it.
7. **Read back the row** in plain English so the owner can spot a typo'd number immediately.

## Read mode — "what's working?"

1. **Read the full CSV.** If it holds no real rows yet (only `EXAMPLE ROW`), say exactly that: "no organic data yet" — and stop. Do not fill the gap with the ads tracker; paid and organic are different questions.
2. **Aggregate by format, scheme, and pillar.** Lead with `save_rate` for carousels (saves are the authority metric per the growth strategy), shares for reframes/singles, and `follow_rate` as the funnel check.
3. **Only call a signal once n ≥ 2–3 posts** share the trait. One good post is an anecdote; say so. Below that threshold, report the observation with its n and label it "early."
4. **Shape conclusions for the briefing:** each finding as *what the data shows → what to do about it* ("Purple-scheme carousels save at 2× the account average across 3 posts → keep system-teaching carousels on C rotation slots"). These feed the Performance readout and This week's plan sections of [`simplifai-weekly-briefing`](simplifai-weekly-briefing.md).
5. **Coverage notes:** name what limits the read — small n, missing metrics, snapshot dates too close to publish.

---

## Guardrails

- Only ever write to `growth/organic/simplifai_organic-performance-tracker.csv` — never to the ads tracker, the content tree, or the rotation logs.
- Never fabricate, extrapolate, or "estimate" a metric. Blank + note, always.
- Keep the CSV append-only: fix a wrong row by correcting it in place at the owner's request, not by silently rewriting history.
- Snapshots are comparable at ~7 days post-publish. If a snapshot is taken much earlier or later, record it honestly in `notes` and weigh it accordingly in read mode.

---

## After logging (handoff)

- New rows feed the **Performance readout** of the next weekly briefing.
- A `repeat` verdict is a direct candidate for the next calendar's plan; a `retire` verdict removes that angle from rotation.
- Posts flagged by [`simplifai-content-pipeline`](simplifai-content-pipeline.md) as "unmeasured publishes" are this skill's standing to-do list.
