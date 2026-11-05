# Exquisitus

[![CI](https://github.com/anaxite/starlight-theme-exquisitus/actions/workflows/ci.yml/badge.svg)](https://github.com/anaxite/starlight-theme-exquisitus/actions/workflows/ci.yml)

Monorepo for Exquisitus, a [Starlight](https://starlight.astro.build/) documentation theme.

## Quick start

```bash
pnpm add starlight-theme-exquisitus
```

```js
// astro.config.mjs
import starlightThemeExquisitus from 'starlight-theme-exquisitus';

starlight({
  title: 'My Docs',
  plugins: [starlightThemeExquisitus()],
});
```

## Repository layout

```
packages/starlight-theme-exquisitus/   # the published theme package
docs/                                  # showcase site
```

## Development

Toolchain is pinned in `mise.toml` (Node 24, pnpm 12).

```bash
pnpm dev        # docs preview at http://localhost:4321
pnpm build      # production build of the docs site
pnpm preview    # serve the built docs site
pnpm lint       # check-only: Biome for the theme package, rumdl for the docs
pnpm format     # apply both formatters
pnpm check      # type-check: astro check for the docs, tsc for the package
```

`lint` never writes. `format` is the only command that changes files, and it
runs Biome twice on purpose: Biome 2.6.5's Astro formatter does not converge in
one pass on multiline conditional expressions. The second pass is not a sign of
a broken check.

CI runs `lint`, `check` and `build` on every push to `main` and every pull
request, across Node 24 and 26. The badge covers those three; there is no test
suite, so it is not a test badge.

The monorepo also contains the design intent, which lives in [`PRODUCT.md`](./PRODUCT.md) and [`DESIGN.md`](./DESIGN.md).
The files are generated using the _Impeccable_ agent skill.

## License

This theme, and accompanying files, are [MIT-licensed](./LICENSE).
Bundled typefaces are licensed separately under the [SIL Open Font License](https://openfontlicense.org/).
