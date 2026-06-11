import type { LinkDescriptor } from "react-router";


const FONTS =
  "https://fonts.googleapis.com/css2?family=Saira+Stencil+One&family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600&family=IBM+Plex+Mono:wght@400;600&display=swap";

/** Shared <link>s for every academy sheet: the academy fonts. */
export function academyLinks(): LinkDescriptor[] {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    { rel: "stylesheet", href: FONTS },
  ];
}
