import type { MetadataRoute } from "next";
import { lessons } from "@/content/lessons";
import { SITE_URL } from "@/lib/seo";

const paths = ["/", "/about/", "/lessons/", "/scan/", "/downloads/", "/license/", "/accessibility/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = SITE_URL.replace(/\/+$/, "");
  const staticPages = paths.map((path) => ({
    url: `${origin}${path}`,
    lastModified: new Date()
  }));
  const lessonPages = lessons.map(({ slug }) => ({
    url: `${origin}/lessons/${slug}/`,
    lastModified: new Date()
  }));

  return [...staticPages, ...lessonPages];
}
