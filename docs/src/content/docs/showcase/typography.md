---
title: Typography
description: The reading column in Exquisitus — type choices, spacing, headings, and why each decision was made.
sidebar:
  order: 1
---

This page is the reading room. Everything below is plain Markdown, rendered exactly as your documentation will be. If it is comfortable to read here, it will be comfortable to read anywhere on your site.

Exquisitus sets body type in Atkinson Hyperlegible Next at roughly eighteen pixels, with a line height of 1.75 and a measure of seventy characters. These three numbers are not defaults — they are convictions. Seventeen pixels is the minimum the Readability Guidelines call comfortable for extended reading. Seventy characters is the width where the eye can return cleanly to the start of the next line without searching. 1.75 is the breathing room that lets ascenders and descenders live without crowding. Documentation read at length deserves the same consideration as long-form prose.

## Headings keep their place

Headings are set in Spectral, a screen-first serif designed by Production Type. The shift between a sans-serif body and a serif heading is not decoration — it is a navigational cue. When you scan a long document, the change of register tells you instantly that a new section has begun, without the heading needing to be large or loud about it.

The scale descends gradually, so a document with four heading levels never loses legibility at the deeper ones. Every heading also reserves space above itself — an anchor link never tucks the title under the sticky header.

### A third-level heading

Third-level headings carry the same Spectral, fractionally smaller. At this scale, letter-spacing tightens slightly — the optical correction that keeps display type from feeling loose when it shrinks toward body size. The heading hierarchy is tuned to feel right at every level, not just the largest ones.

#### A fourth-level heading

Four levels deep, the hierarchy is still legible. A document that requires more than four levels of heading should probably be split into separate pages, but the type handles it gracefully if it doesn't.

## Within the column

Colour is spent on exactly two things in the reading column: **links**, which carry the warm bronze accent in light mode and honey in dark, and `inline code`, which carries the cool petrol-teal. Everything else earns emphasis through weight and rhythm.

**Strong text** lifts toward the ink end of the neutral ramp. *Italic text* leans on Spectral's roman italic — warm, slightly condensed, unmistakable without being aggressive. The two are different enough to be useful in combination, so a function name and *its description* can share a sentence without blurring into each other.

Links are underlined by default, which is the oldest and most reliable affordance the web has for "this goes somewhere." The underline uses the accent colour at a lower opacity at rest and solidifies on hover — a quiet reward for attention that never clutters the resting page.

## Quotation

A pull-quote is set in Spectral italic, indented, with no side stripe. The change of typeface and the spacing carry the meaning without decoration.

> The goal of typography is not to be noticed. It is to put the reader inside the argument without friction — so completely that they finish a page without once thinking about the type.

Blockquotes work in the same register as the heading hierarchy: the serif marks editorial, not interface. A long quotation reads naturally here because Spectral italic is designed for extended reading, not just for headings.

## Lists hold their rhythm

An ordered list, for when sequence matters:

1. Install the plugin and register it in your Astro configuration.
2. Write your content in Markdown or MDX, as you normally would.
3. Read it back, and trust that what you see is what your readers will see.

An unordered list, for when it does not:

- Self-hosted, OFL-licensed typefaces — no third-party request, no flash of unstyled text.
- An OKLCH palette tuned for light and dark, both modes validated to WCAG 2.2 AA.
- A reading measure capped at seventy characters, regardless of viewport width.
- Accessible by conviction, not by afterthought.

## Tables stay quiet

Tables earn their structure from a single header rule and gentle alternating rows — no heavy grid, no boxed cells, no colour that competes with the text.

| Role       | Typeface                    | Where it appears                          |
| ---------- | --------------------------- | ----------------------------------------- |
| Body & UI  | Atkinson Hyperlegible Next  | Paragraphs, navigation, sidebar, search   |
| Headings   | Spectral                    | Titles, hero, card titles, aside headings |
| Code       | JetBrains Mono              | Inline code, code blocks, step counters   |

The header row is set in Spectral — every structural element in the page belongs to the same serif family, so a table doesn't feel like a foreign object dropped into the prose.

---

A horizontal rule is a short centred mark — an editorial pause, not a full-width divider. The page simply continues after it with the same ink and paper it started with.
