# AGENTS.md

Guidance for agents (Claude Code and others) working in this repository. `CLAUDE.md` imports this file.

## Project

**Exquisitus** is an Astro Starlight documentation theme, consumed by Starlight sites as a plugin. The goal: the pinnacle of readability and beauty. It self-hosts three OFL typefaces, replaces Starlight's palette with a WCAG-AA OKLCH system (light + dark), and refines the core chrome.

The register is **brand** — people install it for how it looks.

**The brand and the design system are not described here.** Before changing anything visual — colour, type, spacing, motion, or a component's look — read [`PRODUCT.md`](PRODUCT.md) (who it's for, the design principles, the anti-references) and [`DESIGN.md`](DESIGN.md) (the normative tokens, the Named Rules, the Do's and Don'ts). `DESIGN.md` has a machine-readable token frontmatter and a sidecar at `.impeccable/design.json`; both are regenerated with `/impeccable document`, so edit the design intent there, not by hand in the sidecar. Design work in this repo uses the [`impeccable`](https://impeccable.style/) skill.

## Commands

```bash
pnpm dev        # docs preview site at http://localhost:4321 (alias: pnpm --filter docs dev)
pnpm build      # production build of the docs site
pnpm preview    # serve the built docs site
```

Any command also works from a package subdirectory. There is **no test suite or linter** — verify visually by running the docs site (e.g. screenshot key pages in light and dark). Toolchain is pinned in `mise.toml`: Node 24, pnpm 11 (the published theme package declares a Node ≥22.12.0 floor).

## Architecture

```
starlight-theme-exquisitus/                  # pnpm monorepo (packages/* + docs)
├── packages/starlight-theme-exquisitus/     # the published theme package
│   ├── index.ts                  # StarlightPlugin entrypoint — the config:setup hook
│   ├── libs/starlight.ts         # overrideComponents() — merges component overrides, warns on user collisions
│   ├── components/FeatureGrid.astro  # exported splash layout component (lead / alternating)
│   ├── overrides/Hero.astro      # drop-in Hero replacement (serif masthead treatment)
│   └── styles/
│       ├── layers.css            # @layer starlight, exquisitus;  — the cascade order everything relies on
│       ├── fonts.css             # self-hosted @fontsource imports (Spectral, Atkinson, JetBrains Mono)
│       ├── tokens.css            # OKLCH palette mapped onto Starlight's --sl-* contract (light + dark)
│       ├── base.css              # application chrome: header, sidebar, TOC, search, cards, asides, tabs, hero, FeatureGrid layouts
│       └── prose.css             # the reading column: headings, links, code, blockquotes, tables
└── docs/                         # showcase / dogfooding site that consumes the theme via workspace:*
    └── src/content/docs/         # splash + showcase pages
```

The plugin's `config:setup` hook (`index.ts`) does three things: registers component overrides via `overrideComponents()`, injects the five stylesheets **in dependency order** (`layers` must load first — it declares the cascade order), and extends the user's Expressive Code config with the theme's code-surface colours and mono font while preserving anything the user already set.

## Engineering decisions an agent must respect

These are the non-obvious constraints. The *why* behind the visual choices lives in `DESIGN.md`'s Named Rules; the mechanics below are what break if you don't know them.

**Cascade layers, never `!important`.** `layers.css` declares `@layer starlight, exquisitus;`. All theme CSS is authored inside `@layer exquisitus`, so it wins over Starlight's defaults regardless of specificity — without a single `!important`. The one sanctioned exception is the universal `prefers-reduced-motion` reset in `base.css` (a zero-specificity universal selector can't otherwise override per-element transitions). Don't add others.

**The Starlight custom-property contract.** The theme does not invent its own colour namespace. `tokens.css` maps the Exquisitus palette onto Starlight's `--sl-color-*` contract so Starlight's built-in components inherit the theme automatically. Only genuinely theme-specific tokens (the serif stack, the cool counter-hue, the easing curve, the CTA fill) use the `--sl-exquisitus-*` namespace.

**Component-override CSS gotcha.** Overriding a Starlight component (e.g. `Hero.astro`) drops that component's **scoped** layout CSS. The hero structure had to be reproduced in `base.css` (`.hero`). Any new override needs the same treatment. Relatedly, `FeatureGrid.astro` keeps its layout CSS in `base.css` rather than a scoped `<style>` block **because slotted children carry no Astro scope hash** — child-targeting selectors (`> :first-child`, `> :nth-child()`) only match when authored globally. `overrideComponents()` warns if the user already overrides the same component; user config always wins.

**Self-hosted fonts under pnpm.** `fonts.css` uses bare `@import` specifiers (e.g. `@import '@fontsource-variable/atkinson-hyperlegible-next/index.css'`). These resolve against the **theme package's own** `node_modules`, where the `@fontsource` deps are declared — which is what makes them work under pnpm's isolated store when consumed from another package. **Do not** rewrite these as relative paths.

**OKLCH is the source of truth.** All colour is authored in OKLCH in `tokens.css`. The hex values in `.impeccable/design.json` are a clamped sRGB mirror for external tooling — never the canonical value. Don't "correct" a token by editing hex.

**Adding a component override or a new exported component.** Update the package `exports` map and the `files` array in `packages/starlight-theme-exquisitus/package.json`, register overrides in `index.ts`'s `overrideComponents([...])` call, and dogfood the result on a docs showcase page.
