# Changelog

## 1.0.4

### Fixed

- Reduce page end marks to a single jewel to avoid confusion with `<hr>` lines
- Strengthen prose link underline from 40% to 65%
- Make the mobile TOC opaque, consistent with the no-blur rule
- Make the specimen plate's paper swatch read by its edge
- Set the light page in a chroma-0 off-white, not pure white
- Paint the hero at rest instead of animating it in from invisible
- 
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
