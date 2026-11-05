# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Technical writers and content publishers. These are people who write software documentation, technical guides, or long-form creative content and believe that **a clear and legible reading environment is priority one**, without sacrificing beauty and grace. They care about their readers. They see documentation as a craft, not a chore. They will install this theme specifically because of how it makes reading feel, and how that reflects on their work.

Secondary: Developers who maintain OSS or product documentation and want their docs to signal the same quality as their code.

## Product Purpose

An Astro Starlight theme where readability and beauty are the same discipline.

Exquisitus is built on a simple conviction: that excellent documentation requires both rigorous legibility and aesthetic ambition, and that these are not competing goals. It proves the case by example. Every page is a demonstration that craft and clarity are the same thing at different scales.

Success looks like: a reader who doesn't notice the design because they're too busy reading, but who would feel its absence immediately.

## Positioning

Reading quality first. Most Starlight themes re-skin the palette and the chrome; Exquisitus changes the reading itself. It ships an editorial typography system built for sustained reading: book-grade text faces, body type set larger than documentation convention, a fixed reading measure, and type that grows with the display instead of the line getting longer.

The WCAG 2.2 AA color system in light and dark supports this claim; it is not a separate selling point.

## Operating Context

- **Discovery:** writers find the theme on Starlight's themes listing or on npm, then judge it on the live demo site.
- **Adoption:** `pnpm add starlight-theme-exquisitus`, then one line in `astro.config.mjs` (`plugins: [starlightThemeExquisitus()]`). No further setup is required.
- **Daily use:** the theme sits under the consumer's own Markdown/MDX content, their own components and their own `customCss`. Readers of those sites arrive in light or dark mode on any device.
- **Dogfooding:** the `docs/` workspace is the demo site and consumes the package via `workspace:*`; it is deployed to Cloudflare Workers.

## Capabilities and Constraints

- A Starlight **plugin**: it registers component overrides (`Hero`), injects its stylesheets through `customCss`, and extends Expressive Code. Peer dependency `@astrojs/starlight >=0.42.0`; Node `>=22.12.0`.
- One option: `endMark` (default `true`), the editorial end mark closing each content page.
- Exported components: `FeatureGrid` and `SpecimenPlate`.
- Self-hosts three OFL typefaces (Literata, Alegreya Sans, JetBrains Mono); no third-party font requests.
- Wraps content tables in a scroll container on the client for accessibility.
- Everything in `packages/starlight-theme-exquisitus/` ships to consumers, so changes there are user-facing. The theme must keep Starlight's custom-property contract and leave consumers' own content and CSS working.

## Brand Commitments

- **Name:** Exquisitus. **Line:** "An Astro Starlight theme where readability and beauty are the same discipline."
- **Voice:** confident, masterful, useful. A senior colleague who explains something well — no hedging, no decoration, but clearly someone who cares. Think: the pleasure of reading MDN documentation on a page that looks as considered as the New York Times.
- **Licensing:** the theme is MIT-licensed; bundled typefaces are under the SIL Open Font License. Author: Anaxite.

## Evidence on Hand

- **Live demo site:** <https://starlight-theme-exquisitus.aka-300.workers.dev/>, with showcase pages for typography, components and `FeatureGrid` (`docs/src/content/docs/showcase/`).
- **npm:** published as `starlight-theme-exquisitus`.
- **Starlight listing:** the theme appears on Starlight's themes listing.
- **Absent:** no known third-party adopters yet. Future work must not invent any of these.

## Product Principles

1. **Content is sovereign** — every design decision is in service of the reader. If an element doesn't serve comprehension or orientation, remove it.

2. **Legibility IS beauty** — the two are not in tension; this theme proves it. Contrast, spacing, and type scale are aesthetic tools, not accessibility checklists.

3. **The reader's comfort outranks density** — when fitting more on screen competes with reading comfort, comfort wins. DESIGN.md's Generous Body Rule carries the visual consequences.

4. **Care made visible** — the subtle things signal craft: consistent rhythm, precise spacing, type that breathes, colors that don't fight the content. These are noticed subconsciously and felt immediately.

5. **Accessible by conviction** — WCAG compliance is the floor, not the ceiling. Inclusivity strengthens the aesthetic; it never weakens it. Reduced motion, readable type, high contrast — first-class.

## Accessibility & Inclusion

- WCAG 2.2 AA minimum across all surfaces
- Extra inclusivity where it meets the vision: reduced motion support, care for color-blind and low-vision readers, semantic HTML
- Larger default type scale (principle #3) is itself an accessibility choice
- Color contrast treated as a design constraint, not a compliance afterthought
