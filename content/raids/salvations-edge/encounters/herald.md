---
title: Herald of Finality
page_title: Herald of Finality (Dissipation) — Guide · Salvation's Edge
nav_label: Herald
number: 2
kicker: Encounter 2 · Dissipation
description: Guide to Dissipation, the Herald of Finality boss fight — second encounter of Destiny 2's Salvation's Edge raid. Mechanics, roles, callouts, and an original map.
intro: First boss. Juggle plates, read the conduits, and never let a Knight touch a plate.
card:
  title: Herald of Finality
  blurb: First boss. Feed the conductors, break the tether, and burn the Herald before the wave rolls over you.
  meta: Boss · DPS check
footer: Original maps & text. Not affiliated with Bungie.
sections:
- style: cheat
  tag: TL;DR
  heading: The whole fight in nine lines
  blocks:
  - type: list
    style: ol
    items:
    - Split into three pairs — <b>Left, Middle, Right</b>. Each pair owns its wing all fight.
    - Clear your wing; kill your <span class="term">Trammel</span> miniboss → one player per side gets <span class="term">Call to Reckoning</span>.
    - Reckoning players drop to the boss pit, crit the Herald's head, break the <b>Blights</b> that spawn, crit again → buff becomes <span class="term">Stolen Favor</span>.
    - 'Stolen Favor lets you <b>read your side''s conduit symbol</b> — call it: <b>triangle</b> or <b>circle</b>.'
    - Pairs bounce the signal between their two plates; each catch spawns Resonance. Collect up to <b>x3 — a 4th pickup kills you</b>.
    - <b>Fail the catch on purpose after the third bounce</b> — the circuit stays open, the Resonance stays on the floor, and you get a calm window to stack. See <a href="#optimal">the optimal line</a> below.
    - Your <b>last pickup sets your whole stack's shape</b> — grab the called shape last.
    - Lock all three conduits with matching Resonance → deposit chest appears center. Deposits extend the wipe timer (<span class="term">The Final Shape Looming</span>, cap ~3:20).
    - Chest expires → shield drops → group up and burn the boss.
    - <b>Final stand:</b> ~30 seconds, all minibosses at once, no mechanics — dump everything.
- style: eff
  id: optimal
  tag: Optimal
  tag_style: eff
  heading: Run the failed-circuit line
  blocks:
  - type: hint
    html: The single biggest time-saver in this encounter. Everything below assumes it.
  - type: keyline
    html: |-
      <b>Break the circuit on purpose.</b> Bounce the signal until the wing is covered in Resonance — three catches is plenty —
      then let the next catch drop. The circuit never closes, the Resonance stays on the ground, and you get a quiet window
      to walk up to x3 in the right order before you go back and finish the lock.
    why: |-
      Cost: one punishment miniboss, which spawns in a known place at a time you chose. That is a far cheaper
      tax than trying to stack Resonance while the conduit is live and Knights are walking your plates.
  - type: heading
    html: Why teams lose time doing it "properly"
  - type: text
    html: |-
      Closing the circuit and collecting Resonance compete for the same seconds. If you let the circuit close on schedule you
      are picking up shapes under pressure — wrong shape last, someone eats a fourth pickup, someone abandons a plate to chase a
      Knight, and the conduit resets. Deliberately failing the catch <b>decouples the two jobs</b>: generate first, collect second, lock third.
  - type: heading
    html: The line, in order
  - type: steps
    items:
    - act: <b>Read before you bounce.</b> Nobody touches a plate until all three Stolen Favor holders have called their symbol. Re-stacking because a shape came in late is the most common wasted minute in this fight.
      res: '"Left circle, mid triangle, right circle" — then, and only then, "sending."'
    - act: <b>Generate.</b> Send and catch until Resonance litters your wing. Three clean catches covers a pair comfortably; a fourth is fine if your side is behind.
    - act: <b>Fail on purpose.</b> Step off — let the next catch drop. The wing punishes you with a miniboss instead of the circuit completing.
      res: 'Call it so nobody panics: <i>"dropping it — killing the punish."</i>'
    - act: <b>Kill the punish, then collect calmly.</b> With the miniboss dead the wing is quiet and every pickup you need is already on the floor. Walk to exactly <b>x3</b>, taking <b>off-shape pickups first and your called shape last</b> — last pickup converts the whole stack.
    - act: <b>Re-run the bounce and close.</b> Now the circuit closes into a wing where everyone is already correctly stacked. Lock, and call it.
  - type: heading
    html: The rest of the cycle
  - type: list
    style: ul
    items:
    - <b>Knights outrank the mechanic, always.</b> One Knight touching a plate wipes six people; a dropped catch costs you a miniboss you were going to spawn anyway. If you have to choose, shoot the Knight — and since you're already comfortable failing catches, that choice is free.
    - <b>Send the same Reckoning player every cycle.</b> The pit trip is the same three actions each time (crit → Blights → crit); a fixed runner learns the Blight spawns and cuts seconds off every single round.
    - <b>Don't over-feed the timer.</b> The wipe clock caps around <b>3:20</b> — deposits past the cap are thrown away. If you're at or near cap when the chest appears, dump what you have and get bodies onto the boss rather than farming another stack.
    - <b>Bank for the final stand.</b> It's ~30 seconds with every Trammel up. Supers and heavy that you spent shaving a normal damage phase are supers you don't have for the phase that actually ends the fight.
    - <b>Running <span class="term">At Capacity</span>?</b> The challenge wants every deposit to be exactly x3 — the collection window this line buys you is precisely what makes that safe. Count out loud before anyone walks to the chest.
- tag: Map
  tag_style: alt
  heading: Arena layout
  blocks:
  - type: map
    file: herald-arena.svg
    legend:
    - color: '#f2913a'
      label: boss & deposit
    - color: '#b79bff'
      label: Resonance conduits
    - color: '#6fe3a0'
      label: signal plates
    - color: '#ff7a7a'
      label: hazards
    caption: Original schematic — orientation is functional, not to scale. Each pair works one wing; everyone meets center to deposit and melt.
- tag: Mechanics
  heading: What everything does
  blocks:
  - type: heading
    html: The wipe timer — "The Final Shape Looming"
  - type: text
    html: Always ticking down; hits zero, you wipe. Every Resonance stack deposited in the central chest <b>adds time</b>, capped around <b>3:20</b>. The whole encounter is a race to keep feeding it.
  - type: heading
    html: Trammels & Call to Reckoning
  - type: text
    html: Each wing hosts a <span class="term">Trammel</span>, a big yellow-bar Taken miniboss. Killing it grants one player on that side <span class="term">Call to Reckoning</span> — only Reckoning holders can damage the Herald's head.
  - type: heading
    html: Cracking the head → Stolen Favor
  - type: text
    html: Reckoning players crit the head → Taken <b>Blights</b> spawn (one small above the boss, larger ones around the room). Destroy all Blights, crit the head again; enough damage converts the buff to <span class="term">Stolen Favor</span>, which reveals the <b>shape symbol inside your side's conduit</b> — invisible to everyone else. Call it out.
  - type: heading
    html: Resonance & plate juggling
  - type: list
    style: ul
    items:
    - 'Two shapes appear here: <span class="term">Pyramidal Resonance</span> (triangle) and <span class="term">Spherical Resonance</span> (circle). No squares in this fight.'
    - Stand on the lit plate to <b>send</b> the signal to its partner plate; a teammate must be on the receiver to <b>catch</b> it. Every catch spawns Resonance pickups.
    - <b>Cap is x3.</b> Picking up a fourth kills you instantly.
    - <b>Your last pickup converts your whole stack to that shape</b> — collect the called shape last.
    - A dropped catch punishes the side with a miniboss spawn and sets your conduit progress back — confirm your partner is planted before sending.
  - type: heading
    html: Ravenous Taken Knights
  - type: text
    html: Yellow-bar Knights march at your plates in waves. <b>If any Knight reaches a plate, the whole fireteam wipes.</b> They outrank everything else on your screen.
  - type: heading
    html: Locks, deposit, damage
  - type: text
    html: 'Lock each conduit with Resonance matching its called symbol. Three locks → the chest materializes front-center under the Witness''s hand. Deposit stacks to extend the timer; when the chest vanishes the Herald''s shield drops and the arena edges glow — <b>damage phase</b>. At low health the Herald enters a <b>final stand</b>: the timer resets to ~30 seconds, every Trammel spawns at once, and it''s kill-or-wipe.'
- tag: Roles
  heading: Three pairs, one job each
  blocks:
  - type: roles
    items:
    - who: Reckoning player (rotates)
      html: 'Whoever gets <b>Call to Reckoning</b> after the Trammel dies: drop to the pit, crack the head, break Blights, earn Stolen Favor, read and call your conduit''s symbol, then get back to help juggle.'
    - who: Plate partner
      html: 'Hold the wing solo meanwhile: <b>Knights first</b>, then Attendants and adds. Be ready on the receiving plate the moment your partner returns.'
    - who: Everyone
      html: Collect to x3 with the called shape last, lock or deposit as assigned, group center for DPS, and save supers + heavy for the final stand.
- tag: Flow
  heading: One full cycle
  blocks:
  - type: steps
    items:
    - act: Encounter opens — adds flood all three wings. Clear your side; prioritize the <b>Ravenous Knights</b>, then kill your <b>Trammel</b>.
    - act: One player per side gains <b>Call to Reckoning</b> and heads to the pit.
    - act: Crit the Herald's head → <b>Blights spawn</b> → team breaks them all → crit again until the buff converts to <b>Stolen Favor</b>.
      res: 'Callouts: "blights up" → "blights dead" → "favor!"'
    - act: 'Stolen Favor players read their conduit and call the shape for each side: <i>"Left circle, mid triangle, right circle."</i>'
    - act: Pairs juggle plates — send, catch, and after the third bounce <b>let the catch drop on purpose</b>. Kill the punishment miniboss, then build to <b>x3</b> at your own pace with the called shape as your <b>final</b> pickup.
      res: Trying to stack while the circuit is closing is what costs teams the round — see <a href="#optimal">the optimal line</a>.
    - act: Lock all three conduits with matching Resonance.
      res: 'Callout: "locked" ×3'
    - act: Chest appears center — everyone deposits to push the wipe timer toward the ~3:20 cap.
      res: Running the <b>At Capacity</b> challenge? Deposit only at exactly x3.
    - act: Chest expires → shield drops → group up and <b>burn the Herald</b>. Dodge the Witness-hand ground circles; kill exploding fliers on sight.
    - act: 'Repeat until final stand: ~30 seconds, all Trammels up, no mechanics — commit everything to the boss.'
- tag: Wipes
  heading: Why teams die here
  blocks:
  - type: table
    columns:
    - Cause
    - Fix
    rows:
    - - Knight touches a plate → instant wipe
      - 'Knights are priority #1 every wave; the plate partner babysits the lanes and calls pushes early'
    - - Wipe timer expires
      - Deposit more stacks each cycle; don't dawdle between head-crack and locks
    - - Death by 4th Resonance pickup
      - Watch your buff counter; stop walking through spawns at x3
    - - Stack converted to the wrong shape
      - Last pickup wins — call shapes before collecting, grab your match last
    - - <i>Unplanned</i> dropped catch → punishment miniboss at a bad moment
      - Confirm "on plate" before every send. Deliberate drops are fine and encouraged — surprise drops while someone is mid-collection are not
    - - Deaths in the pit during the Blight phase
      - Don't tunnel the head — clear exploders, keep moving out of marked circles
    - - Final stand failure
      - Enter the last phase with heavy and supers banked; ignore adds, kill the boss
- tag: Loadout
  heading: What to bring
  blocks:
  - type: list
    style: ul
    items:
    - <b>Classic strat:</b> Well of Radiance anchor + team swords on the boss — the Herald is stationary and reachable. Any high-uptime burst (rockets with reload-swap rolls, heavy linear/sniper burst, Golden Gun) works if your team prefers range.
    - <b>Wings are add-hell:</b> bring real waveclear and a survivability build; there is very little cover.
    - <b>Save it:</b> the final stand is a 30-second DPS check — bank supers and heavy for it every cycle.
- tag: Credits
  tag_style: alt
  heading: Sources for this page
  blocks:
  - type: sources
    items:
    - <a href="https://gamerant.com/destiny-2-salvations-edge-dissipation-hearld-of-finality-guide/" rel="noopener">GameRant — Dissipation guide</a>
    - <a href="https://www.shacknews.com/article/140025/salvations-edge-raid-guide-destiny-2" rel="noopener">Shacknews — Salvation's Edge raid guide</a>
    - <a href="https://www.destinypedia.com/Herald_of_Finality" rel="noopener">Destinypedia — Herald of Finality</a>
    - <a href="https://www.sportskeeda.com/mmo/destiny-2-salvation-s-edge-first-boss-encounter-guide-the-herald-finality" rel="noopener">Sportskeeda — Herald of Finality guide</a>
    - <a href="https://www.charlieintel.com/destiny/destiny-2-salvations-edge-raid-walkthrough-how-to-finish-all-encounters-328473/" rel="noopener">CharlieINTEL — raid walkthrough</a>
    - <a href="https://mobalytics.gg/blog/destiny-2/salvations-edge-raid-guide/" rel="noopener">Mobalytics — raid guide</a>
    - <a href="https://grindout.com/destiny-2/guides/salvations-edge" rel="noopener">Grindout — Salvation's Edge guide</a> (failed-circuit strategy)
    - <a href="https://www.thegamer.com/destiny-2-final-shape-salvations-edge-raid-encounters-hidden-chests/" rel="noopener">TheGamer — complete raid guide</a> (failed-charge routine)
    - <a href="https://www.sportskeeda.com/mmo/destiny-2-master-salvation-s-edge-second-encounter-challenge-guide-at-capacity" rel="noopener">Sportskeeda — At Capacity challenge</a>
---
