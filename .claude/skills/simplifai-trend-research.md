---
name: simplifai-trend-research
description: >
  Research the latest AI-tool updates and translate them into trustworthy, owner-ready
  Instagram content for Simplifai, the AI partner that helps health and wellness business
  owners run their whole business with AI. Use this skill when asked to research what's new in
  AI, produce the weekly intel digest, or turn a tool update into a content idea. Sweeps the
  curated source list, keeps only verified shipped updates, and outputs a digest in
  research/digests/ plus a ready-to-build carousel brief. This is the front end of Simplifai's
  research → carousel content engine.
user-invocable: true
metadata:
  version: 2.2.0
---

## Maintenance Note

Bump the version when edited — minor for tweaks (1.0.0 → 1.1.0), major for behavioural changes.

---

## What this skill is for

Simplifai earns authority by being **first to translate** what's new in AI for small business owners — "trustworthy before trendy, authoritative before aesthetic." This skill is the research front end of that engine. It does NOT design posts (that's [`simplifai-instagram-post.md`](simplifai-instagram-post.md)); it produces the *intel* and the *brief* that feed it.

**Inputs:** the curated watch list at [`research/sources/simplifai-ai-tool-sources.md`](../../research/sources/simplifai-ai-tool-sources.md).
**Output:** a weekly digest at `research/digests/DRAFT_intel-digest_[YYYY-MM-DD].md`.
**Topic scope — two boundaries:**
- **Whole-business (the task):** AI tool updates that help an owner run *any* part of their business — marketing, but also customer service, sales, operations, admin, scheduling, finance, and everyday productivity. Marketing is one lane, not the boundary.
- **Wellness-led (the audience):** Simplifai's home turf and deepest expertise is health and wellness owners. Judge each update first by whether a *wellness* owner can use it and frame the resulting content for them (a clinic's bookings, a coach's client comms, a supplement brand's CRM) — but a broadly useful update for any small owner still qualifies. Wellness is the lead lens, not a hard filter.

Out of scope: platform/algorithm trends, generic business tactics, and developer/API-only or enterprise-gated changes — unless they ride in on a tool update an ordinary small owner can actually use.

---

## The research routine

1. **Read the source list** at [`research/sources/simplifai-ai-tool-sources.md`](../../research/sources/simplifai-ai-tool-sources.md).
2. **Sweep every source** with WebSearch / WebFetch for updates from roughly the **last 7–10 days**. Bias toward primary sources (the tool's own newsroom/changelog/release notes).
3. **Dedupe** — one item per real update, even if covered by several outlets.
4. **Apply the owner-value filter** (below) and keep the survivors.
5. **Verify before trusting** — every kept item must trace to a primary announcement with a date. Aggregators are leads only; never let a newsletter be the source of a claim.
6. **Translate** each kept item through the credibility format (below).
7. **Rank** by owner value and **map** each to a content format.
8. **Write the digest** to `research/digests/DRAFT_intel-digest_[YYYY-MM-DD].md` using the template below.

### The owner-value filter — "Does this help a small owner (wellness first) run their business this week?"
Keep an update only if a busy owner with no technical or marketing background — a wellness owner by default — could **use it within a week** in *some* part of their business (marketing, customer comms, sales, ops, admin, finance, or productivity). Drop:
- Enterprise-only or paid-tier-gated features most solo owners can't reach.
- Developer/API-only changes.
- Research demos and "coming soon" with no ship date.
- Pure hype, funding news, or model-benchmark chatter with no practical action.

Aim for breadth across the lanes over a few weeks — if every digest is marketing-only, the sweep is too narrow.

**Rumours and unconfirmed reports:** allowed in the digest only if explicitly flagged as *rumour / unconfirmed* — never carried forward into a published post as fact.

---

## The credibility translation (the core trust move)

For every kept item, produce these four fields. This is what separates Simplifai from hype accounts:

- **What changed** — one line, plain English, no jargon. (If you can't say it without a buzzword, you don't understand it yet.)
- **Source + date** — name the primary source and the announcement date. Always. This is the proof that earns authority.
- **So what for the owner** — the concrete payoff: "you can now do X in Y minutes / for free / without Z." Specific, not aspirational.
- **Honest caveat** — the limit, the catch, or who it's NOT for. (This feeds the *Honest limits* pillar and is itself a trust signal.)

---

## Content mapping (carousel-led)

Simplifai's content leans **carousel-led** because Saves are the authority metric. For each kept item, recommend a format:

| Update shape | Format | Pillar | Drives |
|---|---|---|---|
| A how-to / framework / "here's how to use it" | **Carousel** (default) | System teaching | Saves |
| A "skip the hype / here's the truth" angle | Reel or single | Myth / reframe | Shares |
| A tool's weak spot or honest limitation | Single or Reel | Honest limits | Follows |
| Fast-moving news that needs to go out now | Reel or single | Proof / news | Reach |

Pillars and metrics are defined in [`strategy/Simplifai_Instagram-Growth-Strategy_2026-06.md`](../../strategy/Simplifai_Instagram-Growth-Strategy_2026-06.md). Default to carousel unless the item is clearly better as news or a reframe.

For the **recommended post of the week**, pre-shape it into a carousel brief: a hook line + 5–6 slide beats + the suggested next colour scheme (check the rotation log in [`simplifai-instagram-post.md`](simplifai-instagram-post.md)) + the pillar. This makes the build near-zero back-and-forth.

---

## Voice & compliance guardrails (non-negotiable)

Pulled straight from [`CLAUDE.md`](../../CLAUDE.md). Bake these into every digest line that could become copy:

- **No FOMO or fearmongering hooks.** "You're falling behind" is banned. Lead with usefulness, not anxiety.
- **No unsubstantiated claims.** Every claim is sourced and dated, or it doesn't ship.
- **Plain English.** Owners are experts in their field, not in AI.
- **No em dashes** in any caption or on-graphic copy — use commas, full stops, or rewrite. (User preference, applies to all copy.)
- **Disclose AI assistance** on the resulting Simplifai post (in the caption).
- **Regulated-claim flag.** If an update touches health/finance/legal use, flag it so the resulting post avoids absolute claims.
- **Never include a URL** or simplifai.co on a graphic. Source citations live in the caption, named in words.

---

## Digest output template

Write to `research/digests/DRAFT_intel-digest_[YYYY-MM-DD].md`:

```markdown
# Simplifai Intel Digest — [Week of YYYY-MM-DD]

*AI tool updates worth an owner's attention this week. Researched with AI; every item traced to a primary source.*

## Top 3 this week

### 1. [Headline in plain English]
- **What changed:** ...
- **Source + date:** [Tool name], [primary source], [date]
- **So what for the owner:** ...
- **Honest caveat:** ...
- **Content angle:** [format] · [pillar] · hook: "..."

### 2. ...
### 3. ...

## Watch list
- [One-line item] — [source, date]. (Flag rumours as *unconfirmed*.)
- ...

## Recommended post of the week
**[Item #] → Carousel**
- **Pillar:** ...
- **Suggested scheme:** [next in rotation per simplifai-instagram-post.md log]
- **Hook (slide 1):** "..."
- **Slide beats:**
  1. ...
  2. ...
  3. ...
  4. ...
  5. ...
  6. CTA
- **Caption seed:** [hook + value + CTA, source named, AI disclosed, no em dashes]
```

---

## After the digest (handoff)

1. Owner reviews the digest, picks 1–2 items.
2. Build the carousel with [`simplifai-instagram-post.md`](simplifai-instagram-post.md) — check + log the scheme rotation, export PNGs with [`content/_scripts/export_slides.py`](../../content/_scripts/export_slides.py) into the post's `slides/` folder. Posts live in month folders: `content/[YYYY-MM]/DRAFT_simplifai_[type]_[YYYY-MM-DD]/`.
3. Write the caption (source named, AI disclosed, no em dashes) into the same post folder, run the compliance check.
4. DRAFT → APPROVED → PUBLISHED by renaming the post folder's status prefix in place.
