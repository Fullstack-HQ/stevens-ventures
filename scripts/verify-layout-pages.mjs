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
const expectedSectorLinks = [
  ["/sectors/automotive-retail/", "Automotive Retail"],
  ["/sectors/technology-marketing/", "Technology&amp;Marketing"],
  ["/sectors/investors/", "Investors"],
  ["/sectors/rental-short-term-accommodation/", "Rental &amp; Short Term Accommodation"],
  ["/sectors/film/", "Film"],
];
const sectorParents = [...header.matchAll(/<a href="\/#companies-cards">Sectors <img/g)];
assert(sectorParents.length === 2, "Expected linked Sectors parent in desktop and mobile menus");

const menuBodies = [...header.matchAll(/<ul class="child-list">([\s\S]*?)<\/ul>/g)].map((match) => match[1]);
assert(menuBodies.length === 2, "Expected desktop and mobile sector menus");
for (const [index, menuBody] of menuBodies.entries()) {
  const links = [...menuBody.matchAll(/<a href="([^"]+)">([^<]+)<\/a>/g)].map((match) => [match[1], match[2]]);
  assert(
    JSON.stringify(links) === JSON.stringify(expectedSectorLinks),
    `${index === 0 ? "Desktop" : "Mobile"} Sectors menu must contain the five live links with Automotive Retail first`,
  );
}

const footer = readFileSync(resolve(root, "partials/footer.html"), "utf8");
const footerSectorBody = footer.match(/<p class="footer-title">Sectors<\/p>\s*<ul class="footer-list">([\s\S]*?)<\/ul>/)?.[1];
assert(footerSectorBody, "Footer is missing the live Sectors link group");
const expectedFooterLinks = [
  ["/sectors/technology-marketing/", "Technology&amp;Marketing"],
  ["/sectors/automotive-retail/", "Automotive Retail"],
  ["/sectors/investors/", "Investors"],
  ["/sectors/rental-short-term-accommodation/", "Rental &amp; Short Term Accommodation"],
  ["/sectors/film/", "Film"],
];
const footerSectorLinks = [...footerSectorBody.matchAll(/<a href="([^"]+)">([^<]+)<\/a>/g)].map((match) => [match[1], match[2]]);
assert(
  JSON.stringify(footerSectorLinks) === JSON.stringify(expectedFooterLinks),
  "Footer must preserve the five linked live Sectors items",
);
for (const [href, label] of [
  ["/terms/", "Terms and Conditions"],
  ["/privacy/", "Privacy Policy"],
  ["/cookies/", "Cookies Policy"],
]) {
  assert(footer.includes(`<a href="${href}">${label}</a>`), `Footer is missing linked ${label}`);
}
assert(
  footer.includes('<a href="mailto:ns@stevensventures.com">ns@stevensventures.com</a>'),
  "Footer must keep the working source email link",
);
assert(!footer.includes("Business Lines"), "Footer must not regress to the old Business Lines menu");

const sitemap = readFileSync(resolve(root, "sitemap.xml"), "utf8");
const sitemapLocations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert(sitemapLocations.length === 18, `Sitemap must contain 18 URLs, found ${sitemapLocations.length}`);
for (const route of routes) {
  assert(
    sitemapLocations.includes(`https://www.stevensventures.com/${route}/`),
    `Sitemap is missing ${route}`,
  );
}

console.log(
  `Verified ${routes.length} source-backed layout pages, both linked Sectors menu variants, the linked live footer, and the 18-URL sitemap.`,
);
