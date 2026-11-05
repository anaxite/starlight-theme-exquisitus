# `starlight-theme-exquisitus` (monorepo)

Guidance for agents (Claude Code and others) working in this monorepo.

This file is monorepo-level. The published theme package has its own [`AGENTS.md`](packages/starlight-theme-exquisitus/AGENTS.md) for its specific constraints—**read that one before touching package code.**

## Project

**Exquisitus** is an Astro Starlight documentation theme, consumed by Starlight sites as a plugin. It is built on the conviction that readability and beauty are the same discipline. The theme self-hosts three OFL typefaces, replaces Starlight's palette with a WCAG-AA OKLCH system (light + dark), and refines the core chrome.

## Design system

This project uses [`impeccable` skills](https://impeccable.style/) for product register and design work. 

**The brand and the design system are described in other files:** [`PRODUCT.md`](PRODUCT.md) (who it's for, the design principles, the anti-references) and [`DESIGN.md`](DESIGN.md) (the normative tokens, the Named Rules, the Do's and Don'ts). `DESIGN.md` has a machine-readable token frontmatter and a sidecar at `.impeccable/design.json`; both are regenerated with `/impeccable document`.

Before changing anything visual (color, type, spacing, motion, or a component's look) read these files.

## Top-level commands

```bash
pnpm dev        # `docs/` theme demo preview site at http://localhost:4321
pnpm build      # production build of the demo site
pnpm preview    # serve the built demo site
pnpm lint       # CHECK ONLY, never writes: *biome* for the theme package, *rumdl* for demo docs
pnpm format     # the writer: applies both formatters
pnpm check      # type-check: *astro check* for docs, *tsc --noEmit* for the theme package
pnpm deploy     # deploy a built demo site to Cloudflare Workers (wrangler.jsonc)
```

**`lint` and `format` are separate on purpose.** `lint` is the gate and must stay read-only, because CI runs it against the checkout. `format` is the only command that writes. If you reach for `pnpm lint` expecting it to fix things, you want `pnpm format`.

Biome warnings are fatal (`--error-on-warnings`): `biome check` exits 0 on warnings by default, and most of its rules are warn-level, so without the flag dead code passes the gate.

There is **no unit-test suite** — verify visually by running the docs site (e.g. screenshot key pages in light and dark). The gate is `pnpm lint`, `pnpm check` and `pnpm build`; CI runs those three on every push to `main` and every pull request, across Node 24 and 26. Toolchain is pinned in `mise.toml`: Node 24, pnpm 12 (the published theme package declares a Node ≥22.12.0 floor).

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

- **CI** (`.github/workflows/ci.yml`): `pnpm lint`, `pnpm check`, `pnpm build` on every push to `main` and every pull request, matrixed over Node 24 and 26. Read-only — no secrets, artifacts or deploy. It is not a required branch-protection check, so direct pushes to `main` still work; the gate reports after the fact.
- **NPM registry publish** (`.github/workflows/publish.yml`): fires when a GitHub **release is published**. The release tag name becomes the package version (`pnpm version $TAG_NAME` but stripping the leading v—it is *not* read from `package.json`); a prerelease publishes under the `next` dist-tag, a full release under `latest`. Publishing is OIDC-based (no npm token in the repo) via the `publish` environment.
- **Docs deploy** (`.github/workflows/deploy-demo.yml`): Cloudflare Workers static assets from `docs/dist` (see `wrangler.jsonc`). Currently **manual only** (`workflow_dispatch`; the push-to-main trigger is commented out). Locally: `pnpm build && pnpm deploy`.
