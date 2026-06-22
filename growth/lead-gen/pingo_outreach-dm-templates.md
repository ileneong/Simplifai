# Pingo Outreach DM Templates

*Last updated: 2026-06-01*

Pingo voice: **warm, credible, empowering.** These are starting points, not scripts — the value of a DM is in the personal first line. **Never paste a URL or pingo.co** (no website yet); invite a reply or a DM conversation instead.

---

## Rules (read before sending anything)

1. **Personalise the first line to their actual content** — name the specific post, idea, or thing you admired. If you can't, you haven't warmed up enough; go back and engage first.
2. **Warm up before the opener** — follow + one genuine comment/like. Cold-DMing a stranger is spam.
3. **No pitch in the opener.** Build the relationship first. The offer comes later, softly, and only if it fits.
4. **Max 2 follow-ups**, spaced out. Then a graceful close. Never nag.
5. **One human at a time.** No copy-paste blasts — that's both off-brand and against platform norms.
6. **Be transparent** about who Pingo is and that we help owners run their own AI-assisted marketing. Honesty is part of credibility.
7. **No fearmongering, no hype, no "you're doing it wrong."** We meet people as the experts they are.

---

## A — Warm opener (relationship first, zero pitch)

> Hi [name] — your post on [specific thing] really landed with me, especially [one genuine detail]. I work with [coaches / wellness founders] on the marketing side of things, so I notice when someone's actually saying something real. Just wanted to say it's good work — followed along. 🙌

*Goal: be a real person who noticed them. Nothing more. Let them reply.*

### Signal variants for the opener

- **CCC commenter:** "…I spotted your comment over on Conscious Connections' page and came to have a look — really glad I did."
- **Hashtag peer:** "…found you through [#hashtag] and your stuff stood out from the scroll."
- **Mutual:** "…looks like we run in the same circles — been seeing your name pop up and finally came to say hi."

---

## B — Value-first follow-up (after they reply, or 4–5 days of warm engagement)

> Been enjoying your content. One thing I see a lot with experts like you — the knowledge is all there, it's just the *consistency* of showing up online that's the grind when you're the one doing everything. Out of curiosity, how are you finding the content side of things at the moment?

*Goal: a genuine question that surfaces the marketing pain — in their words. Listen, don't sell.*

---

## C — Soft invite (only if there's a real fit and an open door)

> The reason I ask — Pingo is basically the system I wish every solo expert had: a simple AI-assisted setup so you can run your own marketing in a few hours a week without it eating your life or sounding robotic. We're opening our first Academy cohort and I think you'd get a lot from it. Want me to tell you a bit more? No pressure either way. 🌿

*Goal: invite a conversation. Keep it light. They say yes → continue in DM. No link.*

---

## D — Graceful close (no reply, or "not right now")

> All good [name] — genuinely just glad to have found your work. I'll keep cheering you on from over here. If the marketing side ever starts feeling heavy, my door's open. Take care. 🙏

*Goal: leave warmth on the table, not pressure. Set `outreach_status = no-response` or `declined`.*

---

## Suggested rhythm

| Day | Action | Tracker status |
|-----|--------|----------------|
| 0 | Warm up (follow + comment) | `warmed_up = Y` |
| 1–2 | Template A opener | `opener-sent` |
| reply | Template B | `replied` / `in-conversation` |
| if fit | Template C | `in-conversation` |
| +5 days no reply | one light nudge (re-reference their content) | — |
| +5 more, still nothing | Template D, then stop | `no-response` |
