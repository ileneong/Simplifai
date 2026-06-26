# Simplifai Lead Qualification Rubric

*Last updated: 2026-06-01*

Score every candidate before logging them. Takes ~60 seconds per profile. Skip anyone with a disqualifier regardless of score.

---

## Step 1 — Disqualifiers (any one = stop)

Do **not** log or contact if the account is:

- An **existing CCC client** (a coaching client/lead of Conscious Connections) — never poach.
- A **competing AI-marketing / agency / "social media manager"** service.
- **Agency-backed** with an obvious in-house or hired marketing team (not our ICP — they don't need a system, they have staff).
- **Dormant** — no posts in ~60+ days, or clearly abandoned.
- A **personal / consumer / diary** account with no business signal.
- A **large brand** well outside the solo/small-team range.

---

## Step 2 — Fit score (0–2 each, max 12)

| # | Dimension | 0 | 1 | 2 |
|---|-----------|---|---|---|
| 1 | **Industry fit** | Unrelated niche | Adjacent (e.g. general wellness) | Core — coaching / mindfulness / conscious-wellness |
| 2 | **Business owner, solo/small team** | Employee or large org | Unclear | Clear owner/founder, ≤ ~15 staff |
| 3 | **Actively self-marketing** | Rarely posts | Posts occasionally | Posts regularly, runs their own content |
| 4 | **Visible marketing pain** | Polished & consistent (doesn't need us) | Some gaps | Inconsistent cadence / low-effort visuals / expert-but-invisible |
| 5 | **Community-active** | Broadcasts only | Some interaction | Genuinely engages — comments, replies, shows up for peers |
| 6 | **Reachable** | DMs closed / no contact path | Unclear | Open DMs or clear contact route |

> Note the nuance on **#4**: we want *room to help*, not a train wreck. Someone already flawless isn't a lead; someone struggling but committed is the sweet spot.

---

## Step 3 — Decide

- **Score ≥ 7/12** and no disqualifier → **qualified**. Log in `simplifai_lead-tracker.csv` (`qualified = Y`, record `fit_score`).
- **Score 5–6** → borderline. Log only if something stands out (great content, strong community presence); note why.
- **Score ≤ 4** → skip.

Record the score and a one-line reason in the tracker's `notes` so weekly review is easy and the bar stays consistent.
