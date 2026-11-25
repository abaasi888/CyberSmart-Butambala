import { T } from "@/components/T";

export interface DownloadItem {
  file: string;
  title: string;
  languageKey: "downloads.languageEnglish" | "downloads.languageLuganda";
}

export function DownloadCard({ item }: { item: DownloadItem }) {
  return (
    <article className="download-card">
      <span className="download-icon" aria-hidden="true">PDF</span>
      <div className="download-copy">
        <h2>{item.title}</h2>
        <p><T k={item.languageKey} /> · <T k="downloads.size" /></p>
        <p className="placeholder-label"><T k="common.placeholder" /></p>
      </div>
      <a className="button button-outline" href={`/downloads/${item.file}`} download>
        <T k="common.download" /><span className="visually-hidden">: {item.title}</span>
      </a>
    </article>
  );
}
