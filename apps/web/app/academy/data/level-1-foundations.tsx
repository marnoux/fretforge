import { type Sheet, cell, parseTab } from "../types";

export const level1: Sheet = {
  meta: {
    track: "Fretforge · Practical Shred Track",
    level: "Level 1 of 5 · Drill Sheet",
    title: "Foundations of Fury",
    specs: [
      { label: "KEY", value: "A MINOR" },
      { label: "TUNING", value: "E A D G B e" },
      { label: "PICKING", value: "STRICT ALTERNATE, START ON D" },
      { label: "TOOL", value: "METRONOME — ALWAYS" },
    ],
    navLabel: "Sheet sections",
    docTitle: "Level 1: Foundations of Fury — Practical Shred Drill Sheet",
    description:
      "Level 1 practical shred drill sheet — eight drills across picking, fretting, rhythm, and riffs, all in A minor.",
  },
  nav: [
    { id: "legend", label: "Legend" },
    { id: "warmup", label: "Warm-up" },
    { id: "block-a", label: "Block A · Picking" },
    { id: "block-b", label: "Block B · Fretting" },
    { id: "block-c", label: "Block C · Rhythm" },
    { id: "block-d", label: "Block D · Riffs" },
    { id: "session", label: "Daily Session" },
    { id: "standard", label: "The Standard" },
    { id: "tendon", label: "Tendon Law" },
  ],
  sections: [
    {
      id: "legend",
      eyebrow: "Read This First",
      title: "How This Sheet Works",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: "Eight drills, four blocks, one home key. Every exercise here is real music in A minor — scale lines, arpeggio cells, and riffs you'd actually play on stage. No spider crawls, no chromatic finger gymnastics. The fretboard is an instrument, not a typewriter.",
        },
        {
          kind: "prose",
          tone: "lede",
          body: (
            <>
              Each drill carries a <b>tempo ladder</b>. You start at the bottom
              rung and you earn every step: <b>four consecutive clean repeats</b>{" "}
              that pass The Standard moves you up one rung. Two failed attempts
              drops you down one. The glowing rung is the <b>gate</b> — clear it
              on every drill and Level 1 is yours.
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
              {" = upstroke   h = hammer-on   p = pull-off\nPM = palm mute   ~ = let ring / vibrato   Strings top→bottom: e B G D A E"}
            </>
          ),
        },
      ],
    },
    {
      id: "warmup",
      eyebrow: "Before Anything Else · 5 Minutes",
      title: "Warm-Up Protocol",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: (
            <>
              Cold tendons don't shred — they tear. Two minutes off the guitar:
              shake the hands out, slow gentle wrist circles, warm them up (warm
              water works). Then three minutes on the guitar: A minor pentatonic
              at <b>60 BPM in eighth notes</b>, featherweight fretting pressure,
              just enough to sound the note. You're oiling the machine, not
              testing it.
            </>
          ),
        },
        {
          kind: "prose",
          tone: "note",
          body: "Hard rule: no drill runs at max tempo until the warm-up is done. Zero exceptions, even on the days you feel invincible — especially on those days.",
        },
      ],
    },
    {
      id: "block-a",
      eyebrow: "Block A · 15 Minutes Daily",
      title: "The Picking Engine",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: "Strict alternate picking. Down-up, no cheating, no economy shortcuts yet — that's a Level 2 weapon. Right now we build the metronome into your wrist.",
        },
        {
          kind: "card",
          id: "a1",
          code: "A1",
          title: "Fours on the High E — A Minor Climb",
          body: [
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Why it's music:</b> this is the classic "sequence of fours"
                  climbing A natural minor up one string — the exact pattern
                  Petrucci runs in warm-ups, and your first taste of the sequence
                  toolkit coming later in the curriculum. It teaches horizontal
                  fretboard vision while your picking hand learns pure, even
                  alternation.
                </>
              ),
            },
            {
              kind: "tab",
              tab: parseTab(`
<span class="pk">    D  U  D  U  D  U  D  U  D  U  D  U  D  U  D  U</span>
e|--5--7--8--7--7--8--10-8--8--10-12-10-10-12-13-12---|
B|------------------------------------------------------|
G|------------------------------------------------------|
D|------------------------------------------------------|
A|------------------------------------------------------|
E|------------------------------------------------------|
`),
            },
            {
              kind: "prose",
              tone: "cap",
              body: "Sixteenth notes. Shift positions with finger 1 leading. Every note picked, every note even — the shift between cells is where sloppiness hides. Loop it, then reverse it back down.",
            },
            {
              kind: "ladder",
              ladder: {
                label: "Tempo Ladder · 16th notes",
                rungs: [60, 70, 80, 90, 100, 110, 120],
                gate: 120,
              },
            },
          ],
        },
        {
          kind: "card",
          id: "a2",
          code: "A2",
          title: "Pentatonic Box Circuit — Position 1",
          body: [
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Why it's music:</b> A minor pentatonic, fifth position — the
                  bedrock box every metal solo you love grew out of.
                  Alternate-picking it forces the hard part early: clean string
                  crossing, twelve crossings per lap.
                </>
              ),
            },
            {
              kind: "tab",
              tab: parseTab(`
<span class="ch">ASCEND</span>
<span class="pk">    D U D U D U D U D U D U</span>
e|----------------------5-8---|
B|------------------5-8-------|
G|--------------5-7-----------|
D|----------5-7---------------|
A|------5-7-------------------|
E|--5-8-----------------------|

<span class="ch">DESCEND — picking continues unbroken, first note lands on D</span>
<span class="pk">    D U D U D U D U D U D U</span>
e|--8-5-----------------------|
B|------8-5-------------------|
G|----------7-5---------------|
D|--------------7-5-----------|
A|------------------7-5-------|
E|----------------------8-5---|
`),
            },
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  Fingers 1 and 3 on the 5–7 strings, 1 and 4 on the 5–8 strings.
                  Fretting-hand fingertips mute the string above; picking-hand
                  palm shadows the strings below.{" "}
                  <b>Silence everywhere you're not playing.</b>
                </>
              ),
            },
            {
              kind: "ladder",
              ladder: {
                label: "Tempo Ladder · 16th notes",
                rungs: [60, 70, 80, 90, 100, 110, 120],
                gate: 120,
              },
            },
          ],
        },
        {
          kind: "card",
          id: "a3",
          code: "A3",
          title: "Am7 Crossing Cells — Outside vs Inside",
          body: [
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Why it's music:</b> these four notes — A, C, E, G — are
                  literally an <b>Am7 arpeggio</b>. Two tiny loops that isolate
                  the two string-crossing mechanics: outside picking (pick travels
                  around both strings) and inside picking (pick trapped between
                  them). Inside will feel worse. That's why we drill it.
                </>
              ),
            },
            {
              kind: "tab",
              tab: parseTab(`
<span class="ch">CELL 1 — OUTSIDE PICKING (looped)</span>
<span class="pk">    D U D U D U D U</span>
e|----5---8---5---8---|
B|--5---8---5---8-----|
G|--------------------|
D|--------------------|
A|--------------------|
E|--------------------|

<span class="ch">CELL 2 — INSIDE PICKING (looped)</span>
<span class="pk">    D U D U D U D U</span>
e|--5---8---5---8-----|
B|----5---8---5---8---|
G|--------------------|
D|--------------------|
A|--------------------|
E|--------------------|
`),
            },
            {
              kind: "prose",
              tone: "cap",
              body: "Loop each cell for one minute straight. Your inside-picking gate tempo will lag the outside one — log them separately. When they match, you've fixed a weakness most players carry for years.",
            },
            {
              kind: "ladder",
              ladder: {
                label: "Tempo Ladder · 16th notes",
                rungs: [70, 80, 90, 100, 110, 120, 130],
                gate: 130,
              },
            },
          ],
        },
      ],
    },
    {
      id: "block-b",
      eyebrow: "Block B · 10 Minutes Daily",
      title: "The Fretting Hand",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: "Finger independence and the three-note-per-string framework — the positional system every scale, mode, and run in this curriculum is built on from here to Level 5.",
        },
        {
          kind: "card",
          id: "b1",
          code: "B1",
          title: "3NPS Aeolian Climb — The Mother Shape",
          body: [
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Why it's music:</b> A natural minor (Aeolian), three notes
                  per string, fifth position. This is the single most important
                  shape in the entire academy — the chassis your modes, sequences,
                  and 200 BPM runs all bolt onto later. Learn it cold now.
                </>
              ),
            },
            {
              kind: "tab",
              tab: parseTab(`
<span class="ch">ASCEND — 18 notes</span>
<span class="pk">    D U D U D U D U D U D U D U D U D U</span>
e|--------------------------------5-7-8---|
B|--------------------------5-6-8---------|
G|--------------------5-7-9---------------|
D|--------------5-7-9---------------------|
A|--------5-7-8---------------------------|
E|--5-7-8---------------------------------|

<span class="ch">DESCEND — the top C is struck twice (U up, D back down); alternation never breaks</span>
<span class="pk">    D U D U D U D U D U D U D U D U D U</span>
e|--8-7-5---------------------------------|
B|--------8-6-5---------------------------|
G|--------------9-7-5---------------------|
D|--------------------9-7-5---------------|
A|--------------------------8-7-5---------|
E|--------------------------------8-7-5---|
`),
            },
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  Fingering: <b>1-3-4</b> on every string except G and D's 5-7-9
                  stretch (<b>1-2-4</b>) and B's 5-6-8 (<b>1-2-4</b>). Thumb behind
                  the neck, knuckles parallel to the fretboard, fingertips hovering
                  — no flying fingers.
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
        {
          kind: "card",
          code: "B2",
          title: "Diatonic Trill Ladder — Independence That Sings",
          body: [
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Why it's music:</b> every trill pair here is a real interval
                  inside A minor — E→F, F→G, G→A on the B string; C→D, D→E on the G
                  string. You're building the finger pairs (1+2, 2+4, 1+3) that
                  legato lives on in Level 2, using notes that actually belong to
                  the key.
                </>
              ),
            },
            {
              kind: "tab",
              tab: parseTab(`
<span class="ch">B STRING — pairs: 5h6 = fingers 1+2 · 6h8 = 2+4 · 8h10 = 1+3</span>
B|--5h6p5h6p5h6p5h6--6h8p6h8p6h8p6h8--8h10p8h10p8h10p8h10--|

<span class="ch">G STRING — pairs: 5h7 = fingers 1+3 · 7h9 = 2+4</span>
G|--5h7p5h7p5h7p5h7--7h9p7h9p7h9p7h9--|
`),
            },
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  Pick <b>only the first note of each group</b> (downstroke);
                  everything after is hammered and pulled. Even sixteenths — the
                  pull-offs must be as loud as the hammers. If a finger pair is
                  weak, it gets double time. The weak pair is the assignment.
                </>
              ),
            },
            {
              kind: "ladder",
              ladder: {
                label: "Tempo Ladder · 16th notes, legato",
                rungs: [60, 70, 80, 90, 100],
                gate: 100,
              },
            },
          ],
        },
      ],
    },
    {
      id: "block-c",
      eyebrow: "Block C · 10 Minutes Daily",
      title: "Rhythm & Chunk",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: "Lead chops without a rhythm hand are a body without a spine. This block locks your palm mute and your gallop to the click.",
        },
        {
          kind: "card",
          id: "c4",
          code: "C1",
          title: "The Gallop Progression — Am · C · G · E5",
          body: [
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Why it's music:</b> a real i–III–VII–V progression in A minor,
                  ridden on the classic gallop (eighth + two sixteenths — the
                  Maiden engine). And feel that last E5 yank you back home to Am:
                  that pull is the doorway into <b>harmonic minor</b>, which the
                  Theory track kicks open in Level 2. Your hands are learning the
                  lesson before your brain gets it.
                </>
              ),
            },
            {
              kind: "tab",
              tab: parseTab(`
<span class="ch">    A5                              C5</span>
<span class="pk">    D   D U D   D U D   D U D   D U D   D U D   D U D   D U D   D U</span>
e|------------------------------------------------------------------|
B|------------------------------------------------------------------|
G|------------------------------------------------------------------|
D|------------------------------------------------------------------|
A|--7-------------------------------10------------------------------|
E|--5---5-5-5---5-5-5---5-5-5---5-5-8---8-8-8---8-8-8---8-8-8---8-8-|

<span class="ch">    G5                              E5</span>
<span class="pk">    D   D U D   D U D   D U D   D U D   D U D   D U D   D U D   D U</span>
e|------------------------------------------------------------------|
B|------------------------------------------------------------------|
G|------------------------------------------------------------------|
D|------------------------------------------------------------------|
A|--5-------------------------------2-------------------------------|
E|--3---3-3-3---3-3-3---3-3-3---3-3-0---0-0-0---0-0-0---0-0-0---0-0-|
`),
            },
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  <b>Palm mute everything except the beat-1 chord stab</b> — let
                  that one bark, then clamp back down. Gallop picking is D, then
                  D-U on the sixteenth pair. The mute lives on the bridge saddles,
                  not halfway up the strings; chunk, not mud.
                </>
              ),
            },
            {
              kind: "ladder",
              ladder: {
                label: "Tempo Ladder · gallops",
                rungs: [80, 95, 110, 125, 140, 160],
                gate: 160,
              },
            },
          ],
        },
      ],
    },
    {
      id: "block-d",
      eyebrow: "Block D · 10 Minutes Daily",
      title: "Application Riffs — Free Play That Counts",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: "The final block is where the drills stop being drills. Two mini-riffs built from the exact DNA of the two house masters. Memorize them, then start bending them into your own shapes.",
        },
        {
          kind: "card",
          code: "D1",
          title: "The Pedal-Point Engine — Petrucci DNA",
          body: [
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Why it's music:</b> a driving low-A pedal with a melody
                  climbing E–F–G–A on top — the exact riff architecture behind half
                  the Dream Theater catalog. Pedal point is core curriculum
                  vocabulary; this is your first working model of it.
                </>
              ),
            },
            {
              kind: "tab",
              tab: parseTab(`
<span class="pk">    D U D U D U D U D U D U D U D U</span>
e|------------------------------------|
B|------------------------------------|
G|------------------------------------|
D|------2-------3-------5-------7-----|
A|--0-0---0-0-0---0-0-0---0-0-0---0---|
E|------------------------------------|
`),
            },
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  Sixteenths, strict alternation — notice the melody notes always
                  land on an <b>upstroke's neighbor</b>; don't let them flam.
                  Palm-mute the open-A pedal, let the D-string melody notes ring
                  just slightly above the chug. When it's clean, try moving the
                  melody to other A minor tones. Now you're writing.
                </>
              ),
            },
            {
              kind: "ladder",
              ladder: {
                label: "Tempo Ladder · 16th notes",
                rungs: [70, 82, 94, 106, 116, 126],
                gate: 126,
              },
            },
          ],
        },
        {
          kind: "card",
          code: "D2",
          title: "The Singing Cell — Nilsson DNA",
          body: [
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Why it's music:</b> Per Nilsson's whole game is melody first,
                  velocity second. This eight-note phrase rises E–G–A–C, peaks, and
                  falls back to rest on A — a complete musical sentence. Speed is
                  not the gate here. <b>Tone is.</b>
                </>
              ),
            },
            {
              kind: "tab",
              tab: parseTab(`
<span class="ch">BAR 1 — eighth notes</span>
<span class="pk">    D  U  D  U  D  U  D  U</span>
e|--------5--8--7--5----------|
B|--5--8--------------8--6----|
G|----------------------------|
D|----------------------------|
A|----------------------------|
E|----------------------------|

<span class="ch">BAR 2 — land and sing</span>
<span class="pk">    D       U</span>
e|----------5~~~~~~~~~|
B|--5-----------------|
G|--------------------|
D|--------------------|
A|--------------------|
E|--------------------|
`),
            },
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  That final A gets <b>real vibrato</b> — wide, even, from the
                  wrist. Hold it a full two beats and listen hard: is it in tune at
                  the top of the bend? This phrase is your daily proof that you're a
                  musician building technique, not a technician hoping to find music
                  later.
                </>
              ),
            },
            {
              kind: "ladder",
              ladder: {
                label: "Tempo Ladder · 8th notes — gate is tone, not speed",
                rungs: [70, 80, 90, 100],
                gate: 100,
              },
            },
          ],
        },
      ],
    },
    {
      id: "session",
      eyebrow: "The Daily Hour",
      title: "Session Structure",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: "Sixty minutes, run in order, every day. Short and daily beats long and occasional — tendons and neurons both learn on repetition, not heroics.",
        },
        {
          kind: "table",
          head: ["Clock", "Block", "Orders"],
          rows: [
            [
              cell("0:00–0:05", true),
              cell(<b>Warm-up protocol</b>),
              cell("Off-guitar mobilization, then 60 BPM pentatonic eighths. Non-negotiable."),
            ],
            [
              cell("0:05–0:20", true),
              cell(<b>Block A — Picking</b>),
              cell("Rotate A1 / A2 / A3. Current weakest drill gets the most minutes."),
            ],
            [
              cell("0:20–0:30", true),
              cell(<b>Block B — Fretting</b>),
              cell("B1 every day. B2 targets whichever finger pair lagged yesterday."),
            ],
            [
              cell("0:30–0:40", true),
              cell(<b>Block C — Rhythm</b>),
              cell("C1 full progression. Record one take per week; the recording is the judge."),
            ],
            [
              cell("0:40–0:50", true),
              cell(<b>Block D — Riffs</b>),
              cell("D1 and D2, then free play: mutate them inside A minor."),
            ],
            [
              cell("0:50–0:55", true),
              cell(<b>Speed push</b>),
              cell("ONE drill, one rung above its current clean tempo. Controlled chaos, then back off."),
            ],
            [
              cell("0:55–1:00", true),
              cell(<b>Cool-down + log</b>),
              cell("Replay today's hardest passage at 50% tempo, flawless. Write down every BPM."),
            ],
          ],
        },
      ],
    },
    {
      id: "standard",
      eyebrow: "Graduation Criteria · Pass / Fail",
      title: "The Standard",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: (
            <>
              Five checks. A rep passes only if it clears <b>all five at once</b>.
              To climb a ladder rung: four consecutive passing reps. To graduate
              Level 1: every drill at its gate tempo, four clean reps,{" "}
              <b>first take on demand</b> — no warm-up takes, no cherry-picking.
              Plus the final exam: D1 and D2 performed back to back from memory.
            </>
          ),
        },
        {
          kind: "standard",
          checks: [
            {
              title: "Every Note Speaks",
              body: (
                <>
                  No ghosted notes, no flams, no swallowed pull-offs.{" "}
                  <b>Each note has a beginning, a body, and an end.</b>
                </>
              ),
            },
            {
              title: "Silence Between the Notes",
              body: "Zero sympathetic ring, zero open-string bleed. Your muting is judged as hard as your playing.",
            },
            {
              title: "Locked to the Click",
              body: (
                <>
                  No drift across four consecutive bars. The metronome disappears
                  when you're truly on it —{" "}
                  <b>if you can hear it fighting you, you failed the rep.</b>
                </>
              ),
            },
            {
              title: "Even Attack",
              body: "Downstrokes and upstrokes indistinguishable in volume and tone. Inside crossings as confident as outside.",
            },
            {
              title: "Zero Tension",
              body: (
                <>
                  Shoulders down, wrist loose, breathing normal.{" "}
                  <b>You could play one more minute at this tempo without strain</b>{" "}
                  — if not, the rep doesn't count, no matter how clean it sounded.
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
          title: "The Tendon Law",
          items: [
            <>
              <b>Sharp pain = full stop. Now.</b> Pain is not weakness leaving the
              body — it's the body filing a formal complaint.
            </>,
            <>
              <b>Tingling or numbness</b> = stop and take 24 hours off the
              instrument. No exceptions, no "one more run."
            </>,
            <>
              <b>Never sprint cold.</b> Max-tempo attempts only after the full
              warm-up protocol.
            </>,
            <>
              <b>Micro-breaks:</b> 3 minutes of hands-off rest every 25 minutes of
              playing. Shake out, breathe, reset posture.
            </>,
            <>
              <b>Stretch gently after, never aggressively before.</b> Cold static
              stretching is how forearms get hurt.
            </>,
            <>
              <b>Soreness past 48 hours</b> = rest day plus drop two ladder rungs
              when you return. The ladder will still be there.
            </>,
            <>
              Your hands are the entire career. <b>Protect them like one.</b>
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
        NEXT: Level 1 graduation unlocks <b>Level 2: Technical Arsenal</b> —
        legato, sweep picking, and the full modal system in the Theory track. Earn
        it. 🤘
      </p>
    </>
  ),
};
