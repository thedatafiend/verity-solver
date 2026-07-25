# Salvation's Edge — Raid Guide & Verity Solver

A complete, mobile-friendly guide to Destiny 2's *Salvation's Edge* raid — every
encounter explained with original maps, plus an interactive solver for the
**Verity** encounter. Open it on a phone or a second monitor while you raid.

The published site is fully static: no runtime dependencies, no network calls,
everything runs in your browser.

## Editing content

Guide text lives in structured content files, not HTML — you can fix a callout
or add a strategy without touching any code:

- `content/raids/salvations-edge/encounters/*.md` — one file per encounter
- `content/raids/salvations-edge/maps/*.svg` — one file per diagram
- `content/raids/salvations-edge/index.md` — the raid hub page

See **[docs/content-model.md](docs/content-model.md)** for the schema and
examples. Adding an encounter is adding one file; navigation, the hub grid, and
prev/next links update themselves.

## Developing

```
npm install
npm start        # dev server with live reload at http://localhost:8080
npm run build    # writes the static site to _site/
```

The site is built with [Eleventy](https://www.11ty.dev/). Templates are in
`_includes/`, static assets (CSS and the solver script) in `assets/`. Pushes to
`main` deploy automatically to GitHub Pages via `.github/workflows/pages.yml`.

## The Verity solver

On the Verity page (`verity.html`):

1. **Inside — Solo-room shapes:** the three trapped players call out the 2D shape on their statue (Circle / Square / Triangle). Enter them Left → Middle → Right.
2. **Outside — Statue shapes:** the outside team reads the 3D shape on each big statue and enters it (Sphere / Cube / Pyramid / Cone / Cylinder / Prism).
3. Hit **Solve**. You get:
   - **Inside plan** — the exact 3D shape each solo player must build, and who they pass to.
   - **Outside plan** — the minimum-length dissect-and-dunk order, step by step, with the resulting shapes after every swap.

Use **Load example** to see a worked case (the classic 3-swap "rotation").

### The rules it encodes

- **2D shapes:** Circle, Square, Triangle.
- **3D shapes** are a pair of 2D shapes:

  | 3D shape | = 2D + 2D |
  |----------|-----------|
  | Sphere   | Circle + Circle |
  | Cube     | Square + Square |
  | Pyramid  | Triangle + Triangle |
  | Cone     | Circle + Triangle |
  | Cylinder | Circle + Square |
  | Prism    | Square + Triangle |

- **Inside rule:** each solo player must build the 3D shape made of the two shapes that are **not** their own. In practice everyone sends their own shape to the other two players, so each ends up holding the other two players' shapes.
- **Outside rule:** each statue must end holding a 3D shape that does **not** contain its own inside shape (i.e. the two *other* players' shapes). You change a statue by dissecting one 2D component off it and dunking it on another statue; two dissections at once is a component **swap** between two statues.

### How the outside solver works

The outside state is three statues, each holding an unordered pair of 2D components. A dissect-and-dunk is modeled as swapping one component between two statues (this conserves the total pool of 2D shapes). The solver runs a **breadth-first search** over swap sequences, so it always returns the fewest swaps — and it handles the 2-swap and 3-swap "rotation" cases automatically.

If the outside statues hold a set of shapes that can't be rearranged into the target (their total 2D pool differs), the tool flags it so you can re-check your inputs rather than chasing an impossible solve.

---

Community fan guide. All maps and diagrams are original artwork. Not affiliated with Bungie — Destiny 2 and Salvation's Edge are trademarks of Bungie, Inc.
