# Content model

Every page on the site is generated from a content file — you edit YAML/Markdown,
never HTML pages. The templates in `_includes/` turn the content into the site's
look; the two never need to change together.

```
content/
  raids/
    salvations-edge/
      salvations-edge.json      # raid-wide settings (slug, display name)
      index.md                  # the raid hub page
      encounters/
        substratum.md           # one file per encounter = one page
        herald.md
        ...
      maps/
        substratum-rooms.svg    # one file per diagram, inlined at build time
        ...
assets/                         # CSS + solver JS, copied through untouched
_includes/                      # templates (layout & rendering) — code, not content
```

Adding an encounter = adding one `.md` file. The top navigation, the hub page's
encounter grid, and the previous/next footer links are all generated from the
files that exist and their `number` field — nothing else to update.

## Page frontmatter

Every encounter file starts with metadata:

```yaml
---
title: Substratum                  # the page's H1
page_title: Substratum — Guide · Salvation's Edge   # browser tab title
nav_label: Substratum              # short label used in the top nav + pagenav
number: 1                          # encounter order; drives nav and prev/next
kicker: Encounter 1                # small line above the H1
description: …                     # meta description for search engines
intro: …                           # the paragraph under the H1
card:                              # how this encounter appears on the hub page
  title: Substratum
  blurb: The opening circuit puzzle — …
  meta: Puzzle · Add-clear heavy
footer: Original maps & text. Not affiliated with Bungie.
sections:
  - …                              # the cards, in page order (see below)
---
```

The hub page (`index.md`) is the same minus `number`/`nav_label`/`card`, plus
`is_hub: true`.

Text values may contain inline HTML (`<b>`, `<i>`, `<a>`,
`<span class="term">…</span>` for game terms). Plain text is fine too.

## Sections (cards)

Each entry in `sections` renders one card:

```yaml
- style: cheat            # optional: 'cheat' (TL;DR) or 'eff' (Optimal); omit for default
  id: optimal             # optional anchor, linkable as #optimal
  tag: TL;DR              # the small chip in the heading
  tag_style: eff          # optional chip variant: 'eff' (orange) or 'alt' (purple)
  heading: The whole encounter in eight lines
  blocks:                 # the card's contents, in order
    - …
```

## Block types

| type | fields | renders as |
|------|--------|------------|
| `text` | `html` | a paragraph |
| `hint` | `html`, optional `css` | a muted hint paragraph |
| `heading` | `html` | an `<h3>` sub-heading |
| `list` | `style` (`ul`/`ol`), `items` | a bullet or numbered list |
| `steps` | `items` of `{act, res?}` | numbered step list; `act` is the action, `res` the expected result/callout |
| `keyline` | `html`, optional `why` | a highlighted strategy point with an optional "why it works" footnote |
| `table` | `columns`, `rows` | a data table (e.g. cause → fix) |
| `roles` | `items` of `{who, html}` | the role-assignment grid |
| `map` | `file`, optional `legend`, optional `caption` | a diagram: the SVG from `maps/`, a color legend, a caption |
| `sources` | `items` | the credits/source list |
| `html` | `html` | raw HTML escape hatch — avoid unless nothing else fits |
| `include` | `file` | inserts a template partial (used for the interactive Verity solver app) |

Examples of the less obvious ones:

```yaml
- type: steps
  items:
    - act: <b>Bounce four, then fail.</b> Two catches per plate, then step off.
      res: '"Dropping it — killing the punish."'

- type: keyline
  html: <b>Fail the charge on purpose.</b> Bounce the signal until …
  why: This buys a quiet collection window for the price of one miniboss.

- type: table
  columns: [Cause, Fix]
  rows:
    - [Timer starvation, Full x3 deposits from all six every cycle]

- type: map
  file: substratum-rooms.svg
  legend:
    - { color: '#f2913a', label: 'center: chest & hazards' }
    - { color: '#6fe3a0', label: floor plates }
  caption: Original schematic. Eight rooms ring the central chamber.
```

## Maps

Diagrams are standalone SVG files in `content/raids/<raid>/maps/`. They are
inlined into the page at build time, so they can use the site's fonts and need
no extra requests. Edit them in any SVG-capable tool or by hand; reference them
from a `map` block by filename.

## Adding a whole raid (future)

The layout is `content/raids/<slug>/` precisely so a second raid can live
alongside the first. To add one: create the directory, a `<slug>.json` with
`raid` and `raid_name`, an `index.md` hub, and `encounters/`. The only decision
to make at that point is URL layout — today Salvation's Edge owns the site root
(`/substratum.html`); a second raid should claim a prefix (`/<slug>/…`) by
changing the `permalink` in its `encounters.11tydata.json`.

## Building locally

```
npm install
npm start        # dev server with live reload at http://localhost:8080
npm run build    # writes the static site to _site/
```

Deploys happen automatically from `main` via GitHub Actions
(`.github/workflows/pages.yml`), which runs the same `npm run build`.
