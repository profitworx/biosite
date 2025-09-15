import type { MetadataRoute } from "next";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/cam",
    "/dtlm",
    "/insights",
    "/tools",
    "/xematix",
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}

