## Numbers to grab from Meta Ads Manager

For each **active creative** in this period, pull the following metrics from Meta Ads Manager (Campaign → Ad level, filtered to 2026-11-14 – 2026-11-20):

**Per-creative checklist:**
- [ ] Amount spent
- [ ] Reach (unique people)
- [ ] Impressions (total)
- [ ] Frequency *(or derive: impressions ÷ reach)*
- [ ] CPM *(or derive: spend ÷ impressions × 1000)*
- [ ] Estimated ad recall lift (people) *(awareness objective — "Estimated ad recall lift (people)")*
- [ ] Post engagements
- [ ] Saves *(post insights)*
- [ ] Shares *(post insights)*
- [ ] Profile visits *(post insights)*
- [ ] New follows *(post insights → "Follows")*

**Approved creatives to check (enter each row that ran as an ad):**
- [ ] APPROVED_simplifai_carousel-ai-roundup_2026-06-22
- [ ] APPROVED_simplifai_carousel-canva-ai2_2026-06-22
- [ ] APPROVED_simplifai_carousel-chatgpt-dictation_2026-06-30
- [ ] APPROVED_simplifai_carousel-chatgpt-memory_2026-06-22
- [ ] APPROVED_simplifai_carousel-meta-ai_2026-06-22
- [ ] APPROVED_simplifai_carousel-system-marketer_2026-06-30
- [ ] APPROVED_simplifai_carousel-weekend-rebuild_2026-06-21
- [ ] APPROVED_simplifai_carousel-workflow-bottleneck_2026-06-24
- [ ] APPROVED_simplifai_instagram-5-prompts_2026-06-25
- [ ] APPROVED_simplifai_instagram-adobe-express-free_2026-06-27
- [ ] APPROVED_simplifai_instagram-ai-use-policy_2026-06-27
- [ ] APPROVED_simplifai_instagram-carousel-design-method_2026-06-27
- [ ] APPROVED_simplifai_instagram-claude-small-business_2026-06-27
- [ ] APPROVED_simplifai_instagram-workflows_2026-06-24
- [ ] APPROVED_simplifai_reel-claude-small-business_2026-06-27
- [ ] APPROVED_simplifai_reel-script_2026-06-21
- [ ] APPROVED_simplifai_reel-workflow-bottleneck_2026-06-28
- [ ] APPROVED_simplifai_story-claude-cowork_2026-06-28

---

# Simplifai — Weekly Meta Ads Report

**Report period:** 2026-11-14 to 2026-11-20 (2026-W46)
**Prepared by:** Simplifai
**Date prepared:** 2026-11-21

---

## Campaign summary

| Metric | Value |
|---|---|
| Total amount spent | |
| Total reach | |
| Total impressions | |
| Blended CPM | |
| Blended frequency | |
| Total estimated ad recall lift (people) | |
| Total post engagements | |
| Total saves | |
| Total shares | |
| Total profile visits | |
| Total new follows | |
| Cost per follow | |

---

## Per-creative breakdown

> Fill one row per active creative. Add or remove rows as needed.

| content_piece | format | platform | placement | amount_spent | reach | impressions | frequency | CPM | est_ad_recall_lift | post_engagements | saves | shares | profile_visits | new_follows | decision | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | | | | | | |
| | | | | | | | | | | | | | | | | |
| | | | | | | | | | | | | | | | | |
| TOTAL / campaign | | | | | | | | | | | | | | | | |

---

## Creative decisions

> For each creative that ran, record your call: **scale** (more budget) · **refresh** (creative fatiguing — swap it) · **kill** (cut it).

| content_piece | decision | rationale |
|---|---|---|
| | | |

---

## Key takeaways

> What did this week teach you? Best performer, worst performer, anything to test next week.

-
-
-

---

## Next steps

> Actions coming out of this report (budget changes, creative swaps, new tests to run).

- [ ]
- [ ]

---

## Tracker update reminder

After filling in the numbers above, add a row per creative to:
`growth/ads/simplifai_ad-performance-tracker.csv`

Columns: `report_period, date_start, date_end, content_piece, format, platform, placement, audience, amount_spent, reach, impressions, estimated_ad_recall_lift_people, frequency, cpm, cost_per_result, post_engagements, engagement_rate, saves, shares, profile_visits, new_follows, decision, notes`

Derived fields (compute before entering):
- **frequency** = impressions ÷ reach
- **cpm** = amount_spent ÷ impressions × 1000
- **cost_per_recall_lift** = amount_spent ÷ estimated_ad_recall_lift_people
- **engagement_rate** = post_engagements ÷ reach × 100
