# Simplifai Weekly Briefing - Week of 2026-11-15

*Prepared by Ben with AI assistance. Every number traces to a tracker; every claim traces to a digest.*

## TL;DR
- **Do:** Restart the loop. Nothing in the pipeline has moved since 2026-07-05: no publish renames, no tracker rows, no calendar, no new content in 19 weeks. Before anything new ships, confirm what actually got posted in July (the W27 calendar planned 7 publishes and there is no record of any), rename those folders, and log the one known published post's numbers, which have been due since 2026-07-12.
- **Working:** Unknown, honestly. The last data is 19 weeks old (ads tracker, 2026-W26): the "5 prompts" single was the standout at $2.15/follow and 8 of 9 campaign saves. That signal is worth retesting, not assuming.
- **Fix:** The measurement gap. One post is live in the world (`PUBLISHED_simplifai_instagram-5-prompts-personal-assistant_2026-07-04`) with zero rows in the organic tracker, and the ads tracker has had no check-in since 2026-07-03. Until something is logged, every readout stays "no data".

## Performance readout

**Paid (last data: 2026-W26, 2026-06-27 to 07-03, from `growth/ads/simplifai_ad-performance-tracker.csv`; 19 weeks stale):**
- Last logged decisions: **scale** the 5-prompts single ($2.15/follow, 11 of 14 campaign follows), **iterate** the design-method carousel (124 visits, 1 follow: fix the follow CTA), **test** the story-cowork reel (inconclusive on $10.19), **pause** the workflow-bottleneck reel.
- No W27 or later rows exist, so whether the scale and retest decisions were ever executed is unknown. These decisions are too old to action as-is; the ads lane this week is "confirm and relog", not "run the old plan".
- **Decision due:** owner confirms whether any campaign is still running in Ads Manager, then logs one row per creative at the Friday check-in. If nothing has run since July, log nothing and the lane restarts clean next week.

**Organic (from `growth/organic/simplifai_organic-performance-tracker.csv`):**
No organic data yet; the tracker still holds only the marked example row. The PA-prompts post published 2026-07-05 and its first snapshot (due 2026-07-12) was never taken. A snapshot now still has value as a lifetime read: log it this week and mark the late snapshot date in the notes column.

## Intel highlights
1. **Claude now does spreadsheets, whiteboards and dashboards** (Anthropic, 5 to 12 Nov, verified on the primary blog). The assistant owners already use for writing can now hold the price list and the weekly numbers. Beta, paid plans only, honest limits noted in the digest. This week's recommended build. *(source: DRAFT_intel-digest_2026-11-15.md, item 1)*
2. **Gemini "skills" are rolling out across Gmail, Docs, Drive and Chat** (Google Workspace blog via secondary coverage, 10 Nov). Owners on Workspace can save and reuse their best prompts inside the inbox. Gradual rollout, not in Sheets or Meet yet. *(source: DRAFT_intel-digest_2026-11-15.md, item 2)*
3. **ChatGPT Images 2.6 holds details steady across edits** (OpenAI release notes via search, 4 Nov). Makes AI product and promo images editable without the whole design morphing. Plan availability unverified. *(source: DRAFT_intel-digest_2026-11-15.md, item 3)*
4. **Competitor intel is stale.** Both competitor digests date to 2026-06-28 (20 weeks old). Their core finding likely still stands (nobody sells credible, owner-controlled AI; everyone teaches you to start a business, not run one) but it needs a fresh sweep; see Coverage notes for why this run could not do it.

## Pipeline status

**Health in one line:** the engine has been paused for 19 weeks; nothing has moved since 2026-07-05, and the first job is finding out what actually shipped.

### Needs a decision
- **What published in July?** The 2026-07-05 calendar planned 6 feed posts and 1 reel for publishing. No folder was renamed, no metric was logged, and the rotation log stops at 2026-07-04. Only the owner knows what went live; everything downstream waits on this answer.
- `content/2026-07/DRAFT_simplifai_lead-magnet_60-prompts_2026-07-04/` - the live PA post's caption promises "DM the word PROMPTS"; if that promise is still being made, the lead magnet delivery is 19 weeks overdue (or the promise should be edited out).
- Three complete, evergreen drafts ready for an approve decision: `DRAFT_simplifai_instagram-system-audit_2026-06-27`, `DRAFT_simplifai_carousel-system-owner_2026-06-30`, `DRAFT_simplifai_carousel-system-sales_2026-06-30` (all have html + caption + exported slides).
- Stuck-draft triage: `DRAFT_simplifai_reel-scripts_ccc-case-study_2026-06-21` (VO rendered, nearest-done reel) and the two 2026-06-14 production scripts have sat for 5 months. Assemble, or archive (owner's action; Ben never archives).

### Systemic
- All 18 `APPROVED_` folders still carry `APPROVED_`; publish renames have never been done (same finding as the 2026-07-05 briefing, unchanged).
- Conflict, surfaced not resolved: the ads tracker shows four creatives ran as paid ads in W26 while their folders read `APPROVED_` and the organic tracker is empty.

### Rotation
- Scheme Usage Log unchanged since 2026-07-04 (last entry: A, Yellow Hero). Next build takes B (Coral Hero).
- Drift carried over from the July audit, still unfixed: three 2026-06-22 carousels (`ai-roundup`, `canva-ai2`, `meta-ai`) have no log entry; the Reel Rotation Log's one entry has no matching folder; six reel folders are unlogged.

### Calendar
- No calendar exists for any week after 2026-07-11; an 18-week gap. This sweep creates the 2026-11-15 week.

### Unmeasured
- `PUBLISHED_simplifai_instagram-5-prompts-personal-assistant_2026-07-04`: live with no organic tracker row, snapshot overdue since 2026-07-12.

## This week's plan
1. **Priority 1: truth, then motion.** Owner confirms the July publish history, renames whatever actually went live to `PUBLISHED_` (owner's action), logs a late lifetime snapshot of the PA post into the organic tracker, and checks Ads Manager so the Friday check-in can log real rows (or a clean "nothing ran").
2. **Post brief 1 (the week's one new build): "Your AI assistant just learned spreadsheets"**
   - Pillar: System teaching (saves) · Format: 6-slide carousel · Scheme: **B (Coral Hero)**, next in rotation after the log's last entry (A, 2026-07-04).
   - Hook: "Your AI assistant just learned spreadsheets."
   - Slide beats: 1) Hook. 2) What shipped: Sheets, Whiteboards, shareable dashboards, same subscription. 3) Why it matters: the tool that drafts your captions can hold your price list and weekly numbers, one login not four. 4) Real example: "a sheet of this month's bookings by service, with totals", edited by asking. 5) Honest limits: beta, paid plans only, no pivot tables or live data yet; heavy Excel users keep Excel. 6) CTA: save for your next admin afternoon, follow for the weekly breakdown.
   - Source: DRAFT_intel-digest_2026-11-15.md, item 1 (full caption seed there, AI disclosure and 3 hashtags included).
3. **Post brief 2 (next build after that): "Stop retyping your best prompts into Gmail"**
   - Pillar: System teaching · Format: 6-slide carousel or single · Scheme: C (Purple Hero), continuing rotation.
   - Beats: what Gemini skills are; save a booking-reply skill once, reuse it in the inbox; gradual rollout so it may not be on your account yet; admins can switch it off; not in Sheets or Meet. CTA: follow.
   - Source: DRAFT_intel-digest_2026-11-15.md, item 2 (primary-source re-verification needed before publishing; see digest note).
4. **Carry-over fix (from the stale ads tracker, still unexecuted):** design-method carousel final-slide follow CTA, per its logged "iterate" decision. Draft only; owner approves before any paid re-run.

## This week's calendar
→ [`content-calendars/Simplifai_Content-Calendar_2026-11-15-to-11-21.md`](../content-calendars/Simplifai_Content-Calendar_2026-11-15-to-11-21.md)

## Coverage notes
- **Intel digest is fresh** (this sweep, 2026-11-15). Two of its three top items could not be verified at the primary source because this cloud session's network allowlist blocks help.openai.com and workspaceupdates.googleblog.com; both are flagged inline in the digest and sourced from consistent secondary coverage.
- **Competitor recon did not run, both lanes blocked in this environment.** Ads: the dependable path needs an Ad Library permalink captured in the owner's logged-in browser (none on hand) and the fetch script cannot run here. Content: youtube.com is outside the session's network allowlist (proxy refused the connection), so `fetch_youtube_top.py` cannot reach the channels, and the skill forbids describing videos that are not in the script output. Both digests remain dated 2026-06-28 and are 20 weeks stale. Remedy: allow youtube.com in this cloud environment's network settings for the content lane, and have the owner drop one Ad Library permalink per competitor into chat for the ads lane; either makes the next biweekly recon runnable.
- Ads tracker: no rows since 2026-W26 (19 weeks). Paid readout above is last-known, flagged stale, not current.
- Organic tracker: no real rows; organic readout is "no data", not an estimate.
- The Google Sheet mirror of the calendar: see the calendar file's own coverage note for whether it was created this run.
