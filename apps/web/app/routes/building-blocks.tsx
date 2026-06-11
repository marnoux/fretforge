import type { Route } from "./+types/building-blocks";
import { DrillSheet } from "~/academy/components/DrillSheet";
import { academyLinks } from "~/academy/links";
import { level2Theory } from "~/academy/data/level-2-building-blocks";

export const links: Route.LinksFunction = () => academyLinks();

export function meta({}: Route.MetaArgs) {
  return [
    { title: level2Theory.meta.docTitle },
    { name: "description", content: level2Theory.meta.description },
  ];
}

export default function BuildingBlocks() {
  return <DrillSheet sheet={level2Theory} />;
}
