import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("page/home/index.tsx"),
  route("python", "page/python/index.tsx"),
  route("powerbi", "page/powerbi/index.tsx"), 
] satisfies RouteConfig;