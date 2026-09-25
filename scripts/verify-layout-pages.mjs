import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const routes = [
  "sectors/technology-marketing",
  "sectors/automotive-retail",
  "sectors/rental-short-term-accommodation",
  "sectors/investors",
  "sectors/film",
  "terms",
  "privacy",
  "cookies",
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

for (const route of routes) {
  const sourcePath = resolve(root, route, "index.html");
  const outputPath = resolve(root, "dist", route, "index.html");
  assert(existsSync(sourcePath), `Missing source page: ${route}`);
  assert(existsSync(outputPath), `Missing built page: ${route}`);

  const source = readFileSync(sourcePath, "utf8");
  const output = readFileSync(outputPath, "utf8");

  assert(source.includes('/src/main.js'), `${route} does not load the main source entry`);
  assert(source.includes('/src/assets/js/layout.js'), `${route} does not load the layout source entry`);
  assert(!source.includes('/assets/layout-'), `${route} pins a generated layout filename in source`);
  assert(!source.includes('/assets/style-'), `${route} pins a generated stylesheet filename in source`);
  assert(output.includes('id="header"'), `${route} is missing the header mount`);
  assert(output.includes('id="footer"'), `${route} is missing the footer mount`);
  assert(!output.includes('layout--qlNmA3C.js'), `${route} still references the known missing layout bundle`);

  const localAssets = [...output.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)].map((match) => match[1]);
  assert(localAssets.length > 0, `${route} has no generated local assets`);
  for (const asset of localAssets) {
    assert(existsSync(resolve(root, "dist", asset.slice(1))), `${route} references missing built asset ${asset}`);
  }
}

const header = readFileSync(resolve(root, "partials/header.html"), "utf8");
const automotivePositions = [...header.matchAll(/Automotive Retail/g)].map((match) => match.index);
const technologyPositions = [...header.matchAll(/Technology&amp;Marketing/g)].map((match) => match.index);
assert(automotivePositions.length === 2, "Expected Automotive Retail in desktop and mobile menus");
assert(technologyPositions.length === 2, "Expected Technology & Marketing in desktop and mobile menus");
assert(automotivePositions.every((position, index) => position < technologyPositions[index]), "Automotive Retail must precede Technology & Marketing in both menus");

console.log(`Verified ${routes.length} source-backed layout pages and both menu variants.`);
