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
  code-surface-light: "oklch(0.95 0.012 235)"
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
  md: "0.5rem"     # buttons, search trigger, code blocks, file tree
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
  code-block:
    backgroundColor: "{colors.code-surface-light}"
    rounded: "{rounded.md}"
  file-tree:
    backgroundColor: "{colors.surface-light}"
    rounded: "{rounded.md}"
---

# Design System: Exquisitus

## 1. Overview

**Creative North Star: "The Considered Reading Room"**

Exquisitus treats a documentation page the way a great publication treats a feature: the reading column is the protagonist, and everything else — navigation, chrome, color — exists to usher the reader into the text and then disappear. The one guest allowed to keep its presence is the **technical register** — code, terminals, file trees — the way the *New York Times* lets an interactive or a data sidebar break the body's rules without dethroning the article. It draws its conviction from four pinnacles: the typographic authority of the *New York Times* online, the single-minded legibility of the *Readability Guidelines* wiki, the care-as-craft navigability of *MDN*, and the brave, accessible, larger-than-usual type of *Eleventy Excellent*. The thesis is that legibility and beauty are the same discipline at different scales, proved by example, page after page.

The system is built from three recurring moves. First, **the reading surface is flat and hairline-separated** — prose, sidebar, TOC, and chrome read as one calm sheet, not a set of boxes; the sidebar shares the body surface, divided by a single hairline or, more often, by nothing but de-emphasised type. Second, **the technical register is letterpressed into that sheet** — code blocks, terminals, and file trees are pressed *in*, the way a fine press deboss-prints type into paper: a tactile mark of care that signposts reference material without floating it up off the page. Third, **color is spent deliberately**: a warm honey-amber for emphasis and active state, a cool petrol-teal for the information and code register, and near-nothing everywhere else. Warmth lives in the ink and the accent, never in a tinted background. Depth is never a decorative cast shadow; it is depth-from-light, and it moves in exactly two directions — a transient **lift** in response to state (hover, focus, scroll) and a resting **press** that marks the technical register. Taken together, that register is marked on three axes at once — petrol-teal (color), monospace (type), and the letterpress (depth) — so a reader knows reference material by its material, not only its content.

This system explicitly rejects two things. It is **not** the hacker / terminal aesthetic — no monospace-everything, no green-on-black costume, no cyberpunk affectation. And it is **not** generic SaaS documentation — none of the Mintlify / Docusaurus default of clean-white-with-a-blue-primary and a forgettable sidebar. The voice is a senior colleague who explains something well: confident, masterful, useful — measured and self-assured, restraining itself with intent and acknowledging the reader without performing for them.

**Key Characteristics:**
- Content is sovereign — the reading column is the design; the rest is service.
- Generous, accessible type by conviction: ~18px body, 1.75 line-height, a ~70ch measure.
- A full palette held in tight discipline: honey-amber for emphasis, petrol-teal for information.
- A flat, hairline-separated reading surface, with the technical register letterpressed *into* it. Depth is depth-from-light in two directions — a transient lift, a resting press — never a decorative cast.
- The information register marked on three axes at once — petrol-teal (color), monospace (type), and the letterpress (depth).
- Accessible by conviction — WCAG 2.2 AA is the floor, light and dark modes both, every motion gated behind `prefers-reduced-motion`.

## 2. Colors

A full palette of two committed brand hues — a warm honey-amber and a cool petrol-teal — held against a disciplined near-neutral surface, with each color carrying a defined semantic job rather than decorating. Authored entirely in OKLCH so lightness is perceptually even and hue holds as chroma changes. Every foreground/background pair is WCAG 2.2 AA validated: body and UI text ≥ 4.5:1, large text ≥ 3:1.

### Primary
- **Honey-Amber** (dark accent `oklch(0.72 0.13 75)`; dark link text `oklch(0.84 0.115 82)`): The brand signature — links, active navigation, text selection, focus accents, emphasis. Warm, sun-cured, confident. Spent sparingly so its appearance always means something.
- **Bronze** (`oklch(0.52 0.12 68)`): The light-mode face of the accent. The raw honey fails contrast as *text* on white (≈2:1), so light-mode accent **text** deepens to bronze (≥4.5:1). This is a contrast floor, not a stylistic choice.
- **CTA Honey** (`oklch(0.78 0.14 80)`): The full brand honey, used in light mode only as a **fill** behind an ink label (ink-on-honey ≈ 8.5:1). It is the one place the brand color appears at full strength on white, where links cannot carry it.

### Secondary
- **Petrol-Teal** (dark `oklch(0.8 0.075 205)`; light `oklch(0.44 0.09 205)`): The amber's cool counterweight, held at low chroma for calm. Reserved for the information register — inline code, "note" admonitions, code accents, and the structure of a file tree (directory icons, markers, guides). Its coolness lets the amber stay the warm protagonist. It is the **color axis of the information register** — twinned with monospace (type) and the letterpress (depth).

### Neutral
- **Ink** (dark `oklch(0.94 0.012 85)`; light `oklch(0.22 0.015 80)`): Highest-contrast foreground — headings and bold. Carries a whisper of the brand hue at very low chroma so the monochrome never reads as cold grey.
- **Body** (dark `oklch(0.82 0.014 85)`; light `oklch(0.33 0.012 80)`): The reading column. Where most of the page lives.
- **Muted** (dark `oklch(0.66 0.012 82)`; light `oklch(0.45 0.01 80)`): Secondary text, captions, metadata, nav section labels. Never the elegant-but-illegible light grey.
- **Hairline** (dark `oklch(0.38 0.008 80)`; light `oklch(0.8 0.005 80)`): Separators, table rules, card borders, tablist baselines. Pinned explicitly to the ramp's hairline step — Starlight's default points it at the raised-surface tone, which reads as no line at all on these surfaces.
- **Surface** (dark `oklch(0.17 0.006 80)`; light `oklch(1 0 0)` — pure white): The paper. No hidden warm tint, in either mode.
- **Code Surface** (dark `oklch(0.205 0.012 245)`; light `oklch(0.965 0.008 235)`): A cool-tinted panel for code blocks, clearly distinct from the page so code reads in the information register.

### Named Rules
**The Sovereign Column Rule.** Color never enters the body reading column except as a link or an inline `<mark>`. Prose is ink on surface — full stop. All brand color lives in the chrome, the accents, and the semantic markers around the text.

**The Two-Job Rule.** Honey-amber is warmth and emphasis; petrol-teal is information and code. Neither crosses into the other's job. A full palette earns its richness through discipline, not abundance.

**The No-Cream Rule.** The light-mode surface is pure white (`oklch(1 0 0)`); the dark surface is near-black (`oklch(0.17 0.006 80)`). Warmth is carried by the ink, the amber, and the typography — never by tinting the paper. Forbidden token names: `--cream`, `--sand`, `--paper`, `--parchment`.

**The Deepened-Accent Rule.** Accent **text** is bronze in light mode and brightened honey in dark mode; the raw honey only ever appears as a **fill** with an ink label. Never "fix" the bronze link color back to honey — the contrast floor forces it.

**The Splash Tint Exception.** One sanctioned place lets color appear without a semantic job: the icon chips inside a `FeatureGrid` on a splash page may each carry a soft, low-chroma tint from the wider semantic ramp (the muted `L ≈ 0.95` orange / purple / green / red set, never the bright RGBY default). It is a small, rare splash that gives a card grid life; it does not loosen the Two-Job Rule anywhere prose, chrome, or semantics live.

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
- **Code** (JetBrains Mono, `0.9em`): Inline and block code; step counters use tabular figures so multi-digit sequences stay aligned. Monospace is the **type axis of the information register** — twinned with petrol-teal (color) and the letterpress (depth).

### Named Rules
**The Generous Body Rule.** Body type is set larger and looser than documentation convention (~18px / 1.75). When in doubt, bigger. The reader's comfort outranks fitting more above the fold.

**The 65–75ch Rule.** The reading measure is capped at ~70 characters regardless of viewport. A wide screen gets wider margins, never a wider line.

**The Serif-Marks-Structure Rule.** Spectral marks every structural or editorial element — headings, titles, blockquotes (italic), table headers, `summary`. The sans never carries a heading; the serif never carries running body.

## 4. Elevation

Depth is never a decorative cast shadow. It is **depth-from-light**, and it always serves comprehension — distinguishing surfaces, signposting registers, rewarding interaction — never decoration. It moves in exactly **two directions**:

- **Lift** — a surface rises *toward* the reader as a transient **response to state**: a card lifting 2px on hover, a button on hover, the sticky header separating from the content as it scrolls. Never at rest.
- **Press (letterpress)** — a surface is debossed *into* the page as a **resting property of the technical register**: code blocks, terminals, and file trees carry a faint inset (a lit lip over a recessed inner shadow), the way a fine press presses type into paper. Quiet enough never to compete with the reading column; present enough to mark reference material as set with care.

The reading surface itself stays flat. Prose, sidebar, and TOC carry no dividing panel; hierarchy and a single hairline do that work, and **tonal layering** — a surface nudged a step off the page — separates what little needs separating.

Both lift and press are mode-aware, because the two surfaces take light differently. On white, the header lift is a conventional soft drop shadow; on near-black — which cannot take a cast shadow — it comes *from light*: a 1px lit lower lip plus a soft upward bloom built from a low-opacity tint of the ink color. The letterpress inverts the same physics — a recessed top shadow over a lit lower lip — deepened on the cool code panel and quieted on the unfilled file tree.

Both the header and the mobile TOC are **opaque, never translucent**: a backdrop blur / scrim reads poorly for low-vision readers, so a near-solid fill over the page surface gives the clean scrolling edge instead.

### Shadow Vocabulary
- **Card / button lift** (`var(--sl-shadow-sm)` / `var(--sl-shadow-md)`, hover only): the transient rise toward the reader.
- **Header lift** (light: `0 8px 22px -11px rgba(20, 16, 8, 0.34)`; dark: a lit lip plus an upward bloom from the ink color): the sticky header separating on scroll.
- **Letterpress edge** (`var(--sl-exquisitus-code-edge)`, at rest): the debossed inset on the technical register — a lit lip and recessed inner shadow, mode-aware.

### Named Rules
**The Tonal-First Rule.** For the reading surface, reach for a tonal step before any shadow. Surfaces are distinguished by lightness, not by floating.

**The Considered-Lift Rule.** No reading or chrome surface carries a shadow at rest. A *lift* is always a reply to hover, focus, or scroll — never decoration. If it looks like a 2014 app, the shadow is too dark and too tight.

**The Letterpress Rule.** The technical register — code blocks, terminals, file trees, and future reference surfaces — carries a debossed inset (`--sl-exquisitus-code-edge`) *at rest*. This is not an exception to flatness; it is the register's signature, the **depth axis** twinned with petrol-teal (color) and monospace (type). It only ever presses *in*, never floats *out*; it stays quiet enough to keep the reading column sovereign; and it is reserved for the information register — prose, cards, asides, and chrome never carry it.

**The No-Blur Rule.** Sticky surfaces are opaque. No `backdrop-filter` glass on the header, TOC, or dialogs.

## 5. Components

The overall feel is **measured and self-assured**: confident but restrained, with clear intent. Interactions acknowledge the reader without performing — a 2px lift, a warmed border, an accent underline, each on the `ease-out-quint` curve (`cubic-bezier(0.22, 1, 0.36, 1)`) over 150–200ms, and each erased under `prefers-reduced-motion`.

### Buttons (Link Buttons)
- **Shape:** Gently curved (0.5rem / `{rounded.md}`).
- **Primary:** The full honey-amber as a **fill** (`{colors.cta-honey}`) with an ink label (`{colors.ink-light}`) — the brand color at full strength. Bold (600) label. Hover lifts 1px and adds a soft `--sl-shadow-md`.
- **Secondary:** Transparent with a muted (`gray-4`) border; on hover the border warms to the accent and the label takes the accent color.
- **Minimal:** No box — accent-colored text with a thin underline that solidifies on hover, so it reads as a link rather than text that happens to have an icon.

### Cards
- **Corner Style:** 0.75rem (`{rounded.xl}`).
- **Background:** The page surface (`{colors.surface-light}` / dark equivalent) — not a filled panel.
- **Border:** A single hairline (`gray-5`).
- **Shadow Strategy:** None at rest (see Elevation). On hover the border warms toward the accent (a 60% mix into the hairline), a soft `--sl-shadow-sm` appears, and the card lifts 2px — a small, earned reward, suppressed on touch (`hover: hover`) and under reduced motion.
- **Title:** Spectral 600, tying the card to the document's headings rather than the interface chrome.

### Asides (Admonitions)
- **Style:** A full, softened hairline (the variant color at 45% into transparent) plus a tinted fill and the variant icon — **never** a side stripe. Radius 0.625rem (`{rounded.lg}`). Title in Spectral.
- **Variants:** note = petrol-teal, tip = violet, caution = amber-orange (deliberately separated from the brand link color so the two never blur), danger = measured red.

### Inputs / Search
- **Style:** The search trigger is a 0.5rem-radius control with a muted border; the search dialog is a 0.75rem hairline-bordered sheet. On hover the trigger border warms to the accent.
- **Focus:** A deliberate keyboard-only ring — `2px solid` accent at `2px` offset (Starlight's 1px reads thin on near-black). Pointer users see no ring; it never clutters the resting interface.
- **Motion:** The dialog rises and scale-settles over 0.2s on open, gated behind `no-preference`.

### Navigation (Sidebar + TOC)
- **Sidebar:** No dividing line; quiet de-emphasised type and a gutter separate it from the column. Section labels are uppercase 0.06em-tracked `xs` muted small-caps. Links round at 0.375rem; hover lifts the text to ink over a faint `gray-7` fill. The active page takes the accent text on a 12%-accent tint, weight 600.
- **TOC:** No structural divider. The active item carries a short inset accent tick (`box-shadow: inset 2px 0 0`) — a real "you are here" cue, the only job the old full-height line did.
- **Tabs:** A documentation-register underline. The active tab is marked three ways at once — accent color, weight 600, and a 3px accent indicator — over a 1px resting baseline, so selection is unambiguous without competing chrome.

### Inline & Editorial Prose
- **Inline code:** Petrol-teal text on a neutral `gray-6` chip with a hairline border, radius 0.3125rem — the information register, set apart from the prose.
- **Blockquotes:** An editorial pull-quote — Spectral italic at 1.18em, indented by margin, **no** accent stripe.
- **Horizontal rule:** A short (4rem) centred editorial rule, not a full-width divider.
- **Tables:** Header in Spectral; even rows take a faint tonal zebra; a too-wide table becomes its own horizontal-scroll container (thin themed scrollbar) rather than clipping a column.

### Code Blocks
- **Surface:** The cool code panel (`code-surface`) — the filled exception to the flat reading surface, clearly not the page, set in the information register.
- **Frame:** No IDE costume. The filename is a quiet monospace **caption-folio** *above* the panel (not an editor tab); terminal traffic-light dots are removed. A full hairline border and `0.5rem` (`{rounded.md}`) radius — tighter than the cards' `xl`, so code reads as a typeset block, not a UI card.
- **Depth:** Letterpressed at rest (`--sl-exquisitus-code-edge`) — pressed into the page (see Elevation, The Letterpress Rule).
- **Diffs:** Proof-correction marks — a soft pastel band carries the familiar line-highlight, while the `+` / `−` gutter glyph (driven from the high-contrast `-high` ramp) is the non-color cue that distinguishes insert from delete for red-green colorblind readers (WCAG 1.4.1).
- **Copy button:** A quiet panel-colored chip (hairline outline, muted icon) at rest, warming to the accent on hover/focus per the secondary-button language; seated in the panel's top-right corner, clear of the caption.

### File Tree
- **Surface:** An **open hairline figure** on the page surface — *unfilled*, because the filled cool panel is the code block's exception; the tree is a reference diagram, not featured content. `0.5rem` (`{rounded.md}`) radius.
- **Depth:** Letterpressed at rest, like the code block — which is also what tells it apart from a card: a card is flat-at-rest and *lifts* toward the reader on hover; the tree is *pressed in*. Same surface, opposite depth direction.
- **Color:** The Two-Job Rule applied to structure — petrol-teal marks containers (directory icons, disclosure markers, indent guides); files keep neutral icons; honey/bronze is reserved for interaction (folder hover) and the highlighted file (a bronze fill).

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
- **Do** keep the reading and chrome surfaces flat at rest, separated by a single hairline and tonal steps; a *lift* is only ever a response to hover, focus, or scroll.
- **Do** letterpress the technical register (code blocks, terminals, file trees) at rest with `--sl-exquisitus-code-edge` — pressed *in*, never floated — as the depth axis of the information register, twinned with petrol-teal and monospace.
- **Do** treat light and dark as equally first-class, both hitting WCAG 2.2 AA.
- **Do** author all theme CSS in the `exquisitus` cascade layer and honor `prefers-reduced-motion` on every transition.

### Don't:
- **Don't** ship the hacker / terminal aesthetic — no monospace-everything, no green-on-black, no cyberpunk costume.
- **Don't** ship generic SaaS docs — the Mintlify / Docusaurus default of clean-white-plus-blue-primary with a forgettable sidebar.
- **Don't** carry warmth in the body background — no cream / sand / parchment surface. Warmth lives in the amber and the type.
- **Don't** use side-stripe accent borders (`border-left` / `border-right` > 1px) on asides, callouts, blockquotes, details, or cards — full hairlines, tonal fills, or icons instead.
- **Don't** use gradient text, decorative glassmorphism, or backdrop-blur on sticky chrome.
- **Don't** use elegant-but-illegible light-grey body copy; muted text still clears 4.5:1.
- **Don't** let color enter the prose reading column beyond links and inline `<mark>`.
- **Don't** ship the identical card grid; use `FeatureGrid`'s editorial layouts instead.
- **Don't** shrink the body type to fit more on screen. The Generous Body Rule wins.
- **Don't** letterpress prose, cards, asides, or chrome — the resting press is reserved for the technical register; everywhere else stays flat at rest.
- **Don't** float the technical register on an outward / cast shadow — it presses *in*, never lifts *out*.
- **Don't** reach for `!important`; the cascade layer order makes it unnecessary (the one sanctioned exception is the universal reduced-motion reset).
