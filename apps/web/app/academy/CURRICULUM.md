# Adding curriculum items

The Map (`/map`) and Library (`/library`) are **two views of one curriculum**. The
source of truth is [`curriculum.ts`](./curriculum.ts); both views derive from it.
Read this before adding a drill, theory entry, or sheet so the two views stay in sync.

## The one rule: the canonical id

Every drill/theory item has **one globally-unique `id`** (lowercase, e.g. `b1`, `th5`).
That same id is used in three places, and the deep link is built from it:

| Where | What it's used for |
| --- | --- |
| `ENTRIES` key in `curriculum.ts` | the item's identity, labels, and content pointer |
| `LAYOUT` key in `routes/map.tsx` | the node's position + status on the map |
| `id` on the `card` block in `academy/data/*` | the scroll anchor inside the sheet |

The Library URL a map node links to is `` `${sheet.route}#${id}` `` (e.g. `/drills/foundations-of-fury#b1`).

> ⚠️ **`id` ≠ `code`.** `code` (`A1`, `B1`, `TH`…) is the *visible label* and is
> **sheet-local — it repeats across sheets and may not match the id.** Never use
> `code` as the anchor. Match drills by content, not by code.

---

## Scenario A — add a new drill/theory node to the map

Most common case. A node that shows on the map; "Coming soon" until content exists.

1. **`curriculum.ts` → `ENTRIES`**: add a row.
   ```ts
   { id: "g5", code: "G5", title: "Super-Locrian Runs", sub: "The Altered Sound", type: "drill", level: 3, content: null },
   ```
   - `type`: `"drill"` or `"theory"`.
   - `content: null` → the map shows **"Coming soon"** (no link). Wire it later via Scenario B.

2. **`routes/map.tsx` → `LAYOUT`**: add geometry + status, keyed by the same id.
   ```ts
   g5: { type: "drill", col: 3, row: 18, status: "locked" },
   ```
   - `type`: `"drill" | "theory"` (must match the entry's intent).
   - `col`: 1–3 (col 2 is the spine; 0 and 4 are margins). `row`: 0 = bottom (start), higher = further up the journey. Find a free `col`/`row` slot in that level's band.
   - `status`: `"done" | "current" | "future" | "locked"` (hardcoded for now; one `current` node at a time).

3. **`routes/map.tsx` → `EDGES`**: connect it to its prerequisite(s).
   ```ts
   ["g4", "g5"],
   ["g5", "th6"],
   ```

That's everything for a "Coming soon" node. If you added a row beyond `MAX_ROW` (33),
bump `MAX_ROW` in `map.tsx`. Level bands live in `BANDS` (`map.tsx`) — extend the
relevant band's `rowHi`/`rowLo` if you push a level taller.

---

## Scenario B — wire a node to existing sheet content

When the drill already exists as a `card` in a sheet (or you just authored one):

1. **`academy/data/<sheet>.tsx`**: add `id` to the matching `card` block (sibling of `code`).
   ```ts
   {
     kind: "card",
     id: "g5",        // ← canonical id, becomes the #anchor
     code: "G5",      // ← visible label, unchanged
     title: "…",
     body: [ … ],
   }
   ```

2. **`curriculum.ts`**: point the entry's `content` at that sheet. `anchor` **must equal** the id.
   ```ts
   { id: "g5", …, content: { sheetSlug: "building-blocks", anchor: "g5" } },
   ```

The navbar-clearance scroll offset is already handled by `scroll-margin-top` on
`.drill[id]` in [`academy.css`](./academy.css) — nothing to do there.

---

## Scenario C — add a whole new sheet

1. **`academy/data/<name>.tsx`**: export a `Sheet` (see existing files; shape is in [`types.ts`](./types.ts)). Give the drill cards `id`s.
2. **`routes/<slug>.tsx`**: thin wrapper — copy [`routes/foundations-of-fury.tsx`](../routes/foundations-of-fury.tsx) and swap the imported sheet.
3. **`routes.ts`**: register the route, e.g. `route("drills/speed-precision", "routes/speed-precision.tsx")`.
4. **`curriculum.ts` → `SHEETS`**: add the registry row (the Library renders from this).
   ```ts
   { slug: "speed-precision", route: "/drills/speed-precision", code: "L4", kind: "Drill Sheet", title: "Speed & Precision", key: "A MINOR", blurb: "…" },
   ```
5. Wire each node's `content` to the new `slug` (Scenario B).

---

## Structural nodes (start / rest / gate / elite)

These are **not curriculum content** — they never link to the Library. Add them in
`routes/map.tsx` only: a `LAYOUT` entry **and** a `STRUCTURAL` entry (which holds
their `code`/`title`/`sub`/`level`). Do **not** add them to `curriculum.ts`.

---

## Checklist & verify

- [ ] `id` is unique and lowercase; same id used in `ENTRIES`, `LAYOUT`, and (if wired) the card.
- [ ] `EDGES` connect the new node into the graph.
- [ ] `content` is `null` (Coming soon) or a valid `{ sheetSlug, anchor: id }`.
- [ ] Structural nodes are in `map.tsx` only.

```bash
cd apps/web && npm run typecheck      # the build() in map.tsx throws if an id lacks meta
npm run dev                            # open /map → click the node → "Open in Library →" / "Coming soon"
```
