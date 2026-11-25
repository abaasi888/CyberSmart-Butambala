import english from "@/locales/en.json";
import luganda from "@/locales/lg.json";

export type Locale = "en" | "lg";
export type TranslationKey = keyof typeof english;

const dictionaries = { en: english, lg: luganda };

export function translate(locale: Locale, key: TranslationKey): string {
  return dictionaries[locale][key] ?? english[key] ?? key;
}
