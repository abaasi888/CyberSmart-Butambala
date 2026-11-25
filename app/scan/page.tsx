import { LinkScanner } from "@/components/LinkScanner";
import { T } from "@/components/T";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Scan a Link",
  "Check a suspicious link against Google Safe Browsing threat lists.",
  "/scan/"
);

export default function ScanPage() {
  return (
    <div className="container page-container">
      <header className="page-heading">
        <p className="eyebrow eyebrow-dark"><T k="scan.eyebrow" /></p>
        <h1 id="scan-tool-heading"><T k="scan.title" /></h1>
      </header>
      <LinkScanner />
    </div>
  );
}
