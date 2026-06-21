/**
 * The single source of truth for the FretForge curriculum.
 *
 * Both the Map (`routes/map.tsx`) and the Library (`routes/library.tsx`) derive
 * their views from this file, so the curriculum is authored once instead of in
 * three drifting lists.
 *
 *  - `SHEETS`  — the long-form content documents (drill sheets + theory
 *    companions) the Library lists and the Map links into.
 *  - `ENTRIES` — the content-bearing spine: every drill/theory node on the Map,
 *    keyed by a globally-unique canonical id. `content` points at the sheet +
 *    anchor where that drill lives; `null` means "not written yet" (the Map
 *    shows "Coming soon"). The `anchor` always equals the entry `id`, and the
 *    matching `card` block in the sheet carries the same id (see academy/data/*).
 *
 * Structural Map nodes (start / rest / gate / elite) are NOT curriculum content
 * and live only in the Map layout — they never link to the Library.
 */

export interface SheetMetaRow {
  /** Stable key used by `CurriculumEntry.content.sheetSlug`. */
  slug: string;
  /** Route the Library card links to and the Map deep-links into. */
  route: string;
  /** Badge code shown on the Library card (e.g. "L1", "T2"). */
  code: string;
  /** "Drill Sheet" | "Theory Companion". */
  kind: string;
  title: string;
  /** Key/specialty line (e.g. "A MINOR", "MODAL"). */
  key: string;
  blurb: string;
}

export interface CurriculumEntry {
  /** Globally-unique canonical id (matches the Map node id). */
  id: string;
  /** Visible label on the Map node (sheet-local, may repeat across sheets). */
  code: string;
  title: string;
  sub: string;
  type: "drill" | "theory";
  level: number;
  /** Where this drill's content lives, or null if not written yet. */
  content: { sheetSlug: string; anchor: string } | null;
}

export const SHEETS: SheetMetaRow[] = [
  {
    slug: "foundations-of-fury",
    route: "/drills/foundations-of-fury",
    code: "L1",
    kind: "Drill Sheet",
    title: "Foundations of Fury",
    key: "A MINOR",
    blurb: "Eight drills, four blocks, one home key. The chassis everything else bolts onto.",
  },
  {
    slug: "technical-arsenal",
    route: "/drills/technical-arsenal",
    code: "L2",
    kind: "Drill Sheet",
    title: "Technical Arsenal",
    key: "A MINOR",
    blurb: "Sequences, string skipping, and the sweep mechanics that turn the shape into speed.",
  },
  {
    slug: "building-blocks",
    route: "/theory/building-blocks",
    code: "T2",
    kind: "Theory Companion",
    title: "The Building Blocks",
    key: "MODAL",
    blurb: "Why the notes are the notes — triads and sevenths through the modal system and harmonic minor. The theory spine bridging Levels 2 and 3.",
  },
];

/** Convenience: a content pointer into a sheet, anchored to the entry id. */
const at = (sheetSlug: string, anchor: string) => ({ sheetSlug, anchor });

export const ENTRIES: CurriculumEntry[] = [
  // ── Level 1 — Foundations of Fury ──
  { id: "a1", code: "A1", title: "Fours on High E", sub: "Am Climb · Alt Picking", type: "drill", level: 1, content: at("foundations-of-fury", "a1") },
  { id: "a2", code: "A2", title: "Pentatonic Box", sub: "Position 1 · 12 Crossings", type: "drill", level: 1, content: at("foundations-of-fury", "a2") },
  { id: "a3", code: "A3", title: "String Crossing", sub: "Inside & Outside Picking", type: "drill", level: 1, content: at("foundations-of-fury", "a3") },
  { id: "th1", code: "TH", title: "A Minor Basics", sub: "Key Center · Intervals", type: "theory", level: 1, content: null },
  { id: "b1", code: "B1", title: "3NPS Aeolian Climb", sub: "The Mother Shape", type: "drill", level: 1, content: at("foundations-of-fury", "b1") },
  { id: "b2", code: "B2", title: "Pentatonic Licks", sub: "6-Note Phrases", type: "drill", level: 1, content: null },
  { id: "b3", code: "B3", title: "Diatonic Trill Ladder", sub: "Hammer/Pull Pairs · Legato", type: "drill", level: 1, content: at("foundations-of-fury", "b3") },
  { id: "th2", code: "TH", title: "Fretboard Map", sub: "Note Names · Octaves", type: "theory", level: 1, content: null },
  { id: "b4", code: "B4", title: "Finger Independence", sub: "The Spider Cage", type: "drill", level: 1, content: null },
  { id: "c1", code: "C1", title: "Palm Muting", sub: "Chug Control · Right Hand", type: "drill", level: 1, content: null },
  { id: "c2", code: "C2", title: "Downpicking", sub: "The Hetfield Engine", type: "drill", level: 1, content: null },
  { id: "c3", code: "C3", title: "Power Chords", sub: "Root-5th · The Wall", type: "drill", level: 1, content: null },
  { id: "c4", code: "C4", title: "Gallop Riffing", sub: "The Gallop Progression", type: "drill", level: 1, content: at("foundations-of-fury", "c4") },
  { id: "c5", code: "D1", title: "Pedal-Point Engine", sub: "Petrucci DNA · Riff", type: "drill", level: 1, content: at("foundations-of-fury", "c5") },
  { id: "c6", code: "D2", title: "The Singing Cell", sub: "Nilsson DNA · Phrasing", type: "drill", level: 1, content: at("foundations-of-fury", "c6") },

  // ── Level 2 — Technical Arsenal ──
  { id: "d1", code: "D1", title: "Alternate Picking", sub: "Strict Down-Up Mastery", type: "drill", level: 2, content: null },
  { id: "th3", code: "TH", title: "Picking Mechanics", sub: "Pick Angle · Wrist Motion", type: "theory", level: 2, content: null },
  { id: "d2", code: "D2", title: "Tremolo Picking", sub: "Single-String Speed", type: "drill", level: 2, content: at("technical-arsenal", "d2") },
  { id: "d3", code: "D3", title: "Economy Picking", sub: "One-Way Sweep Crossings", type: "drill", level: 2, content: null },
  { id: "e1", code: "E1", title: "Legato Runs", sub: "Pull-off Chains", type: "drill", level: 2, content: at("technical-arsenal", "e1") },
  { id: "e2", code: "E2", title: "Hammer-from-Nowhere", sub: "Fret-Hand Attack", type: "drill", level: 2, content: null },
  { id: "e3", code: "E3", title: "Two-Hand Tapping", sub: "The Eruption Cell", type: "drill", level: 2, content: at("technical-arsenal", "e3") },
  { id: "f1", code: "F1", title: "Sweep Picking", sub: "3-String Arpeggios", type: "drill", level: 2, content: at("technical-arsenal", "f1") },
  { id: "f2", code: "F2", title: "Pinch Harmonics", sub: "The Squeal", type: "drill", level: 2, content: null },
  { id: "f3", code: "F3", title: "Bends & Vibrato", sub: "Pitch Precision", type: "drill", level: 2, content: null },
  { id: "th4", code: "TH", title: "Arpeggios & Triads", sub: "Shapes Across the Neck", type: "theory", level: 2, content: at("building-blocks", "th4") },
  { id: "f4", code: "F4", title: "Slides & Phrasing", sub: "Legato Connectors", type: "drill", level: 2, content: null },
  { id: "d4", code: "E2", title: "Six-Shot Bursts", sub: "3NPS Cells as Ammunition", type: "drill", level: 2, content: at("technical-arsenal", "d4") },
  { id: "e4", code: "A2", title: "Cascading Sixes", sub: "Descending Sixes Sequence", type: "drill", level: 2, content: at("technical-arsenal", "e4") },
  { id: "e5", code: "A3", title: "New Colors", sub: "Dorian & Harmonic Minor", type: "drill", level: 2, content: at("technical-arsenal", "e5") },
  { id: "f5", code: "B1", title: "Triad Skip Cells", sub: "String Skipping · i→iv", type: "drill", level: 2, content: at("technical-arsenal", "f5") },
  { id: "f6", code: "C2", title: "The V Door", sub: "Harmonic-Minor V → i", type: "drill", level: 2, content: at("technical-arsenal", "f6") },

  // ── Level 3 — Modal Warfare ──
  { id: "g1", code: "G1", title: "Dorian Runs", sub: "Modal Fingerings", type: "drill", level: 3, content: null },
  { id: "th5", code: "TH", title: "The Modal System", sub: "7 Modes of Major", type: "theory", level: 3, content: at("building-blocks", "th5") },
  { id: "g2", code: "G2", title: "Phrygian Dominant", sub: "The Metal Mode", type: "drill", level: 3, content: null },
  { id: "g3", code: "G3", title: "Lydian & Mixolydian", sub: "Bright & Dominant", type: "drill", level: 3, content: null },
  { id: "g4", code: "G4", title: "Locrian & Diminished", sub: "The Dark Edge", type: "drill", level: 3, content: null },
  { id: "th6", code: "TH", title: "Harmonic Minor", sub: "Neoclassical Roots", type: "theory", level: 3, content: at("building-blocks", "th6") },
  { id: "h1", code: "H1", title: "Neoclassical Arps", sub: "Malmsteen Sweeps", type: "drill", level: 3, content: null },
  { id: "h2", code: "H2", title: "Diminished Runs", sub: "Symmetric Shapes", type: "drill", level: 3, content: null },
  { id: "h3", code: "H3", title: "Chord-Tone Targeting", sub: "Intervallic Lines", type: "drill", level: 3, content: null },

  // ── Level 4 — Speed & Precision ──
  { id: "j1", code: "J1", title: "Speed Bursts", sub: "Triplet Explosions", type: "drill", level: 4, content: null },
  { id: "th7", code: "TH", title: "Odd Time & Polyrhythm", sub: "7/8 · 5/4 · Groupings", type: "theory", level: 4, content: null },
  { id: "j2", code: "J2", title: "Metronome Ladder", sub: "Climb to 200 BPM", type: "drill", level: 4, content: null },
  { id: "j3", code: "J3", title: "Picking Endurance", sub: "Sustained Tremolo", type: "drill", level: 4, content: null },
  { id: "k1", code: "K1", title: "5 & 6-String Sweeps", sub: "Full Arpeggio Runs", type: "drill", level: 4, content: null },
  { id: "k2", code: "K2", title: "Tapped Arpeggios", sub: "Right-Hand Extensions", type: "drill", level: 4, content: null },
  { id: "k3", code: "K3", title: "8-Finger Tapping", sub: "Two-Hand Legato", type: "drill", level: 4, content: null },
  { id: "k4", code: "K4", title: "String-Skip Arps", sub: "Wide-Interval Tapping", type: "drill", level: 4, content: null },

  // ── Level 5 — The Final Form ──
  { id: "m1", code: "M1", title: "Technique Integration", sub: "Combining the Arsenal", type: "drill", level: 5, content: null },
  { id: "th8", code: "TH", title: "Composition", sub: "Song Architecture", type: "theory", level: 5, content: null },
  { id: "m2", code: "M2", title: "Hybrid Picking", sub: "Pick & Fingers", type: "drill", level: 5, content: null },
  { id: "m3", code: "M3", title: "Whammy Bar", sub: "Dives & Flutter", type: "drill", level: 5, content: null },
  { id: "n1", code: "N1", title: "Advanced Harmonics", sub: "Tapped & Artificial", type: "drill", level: 5, content: null },
  { id: "n2", code: "N2", title: "Vibrato Mastery", sub: "The Singing Voice", type: "drill", level: 5, content: null },
  { id: "n3", code: "N3", title: "Melodic Phrasing", sub: "Soloing With Intent", type: "drill", level: 5, content: null },
  { id: "n4", code: "N4", title: "Improvisation", sub: "Over Changes & Keys", type: "drill", level: 5, content: null },
];

export const ENTRY_MAP: Record<string, CurriculumEntry> = Object.fromEntries(
  ENTRIES.map((e) => [e.id, e]),
);

const SHEET_MAP: Record<string, SheetMetaRow> = Object.fromEntries(
  SHEETS.map((s) => [s.slug, s]),
);

/** The `${route}#${anchor}` deep link for an entry, or null when content is unwritten. */
export function libraryLink(entry: CurriculumEntry | undefined | null): string | null {
  if (!entry?.content) return null;
  const sheet = SHEET_MAP[entry.content.sheetSlug];
  return sheet ? `${sheet.route}#${entry.content.anchor}` : null;
}
