---
title: Substratum
page_title: Substratum — Guide · Salvation's Edge
nav_label: Substratum
number: 1
kicker: Encounter 1
description: Guide to Substratum, the opening encounter of Destiny 2's Salvation's Edge raid — the room grid, plate bounces, conductors, and wipe timer, with an original map.
intro: The circuit under the monolith. Two teams, eight rooms, one relentless clock.
card:
  title: Substratum
  blurb: The opening circuit puzzle — basement teams, conductors, and a rotating buff you cannot let expire.
  meta: Puzzle · Add-clear heavy
footer: Original maps & text. Not affiliated with Bungie.
sections:
- style: cheat
  tag: TL;DR
  heading: The whole encounter in eight lines
  blocks:
  - type: list
    style: ol
    items:
    - Dunk the free Resonance in the central chest to start the wipe timer (<span class="term">The Final Shape looms</span>, ~4 min). Two adjacent doors open.
    - Split <b>two teams of three</b> — one pushes clockwise, one counter-clockwise. Your kills open <b>their</b> next door; leapfrog ~3 rooms each.
    - Kill the <b>Overload Minotaur</b> in the later room → a <b>Tormentor</b> (Threshold Sentinel) spawns mid. All six collapse and kill it → plates activate.
    - 'Bounce the pulse between paired plates: sender steps, receiver steps <b>only when the shrinking orange circle appears</b>. Each bounce drops <span class="term">Pyramidal Resonance</span>.'
    - Collect to <b>x3 — a 4th pickup kills you</b>, and holding it too long kills you too. <b>Fail the bounce on purpose</b> after four passes so you can collect in peace — see <a href="#optimal">the optimal line</a>.
    - 'Lock your conductor: holding Resonance, shoot the pillar → shoot the <b>golden node</b> → step the plate on the final pulse. <i>"The resonant conductor sparks to life."</i>'
    - Both sides locked → <i>"You are beckoned toward the center"</i> → kill the mid <b>Subjugator</b> → everyone dunks (<b>+20 s each</b>).
    - Repeat three rounds — six conductors — and the way forward opens.
- style: eff
  id: optimal
  tag: Optimal
  tag_style: eff
  heading: The failed-charge line
  blocks:
  - type: hint
    html: Same trick you'll use in Dissipation and Repository. Learn it here, where the punishment is cheapest.
  - type: keyline
    html: |-
      <b>Don't chain bounces into the lock.</b> Once the plates are live, pass the signal about <b>four times — two catches per plate</b> —
      then step off and let it fail. A Subjugator spawns at the sender's room; kill it. Now every Resonance pickup you need is
      already on the ground, the plates are yours again, and nobody is collecting under fire.
    why: |-
      Trying to bounce, collect, and lock in one continuous chain means someone is always doing two things at once.
      Splitting it into <i>generate → clean up → collect → lock</i> costs one scripted miniboss and removes almost every failure mode.
  - type: heading
    html: The line, in order
  - type: steps
    items:
    - act: <b>Push rooms, don't clear them.</b> Your kill opens the <i>other</i> trio's door — so kill the yellow-bar and call it instantly. Everything else in the room is optional; the other team is standing still until you say the word.
      res: '"Champ down — your door''s open." Say it before you loot, reload, or regroup.'
    - act: <b>Collapse hard on the Tormentor.</b> All six, immediate, with a super or heavy if it's up. This is the one moment where six guns on one target is strictly correct, and every second here is a second off the wipe timer.
    - act: <b>Bounce four, then fail.</b> Two catches per plate, then step off. Kill the Subjugator that answers.
    - act: <b>Collect at leisure to x3.</b> Nothing is chasing you and nothing is on a timer but the wipe clock. Everyone walks up to exactly three — <b>never a fourth</b>.
      res: 'Remember Resonance has its own expiry: collect late, dunk promptly.'
    - act: '<b>Lock with the Closer already set up.</b> Resonance in hand and crosshair on the pillar <i>before</i> the final pulse is sent: pillar → golden node → plate. Never improvise this sequence live.'
    - act: <b>Dunk single-file.</b> The chest takes one deposit at a time — queue up rather than crowding it, and don't leave anyone holding stacks while the next round starts.
      res: Six deposits ≈ +2 minutes. Missing two people is a round you'll pay for later.
  - type: heading
    html: Small things that add up
  - type: list
    style: ul
    items:
    - <b>Fixed roles for all three rounds.</b> Sender, Closer, add-clear — the lock sequence is muscle memory by round three only if the same hands do it every time.
    - <b>Pre-assign the Overload answer</b> per trio before the encounter starts. Hunting for a stun mid-room is pure lost time.
    - <b>Don't backtrack for stragglers.</b> Rooms are cleared to open doors, not to be safe — a dead teammate costs less than a stalled door if the timer is thin.
    - <b>Running <span class="term">Scenic Route</span>?</b> The failed-charge window is where you sort out which Minotaur is legal to kill — do the talking during the quiet phase, not during the push.
- tag: Map
  tag_style: alt
  heading: The room grid
  blocks:
  - type: map
    file: substratum-rooms.svg
    legend:
    - color: '#f2913a'
      label: 'center: chest & hazards'
    - color: '#6fe3a0'
      label: floor plates
    - color: '#b79bff'
      label: conductor pillars
    - color: '#9c5a20'
      label: circuit wiring
    caption: Original schematic. Eight rooms ring the central chamber; each round opens two adjacent doors and the teams sweep opposite directions.
- tag: Mechanics
  heading: What everything does
  blocks:
  - type: heading
    html: The clock — "The Final Shape looms"
  - type: text
    html: Starts around <b>4 minutes</b> when the first Resonance is dunked. Zero = wipe. <b>Every deposit adds +20 seconds</b> — six players dunking x3 each round is up to six minutes of extra life. The encounter is fundamentally about keeping this fed.
  - type: heading
    html: Rooms & doors
  - type: text
    html: Two adjacent doors open per round. Each trio pushes its own direction; killing the key yellow-bar in your room opens the <b>other</b> team's next door, so the two teams leapfrog each other around the ring — roughly three rooms each per round. Watch doorways for exploding <b>Supplicants</b>.
  - type: heading
    html: Champions → Tormentor
  - type: text
    html: 'An <b>Overload Minotaur</b> guards the later room on each side. Killing it spawns the <span class="term">Threshold Sentinel</span> — a Tormentor — in the central chamber. All six collapse, burst its weak points, and drop it: <i>"Energy flows into the architecture"</i> — the plates in the Champion rooms light up.'
  - type: heading
    html: The plate bounce
  - type: list
    style: ul
    items:
    - Sender steps the glowing plate → an orange pulse travels the wire to the partner plate on the other team's side.
    - A <b>shrinking orange circle</b> appears on the receiving plate — step on it <b>only while the circle is visible</b>. Too early, too late, or two people on plates at once breaks the chain.
    - Every clean bounce spawns <span class="term">Pyramidal Resonance</span> at both plates and one in the middle.
    - A failed bounce spawns a <b>Subjugator</b> at the sender's room and locks that side's plates until it dies.
  - type: heading
    html: Resonance rules
  - type: text
    html: Cap is <b>x3</b>. A fourth pickup kills you instantly, and the buff has its own timer — sitting on stacks too long also kills you. Collect late, dunk fast.
  - type: heading
    html: Locking a conductor
  - type: text
    html: 'Holding Resonance, shoot the black <b>conductor pillar</b> — it opens to expose a <b>golden node</b>. Shoot the node in its short window, then step your plate as the final pulse arrives: <i>"The resonant conductor sparks to life."</i> Two locks per round; <b>six total</b> ends the encounter''s objective.'
  - type: heading
    html: The beckoning
  - type: text
    html: Both conductors locked → <i>"You are beckoned toward the center"</i> → a Subjugator spawns mid. Kill it to activate the chest, then everyone deposits one at a time.
- tag: Roles
  heading: Two trios, three jobs each
  blocks:
  - type: roles
    items:
    - who: Sender
      html: 'Owns the starter plate: initiates bounces, keeps the rhythm ("sent… back"), and fires the final pulse for the lock.'
    - who: Closer
      html: 'Far plate: steps on the circle each bounce. On the lock: Resonance in hand, pre-aimed at the pillar → node → plate. Don''t improvise the timing.'
    - who: Add-clear / collector
      html: Keeps Supplicants off the plates, stuns the Overload, grabs mid-chamber Resonance, and leads the burn on Tormentor and Subjugator.
- tag: Flow
  heading: One round (of three)
  blocks:
  - type: steps
    items:
    - act: Dunk the free Resonance at the chest — timer starts, two adjacent doors open, the Witness's hand starts pounding the center.
    - act: Trios push opposite directions. Clear each room's yellow-bars to open the <b>opposite</b> team's next door; leapfrog ~3 rooms.
    - act: Stun and kill the <b>Overload Minotaur</b> → Tormentor spawns mid → all six collapse and kill it.
      res: '"Champ down" → "Tormentor mid" → "Energy flows — plates up"'
    - act: Bounce the pulse — receiver steps <b>on the circle only</b>. After ~four passes, <b>let it fail deliberately</b> and kill the Subjugator that spawns.
      res: 'This is the whole trick: see <a href="#optimal">the optimal line</a>.'
    - act: 'Collect to x3 — never a fourth — and lock both conductors: pillar → golden node → plate on the final pulse.'
      res: '"Sparked/locked" ×2'
    - act: <i>"Beckoned"</i> — kill the central Subjugator, then all six dunk one at a time (+20 s each).
    - act: Repeat twice more. Six conductors locked and final deposits made — the encounter completes.
- tag: Wipes
  heading: Why teams die here
  blocks:
  - type: table
    columns:
    - Cause
    - Fix
    rows:
    - - <i>Accidental</i> mistimed bounce → Subjugator at the wrong moment
      - Step only on the visible circle; one body per plate; steady send/return rhythm. A <i>planned</i> fail after four passes is the intended line, not a mistake
    - - 4th Resonance pickup → instant death
      - Count stacks out loud; full players walk away from drop spots
    - - Resonance timer expiry
      - Collect late in the cycle, dunk promptly — don't hold stacks while fighting
    - - Wipe timer starvation
      - All six deposit every round; no idling in cleared rooms
    - - Supplicant explosions on plates and doorways
      - Shoot them at range before they close; never let them near plate-standers
    - - Solo deaths stalling door progression
      - Sustain builds; call for help before pushing a yellow-bar alone
    - - Missed golden-node window
      - Closer holds Resonance and pre-aims before the final pulse is ever sent
- tag: Loadout
  heading: What to bring
  blocks:
  - type: list
    style: ul
    items:
    - <b>No DPS check — bring add-clear and sustain.</b> Wave-frame GLs, incandescent primaries, machine guns (which also stun Overloads intrinsically).
    - <b>Overload answer per trio</b> — a champion mod, suspend, or suppression you actually trust.
    - <b>Burst for minibosses</b> — a one-off super or heavy to collapse the Tormentor and Subjugators quickly in the center.
    - <b>Healing</b> — solar sustain or recuperation-style mods; players are frequently isolated in side rooms.
- tag: Credits
  tag_style: alt
  heading: Sources for this page
  blocks:
  - type: sources
    items:
    - <a href="https://www.shacknews.com/article/140025/salvations-edge-raid-guide-destiny-2" rel="noopener">Shacknews — Salvation's Edge raid guide</a>
    - <a href="https://gamerant.com/destiny-2-salvations-edge-substratum-guide/" rel="noopener">GameRant — Substratum guide</a>
    - <a href="https://www.escapistmagazine.com/how-to-complete-substratum-in-salvations-edge-in-destiny-2/" rel="noopener">The Escapist — Substratum walkthrough</a>
    - <a href="https://mobalytics.gg/blog/destiny-2/salvations-edge-raid-guide/" rel="noopener">Mobalytics — raid guide</a>
    - <a href="https://www.sportskeeda.com/mmo/destiny-2-salvation-s-edge-raid-first-encounter-guide-substratum" rel="noopener">Sportskeeda — Substratum guide</a>
    - <a href="https://grindout.com/destiny-2/guides/salvations-edge" rel="noopener">Grindout — Salvation's Edge guide</a>
    - <a href="https://www.thegamer.com/destiny-2-final-shape-salvations-edge-raid-encounters-hidden-chests/" rel="noopener">TheGamer — complete raid guide</a> (failed-charge strategy)
---
