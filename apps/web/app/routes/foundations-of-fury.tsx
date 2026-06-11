import { DrillSheet } from "~/academy/components/DrillSheet";
import { level1 } from "~/academy/data/level-1-foundations";
import { academyLinks } from "~/academy/links";
import type { Route } from "./+types/foundations-of-fury";

export const links: Route.LinksFunction = () => academyLinks();

export function meta({}: Route.MetaArgs) {
	return [
		{ title: level1.meta.docTitle },
		{ name: "description", content: level1.meta.description },
	];
}

export default function FoundationsOfFury() {
	return <DrillSheet sheet={level1} />;
}
