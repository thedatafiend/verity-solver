# Verity Solver

A fast, user-friendly solver for the **Verity** encounter in Destiny 2's *Salvation's Edge* raid.

It's a single, self-contained `index.html` — no build step, no dependencies, no network calls. Open it on a phone or a second monitor while you raid, punch in what your team sees, and read out the callouts.

## Use it

Open `index.html` in any browser, or host it for free on GitHub Pages:

1. Push this repo to GitHub.
2. **Settings → Pages → Build from branch**, pick your branch and `/ (root)`.
3. Open the published URL on your phone.

## How to drive it

1. **Inside — Solo-room shapes:** the three trapped players call out the 2D shape on their statue (Circle / Square / Triangle). Enter them Left → Middle → Right.
2. **Outside — Statue shapes:** the outside team reads the 3D shape on each big statue and enters it (Sphere / Cube / Pyramid / Cone / Cylinder / Prism).
3. Hit **Solve**. You get:
   - **Inside plan** — the exact 3D shape each solo player must build, and who they pass to.
   - **Outside plan** — the minimum-length dissect-and-dunk order, step by step, with the resulting shapes after every swap.

Use **Load example** to see a worked case (the classic 3-swap "rotation").

## The rules it encodes

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

## How the outside solver works

The outside state is three statues, each holding an unordered pair of 2D components. A dissect-and-dunk is modeled as swapping one component between two statues (this conserves the total pool of 2D shapes). The solver runs a **breadth-first search** over swap sequences, so it always returns the fewest swaps — and it handles the 2-swap and 3-swap "rotation" cases automatically.

If the outside statues hold a set of shapes that can't be rearranged into the target (their total 2D pool differs), the tool flags it so you can re-check your inputs rather than chasing an impossible solve.

---

Runs entirely in your browser. Not affiliated with Bungie.
