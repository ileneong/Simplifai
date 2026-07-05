---
name: simplifai-weekly-briefing
description: >
  Produce Simplifai's weekly marketing briefing — the one document that starts the week. Use
  this skill when asked for the weekly briefing, a Sunday briefing, a marketing plan for the
  week, or "what should I focus on this week?". Fuses the latest research digests, the ads
  and organic performance trackers, and a live pipeline audit into a prioritised briefing in
  briefings/, then hands off to the content-calendar skill for the day-by-day plan.
argument-hint: "[optional: week start date YYYY-MM-DD, defaults to the coming Sunday]"
user-invocable: true
metadata:
  version: 1.0.0
---

## Maintenance Note

Bump the version when edited — minor for tweaks (1.0.0 → 1.1.0), major for behavioural changes.

---

## What this skill is for

Research, performance data, and the content pipeline each tell part of the story; the briefing is where they become **one set of decisions**. It answers three questions with evidence: what worked, what's worth making next, and what's stuck. It is the signature output of Ben ([`.claude/agents/ben.md`](../agents/ben.md)) and the first thing the owner reads on Sunday.

**Output:** `briefings/DRAFT_simplifai_weekly-briefing_[YYYY-MM-DD].md` — date is the Sunday that starts the week being planned (from `$ARGUMENTS`, defaulting to the coming Sunday). Conventions in [`briefings/README.md`](../../briefings/README.md).

**The trust rule (same as every Simplifai skill):** every number traces to a tracker CSV row; every intel claim traces to a digest line. Missing data is reported as "no data" — never estimated, never padded.

---

## Inputs

| Input | Path | Use |
|---|---|---|
| Intel digest | latest `DRAFT_intel-digest_*.md` in [`research/digests/`](../../research/digests/) | Intel highlights, post briefs |
| Competitor ads digest | latest `DRAFT_competitor-ads_*.md` | Positioning angles |
| Competitor content digest | latest `DRAFT_competitor-content_*.md` | Format/angle signals |
| Ads tracker | [`growth/ads/simplifai_ad-performance-tracker.csv`](../../growth/ads/simplifai_ad-performance-tracker.csv) | Performance readout (paid) |
| Organic tracker | [`growth/organic/simplifai_organic-performance-tracker.csv`](../../growth/organic/simplifai_organic-performance-tracker.csv) | Performance readout (organic) |
| Pipeline audit | run [`simplifai-content-pipeline.md`](simplifai-content-pipeline.md) inline | Pipeline status section |
| Active campaign | [`campaigns/2026-05_quiet-expertise-loud-online/`](../../campaigns/2026-05_quiet-expertise-loud-online/) | Narrative alignment |
| Scheme Usage Log | [`simplifai-instagram-post.md`](simplifai-instagram-post.md) | Next-scheme suggestions in post briefs |

---

## The briefing routine

1. **Locate the freshest digest of each type** (by the date in the filename). A digest older than **10 days** is stale: either run the matching research skill first (if this is the standing Sunday sweep, it already ran) or use it anyway and flag it as stale in Coverage notes. A digest type with no file at all is reported as a gap, not silently skipped.
2. **Read both performance CSVs.** Pull the latest `report_period` from the ads tracker and any organic rows. Apply the honesty rules of [`simplifai-organic-performance.md`](simplifai-organic-performance.md) read mode: signals need n ≥ 2–3; "no organic data yet" is a valid and complete readout.
3. **Run the pipeline audit** — execute the six checks in [`simplifai-content-pipeline.md`](simplifai-content-pipeline.md) and keep the compact report for section 4.
4. **Synthesise.** Cross-read: does a performance winner match a competitor gap or an intel item? The best briefing lines connect two sources ("saves winner is system-teaching + tracker says scale the 5-prompts angle + intel item 2 is a natural sequel").
5. **Write the briefing** using the template below. The plan section carries 2–3 concrete post briefs in the same shape as trend-research's *Recommended post of the week* (hook + slide beats + pillar + next scheme from the rotation log).
6. **Hand off to the calendar.** Read and follow [`simplifai-content-calendar.md`](simplifai-content-calendar.md) to write the week's Sunday-to-Saturday calendar from the plan section. The briefing links to it; the day-by-day detail lives there, not duplicated here.
7. **Verification pass** before saving: trace every number to a CSV row and every claim to a digest line; check the copy rules (no em dashes anywhere; any caption seed ends with exactly 3 hashtags and disclosure).

---

## Briefing template

```markdown
# Simplifai Weekly Briefing — Week of [YYYY-MM-DD]

*Prepared by Ben. Every number traces to a tracker; every claim traces to a digest.*

## TL;DR
- **Do:** [the one thing to do this week]
- **Working:** [the one thing the data says is working]
- **Fix:** [the one thing to fix]

## Performance readout
**Paid ([period] · from the ads tracker):** [winner + why, loser + why, CPM / cost-per-follow movement, decisions due at next check-in]
**Organic (from the organic tracker):** [save/follow-rate signals by format/scheme/pillar with n, or "No organic data yet — first log pass pending."]

## Intel highlights
1. [Item] — [one-line so-what] · [content angle] *(source: [digest file], item N)*
2. ...
3. ...

## Pipeline status
[The compact report from simplifai-content-pipeline, trimmed to what needs action.]

## This week's plan
1. **[Priority 1 — usually: finish/publish something stuck]** — [what + why]
2. **[Post brief 1]** — Pillar: · Scheme: [next in rotation] · Hook: "..." · Slide beats: 1–6 · Source: [digest item / performance signal]
3. **[Post brief 2]** — ...

## This week's calendar
→ [`content-calendars/Simplifai_Content-Calendar_[start]-to-[end].md`](../../content-calendars/...)

## Coverage notes
- [stale/missing digests, skipped sweeps, data gaps]
```

Keep the briefing readable in under five minutes. Depth lives in the digests and the calendar; the briefing is the decision layer.

---

## Guardrails

- Writes only the briefing file (and, via the handoff, the calendar file). Never renames content folders, never edits trackers or digests.
- No fabricated or extrapolated metrics, ever. The briefing's authority rests on every number being checkable.
- Voice rules apply: warm, credible, plain English; no em dashes; no FOMO framing of competitor or intel findings.
- If two sources conflict (e.g. calendar says posted, tracker says nothing published), surface the conflict — do not resolve it by assumption.
