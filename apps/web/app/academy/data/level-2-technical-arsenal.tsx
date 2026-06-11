import { type Sheet, cell, parseTab } from "../types";

export const level2Arsenal: Sheet = {
  meta: {
    track: "The Shredder's Academy · Practical Shred Track",
    level: "Level 2 of 5 · Drill Sheet",
    title: "Technical Arsenal",
    specs: [
      { label: "KEY", value: "A MINOR" },
      { label: "TUNING", value: "E A D G B e" },
      { label: "PREREQ", value: "ALL LEVEL 1 GATES CLEARED" },
      { label: "TOOL", value: "METRONOME — ALWAYS" },
    ],
    navLabel: "Sheet sections",
    docTitle: "Level 2: Technical Arsenal — Practical Shred Drill Sheet",
    description:
      "Level 2 practical shred drill sheet — legato, string skipping, sweep picking, tapping, and tremolo velocity.",
  },
  nav: [
    { id: "legend", label: "Briefing" },
    { id: "warmup", label: "Warm-up" },
    { id: "block-a", label: "Block A · Legato" },
    { id: "block-b", label: "Block B · Skipping" },
    { id: "block-c", label: "Block C · Sweeps" },
    { id: "block-d", label: "Block D · Tapping" },
    { id: "block-e", label: "Block E · Velocity" },
    { id: "session", label: "Session Split" },
    { id: "standard", label: "The Standard v2" },
    { id: "tendon", label: "Tendon Law" },
  ],
  sections: [
    {
      id: "legend",
      eyebrow: "Read This First",
      title: "Welcome to the Arsenal",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: (
            <>
              Level 1 built the engine. Level 2 hands you the weapons: legato,
              string skipping, sweep picking, tapping, and tremolo velocity. Nine
              drills across five blocks — and this is where the two tracks fuse.
              The Theory track's Level 2 material (<b>the modes, harmonic minor</b>)
              shows up here as the actual notes under your fingers. Every drill
              wears a tag showing which theory concept it's smuggling into your
              hands.
            </>
          ),
        },
        {
          kind: "prose",
          tone: "lede",
          body: (
            <>
              Same law as before: tempo ladders, <b>four consecutive clean repeats</b>{" "}
              to climb a rung, two fails drops you one. Home key is still A minor —
              but A minor now has new colors.
            </>
          ),
        },
        {
          kind: "legend",
          body: (
            <>
              <span className="pk">D</span>
              {" = downstroke   "}
              <span className="pk">U</span>
              {" = upstroke   h = hammer-on   p = pull-off   t = right-hand tap\nPM = palm mute   ~ = let ring / vibrato   Strings top→bottom: e B G D A E\nLegato rule: pick ONLY where a D or U is marked — everything else is fretting-hand power."}
            </>
          ),
        },
      ],
    },
    {
      id: "warmup",
      eyebrow: "Before Anything Else · 5 Minutes",
      title: "Warm-Up Protocol v2",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: (
            <>
              Run the full Level 1 protocol: two minutes off-guitar mobilization,
              then pentatonic eighths at 60 BPM, featherweight touch.{" "}
              <b>New addition:</b> finish with one slow lap of the 3nps Aeolian
              shape played legato — gentle hammers, gentle pulls, zero pick. Legato
              and tapping load the fretting hand harder than anything in Level 1, so
              the warm-up is now load-bearing. Skip it and the Tendon Law will
              collect.
            </>
          ),
        },
      ],
    },
    {
      id: "block-a",
      eyebrow: "Block A · Legato Day · 20 Minutes",
      title: "The Legato Engine",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: "Fluidity. The pick becomes an ignition switch — the fretting hand does the driving. Hammers and pulls must hit as loud and even as picked notes, or it isn't legato, it's mumbling.",
        },
        {
          kind: "card",
          code: "A1",
          title: "3NPS Aeolian — Hammer Up, Pull Down",
          body: [
            { kind: "xref", body: "Theory Link · Aeolian / The Mother Shape" },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Why it's music:</b> the same A minor mother shape you gated in
                  Level 1 — now the picking scaffolding comes off. One pick stroke
                  per string, the rest is pure fretting-hand voltage. This is the
                  chassis Petrucci's flowing runs are built on.
                </>
              ),
            },
            {
              kind: "tab",
              tab: parseTab(`
<span class="ch">ASCEND — pick only the first note of each string</span>
<span class="pk">    D     D     D     D     D     D</span>
e|------------------------------5h7h8---|
B|------------------------5h6h8---------|
G|------------------5h7h9---------------|
D|------------5h7h9---------------------|
A|------5h7h8---------------------------|
E|--5h7h8-------------------------------|

<span class="ch">DESCEND — pull-offs, same rule</span>
<span class="pk">    D     D     D     D     D     D</span>
e|--8p7p5-------------------------------|
B|--------8p6p5-------------------------|
G|--------------9p7p5-------------------|
D|--------------------9p7p5-------------|
A|--------------------------8p7p5-------|
E|--------------------------------8p7p5-|
`),
            },
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  Pull-offs are <b>plucks</b>, not lifts — flick the string sideways
                  as the finger leaves. If the descend is quieter than the ascend,
                  the rep fails. Even sixteenths; the metronome doesn't care which
                  hand made the note.
                </>
              ),
            },
            {
              kind: "ladder",
              ladder: {
                label: "Tempo Ladder · 16th notes",
                rungs: [70, 80, 90, 100, 110, 120],
                gate: 120,
              },
            },
          ],
        },
        {
          kind: "card",
          code: "A2",
          title: "Cascading Sixes — The Waterfall",
          body: [
            { kind: "xref", body: "Theory Link · Sequence Toolkit, Descending Sixes" },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Why it's music:</b> C–B–A–G–F–E — a six-note waterfall straight
                  down A minor, the exact descending cascade living inside half of
                  Petrucci's fast legato lines. One cell, two strings, infinite
                  mileage: this becomes a full sequencing system in Level 3.
                </>
              ),
            },
            {
              kind: "tab",
              tab: parseTab(`
<span class="ch">SEXTUPLETS — one cell per beat, looped</span>
<span class="pk">    D        D        D        D</span>
e|--8p7p5-------------8p7p5-------------|
B|-----------8p6p5-------------8p6p5----|
G|--------------------------------------|
D|--------------------------------------|
A|--------------------------------------|
E|--------------------------------------|
`),
            },
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  Downstroke <b>falls</b> onto each new string, then the fingers
                  take over. The crossing from e to B must not gap — the waterfall
                  never pauses mid-air. When clean, extend the same cell down to the
                  G string (9p7p5) for a nine-note fall.
                </>
              ),
            },
            {
              kind: "ladder",
              ladder: {
                label: "Tempo Ladder · sextuplets",
                rungs: [60, 68, 76, 84, 92],
                gate: 92,
              },
            },
          ],
        },
        {
          kind: "card",
          code: "A3",
          title: "New Colors — A Dorian & A Harmonic Minor",
          body: [
            {
              kind: "xref",
              body: "Theory Link · Modes of A / Harmonic Minor — Theory L2 Core",
            },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Why it's music:</b> two new flavors of your home key, delivered
                  as 3nps shapes. <b>A Dorian</b> swaps F for F# — minor with the
                  lights on, the bright-sad color all over prog. <b>A harmonic minor</b>{" "}
                  raises G to G# — the neoclassical blade, and the reason that E5 in
                  Level 1's gallop pulled so hard. Alternate days: picked (strict
                  D/U) one day, legato the next.
                </>
              ),
            },
            {
              kind: "tab",
              tab: parseTab(`
<span class="ch">A DORIAN — the F# lives on the A string (9) and B string (7)</span>
<span class="pk">    D U D U D U D U D U D U D U D U D U</span>
e|------------------------------7-8-10--|
B|------------------------7-8-10--------|
G|------------------5-7-9---------------|
D|------------5-7-9---------------------|
A|------5-7-9---------------------------|
E|--5-7-8-------------------------------|

<span class="ch">A HARMONIC MINOR — the G# lives on the D string (6) and B string (9)</span>
<span class="pk">    D U D U D U D U D U D U D U D U D U</span>
e|------------------------------5-7-8---|
B|------------------------6-9-10--------|
G|------------------5-7-9---------------|
D|------------6-7-9---------------------|
A|------5-7-8---------------------------|
E|--5-7-8-------------------------------|
`),
            },
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  That B-string <b>6–9–10</b> reach is harmonic minor's signature
                  stretch — the one-and-a-half-step gap IS the exotic sound. Ease
                  into it; never force the pinky cold. Descend both shapes too. Hear
                  the difference: Dorian smiles, harmonic minor draws a sword.
                </>
              ),
            },
            {
              kind: "ladder",
              ladder: {
                label: "Tempo Ladder · 16th notes",
                rungs: [60, 70, 80, 90, 100, 110],
                gate: 110,
              },
            },
          ],
        },
      ],
    },
    {
      id: "block-b",
      eyebrow: "Block B · Legato Day · 10 Minutes",
      title: "String Skipping",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: "Wide intervals, surgical accuracy. The skipped string sits silent in the middle of the jump — muting it is half the drill.",
        },
        {
          kind: "card",
          code: "B1",
          title: "Triad Skip Cells — Am into Dm",
          body: [
            { kind: "xref", body: "Theory Link · Chord Construction, i → iv" },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Why it's music:</b> two triads — A minor and D minor, your i and
                  iv — split across the G and high-e strings with the B string
                  skipped dead. Wide-interval arpeggio cells like these are pure Paul
                  Gilbert by way of Petrucci, and the seed of Nilsson's leaping
                  melodic lines.
                </>
              ),
            },
            {
              kind: "tab",
              tab: parseTab(`
<span class="ch">BAR 1 — Am (A·C·E)              BAR 2 — Dm (D·F·A)</span>
<span class="pk">    D  U  D  U  D  U  D  U      D  U  D  U  D  U  D  U</span>
e|--------5-----------8------|--------5-----------10------|
B|---------------------------|----------------------------|
G|--5--9-----9--5--9-----9---|--7--10----10-7--10----10---|
D|---------------------------|----------------------------|
A|---------------------------|----------------------------|
E|---------------------------|----------------------------|
`),
            },
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  Strict alternate picking <b>across the skip</b> — that upstroke
                  landing on the high e is the hard yard. The B string never makes a
                  sound: fretting-hand finger pads lie across it the whole time. When
                  both bars run clean, chain them: i–iv, looped, is already a riff.
                </>
              ),
            },
            {
              kind: "ladder",
              ladder: {
                label: "Tempo Ladder · 16th notes",
                rungs: [70, 80, 90, 100, 110, 120],
                gate: 120,
              },
            },
          ],
        },
      ],
    },
    {
      id: "block-c",
      eyebrow: "Block C · Sweep Day · 20 Minutes",
      title: "Sweep Picking",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: "One pick motion, multiple strings, every note its own event. The cardinal sin is the chord blur — if two notes ring together, it's strumming, not sweeping. Fretting fingers roll on and off like pistons.",
        },
        {
          kind: "card",
          code: "C1",
          title: "Three-String Etude — Am · F · G",
          body: [
            { kind: "xref", body: "Theory Link · Triads in A Minor, i – VI – VII" },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Why it's music:</b> the i–bVI–bVII cadence — the most metal
                  chord move in existence — played as rolling three-string sweeps.
                  This is the Yngwie engine and Jason Becker's playground, scaled to
                  Level 2: three strings now, five in Level 3.
                </>
              ),
            },
            {
              kind: "tab",
              tab: parseTab(`
<span class="ch">    Am                   F                    G</span>
<span class="pk">    D  D  D        U  U  D  D  D        U  U  D  D  D        U  U  </span>
e|--------12h17p12-------------8h13p8---------------10h15p10---------|
B|-----13----------13-------10----------10-------12----------12------|
G|--14----------------14-10----------------10-12----------------12---|
D|-------------------------------------------------------------------|
A|-------------------------------------------------------------------|
E|-------------------------------------------------------------------|
`),
            },
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  One continuous downstroke <b>falls through</b> G–B–e (don't pick
                  three times — glide), hammer to the extension, pull back, then drag
                  one upstroke back through. One arpeggio cycle per click. Each chord
                  gets one beat: Am, F, G, then back to Am. <b>Mute behind the roll</b>{" "}
                  — the fretting finger lifts the instant the next note sounds.
                </>
              ),
            },
            {
              kind: "ladder",
              ladder: {
                label: "Tempo Ladder · one full cycle per beat",
                rungs: [50, 60, 70, 80, 90, 100],
                gate: 100,
              },
            },
          ],
        },
        {
          kind: "card",
          code: "C2",
          title: "The V Door — E Major into A Minor",
          body: [
            {
              kind: "xref",
              body: "Theory Link · Harmonic Minor's V–i Cadence — Theory L2 Core",
            },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Why it's music:</b> E major sweeping into A minor is the V–i
                  cadence — the beating heart of neoclassical metal. That G# inside
                  the E chord is harmonic minor's raised seventh, and it <b>aches</b>{" "}
                  to resolve up to A. Your hands learned this pull in Level 1's
                  gallop; now you're wielding it on purpose.
                </>
              ),
            },
            {
              kind: "tab",
              tab: parseTab(`
<span class="ch">    E (V)                Am (i)</span>
<span class="pk">    D  D  D        U  U  D  D  D        U  U  </span>
e|--------7h12p7---------------12h17p12---------|
B|-----9-----------9--------13----------13------|
G|--9-----------------9--14----------------14---|
D|----------------------------------------------|
A|----------------------------------------------|
E|----------------------------------------------|
`),
            },
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  Tension, release. Lean on the E chord — let it feel unstable — then
                  land the Am like a verdict. Loop V–i until the resolution is
                  automatic. Then reverse it (i–V) and feel the question mark it
                  leaves hanging. <b>This one cadence is half of Yngwie's vocabulary.</b>
                </>
              ),
            },
            {
              kind: "ladder",
              ladder: {
                label: "Tempo Ladder · one full cycle per beat",
                rungs: [50, 58, 66, 74, 82, 90],
                gate: 90,
              },
            },
          ],
        },
      ],
    },
    {
      id: "block-d",
      eyebrow: "Block D · Sweep Day · 15 Minutes",
      title: "Two-Handed Tapping",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: "The picking hand joins the fretboard. Taps are struck with the middle finger's tip, driven by arm weight — never a jab. The pick stays parked between thumb and index.",
        },
        {
          kind: "card",
          code: "D1",
          title: "The Melodic Tap Line — Tap Carries the Tune",
          body: [
            { kind: "xref", body: "Theory Link · Melody Over Static Harmony" },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Why it's music:</b> the fretting hand holds A and C — your home
                  harmony — while the tapping finger walks a melody: E, F, G, F. The
                  tap isn't a stunt here, it's the <b>singer</b>. This is how Van
                  Halen actually used the technique, and how Nilsson still does.
                </>
              ),
            },
            {
              kind: "tab",
              tab: parseTab(`
<span class="ch">    E                F                G                F</span>
e|--t12p5h8-t12p5h8--t13p5h8-t13p5h8--t15p5h8-t15p5h8--t13p5h8-t13p5h8--|
B|----------------------------------------------------------------------|
G|----------------------------------------------------------------------|
D|----------------------------------------------------------------------|
A|----------------------------------------------------------------------|
E|----------------------------------------------------------------------|
`),
            },
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  Triplets: tap, pull to 5, hammer to 8 — three even notes, no
                  galloping. The pull-off from the tap is a sideways flick, same law
                  as legato. Unused strings are muted by the fretting index lying flat
                  and the tapping palm resting low. <b>When clean, write your own tap
                  melody</b> from any A minor tones — same frame, your tune.
                </>
              ),
            },
            {
              kind: "ladder",
              ladder: {
                label: "Tempo Ladder · triplets",
                rungs: [80, 92, 104, 116, 126],
                gate: 126,
              },
            },
          ],
        },
      ],
    },
    {
      id: "block-e",
      eyebrow: "Block E · Split Across Both Days · 10 Minutes",
      title: "Velocity Lab",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: "Raw speed, built two ways: sustained (tremolo) and explosive (bursts). Bursts run on Legato Day; tremolo runs on Sweep Day.",
        },
        {
          kind: "card",
          code: "E1",
          title: "Tremolo Melody — The Melodeath Engine",
          body: [
            {
              kind: "xref",
              body: "Theory Link · Aeolian Melody · Scar Symmetry's Rhythm Bed",
            },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Why it's music:</b> tremolo picking is only noise until it
                  carries a tune. This one descends A–G–F–E — a real Aeolian melody
                  line, the exact move under half the Scar Symmetry catalog. One note
                  per beat, picked into a blur.
                </>
              ),
            },
            {
              kind: "tab",
              tab: parseTab(`
<span class="ch">    A       G       F       E</span>
<span class="pk">    D U D U D U D U D U D U D U D U</span>
D|--7-7-7-7-5-5-5-5-3-3-3-3-2-2-2-2---|
A|------------------------------------|
E|------------------------------------|
`),
            },
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  Sixteenths shown; at the gate, double to 32nds and hold the blur
                  even. The note <b>changes exactly on the click</b> — a late shift is
                  a failed rep. Wrist motion only, forearm loose; the moment the
                  forearm pumps tight, drop two rungs and rebuild.
                </>
              ),
            },
            {
              kind: "ladder",
              ladder: {
                label: "Tempo Ladder · 16th notes",
                rungs: [120, 136, 152, 164, 176],
                gate: 176,
              },
            },
          ],
        },
        {
          kind: "card",
          code: "E2",
          title: "Six-Shot Bursts — Fire and Release",
          body: [
            { kind: "xref", body: "Theory Link · 3NPS Cells as Ammunition" },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Why it's music:</b> the first six notes of the Aeolian mother
                  shape, fired as a single sextuplet round — then three full beats of
                  silence. Bursts teach your hands top speed without the tension tax
                  of holding it. <b>The rest is the exercise.</b>
                </>
              ),
            },
            {
              kind: "tab",
              tab: parseTab(`
<span class="ch">BEAT 1: FIRE          BEATS 2–4: silence, reset, breathe</span>
<span class="pk">    D U D U D U</span>
A|--------5-7-8---------|
E|--5-7-8---------------|
D|----------------------|
`),
            },
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  Explode, release, reset, fire again on the next bar. Hands must
                  return to <b>full relaxation</b> during the rest — that release
                  reflex is the actual skill being trained. Burst tempo can sit 15–20
                  BPM above your sustained A-block tempo; that's the point. When 5–7–8
                  across E and A is clean, burst any six-note window of the shape.
                </>
              ),
            },
            {
              kind: "ladder",
              ladder: {
                label: "Tempo Ladder · sextuplet bursts",
                rungs: [80, 92, 104, 116, 126],
                gate: 126,
              },
            },
          ],
        },
      ],
    },
    {
      id: "session",
      eyebrow: "The Daily Hour · Two-Day Rotation",
      title: "Session Split",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: (
            <>
              Level 2 carries too much steel for one hour. So we rotate:{" "}
              <b>Legato Day</b> and <b>Sweep Day</b>, alternating, six days a week
              minimum. Both days carry five minutes of Level 1 maintenance — gates
              you've cleared stay cleared, or they didn't count.
            </>
          ),
        },
        { kind: "daytag", tag: "Day One", label: "Legato Day" },
        {
          kind: "table",
          head: ["Clock", "Block", "Orders"],
          rows: [
            [cell("0:00–0:05", true), cell(<b>Warm-up v2</b>), cell("Full protocol plus the gentle legato lap. Non-negotiable.")],
            [cell("0:05–0:25", true), cell(<b>Block A — Legato</b>), cell("Rotate A1 / A2 / A3. The modal shapes (A3) run at least every other Legato Day.")],
            [cell("0:25–0:35", true), cell(<b>Block B — Skipping</b>), cell("B1 both bars, then chained. Inside-pick crossings get extra reps.")],
            [cell("0:35–0:45", true), cell(<b>E2 — Bursts</b>), cell("Fire and release. Stop the set the instant relaxation stops returning.")],
            [cell("0:45–0:50", true), cell(<b>Level 1 maintenance</b>), cell("One L1 drill at its gate tempo, first take. Log pass/fail.")],
            [cell("0:50–0:55", true), cell(<b>Speed push</b>), cell("ONE drill, one rung above clean. Controlled chaos, then back off.")],
            [cell("0:55–1:00", true), cell(<b>Cool-down + log</b>), cell("Hardest passage at 50% tempo, flawless. Write down every BPM.")],
          ],
        },
        { kind: "daytag", tag: "Day Two", label: "Sweep Day" },
        {
          kind: "table",
          head: ["Clock", "Block", "Orders"],
          rows: [
            [cell("0:00–0:05", true), cell(<b>Warm-up v2</b>), cell("Same law. Sweeps on cold hands are how rolls turn to mud.")],
            [cell("0:05–0:25", true), cell(<b>Block C — Sweeps</b>), cell("C1 etude first, then C2 cadence. Slow enough to hear every note die before the next.")],
            [cell("0:25–0:40", true), cell(<b>Block D — Tapping</b>), cell("D1, then two minutes writing your own tap melody inside A minor.")],
            [cell("0:40–0:48", true), cell(<b>E1 — Tremolo</b>), cell("The melody, locked to the click. Forearm stays loose or the set ends.")],
            [cell("0:48–0:53", true), cell(<b>Level 1 maintenance</b>), cell("A different L1 drill than yesterday. First take, log it.")],
            [cell("0:53–0:58", true), cell(<b>Speed push</b>), cell("ONE drill, one rung up. Then release it.")],
            [cell("0:58–1:00", true), cell(<b>Cool-down + log</b>), cell("Slow-motion replay, then the logbook. Always the logbook.")],
          ],
        },
      ],
    },
    {
      id: "standard",
      eyebrow: "Graduation Criteria · Pass / Fail",
      title: "The Standard v2",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: (
            <>
              The five Level 1 checks still rule every rep. Level 2 adds two more,
              because the new techniques invent new ways to cheat. A rep passes only
              if it clears <b>all seven at once</b>. Graduation: every drill at its
              gate, four clean reps, first take on demand — plus the final exam:{" "}
              <b>
                C2's V–i cadence flowing straight into D1's tap melody, back to
                back, from memory
              </b>
              , and one Level 1 drill of the examiner's choosing.
            </>
          ),
        },
        {
          kind: "standard",
          checks: [
            { title: "Every Note Speaks", body: "Carried from Level 1. No ghosts, no flams, no swallowed notes." },
            { title: "Silence Between the Notes", body: "Carried from Level 1. Muting is judged as hard as playing — doubly so across skipped strings." },
            { title: "Locked to the Click", body: "Carried from Level 1. No drift across four bars, no late tremolo shifts." },
            { title: "Even Attack", body: "Carried from Level 1. Down and up indistinguishable." },
            { title: "Zero Tension", body: "Carried from Level 1. One more minute always possible, or the rep is void." },
            {
              title: "Legato Parity — New",
              isNew: true,
              body: (
                <>
                  Hammered, pulled, and tapped notes match picked notes in{" "}
                  <b>volume and tone</b>. If the pick is louder than the fingers, the
                  fingers failed.
                </>
              ),
            },
            {
              title: "One Note at a Time — New",
              isNew: true,
              body: (
                <>
                  Sweeps articulate as single events:{" "}
                  <b>each note dies as the next is born.</b> Any two notes ringing
                  together turns the rep into a strum, and strums fail.
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      id: "tendon",
      blocks: [
        {
          kind: "tendon",
          eyebrow: "Non-Negotiable · Career Insurance",
          title: "The Tendon Law v2",
          items: [
            <>
              <b>All of Level 1's law still stands.</b> Sharp pain = full stop now.
              Tingling or numbness = 24 hours off. Never sprint cold.
            </>,
            <>
              <b>Know burn from harm:</b> muscle burn in the forearm during legato =
              end the set and shake out. Sharp, electric, or joint-line pain = end the
              day.
            </>,
            <>
              <b>Taps are arm weight, not finger jabs.</b> If the tapping fingertip is
              sore after ten minutes, you're stabbing. Lighten up — the amp does the
              loudness.
            </>,
            <>
              <b>The harmonic minor stretch (B string 6–9–10) is earned gradually.</b>{" "}
              Warm hands only, never force the pinky. If it strains, play it as 6–9
              and add the 10 next week.
            </>,
            <>
              <b>Sweep grip stays soft.</b> A death grip on the pick telegraphs
              straight up the wrist. Hold it like it's borrowed.
            </>,
            <>
              <b>Micro-breaks:</b> 3 minutes hands-off every 25 playing. Soreness past
              48 hours = rest day plus drop two rungs on return.
            </>,
            <>
              Your hands are still the entire career.{" "}
              <b>Level 2 loads them harder — protect them harder.</b>
            </>,
          ],
        },
      ],
    },
  ],
  footer: (
    <>
      <p>
        LOG YOUR BPMs DAILY —{" "}
        <b>the ladder only counts if you write it down.</b>
      </p>
      <p>
        NEXT: Level 2 graduation unlocks <b>Level 3: Progressive Weaponry</b> —
        technique combos, five-string sweeps, odd meters, and the full sequence
        toolkit. The arsenal is loaded. Earn the war. 🤘
      </p>
    </>
  ),
};
