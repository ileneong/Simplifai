---
name: simplifai-content-pipeline
description: >
  Audit the health of Simplifai's content pipeline. Use this skill when asked to audit the
  pipeline, check what content is stuck, find drafts that never shipped, spot rotation-log
  drift, or answer "where is everything?" across content/. Read-only: it walks the content
  tree, the rotation logs, the latest calendar, and the performance trackers, then prints a
  compact status report in chat. It never renames, moves, or edits a post folder. Also runs
  inline as the Pipeline Status section of the weekly briefing.
user-invocable: true
metadata:
  version: 1.0.0
---

## Maintenance Note

Bump the version when edited — minor for tweaks (1.0.0 → 1.1.0), major for behavioural changes.

---

## What this skill is for

The content engine only compounds if posts keep moving: DRAFT → APPROVED → PUBLISHED → measured. This skill is the unclogger — it finds what stalled, what shipped without being logged, and where the plan and the folders disagree. It produces a **status report in chat** (no file by default); the [`simplifai-weekly-briefing`](simplifai-weekly-briefing.md) skill embeds its output as the briefing's Pipeline Status section.

**Hard boundary: read-only.** This skill never renames a folder, never advances a status prefix, never deletes or edits content. Advancing a post is always the owner's call.

---

## Inputs

| Input | Path |
|---|---|
| Content tree | `content/[YYYY-MM]/` (status conventions in [`content/README.md`](../../content/README.md)) |
| Scheme Usage Log | bottom of [`simplifai-instagram-post.md`](simplifai-instagram-post.md) |
| Reel Rotation Log | bottom of [`simplifai-faceless-reel.md`](simplifai-faceless-reel.md) |
| Latest calendar | most recent dated file in [`content-calendars/`](../../content-calendars/) |
| Ads tracker | [`growth/ads/simplifai_ad-performance-tracker.csv`](../../growth/ads/simplifai_ad-performance-tracker.csv) |
| Organic tracker | [`growth/organic/simplifai_organic-performance-tracker.csv`](../../growth/organic/simplifai_organic-performance-tracker.csv) |

---

## The audit routine

Walk the inputs above, then run these six checks. For each, report findings with folder paths so the owner can act with one click.

1. **Stuck drafts** — `DRAFT_` folders whose date is more than 7 days old. These are the "80% built, never shipped" leak. List each with its age.
2. **Approved but unpublished** — `APPROVED_` folders that never advanced to `PUBLISHED_`. If this is systemic (many folders, as it is today because publishing has not been logged by rename yet), say so **once** as a systemic note with a count — do not list 25 folders as 25 alarms. Highlight only the 2–3 most recent as candidates to publish this week.
3. **Incomplete folders** — post folders missing their expected contents: the `.html` build file, the `_caption_` markdown, or an exported `slides/` subfolder with PNGs. (Reels and script-only posts hold just `.md` files — do not flag those for missing HTML/slides.)
4. **Rotation drift** — cross-check the content tree against the Scheme Usage Log (and the Reel Rotation Log for reels): static posts/carousels in `content/` with no log entry, or log entries whose post folder cannot be found. The logs are the single source of truth for scheme rotation; drift breaks the "never two consecutive posts on the same scheme" rule silently.
5. **Calendar gaps** — slots in the latest calendar with no matching post folder, and posts built this week that were never on the calendar. Note whether the current week even *has* a calendar.
6. **Untracked publishes** — `PUBLISHED_` folders with no row in the organic tracker (`content_piece` column). These are posts live in the world with no measurement — flag them for a [`simplifai-organic-performance`](simplifai-organic-performance.md) log pass.

### Verify before reporting

- Every flagged item must name a real path you actually observed — never infer a folder's existence from a log or calendar entry alone.
- Distinguish "missing" from "not applicable" (reels have no slides; stories may be script-only).
- If a check cannot run (e.g. no calendar exists for the current week), report that under Coverage notes rather than skipping silently.

---

## Report format (printed in chat)

```markdown
## Pipeline status — [YYYY-MM-DD]

**Health in one line:** [e.g. "2 drafts stuck, publishing unlogged since launch, rotation log clean."]

### Needs a decision
- [stuck draft / approved-and-ready item] — `path` — [age / what's missing / suggested action]

### Systemic
- [e.g. "All N approved posts still carry APPROVED_ — publish renames are not being done. Most recent 3: ..."]

### Rotation
- [drift findings, or "Scheme Usage Log matches the content tree. Last scheme: X — next post is due on Y."]

### Calendar
- [gaps vs the latest calendar, or "no calendar for the current week"]

### Unmeasured
- [PUBLISHED_ folders with no organic tracker row, or "none"]

### Coverage notes
- [checks that could not run and why]
```

Keep it under ~30 lines. The report's job is to make Sunday's decisions obvious, not to inventory the repo.

---

## After the audit (handoff)

- Stuck drafts and approved-but-unpublished posts feed the **This week's plan** section of the briefing and get slotted by [`simplifai-content-calendar`](simplifai-content-calendar.md) **before** any new build is proposed.
- Unmeasured publishes go to [`simplifai-organic-performance`](simplifai-organic-performance.md) for logging.
- Rotation drift is fixed by the owner (or by Ben when building the next post) by appending the missing entries to the Scheme Usage Log — never by this skill.
