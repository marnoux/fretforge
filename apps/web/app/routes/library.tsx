import { Link } from "react-router";
import { SHEETS } from "~/academy/curriculum";
import { academyLinks } from "~/academy/links";
import type { Route } from "./+types/library";

export const links: Route.LinksFunction = () => academyLinks();

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "FretForge — Library" },
		{
			name: "description",
			content: "The Shredder's Academy: every drill sheet and theory companion in the curriculum.",
		},
	];
}

export default function Library() {
	return (
		<div className="academy">
			<main className="mx-auto max-w-[900px] px-[26px] pt-9 pb-20">
				<p className="mb-3 font-condensed text-[12px] font-semibold uppercase tracking-[.30em] text-amber">
					The Shredder's Academy
				</p>
				<h1
					className="m-0 font-stencil font-normal uppercase leading-[0.96] tracking-[.01em] text-bone"
					style={{ fontSize: "clamp(36px, 6vw, 60px)" }}
				>
					The Library
				</h1>
				<p className="mt-4 mb-9 max-w-[64ch] font-barlow text-[15px] leading-[1.55] text-steel">
					Every drill sheet and theory companion in the curriculum. Pick a sheet to study the standard, the
					tab, and the tempo ladder. Earn each gate — the ladder will still be there.
				</p>

				<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
					{SHEETS.map((sheet) => (
						<Link
							key={sheet.slug}
							to={sheet.route}
							className="group flex flex-col gap-3 border border-line border-l-[3px] border-l-line bg-panel px-5 py-[18px] no-underline transition-colors duration-[120ms] hover:border-l-amber"
						>
							<div className="flex items-center gap-3.5">
								<span className="inline-block border border-ember px-[9px] pt-[6px] pb-1 text-center font-stencil text-[20px] leading-none text-amber">
									{sheet.code}
								</span>
								<div>
									<span className="block font-condensed text-[11px] font-semibold uppercase leading-none tracking-[.28em] text-steel">
										{sheet.kind}
									</span>
									<span className="mt-[5px] block font-condensed text-[18px] font-bold uppercase leading-[1.1] tracking-[.05em] text-bone transition-colors duration-[120ms] group-hover:text-amber">
										{sheet.title}
									</span>
								</div>
								<span className="ml-auto self-start font-plex text-[16px] text-steel transition-colors duration-[120ms] group-hover:text-amber">
									→
								</span>
							</div>
							<p className="m-0 font-barlow text-[13px] leading-[1.5] text-steel">{sheet.blurb}</p>
							<span className="font-plex text-[10px] tracking-[.06em] text-steel">
								KEY · <b className="text-amber">{sheet.key}</b>
							</span>
						</Link>
					))}
				</div>
			</main>
		</div>
	);
}
