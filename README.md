# Exquisitus

[![CI](https://github.com/anaxite/starlight-theme-exquisitus/actions/workflows/ci.yml/badge.svg)](https://github.com/anaxite/starlight-theme-exquisitus/actions/workflows/ci.yml)

This is the monorepo for Exquisitus, an [Astro Starlight](https://starlight.astro.build/) documentation theme.

## Quick start

Install the theme:

```bash
pnpm add starlight-theme-exquisitus
```

Add the plugin to `astro.config.mjs`:

```js
// astro.config.mjs
import starlightThemeExquisitus from 'starlight-theme-exquisitus';

starlight({
  title: 'My Docs',
  plugins: [starlightThemeExquisitus()],
});
```

## Repository layout

```text
packages/starlight-theme-exquisitus/   # published theme package
docs/                                  # showcase site
```

## Development

The recommended toolchain is pinned in `mise.toml` (Node 24, pnpm 12).

```bash
pnpm dev        # docs preview at http://localhost:4321
pnpm build      # production build of the docs site
pnpm preview    # serve the built docs site
pnpm lint       # read-only check of the theme package and docs (Biome, rumdl)
pnpm format     # apply Biome and rumdl findings
pnpm check      # type-check: astro check for the docs, tsc for the package
```

## Design

The monorepo also contains a design intent, which lives in [`PRODUCT.md`](./PRODUCT.md) and [`DESIGN.md`](./DESIGN.md).
The files are generated using the _Impeccable_ agent skill.
If you want to know more, see [impeccable.style](https://impeccable.style/) (it's pretty cool).

## License

This theme, and accompanying files, are [MIT-licensed](./LICENSE).
Bundled typefaces are licensed separately under the [SIL Open Font License](https://openfontlicense.org/).
