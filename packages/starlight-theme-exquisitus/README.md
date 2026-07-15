# starlight-theme-exquisitus

Exquisitus is an Astro [Starlight](https://starlight.astro.build/) theme where readability and beauty are the same discipline.

This theme was built with LLM assistance.

## Features

- Self-hosted type: [Literata](https://fontsource.org/fonts/literata) for the reading column, [Alegreya Sans](https://fontsource.org/fonts/alegreya-sans) for headings and chrome, [JetBrains Mono](https://www.jetbrains.com/lp/mono/) for code, all bundled via `@fontsource`.
- A perceptually-uniform WCAG-AA OKLCH color system mapped onto Starlight's `--sl-color-*` contract, so built-in components inherit the theme automatically.
- Header, sidebar, TOC, search, cards, asides, and tabs restyled with a consistent depth and register language.
- [Expressive Code](https://expressive-code.com/) theming with a letterpress code panel, caption-above frames, and accessible (WCAG 1.4.1) diff markers.
- A serif `Hero` treatment (drop-in override) and an alternative front page layout.
- Editorial end marks on documentation pages.
- A design system generated with the _Impeccable_ agent skill system.

## Installation

1. In an existing Astro Starlight site, run this command:

```bash
pnpm add starlight-theme-exquisitus
# or: npm install
```

2. Add the plugin to your Starlight config:

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeExquisitus from 'starlight-theme-exquisitus';

export default defineConfig({
  integrations: [
    starlight({
      title: 'My Docs',
      plugins: [starlightThemeExquisitus()],
    }),
  ],
});
```

## Added components

### `FeatureGrid`

An editorial splash layout for Starlight `<Card>`s.
The first child carries the emphasis.

```astro
---
import { Card } from '@astrojs/starlight/components';
import FeatureGrid from 'starlight-theme-exquisitus/components/FeatureGrid.astro';
---

<FeatureGrid layout="lead">
  <Card title="…">This card leads the row.</Card>
  <Card title="…">A supporting point.</Card>
  <Card title="…">Another.</Card>
</FeatureGrid>
```

- `layout="lead"` (default): a full-width thesis card above a row of supporting peers.
- `layout="alternating"`: an editorial zigzag where the wider card flips side each row.

### `Hero`

The serif masthead treatment is applied automatically via a component override, no import needed.
If you already override `Hero` yourself, your override wins (the plugin warns on the collision).

## Configuration notes

- Expressive Code: the theme sets sensible defaults but merges over your existing `expressiveCode` config rather than replacing it. Set `expressiveCode: false` in your Starlight config to opt out entirely.
- All theme CSS lives in an `@layer exquisitus` that is declared after Starlight's, so it wins on order rather than specificity.

## License

This theme is [MIT-licensed](./LICENSE).
Bundled typefaces are licensed separately under the [SIL Open Font License](https://openfontlicense.org/).
