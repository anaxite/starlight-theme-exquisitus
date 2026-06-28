# starlight-theme-exquisitus

A [Starlight](https://starlight.astro.build/) documentation theme aiming for the pinnacle of readability and beauty.

Exquisitus self-hosts three OFL typefaces, replaces Starlight's palette with a WCAG-AA [OKLCH](https://oklch.com/) system (light + dark), and refines the core chrome — header, sidebar, table of contents, search, cards, asides, code blocks, and the reading column.

<!-- TODO: add a hero screenshot (light + dark) of the showcase site here. -->

## Features

- **Self-hosted type.** [Spectral](https://github.com/productiontype/Spectral) for prose, [Atkinson Hyperlegible Next](https://www.brailleinstitute.org/freefont/) for UI, [JetBrains Mono](https://www.jetbrains.com/lp/mono/) for code — bundled via `@fontsource`, no external requests.
- **WCAG-AA OKLCH palette.** A perceptually-uniform color system mapped onto Starlight's `--sl-color-*` contract, so built-in components inherit the theme automatically. Light and dark.
- **Refined chrome.** Header, sidebar, TOC, search, cards, asides, and tabs restyled with a consistent depth and register language.
- **Editorial code surface.** [Expressive Code](https://expressive-code.com/) theming with a letterpress code panel, caption-above frames, and accessible (WCAG 1.4.1) diff markers.
- **Splash components.** A serif `Hero` treatment (drop-in override) and an exported `FeatureGrid` layout.

## Installation

```bash
pnpm add starlight-theme-exquisitus
# or: npm install / yarn add
```

This is a Starlight plugin. It expects `@astrojs/starlight` and `astro` as peer dependencies (you already have them in a Starlight project).

## Usage

Add the plugin to your Starlight config:

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

That's it. The plugin registers its component overrides, injects its stylesheets in the correct cascade order, and extends your Expressive Code config with the theme's code-surface colors and mono font — preserving anything you've already set.

## Components

### `FeatureGrid`

An editorial splash layout for Starlight's `<Card>`s. The first child carries the emphasis.

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

- `layout="lead"` (default) — a full-width thesis card above a row of supporting peers.
- `layout="alternating"` — an editorial zigzag where the wider card flips side each row.

### `Hero`

The serif masthead treatment is applied automatically via a component override — no import needed. If you already override `Hero` yourself, your override wins (the plugin warns on the collision).

## Configuration notes

- **Expressive Code.** The theme sets sensible defaults but merges over your existing `expressiveCode` config rather than replacing it. Set `expressiveCode: false` in your Starlight config to opt out entirely.
- **Cascade layers, not `!important`.** All theme CSS lives in an `@layer exquisitus` that is declared after Starlight's, so it wins on order rather than specificity.

## Fonts & licensing

The theme is MIT-licensed. The bundled typefaces are licensed separately under the [SIL Open Font License](https://openfontlicense.org/): Spectral, Atkinson Hyperlegible Next, and JetBrains Mono. They are installed as `@fontsource` dependencies, each carrying its own license.

## License

[MIT](./LICENSE) © Anaxite
