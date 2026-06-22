# Pingo Design System

## About

**Pingo** is an AI company that helps small business owners build a simple, sustainable marketing team using AI. The brand is warm, playful, and approachable — designed to make AI feel friendly and accessible to non-technical founders.

The name "Pingo" evokes a penguin-like mascot energy: friendly, slightly quirky, reliably helpful.

## Sources

- `uploads/Pingo - 1.png` — Logo variant on coral/salmon background (white blob, purple bubbly type, golden feet marks)
- `uploads/Pingo - 2.jpg` — Logo variant on white background (golden blob, purple bubbly type, floating circles)
- Color palette provided: `#8a4fff` (purple), `#ffc857` (golden yellow), `#4a90e2` (blue), `#ff7a59` (coral orange)

> No Figma link or codebase was provided. The design system was inferred from the logo assets and color palette.

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Warm and encouraging** — Pingo speaks like a knowledgeable friend, not a corporate tool
- **Simple and direct** — Short sentences, plain language. No jargon, no buzzwords
- **Optimistic** — Focus on what's possible, not on problems. "Here's what we can do" > "Here's what's wrong"
- **Empowering** — "You can" and "Let's" language; the user is the hero, Pingo is the sidekick

### Person & Voice
- **First person plural ("we")** for Pingo as a product/team: "We'll help you…"
- **Second person ("you")** for the user: "Your marketing, simplified."
- Avoid passive voice. Prefer active, direct phrasing.

### Casing
- **Sentence case** for UI labels, buttons, and body copy: "Get started", not "Get Started"
- **Title Case** only for proper nouns and brand names
- **ALL CAPS** never used in copy (only potentially in monospaced code/data contexts)

### Emoji
- Used **sparingly and intentionally** — 1 per message max, only when it adds warmth
- Playful but professional: ✨ 🎯 💡 — not 🔥💯🙌
- Never used in formal UI labels or headings

### Writing Examples
- ✅ "Your AI marketing team is ready."
- ✅ "Let's write your first post."
- ✅ "Nice work! Your campaign is live."
- ❌ "Leveraging AI-powered synergies to optimize your marketing funnel"
- ❌ "ERROR: Invalid input"

### Vibe
Friendly SaaS with a touch of delight. Think: Duolingo meets Mailchimp — encouraging, a little playful, never condescending.

---

## VISUAL FOUNDATIONS

### Color System
- **Coral** `#ff7a59` — Primary brand color; backgrounds, hero sections, energetic CTAs
- **Purple** `#8a4fff` — Logo type, accent, interactive elements, links
- **Golden Yellow** `#ffc857` — Secondary accent, highlights, success states, blob fills
- **Blue** `#4a90e2` — Informational, secondary actions, data viz
- **White** `#ffffff` — Surfaces, card backgrounds, text on dark
- **Near-black** `#1a1a2e` — Body text, dark backgrounds
- **Light grey** `#f5f3ff` — Subtle background tint (purple-shifted white)

### Typography
- **Display / Headings**: **Poppins** (600–800 weights) — geometric, clean, confident. Its rounded letterforms echo the brand's playful energy without being cartoonish.
- **Body**: **Plus Jakarta Sans** (400–700) — complements Poppins beautifully; slightly more expressive letterforms, excellent readability at small sizes. The pairing creates clear hierarchy while staying friendly.
- **Monospace / Code**: **JetBrains Mono** — for any data/code contexts
- Both fonts loaded from Google Fonts. No local font files provided.
- Scale: 12 / 14 / 16 / 20 / 24 / 32 / 40 / 56 / 72px
- Line height: 1.4 for body, 1.15 for display

### Backgrounds
- Coral solid fills for hero/hero-alt sections
- White/light-purple (#f5f3ff) for content areas
- **Blob shapes** as decorative background elements (organic, cloud-like SVG paths)
- No photography used in brand materials — illustration-first approach
- Subtle floating circles/dots as decorative motifs (seen in logos)

### Shapes & Motifs
- **Blob / cloud shapes**: Organic, irregular rounded shapes — the defining visual motif
- **Floating circles**: Small decorative dots scattered around blobs
- **Bird feet / flame marks**: Golden accent mark beneath logo (penguin feet)
- Corner radii: Very large on interactive elements (pill buttons: 9999px; cards: 16–24px)

### Cards
- Background: white
- Border: none (relies on shadow or background contrast)
- Corner radius: 16–24px
- Shadow: soft, low-spread — `0 4px 24px rgba(138,79,255,0.10)`
- Padding: 24px

### Buttons
- **Primary**: Coral `#ff7a59` fill, white text, pill shape (border-radius: 9999px), bold weight
- **Secondary**: Purple `#8a4fff` fill, white text, pill shape
- **Ghost**: Transparent, purple border + text, pill shape
- Hover: darken fill by ~8%, slight scale-up (1.02)
- Press: scale-down (0.97)
- No sharp corners anywhere

### Animation
- **Easing**: `cubic-bezier(0.34, 1.56, 0.64, 1)` — slight spring/bounce for entrances
- **Duration**: 200–300ms for micro-interactions; 400–600ms for page entrances
- **Blob animations**: Gentle morph/float (slow, 4–8s loops)
- **Hover states**: Scale + color shift, never just underline alone
- Preference for subtle, delightful micro-animations over heavy transitions

### Spacing
- Base unit: 8px
- Scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128px

### Shadows & Elevation
- Level 0: no shadow
- Level 1: `0 2px 8px rgba(138,79,255,0.08)`
- Level 2: `0 4px 24px rgba(138,79,255,0.12)`
- Level 3: `0 8px 40px rgba(138,79,255,0.18)`
- Purple-tinted shadows throughout (not grey)

### Borders
- Used sparingly — prefer shadow over border for separation
- When used: `1px solid rgba(138,79,255,0.15)` (purple-tinted, subtle)

### Transparency & Blur
- Frosted glass effects on modals/overlays: `backdrop-filter: blur(16px)` with `rgba(255,255,255,0.85)`
- Used for floating panels, tooltips, toasts

### Imagery
- Illustration-first; no stock photography in brand contexts
- Warm, saturated palette matching brand colors
- Blob shapes as illustration containers
- Circular floating dots as texture/decoration

### Iconography
- Stroke-based icons (2px stroke weight), rounded caps
- Lucide Icons (CDN) — closest match to brand's clean, rounded aesthetic
- No filled icons unless in active/selected states
- Icon size: 16px (inline), 20px (button), 24px (standalone), 32px (feature icons)

---

## ICONOGRAPHY

Pingo has no proprietary icon system. The recommended approach:

- **Library**: [Lucide Icons](https://lucide.dev) via CDN (`unpkg.com/lucide@latest`)
- **Style**: Stroke-only, 2px stroke, rounded line caps and joins
- **Sizes**: 16 / 20 / 24 / 32px
- **Colors**: Match surrounding text color, or use brand purple `#8a4fff` for emphasis
- **Usage**: Keep icon usage minimal and purposeful; Pingo's identity is type/shape-led, not icon-led

---

## FILE INDEX

```
README.md                        ← This file
SKILL.md                         ← Agent skill definition
colors_and_type.css              ← CSS custom properties (colors, type, spacing, shadows)

assets/
  pingo-logo-coral.png           ← Logo on coral/salmon background (primary)
  pingo-logo-yellow.jpg          ← Logo on yellow blob / white background (secondary)

preview/                         ← Design system card previews (registered in Design System tab)
  brand-logo.html                ← Logo variants side by side
  colors-primary.html            ← Coral + purple scales
  colors-secondary.html          ← Yellow + blue scales
  colors-neutral.html            ← Text, surface, border colors
  colors-semantic.html           ← Success, warning, error, info, accent
  type-display.html              ← Poppins display through H4 specimens
  type-body.html                 ← Plus Jakarta Sans body, label, caption, code
  spacing-tokens.html            ← 4–128px spacing scale with usage notes
  spacing-radius.html            ← 8px → pill → blob radius tokens
  shadows-elevation.html         ← Purple-tinted elevation levels + color glow shadows
  components-buttons.html        ← Primary, purple, ghost, soft, yellow; three sizes
  components-cards.html          ← White, purple, coral card variants
  components-inputs.html         ← Text input states, textarea, select, toggles
  components-badges.html         ← Status badges, label badges, solid, filter chips

ui_kits/
  app/
    README.md                    ← App UI kit component notes
    index.html                   ← Interactive 4-screen prototype (Dashboard, Composer, Campaigns, Settings)
    Components.jsx               ← Atoms: Button, Input, Badge, Toggle, Avatar, StatCard, PostCard, Sidebar, TopBar
    Screens.jsx                  ← Screens: DashboardScreen, ComposerScreen, CampaignsScreen, SettingsScreen
```

### Fonts (Google Fonts)
- **Poppins** — display headings, H1–H3, button labels (`--font-display`)
- **Plus Jakarta Sans** — body copy, UI labels, captions (`--font-body`)
- **JetBrains Mono** — code, monospace contexts (`--font-mono`)
