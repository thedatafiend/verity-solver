---
title: Verity
page_title: Verity — Solver &amp; Guide · Salvation's Edge
nav_label: Verity
number: 4
kicker: Encounter 4
description: Interactive solver and guide for Verity, the fourth encounter of Destiny 2's Salvation's Edge raid.
intro: The shape puzzle. Three trapped, three outside — solve it in seconds below.
card:
  title: Verity
  blurb: The infamous shape puzzle. Includes our interactive solver — enter what you see, read out the answer.
  meta: Puzzle · Interactive solver ✦
footer: Runs entirely in your browser. Nothing is sent anywhere. Not affiliated with Bungie.
scripts:
- assets/solver.js
sections:
- type: include
  file: partials/verity-solver.html
- style: cheat
  tag: TL;DR
  heading: The whole encounter in nine lines
  blocks:
  - type: list
    style: ol
    items:
    - No boss, no DPS — <b>three full cycles</b> of the puzzle. Three players are teleported into solo rooms each cycle; three stay outside.
    - <b>Before you start:</b> everyone wears visually distinct armor and a unique Ghost shell. This matters more than your loadout.
    - 'Inside players read the three statues <b>left to right</b> and one of them calls the shapes: <i>"Circle, Square, Triangle."</i> Enter that (plus the outside statues) into the solver above.'
    - <b>Inside:</b> kill Knights, carry <b>one</b> 2D shape at a time, dunk each on the statue of the player whose statue holds that same shape. Send <b>both</b> of your wall shapes away — keeping one fails the hidden trade check.
    - '<b>Outside:</b> kill the wave (two <b>Unstoppable Ogres</b>), collect shapes from Knights, and run the solver''s dissect order: each swap is two dissects. <b>Start the moment the callout lands</b> — don''t wait for inside to finish (<a href="#optimal">why</a>).'
    - 'Mid-round the Witness kills the inside trio — <b>scripted</b>. Outside: dunk each Ghost at that player''s matching statue pedestal. Dead players call identities from spectate.'
    - 'Inside, once your two needed shapes have arrived: pick up <b>both at once</b> → 3D aura → <b>run through the glass wall</b>.'
    - All three out + wave cleared → the Witness kills <b>five of six</b>. The survivor dunks five Ghosts at the right pedestals, fast, guided by the dead.
    - Repeat ×3. Done.
- style: eff
  id: optimal
  tag: Optimal
  tag_style: eff
  heading: Two solves, run in parallel
  blocks:
  - type: hint
    html: There's no bounce trick here. The time is won by removing thinking, not by moving faster.
  - type: keyline
    html: |-
      <b>The inside and outside puzzles are independent — start them at the same time.</b> The instant the inside caller says
      the three shapes left-to-right, the outside team already knows every dissect it needs to make. Nothing about the outside
      solve depends on the inside trades finishing. Teams that wait for "inside done" before touching a statue are burning
      half the round for no reason.
    why: |-
      Punch the callout into the solver above, read the dissect order, and go — while the inside trio is still
      passing shapes.
  - type: heading
    html: 'Inside: one rule, zero decisions'
  - type: keyline
    html: |-
      <b>Your wall shows two shapes. Send each one to the room whose statue holds that shape.</b> That's the entire algorithm —
      no counting, no matching against what you need, no exceptions.
    why: |-
      You must ship out <i>both</i> wall shapes and receive one of each of your two needed shapes. Keeping a shape
      because "it's already correct" fails the hidden trade check even when your wall looks right.
  - type: list
    style: ul
    items:
    - <b>Kill your Knights before the callout lands.</b> Pickups sit on the floor and wait for you; a Knight you have to hunt after the call is dead time in every room simultaneously. Kill early, carry nothing yet.
    - <b>Carry one at a time, and never be holding one at the scripted death.</b> Dying with a shape spawns a seventh shape across three rooms and can soft-lock the round. If the Witness is about to take notice, dunk or drop first.
    - <b>Pick up your exit pair last.</b> Two at once gives you the 3D aura and locks your hands — do it only when your wall is confirmed correct, then run the glass.
  - type: heading
    html: 'Outside: caller, verifier, and a pre-built Ghost roster'
  - type: steps
    items:
    - act: <b>Fashion is the encounter.</b> Distinct armour <i>and</i> distinct Ghost shells, agreed before the flag goes down. This is the cheapest wipe in the raid to prevent and the most expensive to fix mid-round.
    - act: <b>Paste the roster in chat before you start:</b> statue position → name → class → shell colour, six lines. Under the Ghost timer nobody has spare attention to describe a Ghost shell out loud.
      res: 'Example: <i>"1 Ryan / Hunter / white · 2 Sam / Titan / red · …"</i>'
    - act: <b>One caller reads the solver, one verifier repeats each step back</b> before the dissect happens. Every dissect is two actions and a wrong one costs four to undo.
    - act: <b>Kill both Unstoppable Ogres before anyone picks up a shape or a Ghost.</b> Carriers can't fight, and an Ogre eating the Ghost runner is how the second half of the round dies.
    - act: <b>Pre-assign two statues per outside player for the Ghost phase.</b> Three carriers × two pedestals, decided in advance, beats three people converging on the same Ghost.
    - act: <b>Dead players drive from spectate.</b> They can see identities the living can't — the survivor's job is to run and repeat back, not to guess.
  - type: heading
    html: Where the round is actually lost
  - type: list
    style: ul
    items:
    - <b>Waiting.</b> Outside idling until inside finishes, inside idling until outside finishes. Neither is required.
    - <b>Hesitation on the final Ghost dunk</b> — five Ghosts on a short timer, one runner. Practise the pedestal order like a route, not a puzzle.
    - '<b>Running <span class="term">Varied Geometry</span>?</b> This is the one time you <i>don''t</i> parallelise: never deposit on the same statue twice in a row, so let the inside trades resolve first and then walk the dissects out in an order that naturally alternates statues. Slower by design — take the trade.'
- tag: Map
  tag_style: alt
  heading: The two rooms
  blocks:
  - type: map
    file: verity-rooms.svg
    legend:
    - color: '#f2913a'
      label: shape statues
    - color: '#b79bff'
      label: Ghost pedestals
    - color: '#6fe3a0'
      label: exit wall
    - color: '#ff7a7a'
      label: enemies
    caption: Original schematic. Each solo room is a shadow copy of the main room with three statues in the same L/M/R order.
- tag: Inside
  heading: Playing the solo room
  blocks:
  - type: list
    style: ol
    items:
    - <b>Read and call.</b> Find the statue wearing your armor; the shape it holds is yours. One inside player calls all three <b>left to right</b> — that single call powers the whole solve.
    - <b>The wall shows your two other shapes</b> — these are what your Knights drop, and both must be shipped out.
    - <b>Pass shapes:</b> kill a Knight, carry its shape (<b>one at a time</b>), and dunk it on the statue of the player whose statue holds that same shape. Out of Knights? Kill the Ogre — two more spawn.
    - <b>The trade rule:</b> you must send away both of your wall shapes and receive one of each of your two needed shapes from teammates. Keeping a shape "because it's already right" fails the check even when the wall looks correct.
    - <b>Drop shapes before the ghost phase.</b> Dying while holding one spawns an extra shape — seven shapes across three rooms can soft-lock the round.
    - <b>Escape:</b> when your two needed shapes are in, kill two Knights and pick up <b>both shapes at once</b> — you gain the 3D aura (the shape <em>not</em> containing your own) — then sprint through the glass wall.
- tag: Outside
  heading: Dissection & Ghost duty
  blocks:
  - type: list
    style: ol
    items:
    - <b>Survive first:</b> each wave brings two <b>Unstoppable Ogres</b> — stun and delete them before puzzle work.
    - <b>Collect components:</b> outside Knights drop 2D shapes; Ogre kills respawn Knights when you need more.
    - <b>Dissect:</b> carry a shape to a big statue whose 3D form <em>contains</em> it and use the <b>Dissect</b> prompt; do the same at a second statue and the two components <b>swap</b>. The solver above gives the optimal order — one caller runs it, a second player verifies each dunk before it happens.
    - <b>Ghost phase (mid-round):</b> when the Witness kills the inside trio, their Ghosts appear by the six Guardian statues. Dunk each Ghost at <b>that player's</b> pedestal — the dead can see identities from spectate and will guide you. Wrong dunks are punished, so listen first.
    - <b>End of round:</b> once all three escape and the wave is dead, the Witness kills five of six. The survivor collects and dunks five Ghosts at the right pedestals on a short timer — revived players join in as they stand up.
- tag: Wipes
  heading: Why teams die here
  blocks:
  - type: table
    columns:
    - Cause
    - Fix
    rows:
    - - Matching armor / identical Ghost shells
      - The most preventable wipe in the raid — everyone distinct before the flag goes down
    - - Holding a shape into the scripted kill → 7-shape soft-lock
      - Dunk or drop early; never sit on a pickup
    - - Keeping "your" wall shape instead of trading it
      - Both wall shapes go out, both needed shapes come in — no shortcuts
    - - Picking up two shapes too early inside
      - The aura locks your hands — collect the pair only when your wall is correct
    - - Bad dissect (wrong component or statue)
      - Caller announces each swap, verifier confirms, then dunk
    - - Ogres eating Ghost carriers
      - Champions die before anyone touches a Ghost
    - - Wrong Ghost-to-statue dunks
      - Dead players call it from spectate; carriers repeat back before dunking
- tag: Loadout
  heading: What to bring
  blocks:
  - type: list
    style: ul
    items:
    - <b>Unstoppable stun for every player</b> — the Ogres come in pairs, all encounter, on both assignments.
    - <b>Self-sufficient add-clear:</b> Sunshot/Witherhoard-style workhorses and wave frames; inside players solo two Knights + an Ogre repeatedly.
    - <b>Heavy for Ogres.</b> No DPS phase exists — survivability beats spike damage.
- tag: Credits
  tag_style: alt
  heading: Sources for this page
  blocks:
  - type: sources
    items:
    - <a href="https://gamerant.com/destiny-2-salvations-edge-verity-guide/" rel="noopener">GameRant — Verity guide</a>
    - <a href="https://www.destructoid.com/destiny-2-salvations-edge-fourth-encounter-raid-guide-verity/" rel="noopener">Destructoid — Verity guide</a>
    - <a href="https://www.shacknews.com/article/140025/salvations-edge-raid-guide-destiny-2" rel="noopener">Shacknews — Salvation's Edge raid guide</a>
    - <a href="https://mobalytics.gg/blog/destiny-2/salvations-edge-raid-guide/" rel="noopener">Mobalytics — raid guide</a>
    - <a href="https://www.charlieintel.com/destiny/destiny-2-salvations-edge-raid-walkthrough-how-to-finish-all-encounters-328473/" rel="noopener">CharlieINTEL — raid walkthrough</a>
    - <a href="https://grindout.com/destiny-2/guides/salvations-edge" rel="noopener">Grindout — Salvation's Edge guide</a>
    - <a href="https://playingclub.org/blog/editors-advice/complete-guide-to-conquering-verity-in-destiny-2s-salvations-edge" rel="noopener">Playing Club — conquering Verity</a> (Ghost-phase preparation)
    - <a href="https://www.sportskeeda.com/mmo/destiny-2-master-salvation-s-edge-fourth-encounter-challenge-guide-varied-geometry" rel="noopener">Sportskeeda — Varied Geometry challenge</a>
---
