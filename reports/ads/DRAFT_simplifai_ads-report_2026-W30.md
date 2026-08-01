## Numbers to grab from Meta Ads Manager

For **each active creative** below, pull the following metrics from Ads Manager (Columns → Customise → add each if not visible). Set the date range to **2026-07-25 → 2026-07-31** and break down by creative / ad name.

- [ ] Amount spent
- [ ] Reach
- [ ] Impressions
- [ ] Frequency
- [ ] CPM (cost per 1,000 impressions)
- [ ] Estimated ad recall lift (people)
- [ ] Post engagements
- [ ] Saves
- [ ] Shares
- [ ] Profile visits
- [ ] New follows (Follows)

**Approved creatives to check** (from `content/2026-06/` — confirm which were running as ads this week):

- `APPROVED_simplifai_carousel-ai-roundup_2026-06-22`
- `APPROVED_simplifai_carousel-canva-ai2_2026-06-22`
- `APPROVED_simplifai_carousel-chatgpt-dictation_2026-06-30`
- `APPROVED_simplifai_carousel-chatgpt-memory_2026-06-22`
- `APPROVED_simplifai_carousel-meta-ai_2026-06-22`
- `APPROVED_simplifai_carousel-system-marketer_2026-06-30`
- `APPROVED_simplifai_carousel-weekend-rebuild_2026-06-21`
- `APPROVED_simplifai_carousel-workflow-bottleneck_2026-06-24`
- `APPROVED_simplifai_instagram-5-prompts_2026-06-25`
- `APPROVED_simplifai_instagram-adobe-express-free_2026-06-27`
- `APPROVED_simplifai_instagram-ai-use-policy_2026-06-27`
- `APPROVED_simplifai_instagram-carousel-design-method_2026-06-27`
- `APPROVED_simplifai_instagram-claude-small-business_2026-06-27`
- `APPROVED_simplifai_instagram-workflows_2026-06-24`
- `APPROVED_simplifai_reel-claude-small-business_2026-06-27`
- `APPROVED_simplifai_reel-script_2026-06-21`
- `APPROVED_simplifai_reel-workflow-bottleneck_2026-06-28`
- `APPROVED_simplifai_story-claude-cowork_2026-06-28`

---

# Simplifai — Meta Ad Performance Report

**Report period:** 2026-07-25 to 2026-07-31 (2026-W30)
**Prepared by:** Simplifai
**Objective:** Awareness / reach

> **Note:** `reports/_template/ads-report-template.md` was not found in the repo at time of generation. This scaffold is based on the column definitions in `growth/ads/README.md` and the CSV structure in `growth/ads/simplifai_ad-performance-tracker.csv`. Create the template file when convenient so future reports can reference it directly.

---

## Campaign summary

| | Value |
|---|---|
| Total amount spent | _(fill in)_ |
| Total reach | _(fill in)_ |
| Total impressions | _(fill in)_ |
| Blended CPM | _(fill in)_ |
| Blended frequency | _(fill in)_ |
| Total post engagements | _(fill in)_ |
| Total saves | _(fill in)_ |
| Total shares | _(fill in)_ |
| Total profile visits | _(fill in)_ |
| Total new follows | _(fill in)_ |
| Cost per follow | _(fill in)_ |
| Cost per profile visit | _(fill in)_ |

---

## Creative breakdown

_One row per active creative. Leave blank if the creative was not running this week. Add rows if additional creatives were tested._

| Content piece | Format | Platform | Placement | Amount spent | Reach | Impressions | Frequency | CPM | Est. recall lift (people) | Cost per recall | Post engagements | Eng. rate | Saves | Shares | Profile visits | New follows | Decision | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| APPROVED_simplifai_carousel-ai-roundup_2026-06-22 | carousel | | | | | | | | | | | | | | | | | |
| APPROVED_simplifai_carousel-canva-ai2_2026-06-22 | carousel | | | | | | | | | | | | | | | | | |
| APPROVED_simplifai_carousel-chatgpt-dictation_2026-06-30 | carousel | | | | | | | | | | | | | | | | | |
| APPROVED_simplifai_carousel-chatgpt-memory_2026-06-22 | carousel | | | | | | | | | | | | | | | | | |
| APPROVED_simplifai_carousel-meta-ai_2026-06-22 | carousel | | | | | | | | | | | | | | | | | |
| APPROVED_simplifai_carousel-system-marketer_2026-06-30 | carousel | | | | | | | | | | | | | | | | | |
| APPROVED_simplifai_carousel-weekend-rebuild_2026-06-21 | carousel | | | | | | | | | | | | | | | | | |
| APPROVED_simplifai_carousel-workflow-bottleneck_2026-06-24 | carousel | | | | | | | | | | | | | | | | | |
| APPROVED_simplifai_instagram-5-prompts_2026-06-25 | single | | | | | | | | | | | | | | | | | |
| APPROVED_simplifai_instagram-adobe-express-free_2026-06-27 | single | | | | | | | | | | | | | | | | | |
| APPROVED_simplifai_instagram-ai-use-policy_2026-06-27 | single | | | | | | | | | | | | | | | | | |
| APPROVED_simplifai_instagram-carousel-design-method_2026-06-27 | carousel | | | | | | | | | | | | | | | | | |
| APPROVED_simplifai_instagram-claude-small-business_2026-06-27 | single | | | | | | | | | | | | | | | | | |
| APPROVED_simplifai_instagram-workflows_2026-06-24 | single | | | | | | | | | | | | | | | | | |
| APPROVED_simplifai_reel-claude-small-business_2026-06-27 | reel | | | | | | | | | | | | | | | | | |
| APPROVED_simplifai_reel-script_2026-06-21 | reel | | | | | | | | | | | | | | | | | |
| APPROVED_simplifai_reel-workflow-bottleneck_2026-06-28 | reel | | | | | | | | | | | | | | | | | |
| APPROVED_simplifai_story-claude-cowork_2026-06-28 | reel | | | | | | | | | | | | | | | | | |

**Decision key:** `scale` (increase budget) · `refresh` (creative fatiguing — swap) · `kill` (cut it) · `iterate` (test a variant) · `pause` · `test` (too early to judge)

---

## Derived formulas (for reference)

- **Frequency** = Impressions ÷ Reach
- **CPM** = Amount spent ÷ Impressions × 1,000
- **Cost per recall lift** = Amount spent ÷ Estimated ad recall lift (people)
- **Engagement rate** = Post engagements ÷ Reach × 100 (%)

---

## What to watch for (awareness objective)

- **CPM** — lower is better; cheapest reach wins between creatives.
- **Frequency** — flag if above ~1.8–2.0 in this window (fatigue signal → refresh creative or widen audience).
- **Estimated ad recall lift** — higher, and lower cost per recall, means the ad is genuinely memorable.
- **Saves / shares / profile visits** — secondary tiebreakers between creatives with similar CPM.

---

## Notes & observations

_(Fill in after entering numbers above.)_

---

## Next steps

_(e.g. which creatives to scale, which to kill, whether to run a new split test.)_

---

_Once this report is complete, copy each active creative's row into `growth/ads/simplifai_ad-performance-tracker.csv` using the column order defined in `growth/ads/README.md`._
