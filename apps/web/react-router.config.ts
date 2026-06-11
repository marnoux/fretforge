import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  // The academy sheets are static content — prerender them to static HTML at
  // build time. Interactive features (metronome, tab player) hydrate on top.
  // To host with no Node server later, flip `ssr` to false (SPA + prerender).
  async prerender() {
    return [
      "/drills/foundations-of-fury",
      "/drills/technical-arsenal",
      "/theory/building-blocks",
    ];
  },
  future: {
    v8_middleware: true,
    v8_passThroughRequests: true,
    v8_splitRouteModules: true,
    v8_trailingSlashAwareDataRequests: true,
    v8_viteEnvironmentApi: true,
  },
} satisfies Config;
