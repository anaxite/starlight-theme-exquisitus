# `starlight-theme-exquisitus` (monorepo)

Guidance for agents (Claude Code and others) working in this monorepo.

This file is monorepo-level. The published theme package has its own [`AGENTS.md`](packages/starlight-theme-exquisitus/AGENTS.md) for its specific constraints—**read that one before touching package code.**

## Project

**Exquisitus** is an Astro Starlight documentation theme, consumed by Starlight sites as a plugin. It is an attempt to merge readability and beauty. The theme self-hosts three OFL typefaces, replaces Starlight's palette with a WCAG-AA OKLCH system (light + dark), and refines the core chrome.

## Design system

This project uses [`impeccable` skills](https://impeccable.style/) for product register and design work. 

**The brand and the design system are described in other files:** [`PRODUCT.md`](PRODUCT.md) (who it's for, the design principles, the anti-references) and [`DESIGN.md`](DESIGN.md) (the normative tokens, the Named Rules, the Do's and Don'ts). `DESIGN.md` has a machine-readable token frontmatter and a sidecar at `.impeccable/design.json`; both are regenerated with `/impeccable document`.

Before changing anything visual (color, type, spacing, motion, or a component's look) read these files.

## Commands

```bash
pnpm dev        # docs preview site at http://localhost:4321 (alias: pnpm --filter docs dev)
pnpm build      # production build of the docs site
pnpm preview    # serve the built docs site
pnpm lint       # lint/format docs and package
pnpm deploy     # deploy the built docs site to Cloudflare Workers (wrangler.jsonc)
```

Any command also works from a package subdirectory. There is **no unit-test suite** — verify visually by running the docs site (e.g. screenshot key pages in light and dark). Formatting/linting is per-workspace: the theme package uses Biome (`pnpm --filter starlight-theme-exquisitus lint`), the docs site uses rumdl for Markdown (`pnpm --filter docs lint`). Toolchain is pinned in `mise.toml`: Node 24, pnpm 11 (the published theme package declares a Node ≥22.12.0 floor).

## Architecture

Two pnpm workspaces (`pnpm-workspace.yaml`):

```
packages/starlight-theme-exquisitus/   # the published theme package (npm: starlight-theme-exquisitus)
docs/                                   # showcase / dogfooding site; consumes the theme via workspace:*
    └── src/content/docs/               # splash + showcase pages
```

The theme is a Starlight **plugin**: its `config:setup` hook registers component overrides, injects five stylesheets in dependency order (plus an optional sixth, the end mark, on by default), and extends Expressive Code. `docs/` exists only to dogfood it — anything in `packages/starlight-theme-exquisitus/` ships to consumers, so changes there are user-facing.

The package's entrypoint, stylesheet cascade, and the non-obvious constraints that break if you don't know them (cascade layers over `!important`, the Starlight custom-property contract, the component-override CSS gotcha, self-hosted fonts under pnpm, OKLCH as source of truth, and the steps to add an override) live in [`packages/starlight-theme-exquisitus/AGENTS.md`](packages/starlight-theme-exquisitus/AGENTS.md). **Read it before editing package code.** The docs site's own conventions (rumdl, content layout) live in [`docs/AGENTS.md`](docs/AGENTS.md).

## Release & deploy
- **Docs deploy** (`.github/workflows/deploy-demo.yml`): Cloudflare Workers static assets from `docs/dist` (see `wrangler.jsonc`). Currently **manual only** (`workflow_dispatch`; the push-to-main trigger is commented out). Locally: `pnpm build && pnpm deploy`.
