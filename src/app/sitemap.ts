import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://magazinegerrayd.com.br";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-08-03"),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
