import type { MetadataRoute } from "next";
import { pillars } from "@/data/site";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://theinvestcoach.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/process", priority: 0.8 },
    { path: "/results", priority: 0.7 },
    { path: "/mission", priority: 0.7 },
    { path: "/our-story", priority: 0.7 },
    { path: "/faq", priority: 0.6 },
    { path: "/start-a-project", priority: 0.9 },
  ];

  const lastModified = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...pillars.map((p) => ({
      url: `${baseUrl}/services/${p.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
