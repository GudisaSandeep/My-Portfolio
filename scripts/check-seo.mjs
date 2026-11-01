import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const verificationDefaults = JSON.parse(
  await readFile(
    new URL("../lib/site-verification.json", import.meta.url),
    "utf8",
  ),
);

// Audit the actual prerendered output, including content available without JavaScript.
const output = join(process.cwd(), ".next/server/app");
const origin = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://sandeepgudisa.netlify.app/",
).origin;
const indexable =
  process.env.SITE_NOINDEX !== "true" &&
  !["preview", "development"].includes(process.env.VERCEL_ENV || "") &&
  (!process.env.CONTEXT || process.env.CONTEXT === "production");
const routes = [
  { path: "/", file: "index.html" },
  { path: "/about", file: "about.html" },
  { path: "/projects/fixyt", file: "projects/fixyt.html" },
];
const absolute = (path) => new URL(path, origin).href;
const decode = (value) =>
  value
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
const attribute = (tag, name) =>
  decode(tag.match(new RegExp(`\\b${name}="([^"]*)"`, "i"))?.[1] || "");
const meta = (html, name) =>
  [...html.matchAll(/<meta\b[^>]*>/gi)]
    .map((m) => m[0])
    .filter(
      (tag) =>
        attribute(tag, "name") === name || attribute(tag, "property") === name,
    )
    .map((tag) => attribute(tag, "content"));

for (const route of routes) {
  const html = await readFile(join(output, route.file), "utf8");
  const canonical = [...html.matchAll(/<link\b[^>]*>/gi)]
    .map((m) => m[0])
    .filter((tag) => attribute(tag, "rel") === "canonical")
    .map((tag) => new URL(attribute(tag, "href")).href);
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || "");
  assert.deepEqual(
    canonical,
    [absolute(route.path)],
    `${route.path}: one canonical URL`,
  );
  assert(
    title.includes("Sandeep Gudisa"),
    `${route.path}: descriptive person title`,
  );
  assert.equal(
    meta(html, "description").length,
    1,
    `${route.path}: one description`,
  );
  assert.equal(
    meta(html, "og:title")[0],
    title,
    `${route.path}: sharing title matches`,
  );
  assert.equal(new URL(meta(html, "og:url")[0]).href, absolute(route.path));
  assert.equal(meta(html, "twitter:card")[0], "summary_large_image");
  assert(new URL(meta(html, "og:image")[0]).origin === origin);
  assert.equal(
    (html.match(/<h1\b/g) || []).length,
    1,
    `${route.path}: one primary heading`,
  );
  const directives = meta(html, "robots")[0].split(/\s*,\s*/);
  assert(
    directives.includes(indexable ? "index" : "noindex"),
    `${route.path}: intended index policy`,
  );
  assert(
    directives.includes(indexable ? "follow" : "nofollow"),
    `${route.path}: intended follow policy`,
  );
  assert(!/href="tel:/.test(html), `${route.path}: no phone links`);
  assert(
    !html.includes("6300050907"),
    `${route.path}: removed mobile number stays excluded`,
  );
  for (const [env, name, fallback] of [
    [
      "GOOGLE_SITE_VERIFICATION",
      "google-site-verification",
      verificationDefaults.google,
    ],
    ["BING_SITE_VERIFICATION", "msvalidate.01", undefined],
  ]) {
    const expectedVerification = process.env[env]?.trim() || fallback;
    assert.deepEqual(
      meta(html, name),
      expectedVerification ? [expectedVerification] : [],
      `${route.path}: optional ${name}`,
    );
  }
  const schemas = [
    ...html.matchAll(
      /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ].map((m) => JSON.parse(m[1]));
  const nodes = schemas.flatMap((schema) => schema["@graph"] || [schema]);
  const people = nodes.filter((n) => n["@type"] === "Person");
  assert.equal(people.length, 1, `${route.path}: consistent person identity`);
  assert.equal(people[0]["@id"], absolute("/#person"));
  for (const id of [
    "https://fixyt.in/#organization",
    "https://whitesealabs.com/#organization",
  ]) {
    assert.equal(
      nodes.find((n) => n["@id"] === id)?.founder?.["@id"],
      people[0]["@id"],
      `${route.path}: founder relationship`,
    );
  }
  assert(
    !nodes.some((n) => n["@type"] === "FAQPage"),
    "No unsupported FAQ-rich-result markup",
  );
  if (route.path === "/about") {
    const page = nodes.find((n) => n["@type"] === "ProfilePage");
    assert.equal(page.mainEntity["@id"], people[0]["@id"]);
    assert.equal(page.hasPart.length, 6);
    for (const section of page.hasPart)
      assert(
        html.includes(`id="${new URL(section.url).hash.slice(1)}"`),
        "Structured section exists visibly",
      );
    const list = page.hasPart.find((n) => n.mainEntity)?.mainEntity;
    assert.equal(list.numberOfItems, 9);
    assert.equal(list.itemListElement.length, 9);
    for (const entry of list.itemListElement)
      assert(
        html.includes(`id="${new URL(entry.item.url).hash.slice(1)}"`),
        "Structured project exists visibly",
      );
    const visibleHtml = html.replace(/<script\b[\s\S]*?<\/script>/gi, "");
    for (const question of [
      "Who is Sandeep Gudisa?",
      "What is Fixyt, and who founded it?",
      "Where is Sandeep based?",
      "How can I get in touch?",
    ])
      assert(
        visibleHtml.includes(question),
        `Server-rendered answer question: ${question}`,
      );
    assert.equal((html.match(/class="bio-build-notes"/g) || []).length, 9);
  }
  console.log(
    `PASS ${route.path}: metadata, identity, founder relationships, and index policy`,
  );
}
const robots = await readFile(join(output, "robots.txt.body"), "utf8");
const sitemap = await readFile(join(output, "sitemap.xml.body"), "utf8");
if (indexable) {
  assert(robots.includes("Allow: /"));
  assert(robots.includes(absolute("/sitemap.xml")));
  for (const route of routes)
    assert(sitemap.includes(`<loc>${absolute(route.path)}</loc>`));
  assert.equal((sitemap.match(/<loc>/g) || []).length, routes.length);
} else {
  assert(robots.includes("Disallow: /"));
  assert(!robots.includes("Sitemap:"));
  assert(!sitemap.includes("<loc>"));
}
const image = await readFile(join(output, "opengraph-image.body"));
assert.equal(image.subarray(1, 4).toString(), "PNG");
assert.equal(image.readUInt32BE(16), 1200);
assert.equal(image.readUInt32BE(20), 630);
console.log(
  "PASS robots, sitemap, server-rendered biography content, project graph, verification tags, and 1200×630 social image",
);
