import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://theinvestcoach.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/start-a-project/thank-you"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
