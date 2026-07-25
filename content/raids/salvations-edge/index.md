---
layout: layouts/hub.njk
permalink: /index.html
is_hub: true
title: Salvation's Edge
page_title: Salvation's Edge — Raid Guide &amp; Verity Solver
kicker: Destiny 2 · The Final Shape
description: A complete, mobile-friendly guide to Destiny 2's Salvation's Edge raid — every encounter explained with original maps, plus an interactive Verity solver.
intro: A field guide to every encounter — cheat sheets first, detail when you need it, original maps throughout. Includes the interactive <a href="verity.html" style="color:var(--gold);font-weight:700;">Verity solver</a>.
footer: Community fan guide. Not affiliated with Bungie. Destiny 2 and Salvation's Edge are trademarks of Bungie, Inc.
sections:
- style: eff
  id: optimal
  tag: Optimal
  tag_style: eff
  heading: The three ideas that carry the whole raid
  blocks:
  - type: hint
    html: Every encounter page has an <b>Optimal</b> section with its specific line. These are the patterns underneath them.
  - type: keyline
    html: |-
      <b>1 · Fail the charge on purpose.</b> In <a href="substratum.html#optimal">Substratum</a>,
      <a href="herald.html#optimal">Dissipation</a> and <a href="repository.html#optimal">Repository</a>, bouncing the signal
      spawns Resonance and completing the circuit consumes it. Bounce a few times, then <b>deliberately drop the catch</b>.
      The circuit stays open, the Resonance stays on the ground, and you spawn one punishment miniboss at a moment you chose —
      buying a quiet window to stack to x3 in the right order before you go back and lock.
    why: This is the single most valuable habit in Salvation's Edge. Learn it in Substratum where it's cheapest.
  - type: keyline
    html: |-
      <b>2 · Read everything before anyone acts.</b> Conduit symbols, Verity's shape callout, the last hand destroyed at Zenith —
      every mechanic in this raid is cheap to execute and expensive to redo. One caller, one verifier, no bullets or footsteps
      until the read is agreed.
    why: Almost every "we ran out of time" in this raid is really "we did it twice."
  - type: keyline
    html: |-
      <b>3 · Batch your punishments.</b> Subjugators at <a href="zenith.html#optimal">Zenith</a> don't stack while one is alive,
      so simultaneous glyph breaks skip whole spawn sets. <a href="verity.html#optimal">Verity's</a> two puzzles are independent,
      so run them at the same time. Wherever the encounter lets you do several things on one count, do them on one count.
- tag: Raid
  heading: The basics
  blocks:
  - type: list
    style: ul
    items:
    - <b>Where:</b> The Pale Heart of the Traveler — climbing the Witness's monolith. Released June 7, 2024 with <i>The Final Shape</i> (ownership required).
    - <b>Fireteam:</b> 6 players. Every encounter builds on the central <span class="term">Resonance</span> mechanic and its three shapes — triangle, square, circle.
    - <b>Time budget:</b> experienced teams clear in roughly 2–4 hours; learning teams should plan 6–12 hours, often split across sessions. This is widely considered the most mechanically demanding raid in the game — communication is the real power level.
    - <b>Power:</b> the power system was reworked in 2025; be at or near the current seasonal caps and check in-game recommendations.
- tag: Loot
  heading: What drops where
  blocks:
  - type: hint
    html: All six legendary weapons are craftable via red-border (Deepsight) patterns.
  - type: table
    columns:
    - Weapon
    - Type
    - Drops from
    rows:
    - - <b>Euphony</b> (Exotic)
      - Strand Linear Fusion
      - Zenith (Witness) only — ~5% base, improved by raid triumphs + bad-luck protection
    - - Imminence
      - Strand SMG
      - Substratum · Dissipation · Verity
    - - Non-Denouement
      - Arc Bow
      - Substratum · Dissipation · Verity
    - - Nullify
      - Solar Pulse
      - Substratum · Repository
    - - Forthcoming Deviance
      - Void Glaive
      - Dissipation · Repository
    - - Summum Bonum
      - Arc Sword
      - Dissipation · Verity · Zenith
    - - Critical Anomaly
      - Stasis Sniper
      - Repository · Zenith
  - type: list
    style: ul
    items:
    - <b>Armor:</b> Promised Reign (Hunter), Promised Reunion (Titan), Promised Victory (Warlock) class sets, split across encounters.
    - <b>Spoils kiosk:</b> after the Witness dies, the final room's monument sells red-border weapons and armor for 20 Spoils of Conquest each.
    - <b>Secret chests</b> drop 5 Spoils plus a previously-acquired raid item.
- tag: Extras
  heading: Secret chests & the red-border puzzle
  blocks:
  - type: list
    style: ul
    items:
    - '<b>Chest 1</b> — near the end of the Monolith jumping puzzle (between Dissipation and Repository): at the amber-slab wall guarded by Dread, go right to the right-most amber cluster and <b>slide under the gap in the wall</b>; the chest is across that room.'
    - <b>Chest 2</b> — in the final climb before the Witness, in the area circling the <b>giant spiraling root</b> just before the boss arena.
    - <b>Bonus red-border chest:</b> a raid-long conductor puzzle keyed to the Resonance shapes shown in the raid's first room. Three hidden conductor rooms are active per run — charge each active conductor with its matching Resonance and a chest with a <b>guaranteed Deepsight raid weapon</b> appears after the Witness dies.
- tag: Weekly
  heading: Encounter challenges
  blocks:
  - type: table
    columns:
    - Encounter
    - Challenge
    - Rule
    rows:
    - - Substratum
      - <b>Scenic Route</b>
      - Kill only the Overload Minotaur on the longer alternate path — first team leaves theirs alive until the second team's is handled
    - - Dissipation
      - <b>At Capacity</b>
      - Every deposit must be exactly x3 — dunking at x1 or x2 fails it for the whole team
    - - Repository
      - <b>Balanced Diet</b>
      - Never pick up the same Resonance shape twice in a row
    - - Verity
      - <b>Varied Geometry</b>
      - Never deposit on the same statue twice in a row
    - - Zenith
      - <b>Coordinated Efforts</b>
      - All six players earn Glyphbreaker and break the Witness's chest glyphs near-simultaneously
  - type: hint
    html: Challenges rotate weekly; Master versions award Adept weapons.
    css: margin-top:8px;
- tag: Prep
  heading: Loadout notes
  blocks:
  - type: list
    style: ul
    items:
    - <b>Composition:</b> one healing/support super (Well of Radiance still earns its slot), one debuff (Divinity or Tractor Cannon), everyone else on burst DPS.
    - <b>Weapons:</b> strong add-clear everywhere — the whole raid throws Dread at you while you solve puzzles. Bring a long-range precision option (Substratum and Zenith mechanics) and swap-style rockets, heavy burst, or swords for boss phases. The Witness allows close-range play, so sword strategies are viable; Euphony itself is strong there once you have it.
    - <b>Champions</b> appear on Master — bring stuns to match the active mods.
    - Specific god rolls shift with the sandbox — treat this as archetype advice and check current community resources before a serious attempt.
- tag: Credits
  tag_style: alt
  heading: Sources & further reading
  blocks:
  - type: hint
    html: All maps and diagrams on this site are original artwork. Written guidance was researched and written in our own words from the community resources below — go read them, they're excellent.
  - type: sources
    items:
    - <a href="https://grindout.com/destiny-2/guides/salvations-edge" rel="noopener">Grindout — Salvation's Edge Guide</a>
    - <a href="https://www.destinypedia.com/Salvation%27s_Edge" rel="noopener">Destinypedia — Salvation's Edge</a>
    - <a href="https://www.shacknews.com/article/140025/salvations-edge-raid-guide-destiny-2" rel="noopener">Shacknews — Salvation's Edge raid guide</a>
    - <a href="https://www.blueberries.gg/weapons/salvations-edge-loot-table/" rel="noopener">Blueberries.gg — loot table</a> · <a href="https://www.blueberries.gg/leveling/salvations-edge-challenges/" rel="noopener">challenges</a> · <a href="https://www.blueberries.gg/leveling/salvations-edge-red-border-chest/" rel="noopener">red-border chest</a>
    - <a href="https://www.thegamer.com/destiny-2-final-shape-salvations-edge-raid-encounters-hidden-chests/" rel="noopener">TheGamer — encounters &amp; hidden chests</a>
    - <a href="https://gamerant.com/destiny-2-salvations-edge-all-secret-chest-locations-red-border-chest/" rel="noopener">GameRant — secret chest locations</a>
---
