import type { Metadata } from "next";
import { Layout } from "@/components/Layout";
import { LocaleProvider } from "@/components/LocaleProvider";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import "../styles/variables.css";
import "../styles/globals.css";
import "../styles/layout.css";
import "../styles/components.css";
import "../styles/pages.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: "Free systems-security lessons for primary and secondary schools in Butambala District, Uganda.",
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: "Free systems-security lessons for schools and communities in Butambala District, Uganda."
  },
  twitter: {
    card: "summary",
    title: SITE_NAME,
    description: "Free systems-security lessons for schools in Butambala District, Uganda."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <LocaleProvider>
          <Layout>{children}</Layout>
        </LocaleProvider>
      </body>
    </html>
  );
}
