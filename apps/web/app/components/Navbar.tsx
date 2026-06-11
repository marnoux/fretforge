import { NavLink } from "react-router";

/** Top-level destinations. Most are placeholders we'll populate per-screen later. */
const LINKS = [
	{ to: "/", label: "Dashboard", end: true },
	{ to: "/library", label: "Library" },
	{ to: "/map", label: "Map" },
	{ to: "/practice", label: "Practice" },
	{ to: "/tab-vault", label: "Tab Vault" },
	{ to: "/log", label: "Log" },
];

const STREAK = 5;
const USER_INITIAL = "A";

function Wordmark() {
	return (
		<NavLink
			to="/"
			className="select-none font-stencil text-[22px] uppercase leading-[0.9] tracking-[.01em]"
		>
			<span className="text-bone">Fret</span>
			<span className="text-amber">Forge</span>
		</NavLink>
	);
}

export function Navbar() {
	return (
		<header
			className="sticky top-0 z-20 flex h-[54px] items-center justify-between border-b border-line px-[26px] backdrop-blur-[8px]"
			style={{ background: "color-mix(in srgb, var(--color-tolex) 88%, transparent)" }}
		>
			<div className="flex items-center gap-7">
				<Wordmark />
				<nav className="flex gap-0.5">
					{LINKS.map((link) => (
						<NavLink
							key={link.to}
							to={link.to}
							end={link.end}
							className={({ isActive }) =>
								`border px-3 py-1.5 font-condensed text-[12px] font-semibold uppercase leading-none tracking-[.16em] no-underline transition-colors duration-[120ms] ${
									isActive
										? "border-line text-amber"
										: "border-transparent text-steel hover:border-amber hover:text-bone"
								}`
							}
						>
							{link.label}
						</NavLink>
					))}
				</nav>
			</div>
			<div className="flex items-center gap-5">
				<span className="font-plex text-[12px] tracking-[.06em] text-steel">
					STREAK <b className="text-amber">{STREAK}</b>
				</span>
				<div className="grid h-[34px] w-[34px] select-none place-items-center border border-ember font-stencil text-[16px] text-amber">
					{USER_INITIAL}
				</div>
			</div>
		</header>
	);
}
