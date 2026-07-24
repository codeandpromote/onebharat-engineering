import type { MetadataRoute } from "next";
import { company, nav } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${company.domain}`;
  return nav.map((item) => ({
    url: `${base}${item.href === "/" ? "" : item.href}`,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
