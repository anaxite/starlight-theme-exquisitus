# AGENTS.md

This file provides guidance to agents such as Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Exquisitus** is an Astro Starlight documentation theme consumed by Starlight sites as a plugin.. The goal: the pinnacle of readability and beauty. It self-hosts three OFL typefaces, replaces Starlight's palette with a WCAG-AA OKLCH system (light + dark), and refines the core chrome.

Register: **brand** (people install it for how it looks). Brand words: confident, masterful, useful. Warmth is carried by typography and the honey-amber accent, never by a cream/sand body background.

## Design system

This theme uses [`impeccable`](https://impeccable.style/) for design. The brand and design system are specified in `DESIGN.md` and `PRODUCT.md`. The design is a work-in-progress.

## Commands

```bash
# Development (from repo root)
pnpm dev          # Start docs preview site (http://localhost:4321)
pnpm build        # Build docs site for production
pnpm preview      # Preview the built docs site

# Works in any package subdirectory too:
pnpm --filter docs dev
```

There is no test suite or linter yet. Node ≥22.12.0, pnpm ≥10 (managed via `mise.toml`).

## Architecture

```
starlight-theme-exquisitus/          # pnpm monorepo
├── packages/starlight-theme-exquisitus/  # The theme package (published to npm)
│   ├── index.ts                    # Plugin entrypoint: StarlightPlugin with config:setup hook
│   ├── libs/starlight.ts           # overrideComponents() — merges theme component overrides
│   ├── overrides/Hero.astro        # Drop-in Hero replacement (adds masthead rule motif)
│   └── styles/
│       ├── layers.css              # Cascade layer order: starlight, exquisitus
│       ├── fonts.css               # Self-hosted @fontsource imports (OFL: Spectral, Atkinson, JetBrains)
│       ├── tokens.css              # Full OKLCH design tokens (light + dark), mapped to --sl-* contract
│       ├── base.css                # Application chrome: header, sidebar, TOC, search, cards, asides, tabs, etc.
│       └── prose.css               # The reading column: headings, links, code, blockquotes, tables, etc.
└── docs/                           # Theme showcase / dogfooding site
    ├── astro.config.ts             # Starlight config consuming the theme via workspace:*
    └── src/content/docs/           # Showcase pages (splash, getting-started, typography, components, in-practice)
```

### Key architectural decisions

These decisions were influenced by, or come from, the design system. They may be subject to change.

**Cascade layers, not `!important`.** `layers.css` declares `@layer starlight, exquisitus;`. All theme CSS is authored in the `exquisitus` layer, so it wins over Starlight's defaults regardless of specificity — without a single `!important`.

**Starlight custom-property contract.** The theme doesn't invent its own token namespace for core colors. `tokens.css` maps the Exquisitus palette onto Starlight's `--sl-color-*` contract so Starlight's built-in components pick up the theme automatically. Only theme-specific tokens (the serif font stack, the cool counter-hue, the easing curve) use the `--sl-exquisitus-*` namespace.

**Component override gotcha.** Overriding a Starlight component (like `Hero.astro`) drops that component's **scoped** layout CSS. The hero grid/stack/copy structure had to be reproduced manually in `base.css`. Any new component override will need the same treatment. The `overrideComponents()` helper in `libs/starlight.ts` warns if the user already has their own override — user config always wins.

**Self-hosted fonts under pnpm.** `fonts.css` uses bare `@import` specifiers (e.g., `@import '@fontsource-variable/atkinson-hyperlegible-next/index.css'`). These resolve against the **theme package's own** `node_modules` (where the `@fontsource` deps are declared), which is what makes this work under pnpm's isolated store when consumed from another package. Do not change these to relative paths.

**Amber accent deepens in light mode.** The brand honey-amber at `oklch(0.78 0.14 80)` fails contrast on white. Light-mode links use a deepened **bronze** (`oklch(0.52 0.12 68)`) instead; dark-mode links use brightened honey (`oklch(0.84 0.115 82)`). This is the single counterintuitive color move — do not "fix" it.

**No cream/sand body background.** The light-mode surface is pure white `oklch(1 0 0)`. The dark-mode surface is near-black `oklch(0.17 0.006 80)`. Warmth lives in the ink, the amber accent, and the typography — never in the paper. Do not tint the body background warm.
