# `docs/` (showcase site)

Guidance for agents working in the docs workspace (`starlight-theme-exquisitus-docs`).

This site exists to **dogfood the theme** — it consumes `starlight-theme-exquisitus` via `workspace:*` and is deployed as the public demo.
Nothing here ships to npm; if a change belongs to every consumer, it goes in the package, not here.
For the monorepo picture and the design system see the [root `AGENTS.md`](../AGENTS.md); for package constraints see [`packages/starlight-theme-exquisitus/AGENTS.md`](../packages/starlight-theme-exquisitus/AGENTS.md).

## Commands

```bash
pnpm dev     # dev server at http://localhost:4321
pnpm build   # production build → dist/
pnpm lint    # rumdl check — CHECK ONLY, never writes
pnpm format  # rumdl fmt — rewrites Markdown/MDX
pnpm check   # astro check — type-checks this workspace only, not the theme package
```

## Content layout

`src/content/docs/` — everything is a page:

- `index.mdx` — the **splash** (specimen-plate hero, install strip, doorway cards, colophon).
  It uses raw HTML blocks (`.exquisitus-doorways`, `.exquisitus-colophon`, the `<exquisitus-specimen />` hero placeholder) whose CSS lives in the *package's* `base.css`, not here.
- `getting-started.mdx`, `customization.mdx`, `resources.mdx` — user docs.
  Document every new plugin option in `customization.mdx`.
- `404.md` — the not-found page; sidebar-less, so it shares the splash's centred canvas rules.
- `showcase/` — visual test surfaces (typography, feature-grid, components).
  When a theme change alters a component's look, these pages are where you verify it — screenshot light **and** dark.
  Add new theme features here so they stay dogfooded.

The sidebar is defined explicitly in `astro.config.ts` — a new page must be added there or it won't appear.

## Markdown conventions (rumdl)

Configured in `.rumdl.toml`, flavor `mdx`:

- **Sentence-per-line**: MD013 `reflow-mode = "sentence-per-line"` — `pnpm format` rewraps prose so each sentence sits on its own line, and `pnpm lint` fails if it isn't.
  Author that way to keep diffs clean.
- **Inline HTML is allowlisted** (MD033 `allowed-elements`): if a page needs a new raw HTML element, extend that list in `.rumdl.toml` or lint fails.
- **Prose length is not checked** (MD013 `paragraphs = false`): write the sentence the page needs, however long.
  Headings **are** still length-checked at 100 characters, and tables and code blocks are excluded.
  This is why MD013 stays enabled rather than being disabled outright — turning it off would also stop enforcing sentence-per-line, the convention the docs are authored in.
- **Hard tabs are flagged** (MD010) outside code blocks, and `pnpm format` converts them to four spaces.
  Inside an MDX JSX block that is inert, because MDX disables indented code blocks.
  Code fences keep their tabs (`code-blocks = false`), so a reformatted `<Aside>` can sit at four spaces while the fence inside it stays tab-indented.
  That is cosmetic.
- `docs/CLAUDE.md` is excluded: it is a one-line `@AGENTS.md` pointer with no level-one heading, not content.
