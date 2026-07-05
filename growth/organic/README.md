# Simplifai — Organic Post Performance Tracker

How to track the organic (unpaid) performance of Simplifai's own published posts. This is the sister system to [`../ads/`](../ads/README.md): the ads tracker measures paid reach, this one measures what the content earns on its own.

The point is to close the loop the content engine is missing: the Scheme Usage Log records what was *built* (format, scheme, accent), this CSV records how it *performed*, and the join between them tells us which formats, schemes, and pillars to double down on.

## How to use

1. About **7 days after a post goes live** (long enough for reach to settle), open **Instagram Insights** for the post.
2. Add **one row per post snapshot** to `simplifai_organic-performance-tracker.csv`. The `content_piece` value is the post's folder name under `content/[YYYY-MM]/` (e.g. `PUBLISHED_simplifai_carousel-ai-roundup_2026-06-22`) — this is the join key back to the build.
3. Record a `verdict` for every row: **repeat** (make more like this), **iterate** (good signal, fix one thing), or **retire** (angle or format is not earning its slot).
4. The [`simplifai-organic-performance`](../../.claude/skills/simplifai-organic-performance.md) skill does the logging and the analysis — paste your Insights numbers and it will validate the folder, look up the scheme/pillar, compute the derived columns, and append the row.

## Column legend

| Column | Meaning | Where to find it |
|---|---|---|
| `content_piece` | The post's folder name under `content/[YYYY-MM]/` | You set this |
| `publish_date` | Day the post went live, `YYYY-MM-DD` | You set this |
| `snapshot_date` | Day the numbers were pulled (aim for publish + 7 days) | You set this |
| `format` | carousel / single / reel / story | The post itself |
| `pillar` | system-teaching / myth-reframe / honest-limits / proof (from the growth strategy) | The post's brief |
| `scheme` | A / B / C / D | Scheme Usage Log in [`simplifai-instagram-post.md`](../../.claude/skills/simplifai-instagram-post.md) |
| `views` | Views / accounts reached | IG Insights → "Views" (or "Accounts reached") |
| `likes` | Likes | IG Insights |
| `comments` | Comments | IG Insights |
| `saves` | Saves | IG Insights |
| `shares` | Shares / sends | IG Insights |
| `profile_visits` | Profile visits from this post | IG Insights → "Profile activity" |
| `new_follows` | Follows from this post | IG Insights → "Profile activity" → "Follows" |
| `save_rate` | **Derived** — the authority headline number | see formulas |
| `engagement_rate` | **Derived** | see formulas |
| `follow_rate` | **Derived** — how well interest converts | see formulas |
| `verdict` | repeat / iterate / retire | You decide |
| `notes` | What you learned | You write |

If Insights does not show a number (some metrics hide below small thresholds), leave the cell **blank** and say so in `notes`. Never estimate.

## Derived formulas

- **save_rate** = `saves ÷ views × 100`
- **engagement_rate** = `(likes + comments + saves + shares) ÷ views × 100`
- **follow_rate** = `new_follows ÷ profile_visits × 100`

## What good looks like (organic)

- **Saves are the authority metric** (per [`strategy/Simplifai_Instagram-Growth-Strategy_2026-06.md`](../../strategy/Simplifai_Instagram-Growth-Strategy_2026-06.md)). For carousels, `save_rate` is the headline number — a carousel that gets read but not saved taught nothing worth keeping.
- **Shares** are the reach signal for reframes and single posts — the most-sent format wins.
- **follow_rate** is the funnel check: high profile visits with low follows means the profile or the follow CTA is the bottleneck, not the post.
- Judge patterns, not single posts: only trust a format/scheme/pillar signal once it shows up across **2–3 or more posts**.

The example row in the CSV is marked `EXAMPLE ROW` — replace it with real numbers once the first post is published and measured.
