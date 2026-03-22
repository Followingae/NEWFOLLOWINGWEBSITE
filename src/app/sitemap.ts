import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://following.ae";
  const now = new Date();

  const staticPages = [
    "",
    "/work",
    "/process",
    "/contact",
    "/pricing",
    "/platform",
    "/influencer-marketing",
    "/productions",
    "/ugc",
    "/smm",
    "/manifesto",
    "/careers",
    "/insights",
  ].map((path) => ({
    url: `${site}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const workPages = caseStudies.map((study) => ({
    url: `${site}/work/${study.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...workPages];
}
