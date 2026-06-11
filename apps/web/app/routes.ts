import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("map", "routes/map.tsx"),
  route("library", "routes/library.tsx"),
  route("drills/foundations-of-fury", "routes/foundations-of-fury.tsx"),
  route("drills/technical-arsenal", "routes/technical-arsenal.tsx"),
  route("theory/building-blocks", "routes/building-blocks.tsx"),
] satisfies RouteConfig;
