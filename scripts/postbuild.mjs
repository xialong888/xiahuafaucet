// Static entry points for client-side routes.
// The host serves a real 404 for unknown paths, so every route needs its own
// folder + index.html; the SPA then reads location.pathname and renders the page.
import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const dist = join(process.cwd(), "dist");
const entry = join(dist, "index.html");

const routes = ["products/abs-faucet-handles", "blog/abs-vs-brass-faucet-handles"];

if (!existsSync(entry)) {
  console.error("postbuild: dist/index.html missing");
  process.exit(1);
}

for (const route of routes) {
  const dir = join(dist, route);
  mkdirSync(dir, { recursive: true });
  copyFileSync(entry, join(dir, "index.html"));
  console.log("postbuild: entry ->", route + "/");
}
