import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://magazinegerrayd.com.br";

  return [
    "",
    "/achadinhos",
    "/buscar?termo=ofertas",
    "/admin/login",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date("2026-07-27"),
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
