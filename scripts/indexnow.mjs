/**
 * Submits the sitemap's URLs to IndexNow after a deploy.
 *
 * IndexNow is a shared endpoint: one call reaches Bing, Yandex, Naver and
 * Seznam. Google does not participate, so it is not a replacement for
 * Search Console — it covers the engines Google does not.
 *
 * The key file in public/ proves ownership; both must stay in step.
 *
 *   node scripts/indexnow.mjs
 */

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const KEY = "";
const HOST = "www.fastexmedia.com";

const sitemap = readFileSync(join(__dirname, "..", "out", "sitemap.xml"), "utf8");
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (!urlList.length) {
  console.error("No URLs found in out/sitemap.xml — build first.");
  process.exit(1);
}

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList,
};

const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

// 200 = accepted, 202 = accepted but key still being validated.
console.log(`IndexNow: ${res.status} ${res.statusText} — ${urlList.length} URLs submitted`);
if (!res.ok && res.status !== 202) console.error(await res.text());
