import { useEffect, useRef, useState } from "react";
import { ENTRY_MAP, libraryLink } from "~/academy/curriculum";
import { academyLinks } from "~/academy/links";
import type { Route } from "./+types/map";

/* ─── LAYOUT CONSTANTS ──────────────────────────────────────────────────────── */
const COLS = 5;
const MAP_W = 860;
const CELL_W = MAP_W / COLS; // 172
const ROW_H = 128;
const MAX_ROW = 33;
const TOP_PAD = 80;
const BOT_PAD = 80;
const MAP_H = TOP_PAD + (MAX_ROW + 1) * ROW_H + BOT_PAD;

const GATE_INK = "#1a1208"; // text on an amber gate fill (design --ff-gate-ink)

type NodeType = "start" | "drill" | "theory" | "rest" | "elite" | "gate";
type NodeStatus = "done" | "current" | "future" | "locked";

const NODE_DIM: Record<NodeType, { w: number; h: number }> = {
	start: { w: 72, h: 30 },
	drill: { w: 106, h: 56 },
	theory: { w: 96, h: 52 },
	rest: { w: 86, h: 48 },
	elite: { w: 100, h: 54 },
	gate: { w: 124, h: 62 },
};

const ncx = (col: number) => col * CELL_W + CELL_W / 2;
const ncy = (row: number) => TOP_PAD + (MAX_ROW - row) * ROW_H + ROW_H / 2;

/* ─── DATA ──────────────────────────────────────────────────────────────────── */
interface MapNodeData {
	id: string;
	type: NodeType;
	col: number;
	row: number;
	code: string | null;
	title: string;
	sub: string;
	level: number;
	status: NodeStatus;
}

/* Geometry + progress state for every node, keyed by canonical id. Drill/theory
   labels come from the curriculum (see ~/academy/curriculum); the layout and
   status live here. Status is hardcoded for now (future: a real progress store). */
interface NodeLayout {
	type: NodeType;
	col: number;
	row: number;
	status: NodeStatus;
}

const LAYOUT: Record<string, NodeLayout> = {
	// ── Level 1 — Foundations of Fury (rows 0–8) ──
	start: { type: "start", col: 2, row: 0, status: "done" },
	a1: { type: "drill", col: 2, row: 1, status: "done" },
	a2: { type: "drill", col: 1, row: 2, status: "done" },
	a3: { type: "drill", col: 2, row: 2, status: "done" },
	th1: { type: "theory", col: 3, row: 2, status: "done" },
	b1: { type: "drill", col: 2, row: 3, status: "current" },
	b2: { type: "drill", col: 3, row: 4, status: "future" },
	b3: { type: "drill", col: 1, row: 5, status: "future" },
	th2: { type: "theory", col: 2, row: 5, status: "future" },
	b4: { type: "drill", col: 3, row: 5, status: "future" },
	c1: { type: "drill", col: 1, row: 6, status: "future" },
	c2: { type: "drill", col: 2, row: 6, status: "future" },
	c3: { type: "drill", col: 3, row: 6, status: "future" },
	c4: { type: "drill", col: 1, row: 7, status: "future" },
	c5: { type: "drill", col: 2, row: 7, status: "future" },
	c6: { type: "drill", col: 3, row: 7, status: "future" },
	gate1: { type: "gate", col: 2, row: 8, status: "future" },
	rest1: { type: "rest", col: 3, row: 8, status: "future" },

	// ── Level 2 — Technical Arsenal (rows 9–15) ──
	d1: { type: "drill", col: 1, row: 9, status: "locked" },
	th3: { type: "theory", col: 2, row: 9, status: "locked" },
	d2: { type: "drill", col: 3, row: 9, status: "locked" },
	e4: { type: "drill", col: 1, row: 10, status: "locked" },
	d3: { type: "drill", col: 2, row: 10, status: "locked" },
	e5: { type: "drill", col: 3, row: 10, status: "locked" },
	e1: { type: "drill", col: 1, row: 11, status: "locked" },
	e2: { type: "drill", col: 2, row: 11, status: "locked" },
	e3: { type: "drill", col: 3, row: 11, status: "locked" },
	f5: { type: "drill", col: 1, row: 12, status: "locked" },
	el1: { type: "elite", col: 2, row: 12, status: "locked" },
	f6: { type: "drill", col: 3, row: 12, status: "locked" },
	f1: { type: "drill", col: 1, row: 13, status: "locked" },
	f2: { type: "drill", col: 2, row: 13, status: "locked" },
	f3: { type: "drill", col: 3, row: 13, status: "locked" },
	th4: { type: "theory", col: 1, row: 14, status: "locked" },
	d4: { type: "drill", col: 2, row: 14, status: "locked" },
	f4: { type: "drill", col: 3, row: 14, status: "locked" },
	gate2: { type: "gate", col: 2, row: 15, status: "locked" },

	// ── Level 3 — Modal Warfare (rows 16–21) ──
	g1: { type: "drill", col: 1, row: 16, status: "locked" },
	th5: { type: "theory", col: 2, row: 16, status: "locked" },
	g2: { type: "drill", col: 3, row: 16, status: "locked" },
	g3: { type: "drill", col: 1, row: 17, status: "locked" },
	g4: { type: "drill", col: 3, row: 17, status: "locked" },
	th6: { type: "theory", col: 2, row: 18, status: "locked" },
	h1: { type: "drill", col: 1, row: 19, status: "locked" },
	h2: { type: "drill", col: 2, row: 19, status: "locked" },
	h3: { type: "drill", col: 3, row: 19, status: "locked" },
	el2: { type: "elite", col: 2, row: 20, status: "locked" },
	gate3: { type: "gate", col: 2, row: 21, status: "locked" },

	// ── Level 4 — Speed & Precision (rows 22–27) ──
	j1: { type: "drill", col: 1, row: 22, status: "locked" },
	th7: { type: "theory", col: 2, row: 22, status: "locked" },
	j2: { type: "drill", col: 3, row: 22, status: "locked" },
	j3: { type: "drill", col: 2, row: 23, status: "locked" },
	k1: { type: "drill", col: 1, row: 24, status: "locked" },
	k2: { type: "drill", col: 2, row: 24, status: "locked" },
	k3: { type: "drill", col: 3, row: 24, status: "locked" },
	k4: { type: "drill", col: 2, row: 25, status: "locked" },
	el3: { type: "elite", col: 2, row: 26, status: "locked" },
	gate4: { type: "gate", col: 2, row: 27, status: "locked" },

	// ── Level 5 — The Final Form (rows 28–33) ──
	m1: { type: "drill", col: 1, row: 28, status: "locked" },
	th8: { type: "theory", col: 2, row: 28, status: "locked" },
	m2: { type: "drill", col: 3, row: 28, status: "locked" },
	m3: { type: "drill", col: 2, row: 29, status: "locked" },
	n1: { type: "drill", col: 1, row: 30, status: "locked" },
	n2: { type: "drill", col: 2, row: 30, status: "locked" },
	n3: { type: "drill", col: 3, row: 30, status: "locked" },
	n4: { type: "drill", col: 2, row: 31, status: "locked" },
	el4: { type: "elite", col: 2, row: 32, status: "locked" },
	gate5: { type: "gate", col: 2, row: 33, status: "locked" },
};

/* Structural nodes (start / rest / gate / elite) are not curriculum content,
   so their labels live here rather than in the curriculum. */
const STRUCTURAL: Record<string, { code: string | null; title: string; sub: string; level: number }> = {
	start: { code: null, title: "Begin", sub: "Entry Point", level: 1 },
	rest1: { code: "R", title: "Rest & Review", sub: "Tendon Protocol", level: 1 },
	gate1: { code: "GATE", title: "Foundations Gate", sub: "Clear All · L1", level: 1 },
	el1: { code: "EL", title: "String Skipping", sub: "Elite Challenge", level: 2 },
	gate2: { code: "GATE", title: "Arsenal Gate", sub: "Full Run · L2", level: 2 },
	el2: { code: "EL", title: "Modal Sequencing", sub: "Elite Challenge", level: 3 },
	gate3: { code: "GATE", title: "Modal Warfare Gate", sub: "Modal Mastery · L3", level: 3 },
	el3: { code: "EL", title: "Blast & Gallop Endurance", sub: "Elite Challenge", level: 4 },
	gate4: { code: "GATE", title: "Speed Gate", sub: "200 BPM · L4", level: 4 },
	el4: { code: "EL", title: "Transcription Challenge", sub: "Elite Challenge", level: 5 },
	gate5: { code: "GATE", title: "The Final Gate", sub: "Master Cert · L5", level: 5 },
};

/* Merge layout (geometry + status) with content (curriculum entry, or the
   structural meta above for non-content nodes). */
const NODES: MapNodeData[] = Object.entries(LAYOUT).map(([id, lay]) => {
	const meta = ENTRY_MAP[id] ?? STRUCTURAL[id];
	if (!meta) throw new Error(`Map node "${id}" has no curriculum entry or structural meta`);
	return {
		id,
		type: lay.type,
		col: lay.col,
		row: lay.row,
		status: lay.status,
		code: meta.code,
		title: meta.title,
		sub: meta.sub,
		level: meta.level,
	};
});

const EDGES: [string, string][] = [
	// ── Level 1 ──
	["start", "a1"],
	["a1", "a2"],
	["a1", "a3"],
	["a1", "th1"],
	["a2", "b1"],
	["a3", "b1"],
	["th1", "b1"],
	["b1", "b2"],
	["b1", "b3"],
	["b2", "th2"],
	["b2", "b4"],
	["b3", "c1"],
	["th2", "c2"],
	["b4", "c3"],
	["c1", "c4"],
	["c2", "c4"],
	["c3", "c6"],
	["c4", "c5"],
	["c4", "c6"],
	["c5", "gate1"],
	["c6", "gate1"],
	["c6", "rest1"],
	// ── Level 2 ──
	["gate1", "d1"],
	["gate1", "th3"],
	["gate1", "d2"],
	["d1", "e4"],
	["d2", "e5"],
	["d1", "d3"],
	["th3", "d3"],
	["d2", "d3"],
	["e4", "e1"],
	["e5", "e3"],
	["d3", "e1"],
	["d3", "e2"],
	["d3", "e3"],
	["e1", "f5"],
	["e3", "f6"],
	["e1", "el1"],
	["e2", "el1"],
	["e3", "el1"],
	["f5", "f1"],
	["f6", "f3"],
	["el1", "f1"],
	["el1", "f2"],
	["el1", "f3"],
	["f1", "th4"],
	["f2", "d4"],
	["f2", "f4"],
	["f3", "f4"],
	["d4", "gate2"],
	["th4", "gate2"],
	["f4", "gate2"],
	// ── Level 3 ──
	["gate2", "g1"],
	["gate2", "th5"],
	["gate2", "g2"],
	["g1", "g3"],
	["th5", "g3"],
	["th5", "g4"],
	["g2", "g4"],
	["g3", "th6"],
	["g4", "th6"],
	["th6", "h1"],
	["th6", "h2"],
	["th6", "h3"],
	["h1", "el2"],
	["h2", "el2"],
	["h3", "el2"],
	["el2", "gate3"],
	// ── Level 4 ──
	["gate3", "j1"],
	["gate3", "th7"],
	["gate3", "j2"],
	["j1", "j3"],
	["th7", "j3"],
	["j2", "j3"],
	["j3", "k1"],
	["j3", "k2"],
	["j3", "k3"],
	["k1", "k4"],
	["k2", "k4"],
	["k3", "k4"],
	["k4", "el3"],
	["el3", "gate4"],
	// ── Level 5 ──
	["gate4", "m1"],
	["gate4", "th8"],
	["gate4", "m2"],
	["m1", "m3"],
	["th8", "m3"],
	["m2", "m3"],
	["m3", "n1"],
	["m3", "n2"],
	["m3", "n3"],
	["n1", "n4"],
	["n2", "n4"],
	["n3", "n4"],
	["n4", "el4"],
	["el4", "gate5"],
];

const nodeMap: Record<string, MapNodeData> = Object.fromEntries(NODES.map((n) => [n.id, n]));

const STATUS_ORD: Record<NodeStatus, number> = { done: 0, current: 1, future: 2, locked: 3 };
function edgeKind(a: MapNodeData, b: MapNodeData) {
	const m = Math.max(STATUS_ORD[a.status], STATUS_ORD[b.status]);
	return m <= 1 ? "done" : m === 2 ? "future" : "locked";
}

/* ─── LEVEL BANDS ───────────────────────────────────────────────────────────── */
const BANDS = [
	{ level: 1, label: "LEVEL 1  —  FOUNDATIONS OF FURY", rowLo: 0, rowHi: 8, bg: "rgba(245,160,60,0.035)", accent: "var(--color-amber)" },
	{ level: 2, label: "LEVEL 2  —  TECHNICAL ARSENAL", rowLo: 9, rowHi: 15, bg: "rgba(180,71,15,0.04)", accent: "var(--color-ember)" },
	{ level: 3, label: "LEVEL 3  —  MODAL WARFARE", rowLo: 16, rowHi: 21, bg: "rgba(40,30,20,0.06)", accent: "var(--color-steel)" },
	{ level: 4, label: "LEVEL 4  —  SPEED & PRECISION", rowLo: 22, rowHi: 27, bg: "rgba(28,20,12,0.08)", accent: "var(--color-steel)" },
	{ level: 5, label: "LEVEL 5  —  THE FINAL FORM", rowLo: 28, rowHi: 33, bg: "rgba(18,12,6,0.14)", accent: "var(--color-steel)" },
];

function bandY(band: (typeof BANDS)[number]) {
	const top = TOP_PAD + (MAX_ROW - band.rowHi) * ROW_H;
	const bot = TOP_PAD + (MAX_ROW - band.rowLo + 1) * ROW_H;
	return { top, height: bot - top };
}

/* ─── BEZIER ────────────────────────────────────────────────────────────────── */
function bezier(x1: number, y1: number, x2: number, y2: number) {
	const mid = (y1 + y2) / 2;
	return `M ${x1} ${y1} C ${x1} ${mid} ${x2} ${mid} ${x2} ${y2}`;
}

/* ─── NODE COLORS ───────────────────────────────────────────────────────────── */
function nColors(type: NodeType, status: NodeStatus) {
	if (status === "done") return { bg: "var(--color-amber)", border: "var(--color-ember)", text: GATE_INK, op: 1 };
	if (status === "current") return { bg: "var(--color-panel)", border: "var(--color-amber)", text: "var(--color-amber)", op: 1 };
	if (status === "future") {
		if (type === "gate") return { bg: "var(--color-well)", border: "var(--color-ember)", text: "var(--color-bone)", op: 1 };
		if (type === "theory") return { bg: "var(--color-well)", border: "var(--color-ember)", text: "var(--color-steel)", op: 1 };
		return { bg: "var(--color-panel)", border: "var(--color-line)", text: "var(--color-steel)", op: 1 };
	}
	return { bg: "var(--color-well)", border: "var(--color-line)", text: "var(--color-steel)", op: 0.4 };
}

/* ─── EDGES SVG ─────────────────────────────────────────────────────────────── */
function Edges() {
	return (
		<svg width={MAP_W} height={MAP_H} style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none", zIndex: 1 }}>
			<defs>
				<filter id="eglow" x="-80%" y="-80%" width="260%" height="260%">
					<feGaussianBlur stdDeviation="3.5" result="b" />
					<feMerge>
						<feMergeNode in="b" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
				<filter id="fglow" x="-60%" y="-60%" width="220%" height="220%">
					<feGaussianBlur stdDeviation="1.5" result="b" />
					<feMerge>
						<feMergeNode in="b" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</defs>
			{EDGES.map(([fid, tid]) => {
				const f = nodeMap[fid];
				const t = nodeMap[tid];
				if (!f || !t) return null;
				const kind = edgeKind(f, t);
				const fdim = NODE_DIM[f.type];
				const tdim = NODE_DIM[t.type];
				const x1 = ncx(f.col);
				const y1 = ncy(f.row) - fdim.h / 2;
				const x2 = ncx(t.col);
				const y2 = ncy(t.row) + tdim.h / 2;
				return (
					<path
						key={`${fid}-${tid}`}
						d={bezier(x1, y1, x2, y2)}
						fill="none"
						stroke={kind === "done" ? "rgba(245,160,60,0.85)" : kind === "future" ? "rgba(59,47,35,0.85)" : "rgba(30,22,14,0.5)"}
						strokeWidth={kind === "done" ? 2.5 : 1.5}
						filter={kind === "done" ? "url(#eglow)" : kind === "future" ? "url(#fglow)" : undefined}
					/>
				);
			})}
		</svg>
	);
}

/* ─── SINGLE NODE ───────────────────────────────────────────────────────────── */
function MapNode({
	node,
	onHover,
	isHovered,
	onSelect,
	isSelected,
}: {
	node: MapNodeData;
	onHover: (id: string | null) => void;
	isHovered: boolean;
	onSelect: (node: MapNodeData | null) => void;
	isSelected: boolean;
}) {
	const dim = NODE_DIM[node.type];
	const col = nColors(node.type, node.status);
	const x = ncx(node.col) - dim.w / 2;
	const y = ncy(node.row) - dim.h / 2;
	const isCurrent = node.status === "current";
	const isGate = node.type === "gate";
	const isElite = node.type === "elite";
	const borderC = isElite && node.status !== "locked" ? "var(--color-blood)" : col.border;

	return (
		<div
			onMouseEnter={() => onHover(node.id)}
			onMouseLeave={() => onHover(null)}
			onClick={() => node.status !== "locked" && onSelect(isSelected ? null : node)}
			className={isCurrent ? "motion-safe:animate-glow" : undefined}
			style={{
				position: "absolute",
				left: x,
				top: y,
				width: dim.w,
				height: dim.h,
				background: col.bg,
				border: `${isGate && node.status !== "locked" ? 2 : 1}px solid ${borderC}`,
				borderLeft: isGate ? `3px solid ${borderC}` : undefined,
				opacity: col.op,
				cursor: node.status === "locked" ? "default" : "pointer",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				gap: "3px",
				outline: (isHovered || isSelected) && node.status !== "locked" ? `2px solid ${borderC}` : "none",
				outlineOffset: "3px",
				transition: "outline 80ms",
				zIndex: isCurrent ? 20 : isGate ? 12 : isSelected ? 25 : 5,
				userSelect: "none",
			}}
		>
			{/* YOU ARE HERE tag */}
			{isCurrent && (
				<span
					className="motion-safe:animate-float-tag"
					style={{
						position: "absolute",
						top: -14,
						left: "50%",
						transform: "translateX(-50%)",
						fontFamily: "var(--font-condensed)",
						fontWeight: 700,
						fontSize: "8px",
						letterSpacing: "0.22em",
						textTransform: "uppercase",
						background: "var(--color-amber)",
						color: GATE_INK,
						padding: "3px 7px",
						whiteSpace: "nowrap",
						zIndex: 30,
					}}
				>
					▼ YOU ARE HERE
				</span>
			)}

			{/* ELITE badge */}
			{isElite && node.status !== "locked" && (
				<span
					style={{
						position: "absolute",
						top: -9,
						fontFamily: "var(--font-condensed)",
						fontWeight: 700,
						fontSize: "7px",
						letterSpacing: "0.18em",
						background: "var(--color-blood)",
						color: "var(--color-bone)",
						padding: "2px 5px",
						textTransform: "uppercase",
					}}
				>
					ELITE
				</span>
			)}

			{node.type === "start" ? (
				<span style={{ fontFamily: "var(--font-condensed)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--color-amber)" }}>
					START
				</span>
			) : node.type === "gate" ? (
				<>
					<span
						style={{
							fontFamily: "var(--font-condensed)",
							fontWeight: 700,
							fontSize: "8px",
							letterSpacing: "0.22em",
							textTransform: "uppercase",
							lineHeight: 1,
							color: node.status === "locked" ? "var(--color-steel)" : "var(--color-amber)",
						}}
					>
						LEVEL {node.level}
					</span>
					<span style={{ fontFamily: "var(--font-stencil)", fontWeight: 400, fontSize: "18px", textTransform: "uppercase", color: col.text, lineHeight: 1 }}>GATE</span>
					<span
						style={{
							fontFamily: "var(--font-plex)",
							fontSize: "8px",
							letterSpacing: "0.06em",
							color: node.status === "locked" ? "var(--color-steel)" : "var(--color-bone)",
							maxWidth: dim.w - 12,
							textAlign: "center",
							overflow: "hidden",
							textOverflow: "ellipsis",
							whiteSpace: "nowrap",
						}}
					>
						{node.sub}
					</span>
				</>
			) : (
				<>
					<span style={{ fontFamily: "var(--font-stencil)", fontWeight: 400, fontSize: "20px", textTransform: "uppercase", color: col.text, lineHeight: 1 }}>{node.code}</span>
					<span
						style={{
							fontFamily: "var(--font-plex)",
							fontSize: "8px",
							letterSpacing: "0.04em",
							color: node.status === "done" ? "rgba(26,18,8,0.75)" : "var(--color-steel)",
							textAlign: "center",
							maxWidth: dim.w - 10,
							overflow: "hidden",
							textOverflow: "ellipsis",
							whiteSpace: "nowrap",
						}}
					>
						{node.sub}
					</span>
					{node.type === "theory" && (
						<span
							style={{
								position: "absolute",
								bottom: -9,
								fontFamily: "var(--font-condensed)",
								fontWeight: 700,
								fontSize: "7px",
								letterSpacing: "0.14em",
								textTransform: "uppercase",
								color: node.status === "done" ? "var(--color-amber)" : "var(--color-steel)",
							}}
						>
							THEORY
						</span>
					)}
				</>
			)}
		</div>
	);
}

/* ─── DETAIL CARD ───────────────────────────────────────────────────────────── */
function DetailCard({ node }: { node: MapNodeData }) {
	const dim = NODE_DIM[node.type];
	const col = nColors(node.type, node.status);
	const nx = ncx(node.col);
	const ny = ncy(node.row);
	const CARD_W = 216;
	const rawL = nx + dim.w / 2 + 16;
	const left = rawL + CARD_W > MAP_W ? nx - dim.w / 2 - CARD_W - 16 : rawL;
	const top = Math.min(Math.max(TOP_PAD, ny - 52), MAP_H - 160);
	const statusLabel = { done: "CLEARED", current: "IN PROGRESS", future: "UPCOMING", locked: "LOCKED" }[node.status];

	const tags = [
		{ v: `L${node.level}`, c: "var(--color-amber)" },
		{ v: statusLabel, c: node.status === "done" ? "var(--color-amber)" : node.status === "current" ? "var(--color-bone)" : "var(--color-steel)" },
		{ v: node.type.toUpperCase(), c: "var(--color-steel)" },
	];

	const entry = ENTRY_MAP[node.id];
	const link = libraryLink(entry);
	const isContent = node.type === "drill" || node.type === "theory";

	return (
		<div
			style={{
				position: "absolute",
				left,
				top,
				width: CARD_W,
				zIndex: 60,
				pointerEvents: "none",
				background: "var(--color-panel)",
				border: `1px solid ${col.border}`,
				borderLeft: `3px solid ${col.border}`,
				padding: "12px 14px",
			}}
		>
			<div style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginBottom: "8px" }}>
				{node.code && (
					<span style={{ fontFamily: "var(--font-stencil)", fontSize: "22px", lineHeight: 1, flexShrink: 0, color: node.status === "done" ? GATE_INK : "var(--color-amber)" }}>
						{node.code}
					</span>
				)}
				<div>
					<div style={{ fontFamily: "var(--font-condensed)", fontWeight: 700, fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-bone)", lineHeight: 1.2 }}>
						{node.title}
					</div>
					<div style={{ fontFamily: "var(--font-plex)", fontSize: "10px", color: "var(--color-steel)", marginTop: "3px" }}>{node.sub}</div>
				</div>
			</div>
			<div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
				{tags.map((t) => (
					<span
						key={t.v}
						style={{
							fontFamily: "var(--font-plex)",
							fontSize: "9px",
							letterSpacing: "0.10em",
							color: t.c,
							background: "var(--color-well)",
							border: "1px solid var(--color-line)",
							padding: "3px 7px",
						}}
					>
						{t.v}
					</span>
				))}
			</div>
			{link ? (
				<a
					href={link}
					style={{
						pointerEvents: "auto",
						display: "inline-block",
						marginTop: "10px",
						fontFamily: "var(--font-condensed)",
						fontWeight: 700,
						fontSize: "10px",
						letterSpacing: "0.16em",
						textTransform: "uppercase",
						color: "var(--color-amber)",
						textDecoration: "none",
					}}
				>
					Open in Library →
				</a>
			) : isContent ? (
				<span
					style={{
						display: "inline-block",
						marginTop: "10px",
						fontFamily: "var(--font-condensed)",
						fontWeight: 700,
						fontSize: "10px",
						letterSpacing: "0.16em",
						textTransform: "uppercase",
						color: "var(--color-steel)",
						opacity: 0.7,
					}}
				>
					Coming soon
				</span>
			) : null}
		</div>
	);
}

/* ─── LEGEND ────────────────────────────────────────────────────────────────── */
function Legend() {
	const items = [
		{ label: "CLEARED", bg: "var(--color-amber)", bd: "var(--color-ember)" },
		{ label: "ACTIVE", bg: "var(--color-panel)", bd: "var(--color-amber)" },
		{ label: "UPCOMING", bg: "var(--color-panel)", bd: "var(--color-line)" },
		{ label: "THEORY", bg: "var(--color-well)", bd: "var(--color-ember)" },
		{ label: "ELITE", bg: "var(--color-panel)", bd: "var(--color-blood)" },
		{ label: "GATE", bg: "var(--color-well)", bd: "var(--color-ember)" },
		{ label: "LOCKED", bg: "var(--color-well)", bd: "var(--color-line)", dim: true },
	];
	return (
		<div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center", padding: "12px 16px", background: "var(--color-panel)", border: "1px solid var(--color-line)" }}>
			<span style={{ fontFamily: "var(--font-condensed)", fontWeight: 700, fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--color-steel)", marginRight: "4px" }}>
				LEGEND
			</span>
			{items.map((it) => (
				<div key={it.label} style={{ display: "flex", alignItems: "center", gap: "5px", opacity: it.dim ? 0.45 : 1 }}>
					<div style={{ width: 18, height: 11, background: it.bg, border: `1px solid ${it.bd}`, flexShrink: 0 }} />
					<span style={{ fontFamily: "var(--font-plex)", fontSize: "9px", letterSpacing: "0.10em", color: "var(--color-steel)", textTransform: "uppercase" }}>{it.label}</span>
				</div>
			))}
			<span style={{ marginLeft: "auto", fontFamily: "var(--font-plex)", fontSize: "9px", color: "var(--color-steel)", letterSpacing: "0.06em" }}>HOVER A NODE FOR DETAILS</span>
		</div>
	);
}

const STATS = [
	{ label: "DRILLS CLEARED", value: "3" },
	{ label: "REMAINING · L1", value: "12" },
	{ label: "CURRENT GATE", value: "110 BPM" },
	{ label: "LEVELS UNLOCKED", value: "1 / 5" },
	{ label: "STREAK", value: "5 DAYS" },
];

/* ─── ROUTE ─────────────────────────────────────────────────────────────────── */
export const links: Route.LinksFunction = () => academyLinks();

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "FretForge — Curriculum Map" },
		{ name: "description", content: "Earn your way up. Five levels, every node earned, every gate measured pass/fail." },
	];
}

export default function LevelsMap() {
	const [hovered, setHovered] = useState<string | null>(null);
	const [selected, setSelected] = useState<MapNodeData | null>(null);
	const mapRef = useRef<HTMLDivElement>(null);

	// Open centered on the active node.
	useEffect(() => {
		const cur = NODES.find((n) => n.status === "current");
		if (!cur || !mapRef.current) return;
		const mapTop = mapRef.current.getBoundingClientRect().top + window.scrollY;
		const target = mapTop + ncy(cur.row) - window.innerHeight / 2;
		window.scrollTo({ top: Math.max(0, target), behavior: "instant" });
	}, []);

	const activeNode = selected || (hovered ? nodeMap[hovered] : null);

	return (
		<div className="academy">
			{/* Page header */}
			<div style={{ maxWidth: "1040px", margin: "0 auto", padding: "28px 30px 0", position: "relative", zIndex: 1 }}>
				<span style={{ fontFamily: "var(--font-condensed)", fontWeight: 600, fontSize: "12px", letterSpacing: "0.30em", textTransform: "uppercase", color: "var(--color-amber)" }}>
					The Shredder's Academy · Curriculum Map
				</span>
				<h1 style={{ fontFamily: "var(--font-stencil)", fontWeight: 400, textTransform: "uppercase", fontSize: "clamp(28px,4vw,50px)", lineHeight: 0.96, color: "var(--color-bone)", margin: "10px 0 8px" }}>
					Earn Your Way Up.
				</h1>
				<p style={{ fontFamily: "var(--font-barlow)", fontSize: "14px", color: "var(--color-steel)", margin: "0 0 20px", lineHeight: 1.5, maxWidth: "62ch" }}>
					Five levels. Every node earned, every gate measured pass/fail. Start at the bottom — you're here. Each gate clears only when every drill in the level passes The Standard.
				</p>
				<hr style={{ border: "none", borderTop: "3px double var(--color-line)", margin: "0 0 20px" }} />
			</div>

			{/* Map layout: spine + map (horizontally scrollable on narrow screens) */}
			<div style={{ maxWidth: "1040px", margin: "0 auto", padding: "0 30px 60px", position: "relative", zIndex: 1, overflowX: "auto" }}>
				<div style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 0, width: 40 + MAP_W }}>
					{/* Left spine — level labels */}
					<div style={{ position: "relative", width: "40px", background: "var(--color-well)", border: "1px solid var(--color-line)", borderRight: "none" }}>
						<div style={{ position: "relative", width: "40px", height: MAP_H }}>
							{BANDS.map((band) => {
								const { top, height } = bandY(band);
								return (
									<div key={band.level} style={{ position: "absolute", left: 0, right: 0, top, height, background: band.bg, borderTop: "1px solid var(--color-line)", display: "flex", alignItems: "center", justifyContent: "center" }}>
										<span style={{ fontFamily: "var(--font-stencil)", fontSize: "14px", textTransform: "uppercase", color: band.accent, writingMode: "vertical-rl", transform: "rotate(180deg)", letterSpacing: "0.04em", lineHeight: 1, userSelect: "none" }}>
											L{band.level}
										</span>
									</div>
								);
							})}
						</div>
					</div>

					{/* Map canvas */}
					<div ref={mapRef} style={{ position: "relative", width: MAP_W, height: MAP_H, border: "1px solid var(--color-line)", background: "var(--color-well)", overflow: "visible" }}>
						{/* Band backgrounds */}
						{BANDS.map((band) => {
							const { top, height } = bandY(band);
							return <div key={band.level} style={{ position: "absolute", left: 0, right: 0, top, height, background: band.bg, borderTop: "1px solid var(--color-line)" }} />;
						})}

						{/* Band name labels (right side) */}
						{BANDS.map((band) => {
							const { top, height } = bandY(band);
							return (
								<div key={`lbl-${band.level}`} style={{ position: "absolute", right: 4, top, height, display: "flex", alignItems: "center", justifyContent: "flex-end", pointerEvents: "none" }}>
									<span style={{ fontFamily: "var(--font-condensed)", fontWeight: 700, fontSize: "9px", letterSpacing: "0.20em", textTransform: "uppercase", color: band.accent, opacity: 0.55, textAlign: "right" }}>
										{band.label.split("—").pop()?.trim()}
									</span>
								</div>
							);
						})}

						{/* Fog of war — dims locked levels at top */}
						<div
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								height: TOP_PAD + (MAX_ROW - 8) * ROW_H + ROW_H * 0.25,
								background: "linear-gradient(to bottom, rgba(12,8,4,0.90) 0%, rgba(12,8,4,0.55) 40%, rgba(12,8,4,0.15) 75%, transparent 100%)",
								pointerEvents: "none",
								zIndex: 4,
							}}
						/>

						{/* Warm glow halo around current node */}
						{(() => {
							const cur = NODES.find((n) => n.status === "current");
							if (!cur) return null;
							return (
								<div
									style={{
										position: "absolute",
										left: ncx(cur.col) - 160,
										top: ncy(cur.row) - 160,
										width: 320,
										height: 320,
										borderRadius: "50%",
										background: "radial-gradient(circle, rgba(245,160,60,0.10) 0%, transparent 65%)",
										pointerEvents: "none",
										zIndex: 3,
									}}
								/>
							);
						})()}

						{/* Edges */}
						<Edges />

						{/* Nodes */}
						{NODES.map((node) => (
							<MapNode key={node.id} node={node} onHover={setHovered} isHovered={hovered === node.id} onSelect={setSelected} isSelected={selected?.id === node.id} />
						))}

						{/* Detail card */}
						{activeNode && <DetailCard node={activeNode} />}
					</div>
				</div>
			</div>

			{/* Legend + stats */}
			<div style={{ maxWidth: "1040px", margin: "0 auto", padding: "0 30px 80px", position: "relative", zIndex: 1 }}>
				<Legend />
				<div style={{ marginTop: "12px", display: "flex", gap: "24px", flexWrap: "wrap", padding: "14px 16px", background: "var(--color-panel)", border: "1px solid var(--color-line)" }}>
					{STATS.map((s) => (
						<div key={s.label} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
							<span style={{ fontFamily: "var(--font-condensed)", fontWeight: 600, fontSize: "9px", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--color-steel)" }}>{s.label}</span>
							<span style={{ fontFamily: "var(--font-plex)", fontWeight: 600, fontSize: "17px", color: "var(--color-amber)", letterSpacing: "0.04em" }}>{s.value}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
