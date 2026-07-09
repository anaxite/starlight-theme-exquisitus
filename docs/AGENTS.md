# `docs/` (showcase site)

Guidance for agents working in the docs workspace (`starlight-theme-exquisitus-docs`).

This site exists to **dogfood the theme** — it consumes `starlight-theme-exquisitus` via `workspace:*` and is deployed as the public demo.
Nothing here ships to npm; if a change belongs to every consumer, it goes in the package, not here.
For the monorepo picture and the design system see the [root `AGENTS.md`](../AGENTS.md); for package constraints see [`packages/starlight-theme-exquisitus/AGENTS.md`](../packages/starlight-theme-exquisitus/AGENTS.md).

## Commands

```bash
pnpm dev     # dev server at http://localhost:4321
pnpm build   # production build → dist/
pnpm lint    # rumdl fmt — formats Markdown/MDX (check-only: pnpm check:mdx)
```

## Content layout

`src/content/docs/` — everything is a page:

- `index.mdx` — the **splash** (specimen-plate hero, install strip, doorway cards, colophon).
  It uses raw HTML blocks (`.exquisitus-doorways`, `.exquisitus-colophon`, the `<exquisitus-specimen />` hero placeholder) whose CSS lives in the *package's* `base.css`, not here.
- `getting-started.mdx`, `customization.mdx` — user docs.
  Document every new plugin option in `customization.mdx`.
- `showcase/` — visual test surfaces (typography, feature-grid, components).
  When a theme change alters a component's look, these pages are where you verify it — screenshot light **and** dark.
  Add new theme features here so they stay dogfooded.

The sidebar is defined explicitly in `astro.config.ts` — a new page must be added there or it won't appear.

## Markdown conventions (rumdl)

Configured in `.rumdl.toml`, flavor `mdx`:

- **Sentence-per-line**: MD013 `reflow-mode = "sentence-per-line"` — `pnpm lint` will rewrap prose so each sentence sits on its own line.
  Author that way to keep diffs clean.
- **Inline HTML is allowlisted** (MD033 `allowed-elements`): if a page needs a new raw HTML element, extend that list in `.rumdl.toml` or lint fails.
- MD013 line-length warnings in tables/code are house-tolerated; don't contort content to silence them.
