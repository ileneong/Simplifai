## Numbers to grab from Meta Ads Manager

Pull these metrics **per active creative** from Meta Ads Manager for the period 2026-10-31 → 2026-11-06. Set the date range in Ads Manager, then break down by ad (creative level).

**Checklist — collect per active creative:**

- [ ] Amount spent
- [ ] Reach
- [ ] Impressions
- [ ] Frequency
- [ ] CPM (cost per 1,000 impressions)
- [ ] Estimated ad recall lift (people)
- [ ] Cost per estimated ad recall lift (people)
- [ ] Post engagements
- [ ] Saves
- [ ] Shares
- [ ] Profile visits
- [ ] New follows

**Approved creatives (candidate rows — confirm which are actively running in Ads Manager):**

| # | Creative folder name |
|---|---|
| 1 | APPROVED_simplifai_carousel-ai-roundup_2026-06-22 |
| 2 | APPROVED_simplifai_carousel-canva-ai2_2026-06-22 |
| 3 | APPROVED_simplifai_carousel-chatgpt-dictation_2026-06-30 |
| 4 | APPROVED_simplifai_carousel-chatgpt-memory_2026-06-22 |
| 5 | APPROVED_simplifai_carousel-meta-ai_2026-06-22 |
| 6 | APPROVED_simplifai_carousel-system-marketer_2026-06-30 |
| 7 | APPROVED_simplifai_carousel-weekend-rebuild_2026-06-21 |
| 8 | APPROVED_simplifai_carousel-workflow-bottleneck_2026-06-24 |
| 9 | APPROVED_simplifai_instagram-5-prompts_2026-06-25 |
| 10 | APPROVED_simplifai_instagram-adobe-express-free_2026-06-27 |
| 11 | APPROVED_simplifai_instagram-ai-use-policy_2026-06-27 |
| 12 | APPROVED_simplifai_instagram-carousel-design-method_2026-06-27 |
| 13 | APPROVED_simplifai_instagram-claude-small-business_2026-06-27 |
| 14 | APPROVED_simplifai_instagram-workflows_2026-06-24 |
| 15 | APPROVED_simplifai_reel-claude-small-business_2026-06-27 |
| 16 | APPROVED_simplifai_reel-script_2026-06-21 |
| 17 | APPROVED_simplifai_reel-workflow-bottleneck_2026-06-28 |
| 18 | APPROVED_simplifai_story-claude-cowork_2026-06-28 |

---

# Simplifai — Meta Ad Performance Report

**Report period:** 2026-10-31 to 2026-11-06 (2026-W44)
**Prepared by:** Simplifai
**Objective:** Awareness / reach (no website pixel)

---

## 1. Campaign summary

| Metric | Value |
|---|---|
| Total amount spent | |
| Total reach | |
| Total impressions | |
| Blended frequency | |
| Blended CPM | |
| Total post engagements | |
| Total saves | |
| Total shares | |
| Total profile visits | |
| Total new follows | |
| Cost per follow | |
| Visit-to-follow conversion | |

---

## 2. Per-creative breakdown

> Fill in one row per active creative. Add rows as needed. Delete example columns that don't apply.

| Creative | Format | Platform | Placement | Spent | Reach | Impressions | Freq | CPM | Recall lift (people) | Cost/recall | Engagements | Eng rate | Saves | Shares | Profile visits | New follows | Decision |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | | | | | | | |
| | | | | | | | | | | | | | | | | | |
| **TOTAL** | | | | | | | | | | | | | | | | | |

**Decision key:** `scale` = increase budget · `refresh` = creative fatiguing, swap it · `kill` = cut it · `test` = too early to judge · `pause` = hold for now

---

## 3. What worked

> (Fill in after reviewing the numbers — which creative had the lowest CPM? Highest recall lift? Best saves/follows?)

-
-
-

---

## 4. What didn't work

> (Creatives with high frequency + climbing CPM = fatigue. Creatives with high profile visits but low follows = weak CTA.)

-
-

---

## 5. Decisions for next week

| Creative | Decision | Action |
|---|---|---|
| | | |

---

## 6. Notes / what you learned

>

---

## 7. Tracker update reminder

After completing this report, add one row per active creative to:
`growth/ads/simplifai_ad-performance-tracker.csv`

Derived columns (compute before adding):
- **frequency** = impressions ÷ reach
- **cpm** = amount_spent ÷ impressions × 1000
- **cost_per_recall_lift** = amount_spent ÷ estimated_ad_recall_lift_people
