---
title: Zenith — The Witness
page_title: Zenith — The Witness — Guide · Salvation's Edge
nav_label: Zenith
number: 5
kicker: Encounter 5 · Finale
description: Guide to Zenith, the final encounter of Destiny 2's Salvation's Edge raid — hands, glyphs, the Test, and the Witness damage phase, with an original map.
intro: Read the bracelets, pass the Tests, break six glyphs, and ride the platform up to end it.
card:
  title: Zenith — The Witness
  blurb: The finale. Pass the tests, cleave the hands, and put the Witness down.
  meta: Final boss · Coordination
footer: Original maps & text. Not affiliated with Bungie.
sections:
- style: cheat
  tag: TL;DR
  heading: The whole fight in nine lines
  blocks:
  - type: list
    style: ol
    items:
    - Two <b>runners</b> (one per side), four on add-clear. Subjugators are the only real enemy pressure. <b>Once you know the fight, run three runners</b> and break three glyphs at once — see <a href="#optimal">the optimal line</a>.
    - 'Giant hands attack each side. One hand per side wears a colored <b>bracelet</b>: <b>yellow = circle</b>, <b>red = square</b>, <b>green = triangle</b>.'
    - 'Runner stands in the <b>matching attack''s AoE</b> to soak that Resonance: circle = "bees" (arm up), square = sweeping <b>beam</b> (arm sideways), triangle = floor <b>pulses</b> (arm from above).'
    - Shoot the bracelet → hand dies → you're a <span class="term">Glyphbreaker</span>. <b>Call which shape you broke</b> — it sets the next Test.
    - Stand in the central <b>well of Light</b> and shoot the matching glyph on the Witness's chest — the well also cleanses accumulated Resonance from everyone standing in it. Each break spawns Subjugators, and none spawn while one is alive, so <b>syncing breaks skips whole sets</b>.
    - '<i>"The Witness tests you"</i>: 14 nodes spawn mid. <b>Shoot away the excess</b> so the rest form the last-broken shape. Wrong shape = wipe.'
    - Six glyphs down → the platform <b>rises</b> — empowered DPS on the chest crit.
    - 'During DPS: <b>shift sides</b> for the alternating sweeps, <b>jump</b> the shockwave (sound cue), and <b>get off before the platform drops</b>.'
    - 'Final stand at low health: a very short, all-out burn. Bank supers and heavy.'
- style: eff
  id: optimal
  tag: Optimal
  tag_style: eff
  heading: Three runners, batched breaks
  blocks:
  - type: hint
    html: Learn the fight with two runners. Then upgrade to this — it halves the number of glyph rounds.
  - type: keyline
    html: |-
      <b>Run three Glyphbreakers and break three glyphs at once.</b> Subjugators won't spawn a new set while one is still up,
      so simultaneous breaks skip entire spawn waves — and six glyphs become <b>two rounds instead of three or six</b>.
      Wait until all three runners hold Glyphbreaker before anyone shoots the chest.
    why: |-
      Every extra glyph round is another Test, another Subjugator set, and another minute of the encounter where
      nothing is being damaged. Batching the breaks removes both the adds and the round.
  - type: heading
    html: Split the runners by attack type
  - type: list
    style: ul
    items:
    - <b>Runner A</b> — the hand from <b>above</b> (floor pulses → <span class="term">Pyramidal</span> / triangle)
    - <b>Runner B</b> — the hand from the <b>floor</b> (bees → <span class="term">Spherical</span> / circle)
    - <b>Runner C</b> — the <b>horizontal</b> hand (sweeping beam → <span class="term">Hexahedron</span> / square)
  - type: text
    html: |-
      Fixed assignments mean nobody has to identify a bracelet under pressure — you look for your attack, soak it, shoot your
      bracelet. Rotate runner and add-clear duties <b>between rounds</b>, once all three already hold Glyphbreaker, so the
      handover never happens mid-mechanic.
  - type: keyline
    html: |-
      <b>Name who kills their hand last.</b> The Test answers to the <i>last hand destroyed</i>, not the last glyph broken —
      so with three runners working at once, the order matters. Two runners hold their bracelet shot; the designated last
      breaker kills, calls their shape, and that's the Test answer with no ambiguity.
    why: |-
      "Which one was last?" is the single most common cause of a Test wipe, and it only exists because nobody
      decided in advance.
  - type: heading
    html: The line, in order
  - type: steps
    items:
    - act: <b>All three runners get Glyphbreaker before anyone shoots the chest.</b> Soak, break bracelet, call your shape, hold position.
      res: '"A up · B up · C breaking last — triangle."'
    - act: <b>Break from inside the well, together.</b> Standing in the pool of Light also cleanses accumulated Resonance from everyone in it — so the runners converge, break on a count, and get clean at the same time.
      res: 'Count it: "three, two, one, break."'
    - act: '<b>The Test: one shooter, everyone else silent.</b> The caller states the shape from the last hand destroyed, the shooter clears the excess nodes, nobody else fires. Wrong shape wipes the raid, and stray bullets — not bad reads — are what usually cause it.'
    - act: <b>Second round, same script</b> → six glyphs → platform rises.
    - act: <b>Damage:</b> shift to the opposite half after each sweep, jump the slam on its audio cue, and <b>step off the moment the Witness draws back</b>. Greed on the platform is a free death and a lost revive.
    - act: <b>Bank for final stand.</b> Target the kill in about three phases and arrive at the last window with heavy and supers — that window is short and unforgiving.
  - type: heading
    html: Small things that add up
  - type: list
    style: ul
    items:
    - <b>Machine guns for Subjugators</b> double as respectable filler DPS — the four non-runners should never be idle.
    - <b>Call every bracelet break, every time</b>, even when you think everyone saw it. The Test is the only mechanic here that kills all six.
    - <b>Running <span class="term">Coordinated Efforts</span>?</b> All six need Glyphbreaker and near-simultaneous chest breaks — the three-runner rhythm is already most of the way there; you're just extending the same "everyone up, then break on a count" discipline to the full team.
- tag: Map
  tag_style: alt
  heading: Arena layout
  blocks:
  - type: map
    file: zenith-arena.svg
    legend:
    - color: '#f2913a'
      label: Witness, well & DPS platform
    - color: '#b79bff'
      label: hands (bracelets)
    - color: '#6fe3a0'
      label: Test node grid
    - color: '#ff7a7a'
      label: Subjugator spawns
    caption: Original schematic. Mirror-symmetric V-shaped arena; each runner works a half, everyone converges mid for Tests and DPS.
- tag: Mechanics
  heading: The color–shape–attack table
  blocks:
  - type: table
    columns:
    - Bracelet
    - Shape
    - Resonance
    - Matching attack — stand in it
    rows:
    - - <b>Yellow</b>
      - Circle
      - Spherical
      - '"Bees" — arm points up, releases tracking projectiles'
    - - <b>Red</b>
      - Square
      - Hexahedron
      - Beam — arm from the wall sweeps a laser
    - - <b>Green</b>
      - Triangle
      - Pyramidal
      - Pulses — arm from above rings the floor
  - type: heading
    html: Glyphbreaker loop
  - type: text
    html: 'Soak the matching attack until the Resonance lands, then <b>shoot the bracelet</b>: the hand dies and you gain <span class="term">Glyphbreaker</span>. Only Glyphbreakers can damage the <b>six chest glyphs</b> — stand in the central <b>well of Light</b> and shoot the glyph matching your broken hand''s symbol. Each break spawns Subjugators on both sides (two alive max); breaking both sides'' glyphs simultaneously skips a spawn set.'
  - type: heading
    html: The Test
  - type: text
    html: '<i>"The Witness tests you"</i> — a grid of <b>14 Resonance nodes</b> appears front-center. Shoot away the excess nodes so what remains forms the shape of the <b>most recently destroyed hand</b>. Beam → square, bees → circle, pulses → triangle. The wrong final shape wipes the raid, so: one caller, everyone else trigger-discipline until the pattern is agreed.'
  - type: heading
    html: Damage phase
  - type: text
    html: 'All six glyphs broken → the well empowers the team and the central platform <b>rises to the Witness</b> — unload on the glowing chest crit. Two attacks to respect while shooting: sweeping hand AoEs that bisect the platform and <b>alternate halves</b> (hit lands one side → next hits the other → keep shifting), and a <b>shockwave slam with an audio cue — jump it</b>. When the Witness draws back and straightens, the phase is over: <b>get off before the platform drops</b> or die to the fall.'
  - type: heading
    html: Final stand
  - type: text
    html: At low health the Witness briefly goes immune, then reopens the crit for a very short, accelerated window. Miss it and the team wipes — arrive with supers and heavy in the tank. Aim to kill within about three damage phases.
- tag: Roles
  heading: Two runners, four guns
  blocks:
  - type: roles
    items:
    - who: Runners ×2 (L / R)
      html: Read the bracelet, soak the matching attack, break the hand, call the shape (<i>"broke triangle!"</i>), carry Glyphbreaker to the well, break the chest glyph — synced with the other runner when possible.
    - who: Add-clear ×4 (2 per side)
      html: Subjugators die fast, runners stay alive, and everyone helps read/shoot the Test. Machine guns earn their keep here.
    - who: Everyone
      html: Converge for Tests and DPS. Shift for sweeps, jump the slam, leave the platform on time, save everything for final stand.
- tag: Flow
  heading: One cycle
  blocks:
  - type: steps
    items:
    - act: 'Hands manifest on both sides; one per side shows its colored bracelet. Runners call it: <i>"left green, right yellow."</i>'
    - act: Runners soak the matching attack until the Resonance lands, then shoot the bracelet → <b>Glyphbreaker</b>.
      res: 'Call every break: "broke triangle" — it sets the next Test''s answer.'
    - act: Runners hit the well and break their matching chest glyphs — simultaneously if possible. Add-clear handles the Subjugators that answer.
    - act: <i>"The Witness tests you"</i> — everyone rotates mid, caller announces the shape, team shoots the excess nodes.
      res: Wrong shape = wipe. Caller first, bullets second.
    - act: Repeat until all <b>six glyphs</b> are broken.
    - act: Board the platform — it rises, the crit opens, burn. Shift for sweeps, jump the slam.
    - act: Witness straightens → phase over → <b>off the platform</b> immediately. Repeat; finish in ~3 phases and save everything for final stand.
- tag: Wipes
  heading: Why teams die here
  blocks:
  - type: table
    columns:
    - Cause
    - Fix
    rows:
    - - Wrong Test shape → wipe
      - One caller announces the last-broken shape; nobody fires until it's agreed
    - - Nobody tracked the last hand broken
      - Runners call "broke X" on every single break, no exceptions
    - - Wrong Resonance soaked for the bracelet
      - 'Memorize the table: yellow-circle-bees, red-square-beam, green-triangle-pulses'
    - - Subjugators stack up and kill runners
      - Four dedicated guns; sync glyph breaks to skip spawn sets
    - - Fall deaths when the platform lowers
      - Leave the moment the Witness draws back — greed kills
    - - Sweep/slam deaths during DPS
      - Shift to the opposite half after each sweep; jump on the slam's audio cue
    - - Under-damaging into final stand
      - Bank supers/heavy; target a 3-phase kill
- tag: Loadout
  heading: What to bring
  blocks:
  - type: list
    style: ul
    items:
    - <b>Platform sustain:</b> Well of Radiance (or strong healing support) on the rising platform is the classic anchor.
    - <b>Burst DPS:</b> precision heavy — snipers, linears, rockets — for the chest crit; swords are riskier here than on the Herald.
    - <b>Machine guns</b> for Subjugator control double as respectable backup DPS.
    - <b>Euphony</b> — the raid's own exotic — is a strong pick in this very room once you have it.
- tag: Credits
  tag_style: alt
  heading: Sources for this page
  blocks:
  - type: sources
    items:
    - <a href="https://www.destructoid.com/destiny-2-salvations-edge-5th-encounter-raid-guide-zenith/" rel="noopener">Destructoid — Zenith guide</a>
    - <a href="https://gamerant.com/destiny-2-salvations-edge-how-beat-the-witness/" rel="noopener">GameRant — beating the Witness</a>
    - <a href="https://www.shacknews.com/article/140025/salvations-edge-raid-guide-destiny-2" rel="noopener">Shacknews — Salvation's Edge raid guide</a>
    - <a href="https://www.pcgamesn.com/destiny-2/salvations-edge-guide" rel="noopener">PCGamesN — Salvation's Edge guide</a>
    - <a href="https://www.thegamer.com/destiny-2-final-shape-salvations-edge-raid-encounters-hidden-chests/" rel="noopener">TheGamer — encounters guide</a>
    - <a href="https://grindout.com/destiny-2/guides/salvations-edge" rel="noopener">Grindout — Salvation's Edge guide</a>
    - <a href="https://boosting-ground.com/Destiny2/guides/raid-guides/salvations-edge-guide" rel="noopener">Boosting Ground — encounter guide</a> (three-Glyphbreaker split, well cleanse)
    - <a href="https://www.sportskeeda.com/mmo/destiny-2-master-salvation-s-edge-final-encounter-challenge-guide-coordinated-efforts" rel="noopener">Sportskeeda — Coordinated Efforts challenge</a>
---
