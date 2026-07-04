---
name: simplifai-competitor-content-research
description: >
  Research competitors' best-performing organic content (YouTube, by public view count)
  and translate it into sharper content angles for Simplifai. Use this skill when asked to
  research competitor content, find what's working for a rival creator, do a content teardown,
  see a competitor's top videos, or find organic content angles for Simplifai. Pulls each
  channel's most-viewed videos and outputs a dated digest in research/digests/. Sister skill to
  simplifai-competitor-ads-research (which covers paid ads on Meta).
user-invocable: true
argument-hint: "[optional: a specific competitor / channel handle to focus on]"
metadata:
  version: 1.0.0
---

## Maintenance Note

Bump the version when edited — minor for tweaks (1.0.0 → 1.1.0), major for behavioural changes.

---

## What this skill is for

Several Simplifai competitors — especially the **§3 AI-automation educators** (Liam Ottley, Nick Saraev, and the workflow platforms) — don't run Meta ads; they grow on **organic content**. This skill studies that content so Simplifai can learn what resonates and reframe it credibly. It is the organic counterpart to [`simplifai-competitor-ads-research.md`](simplifai-competitor-ads-research.md).

**Why YouTube:** it's the one source where best-performing content is *publicly and reliably* measurable. View counts are visible and sortable by "Popular," and it renders without login. (Instagram's key metrics — Saves, reach — are private for accounts you don't own, and IG blocks automated access; see Notes.) For these creator-type competitors, YouTube *is* their flagship content, so it's the right lens.

**Input:** the watch list at [`research/sources/simplifai-competitor-ads-sources.md`](../../research/sources/simplifai-competitor-ads-sources.md) (§3 carries YouTube handles).
**Source of data:** YouTube channel "Popular" pages, via [`research/_scripts/fetch_youtube_top.py`](../../research/_scripts/fetch_youtube_top.py).
**Output:** a dated digest at `research/digests/DRAFT_competitor-content_[YYYY-MM-DD].md`.
**Focus argument:** if `$ARGUMENTS` names a competitor/handle, narrow to that one; otherwise sweep the §3 handles.

**Lens — read every top video through Simplifai's edge:**
- **System, owner-run.** Many educators sell "build an AI agency" or "automate everything." Simplifai sells the owner running their *own* business in a few hours a week. Note where their content assumes you want to become an agency or a developer.
- **Trust over hype.** Watch for income promises ("$20K/month"), FOMO ("you're falling behind"), and tool-of-the-week churn. These are the openings Simplifai owns by being credible and calm.
- **Plain English, no code.** Much of this content is technical (Claude Code, n8n). Simplifai's wedge is the non-technical, wellness-led owner.
- **Wellness-led.** None of these speak to wellness owners. That specificity is a lane.

---

## The research routine

1. **Read the watch list** §3 at [`research/sources/simplifai-competitor-ads-sources.md`](../../research/sources/simplifai-competitor-ads-sources.md) for the YouTube handles. If `$ARGUMENTS` names a competitor not listed, use the handle given (and suggest adding it).
2. **Fetch each channel's top videos:**
   ```bash
   python3 research/_scripts/fetch_youtube_top.py @LiamOttley -n 12
   ```
   Reads `research/_scratch/youtube_[handle].txt` (and `.json`): title, view count, age, duration, ranked by views.
3. **Read the signal, not just the rank.** Cross-read views against age:
   - **Evergreen winner** = high views + older = a durable theme the audience keeps wanting.
   - **Recent breakout** = high views + recent = a rising topic worth moving on fast.
   - **Format tell** = note long courses vs. short reactions; what length/format earns their biggest numbers.
4. **Cluster into themes, not titles.** Five videos about "build an AI agency" = one theme. Record the theme and its pull.
5. **Verify before asserting.** Only describe videos in the script output. If a channel returns 0 (wrong handle, no public videos, DOM change), say so under Coverage notes — never invent titles or numbers.
6. **Translate** each theme through the teardown format (below).
7. **Synthesise** cross-competitor patterns and the gaps Simplifai can own.
8. **Write the digest** to `research/digests/DRAFT_competitor-content_[YYYY-MM-DD].md`.

---

## The teardown (per channel)

- **Who & what** — channel, what they teach/sell, who they target.
- **Top themes** — the 2–4 clusters their best videos fall into, with the standout title + view count as evidence.
- **The hook style** — how their winning titles are built (income promise, "X just dropped," "full course," fear, curiosity).
- **Evergreen vs. breakout** — which themes are durable, which are riding a moment.
- **Format** — the length/format that earns their biggest numbers.
- **Simplifai read** — where this is more technical, more hype, or more agency-focused than Simplifai, and what Simplifai should do *differently* (not copy). Name the gap.

---

## Voice & compliance guardrails (non-negotiable)

Pulled from [`CLAUDE.md`](../../CLAUDE.md). This is research, but anything that becomes Simplifai content must obey:

- **Don't copy income-promise or FOMO hooks.** "$20K/month" and "you're falling behind" are banned for Simplifai. The move is the credible reframe, not the same bait.
- **No fabricated metrics.** Describe only videos and view counts actually captured. View counts are approximate (YouTube rounds to K/M) — treat them as relative signal, not exact figures.
- **No em dashes** in any suggested copy or hook (user preference — commas, full stops, or rewrite).
- **Plain English.** Owners are experts in their field, not in AI or code.
- **Disclose AI assistance** on the resulting Simplifai content.
- **Don't name-and-shame in public copy.** Competitor critique stays internal intel.

---

## Digest output template

Write to `research/digests/DRAFT_competitor-content_[YYYY-MM-DD].md`:

```markdown
# Simplifai Competitor Content — [YYYY-MM-DD]

*What's working organically for rival creators (YouTube, ranked by public views), read against Simplifai's edge. Researched with AI; view counts observed on [date], approximate as YouTube rounds them.*

## TL;DR — the three things Simplifai should take from this
1. ...
2. ...
3. ...

## Teardowns

### [Channel 1] (@handle)
- **Who & what:** ...
- **Top themes:** ... (evidence: "[title]" — [views])
- **Hook style:** ...
- **Evergreen vs. breakout:** ...
- **Format:** ...
- **Simplifai read:** [the gap + what Simplifai does differently]

### [Channel 2] ...

## Cross-competitor patterns
- **Themes everyone wins with:** ...
- **Hook styles everyone leans on:** ...
- **What nobody is teaching** (the open lane for Simplifai): ...

## Angles for Simplifai's own content
Two or three content angles, each grounded in a gap above. For each:
- **Angle:** [one line]
- **Why it's open:** [which competitor pattern/gap it exploits]
- **Hook starter:** "..." (no em dashes, no income-promise or FOMO, Simplifai voice)
- **Format + pillar:** [carousel/reel/etc. + which Simplifai pillar]
- **Proof Simplifai can stand on:** [a true thing Simplifai owns]

## Coverage notes
- Channels swept: [list]
- Could not reach / no public videos: [list, with reason]
- Watch-list changes suggested: [add/retire handles]
```

---

## After the digest (handoff)

1. Owner reviews, picks an angle or two worth making.
2. Build it with [`simplifai-instagram-post.md`](simplifai-instagram-post.md) (carousel) or [`simplifai-faceless-reel.md`](simplifai-faceless-reel.md) (reel) as the format requires.
3. Cross-check with the ads digest from [`simplifai-competitor-ads-research.md`](simplifai-competitor-ads-research.md) — paid + organic together show the full competitive picture.

## Notes & limits

- **YouTube by design.** It's the only source where best-performing content is publicly and reliably measurable for accounts you don't own.
- **Instagram is not reliably gettable.** Saves and reach are private for other accounts; likes/comments and reel views are visible but Instagram blocks automation hard and it risks bans. If IG is essential, capture manually: open the competitor's profile in your own browser and read their **pinned posts** (their chosen best) and **top reels by view count**, then hand those in for teardown. Don't scrape IG automatically.
- **Views are approximate** (rounded to K/M) and "Popular" favours older hits — always cross-read the age so an evergreen winner isn't mistaken for a current trend.
- This skill **studies** competitors to sharpen Simplifai; it does not produce competitor-bashing content. Critique stays internal.
