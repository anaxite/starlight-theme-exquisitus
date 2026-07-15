# `starlight-theme-exquisitus` (package)

Guidance for agents working **inside the published theme package** of this monorepo.

For the monorepo as a whole—the **brand and design system** (`PRODUCT.md`, `DESIGN.md`, the `impeccable` skill), workspace commands, and toolchain—see the [root `AGENTS.md`](../../AGENTS.md). **Read `PRODUCT.md` and `DESIGN.md` before changing anything visual.**

This is `starlight-theme-exquisitus`, the npm-published Astro Starlight plugin. Everything in this directory ships to consumers (see the `files` array in `package.json`); the repo's `docs/` site only dogfoods it.

## Commands

```bash
pnpm lint    # biome format --write  — formats & lints the globs in biome.json
```

There is **no unit-test suite**. Verify changes visually: run the docs showcase from the repo root (`pnpm dev` → http://localhost:4321) and screenshot key pages in light and dark. Biome only touches the file globs listed in `biome.json` (the CSS in `styles/`, the `.astro` overrides, `components/FeatureGrid.astro`, and `libs/`) — not every file in the package.

## Architecture

`index.ts` is the `StarlightPlugin` entrypoint. Its `config:setup` hook does four things, in this order:

1. registers component overrides via `overrideComponents()` (`libs/starlight.ts`), which merges the theme's overrides and **warns when the user already overrides the same component** — user config always wins;
2. adds a tiny Astro integration that injects the client-side table-wrap script (`libs/table-wrap.ts`) — a progressive enhancement that restores table semantics for assistive tech (see that file for why it is not a Markdown-pipeline transform);
3. injects the five stylesheets **in dependency order** — `layers.css` must load first because it declares the cascade order everything else relies on, then `fonts`, `tokens`, `base`, `prose` — plus `end-mark.css` last, gated on the `endMark` option (default `true`);
4. extends the user's Expressive Code config with the theme's code-surface colors and mono font, preserving anything the user already set.

The plugin takes a `StarlightThemeExquisitusOptions` object; today its only field is `endMark` (default `true`), which gates the optional end-mark stylesheet.

```
index.ts                       # StarlightPlugin entrypoint — the config:setup hook above
libs/starlight.ts              # overrideComponents() — merge + user-collision warning
libs/table-wrap.ts             # client script: wraps content tables in an a11y scroll region
components/FeatureGrid.astro   # exported splash layout component (lead / alternating)
overrides/Hero.astro           # drop-in Hero replacement (sans masthead treatment)
styles/
  layers.css   # @layer starlight, exquisitus;  — the cascade order everything relies on; loads first
  fonts.css    # self-hosted @fontsource imports (Literata, Alegreya Sans, JetBrains Mono)
  tokens.css   # OKLCH palette mapped onto Starlight's --sl-* contract (light + dark)
  base.css     # application chrome: header, sidebar, TOC, search, cards, asides, tabs, hero, FeatureGrid layouts
  prose.css    # the reading column: headings, links, code, blockquotes, tables
  end-mark.css # optional editorial end mark (SVG-mask ::after on content pages); gated by the `endMark` option
```

## Engineering decisions an agent must respect

These are the non-obvious constraints. The *why* behind the visual choices lives in `DESIGN.md`'s Named Rules; the mechanics below are what break if you don't know them.

**Cascade layers, never `!important`.** `layers.css` declares `@layer starlight, exquisitus;`. All theme CSS is authored inside `@layer exquisitus`, so it wins over Starlight's defaults regardless of specificity without a single `!important`. The one sanctioned exception is the universal `prefers-reduced-motion` reset in `base.css` (a zero-specificity universal selector can't otherwise override per-element transitions). Don't add others.

**The Starlight custom-property contract.** The theme does not invent its own color namespace. `tokens.css` maps the Exquisitus palette onto Starlight's `--sl-color-*` contract so Starlight's built-in components inherit the theme automatically. Only theme-specific tokens (serif stack, cool counter-hue, easing curve, CTA fill) use the `--sl-exquisitus-*` namespace.

**Component-override CSS gotcha.** Overriding a Starlight component (e.g. `Hero.astro`) drops that component's **scoped** layout CSS. The hero structure had to be reproduced in `base.css` (`.hero`). Any new override needs the same treatment. Relatedly, `FeatureGrid.astro` keeps its layout CSS in `base.css` rather than a scoped `<style>` block **because slotted children carry no Astro scope hash** — child-targeting selectors (`> :first-child`, `> :nth-child()`) only match when authored globally. `overrideComponents()` warns if the user already overrides the same component; user config always wins.

**FeatureGrid's wrapper is load-bearing.** `FeatureGrid.astro` emits a `.exquisitus-feature-grid-container` around the grid, and the layouts are gated on `@container (min-width: 34rem)` against *that* wrapper — a viewport media query is the wrong question, because the 42rem content column hands the grid ~37rem no matter how wide the window is. The wrapper cannot be collapsed into the grid: **an element is never styled by its own container query**, so `grid-template-columns` on the grid would silently stop applying. Card titles are sized in `cqi` against each card (which is itself an inline-size container), so a title fits the cell it lands in rather than the window. Also note the cards must keep `margin-top: 0`: Starlight's markdown sibling spacing otherwise reaches them and offsets every card but the first inside its row.

**Self-hosted fonts under pnpm.** `fonts.css` uses bare `@import` specifiers (e.g. `@import '@fontsource-variable/literata/index.css'`). These resolve against the **theme package's own** `node_modules`, where the `@fontsource` deps are declared. This makes them work under pnpm's isolated store when consumed from another package. **Do not** rewrite these as relative paths.

**OKLCH is the source of truth.** All color is authored in OKLCH in `tokens.css`. Hex values in `.impeccable/design.json` are a clamped sRGB mirror for external tooling — never the canonical value. Don't "correct" a token by editing hex.

**Adding a component override or a new exported component.** Update the package `exports` map and the `files` array in `package.json`, register overrides in `index.ts`'s `overrideComponents([...])` call, and dogfood the result on a docs showcase page.
