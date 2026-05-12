import type { MetadataRoute } from "next";

const BASE = "https://snapfix.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, priority: 1 },
    { url: `${BASE}/terms`, lastModified: now, priority: 0.3 },
    { url: `${BASE}/privacy`, lastModified: now, priority: 0.3 },
    { url: `${BASE}/cookies`, lastModified: now, priority: 0.3 },
  ];
}
