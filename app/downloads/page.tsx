import { DownloadCard, type DownloadItem } from "@/components/DownloadCard";
import { T } from "@/components/T";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Downloads",
  "Free, openly licensed cybersecurity education downloads for students and teachers.",
  "/downloads/"
);

const downloads: DownloadItem[] = [
  { file: "cybersmart-book-en.pdf", title: "CyberSmart learning book", languageKey: "downloads.languageEnglish" },
  { file: "cybersmart-book-lg.pdf", title: "CyberSmart learning book", languageKey: "downloads.languageLuganda" },
  { file: "primary-guide-en.pdf", title: "Primary learner guide", languageKey: "downloads.languageEnglish" },
  { file: "primary-guide-lg.pdf", title: "Primary learner guide", languageKey: "downloads.languageLuganda" },
  { file: "teacher-lesson-plans.pdf", title: "Teacher lesson plans", languageKey: "downloads.languageEnglish" }
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
