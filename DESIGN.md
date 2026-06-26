<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->
---
name: Exquisitus
description: An Astro Starlight theme at the pinnacle of readability and beauty.
---

# Design System: Exquisitus

## 1. Overview

**Creative North Star: "The Considered Reading Room"**

Exquisitus treats a documentation page the way a great publication treats a feature: the reading column is the protagonist, and everything else — navigation, chrome, color — exists to usher the reader into the text and then disappear. It draws its conviction from four pinnacles: the typographic authority of the *New York Times* online, the single-minded legibility of the *Readability Guidelines* wiki, the care-as-craft navigability of *MDN*, and the brave, accessible, larger-than-usual type of *Eleventy Excellent*. The thesis is that legibility and beauty are the same discipline at different scales — proved by example, page after page.

This system explicitly rejects two things. It is **not** the hacker / terminal aesthetic — no monospace-everything, no green-on-black costume, no cyberpunk affectation. And it is **not** generic SaaS documentation — none of the Mintlify / Docusaurus default of clean-white-with-a-blue-primary and a forgettable sidebar. Warmth here is carried by the typography and the amber brand color, never by a cream or sand body background (that warm-neutral default is itself a tell). The voice is a senior colleague who explains something well: confident, masterful, useful.

**Key Characteristics:**
- Content is sovereign — the reading column is the design, the rest is service.
- Generous, accessible type by conviction; larger defaults, not smaller.
- A full palette held in tight discipline: warm amber + a cool counter-hue, each with a job.
- Care made visible in rhythm, spacing, and motion that is felt but never performed.
- Accessible by conviction — WCAG 2.2 AA is the floor, light and dark modes both.

## 2. Colors

A full palette of two committed brand hues — a warm honey-amber and a cool counter-hue — held against a disciplined neutral surface, with each color carrying a defined semantic job rather than decorating.

### Primary
- **Honey-Amber** (`oklch(~0.78 0.14 80)` — *to be resolved during implementation*): The brand signature. Carries links, active navigation, text selection, focus accents, and emphasis. Warm, sun-cured, confident. Used deliberately and sparingly so its appearance always means something.

### Secondary
- **Cool Counter-Hue** (deep teal / ink-blue family, `~200–230°` — *to be resolved during implementation*): The amber's counterweight. Reserved for the cooler semantic register — informational admonitions, code accents, diagram strokes, and secondary interactive states. Its coolness lets the amber stay the warm protagonist.

### Neutral
- **Ink** (near-black, may carry a whisper of the brand hue at very low chroma — *to be resolved*): Body text. Must reach ≥7:1 against the reading surface. This is where most of the page lives.
- **Muted** (ink pulled toward the surface — *to be resolved*): Secondary text, captions, metadata. ≥4.5:1 minimum; never the elegant-but-illegible light gray.
- **Surface (light mode)**: Pure white, `oklch(1 0 0)`. No hidden warm tint. The warmth is in the amber and the type, not the paper.
- **Surface (dark mode)**: True near-black, low/zero chroma — *to be resolved*. The companion mode, equally first-class, not an afterthought.
- **Containers**: Surface pulled a step toward ink (light) or toward light (dark) for sidebars, code blocks, and callout fills.

### Named Rules
**The Sovereign Column Rule.** Color never enters the body reading column except as a link or an inline mark. Prose is ink on surface — full stop. All brand color lives in the chrome, the accents, and the semantic markers around the text.

**The Two-Job Rule.** Amber is warmth and emphasis; the cool hue is information and code. Neither crosses into the other's job. A full palette earns its richness through discipline, not abundance.

**The Splash Tint Exception.** One sanctioned place lets color appear without a semantic job: the icon chips on landing card grids may each carry a soft, low-chroma tint drawn from the wider semantic ramp (the muted ≈`L 0.95` orange / purple / green / red set, never the bright RGBY default). On a surface built from cards — a convention readers already understand — a touch of varied warmth distinguishes one card from the next where a single accent would let them blend together. It reads as a small, rare splash of color in the two-tone field: present enough to give the grid life, soft and infrequent enough never to disturb the discipline. This is a deliberate decoration on a marketing surface, not a loosening of the Two-Job Rule, which holds everywhere prose, chrome, and semantics live.

## 3. Typography

**Display Font:** **Spectral** (Production Type; OFL) — a screen-first editorial serif with sturdy serifs and moderate, even contrast. Carries headings with NYT-grade authority that stays crisp at size, without the hairline fragility of the reflex display serifs (Playfair / Cormorant / Fraunces). Fallback: `Georgia, serif`.
**Body Font:** **Atkinson Hyperlegible Next** (Braille Institute; OFL) — the accessible humanist sans that carries the reading column. Engineered for low vision with differentiated, unambiguous letterforms; the 2025 release adds 7 weights and a variable axis for a full hierarchy. This is the "accessible by conviction" principle made literal, in the lineage the *Readability Guidelines* and *Eleventy Excellent* argued for. Fallback: `system-ui, sans-serif`.
**Mono Font:** **JetBrains Mono** (OFL) — a legible, non-costume monospace for inline and block code; generous x-height, disambiguated `il1|`/`O0`. Fallback: `ui-monospace, monospace`.

**Character:** Pairing on a true contrast axis — Spectral's serif headings against Atkinson Hyperlegible Next's humanist sans reading column. Headings carry the editorial voice of the *New York Times*; the body carries the maximal screen legibility of MDN at the larger scale the *Readability Guidelines* argued for. The two never blur into one undifferentiated family. All three faces are OFL-licensed and self-hostable — a hard requirement for a distributed theme.

### Hierarchy
- **Display** (serif, generous `clamp()` topping out well below the shouting line, tight-but-not-cramped tracking, line-height ~1): Page titles and hero headings.
- **Headline** (serif, weighted): Major section headings within a doc.
- **Title** (serif or strong sans, to be tuned): Sub-section headings, card and aside titles.
- **Body** (humanist sans, **larger than the docs default** — generous size and line-height, capped at 65–75ch): The reading column. The single most important spec in the system.
- **Label** (sans, smaller, restrained tracking): Nav items, breadcrumbs, metadata, UI chrome. No all-caps body; caps reserved for short labels only.
- **Code** (mono): Inline and block code, set to sit comfortably beside the larger body without feeling shrunken.

### Named Rules
**The Generous Body Rule.** Body type is set larger and looser than documentation convention. When in doubt, bigger. The reader's comfort outranks fitting more above the fold.

**The 65–75ch Rule.** The reading measure is capped at 65–75 characters regardless of viewport width. A wide screen gets wider margins, never a wider line.

## 4. Elevation

Flat by default. Depth is conveyed through tonal layering — a container nudged a step off the surface — rather than drop shadows. Motion is responsive, not choreographed, so elevation appears as a quiet response to state (a hovered card, a focused input, a sticky header separating from the content) rather than as ambient decoration. Any shadow used is soft, low, and purposeful; never the dark-and-tight 2014-app shadow.

### Named Rules
**The Tonal-First Rule.** Reach for a tonal step before a shadow. Surfaces are distinguished by lightness, not by floating.

## 5. Components

*Omitted in seed mode — no components exist yet. The next `/impeccable document` run (scan mode) will capture the real Starlight component overrides: sidebar, page nav, table of contents, admonitions/asides, code blocks, search, and the doc header.*

## 6. Do's and Don'ts

### Do:
- **Do** keep the body reading column ink-on-surface, capped at 65–75ch, set generously larger than the docs default.
- **Do** let the honey-amber accent appear rarely and meaningfully (links, active state, selection, focus) — its rarity is the point.
- **Do** give the cool counter-hue a defined job (information, code) and keep it there.
- **Do** treat light and dark modes as equally first-class, both hitting WCAG 2.2 AA.
- **Do** use tonal layering for depth; pair serif headings against the humanist sans body on a real contrast axis.
- **Do** honor `prefers-reduced-motion` with a crossfade or instant fallback on every transition.

### Don't:
- **Don't** ship the hacker / terminal aesthetic — no monospace-everything, no green-on-black, no cyberpunk costume.
- **Don't** ship generic SaaS docs — the Mintlify / Docusaurus default of clean-white-plus-blue-primary with a forgettable sidebar.
- **Don't** carry warmth in the body background — no cream / sand / parchment surface. Warmth lives in the amber and the type.
- **Don't** use side-stripe accent borders (`border-left`/`border-right` > 1px) on asides, callouts, or cards — full borders, tonal fills, or icons instead.
- **Don't** use gradient text, decorative glassmorphism, or elegant-but-illegible light-gray body copy.
- **Don't** let color enter the prose reading column beyond links and inline marks.
- **Don't** shrink the body type to fit more on screen. The Generous Body Rule wins.
