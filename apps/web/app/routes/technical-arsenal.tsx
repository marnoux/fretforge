import { DrillSheet } from "~/academy/components/DrillSheet";
import { level2Arsenal } from "~/academy/data/level-2-technical-arsenal";
import { academyLinks } from "~/academy/links";
import type { Route } from "./+types/technical-arsenal";

export const links: Route.LinksFunction = () => academyLinks();

export function meta({}: Route.MetaArgs) {
	return [
		{ title: level2Arsenal.meta.docTitle },
		{ name: "description", content: level2Arsenal.meta.description },
	];
}

export default function TechnicalArsenal() {
	return <DrillSheet sheet={level2Arsenal} />;
}
