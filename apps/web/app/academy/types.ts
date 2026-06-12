import type { ReactNode } from "react";

/**
 * Content model for Fretforge sheets (drill sheets + theory
 * companion). Pages are authored as structured data and rendered by the
 * components in ./components, so future features (metronome, tab player) can
 * consume the structured values directly instead of scraping an HTML blob.
 */

export interface Sheet {
  meta: SheetMeta;
  nav: NavItem[];
  sections: Section[];
  footer: ReactNode;
}

export interface SheetMeta {
  /** Eyebrow line above the title, e.g. "Fretforge · …". */
  track: string;
  /** The .lvl line inside the <h1>, e.g. "Level 1 of 5 · Drill Sheet". */
  level: string;
  /** Main title, e.g. "Foundations of Fury". */
  title: string;
  /** Header spec line (KEY / TUNING / …). */
  specs: Spec[];
  /** <nav aria-label> value. */
  navLabel: string;
  /** Document <title> + meta title. */
  docTitle: string;
  /** Meta description. */
  description: string;
}

export interface Spec {
  label: string;
  value: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface Section {
  id: string;
  eyebrow?: string;
  title?: string;
  blocks: Block[];
}

export type ProseTone = "lede" | "note" | "why" | "cap" | "plain";

export interface TableCell {
  node: ReactNode;
  /** Monospace/amber first-column treatment (the .t class). */
  mono?: boolean;
}
export type TableRow = TableCell[];

export interface StandardCheck {
  title: string;
  body: ReactNode;
  /** Adds the .std.new accent (Level 2 additions). */
  isNew?: boolean;
}

/** A guitar-tab block, modelled line-by-line so a player can parse it later. */
export interface Tab {
  lines: TabLine[];
}
export interface TabLine {
  /** pick = picking-pattern row (.pk), label = section label (.ch), string = a fret line. */
  kind: "pick" | "label" | "string";
  text: string;
}

/** A practice tempo ladder. `gate` is the graduation target the metronome aims at. */
export interface TempoLadder {
  label: string;
  rungs: number[];
  gate: number;
}

export type Block =
  | { kind: "prose"; tone?: ProseTone; body: ReactNode }
  | { kind: "legend"; body: ReactNode }
  | { kind: "daytag"; tag: string; label: string }
  | { kind: "formula"; body: ReactNode }
  | { kind: "dial"; label: string; active: number }
  | { kind: "xref"; body: ReactNode }
  | { kind: "tab"; tab: Tab }
  | { kind: "ladder"; ladder: TempoLadder }
  | { kind: "table"; head: ReactNode[]; rows: TableRow[] }
  | { kind: "details"; summary: ReactNode; body: ReactNode }
  | { kind: "standard"; checks: StandardCheck[] }
  | { kind: "tendon"; eyebrow: string; title: string; items: ReactNode[] }
  | { kind: "card"; id?: string; code: string; title: string; body: Block[] };

function unescapeHtml(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

/**
 * Parse the verbatim inner content of a `<pre class="tab">` block (whole-line
 * `<span class="pk">` / `<span class="ch">` wrappers, everything else a fret
 * line) into a structured Tab. Whitespace inside each line is preserved
 * exactly, so the rendered <pre> is byte-identical to the source.
 */
export function parseTab(raw: string): Tab {
  const body = raw.replace(/^\n/, "").replace(/\n$/, "");
  const lines: TabLine[] = body.split("\n").map((line) => {
    const pick = line.match(/^<span class="pk">([\s\S]*)<\/span>$/);
    if (pick) return { kind: "pick", text: unescapeHtml(pick[1]) };
    const label = line.match(/^<span class="ch">([\s\S]*)<\/span>$/);
    if (label) return { kind: "label", text: unescapeHtml(label[1]) };
    return { kind: "string", text: unescapeHtml(line) };
  });
  return { lines };
}

/** Terse table-cell constructor for data files. */
export const cell = (node: ReactNode, mono = false): TableCell => ({ node, mono });
