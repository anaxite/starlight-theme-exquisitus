---
title: Typography
description: "The reading column in Exquisitus: type choices, spacing, headings, and why each decision was made."
sidebar:
  order: 1
---

This page is the reading room.
Everything below is plain Markdown, rendered exactly as your documentation will be.
If it is comfortable to read here, it will be comfortable to read anywhere on your site.

Exquisitus sets body type in Literata at roughly eighteen pixels, with a line height of 1.75 and a measure of seventy characters.
Seventeen pixels is the minimum the Readability Guidelines call comfortable for extended reading.
Seventy characters is the width where the eye can return cleanly to the start of the next line without searching. 1.75 is the breathing room that lets ascenders and descenders live without crowding.
I want documentation read at length to receive the same consideration as long-form prose.

## Headings keep their place

Headings are set in Alegreya Sans, a humanist sans built for the wayfinding register.
The shift between a serif body and a sans heading is a navigational cue.
When you scan a long document, the change of register tells you instantly that a new section has begun, without the heading needing to be large or loud about it.

The scale descends gradually, so a document with four heading levels never loses legibility at the deeper ones.
Every heading also reserves space above itself, so an anchor link never tucks the title under the sticky header.

### A third-level heading

Third-level headings carry the same Alegreya Sans, fractionally smaller.
At this scale, letter-spacing tightens slightly.
This optical correction keeps display type from feeling loose as it shrinks toward body size.
The heading hierarchy is tuned to feel right at every level, including the deepest.

#### A fourth-level heading

Four levels deep, the hierarchy is still legible.
A document that requires more than four levels of heading should probably be split into separate pages, but the type handles it gracefully if it doesn't.

## Within the column

Color is spent on exactly two things in the reading column: [links](#), which carry the warm bronze accent in light mode and honey in dark, and `inline code`, which carries the cool petrol-teal.
Everything else earns emphasis through weight and rhythm.

**Strong text** lifts toward the ink end of the neutral ramp.
*Italic text* leans on Literata's italic: warm, slightly condensed, unmistakable without being aggressive.
The two are different enough to be useful in combination, so a function name and its description can share a sentence without blurring into each other.

Links are underlined by default, which is the oldest and most reliable affordance the web has for "this goes somewhere."
The underline uses the accent color at a lower opacity at rest and solidifies on hover, so it answers attention without cluttering the page at rest.

## Quotation

A pull-quote is set in Literata italic, indented, with no side stripe.
The change of typeface and the spacing carry the meaning without decoration.

> The goal of typography is not to be noticed.
> It is to put the reader inside the argument without friction, so completely that they finish a page without once thinking about the type.

Blockquotes stay in the reading voice, not the wayfinding register: the pull-quote keeps the body serif's italic, where a heading would switch out to the sans.
A long quotation reads naturally here because Literata italic is a text serif's italic, designed for extended reading rather than display.

## Lists hold their rhythm

An ordered list, for when sequence matters:

1. Install the plugin and register it in your Astro configuration.
2. Write your content in Markdown or MDX, as you normally would.
3. Read it back, and trust that what you see is what your readers will see.

An unordered list, for when it does not:

- Self-hosted, OFL-licensed typefaces—no third-party request, nor flash of unstyled text.
- An OKLCH palette tuned for light and dark, both modes validated to WCAG 2.2 AA.
- A reading measure capped at seventy characters, regardless of viewport width.
- Accessibility built in from the start.

## Tables stay quiet

Tables earn their structure from a single header rule and gentle alternating rows without heavy grids, boxed cells, nor color that competes with the text.

| Role              | Typeface       | Where it appears                                                       |
| ----------------- | -------------- | ------------------------------------------------------------------------ |
| Reading column     | Literata       | Paragraphs, blockquotes, prose                                          |
| Headings & chrome | Alegreya Sans  | Titles, hero, card titles, aside headings, navigation, sidebar, search   |
| Code               | JetBrains Mono | Inline code, code blocks, step counters                                 |

The header row is set in Alegreya Sans; every structural and wayfinding element in the page belongs to the same sans family, so a table doesn't feel like a foreign object dropped into the prose.

---

A horizontal rule is a short centred mark.
It's an editorial pause, not a full-width divider.
The page simply continues after it with the same ink and paper it started with.
