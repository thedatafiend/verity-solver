---
title: Repository
page_title: Repository — Guide · Salvation's Edge
nav_label: Repository
number: 3
kicker: Encounter 3
description: Guide to Repository, the third encounter of Destiny 2's Salvation's Edge raid — three floors of plates, conduits, and Tormentors, with original wiring maps.
intro: Three floors, same loop, twistier wiring every time. No boss — just execution.
card:
  title: Repository
  blurb: A running battle through three rooms of statues, resonance, and Subjugators.
  meta: Puzzle · Movement
footer: Original maps & text. Not affiliated with Bungie.
sections:
- style: cheat
  tag: TL;DR
  heading: The whole encounter in eight lines
  blocks:
  - type: list
    style: ol
    items:
    - Three duos — <b>Left, Middle, Right</b>. Each owns its plate pair, Tormentor, and conduit.
    - Dunk the free Resonance at the central chest → timer starts, <b>three Tormentors</b> spawn (one per conduit).
    - Kill your Tormentor — designated player takes the <b>final blow</b> for <span class="term">Stolen Favor</span> (only they can read the conduit's shape). Kill the <b>Scorpius turrets</b> that follow.
    - Bounce energy between your plates; each catch spawns that side's Resonance. After four passes, <b>let the charge fail on purpose</b>, kill the punish major, then build to <b>x3 — never four</b> in peace.
    - 'Favor holders call each conduit''s shape: <i>"Left needs square…"</i>'
    - 'Route to whatever side spawns your needed shape (wiring crosses on floors 2–3!) — use a <b>fixed clockwise rotation</b> rather than improvising, then lock: <b>shoot the Crux, stand the conductor plate</b> as the charge arrives. See <a href="#optimal">the optimal line</a>.'
    - All three locked → chest returns → everyone dunks (extends the timer) → kill the wave + <b>Unstoppable Incendior</b> → door opens.
    - Climb and repeat — three floors total.
- style: eff
  id: optimal
  tag: Optimal
  tag_style: eff
  heading: Failed charge + a fixed rotation
  blocks:
  - type: hint
    html: Two habits turn this encounter from a scramble into a checklist.
  - type: keyline
    html: |-
      <b>1 · Fail the charge on purpose.</b> After your Tormentor dies, pass the signal <b>four times — two catches per plate</b> —
      then let it fail. A major spawns near your conductor; kill it, and every Resonance pickup you need is sitting on the floor
      with nothing shooting at you.
    why: |-
      Identical to Substratum and Dissipation. You are buying a quiet collection window for the price of one
      miniboss you spawn deliberately, at a moment you chose.
  - type: keyline
    html: |-
      <b>2 · Rotate, don't negotiate.</b> Each side only ever produces its own shape — Left makes triangles, Middle circles,
      Right squares. So agree the movement <i>before</i> the callouts: <b>each conductor player collects for the wing on their left,
      then rotates clockwise</b>. Three people move once along a known path instead of six people improvising a swap under a clock.
    why: |-
      The wiring already scrambles plate → conduit on floors 2 and 3. Don't add a second layer of improvisation
      on top of it. Fix the human movement, and the only variable left is the shape callout.
  - type: heading
    html: The line, in order
  - type: steps
    items:
    - act: <b>One test bounce, every floor, before anything else.</b> Confirm which conduit your plates actually feed. Ten seconds here beats a wrong lock and a re-run.
      res: Floor 1 straight · Floor 2 L/M crossed · Floor 3 rotated — but verify, don't trust.
    - act: <b>Assign the Tormentor final blow out loud</b> before the dunk that spawns them. Stolen Favor going to the wrong player costs you the whole read.
    - act: <b>Kill the Tormentor, then the Scorpius turrets, then bounce.</b> Turrets do not stop chipping and they will break a chain you started early — clear them first, always.
    - act: <b>Four passes, then fail.</b> Kill the punish major. The floor is now safe and covered in shapes.
    - act: <b>Call all three conduits at once, then execute the rotation.</b> Favor holders read together — <i>"L square, M triangle, R circle"</i> — and everyone walks their pre-agreed path.
      res: One call, one move. Nobody asks "who needs what?" mid-run.
    - act: <b>Lock all three, then mass-dunk.</b> Crux → conductor plate as the charge lands. Deposit full stacks from all six, every cycle.
    - act: <b>Pre-assign the Unstoppable.</b> The Incendior at the door is the last thing between you and the next floor — a named stunner and a named burst mean it dies on arrival, not after a discussion.
  - type: heading
    html: Small things that add up
  - type: list
    style: ul
    items:
    - <b>Fixed duos across all three floors.</b> The rotation only becomes automatic if the same three conductor players walk the same relative path each time.
    - <b>Long-range gun in every duo.</b> Scorpius turrets sit in alcoves you can't reach; the sender is the natural person to delete them between passes.
    - <b>Fight floor-2 Tormentors away from the ledges.</b> A slam death mid-chain costs the whole cycle, not just the player.
    - <b>Running <span class="term">Balanced Diet</span>?</b> Never the same shape twice in a row, per player. The rotation makes this trivial to track — say your last shape out loud when you pick up, and your partner catches the repeat before it happens.
- tag: Map
  tag_style: alt
  heading: Room layout & the wiring twist
  blocks:
  - type: map
    file: repository-room.svg
    legend:
    - color: '#b79bff'
      label: conduits + Crux
    - color: '#6fe3a0'
      label: plate pairs
    - color: '#f2913a'
      label: chest & door
    - color: '#9c5a20'
      label: wiring
    caption: 'Original schematic of the shared room footprint. The trap is that the plate→conduit wiring changes per floor:'
  - type: map
    file: repository-wiring.svg
    caption: Plate→conduit wiring per floor. Floor 1 is honest; floors 2 and 3 reroute the charge.
- tag: Mechanics
  heading: What everything does
  blocks:
  - type: heading
    html: All three shapes now
  - type: text
    html: 'Repository introduces the full set: <span class="term">Pyramidal</span> (triangle, Left plates), <span class="term">Spherical</span> (circle, Middle), and <span class="term">Hexahedron</span> (square, Right). Bounces spawn the shape of the plate side that produced them. Cap x3; a fourth pickup or an expired buff kills you.'
  - type: heading
    html: Tormentors & Stolen Favor
  - type: text
    html: Three <span class="term">Threshold Sentinels</span> spawn on the opening dunk, one per conduit. Killing yours unlocks your plates — and whoever lands the <b>final blow</b> gains <span class="term">Stolen Favor</span>, the only way to read the shape your conduit demands. Assign the final blow; don't leave it to chance. Scorpius turrets spawn as the Tormentors die — kill them immediately, at range.
  - type: heading
    html: The bounce & the punishment
  - type: text
    html: 'Same rhythm as Substratum: send, catch after the energy arrives, repeat. A mistimed step, a doubled plate, or an unmanned receiver breaks the chain, despawns loose Resonance, and spawns a <b>Subjugator</b> on your side that must die before you can retry.'
  - type: heading
    html: Locking a conduit
  - type: text
    html: 'Holding the matching Resonance, <b>shoot the conduit''s Crux</b> — it starts rippling — then <b>stand on its conductor plate</b> as the charge enters. Because of the wiring, the shape you need may spawn on someone else''s side: coordinate one last bounce, then swap sides so every conduit has a matching holder.'
  - type: heading
    html: The clock
  - type: text
    html: <span class="term">The Final Shape looms</span> runs the whole floor; deposits at the reappeared chest extend it. Dunk full stacks every cycle, then clear the back wave and its <b>Unstoppable Incendior</b> to open the door.
- tag: Roles
  heading: Three duos
  blocks:
  - type: roles
    items:
    - who: Conductor player
      html: Takes the Tormentor <b>final blow</b> → Stolen Favor → reads and calls the conduit shape → routes to the matching Resonance → performs the lock (Crux, then plate).
    - who: Plate partner
      html: Anchors the bounce chain, farms stacks, shoots Scorpius on sight, and holds the side while the conductor player travels.
    - who: Everyone
      html: x3 before the mass dunk, help burn the Incendior, and re-learn the wiring on every floor before committing.
- tag: Flow
  heading: One floor (of three)
  blocks:
  - type: steps
    items:
    - act: Assign L/M/R duos and note this floor's wiring (see diagram).
    - act: Dunk the free Resonance — timer starts, three Tormentors spawn.
    - act: Kill your Tormentor (conductor player takes the last hit → <b>Stolen Favor</b>). On floor 2, fight it away from the ledges. Kill the turrets that follow.
    - act: Bounce four times, then <b>fail the charge deliberately</b> and kill the major it spawns. Now everyone collects to <b>x3</b> with no add pressure.
      res: See <a href="#optimal">the optimal line</a>.
    - act: 'Favor holders call all three conduit shapes. Plan the swap: <i>"one more bounce, then I''m coming Right for square."</i>'
    - act: 'Lock all three: Crux → conductor plate as the charge lands.'
      res: '"Locked" ×3'
    - act: Chest returns — mass deposit, then kill the back wave + <b>Unstoppable Incendior</b>. Door opens; climb.
- tag: Wipes
  heading: Why teams die here
  blocks:
  - type: table
    columns:
    - Cause
    - Fix
    rows:
    - - <i>Accidental</i> mistimed bounce → Subjugator + broken chain
      - Verbal send/return rhythm; never abandon a live chain to fight adds. A <i>planned</i> fail after four passes is the intended line
    - - Scorpius chip damage everywhere
      - One long-range weapon per duo; turrets die the second they appear
    - - Tormentor slam off a floor-2 ledge
      - Fight on open ground facing away from edges; burst it at range
    - - Wrong-shape lock attempts
      - Fixed conductor players, clean final-blow assignment, instant callouts
    - - Assuming floor-1 wiring upstairs
      - One test bounce per floor before anyone commits to a lock
    - - Timer starvation
      - Full x3 deposits from all six, every cycle
    - - Champion alive at the door
      - Pre-assigned Unstoppable stun + burst — it dies before celebration starts
- tag: Loadout
  heading: What to bring
  blocks:
  - type: list
    style: ul
    items:
    - <b>Add-clear with reach:</b> wave frames and incandescent primaries for the Dread, plus a scout/pulse/sniper that can delete Scorpius turrets across the room.
    - <b>Unstoppable answer</b> in every duo — an Incendior ends every floor.
    - <b>Tormentor burst:</b> precision heavy or a one-off super to collapse them before they close.
    - <b>Stay mobile:</b> nothing that wants you standing still — this whole encounter is timing and movement.
- tag: Credits
  tag_style: alt
  heading: Sources for this page
  blocks:
  - type: sources
    items:
    - <a href="https://gamerant.com/destiny-2-salvations-edge-repository-guide/" rel="noopener">GameRant — Repository guide</a>
    - <a href="https://www.destructoid.com/destiny-2-salvations-edge-third-encounter-raid-guide-repository/" rel="noopener">Destructoid — Repository guide</a> (wiring documented by u/chrlmain, r/RaidSecrets)
    - <a href="https://www.shacknews.com/article/140025/salvations-edge-raid-guide-destiny-2" rel="noopener">Shacknews — Salvation's Edge raid guide</a>
    - <a href="https://mobalytics.gg/blog/destiny-2/salvations-edge-raid-guide/" rel="noopener">Mobalytics — raid guide</a>
    - <a href="https://www.pcgamesn.com/destiny-2/salvations-edge-guide" rel="noopener">PCGamesN — Salvation's Edge guide</a>
    - <a href="https://grindout.com/destiny-2/guides/salvations-edge" rel="noopener">Grindout — Salvation's Edge guide</a>
    - <a href="https://www.thegamer.com/destiny-2-final-shape-salvations-edge-raid-encounters-hidden-chests/" rel="noopener">TheGamer — complete raid guide</a> (failed-charge strategy)
    - <a href="https://boosting-ground.com/Destiny2/guides/raid-guides/salvations-edge-guide" rel="noopener">Boosting Ground — encounter guide</a> (conductor rotation)
---
