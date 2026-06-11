import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { Link } from "react-router";
import { TempoLadder } from "~/academy/components/TempoLadder";
import { academyLinks } from "~/academy/links";
import type { Route } from "./+types/home";

/* ─── DATA ──────────────────────────────────────────────────────────────────
   A visual mockup for a student who just started: Level 1, early drills. */

const STUDENT = { name: "ALEX", streak: 5 };

const CURRENT_DRILL = {
	code: "B1",
	title: "3NPS Aeolian Climb — The Mother Shape",
	level: "Level 1 · Block B · Drill B1",
	why: "A natural minor (Aeolian), three notes per string. The single most important shape in the academy — the chassis your modes, sequences, and 200 BPM runs all bolt onto later.",
	ladder: {
		label: "Tempo Ladder · 16th notes",
		rungs: [60, 70, 80, 90, 100, 110],
		gate: 110,
	},
	clearedBPM: 80,
	nextBPM: 90,
};

const LEVEL_PROGRESS = { cleared: 3, total: 8, level: 1 };

const BPM_LOG = [
	{ date: "JUN 11", drill: "B1", bpm: 80, status: "PASS" },
	{ date: "JUN 10", drill: "A2", bpm: 120, status: "GATE ✓" },
	{ date: "JUN 09", drill: "A2", bpm: 110, status: "PASS" },
	{ date: "JUN 09", drill: "A2", bpm: 100, status: "PASS" },
	{ date: "JUN 08", drill: "A1", bpm: 120, status: "GATE ✓" },
	{ date: "JUN 07", drill: "A1", bpm: 110, status: "PASS" },
	{ date: "JUN 06", drill: "A1", bpm: 100, status: "PASS" },
	{ date: "JUN 05", drill: "A1", bpm: 90, status: "PASS" },
];

const CURRICULUM: {
	code: string;
	title: string;
	key: string;
	progress: number;
	total: number;
	status: "active" | "locked";
	to?: string;
}[] = [
	{ code: "L1", title: "Foundations of Fury", key: "A MINOR", progress: 3, total: 8, status: "active", to: "/drills/foundations-of-fury" },
	{ code: "L2", title: "Technical Arsenal", key: "A MINOR", progress: 0, total: 9, status: "locked" },
	{ code: "L3", title: "Modal Warfare", key: "MODAL", progress: 0, total: 7, status: "locked" },
	{ code: "L4", title: "Speed & Precision", key: "VARIOUS", progress: 0, total: 8, status: "locked" },
	{ code: "L5", title: "The Final Form", key: "VARIOUS", progress: 0, total: 6, status: "locked" },
];

const STANDARD = [
	{ n: "1", title: "Every Note Speaks", pass: true },
	{ n: "2", title: "Silence Between the Notes", pass: true },
	{ n: "3", title: "Locked to the Click", pass: false },
	{ n: "4", title: "Even Attack", pass: false },
	{ n: "5", title: "Zero Tension", pass: false },
];

const TODAY_PLAN = [
	{ time: "5 MIN", label: "Warm-up protocol", note: "Cold tendons don't shred — they tear." },
	{ time: "15 MIN", label: "B1 · Slow run @ 60 BPM", note: "Fretting-hand fingertips only. No flying fingers." },
	{ time: "20 MIN", label: "B1 · Working tempo @ 80 BPM", note: "Four consecutive clean reps to confirm the rung." },
	{ time: "10 MIN", label: "B1 · Gate-chase @ 90 BPM", note: "Stop at the first sign of tension. The ladder will still be there." },
];

const BRIGHTNESS = ["#ffd9a0", "#f5a03c", "#d9822b", "#a85d1c", "#7a4014", "#4c270c", "#241204"];

/* ─── PRIMITIVES ──────────────────────────────────────────────────────────── */

function Eyebrow({ tone = "steel", children }: { tone?: "amber" | "steel"; children: ReactNode }) {
	return (
		<span
			className="block font-condensed font-semibold text-[11px] leading-none tracking-[.28em] uppercase"
			style={{ color: tone === "amber" ? "var(--color-amber)" : "var(--color-steel)" }}
		>
			{children}
		</span>
	);
}

function Badge({
	as,
	variant = "default",
	children,
	style,
}: {
	as?: "plate";
	variant?: "amber" | "solid" | "default";
	children: ReactNode;
	style?: CSSProperties;
}) {
	if (as === "plate") {
		const amber = variant === "amber";
		return (
			<span
				className="inline-block text-center font-stencil leading-none border"
				style={{
					color: amber ? "var(--color-amber)" : "var(--color-steel)",
					borderColor: amber ? "var(--color-ember)" : "var(--color-line)",
					fontSize: "22px",
					padding: "6px 9px 4px",
					...style,
				}}
			>
				{children}
			</span>
		);
	}
	const solid = variant === "solid";
	return (
		<span
			className="inline-block font-condensed font-semibold uppercase leading-none border"
			style={{
				fontSize: "10px",
				letterSpacing: ".18em",
				padding: "5px 8px",
				color: solid ? "var(--color-amber)" : "var(--color-steel)",
				borderColor: solid ? "var(--color-ember)" : "var(--color-line)",
				...style,
			}}
		>
			{children}
		</span>
	);
}

function Button({
	variant = "primary",
	size = "md",
	to,
	children,
	...props
}: {
	variant?: "primary" | "outline";
	size?: "md" | "sm";
	/** When set, renders a router Link styled as the button. */
	to?: string;
	children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
	const base =
		"inline-flex items-center justify-center font-condensed font-semibold uppercase leading-none border cursor-pointer no-underline transition-colors duration-[120ms] active:translate-y-px";
	const sizes = {
		md: "text-[13px] tracking-[.16em] px-[18px] py-[11px]",
		sm: "text-[11px] tracking-[.14em] px-[13px] py-[9px]",
	};
	const variants = {
		primary: "bg-amber text-[#1a1208] border-ember hover:bg-[#ffb24d]",
		outline: "bg-transparent text-amber border-ember hover:border-amber hover:text-bone",
	};
	const className = `${base} ${sizes[size]} ${variants[variant]}`;
	if (to) {
		return (
			<Link to={to} className={className}>
				{children}
			</Link>
		);
	}
	return (
		<button type="button" className={className} {...props}>
			{children}
		</button>
	);
}

/* ─── HERO BANNER ─────────────────────────────────────────────────────────── */

function HeroBanner() {
	return (
		<div className="grid grid-cols-1 items-stretch border border-line border-l-[3px] border-l-amber bg-panel sm:grid-cols-[1fr_auto]">
			{/* Left: Resume */}
			<div className="border-b border-line px-[30px] py-7 sm:border-r sm:border-b-0">
				<Eyebrow tone="amber">
					The Shredder's Academy · Practical Shred Track · Level {LEVEL_PROGRESS.level} of 5
				</Eyebrow>
				<h1
					className="m-0 mt-2.5 mb-2.5 font-stencil font-normal uppercase tracking-[.01em] text-bone"
					style={{ fontSize: "clamp(34px, 4.5vw, 54px)", lineHeight: 0.96 }}
				>
					Pick Up the Axe.
				</h1>
				<p className="m-0 mb-5 max-w-[62ch] font-barlow text-[15px] leading-[1.55] text-steel">
					{LEVEL_PROGRESS.cleared} of {LEVEL_PROGRESS.total} drills cleared. Resuming{" "}
					<span className="font-plex text-[12px] font-semibold text-bone">B1 — 3NPS AEOLIAN CLIMB</span> ·
					Cleared to 80 BPM. Gate is 110.
				</p>

				{/* Drill progress rail */}
				<div className="mb-[22px] flex items-center gap-[5px]">
					{Array.from({ length: LEVEL_PROGRESS.total }).map((_, i) => (
						<div
							key={i}
							className={`h-[8px] w-[30px] border ${
								i < LEVEL_PROGRESS.cleared ? "bg-amber border-ember" : "bg-well border-line"
							}`}
						/>
					))}
					<span className="ml-2.5 font-plex text-[10px] tracking-[.08em] text-steel">
						{LEVEL_PROGRESS.cleared}/{LEVEL_PROGRESS.total} DRILLS
					</span>
				</div>

				<div className="flex flex-wrap items-center gap-3">
					<Button variant="primary" size="md" to="/drills/foundations-of-fury">
						Resume Drill B1 →
					</Button>
					<span className="font-plex text-[11px] tracking-[.06em] text-steel">
						KEY <b className="font-semibold text-amber">A MINOR</b> · TUNING{" "}
						<b className="font-semibold text-amber">E A D G B e</b> · PICKING{" "}
						<b className="font-semibold text-amber">STRICT ALT</b>
					</span>
				</div>
			</div>

			{/* Right: Streak */}
			<div className="flex min-w-[148px] flex-col items-center justify-center gap-1.5 bg-well px-[30px] py-6">
				<span className="font-condensed text-[10px] font-semibold uppercase tracking-[.30em] text-steel">
					Practice Streak
				</span>
				<span className="block text-center font-stencil text-[58px] uppercase leading-none text-amber motion-safe:animate-glow">
					{STUDENT.streak}
				</span>
				<span className="font-plex text-[10px] tracking-[.10em] text-steel">DAYS STRAIGHT</span>
				<div className="mt-2.5 flex gap-1">
					{["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
						<div
							key={i}
							title={d}
							className={`h-4 w-4 border ${i < STUDENT.streak ? "bg-amber border-ember" : "border-line"}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

/* ─── DRILL PANEL (col 1) ─────────────────────────────────────────────────── */

function DrillPanel() {
	const passing = STANDARD.filter((s) => s.pass).length;
	return (
		<div className="flex flex-col gap-px">
			{/* Header */}
			<div className="flex items-center gap-3.5 border border-line border-l-[3px] border-l-amber bg-panel px-5 py-[18px]">
				<Badge as="plate" variant="amber">
					{CURRENT_DRILL.code}
				</Badge>
				<div>
					<Eyebrow tone="steel">{CURRENT_DRILL.level}</Eyebrow>
					<h2 className="m-0 mt-[5px] font-stencil text-[19px] font-normal uppercase leading-[1.02] text-bone">
						{CURRENT_DRILL.title}
					</h2>
				</div>
				<div className="ml-auto">
					<Badge variant="solid">In Progress</Badge>
				</div>
			</div>

			{/* Why it's music */}
			<div className="border border-line border-l-[3px] border-l-line bg-panel px-5 py-3.5">
				<p className="m-0 font-barlow text-[13.5px] leading-[1.6] text-steel">
					<b className="text-bone">Why it's music:</b> {CURRENT_DRILL.why}
				</p>
			</div>

			{/* Tempo ladder */}
			<div className="border border-line bg-panel px-5 py-4">
				<TempoLadder ladder={CURRENT_DRILL.ladder} />
				<div className="mt-2.5 flex flex-wrap gap-[18px] border border-line bg-well px-3 py-2">
					<span className="font-plex text-[11px] tracking-[.06em] text-steel">
						CLEARED <b className="text-amber">{CURRENT_DRILL.clearedBPM} BPM</b>
					</span>
					<span className="font-plex text-[11px] tracking-[.06em] text-steel">
						NEXT TARGET <b className="text-bone">{CURRENT_DRILL.nextBPM} BPM</b>
					</span>
					<span className="font-plex text-[11px] tracking-[.06em] text-steel">
						GATE <b className="text-amber">{CURRENT_DRILL.ladder.gate} BPM</b>
					</span>
				</div>
			</div>

			{/* The Standard */}
			<div className="border border-line bg-panel px-5 py-4">
				<div className="mb-3 flex items-baseline justify-between">
					<Eyebrow tone="steel">The Standard · 5-Point Checklist</Eyebrow>
					<span className="font-plex text-[10px] tracking-[.06em] text-steel">{passing}/5 PASS</span>
				</div>
				<div className="flex flex-col gap-1">
					{STANDARD.map((s) => (
						<div
							key={s.n}
							className={`flex items-center gap-2.5 border px-2.5 py-2 ${s.pass ? "border-ember" : "border-line bg-well"}`}
							style={s.pass ? { background: "rgba(245,160,60,0.07)" } : undefined}
						>
							<span
								className="w-4 shrink-0 text-center font-stencil text-[14px]"
								style={{ color: s.pass ? "var(--color-amber)" : "var(--color-steel)" }}
							>
								{s.n}
							</span>
							<span
								className="flex-1 font-condensed text-[11px] font-semibold uppercase tracking-[.16em]"
								style={{ color: s.pass ? "var(--color-bone)" : "var(--color-steel)" }}
							>
								{s.title}
							</span>
							<span
								className="font-plex text-[10px] tracking-[.06em]"
								style={{ color: s.pass ? "var(--color-amber)" : "var(--color-line)" }}
							>
								{s.pass ? "PASS" : "—"}
							</span>
						</div>
					))}
				</div>
				<p className="mt-2.5 font-barlow text-[12px] italic leading-[1.5] text-steel">
					Four consecutive reps must pass all five criteria. Partial credit doesn't exist here.
				</p>
			</div>
		</div>
	);
}

/* ─── BPM LOG + TODAY'S PLAN (col 2) ──────────────────────────────────────── */

function BPMColumn() {
	return (
		<div className="flex flex-col gap-px">
			{/* BPM History */}
			<div className="border border-line bg-panel px-5 py-4">
				<Eyebrow tone="amber">BPM Log · Last 8 Sessions</Eyebrow>
				<div className="mt-3.5">
					<div className="grid grid-cols-[52px_34px_40px_1fr] gap-2 border-b border-line pb-1.5">
						{["DATE", "DRILL", "BPM", "STATUS"].map((h) => (
							<span
								key={h}
								className="font-condensed text-[9px] font-semibold uppercase tracking-[.22em] text-steel"
							>
								{h}
							</span>
						))}
					</div>
					{BPM_LOG.map((row, i) => {
						const isGate = row.status.startsWith("GATE");
						return (
							<div
								key={i}
								className="grid grid-cols-[52px_34px_40px_1fr] gap-2 py-[7px]"
								style={{
									borderBottom: i < BPM_LOG.length - 1 ? "1px solid var(--color-line)" : "none",
									background: isGate ? "rgba(245,160,60,0.04)" : "transparent",
								}}
							>
								<span className="font-plex text-[10px] tracking-[.04em] text-steel">{row.date}</span>
								<span className="font-plex text-[11px] font-semibold text-amber">{row.drill}</span>
								<span
									className="font-plex text-[12px] font-semibold"
									style={{ color: isGate ? "var(--color-amber)" : "var(--color-bone)" }}
								>
									{row.bpm}
								</span>
								<span
									className="font-plex text-[10px] tracking-[.04em]"
									style={{ color: isGate ? "var(--color-amber)" : "var(--color-steel)" }}
								>
									{row.status}
								</span>
							</div>
						);
					})}
				</div>
			</div>

			{/* Today's Session Plan */}
			<div className="border border-line bg-panel px-5 py-4">
				<Eyebrow tone="amber">Today's Session Plan</Eyebrow>
				<div className="mt-3.5 flex flex-col">
					{TODAY_PLAN.map((step, i) => (
						<div
							key={i}
							className="flex gap-3 py-2.5"
							style={{
								borderBottom: i < TODAY_PLAN.length - 1 ? "1px solid var(--color-line)" : "none",
							}}
						>
							<span className="w-[38px] shrink-0 pt-[3px] font-plex text-[9px] uppercase tracking-[.08em] text-amber">
								{step.time}
							</span>
							<div>
								<div className="font-condensed text-[12px] font-semibold uppercase leading-[1.2] tracking-[.14em] text-bone">
									{step.label}
								</div>
								<div className="mt-[3px] font-barlow text-[12px] leading-[1.45] text-steel">{step.note}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

/* ─── CURRICULUM MAP + THEORY (col 3) ─────────────────────────────────────── */

function CurriculumColumn() {
	return (
		<div className="flex flex-col gap-px">
			{/* Curriculum */}
			<div className="border border-line bg-panel px-5 py-4">
				<div className="flex items-baseline justify-between">
					<Eyebrow tone="amber">Curriculum · 5 Levels</Eyebrow>
					<Link
						to="/map"
						className="font-condensed text-[10px] font-semibold uppercase tracking-[.16em] text-steel no-underline transition-colors duration-[120ms] hover:text-amber"
					>
						Full Map →
					</Link>
				</div>
				<div className="mt-3.5 flex flex-col">
					{CURRICULUM.map((lvl, i) => {
						const isActive = lvl.status === "active";
						const pct = lvl.total > 0 ? Math.round((lvl.progress / lvl.total) * 100) : 0;
						return (
							<div
								key={lvl.code}
								className="py-[11px]"
								style={{
									borderBottom: i < CURRICULUM.length - 1 ? "1px solid var(--color-line)" : "none",
									opacity: lvl.status === "locked" ? 0.5 : 1,
								}}
							>
								<div
									className="flex items-start gap-2.5"
									style={{ marginBottom: isActive ? "8px" : 0 }}
								>
									<Badge
										as="plate"
										variant={isActive ? "amber" : "default"}
										style={{ fontSize: "13px", padding: "4px 7px 3px", flexShrink: 0 }}
									>
										{lvl.code}
									</Badge>
									<div className="min-w-0 flex-1">
										<div className="font-condensed text-[12px] font-semibold uppercase leading-[1.2] tracking-[.14em]">
											{lvl.to ? (
												<Link
													to={lvl.to}
													className="text-bone no-underline transition-colors duration-[120ms] hover:text-amber"
												>
													{lvl.title}
												</Link>
											) : (
												<span className={isActive ? "text-bone" : "text-steel"}>{lvl.title}</span>
											)}
										</div>
										<div className="mt-0.5 font-plex text-[10px] tracking-[.04em] text-steel">
											KEY · {lvl.key}
										</div>
									</div>
									<span
										className="shrink-0 pt-0.5 font-plex text-[10px] tracking-[.04em]"
										style={{ color: isActive ? "var(--color-amber)" : "var(--color-steel)" }}
									>
										{isActive ? `${lvl.progress}/${lvl.total}` : "LOCKED"}
									</span>
								</div>
								{isActive && (
									<div className="ml-[52px] h-[4px] border border-line bg-well">
										<div className="h-full bg-amber" style={{ width: `${pct}%` }} />
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>

			{/* Theory Companion */}
			<div className="border border-line bg-panel px-5 py-4">
				<Eyebrow tone="steel">Theory Companion · Level 1</Eyebrow>
				<div className="mt-3">
					<div className="mb-2 font-condensed text-[13px] font-bold uppercase tracking-[.16em] text-bone">
						A Natural Minor · The Home Key
					</div>
					<p className="m-0 mb-3.5 font-barlow text-[13px] leading-[1.58] text-steel">
						Every drill in this level lives in A minor. Before you graduate, you'll own this key — in every
						position, at any tempo.
					</p>

					{/* Brightness dial */}
					<div className="mb-3.5">
						<span className="mb-1.5 block font-condensed text-[9px] font-semibold uppercase tracking-[.26em] text-steel">
							Scale Brightness · Aeolian (Natural Minor)
						</span>
						<div className="flex gap-0.5">
							{BRIGHTNESS.map((c, i) => (
								<div
									key={c}
									className="h-[18px] flex-1 border border-line"
									style={{
										background: c,
										outline: i === 4 ? "2px solid var(--color-amber)" : "none",
										outlineOffset: "1px",
									}}
								/>
							))}
						</div>
						<div className="mt-1 flex justify-between font-plex text-[9px] tracking-[.04em] text-steel">
							<span>BRIGHT</span>
							<span>← YOU ARE HERE</span>
							<span>DARK</span>
						</div>
					</div>

					<div className="mb-3.5 border border-line border-l-[3px] border-l-amber bg-well px-2.5 py-2 font-plex text-[11px] tracking-[.06em] text-steel">
						A B C D E F G A
						<br />
						<span className="text-[10px] text-amber">1 2 ♭3 4 5 ♭6 ♭7 8</span>
					</div>

					<Button variant="outline" size="sm" to="/theory/building-blocks">
						Open Theory Track →
					</Button>
				</div>
			</div>
		</div>
	);
}

/* ─── ROUTE ───────────────────────────────────────────────────────────────── */

export const links: Route.LinksFunction = () => academyLinks();

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "FretForge — Dashboard" },
		{
			name: "description",
			content: "Your practice dashboard: resume your current drill, track BPM history, and chase the next gate.",
		},
	];
}

export default function Home() {
	return (
		<div className="academy">
			<main className="mx-auto max-w-[1180px] px-[26px] pt-7 pb-20">
				<HeroBanner />

				<hr className="my-4 border-0 border-t-[3px] border-double border-line" />

				<div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[1.75fr_1.2fr_1.2fr]">
					<DrillPanel />
					<BPMColumn />
					<CurriculumColumn />
				</div>
			</main>
		</div>
	);
}
