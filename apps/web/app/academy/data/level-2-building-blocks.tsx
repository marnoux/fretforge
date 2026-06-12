import { type Sheet, cell, parseTab } from "../types";

const modeTab = (raw: string) => ({ kind: "tab" as const, tab: parseTab(raw) });

export const level2Theory: Sheet = {
  meta: {
    track: "Fretforge · Metal Music Theory Track",
    level: "Level 2 of 5 · War Room Companion",
    title: "The Building Blocks",
    specs: [
      { label: "HOME KEY", value: "A MINOR" },
      { label: "FRAMEWORK", value: "3NPS · 5TH POSITION" },
      { label: "COMPANION TO", value: "TECHNICAL ARSENAL" },
      { label: "METHOD", value: "THE SIX-STAGE PROTOCOL" },
    ],
    navLabel: "Companion sections",
    docTitle: "Level 2: The Building Blocks — Metal Music Theory Companion",
    description:
      "Level 2 metal music theory companion — the major scale source code, all seven modes, the minor upgrades, chords, and analysis.",
  },
  nav: [
    { id: "brief", label: "Briefing" },
    { id: "t1", label: "T1 · Source Code" },
    { id: "t2", label: "T2 · Seven Modes" },
    { id: "t3", label: "T3 · Minor Upgrades" },
    { id: "t4", label: "T4 · Chords" },
    { id: "t5", label: "T5 · Analysis" },
    { id: "t6", label: "T6 · Protocol" },
    { id: "standard", label: "The Standard" },
  ],
  sections: [
    {
      id: "brief",
      eyebrow: "Read This First",
      title: "Welcome to the War Room",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: (
            <>
              The Technical Arsenal trains your hands. This document trains the part
              of you that <b>decides what the hands say</b>. Six modules: the major
              scale's source code, all seven modes, the two minor upgrades, chord
              construction, and harmonic analysis — closed out with the Six-Stage
              Protocol that turns every shape in here into vocabulary.
            </>
          ),
        },
        {
          kind: "prose",
          tone: "lede",
          body: (
            <>
              Nothing here is abstract. Every concept points at a drill your hands
              already know — the tags on each module show where. By the end of this
              level you won't just play the V Door cadence; you'll know{" "}
              <b>why the door opens</b>.
            </>
          ),
        },
      ],
    },
    {
      id: "t1",
      eyebrow: "Module T1 · The Foundation",
      title: "The Source Code",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: (
            <>
              One scale generates almost everything in this level: the{" "}
              <b>major scale</b>. Learn its formula and you hold the source code that
              all seven modes are compiled from.
            </>
          ),
        },
        {
          kind: "card",
          id: "th5",
          code: "T1",
          title: "Formulas, Steps, and Two Ways to See a Mode",
          body: [
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>The interval alphabet:</b> one fret = a half step (H). Two frets
                  = a whole step (W). Scale formulas are written as degrees 1–7, where{" "}
                  <b>b lowers a degree one fret</b> and <b># raises it one fret</b>.
                  That's the entire notation system. Master it and you can spell any
                  scale in any key without a chart.
                </>
              ),
            },
            {
              kind: "formula",
              body: <>MAJOR SCALE = W W H W W W H → degrees 1 2 3 4 5 6 7</>,
            },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>The relative trick:</b> A minor and C major contain the{" "}
                  <b>exact same seven notes</b> — A B C D E F G. A minor is C major
                  started from its sixth note. That's why they're called relatives,
                  and it's why everything you gated in Level 1 was secretly
                  major-scale material wearing black.
                </>
              ),
            },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>The parallel trick — this is the metal one:</b> instead of moving
                  the root, <b>hold the root on A and swap the formula</b>. A Aeolian,
                  A Dorian, A Phrygian — same home, different weather. Parallel
                  thinking is how prog writers actually use modes: the riff stays
                  rooted, the color changes around it. Every tab in this document is
                  parallel — rooted on A, fifth position, 3nps — so your ear compares
                  colors directly instead of memorizing disconnected shapes.
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      id: "t2",
      eyebrow: "Module T2 · The Core of Level 2",
      title: "The Seven Personalities",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: (
            <>
              Seven modes, one root, presented on the <b>brightness dial</b> — from
              Lydian's blinding ceiling down to Locrian's basement. Read them in order
              and watch the magic: <b>each mode is exactly one note darker than the
              last.</b> Seven personalities, six single-fret moves apart. All shapes
              below: root A, fifth position, 3nps, ascending — descend everything too.
            </>
          ),
        },
        {
          kind: "card",
          code: "1",
          title: "A Lydian — The Bright Ceiling",
          body: [
            { kind: "dial", label: "Brightness", active: 1 },
            { kind: "formula", body: <>1 2 3 <b>#4</b> 5 6 7 → A B C# <b>D#</b> E F# G#</> },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Signature: the #4.</b> Weightless, floating, a question that never
                  demands an answer. This is Vai's and Satriani's home planet, and the
                  color Dream Theater reaches for in clean, suspended intros. In metal
                  it's the eye of the storm — the dreamy section before the riff
                  returns to break your neck.
                </>
              ),
            },
            modeTab(`
<span class="pk">    D U D U D U D U D U D U D U D U D U</span>
e|------------------------------7-9-11--|
B|------------------------7-9-10--------|
G|------------------6-8-9---------------|
D|------------6-7-9---------------------|
A|------6-7-9---------------------------|
E|--5-7-9-------------------------------|
`),
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  Let the D# hang unresolved over an A drone and feel the float.{" "}
                  <b>Gate: 90 BPM 16ths, picked and legato, plus spell it cold.</b>
                </>
              ),
            },
          ],
        },
        {
          kind: "card",
          code: "2",
          title: "A Ionian — The Major Scale Itself",
          body: [
            { kind: "dial", label: "Brightness", active: 2 },
            { kind: "formula", body: <>1 2 3 4 5 6 7 → A B C# D E F# G# · one darker: <b>#4 → 4</b></> },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Signature: pure, unmodified major.</b> Flatten Lydian's #4 and the
                  float becomes ground — triumphant, anthemic, sword-in-the-air. Power
                  metal choruses live here, and so does the soaring brightness of
                  Jason Becker's "Altitudes." Metal uses Ionian like sunlight:
                  sparingly, so it blinds when it hits.
                </>
              ),
            },
            modeTab(`
<span class="pk">    D U D U D U D U D U D U D U D U D U</span>
e|------------------------------7-9-10--|
B|------------------------7-9-10--------|
G|------------------6-7-9---------------|
D|------------6-7-9---------------------|
A|------5-7-9---------------------------|
E|--5-7-9-------------------------------|
`),
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  Same dial position as your C major relative knowledge — but rooted
                  on A, it's a different animal.{" "}
                  <b>Gate: 90 BPM 16ths plus cold spelling.</b>
                </>
              ),
            },
          ],
        },
        {
          kind: "card",
          code: "3",
          title: "A Mixolydian — Major in a Leather Jacket",
          body: [
            { kind: "dial", label: "Brightness", active: 3 },
            { kind: "formula", body: <>1 2 3 4 5 6 <b>b7</b> → A B C# D E F# <b>G</b> · one darker: <b>7 → b7</b></> },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Signature: the b7 swagger.</b> Drop Ionian's leading tone and the
                  choirboy walks out the back of the bar. This is hard rock's native
                  tongue — AC/DC, classic Priest stomp — and the color Petrucci leans
                  on when a section needs groove instead of grief.
                </>
              ),
            },
            modeTab(`
<span class="pk">    D U D U D U D U D U D U D U D U D U</span>
e|------------------------------7-9-10--|
B|------------------------7-8-10--------|
G|------------------6-7-9---------------|
D|------------5-7-9---------------------|
A|------5-7-9---------------------------|
E|--5-7-9-------------------------------|
`),
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  The major third (C#) keeps it confident; the G keeps it dirty.{" "}
                  <b>Gate: 90 BPM 16ths plus cold spelling.</b>
                </>
              ),
            },
          ],
        },
        {
          kind: "card",
          code: "4",
          title: "A Dorian — Minor With the Lights On",
          body: [
            { kind: "dial", label: "Brightness", active: 4 },
            { kind: "formula", body: <>1 2 <b>b3</b> 4 5 <b>6</b> b7 → A B <b>C</b> D E <b>F#</b> G · one darker: <b>3 → b3</b></> },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Signature: minor's b3 with major's natural 6.</b> The flattened
                  third crosses you into minor territory — but that F# keeps one window
                  open. Hopeful sadness, motion inside melancholy. Petrucci's favorite
                  shade of minor, and the bright-sad color all over prog and
                  fusion-metal.
                </>
              ),
            },
            modeTab(`
<span class="pk">    D U D U D U D U D U D U D U D U D U</span>
e|------------------------------7-8-10--|
B|------------------------7-8-10--------|
G|------------------5-7-9---------------|
D|------------5-7-9---------------------|
A|------5-7-9---------------------------|
E|--5-7-8-------------------------------|
`),
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  Your hands gated this in Arsenal drill A3 — now your brain owns the
                  why. A/B it against Aeolian and listen for the F# smiling.{" "}
                  <b>Gate: 90 BPM 16ths plus cold spelling.</b>
                </>
              ),
            },
          ],
        },
        {
          kind: "card",
          code: "5",
          title: "A Aeolian — Home Base",
          body: [
            { kind: "dial", label: "Brightness", active: 5 },
            { kind: "formula", body: <>1 2 b3 4 5 <b>b6</b> b7 → A B C D E <b>F</b> G · one darker: <b>6 → b6</b></> },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Signature: the b6 gravity.</b> Flatten Dorian's F# and the window
                  closes — this is natural minor, the mother tongue of metal and the
                  home key of this entire academy. Every Level 1 drill, the gallop, the
                  pedal-point riff: all Aeolian. You already live here; now you know the
                  address.
                </>
              ),
            },
            modeTab(`
<span class="pk">    D U D U D U D U D U D U D U D U D U</span>
e|------------------------------5-7-8---|
B|------------------------5-6-8---------|
G|------------------5-7-9---------------|
D|------------5-7-9---------------------|
A|------5-7-8---------------------------|
E|--5-7-8-------------------------------|
`),
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  The mother shape, for the record one more time. Everything in this
                  dial is measured against this sound.{" "}
                  <b>Gate: already cleared in Level 1 — keep it warm.</b>
                </>
              ),
            },
          ],
        },
        {
          kind: "card",
          code: "6",
          title: "A Phrygian — The Menace",
          body: [
            { kind: "dial", label: "Brightness", active: 6 },
            { kind: "formula", body: <>1 <b>b2</b> b3 4 5 b6 b7 → A <b>Bb</b> C D E F G · one darker: <b>2 → b2</b></> },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Signature: the b2 snarl.</b> One half-step above the root sits a
                  note that wants you dead. That Bb-to-A crush is the most aggressive
                  interval move in the book — thrash and death metal riffing runs on
                  it. Slayer, Sepultura, half the Gothenburg catalog: Phrygian is the
                  sound of the threat.
                </>
              ),
            },
            modeTab(`
<span class="pk">    D U D U D U D U D U D U D U D U D U</span>
e|------------------------------6-8-10--|
B|------------------------6-8-10--------|
G|------------------5-7-9---------------|
D|------------5-7-8---------------------|
A|------5-7-8---------------------------|
E|--5-6-8-------------------------------|
`),
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  Riff fuel: hammer the open-position version of b2→1 (Bb to A) over a
                  chug and you've written a thrash riff.{" "}
                  <b>Gate: 90 BPM 16ths plus cold spelling.</b>
                </>
              ),
            },
          ],
        },
        {
          kind: "card",
          code: "7",
          title: "A Locrian — The Basement",
          body: [
            { kind: "dial", label: "Brightness", active: 7 },
            { kind: "formula", body: <>1 b2 b3 4 <b>b5</b> b6 b7 → A Bb C D <b>Eb</b> F G · one darker: <b>5 → b5</b></> },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Signature: the b5 — a tritone sitting where your stable fifth
                  should be.</b> Locrian has no safe home: its own tonic chord is
                  diminished, so it can't truly resolve. That instability is the point.
                  Tech-death and dissonant prog use it as riff material — a place you
                  visit to unsettle, never a place you live.
                </>
              ),
            },
            modeTab(`
<span class="pk">    D U D U D U D U D U D U D U D U D U</span>
e|------------------------------6-8-10--|
B|------------------------6-8-10--------|
G|------------------5-7-8---------------|
D|------------5-7-8---------------------|
A|------5-6-8---------------------------|
E|--5-6-8-------------------------------|
`),
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  The whole dial in one sentence:{" "}
                  <b>
                    Lydian floats, Ionian shines, Mixolydian swaggers, Dorian hopes,
                    Aeolian mourns, Phrygian threatens, Locrian collapses.
                  </b>{" "}
                  Gate: 90 BPM 16ths plus cold spelling.
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      id: "t3",
      eyebrow: "Module T3 · Beyond the Dial",
      title: "The Two Minor Upgrades",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: "The seven modes all come from one source code. Now we modify the source: take Aeolian and surgically raise single degrees. Two upgrades, two of the most important sounds in metal.",
        },
        {
          kind: "card",
          id: "th6",
          code: "HM",
          title: "A Harmonic Minor — The Blade",
          body: [
            { kind: "xref", body: "Hands Already Know It · Arsenal A3 + C2 The V Door" },
            { kind: "formula", body: <>1 2 b3 4 5 b6 <b>7</b> → A B C D E F <b>G#</b> · Aeolian with the 7 raised</> },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Why it exists:</b> natural minor has no leading tone — G just sits
                  there, a whole step shy of home. Raise it to G# and suddenly that
                  note <b>aches</b> upward into A. The raised 7 also turns the v chord
                  major (E becomes E–G#–B), which is the entire mechanism behind the V
                  Door cadence your hands gated in the Arsenal. Side effect: a
                  one-and-a-half-step gap between F and G# — the exotic, neoclassical
                  sound. Yngwie's blade, Becker's too.
                </>
              ),
            },
            modeTab(`
<span class="pk">    D U D U D U D U D U D U D U D U D U</span>
e|------------------------------5-7-8---|
B|------------------------6-9-10--------|
G|------------------5-7-9---------------|
D|------------6-7-9---------------------|
A|------5-7-8---------------------------|
E|--5-7-8-------------------------------|
`),
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  Bonus weapon, filed for Level 3: start this scale from its fifth note
                  (E) and you get <b>Phrygian Dominant</b> — the most metal scale in
                  existence, already waiting on your eight-scale priority list.
                </>
              ),
            },
          ],
        },
        {
          kind: "card",
          code: "MM",
          title: "A Melodic Minor — The Smooth Assassin",
          body: [
            { kind: "xref", body: "New Shape · Run It Through Arsenal A1 + A3 Protocols" },
            { kind: "formula", body: <>1 2 b3 4 5 <b>6 7</b> → A B C D E <b>F# G#</b> · Aeolian with the 6 AND 7 raised</> },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Why it exists:</b> harmonic minor's exotic gap is a feature — until
                  you want a smooth climb. Raise the 6 as well and the gap closes:{" "}
                  <b>minor at the bottom, major at the top.</b> Dark foundation, silk
                  finish. This is the sophisticated minor — jazz's favorite, and the
                  gateway to the Lydian-dominant colors Per Nilsson paints with.
                  Classical players flip back to natural minor on the way down; metal
                  and jazz keep it the same both directions. We keep it.
                </>
              ),
            },
            modeTab(`
<span class="pk">    D U D U D U D U D U D U D U D U D U</span>
e|------------------------------5-7-8---|
B|------------------------7-9-10--------|
G|------------------5-7-9---------------|
D|------------6-7-9---------------------|
A|------5-7-9---------------------------|
E|--5-7-8-------------------------------|
`),
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  A/B test for the ear: play Aeolian, then harmonic, then melodic over
                  an A drone. <b>One raised note at a time — grief, then drama, then
                  elegance.</b> That's composition control in its rawest form.
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      id: "t4",
      eyebrow: "Module T4 · Vertical Theory",
      title: "Chord Construction",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: (
            <>
              Scales are horizontal; chords are the same notes stacked vertically. The
              recipe never changes: <b>take a scale, stack every other note.</b> Root,
              third, fifth — that's a triad. Keep stacking for sevenths and beyond.
            </>
          ),
        },
        {
          kind: "card",
          code: "T4",
          title: "Triads, Sevenths, and the Genderless Power Chord",
          body: [
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>The four triads</b> — every chord quality comes down to where the
                  third and fifth sit:
                </>
              ),
            },
            {
              kind: "table",
              head: ["Quality", "Formula", "On A", "Character"],
              rows: [
                [cell("Major", true), cell("1 · 3 · 5"), cell("A C# E"), cell("Bright, stable, triumphant")],
                [cell("Minor", true), cell("1 · b3 · 5"), cell("A C E"), cell("Dark, stable — metal's home")],
                [cell("Diminished", true), cell("1 · b3 · b5"), cell("A C Eb"), cell("Unstable, clenched, needs out")],
                [cell("Augmented", true), cell("1 · 3 · #5"), cell("A C# E#"), cell("Suspended dread, horror-score")],
              ],
            },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>The power chord decoded:</b> 1 and 5 only — <b>no third, no
                  gender.</b> That's why your E5 worked over A minor in the Level 1
                  gallop while secretly implying harmonic minor's major V: with no third
                  in the chord, your ear fills in whichever third the riff suggests.
                  Power chords aren't simple; they're ambiguous on purpose.
                </>
              ),
            },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Sevenths in sixty seconds:</b> maj7 (1 3 5 7 — dreamy), dom7 (1 3 5
                  b7 — tension engine), m7 (1 b3 5 b7 — smoke), m7b5 (1 b3 b5 b7 — the
                  half-diminished ache), dim7 (1 b3 b5 bb7 — the trapdoor). Your Arsenal
                  drill A3's skipped-string cells were m7 fragments all along.
                </>
              ),
            },
          ],
        },
        {
          kind: "card",
          code: "T4+",
          title: "The Harmonized Scale — Every Chord A Minor Owns",
          body: [
            { kind: "xref", body: "Hands Already Know It · L1 Gallop + Arsenal C1, C2, B1" },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Build a triad on every degree of A natural minor and you get the
                  key's complete chord vocabulary.</b> Memorize this row — every
                  progression you'll ever analyze in this key is assembled from it:
                </>
              ),
            },
            { kind: "formula", body: <>i Am · ii° B° · III C · iv Dm · v Em · VI F · VII G</> },
            modeTab(`
<span class="ch">    Am    B°    C     Dm    Em    F     G     Am</span>
B|--5-----6-----8-----10----12----13----15----17----|
G|--5-----7-----9-----10----12----14----16----17----|
D|--7-----9-----10----12----14----15----17----19----|
`),
            {
              kind: "prose",
              tone: "cap",
              body: (
                <>
                  One ladder of triads up the D–G–B strings — the whole key visible at
                  once. Strum each slowly; hear major, minor, and that clenched
                  diminished on B. <b>The harmonic minor upgrade:</b> raise every G to
                  G# and two chords transform — <b>v Em becomes V E major</b> (the
                  door), and VII G becomes <b>vii° G#dim</b> (the trapdoor beside it).
                  One note, two new weapons.
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      id: "t5",
      eyebrow: "Module T5 · Reading the Riff",
      title: "Harmonic Analysis",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: (
            <>
              Roman numerals are how musicians describe progressions independent of
              key. The rules fit on a pick:{" "}
              <b>UPPERCASE = major, lowercase = minor, ° = diminished.</b> The numeral
              itself is the scale degree the chord is built on. That's it — now you can
              read any progression's skeleton.
            </>
          ),
        },
        {
          kind: "card",
          code: "T5",
          title: "Analyzing Your Own Curriculum",
          body: [
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>You've been playing analyzed progressions since day one.</b>{" "}
                  Here's the curriculum so far, decoded:
                </>
              ),
            },
            {
              kind: "table",
              head: ["Where", "Progression", "Analysis", "What's happening"],
              rows: [
                [cell("L1 · Gallop", true), cell("Am – C – G – E5"), cell("i – III – VII – V"), cell("Diatonic until the E5 — a major V borrowed from harmonic minor. That's why it yanked you home.")],
                [cell("L2 · Sweep C1", true), cell("Am – F – G"), cell("i – VI – VII"), cell("The metal cadence. Pure Aeolian, maximum drama. (You'll also see it written bVI–bVII — same chords, different bookkeeping.)")],
                [cell("L2 · Skip B1", true), cell("Am – Dm"), cell("i – iv"), cell("Minor to minor — doom's favorite slow ache.")],
                [cell("L2 · Sweep C2", true), cell("E – Am"), cell("V – i"), cell("The V Door itself: harmonic minor's whole reason to exist, resolving.")],
              ],
            },
            {
              kind: "prose",
              tone: "why",
              body: (
                <>
                  <b>Now you. Three progressions, all in A minor — analyze before you
                  peek:</b>
                </>
              ),
            },
            {
              kind: "details",
              summary: "1 · Am – G – F – E",
              body: (
                <p>
                  <b>i – VII – VI – V.</b> The lament descent — bass walking A→G→F→E,
                  ending on the borrowed major V. The Andalusian cadence: flamenco's
                  spine and Yngwie's entire postcode. Loop it and improvise harmonic
                  minor over the E.
                </p>
              ),
            },
            {
              kind: "details",
              summary: "2 · Am – F – C – G",
              body: (
                <p>
                  <b>i – VI – III – VII.</b> All four chords straight from the
                  harmonized scale — fully diatonic Aeolian. The arena progression:
                  epic, safe, enormous. Notice III (C) is the relative major hiding
                  inside your minor key.
                </p>
              ),
            },
            {
              kind: "details",
              summary: "3 · Am – Bb – Am",
              body: (
                <p>
                  <b>i – bII – i.</b> Wait — Bb isn't in A minor. Correct: it's borrowed
                  from <b>A Phrygian</b>, the b2 from the brightness dial built into a
                  whole chord. The Phrygian cadence: instant menace, two chords. This is
                  your first taste of modal borrowing — Level 3 weaponizes it fully as
                  modal interchange.
                </p>
              ),
            },
          ],
        },
      ],
    },
    {
      id: "t6",
      eyebrow: "Module T6 · The Method",
      title: "The Six-Stage Protocol",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: (
            <>
              From the Academy's scale doctrine: a scale is vocabulary, not exercise —
              and <b>every</b> shape in this companion gets run through all six stages.
              Stage 6 is the finish line; everything before it is the means.
            </>
          ),
        },
        {
          kind: "table",
          head: ["Stage", "Name", "Orders"],
          rows: [
            [cell("1", true), cell(<b>Build it</b>), cell("Memorize the interval formula. Spell the scale on A out loud, away from the guitar.")],
            [cell("2", true), cell(<b>Map it</b>), cell("Learn the 3nps shape — the fifth-position tabs in this document are your anchors.")],
            [cell("3", true), cell(<b>Connect it</b>), cell("Kill the boxes: link the anchor shape to its neighbors up and down the neck.")],
            [cell("4", true), cell(<b>Sequence it</b>), cell("Thirds, fours, pedal templates — the bridge from drill to music. Full toolkit drops in Level 3.")],
            [
              cell("5", true),
              cell(<b>Drone it</b>),
              cell(
                <>
                  Loop an A drone. Play each scale tone against it and{" "}
                  <b>name what it does to your gut.</b> This is where formulas become
                  sounds.
                </>,
              ),
            ],
            [cell("6", true), cell(<b>Speak it</b>), cell("Improvise and write. If you can't make the mode say something over a drone, you don't own it yet — return to stage 5.")],
          ],
        },
        {
          kind: "prose",
          tone: "note",
          body: (
            <>
              <b>Level 2 assignment:</b> full six-stage treatment for Dorian, Phrygian,
              harmonic minor, and melodic minor — your eight-scale priority list's core.
              Ionian, Lydian, Mixolydian, and Locrian get stages 1, 2, and 5: know
              them, hear them, deploy them as color. Aeolian was Level 1; keep it warm.
            </>
          ),
        },
      ],
    },
    {
      id: "standard",
      eyebrow: "Graduation Criteria · Pass / Fail",
      title: "The Standard · Theory Edition",
      blocks: [
        {
          kind: "prose",
          tone: "lede",
          body: (
            <>
              Same philosophy as the practical track: five checks, pass/fail, no
              vibes-based grading. Theory you can't deploy under pressure is trivia.{" "}
              <b>Final exam:</b> over an A drone, improvise eight bars each in Aeolian,
              then Dorian, then harmonic minor — switching on cue, making each signature
              note sing. That's stages 5 and 6 turned into a gate.
            </>
          ),
        },
        {
          kind: "standard",
          checks: [
            {
              title: "Spell on Demand",
              body: (
                <>
                  Any of the seven modes plus both minor upgrades, on A:{" "}
                  <b>formula and note names in under ten seconds each</b>, cold, away
                  from the instrument.
                </>
              ),
            },
            {
              title: "Play on Demand",
              body: (
                <>
                  Any parallel shape in this document from its fifth-position anchor,
                  first take, <b>clean at 90 BPM sixteenths</b> — picked and legato.
                </>
              ),
            },
            {
              title: "Hear the Signature",
              body: (
                <>
                  Blind ear check over a drone: Dorian vs Aeolian, Phrygian vs Aeolian,
                  harmonic vs natural minor. <b>Eight out of ten correct</b>,
                  repeatable.
                </>
              ),
            },
            {
              title: "Spell the Harmony",
              body: (
                <>
                  All seven diatonic triads of A natural minor with qualities, plus
                  harmonic minor's V and vii° upgrades —{" "}
                  <b>no hesitation, any order asked.</b>
                </>
              ),
            },
            {
              title: "Analyze Cold",
              body: (
                <>
                  Roman-numeral an unseen four-chord progression in A minor{" "}
                  <b>inside sixty seconds</b>, flagging anything borrowed and naming
                  where it came from.
                </>
              ),
            },
          ],
        },
      ],
    },
  ],
  footer: (
    <>
      <p>
        THEORY YOU CAN'T HEAR IS TRIVIA —{" "}
        <b>drone daily, name what you hear.</b>
      </p>
      <p>
        NEXT: These gates plus the Arsenal's unlock <b>Level 3: Progressive Weaponry</b>{" "}
        — modal interchange, Phrygian Dominant, odd meters, and the sequence toolkit. The
        war room and the dojo are becoming one building. 🤘
      </p>
    </>
  ),
};
