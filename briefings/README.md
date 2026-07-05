# Weekly Briefings

One briefing per week, produced by **Ben** (the marketing-ops agent at [`.claude/agents/ben.md`](../.claude/agents/ben.md)) via the [`simplifai-weekly-briefing`](../.claude/skills/simplifai-weekly-briefing.md) skill.

A briefing is a **decision document, not an archive**: it fuses the week's research digests, the ads and organic performance trackers, and a pipeline audit into one prioritised plan. Read it Sunday, act through the week, done. The day-by-day detail lives in the matching content calendar in [`content-calendars/`](../content-calendars/), not here.

- **Naming:** `DRAFT_simplifai_weekly-briefing_[YYYY-MM-DD].md` — date is the **Sunday** that starts the week being planned.
- **Cadence:** Sundays. Intended to run hands-off via the scheduled cloud routine (see the setup note in `research/digests/README.md`); the routine sees the repo as of the last push, so keep local work pushed. Fallback: the identical routine runs locally with a one-line kickoff — "Ben, run the weekly sweep."
- **What's inside:** TL;DR → performance readout (ads + organic) → intel highlights → pipeline status → this week's plan (2–3 post briefs) → pointer to the week's calendar → coverage notes.

Every number in a briefing traces to a tracker CSV row; every intel claim traces to a digest line. If data is missing, the briefing says "no data" — it never estimates.
