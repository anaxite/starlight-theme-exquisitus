# Changelog

## 1.2.0

This release refines the theme's page layouts and reading geometry.
The biggest change is on docs pages with a sidebar, where the sidebar and ToC hug the prose on wide screens, unlike default Starlight where the sidebar sticks to the left window border. 

### Changed

- Increased the reading column to ~74 characters up from ~70 characters.
- Capped and centered docs pages.
  On very wide displays, docs pages are no longer stretched edge to edge with space between prose and sidebars.
  Page content is capped and centered with symmetric margins, so the document keeps a sane width no matter how big the
  window gets.
- Reworked the site header to match the centered pages.
- Refined the splash page layout to better compose prose, figures, and code blocks.
- Improved the root font size on high-resolution displays.

### Fixed

- Fixed stale info in AGENTS and DESIGN files.

## 1.1.1

### Changed

- Added a CSS token-based spacing scale, replacing a bunch of inconsistent spacing declarations

### Fixed

- Fixed a CSS rule that used an incorrect Expressive Code variable

## 1.1.0

This release changes theme typefaces.

I wanted a bit more personality to the theme: something that was great to read, regardless of current docs conventions.
Literata is a great typeface for long-form reading, and it pairs well with Alegreya Sans (which I happen to like).

Theme functionality is otherwise unchanged.

### Changed

- Change typefaces from Spectral+Atkinson Hyperlegible to Alegreya Sans+Literata.

## 1.0.4

### Fixed

- Reduce page end marks to a single jewel to avoid confusion with `<hr>` lines
- Strengthen prose link underline from 40% to 65%
- Make the mobile TOC opaque, consistent with the no-blur rule
- Make the specimen plate's paper swatch read by its edge
- Set the light page in a chroma-0 off-white, not pure white
- Paint the hero at rest instead of animating it in from invisible

## 1.0.3

### Fixed

- FeatureGrid: the lead layout's peer cards now size from card count
  instead of container width, fixing quarter-width peers with a blank
  row remainder on wide splash containers.

## 1.0.2

Documentation changes only.

## 1.0.1

### Fixed

- FeatureGrid: layouts now gate on the grid's own container width
  (`@container`) instead of the viewport, so a narrow content column
  no longer applies a layout it has no room for.
- FeatureGrid: long card titles no longer overflow narrow cells.
  Titles are now sized from the cell they land in, and card
  padding/spacing were tightened to fit.

## 1.0.0

First public release.
