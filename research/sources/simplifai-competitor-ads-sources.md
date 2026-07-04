# Simplifai — Competitor Ads Watch List

The curated list for Simplifai's competitor-ads research. The skill that uses it — [`.claude/skills/simplifai-competitor-ads-research.md`](../../.claude/skills/simplifai-competitor-ads-research.md) — sweeps each brand below in the **Meta Ad Library** to study how rivals sell "AI for your business," so Simplifai's own ads land harder.

**What we're studying:** not the products — the *advertising*. Hooks, angles, offers, proof, objections handled, and the positioning gaps Simplifai can own. Simplifai's edge is "trustworthy before trendy, system not content, owner stays in control, health-and-wellness-led." Read every competitor ad against that.

**How to pull a competitor's ads (login-free, dependable):**
1. In your own browser (already logged into Facebook), open **facebook.com/ads/library**, set the country (US for most of these; AU where relevant), and search the brand.
2. **Click the advertiser** to filter to *their* ads — don't trust the bare keyword view (see warning below).
3. Scroll to load a batch, **Select All (Cmd+A) → Copy**, paste into a `.txt`, then parse:
   `python3 research/_scripts/fetch_meta_ads.py "Jasper" --country US --paste ~/Desktop/jasper-ads.txt`

The library shows every ad a Page is *currently running*, with launch dates and active/inactive status. A brand running many variations of one angle for a long time = that angle is working for them.

> **Why login-free paste, not scraping:** the Ad Library is login-gated. WebFetch returns nothing, and an un-logged-in headless browser returns a *generic, unscoped feed* — not the brand's ads (verified 2026-06-28: keyword runs for GoHighLevel/HighLevel/Jasper all surfaced unrelated advertisers — Tony Robbins, GNC, kidney supplements, even a person named "Jasper Phillips"). Capturing from your own logged-in browser sidesteps all of that.

> **Always click through to the advertiser.** A bare keyword view mixes advertisers. Platform brands (notably GoHighLevel) are run *through* by their customers, so a keyword view floods with customer ads. Filtering to the advertiser is what gives a clean teardown. The optional **Page ID** column below supports the automated `--page-id` path if you ever get the script logged in; it's not needed for paste mode.

> Keep this list current. Add a competitor when they start advertising into Simplifai's space; retire one when they go quiet or stop being a real comparison.

---

## 1. AI-for-small-business platforms
"Run your whole business with AI" — the closest to Simplifai's whole-business positioning. Watch these hardest.

| Brand | Meta Page name (verify) | Page ID (fill in) | What they sell | What to watch in their ads |
|---|---|---|---|---|
| **Jasper** | Jasper | _TBD_ | AI content/marketing platform moving toward "marketing teams" | How they frame AI replacing vs. helping a team; enterprise drift vs. SMB |
| **GoHighLevel** | HighLevel | _TBD — keyword is noisy, page-id required_ | All-in-one agency/SMB CRM + marketing + automation | The "fire your agency / all-in-one" angle, agency-reseller pitch |
| **Durable** | Durable | _TBD_ | AI website + CRM + invoicing for small business | "Build a business in 30 seconds" speed claims, solo-owner framing |
| **Hootsuite / OwlyWriter** | Hootsuite | _TBD_ | Social management with AI features | How a legacy tool retrofits an AI hook onto an old product |

## 2. AI marketing / content tools
Sell "AI does your marketing" — Simplifai's front-door lane. Strong source of hook and offer patterns.

| Brand | Meta Page name (verify) | Page ID (fill in) | What they sell | What to watch in their ads |
|---|---|---|---|---|
| **Copy.ai** | Copy.ai | _TBD_ | AI copywriting → "GTM AI platform" | Repositioning language; how they handle the "AI cringe" objection |
| **Flick** | Flick Social | _TBD_ | AI social marketing assistant for creators/small biz | Owner-as-hero framing, time-saved claims |
| **Predis.ai** | Predis.ai | _TBD_ | AI social content + carousel generation | Before/after content demos, template-led offers |
| **Ocoya** | Ocoya | _TBD_ | AI content + scheduling + commerce | Bundling angle, "all your content in one place" |
| **Vista Social / Publer** | Vista Social · Publer | _TBD_ | Scheduling tools adding AI assist | Free-tier hooks, how AI is positioned as add-on vs. core |

## 3. AI automation educators & platforms
Sell or teach "automate your business with AI" — workflows, agents, and systems that run the work, not just the marketing. The closest in *promise* to Simplifai's "we bring the system, you stay in control," so their hooks and proof are the most instructive. Watch how they balance teaching vs. done-for-you, and where they lean on hype Simplifai can credibly reframe.

Most of §3 grow on **organic content, not Meta ads** — so this section is the input for [`.claude/skills/simplifai-competitor-content-research.md`](../../.claude/skills/simplifai-competitor-content-research.md), which reads the **YouTube handle** column and pulls each channel's top videos by views. (Verify handles — creators rename channels.)

| Brand | YouTube handle (verify) | What they sell | What to watch in their content |
|---|---|---|---|
| **Make (Make.com)** | @MakeHQ | Visual automation platform adding AI agents | How a workflow tool sells "AI does the work" to non-technical owners; complexity vs. simplicity |
| **Zapier** | @zapier | Automation + AI agents/orchestration | "Automate everything" breadth claims; how they reassure on control and reliability |
| **n8n** | @n8n-io | Workflow + AI-agent automation (technical-leaning) | Owner-builder framing, "own your automations" angle, how technical they go |
| **Liam Ottley / Morningside AI** | @LiamOttley | AI automation agency education (build/run an AAA) | Income/outcome promises, "AI agency in a weekend" speed claims, proof and FOMO to reframe credibly |
| **Nick Saraev / Maker School** | @nicksaraev | AI automation systems coaching for solo operators | Time-saved + system-not-content framing (close to Simplifai's), where it tips into hype |

---

## Notes on scope

- **Direct comparison first.** Brands in §1 are the truest competitors (whole-business, owner-run). §2 are marketing-only — useful for hook/offer patterns but remember Simplifai is *broader* than them; that contrast is itself an angle.
- **Automation educators are a promise-match, not a product-match (§3).** They sell the *idea* Simplifai delivers — "a system that runs the work." Study their hooks and proof closely, but most pitch either deep technicality (Make/n8n/Zapier) or agency-income dreams (Ottley/Saraev). Simplifai's gap: the system, but owner-run, wellness-led, and credible — no code, no income hype.
- **Wellness-specific rivals welcome.** If a wellness-marketing agency or coach starts running Meta ads into Simplifai's audience, add them under a new §4 — they reveal the exact language wellness owners respond to.
- **Geography.** Default to Australia + United States. Some tools only advertise in the US; note when an Australian owner would never see the ad.
