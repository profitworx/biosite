import { NextRequest } from "next/server";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://bio.johndeacon.co.za").replace(/\/$/, "");

const routes: Array<{
  path: string;
  changefreq: string;
  priority: number;
}> = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/cam", changefreq: "weekly", priority: 0.7 },
  { path: "/dtlm", changefreq: "weekly", priority: 0.7 },
  { path: "/insights", changefreq: "weekly", priority: 0.7 },
  { path: "/professional", changefreq: "weekly", priority: 0.7 },
  { path: "/tools", changefreq: "weekly", priority: 0.7 },
  { path: "/xematix", changefreq: "weekly", priority: 0.7 },
];

function generateSitemapXml() {
  const lastmod = new Date().toISOString();
  const urls = routes
    .map(({ path, changefreq, priority }) => {
      const url = `${SITE_URL}${path}`;
      return `    <url>\n      <loc>${url}</loc>\n      <lastmod>${lastmod}</lastmod>\n      <changefreq>${changefreq}</changefreq>\n      <priority>${priority.toFixed(1)}</priority>\n    </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export async function GET(_req: NextRequest) {
  const xml = generateSitemapXml();
  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, max-age=3600",
    },
  });
}
