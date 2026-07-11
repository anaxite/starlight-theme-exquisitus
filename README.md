# Exquisitus

Monorepo for Exquisitus, w [Starlight](https://starlight.astro.build/) documentation theme.

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

Toolchain is pinned in `mise.toml` (Node 24, pnpm 11).

```bash
pnpm dev        # docs preview at http://localhost:4321
pnpm build      # production build of the docs site
pnpm preview    # serve the built docs site
```

The monorepo also contains the design intent, which lives in [`PRODUCT.md`](./PRODUCT.md) and [`DESIGN.md`](./DESIGN.md).
The files are generated using the _Impeccable_ agent skill.

## License

This theme, and accompanying files, are [MIT-licensed](./LICENSE).
Bundled typefaces are licensed separately under the [SIL Open Font License](https://openfontlicense.org/).
