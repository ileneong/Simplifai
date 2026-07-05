---
name: simplifai-instagram-post
description: >
  Create Instagram post designs for Simplifai — the AI marketing company for small business owners.
  Use this skill whenever asked to design, mock up, or generate an Instagram post or carousel slide
  for Simplifai's own social media (not for Simplifai's clients). Produces self-contained HTML mockups at
  1080×1350px (4:5 ratio) and/or Canva designs using the generate-design tool.
user-invocable: true
metadata:
  version: 1.1.0
---

## Maintenance Note

Bump the version when edited — minor for tweaks (1.0.0 → 1.1.0), major for behavioural changes.

---

## Design System Integration

**Always read the full design system before generating any post:**
- Tokens (colors, type, spacing, shadows, radii): [`brand-guidelines/simplifai/colors_and_type.css`](../../brand-guidelines/simplifai/colors_and_type.css)
- General design rules: [`brand-guidelines/simplifai/README.md`](../../brand-guidelines/simplifai/README.md) (via the simplifai-design skill)
- Logo assets: [`brand-guidelines/simplifai/assets/`](../../brand-guidelines/simplifai/assets/)

**What applies to Instagram posts:**
| Token group | Use for Instagram? |
|---|---|
| Color palette | ✅ Yes — backgrounds, text, accents |
| Typography (Poppins + Plus Jakarta Sans) | ✅ Yes |
| Spacing scale | ✅ Yes — for padding and gaps |
| Border radius (pill, blob) | ⚠️ Accent elements only (e.g. pill tag, circle underline) |
| Shadows / elevation | ❌ No — Instagram posts are flat |
| Blob shapes / floating dots | ❌ No — those are UI/web motifs; Instagram uses flat colour + type |
| Animation / easing | ❌ No — static format |

**Spacing tokens to use for Instagram layout (from CSS):**
- Canvas padding: `--space-9` (96px) — safe zone from all edges
- Gap between headline and body: `--space-7` (48px)
- Gap between body and logo: `--space-8` (64px)
- Accent mark from edge: `--space-9` (96px) to match text alignment

---

## Design Reference

The canonical reference for Simplifai Instagram posts:

- **Background**: Flat solid colour — no gradients
- **Headline**: Very large, very bold (Poppins 800), fills most of the canvas width
- **Body copy**: Smaller, different colour from headline, relaxed line height
- **Accent mark**: A single decorative element (asterisk, circle, underline, dot cluster) in a contrasting brand colour — adds personality without clutter
- **Logo**: Simplifai logo anchored bottom-left or bottom-right
- **Layout**: Clean and typographic — the words are the design. Minimal decoration.

**What makes it Simplifai:** The boldness of the type, the warmth of the colour, and one small playful accent element. Not the blobs, not the dots — those are for web/UI contexts. Instagram posts are flatter and more direct.

---

## Canvas Spec

- **Size**: 1080 × 1350 px (4:5 portrait ratio) — always
- **Safe zone**: 90px padding on all sides
- **Logo area**: Bottom-left or bottom-right, within safe zone, ~110px wide
- **Format**: Self-contained HTML file saved to the post folder under its month (`content/[YYYY-MM]/DRAFT_simplifai_[type]_[YYYY-MM-DD]/`) OR Canva design via `generate-design`

---

## Color Rotation System

Rotate through these four schemes across the week. Never use the same scheme on consecutive posts.

### Scheme A — Yellow Hero *(primary, use most often)*
| Element | Colour | CSS token |
|---|---|---|
| Background | `#ffc857` | `--color-yellow` |
| Headline | `#1a1a2e` | `--color-text-primary` |
| Body copy | `#2a5f74` (deep teal — not in system, specific to IG) | — |
| Accent mark | `#ff7a59` | `--color-coral` |
| Logo variant | White-cloud logo (`SimplifaiWhite.png`) — reads on yellow | — |

### Scheme B — Coral Hero
| Element | Colour | CSS token |
|---|---|---|
| Background | `#ff7a59` | `--color-coral` |
| Headline | `#ffffff` | `--color-white` |
| Body copy | `rgba(255,255,255,0.86)` | `--color-text-inverse` + opacity |
| Accent mark | `#ffc857` | `--color-yellow` |
| Logo variant | White-cloud logo (`SimplifaiWhite.png`) | — |

### Scheme C — Purple Hero
| Element | Colour | CSS token |
|---|---|---|
| Background | `#8a4fff` | `--color-purple` |
| Headline | `#ffffff` | `--color-white` |
| Body copy | `rgba(255,255,255,0.82)` | `--color-text-inverse` + opacity |
| Accent mark | `#ffc857` | `--color-yellow` |
| Logo variant | Text wordmark — Poppins 800 white + yellow `ai` | — |

### Scheme D — Light/Neutral
| Element | Colour | CSS token |
|---|---|---|
| Background | `#f5f3ff` | `--color-bg` / `--color-purple-tint` |
| Headline | `#1a1a2e` | `--color-text-primary` |
| Body copy | `#5a5a7a` | `--color-text-secondary` |
| Accent mark | `#8a4fff` or `#ff7a59` | `--color-purple` / `--color-coral` |
| Logo variant | Transparent logo (`SimplifaiTransparent.png`) | — |

---

## Accent Element Rotation

Each post gets **one** accent element. Rotate these:

| Accent | Description | Best with |
|---|---|---|
| **Asterisk `✳` or `*`** | Bold, oversized, top-left corner | Schemes A, B |
| **Circle underline** | Hand-drawn oval around a key word in the headline | Any scheme |
| **Thick underline bar** | Solid colour rectangle under key phrase | Schemes C, D |
| **Dot cluster** | 3–5 small circles grouped near the headline | Schemes B, C |
| **Corner bracket `[ ]`** | Thin bracket framing the headline area | Scheme D |
| **Pull quote mark `""`** | Large decorative opening quote, behind headline | Any scheme |

**Rule:** Never use more than one accent element per post. The accent is a detail, not a feature.

---

## Typography

| Role | Font | Weight | Size (at 1080px) |
|---|---|---|---|
| Headline | Poppins | 800 | 96–120px |
| Sub-headline / second line | Poppins | 700 | 80–96px |
| Body copy | Plus Jakarta Sans | 400 | 40–44px |
| Label / tag | Plus Jakarta Sans | 700 uppercase | 28–32px |

**Google Fonts import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
```

**Typography rules:**
- Headlines use tight letter-spacing (`-0.025em`)
- Headline line height: `1.0–1.05` (very tight — Poppins 800 is designed for this)
- Body line height: `1.6–1.7`
- Sentence case everywhere — never ALL CAPS in body or headlines
- Max 8–10 words per headline line; let it wrap naturally to 2–3 lines

---

## Layout Patterns

### Pattern 1 — Top-heavy *(most common)*
```
[accent mark — top left]

[HEADLINE — very large, 2–3 lines]

[thin rule]

[body copy — 2–3 lines]


[logo — bottom left]
```

### Pattern 2 — Split
```
[HEADLINE LINE 1 — colour A]
[HEADLINE LINE 2 — colour B / accent colour]

[body copy]

[logo — bottom right]
```

### Pattern 3 — Statement-only *(for punchy single-idea posts)*
```
[SINGLE LARGE STATEMENT — 1–2 lines, fills canvas]

[tiny body copy or none]

[logo — bottom right]
[accent mark — bottom area]
```

---

## Content Rules

Every Simplifai Instagram post must:
- Have **one clear idea** — not two
- Open with a headline that works standalone (readable as a thumbnail)
- Use **second person** ("you", "your") — never "our clients" or "small businesses"
- Feel **direct and warm** — like a knowledgeable friend, not a brand
- Body copy: 2–3 short sentences max on the graphic (full story lives in the caption)

**Never include on the graphic:**
- Website URLs (no website yet)
- "AI-assisted" disclosure (caption only)
- Hashtags
- Long sentences that require squinting
- More than two font sizes

**In the caption:**
- **Stay under Instagram's 2,200-character limit.** Count the caption before shipping (emoji count as 2 characters) and leave ~50 characters of headroom.
- **Use some emojis, not many.** A few relevant ones as visual anchors — one per list item, one on a key warning, one on the closing CTA. Never decorative strings, never one per sentence.

---

## HTML Mockup Template

Use this base structure for all HTML mockups:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Simplifai — [Post title]</title>
  <!-- Design system tokens -->
  <link rel="stylesheet" href="../../brand-guidelines/simplifai/colors_and_type.css">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      background: #1a1a2e; /* dark preview surround */
      display: flex; align-items: center; justify-content: center;
      min-height: 100vh; padding: 40px;
      font-family: var(--font-body);
    }

    /* 1080×1350 — 4:5 ratio, always */
    .post {
      width: 1080px; height: 1350px;
      position: relative; overflow: hidden;
      background: var(--color-yellow); /* swap per scheme */
      flex-shrink: 0;
    }

    /* Safe zone — all content stays inside */
    .content {
      position: absolute; inset: 0;
      padding: 96px; /* --space-9 */
      display: flex; flex-direction: column; justify-content: center;
    }

    /* Headline */
    .headline {
      font-family: var(--font-display);
      font-weight: var(--fw-extrabold); /* 800 */
      font-size: 108px; /* scaled up from --text-4xl for canvas size */
      line-height: var(--leading-tight);
      letter-spacing: var(--tracking-tight);
      color: var(--color-text-primary); /* swap per scheme */
      margin-bottom: 48px; /* --space-7 */
    }

    /* Body copy */
    .body {
      font-family: var(--font-body);
      font-weight: var(--fw-regular);
      font-size: 42px;
      line-height: var(--leading-relaxed);
      color: #2a5f74; /* deep teal for Scheme A; swap per scheme */
      max-width: 860px;
    }

    /* Accent mark (asterisk, etc.) */
    .accent {
      font-size: 72px;
      color: var(--color-coral); /* swap per scheme */
      line-height: 1;
      margin-bottom: 48px; /* --space-7 */
    }

    /* Logo — bottom corner */
    .logo {
      position: absolute;
      bottom: 96px; left: 96px; /* --space-9 */
      width: 110px; height: 110px;
      object-fit: contain;
    }
  </style>
</head>
<body>
  <div class="post">
    <div class="content">
      <div class="accent">✳</div>
      <div class="headline">Headline goes here.</div>
      <div class="body">Supporting body copy — 2–3 short sentences that expand on the headline.</div>
    </div>
    <img class="logo" src="../../brand-guidelines/simplifai/assets/SimplifaiTransparent.png" alt="Simplifai">
  </div>
</body>
</html>
```

---

## Logo Assets

Stored at `brand-guidelines/simplifai/assets/`:
- `SimplifaiTransparent.png` — **preferred for Instagram.** Yellow cloud blob + purple "SIMPLIFAI" wordmark on a transparent background (landscape). Reads cleanly on light, neutral, white, and most scheme backgrounds with no box. Size by width (~200px), let height auto.
- `SimplifaiWhite.png` — white-cloud variant on transparent — use on coral/dark backgrounds where the yellow blob loses contrast.
- `SimplifaiYellow.png` — logo on a solid **yellow tile** — use only as a filled badge on a white background; avoid on coloured backgrounds (the yellow tile shows).

> Note: `SimplifaiYellow.png` has a baked-in solid background, so it shows as a coloured box on any other background. Default to `SimplifaiTransparent.png`, and switch to `SimplifaiWhite.png` only on coral/dark canvases.

Embed as base64 for self-contained HTML files. Reference path for Canva uploads.

For dark/purple backgrounds where the logo image doesn't read well, use a CSS text wordmark:
```css
.wordmark { font-family: 'Poppins', sans-serif; font-size: 32px; font-weight: 800; color: #fff; }
.wordmark em { color: #ffc857; font-style: normal; }
/* HTML: Simplif<em>ai</em> */
```

---

## Canva Generation Query Template

When using `generate-design` with `design_type: instagram_post`, structure the query as:

```
Instagram post (1080x1350px, 4:5 portrait) for Simplifai — an AI marketing company for small business owners.

Background: Flat solid [COLOUR] fill. No gradients.

Typography:
- Headline: "[TEXT]" — very large (Poppins or bold geometric sans), [COLOUR], ~110px, tight letter-spacing, left-aligned, 2–3 lines
- Body copy: "[TEXT]" — smaller, [COLOUR], ~26px, left-aligned, relaxed line height

Accent: [ACCENT ELEMENT DESCRIPTION] in [COLOUR], [POSITION]

Logo: Simplifai logo (white cloud with purple text) bottom-left, ~110px wide.

Style: Clean, flat, typographic. The headline fills most of the canvas. Minimal decoration — the words are the design.
```

---

## Output Checklist

Before presenting a mockup, verify:
- [ ] Canvas is 1080 × 1350px
- [ ] Correct colour scheme applied (not the same as the previous post)
- [ ] One accent element only
- [ ] Headline is readable at thumbnail size
- [ ] Logo present, correctly positioned
- [ ] No URLs, hashtags, or disclosure text on the graphic
- [ ] Body copy is 2–3 sentences max
- [ ] Caption under 2,200 characters (emoji count double); a few relevant emojis, not excessive
- [ ] File saved as `DRAFT_simplifai_instagram-[slug]_[YYYY-MM-DD].html`

---

## Scheme Usage Log

Track which scheme was used last so the next post rotates correctly.

| Post | Date | Scheme |
|---|---|---|
| Day 1 — "You're not behind." | 2026-05-03 | A (Yellow Hero) |
| Day 2 — "Two camps. Both wrong about AI." (carousel) | 2026-05-04 | B (Coral Hero) |
| Day 3 — "The blank page is the enemy." (carousel) | 2026-05-04 | C (Purple Hero) |
| Day 4 — "5 things AI genuinely cannot do." (carousel) | 2026-05-05 | D (Light/Neutral) |
| Day 5 — "The output is only as good as the brief." (carousel) | 2026-05-06 | A (Yellow Hero) |
| Day 6 — "A full week of content. Done by Tuesday morning." (carousel) | 2026-05-07 | B (Coral Hero) |
| Day 7 — "Your AI marketing team. Built in a weekend." (single image) | 2026-05-08 | C (Purple Hero) |
| "The weekend rebuild" (6-slide carousel · follows Reel 9 CCC case study) | 2026-06-21 | A (Yellow Hero) |
| "Stop re-explaining your business to ChatGPT" (6-slide carousel · first What's-New-in-AI post · accent: dot cluster) | 2026-06-22 | B (Coral Hero) |
| "Your biggest bottleneck is the work only you can do" (6-slide carousel · operational enquiry-to-reply workflow · accent: thick underline bar) | 2026-06-24 | C (Purple Hero) |
| "The jobs your business repeats every week" (single static post · 6 workflow types w/ SVG illustrations · accent: coral underline) | 2026-06-24 | D (Light/Neutral) |
| "5 prompts that replace a $2,000/month marketing hire" (single static post · growth/share-bait · 5 copy-paste prompts in caption · accent: oversized coral asterisk) | 2026-06-25 | A (Yellow Hero) |
| "A free way to make on-brand graphics" (6-slide carousel · What's-New-in-AI · Adobe Express AI Assistant goes free · accent: yellow circle underline) | 2026-06-27 | B (Coral Hero) |
| "Claude now ships ready-made workflows for small businesses" (6-slide carousel · What's-New-in-AI · Claude for Small Business + approval gate · accent: yellow thick underline bar) | 2026-06-27 | C (Purple Hero) |
| "Your AI use policy fits on one page" (6-slide carousel · educational · 10-line AI use policy from AI Fluency for Small Business course · accent: purple corner bracket) | 2026-06-27 | D (Light/Neutral) |
| "Anyone can design a carousel that actually gets read" (6-slide carousel · educational · generalized carousel-design method, teach-them-to-fish · accent: oversized coral asterisk) | 2026-06-27 | A (Yellow Hero) |
| "Six copies of the same tool. Nobody noticed." (6-slide carousel · educational · value of a system audit, from a real client repo audit · accent: yellow dot cluster) | 2026-06-27 | B (Coral Hero) |
| "Meet Claude Cowork" (5-frame Instagram **Story** · 1080×1920 · What's-New-in-AI · explains Cowork to prospects · anchored Purple, palette rotated per frame) | 2026-06-28 | C (Purple Hero) |
| "Talk, do not type" (6-slide carousel · What's-New-in-AI · ChatGPT dictation upgrade on all plans · per-slide line illustrations: mic, waveform, clock, phone-mic, privacy shield, bookmark · accent: thick underline bar) | 2026-06-30 | D (Light/Neutral) |
| "The System at Work: the owner" (6-slide carousel · persona series 1/3 · Cowork owner workflows: invoices, cash flow, month-end, contracts · accent: coral asterisk) | 2026-06-30 | A (Yellow Hero) |
| "The System at Work: the marketer" (6-slide carousel · persona series 2/3 · Cowork campaign flow + Canva assets, brand-voice payoff · accent: yellow dot cluster) | 2026-06-30 | B (Coral Hero) |
| "The System at Work: the sales coordinator" (6-slide carousel · persona series 3/3 · Cowork lead + ticket triage, approval gate, voice payoff · accent: yellow underline bar) | 2026-06-30 | C (Purple Hero) |
| "5 prompts that replace a $2,000/month personal assistant" (2-slide carousel · lead-magnet teaser, 5 prompts in caption + follow-for-60 CTA · sector-neutral PA framing · slide 1 accent: coral underline under "personal assistant" · slide 2 CTA: coral w/ yellow asterisk) | 2026-07-04 | A (Yellow Hero) — slide 1 rotated off D after a D-scheme carousel was posted |
