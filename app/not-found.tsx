import Link from "next/link";
import type { Metadata } from "next";
import { T } from "@/components/T";
import { SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The requested CyberSmart Butambala page could not be found.",
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `Page not found | ${SITE_NAME}`,
    description: "The requested CyberSmart Butambala page could not be found."
  },
  twitter: {
    card: "summary",
    title: `Page not found | ${SITE_NAME}`,
    description: "The requested CyberSmart Butambala page could not be found."
  }
};

export default function NotFoundPage() {
  return (
    <div className="container page-container not-found-page">
      <p className="eyebrow eyebrow-dark">404 · CYBERSMART BUTAMBALA</p>
      <h1><T k="notFound.title" /></h1>
      <p className="page-lede"><T k="notFound.message" /></p>
      <Link className="button button-primary" href="/"><T k="notFound.home" /><span aria-hidden="true">→</span></Link>
    </div>
  );
}
