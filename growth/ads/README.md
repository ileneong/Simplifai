# Simplifai — Meta Ad Performance Tracker

How to track paid Instagram + Facebook ads run on Simplifai content. Objective: **awareness / reach**.

Because Simplifai has **no website yet**, there is no landing page, pixel, or website conversion to measure. This system deliberately ignores clicks-to-site and instead tracks how cheaply and memorably each creative reaches the right people.

## How to use

1. After an ad finishes a run (or at the end of each weekly reporting period), open **Meta Ads Manager**.
2. Add **one row per creative** to `simplifai_ad-performance-tracker.csv` — not one row per campaign. We want to know which *content piece* wins.
3. At period end, roll the rows up into a report using `reports/_template/ads-report-template.md`.
4. Record a `decision` for every creative: **scale** (more budget), **refresh** (creative fatiguing — swap it), or **kill** (cut it).

## Column legend

| Column | Meaning | Where to find it |
|---|---|---|
| `report_period` | Reporting period label, e.g. `2026-W26` (ISO week) or `2026-06` (month) | You set this |
| `date_start` / `date_end` | Run window, `YYYY-MM-DD` | You set this |
| `content_piece` | The approved asset folder name (`APPROVED_…`) from its month folder under `content/[YYYY-MM]/` | You set this |
| `format` | carousel / single / reel | You set this |
| `platform` | IG / FB / both | Ads Manager → Breakdown by Platform |
| `placement` | feed / stories / reels | Ads Manager → Breakdown by Placement |
| `audience` | Short targeting note | Your ad set targeting |
| `amount_spent` | Spend for this creative | Ads Manager → "Amount spent" |
| `reach` | Unique people reached | Ads Manager → "Reach" |
| `impressions` | Total times shown | Ads Manager → "Impressions" |
| `estimated_ad_recall_lift_people` | Est. people who'd recall the ad in 2 days | Ads Manager → "Estimated ad recall lift (people)" (awareness objective) |
| `frequency` | **Derived** — see formulas | Ads Manager also reports this directly as "Frequency" |
| `cpm` | **Derived** — cost per 1,000 impressions | Ads Manager also reports this directly as "CPM" |
| `cost_per_recall_lift` | **Derived** — spend efficiency on recall | Ads Manager: "Cost per estimated ad recall lift (people)" |
| `post_engagements` | Total engagements on the ad | Ads Manager → "Post engagement" |
| `engagement_rate` | Engagements ÷ reach × 100 (%) | Derived, or post insights |
| `saves` | Saves | Post insights / "Saves" |
| `shares` | Shares | Post insights / "Shares" |
| `profile_visits` | Profile visits driven | Post insights / "Profile visits" |
| `new_follows` | Follows attributed to the run | Post insights / "Follows" |
| `decision` | scale / refresh / kill | You decide |
| `notes` | What you learned | You write |

## Derived formulas

- **frequency** = `impressions ÷ reach`
- **cpm** = `amount_spent ÷ impressions × 1000`
- **cost_per_recall_lift** = `amount_spent ÷ estimated_ad_recall_lift_people`

## What good looks like (awareness)

- **CPM** — lower is better. Compare creatives against each other; the cheapest reach wins.
- **Frequency** — keep it healthy (roughly under ~1.8–2.0 in a short window). Climbing frequency + climbing CPM = fatigue → **refresh** the creative or widen the audience.
- **Estimated ad recall lift** — higher (and lower cost per recall) means the ad is actually memorable, not just seen.
- **Saves / shares / profile visits** — secondary tiebreakers between creatives with similar CPM.

The example row in the CSV is marked `EXAMPLE ROW` — replace it with real numbers before reporting.
