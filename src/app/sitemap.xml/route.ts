import { SITE_URL, getPrimaryNavigationRoutes } from "@/lib/site";

const routes = getPrimaryNavigationRoutes();

function generateSitemapXml() {
  const urls = routes
    .map(({ path, changeFrequency, priority, lastModified }) => {
      const url = `${SITE_URL}${path}`;
      const lastmod = new Date(lastModified).toISOString();
      return `    <url>\n      <loc>${url}</loc>\n      <lastmod>${lastmod}</lastmod>\n      <changefreq>${changeFrequency}</changefreq>\n      <priority>${priority.toFixed(1)}</priority>\n    </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export async function GET() {
  const xml = generateSitemapXml();
  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, max-age=3600",
    },
  });
}
