---
name: Exquisitus
description: An Astro Starlight theme where readability and beauty are the same discipline.
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
  muted-dark: "oklch(0.7 0.012 82)"       # captions / metadata, dark (lifted to ~7:1 AAA)
  muted-light: "oklch(0.45 0.01 80)"      # captions / metadata, light
  hairline-dark: "oklch(0.38 0.008 80)"   # separators, dark
  hairline-light: "oklch(0.8 0.005 80)"   # separators, light
  surface-dark: "oklch(0.17 0.006 80)"    # page background, dark
  surface-light: "oklch(0.985 0 0)"       # page background, light (chroma-0 off-white)
  # Raised surface (cards, link cards). Dark takes a real tonal step (gray-6)
  # so cards read by fill, not ghost outline; light keeps the page white —
  # the hairline alone separates there (Tonal-First Rule).
  surface-raised-dark: "oklch(0.24 0.007 80)"
  code-surface-dark: "oklch(0.205 0.012 245)"
  code-surface-light: "oklch(0.95 0.012 235)"
typography:
  # Each stack carries a metric-matched "… Fallback" face (fonts.css) right
  # after the real font: a local() wrapper around the platform fallback with
  # size-adjust / *-override descriptors pinned to the web font's metrics, so
  # the font-display: swap reflow moves almost nothing.
  display:
    fontFamily: "Spectral, 'Spectral Fallback', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.1875rem, calc(1rem + 5vw), 5rem)"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "-0.018em"
  headline:
    fontFamily: "Spectral, 'Spectral Fallback', Georgia, 'Times New Roman', serif"
    fontSize: "var(--sl-text-2xl)"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "-0.012em"
  title:
    fontFamily: "Spectral, 'Spectral Fallback', Georgia, 'Times New Roman', serif"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "-0.012em"
  body:
    fontFamily: "'Atkinson Hyperlegible Next Variable', 'Atkinson Hyperlegible Next Fallback', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "'Atkinson Hyperlegible Next Variable', 'Atkinson Hyperlegible Next Fallback', system-ui, sans-serif"
    fontSize: "var(--sl-text-xs)"
    fontWeight: 600
    letterSpacing: "0.06em"
  code:
    fontFamily: "'JetBrains Mono Variable', 'JetBrains Mono Fallback', ui-monospace, monospace"
    fontSize: "0.9em"
    fontWeight: 400
rounded:
  xs: "0.25rem"    # inline mark, hr pill (the focus ring carries no radius of its own)
  sm: "0.375rem"   # nav & TOC links
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
    # Deliberate half-step between xs and sm: the chip hugs a 0.9em glyph box,
    # where sm reads pill-ish and xs reads sharp. Component-specific by design.
    rounded: "0.3125rem"
  code-block:
    backgroundColor: "{colors.code-surface-light}"
    rounded: "{rounded.md}"
  file-tree:
    backgroundColor: "{colors.surface-light}"
    rounded: "{rounded.md}"
  specimen-plate:
    rounded: "{rounded.md}"
  doorway:
    backgroundColor: "{colors.surface-light}"
    rounded: "{rounded.xl}"
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
- **Muted** (dark `oklch(0.7 0.012 82)`; light `oklch(0.45 0.01 80)`): Secondary text, captions, metadata, nav section labels. Never the elegant-but-illegible light grey — the dark step is deliberately lifted to ~7:1 (AAA) so small navigational chrome is comfortable, not merely compliant (see the Tonal-First Rule).
- **Hairline** (dark `oklch(0.38 0.008 80)`; light `oklch(0.8 0.005 80)`): Separators, table rules, card borders, tablist baselines. Pinned explicitly to the ramp's hairline step — Starlight's default points it at the raised-surface tone, which reads as no line at all on these surfaces.
- **Surface** (dark `oklch(0.17 0.006 80)`; light `oklch(0.985 0 0)` — a chroma-0 off-white): The paper. No hidden warm tint, in either mode. The light surface is *off* white, not white: chroma is exactly 0, so it cannot read as cream under any light, but it takes the glare edge off a surface the Generous Body Rule asks the reader to sit with for a long time (see the No-Cream Rule).
- **Code Surface** (dark `oklch(0.205 0.012 245)`; light `oklch(0.95 0.012 235)`): A cool-tinted panel for code blocks, clearly distinct from the page so code reads in the information register.
- **Raised Surface** (dark `oklch(0.24 0.007 80)` — the ramp's `gray-6`; light = the page white): The tonal step for cards and link cards. Only dark mode steps up; on white the hairline alone does the separating (see the Tonal-First Rule).

### Named Rules
**The Sovereign Column Rule.** Color never enters the body reading column except as a link or an inline `<mark>`. Prose is ink on surface — full stop. All brand color lives in the chrome, the accents, and the semantic markers around the text.

**The Quiet Permalink Rule.** Heading permalink anchors are chrome, not emphasis. Starlight renders them as content links, so left untouched they inherit the accent and an underline and paint the honey on every heading hover — spending the accent where it means nothing. Render the icon in muted ink (`--sl-color-gray-3`) at rest, no underline, and warm it to the accent only on direct `:hover`/`:focus` of the anchor itself — the one instant the color carries intent. Where the icon is hover-revealed it settles in from the heading rather than snapping (a short `translateX`, gated on `hover: hover` and `prefers-reduced-motion`). Keep the chain-link glyph; a permalink trades recognisability for cleverness the moment it becomes a §.

**The End Mark Rule.** Every content page closes with a single editorial end mark (`end-mark.css`) — **a single small centred jewel**, in the tradition of a printed article's terminal sign. It earns its place by doing a job (marking the end of the text), which is the test any recurring mark must pass here: a mark that only decorates violates the Sovereign Column Rule, a mark that *signs an ending* is editorial heritage. It appears once, at the very bottom, in muted ink; it never lands on the splash (whose colophon already closes it); and it is drawn as an SVG mask, not a glyph, because none of the three self-hosted faces carries a fleuron. Consumers can omit it with the `endMark: false` plugin option; it ships on.

**A divider and a terminal must differ in kind, not in degree.** The end mark was once a jewel *flanked by two hairlines* — the `hr`'s own silhouette with something in the middle — on the theory that the divider and the terminal should read as one family. In practice a page that ends near a content `hr` showed the same object twice and the ending stopped signing anything. So the family resemblance is gone by design: **the `hr` is a line across the column (a pause; the text continues); the end mark is a single sign (the text ends).** This also matches the tradition being cited — the printed end sign (the *New York Times* "▪", the old "—30—") is one mark, never a ruled one. Never give the end mark rules, and never give it more than one jewel: two or three marks is a *dinkus*, which means a section break, i.e. the opposite of an ending.

**The Two-Job Rule.** Honey-amber is warmth and emphasis; petrol-teal is information and code. Neither crosses into the other's job. A full palette earns its richness through discipline, not abundance.

**The No-Cream Rule.** The rule forbids **warmth in the paper**, not off-white. The light-mode surface is a chroma-0 off-white (`oklch(0.985 0 0)`); the dark surface is near-black (`oklch(0.17 0.006 80)`). Warmth is carried by the ink, the amber, and the typography — never by tinting the paper. **The test is chroma, not lightness: a light surface may sit below L 1.0, but its chroma must be exactly 0.** Any chroma in the paper — however small, however it is named — is the cream move and is forbidden. (Pure white was the original reading of this rule, and it overcorrected: it banned the thing that most helps a long read in order to avoid a thing chroma 0 already makes impossible.) Forbidden token names: `--cream`, `--sand`, `--paper`, `--parchment`.

**The Deepened-Accent Rule.** Accent **text** is bronze in light mode and brightened honey in dark mode; the raw honey only ever appears as a **fill** with an ink label. Never "fix" the bronze link color back to honey — the contrast floor forces it.

**The Splash Tint Exception.** One sanctioned place lets color appear without a semantic job: the icon chips inside a `FeatureGrid` on a splash page may each carry a soft, low-chroma tint from the wider semantic ramp (the muted `L ≈ 0.95` orange / purple / green / red set, never the bright RGBY default). It is a small, rare splash that gives a card grid life; it does not loosen the Two-Job Rule anywhere prose, chrome, or semantics live.

## 3. Typography

**Display Font:** Spectral (Production Type; OFL) — fallback `'Spectral Fallback', Georgia, 'Times New Roman', serif`.
**Body Font:** Atkinson Hyperlegible Next (Braille Institute; OFL, variable wght 200–800) — fallback `'Atkinson Hyperlegible Next Fallback', system-ui, sans-serif`.
**Mono Font:** JetBrains Mono (OFL, variable) — fallback `'JetBrains Mono Fallback', ui-monospace, monospace`.

All three faces are OFL-licensed and self-hosted via `@fontsource` — a hard requirement for a distributed theme. No Google Fonts request, no third-party origin, and near-zero swap layout shift (see the Metric-Matched Fallback Rule). The root font-size is nudged to `106.25%` (~17px base) so the whole rem-based scale, including the ~70ch measure, lifts with the reader's own base size.

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

**The Metric-Matched Fallback Rule.** Each stack's first fallback is a `local()` wrapper (`fonts.css`) pinned to the web font's metrics with `size-adjust` and the `*-override` descriptors, listing the platform face *and* its metric-compatible Linux substitutes (Arial / Liberation Sans / Arimo; Georgia / Gelasio; Courier New / Liberation Mono / Cousine). Cold-cache text paints instantly and the swap moves almost nothing. `font-display: swap` stays — the brand faces must appear on first visit; `optional` is forbidden. Values derive from `@capsizecss/metrics`; never hand-tune them by eye.

## 4. Elevation

Depth is never a decorative cast shadow. It is **depth-from-light**, and it always serves comprehension — distinguishing surfaces, signposting registers, rewarding interaction — never decoration. It moves in exactly **two directions**:

- **Lift** — a surface rises *toward* the reader as a transient **response to state**: a card lifting 2px on hover, a button on hover, the sticky header separating from the content as it scrolls. Never at rest.
- **Press (letterpress)** — a surface is debossed *into* the page as a **resting property of the technical register**: code blocks, terminals, file trees, and the specimen plate carry a faint inset (a lit lip over a recessed inner shadow), the way a fine press presses type into paper. Quiet enough never to compete with the reading column; present enough to mark reference material as set with care.

The reading surface itself stays flat. Prose, sidebar, and TOC carry no dividing panel; hierarchy and a single hairline do that work, and **tonal layering** — a surface nudged a step off the page — separates what little needs separating.

Both lift and press are mode-aware, because the two surfaces take light differently. On white, the header lift is a conventional soft drop shadow; on near-black — which cannot take a cast shadow — it comes *from light*: a 1px lit lower lip plus a soft upward bloom built from a low-opacity tint of the ink color. The letterpress inverts the same physics — a recessed top shadow over a lit lower lip — deepened on the cool code panel and quieted on the unfilled file tree.

Both the header and the mobile TOC are **opaque, never translucent**: a backdrop blur / scrim reads poorly for low-vision readers, so a near-solid fill over the page surface gives the clean scrolling edge instead.

### Shadow Vocabulary
- **Card / button lift** (`var(--sl-shadow-sm)` / `var(--sl-shadow-md)`, hover only): the transient rise toward the reader.
- **Header lift** (light: `0 8px 22px -11px rgba(20, 16, 8, 0.34)`; dark: a lit lip plus an upward bloom from the ink color): the sticky header separating on scroll.
- **Letterpress edge** (`var(--sl-exquisitus-code-edge)`, at rest): the debossed inset on the technical register — a lit lip and recessed inner shadow, mode-aware.

### Named Rules
**The Tonal-First Rule.** For the reading surface, reach for a tonal step before any shadow. Surfaces are distinguished by lightness, not by floating. This cuts differently per mode, because the page grounds differ. On the white page a hairline (`gray-5`) is dark enough to separate a card on its own, so a raised surface keeps the page color. On the near-black page that same hairline is only ~1.9:1 and a card at page color reads as a ghost box — so dark raised surfaces (cards, link cards) take a real tonal step up to `gray-6` (`--sl-exquisitus-surface-raised`) and read by their fill, not their outline. Muted chrome type follows the same conviction: dark `gray-3` is set to clear ~7:1 (AAA) so small navigational text — the TOC, sidebar labels — is comfortable, not merely above the AA floor the theme sells.

**The Considered-Lift Rule.** No reading or chrome surface carries a shadow at rest. A *lift* is always a reply to hover, focus, or scroll — never decoration. If it looks like a 2014 app, the shadow is too dark and too tight.

**The Letterpress Rule.** The technical register — code blocks, terminals, file trees, the specimen plate, and future reference surfaces — carries a debossed inset (`--sl-exquisitus-code-edge`) *at rest*. This is not an exception to flatness; it is the register's signature, the **depth axis** twinned with petrol-teal (color) and monospace (type). It only ever presses *in*, never floats *out*; it stays quiet enough to keep the reading column sovereign; and it is reserved for the information register — prose, cards, asides, and chrome never carry it.

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
- **Background:** The raised surface (`--sl-exquisitus-surface-raised`) — the page white in light mode, a real tonal step to `gray-6` in dark mode, where a hairline alone reads as a ghost box (Tonal-First Rule). Never a heavier filled panel than that.
- **Border:** A single hairline (`gray-5`).
- **Shadow Strategy:** None at rest (see Elevation). On hover the border warms toward the accent (`--sl-exquisitus-border-hover`, a 60% mix into the hairline — shared with the doorways so the lift family stays in step), a soft `--sl-shadow-sm` appears, and the card lifts 2px — a small, earned reward, suppressed on touch (`hover: hover`) and under reduced motion.
- **Title:** Spectral 600, tying the card to the document's headings rather than the interface chrome. Inside a FeatureGrid the size is set by the card's own width, not the viewport (The Card-Relative Title Rule).

### Asides (Admonitions)
- **Style:** A full, softened hairline (the variant color at 45% into transparent) plus a tinted fill and the variant icon — **never** a side stripe. Radius 0.625rem (`{rounded.lg}`). Title in Spectral.
- **Variants:** note = petrol-teal, tip = violet, caution = amber-orange (deliberately separated from the brand link color so the two never blur), danger = measured red.

### Inputs / Search
- **Style:** The search trigger is a 0.5rem-radius control with a muted border; the search dialog is a 0.75rem hairline-bordered sheet. On hover the trigger border warms to the accent.
- **Focus:** A deliberate keyboard-only ring — `2px solid` accent at `2px` offset (Starlight's 1px reads thin on near-black). Pointer users see no ring; it never clutters the resting interface.
- **Motion:** The dialog rises and scale-settles over 0.2s on open, gated behind `no-preference`.

### Navigation (Sidebar + TOC)
- **Sidebar:** No dividing line; quiet de-emphasised type and a gutter separate it from the column. Section labels are uppercase 0.06em-tracked `xs` muted small-caps. Links round at 0.375rem; hover lifts the text to ink over a faint `gray-7` fill. The active page takes the accent text on a 12%-accent tint (`--sl-exquisitus-accent-wash`, shared with the copy button's hover face), weight 600.
- **TOC:** No structural divider. The active item carries a short inset accent tick (`box-shadow: inset 2px 0 0`) — a real "you are here" cue, the only job the old full-height line did.
- **Tabs:** A documentation-register underline. The active tab is marked three ways at once — accent color, weight 600, and a 3px accent indicator — over a 1px resting baseline, so selection is unambiguous without competing chrome.

### Inline & Editorial Prose
- **Inline code:** Petrol-teal text on a neutral `gray-6` chip with a hairline border, radius 0.3125rem — the information register, set apart from the prose.
- **Blockquotes:** An editorial pull-quote — Spectral italic at 1.18em, indented by margin, **no** accent stripe.
- **Horizontal rule:** A short (4rem) centred editorial rule, not a full-width divider.
- **End mark:** A single muted-ink jewel, centred, closing each content page's prose — a signed ending, not a divider (see the End Mark Rule). SVG-mask, never a glyph; gated by the `endMark` plugin option, on by default.
- **Tables:** Header in Spectral; even rows take a faint tonal zebra. A too-wide table scrolls inside an injected wrapper (`.exquisitus-table-wrap`, thin themed scrollbar) rather than clipping a column — the wrapper, not the table, is the scroll region, so the table keeps `display: table` and its semantics for assistive tech; it becomes a keyboard-reachable labeled region only while it actually overflows. No-JS readers fall back to the CSS-only `display: block` scroll.

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

Both collapse to a single column below **34rem of container width** — a container query, not a viewport one: the grid asks how much room *it* has, since a sidebar'd 42rem column hands it far less than a splash page does. The query sits on a wrapper element, because an element is never styled by its own container query. Layout rules are authored globally in `base.css` (not scoped on the component) because slotted cards carry no scope hash — child-targeting selectors must reach them directly.

**The Card-Relative Title Rule.** A card in this grid is a sizing container, and its title is set from the cell it landed in — `clamp(h5, 0.9rem + 2.5cqi, h4)` — never from the viewport. A full-width lead card reaches the h4 title; a 2-of-5 cell in a sidebar'd column resolves near h5 and stays inside its border. The rule is uniform: no per-cell exceptions, no breakpoint juggling, and it holds for whatever container a consumer drops the grid into, which the theme cannot know in advance. Card padding is trimmed to `1.5rem` (Starlight's own tops out at 2.5rem, which a narrow cell cannot spare). The 3:2 asymmetry is never softened to win space — that asymmetry *is* the component.

### Splash Page (Signature Surface)
The splash is the theme's **title spread** — the cover of the book, composed of four moves in order:

- **Specimen Plate** (`SpecimenPlate.astro`, hero): the theme's typographic identity as its own hero object — a Spectral glyph board (`Aa Gg Qq &`), the thesis line in Spectral italic, the four working inks as labeled swatches (honey / petrol / ink / paper, each named with its *job*), and a mono folio caption. It fills the hero's image column so the splash never ships a void or a mascot. Surface: a `gray-6`-hairlined, `gray-7`-filled panel at `{rounded.md}` — the tonal step keeps it from ghosting on near-black — **letterpressed at rest** as a sanctioned member of the reference register (a type specimen is literally what a letterpress prints). Never interactive: it settles into the page once on load (opacity + press, `ease-out-quint`, erased under reduced motion) and does not respond to hover. Declaratively placed via `hero.image.html: <exquisitus-specimen />`, which the Hero override swaps for the component; heroes with a real image keep their image and today's column split.
- **Install strip**: a single copyable install command in the letterpressed code panel, directly under the hero — the time-to-try is one glance, and the strip doubles as the first live component proof.
- **Doorway cards** (`.exquisitus-doorways`): three equal thirds, each a link into a showcase page carrying a live **taste** of what's behind it — a Spectral italic specimen line, a micro note-aside, a 3:2/2:3 zigzag miniature — over a serif title. Navigation and proof in one object; the interiors differ by design, which is what keeps them off the identical-card-grid list. They behave as cards: flat at rest, warmed border + 2px lift on hover.
- **Colophon** (`.exquisitus-colophon`): the page ends the way a fine book does — a short centred rule, a Spectral italic line naming the three faces, and a mono line of quiet facts (`self-hosted · ofl-licensed · wcag 2.2 aa`).

**The Splash Measure Rule.** Starlight widens `--sl-content-width` to 67.5rem on splash templates; the 65–75ch Rule still governs. Prose, headings, and code hold a literal `42rem` centred column; only figures — the plate, the doorways, a FeatureGrid — may span the wide container.

**The Plate Ink Exception.** The specimen plate is the one surface where both brand inks appear together at rest, as labeled swatches — the depth-register sibling of the Splash Tint Exception. It teaches the Two-Job Rule instead of loosening it: each swatch is captioned with its job.

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
- **Do** fill the splash hero's image column — with the specimen plate by default, or a consumer's own hero image — and end the splash with the colophon. A hero with a void beside the copy is an unfinished spread.
- **Do** hold splash prose and code to the `42rem` centred measure (the Splash Measure Rule); only figures span the wide splash container.

### Don't:
- **Don't** ship the hacker / terminal aesthetic — no monospace-everything, no green-on-black, no cyberpunk costume.
- **Don't** ship generic SaaS docs — the Mintlify / Docusaurus default of clean-white-plus-blue-primary with a forgettable sidebar.
- **Don't** carry warmth in the body background — no cream / sand / parchment surface. Warmth lives in the amber and the type. The light paper may sit *below* pure white (it does: `oklch(0.985 0 0)`), but its chroma must be exactly 0; the No-Cream Rule tests chroma, not lightness.
- **Don't** use side-stripe accent borders (`border-left` / `border-right` > 1px) on asides, callouts, blockquotes, details, or cards — full hairlines, tonal fills, or icons instead.
- **Don't** use gradient text, decorative glassmorphism, or backdrop-blur on sticky chrome.
- **Don't** use elegant-but-illegible light-grey body copy; muted text still clears 4.5:1.
- **Don't** let color enter the prose reading column beyond links and inline `<mark>`.
- **Don't** ship the identical card grid; use `FeatureGrid`'s editorial layouts instead.
- **Don't** shrink the body type to fit more on screen. The Generous Body Rule wins.
- **Don't** letterpress prose, cards, asides, or chrome — the resting press is reserved for the technical register; everywhere else stays flat at rest.
- **Don't** float the technical register on an outward / cast shadow — it presses *in*, never lifts *out*.
- **Don't** make the specimen plate interactive or give doorway tastes real affordances — the plate is a printed object; a taste is a specimen, not a control.
- **Don't** reach for `!important`; the cascade layer order makes it unnecessary (the one sanctioned exception is the universal reduced-motion reset).
- **Don't** gate a component's layout on a viewport media query when its width actually comes from its container. The 42rem reading column hands a component ~37rem at *any* screen size, so `@media (min-width: 50rem)` cheerfully applies a multi-track layout to a column with no room for it. Ask the container (`@container`), not the window — and remember an element is never styled by its own container query, so the query sits on a wrapper.
- **Don't** let a heading overflow its box. A long word in a flex row can't shrink below its own min-content width, and `overflow-wrap: break-word` does not lower that floor. Size the type to the container (`cqi`), and keep `min-width: 0` on the text as the net.
