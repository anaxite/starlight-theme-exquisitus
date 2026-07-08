# Exquisitus

A [Starlight](https://starlight.astro.build/) documentation theme built on the conviction that readability and beauty are the same discipline.

This is the monorepo. The published theme lives in
[`packages/starlight-theme-exquisitus`](./packages/starlight-theme-exquisitus) —
see its [README](./packages/starlight-theme-exquisitus/README.md) for
installation and usage.

<!-- TODO: add a hero screenshot (light + dark) of the showcase site here. -->

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
docs/                                  # showcase / dogfooding site
```

## Development

Toolchain is pinned in `mise.toml` (Node 24, pnpm 11).

```bash
pnpm dev        # docs preview at http://localhost:4321
pnpm build      # production build of the docs site
pnpm preview    # serve the built docs site
```

Design intent lives in [`PRODUCT.md`](./PRODUCT.md) and [`DESIGN.md`](./DESIGN.md);
contributor guidance is in [`AGENTS.md`](./AGENTS.md).

## License

[MIT](./LICENSE) © Anaxite. Bundled typefaces are licensed separately under the
[SIL Open Font License](https://openfontlicense.org/).
