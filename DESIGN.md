---
name: Exquisitus
description: An Astro Starlight theme at the pinnacle of readability and beauty.
colors:
  # Brand — honey-amber (warmth / emphasis register). Authored in OKLCH:
  # this project has an OKLCH-only doctrine, so OKLCH is the source of truth
  # and the Stitch hex-only linter warning is accepted by design.
  honey: "oklch(0.72 0.13 75)"            # dark-mode accent / brand signature
  honey-bright: "oklch(0.84 0.115 82)"    # dark-mode link & active text
  bronze: "oklch(0.52 0.12 68)"           # light-mode accent / link text (contrast floor)
  cta-honey: "oklch(0.78 0.14 80)"        # primary-button fill (the full brand honey)
  # Secondary — petrol-teal counter-hue (information / code register).
  petrol-teal-dark: "oklch(0.8 0.075 205)"
  petrol-teal-light: "oklch(0.44 0.09 205)"
  # Neutral — ink (dual mode; surfaces stay near-neutral, warmth never in the paper).
  ink-dark: "oklch(0.94 0.012 85)"        # headings on near-black
  ink-light: "oklch(0.22 0.015 80)"       # headings on white
  body-dark: "oklch(0.82 0.014 85)"       # body text, dark mode
  body-light: "oklch(0.33 0.012 80)"      # body text, light mode
  muted-dark: "oklch(0.66 0.012 82)"      # captions / metadata, dark
  muted-light: "oklch(0.45 0.01 80)"      # captions / metadata, light
  hairline-dark: "oklch(0.38 0.008 80)"   # separators, dark
  hairline-light: "oklch(0.8 0.005 80)"   # separators, light
  surface-dark: "oklch(0.17 0.006 80)"    # page background, dark
  surface-light: "oklch(1 0 0)"           # page background, light (pure white)
  code-surface-dark: "oklch(0.205 0.012 245)"
  code-surface-light: "oklch(0.965 0.008 235)"
typography:
  display:
    fontFamily: "Spectral, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.1875rem, calc(1rem + 5vw), 5rem)"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "-0.018em"
  headline:
    fontFamily: "Spectral, Georgia, 'Times New Roman', serif"
    fontSize: "var(--sl-text-2xl)"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "-0.012em"
  title:
    fontFamily: "Spectral, Georgia, 'Times New Roman', serif"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "-0.012em"
  body:
    fontFamily: "'Atkinson Hyperlegible Next Variable', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "'Atkinson Hyperlegible Next Variable', system-ui, sans-serif"
    fontSize: "var(--sl-text-xs)"
    fontWeight: 600
    letterSpacing: "0.06em"
  code:
    fontFamily: "'JetBrains Mono Variable', ui-monospace, monospace"
    fontSize: "0.9em"
    fontWeight: 400
rounded:
  xs: "0.25rem"    # focus ring, inline mark
  sm: "0.375rem"   # nav & TOC links, inline code
  md: "0.5rem"     # buttons, search trigger
  lg: "0.625rem"   # asides, details
  xl: "0.75rem"    # cards, dialogs, pagination, images
components:
  button-primary:
    backgroundColor: "{colors.cta-honey}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.md}"
  button-secondary:
    textColor: "{colors.bronze}"
    rounded: "{rounded.md}"
  button-minimal:
    textColor: "{colors.bronze}"
  card:
    backgroundColor: "{colors.surface-light}"
    rounded: "{rounded.xl}"
  aside:
    rounded: "{rounded.lg}"
  code-inline:
    textColor: "{colors.petrol-teal-light}"
    rounded: "{rounded.sm}"
---

# Design System: Exquisitus

## 1. Overview

**Creative North Star: "The Considered Reading Room"**

Exquisitus treats a documentation page the way a great publication treats a feature: the reading column is the protagonist, and everything else — navigation, chrome, colour — exists to usher the reader into the text and then disappear. It draws its conviction from four pinnacles: the typographic authority of the *New York Times* online, the single-minded legibility of the *Readability Guidelines* wiki, the care-as-craft navigability of *MDN*, and the brave, accessible, larger-than-usual type of *Eleventy Excellent*. The thesis is that legibility and beauty are the same discipline at different scales, proved by example, page after page.

The system is built from two recurring moves. **Surfaces are flat and hairline-separated, never filled panels** — the page reads as one calm sheet, not a set of boxes; the sidebar shares the body surface and is divided by a single hairline or, more often, by nothing but de-emphasised type. And **colour is spent deliberately**: a warm honey-amber for emphasis and active state, a cool petrol-teal for the information and code register, and near-nothing everywhere else. Warmth lives in the ink and the accent, never in a tinted background. Depth is tonal, not cast: a surface nudged a step off the page, not floated on a shadow.

This system explicitly rejects two things. It is **not** the hacker / terminal aesthetic — no monospace-everything, no green-on-black costume, no cyberpunk affectation. And it is **not** generic SaaS documentation — none of the Mintlify / Docusaurus default of clean-white-with-a-blue-primary and a forgettable sidebar. The voice is a senior colleague who explains something well: confident, masterful, useful — measured and self-assured, restraining itself with intent and acknowledging the reader without performing for them.

**Key Characteristics:**
- Content is sovereign — the reading column is the design; the rest is service.
- Generous, accessible type by conviction: ~18px body, 1.75 line-height, a ~70ch measure.
- A full palette held in tight discipline: honey-amber for emphasis, petrol-teal for information.
- Flat, hairline-separated surfaces; depth from tonal layering, not shadow.
- Accessible by conviction — WCAG 2.2 AA is the floor, light and dark modes both, every motion gated behind `prefers-reduced-motion`.

## 2. Colors

A full palette of two committed brand hues — a warm honey-amber and a cool petrol-teal — held against a disciplined near-neutral surface, with each colour carrying a defined semantic job rather than decorating. Authored entirely in OKLCH so lightness is perceptually even and hue holds as chroma changes. Every foreground/background pair is WCAG 2.2 AA validated: body and UI text ≥ 4.5:1, large text ≥ 3:1.

### Primary
- **Honey-Amber** (dark accent `oklch(0.72 0.13 75)`; dark link text `oklch(0.84 0.115 82)`): The brand signature — links, active navigation, text selection, focus accents, emphasis. Warm, sun-cured, confident. Spent sparingly so its appearance always means something.
- **Bronze** (`oklch(0.52 0.12 68)`): The light-mode face of the accent. The raw honey fails contrast as *text* on white (≈2:1), so light-mode accent **text** deepens to bronze (≥4.5:1). This is a contrast floor, not a stylistic choice.
- **CTA Honey** (`oklch(0.78 0.14 80)`): The full brand honey, used in light mode only as a **fill** behind an ink label (ink-on-honey ≈ 8.5:1). It is the one place the brand colour appears at full strength on white, where links cannot carry it.

### Secondary
- **Petrol-Teal** (dark `oklch(0.8 0.075 205)`; light `oklch(0.44 0.09 205)`): The amber's cool counterweight, held at low chroma for calm. Reserved for the information register — inline code, "note" admonitions, code accents. Its coolness lets the amber stay the warm protagonist.

### Neutral
- **Ink** (dark `oklch(0.94 0.012 85)`; light `oklch(0.22 0.015 80)`): Highest-contrast foreground — headings and bold. Carries a whisper of the brand hue at very low chroma so the monochrome never reads as cold grey.
- **Body** (dark `oklch(0.82 0.014 85)`; light `oklch(0.33 0.012 80)`): The reading column. Where most of the page lives.
- **Muted** (dark `oklch(0.66 0.012 82)`; light `oklch(0.45 0.01 80)`): Secondary text, captions, metadata, nav section labels. Never the elegant-but-illegible light grey.
- **Hairline** (dark `oklch(0.38 0.008 80)`; light `oklch(0.8 0.005 80)`): Separators, table rules, card borders, tablist baselines. Pinned explicitly to the ramp's hairline step — Starlight's default points it at the raised-surface tone, which reads as no line at all on these surfaces.
- **Surface** (dark `oklch(0.17 0.006 80)`; light `oklch(1 0 0)` — pure white): The paper. No hidden warm tint, in either mode.
- **Code Surface** (dark `oklch(0.205 0.012 245)`; light `oklch(0.965 0.008 235)`): A cool-tinted panel for code blocks, clearly distinct from the page so code reads in the information register.

### Named Rules
**The Sovereign Column Rule.** Colour never enters the body reading column except as a link or an inline `<mark>`. Prose is ink on surface — full stop. All brand colour lives in the chrome, the accents, and the semantic markers around the text.

**The Two-Job Rule.** Honey-amber is warmth and emphasis; petrol-teal is information and code. Neither crosses into the other's job. A full palette earns its richness through discipline, not abundance.

**The No-Cream Rule.** The light-mode surface is pure white (`oklch(1 0 0)`); the dark surface is near-black (`oklch(0.17 0.006 80)`). Warmth is carried by the ink, the amber, and the typography — never by tinting the paper. Forbidden token names: `--cream`, `--sand`, `--paper`, `--parchment`.

**The Deepened-Accent Rule.** Accent **text** is bronze in light mode and brightened honey in dark mode; the raw honey only ever appears as a **fill** with an ink label. Never "fix" the bronze link colour back to honey — the contrast floor forces it.

**The Splash Tint Exception.** One sanctioned place lets colour appear without a semantic job: the icon chips inside a `FeatureGrid` on a splash page may each carry a soft, low-chroma tint from the wider semantic ramp (the muted `L ≈ 0.95` orange / purple / green / red set, never the bright RGBY default). It is a small, rare splash that gives a card grid life; it does not loosen the Two-Job Rule anywhere prose, chrome, or semantics live.

## 3. Typography

**Display Font:** Spectral (Production Type; OFL) — fallback `Georgia, 'Times New Roman', serif`.
**Body Font:** Atkinson Hyperlegible Next (Braille Institute; OFL, variable wght 200–800) — fallback `system-ui, sans-serif`.
**Mono Font:** JetBrains Mono (OFL, variable) — fallback `ui-monospace, monospace`.

All three faces are OFL-licensed and self-hosted via `@fontsource` — a hard requirement for a distributed theme. No Google Fonts request, no third-party origin, no first-paint layout shift. The root font-size is nudged to `106.25%` (~17px base) so the whole rem-based scale, including the ~70ch measure, lifts with the reader's own base size.

**Character:** A true contrast-axis pairing — Spectral's sturdy editorial serif against Atkinson Hyperlegible Next's humanist sans reading column. Headings carry the cadence of print; the body carries maximal screen legibility at a larger-than-default scale. The two never blur into one undifferentiated family.

### Hierarchy
- **Display** (Spectral 600, `clamp(2.1875rem, calc(1rem + 5vw), 5rem)`, line-height 1.18, letter-spacing −0.018em): Page titles and hero headings. The clamp tops out at 5rem — below the shouting line.
- **Headline** (Spectral 600, `var(--sl-text-2xl)`, line-height 1.18, letter-spacing −0.012em): Major section headings within a document.
- **Title** (Spectral 600, letter-spacing −0.012em): Sub-section headings, card titles, aside titles, pagination labels, `summary`, table headers — the serif tying interface objects back to the document.
- **Body** (Atkinson 400, `1.0625rem` ≈ 18px, line-height 1.75): The reading column, capped at the ~70ch measure (`--sl-content-width: 42rem`). The single most important spec in the system. `text-wrap: pretty` to reduce orphans.
- **Label** (Atkinson 600, `var(--sl-text-xs)`, letter-spacing 0.06em, uppercase): Sidebar section labels and UI chrome. Caps reserved for short labels only — never body copy.
- **Code** (JetBrains Mono, `0.9em`): Inline and block code; step counters use tabular figures so multi-digit sequences stay aligned.

### Named Rules
**The Generous Body Rule.** Body type is set larger and looser than documentation convention (~18px / 1.75). When in doubt, bigger. The reader's comfort outranks fitting more above the fold.

**The 65–75ch Rule.** The reading measure is capped at ~70 characters regardless of viewport. A wide screen gets wider margins, never a wider line.

**The Serif-Marks-Structure Rule.** Spectral marks every structural or editorial element — headings, titles, blockquotes (italic), table headers, `summary`. The sans never carries a heading; the serif never carries running body.

## 4. Elevation

Flat by default. Depth is conveyed through **tonal layering** — a surface nudged a step off the page — rather than drop shadows. The sidebar and TOC carry no dividing panel; hierarchy and a single hairline do that work. Shadows appear only as a quiet *response to state*: a card lifting 2px on hover, a button on hover, the sticky header separating from the content as it scrolls. There is no ambient, decorative shadow anywhere at rest.

The header lift is mode-aware because the two surfaces take light differently. On white, a conventional soft drop shadow carries it. On near-black — which cannot take a cast shadow — depth comes *from light*: a 1px lit lower lip plus a soft upward bloom built from a low-opacity tint of the ink colour.

Both the header and the mobile TOC are **opaque, never translucent**: a backdrop blur / scrim reads poorly for low-vision readers, so a near-solid fill over the page surface gives the clean scrolling edge instead.

### Named Rules
**The Tonal-First Rule.** Reach for a tonal step before a shadow. Surfaces are distinguished by lightness, not by floating.

**The Flat-At-Rest Rule.** No element carries a shadow at rest. A shadow is a reply to hover, focus, or scroll — never decoration. If it looks like a 2014 app, the shadow is too dark and too tight.

**The No-Blur Rule.** Sticky surfaces are opaque. No `backdrop-filter` glass on the header, TOC, or dialogs.

## 5. Components

The overall feel is **measured and self-assured**: confident but restrained, with clear intent. Interactions acknowledge the reader without performing — a 2px lift, a warmed border, an accent underline, each on the `ease-out-quint` curve (`cubic-bezier(0.22, 1, 0.36, 1)`) over 150–200ms, and each erased under `prefers-reduced-motion`.

### Buttons (Link Buttons)
- **Shape:** Gently curved (0.5rem / `{rounded.md}`).
- **Primary:** The full honey-amber as a **fill** (`{colors.cta-honey}`) with an ink label (`{colors.ink-light}`) — the brand colour at full strength. Bold (600) label. Hover lifts 1px and adds a soft `--sl-shadow-md`.
- **Secondary:** Transparent with a muted (`gray-4`) border; on hover the border warms to the accent and the label takes the accent colour.
- **Minimal:** No box — accent-coloured text with a thin underline that solidifies on hover, so it reads as a link rather than text that happens to have an icon.

### Cards
- **Corner Style:** 0.75rem (`{rounded.xl}`).
- **Background:** The page surface (`{colors.surface-light}` / dark equivalent) — not a filled panel.
- **Border:** A single hairline (`gray-5`).
- **Shadow Strategy:** None at rest (see Elevation). On hover the border warms toward the accent (a 60% mix into the hairline), a soft `--sl-shadow-sm` appears, and the card lifts 2px — a small, earned reward, suppressed on touch (`hover: hover`) and under reduced motion.
- **Title:** Spectral 600, tying the card to the document's headings rather than the interface chrome.

### Asides (Admonitions)
- **Style:** A full, softened hairline (the variant colour at 45% into transparent) plus a tinted fill and the variant icon — **never** a side stripe. Radius 0.625rem (`{rounded.lg}`). Title in Spectral.
- **Variants:** note = petrol-teal, tip = violet, caution = amber-orange (deliberately separated from the brand link colour so the two never blur), danger = measured red.

### Inputs / Search
- **Style:** The search trigger is a 0.5rem-radius control with a muted border; the search dialog is a 0.75rem hairline-bordered sheet. On hover the trigger border warms to the accent.
- **Focus:** A deliberate keyboard-only ring — `2px solid` accent at `2px` offset (Starlight's 1px reads thin on near-black). Pointer users see no ring; it never clutters the resting interface.
- **Motion:** The dialog rises and scale-settles over 0.2s on open, gated behind `no-preference`.

### Navigation (Sidebar + TOC)
- **Sidebar:** No dividing line; quiet de-emphasised type and a gutter separate it from the column. Section labels are uppercase 0.06em-tracked `xs` muted small-caps. Links round at 0.375rem; hover lifts the text to ink over a faint `gray-7` fill. The active page takes the accent text on a 12%-accent tint, weight 600.
- **TOC:** No structural divider. The active item carries a short inset accent tick (`box-shadow: inset 2px 0 0`) — a real "you are here" cue, the only job the old full-height line did.
- **Tabs:** A documentation-register underline. The active tab is marked three ways at once — accent colour, weight 600, and a 3px accent indicator — over a 1px resting baseline, so selection is unambiguous without competing chrome.

### Inline & Editorial Prose
- **Inline code:** Petrol-teal text on a neutral `gray-6` chip with a hairline border, radius 0.3125rem — the information register, set apart from the prose.
- **Blockquotes:** An editorial pull-quote — Spectral italic at 1.18em, indented by margin, **no** accent stripe.
- **Horizontal rule:** A short (4rem) centred editorial rule, not a full-width divider.
- **Tables:** Header in Spectral; even rows take a faint tonal zebra; a too-wide table becomes its own horizontal-scroll container (thin themed scrollbar) rather than clipping a column.

### FeatureGrid (Signature Component)
The theme's own splash layout and the deliberate alternative to the identical card grid. It wraps Starlight's own `<Card>` (so each icon keeps its Splash-Tint chip) and supplies *arrangement only*; the first child always leads. Two layouts via a `layout` prop:
- **`lead`** (default): a full-width thesis card over a row of supporting peers that auto-fit the count — 2 → halves, 3 → thirds, 4 → quarters.
- **`alternating`**: an editorial zigzag on a 5-track grid where the wider card flips side each row (3:2, then 2:3); a lone trailing card spans full width to avoid a ragged row.

Both collapse to a single column below 50rem. Layout rules are authored globally in `base.css` (not scoped on the component) because slotted cards carry no scope hash — child-targeting selectors must reach them directly.

## 6. Do's and Don'ts

### Do:
- **Do** keep the body reading column ink-on-surface, capped at ~70ch (`42rem`), set generously larger than the docs default (~18px / 1.75).
- **Do** let the honey-amber accent appear rarely and meaningfully — links, active state, selection, focus. Its rarity is the point.
- **Do** keep accent text bronze in light mode and brightened honey in dark mode; only ever show the full honey as a *fill* with an ink label.
- **Do** give petrol-teal its one job — information and code — and keep it there.
- **Do** separate surfaces with a single hairline and tonal steps; reach for a shadow only as a response to hover, focus, or scroll.
- **Do** treat light and dark as equally first-class, both hitting WCAG 2.2 AA.
- **Do** author all theme CSS in the `exquisitus` cascade layer and honour `prefers-reduced-motion` on every transition.

### Don't:
- **Don't** ship the hacker / terminal aesthetic — no monospace-everything, no green-on-black, no cyberpunk costume.
- **Don't** ship generic SaaS docs — the Mintlify / Docusaurus default of clean-white-plus-blue-primary with a forgettable sidebar.
- **Don't** carry warmth in the body background — no cream / sand / parchment surface. Warmth lives in the amber and the type.
- **Don't** use side-stripe accent borders (`border-left` / `border-right` > 1px) on asides, callouts, blockquotes, details, or cards — full hairlines, tonal fills, or icons instead.
- **Don't** use gradient text, decorative glassmorphism, or backdrop-blur on sticky chrome.
- **Don't** use elegant-but-illegible light-grey body copy; muted text still clears 4.5:1.
- **Don't** let colour enter the prose reading column beyond links and inline `<mark>`.
- **Don't** ship the identical card grid; use `FeatureGrid`'s editorial layouts instead.
- **Don't** shrink the body type to fit more on screen. The Generous Body Rule wins.
- **Don't** reach for `!important`; the cascade layer order makes it unnecessary (the one sanctioned exception is the universal reduced-motion reset).
