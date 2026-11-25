import type { Metadata } from "next";

export const SITE_NAME = "CyberSmart Butambala";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const canonical = path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`;
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url: canonical
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description
    }
  };
}
