import { Handlers } from "$fresh/server.ts";
import { articlesByPubDate, articlesByTag } from "$/content.gen.ts";

const BASE_URL = Deno.env.get("BASE_URL") || "https://en-di.org";

const sitemap: string = (() => {
  return `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${Object.keys(articlesByTag)
  .map(
    (tag) => `<url>
  <loc>${BASE_URL}/blog/tags/${tag}</loc>
  <lastmod>${new Date(articlesByTag[tag][0].date).toISOString()}</lastmod>
</url>`
  )
  .join("\n")}
${articlesByPubDate
  .map(
    (article) => `<url>
    <loc>${BASE_URL}/blog/${article.url}</loc>
    <lastmod>${new Date(article.date).toISOString()}</lastmod>
  </url>`
  )
  .join("\n")}
  <url>
    <loc>${BASE_URL}/blog</loc>
    <lastmod>${new Date(
      articlesByPubDate[0]?.date || Date.now()
    ).toISOString()}</lastmod>
  </url>
  <url>
  <loc>${BASE_URL}/</loc>
  <lastmod>${new Date(
    articlesByPubDate[0]?.date || Date.now()
  ).toISOString()}</lastmod>
  </url>
  <url>
  <loc>${BASE_URL}/about</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  </url>
  <url>
  <loc>${BASE_URL}/shop</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  </url>
</urlset>`;
})();

export const handler: Handlers = {
  HEAD(_req, _ctx) {
    return new Response(null, {
      headers: {
        "content-type": "application/xml",
        "content-length": new Blob([sitemap]).size.toString(),
      },
    });
  },
  GET(_req, _ctx) {
    return new Response(sitemap, {
      headers: { "content-type": "application/xml" },
    });
  },
};
