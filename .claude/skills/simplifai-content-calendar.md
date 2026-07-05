---
name: simplifai-content-calendar
description: >
  Build the week's Sunday-to-Saturday content calendar for Simplifai. Use this skill when
  asked to plan the week, build or update the content calendar, or decide what to post and
  which ads to run this week. Fuses the weekly briefing (or latest digests), the pipeline
  audit, the ads tracker's scale/refresh/kill decisions, and the scheme rotation into one
  dated calendar file in content-calendars/ with an organic lane and an ads lane. Also runs
  as the final step of the weekly briefing.
argument-hint: "[optional: week start date YYYY-MM-DD, defaults to the coming Sunday]"
user-invocable: true
metadata:
  version: 1.0.0
---

## Maintenance Note

Bump the version when edited — minor for tweaks (1.0.0 → 1.1.0), major for behavioural changes.

---

## What this skill is for

The calendar is where research and performance become a week of scheduled work. It plans **Sunday to Saturday** in two lanes: the **organic lane** (what gets posted, day by day) and the **ads lane** (which existing creatives run as paid, driven by the ads tracker's decisions). It is a planning document — it does not build posts (that's [`simplifai-instagram-post.md`](simplifai-instagram-post.md) / [`simplifai-faceless-reel.md`](simplifai-faceless-reel.md)) and it never advances a post's status.

**Output:** `content-calendars/Simplifai_Content-Calendar_[YYYY-MM-DD]-to-[MM-DD].md` — start date is the Sunday (from `$ARGUMENTS`, defaulting to the coming Sunday), end date the following Saturday. Naming matches the existing convention (e.g. `Simplifai_Content-Calendar_2026-06-27-to-07-04.md`).

---

## Inputs (in priority order)

1. **This week's briefing**, if one exists in [`briefings/`](../../briefings/) — its *This week's plan* section is the primary source of slots. Without one, draw directly from the latest digests in [`research/digests/`](../../research/digests/).
2. **Pipeline audit findings** — run the checks in [`simplifai-content-pipeline.md`](simplifai-content-pipeline.md) first. **Stuck `DRAFT_` posts and approved-but-unposted work get slotted before any new build is proposed.** Finishing beats starting.
3. **Ads tracker** — [`growth/ads/simplifai_ad-performance-tracker.csv`](../../growth/ads/simplifai_ad-performance-tracker.csv). The latest period's `decision` column drives the ads lane.
4. **Scheme Usage Log** in [`simplifai-instagram-post.md`](simplifai-instagram-post.md) — the last scheme used determines the rotation for every planned slot (A → B → C → D, never two consecutive posts on the same scheme).
5. **Cadence and pillars** from [`strategy/Simplifai_Instagram-Growth-Strategy_2026-06.md`](../../strategy/Simplifai_Instagram-Growth-Strategy_2026-06.md): sustainable target is 3–4 feed posts + 3–5 reels per week across four pillars (system-teaching, myth/reframe, honest-limits, proof). Sanity-check against recent calendars in [`content-calendars/`](../../content-calendars/) — plan the volume the owner actually ships, not the idealised maximum.

---

## The planning routine

1. **Fix the week.** Resolve the Sunday start date; compute the Saturday end date.
2. **Gather inputs** in the order above. Note which were available (briefing vs digests-direct) for Coverage notes.
3. **Fill the organic lane.** For each slot: day, platform, format, pillar, working title/hook, scheme, **source** (the digest item, briefing brief, or performance signal it came from), and **status** — `finish` (existing DRAFT_/APPROVED_ folder, name it) or `new build`. Rules:
   - Slot stuck drafts and ready-to-publish approved posts first.
   - Assign schemes by continuing the rotation from the log's last entry across the week's static posts in date order.
   - Balance pillars across the week; weight reels toward reframe/proof (reach), carousels toward system-teaching (saves).
   - Every slot must trace to a source. No filler slots invented to make the week look full — a lighter honest week beats a padded one.
4. **Fill the ads lane** from the tracker's latest `decision` values:
   - **scale** → keep running, note the budget intent.
   - **refresh** → keep the angle, swap the creative — and add the replacement creative as a slot in the organic lane.
   - **kill / pause** → stop; say what replaces it, if anything.
   - Include a weekly budget note and a **check-in day** (default Friday) for logging results back to the ads tracker per [`growth/ads/README.md`](../../growth/ads/README.md).
   - If the tracker has no rows for a recent period, the ads lane says "no active ads data" — never invent a paid plan.
5. **Write the calendar file** using the format below.
6. **Verify:**
   - Every slot traces to a plan item, digest line, or tracker decision.
   - The scheme sequence is legal against the Scheme Usage Log (no consecutive repeats, correct continuation from the last logged scheme).
   - Every `finish` slot names a folder that actually exists; `new build` slots name the folder that *will* be created, following [`content/README.md`](../../content/README.md) naming.

---

## Calendar format

Follow the shape of the existing calendars (see `Simplifai_Content-Calendar_2026-06-27-to-07-04.md`): header block (campaign/theme, arc, CTA, 3 hashtags), the scheme-rotation reminder, a **Full Week at a Glance** table (Day | Date | Platform | Format | Scheme | Topic / Hook | Status), then **Daily Briefs** per slot (Platform / Format / Scheme / Hook / Angle / Key message / CTA / Post folder / Status), and the Production Notes block. Add two things the old template lacked:

- A **Source** line in each daily brief — which digest item, briefing brief, or performance signal the slot came from.
- An **Ads lane** section between the week table and the daily briefs:

```markdown
## Ads Lane — week of [YYYY-MM-DD]

| Creative (content folder) | Tracker decision | This week | Budget note |
|---|---|---|---|
| APPROVED_simplifai_..._[date] | scale | keep running | [e.g. hold at $X/day] |
| ... | refresh | swap creative — replacement slotted [day] | |

**Check-in:** [day] — pull Ads Manager numbers and log one row per creative to `growth/ads/simplifai_ad-performance-tracker.csv`.
```

End the file with **Coverage notes**: which inputs were missing or stale (no briefing this week, tracker not updated since period X, etc.).

---

## Guardrails

- Only ever writes the one calendar file in `content-calendars/`. Never touches `content/`, the trackers, or the rotation logs.
- Voice rules apply to every hook and CTA drafted here: no em dashes, no FOMO hooks, plain English, no URLs.
- Ads lane decisions come **from** the tracker; this skill never overrides a logged decision, only schedules it. Proposing a *different* decision is a note for the owner, not a plan line.
