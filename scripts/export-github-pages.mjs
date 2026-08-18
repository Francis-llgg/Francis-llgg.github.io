import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const outputRoot = path.join(projectRoot, "docs");
const routes = [
  "/",
];

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(path.join(projectRoot, "dist/client"), outputRoot, { recursive: true });

const workerModule = await import(path.join(projectRoot, "dist/server/index.js"));
const workerContext = {
  waitUntil() {},
  passThroughOnException() {},
};

for (const route of routes) {
  const response = await workerModule.default.fetch(
    new Request(new URL(route, "http://localhost")),
    {},
    workerContext,
  );
  if (!response.ok) {
    throw new Error(`Failed to export ${route}: ${response.status} ${response.statusText}`);
  }

  let html = await response.text();
  const canonicalUrl = new URL(route, "https://francis-llgg.github.io").href;
  html = html.replace(
    "</head>",
    `<link rel="canonical" href="${canonicalUrl}"/><meta property="og:url" content="${canonicalUrl}"/></head>`,
  );

  const relativeDirectory = route === "/" ? "" : route.slice(1);
  const routeDirectory = path.join(outputRoot, relativeDirectory);
  await mkdir(routeDirectory, { recursive: true });
  await writeFile(path.join(routeDirectory, "index.html"), html, "utf8");
}

await writeFile(path.join(outputRoot, ".nojekyll"), "", "utf8");
await cp(path.join(outputRoot, "index.html"), path.join(outputRoot, "404.html"));

console.log(`Exported ${routes.length} routes to ${outputRoot}`);
