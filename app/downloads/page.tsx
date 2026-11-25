import { DownloadCard, type DownloadItem } from "@/components/DownloadCard";
import { T } from "@/components/T";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Downloads",
  "Free, openly licensed cybersecurity education downloads for students and teachers.",
  "/downloads/"
);

const downloads: DownloadItem[] = [
  { file: "cybersmart-book-en.pdf", title: "CyberSmart book", languageKey: "downloads.languageEnglish", approximateSize: "Approx. 43 KB" },
  { file: "cybersmart-book-lg.pdf", title: "CyberSmart book", languageKey: "downloads.languageLuganda", approximateSize: "Approx. 54 KB" },
  { file: "primary-guide-en.pdf", title: "Primary safety guide", languageKey: "downloads.languageEnglish", approximateSize: "Approx. 16 KB" },
  { file: "primary-guide-lg.pdf", title: "Primary safety guide", languageKey: "downloads.languageLuganda", approximateSize: "Approx. 19 KB" },
  { file: "teacher-lesson-plans.pdf", title: "Teacher lesson plans", languageKey: "downloads.languageEnglish", approximateSize: "Approx. 40 KB" }
];

export default function DownloadsPage() {
  return (
    <div className="container page-container">
      <header className="page-heading">
        <p className="eyebrow eyebrow-dark"><T k="downloads.eyebrow" /></p>
        <h1><T k="downloads.title" /></h1>
        <p className="page-lede"><T k="downloads.intro" /></p>
      </header>
      <p className="license-banner"><T k="downloads.openLicense" /></p>
      <div className="download-list">
        {downloads.map((item) => <DownloadCard item={item} key={item.file} />)}
      </div>
      <p className="download-note"><T k="downloads.note" /></p>
    </div>
  );
}
