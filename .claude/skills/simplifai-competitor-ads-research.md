---
name: simplifai-competitor-ads-research
description: >
  Research what competitors are advertising in the Meta Ad Library and translate it into
  sharper positioning for Simplifai's own ads. Use this skill when asked to research competitor
  ads, run a competitor ad scan, study how rivals advertise, do an ad teardown, or find ad
  angles for Simplifai. Sweeps the curated competitor watch list, pulls live ads from the Meta
  Ad Library, and outputs a dated research digest in research/digests/ with the angles, offers,
  and positioning gaps Simplifai can use.
user-invocable: true
argument-hint: "[optional: a specific competitor or angle to focus on]"
metadata:
  version: 1.0.0
---

## Maintenance Note

Bump the version when edited — minor for tweaks (1.0.0 → 1.1.0), major for behavioural changes.

---

## What this skill is for

Simplifai sells "trustworthy before trendy, a system not content, the owner stays in control, health-and-wellness-led." To make Simplifai's **own ads** land harder, it helps to see exactly how rivals are advertising into the same space — their hooks, offers, proof, and the objections they handle (or dodge). This skill is reconnaissance for Simplifai's paid and organic positioning. It does NOT design ads or write final campaign copy — it produces the *intel* and the *angles* that inform them.

**Input:** the curated watch list at [`research/sources/simplifai-competitor-ads-sources.md`](../../research/sources/simplifai-competitor-ads-sources.md).
**Source of ads:** the **Meta Ad Library** (facebook.com/ads/library) — public, no login, shows every ad a Page is currently running.
**How ads are gathered:** the Ad Library *search* view is login-gated (WebFetch gets nothing; an un-logged-in headless browser only returns a generic, unscoped feed — verified 2026-06-28). But the **single-ad permalink** (`?id=<LibraryID>`) renders *without* login and helpfully lists the advertiser's other active ads too. So the dependable automated path is `fetch_meta_ads.py --ad-id <id-or-URL>`: one ad id yields a whole angle set for that advertiser. Fallback is `--paste` (the owner copies ads from their own logged-in browser). Output lands in `research/_scratch/`. Script: [`research/_scripts/fetch_meta_ads.py`](../../research/_scripts/fetch_meta_ads.py).
**Output:** a dated digest at `research/digests/DRAFT_competitor-ads_[YYYY-MM-DD].md`.
**Focus argument:** if `$ARGUMENTS` is provided, narrow the sweep to that competitor or that angle (e.g. "GoHighLevel" or "free-tier hooks"). If empty, sweep the full list.

**Lens — read every competitor ad through Simplifai's edge:**
- **Whole-business, not marketing-only.** Most rivals sell marketing tools. Simplifai runs the *whole* business. Note where a competitor is narrower.
- **System, not content-for-hire.** Watch for "we make your content" promises Simplifai deliberately rejects.
- **Trust over hype.** Flag fearmongering ("you're falling behind"), inflated claims, and fake-looking before/afters — these are the openings Simplifai owns by being credible.
- **Wellness-led.** Note any ad that speaks to health/wellness owners; that language is gold.

---

## The research routine

1. **Read the watch list** at [`research/sources/simplifai-competitor-ads-sources.md`](../../research/sources/simplifai-competitor-ads-sources.md). If `$ARGUMENTS` names a competitor not on the list, add them to the sweep for this run (and suggest adding them to the file).
2. **Get one ad permalink per competitor.** Ask the owner to open the competitor in **facebook.com/ads/library** (any browser), click one of the brand's ads, and copy its `?id=...` URL. One id is enough — the permalink also returns the advertiser's other active ads.
3. **Fetch by ad id** (no login):
   ```bash
   python3 research/_scripts/fetch_meta_ads.py --ad-id "https://www.facebook.com/ads/library/?id=1276696327884014"
   ```
   This writes `research/_scratch/meta-ad_[id].txt` (and `.json`) with the advertiser, dates, and every active creative captured. Capture per brand: ad count, dominant hooks, offer(s), and how long the main angles have run (`Started running on` dates). **Longevity = signal:** an angle running for months, or one with many headline variants, is one that converts for them.
   - *Fallback — paste mode:* if you can't get a permalink, have the owner click the advertiser, scroll, **Select All > Copy** into a `.txt`, then `--paste [file]`. Or they paste the text into chat and you parse the `Library ID`-anchored blocks directly.
   - *Last resort — live search:* `--login` then `--page-id [ID]`; frequently blocked, so don't depend on it.
4. **Dedupe to angles, not ads.** Ten variations of one promise = one angle. Record the angle, not every creative.
5. **Verify before asserting.** Only describe ads that appear in the script output. If a fetch returns 0 ads (login wall, no active ads, or stale selectors) or the brand can't be reached, say so plainly under Coverage notes — never invent ads. Partial-but-honest beats complete-but-fabricated.
6. **Translate each angle** through the teardown format (below).
7. **Synthesise** the cross-competitor patterns and the gaps Simplifai can own.
8. **Write the digest** to `research/digests/DRAFT_competitor-ads_[YYYY-MM-DD].md` using the template below.

---

## The teardown (per competitor)

For each competitor with active ads, produce:

- **Who & what** — brand, what they're selling, who they target.
- **Dominant hook(s)** — the opening line/promise doing the heavy lifting, quoted.
- **The offer** — free trial, demo, "build in X seconds," price-led, agency-replacement, etc.
- **Proof used** — testimonials, numbers, logos, before/after, or none.
- **Objection handled** — what fear or doubt the ad pre-empts.
- **Longevity** — how established the angle looks (many variants / long run = working).
- **Simplifai read** — where this is narrower, hypier, or less credible than Simplifai, and what Simplifai should do *differently* (not copy). Name the gap.

---

## Voice & compliance guardrails (non-negotiable)

Pulled from [`CLAUDE.md`](../../CLAUDE.md). This is research, but anything that becomes Simplifai copy must obey:

- **Don't copy a competitor's fearmongering.** If a rival's best-performing hook is "you're falling behind," the Simplifai move is the *credible reframe*, not the same FOMO.
- **No fabricated competitor claims.** Describe only ads you actually saw. No invented quotes, numbers, or screenshots.
- **No em dashes** in any suggested ad copy or hook (user preference — use commas, full stops, or rewrite).
- **Substantiation.** Any number or claim Simplifai borrows as inspiration must be re-grounded in Simplifai's own truth before use.
- **Don't name-and-shame in public copy.** Competitor critique stays internal intel; Simplifai's own ads compete on its strengths, not by trashing rivals by name.

---

## Digest output template

Write to `research/digests/DRAFT_competitor-ads_[YYYY-MM-DD].md`:

```markdown
# Simplifai Competitor Ads — [YYYY-MM-DD]

*What rivals are running in the Meta Ad Library, read against Simplifai's edge. Researched with AI; every ad observed live in the Ad Library on [date]. Reach gaps noted.*

## TL;DR — the three things Simplifai should take from this
1. ...
2. ...
3. ...

## Teardowns

### [Competitor 1]
- **Who & what:** ...
- **Dominant hook(s):** "..."
- **The offer:** ...
- **Proof used:** ...
- **Objection handled:** ...
- **Longevity:** ...
- **Simplifai read:** [the gap + what Simplifai does differently]

### [Competitor 2]
...

## Cross-competitor patterns
- **Hooks everyone leans on:** ...
- **Offers everyone leans on:** ...
- **What nobody is saying** (the open lane for Simplifai): ...

## Angles for Simplifai's own ads
Two or three positioning angles, each grounded in a gap above. For each:
- **Angle:** [one line — the positioning]
- **Why it's open:** [which competitor weakness/gap it exploits]
- **Hook starter:** "..." (no em dashes, no fearmongering, Simplifai voice)
- **Proof Simplifai can stand on:** [a true claim Simplifai actually owns]

## Coverage notes
- Competitors swept: [list]
- Could not reach / no active ads: [list, with reason]
- Watch-list changes suggested: [add/retire]
```

---

## After the digest (handoff)

1. Owner reviews the digest, picks an angle or two worth testing.
2. Build the ad creative with [`simplifai-instagram-post.md`](simplifai-instagram-post.md) or [`simplifai-design.md`](simplifai-design.md) as the format requires.
3. Keep the watch list current — apply any add/retire suggestions to [`research/sources/simplifai-competitor-ads-sources.md`](../../research/sources/simplifai-competitor-ads-sources.md).

## Notes & limits

- **Meta Ad Library only** by design. If asked to add TikTok, LinkedIn, or Google Ads Transparency later, that's a major version bump and a new source section.
- **Never WebFetch the library** — it's a login-gated JS shell and returns nothing. Use paste mode via [`research/_scripts/fetch_meta_ads.py`](../../research/_scripts/fetch_meta_ads.py).
- **Login is the wall.** An un-logged-in browser (headless or not) returns a generic, unscoped feed — not the brand's ads. That's why the owner captures the ads in their own logged-in browser and the skill parses the copy. The `--login`/`--page-id` automated path exists but is frequently blocked; don't rely on it.
- **Image-baked copy is a real limit.** Some ads carry their message inside the image/video, so the pasted text can be thin for those — note it rather than over-reading.
- **Filter to the advertiser.** A bare keyword view mixes in other advertisers (and platform brands like GoHighLevel surface their customers' ads). Always click through to the advertiser before copying.
- This skill **studies** competitors to sharpen Simplifai; it does not produce competitor-bashing content. Critique stays internal.
