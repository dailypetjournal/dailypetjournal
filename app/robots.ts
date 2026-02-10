import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://dailypetjournal.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Explicitly allow common AI/LLM crawlers so they can index and cite content
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "Anthropic-AI", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  };
}
