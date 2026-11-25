"use client";

import { useLocale } from "@/components/LocaleProvider";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale();

  return (
    <div className="language-toggle" role="group" aria-label={t("language.choose")}>
      <button
        type="button"
        lang="en"
        aria-label={t("language.english")}
        aria-pressed={locale === "en"}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        lang="lg"
        aria-label={t("language.luganda")}
        aria-pressed={locale === "lg"}
        onClick={() => setLocale("lg")}
      >
        LG
      </button>
    </div>
  );
}
