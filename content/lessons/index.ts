import { lesson as threatModels } from "@/content/lessons/threat-models";
import { lesson as authentication } from "@/content/lessons/authentication";
import { lesson as phishing } from "@/content/lessons/phishing";
import { lesson as softwareIntegrity } from "@/content/lessons/software-integrity";
import { lesson as mobileMoney } from "@/content/lessons/mobile-money";
import { lesson as privacy } from "@/content/lessons/privacy";
import { lesson as threatModelsLg } from "@/content/lessons/threat-models.lg";
import { lesson as authenticationLg } from "@/content/lessons/authentication.lg";
import { lesson as phishingLg } from "@/content/lessons/phishing.lg";
import { lesson as softwareIntegrityLg } from "@/content/lessons/software-integrity.lg";
import { lesson as mobileMoneyLg } from "@/content/lessons/mobile-money.lg";
import { lesson as privacyLg } from "@/content/lessons/privacy.lg";
import type { Lesson } from "@/content/lessons/types";
import type { Locale } from "@/lib/i18n";

export type { Lesson } from "@/content/lessons/types";

const englishLessons: Lesson[] = [
  threatModels,
  authentication,
  phishing,
  softwareIntegrity,
  mobileMoney,
  privacy
];

const lugandaLessons: Lesson[] = [
  threatModelsLg,
  authenticationLg,
  phishingLg,
  softwareIntegrityLg,
  mobileMoneyLg,
  privacyLg
];

const lessonsByLocale: Record<Locale, Lesson[]> = {
  en: englishLessons,
  lg: lugandaLessons
};

export const lessons = englishLessons;

export function getLessons(locale: Locale = "en"): Lesson[] {
  return lessonsByLocale[locale];
}

export function getLesson(slug: string, locale: Locale = "en"): Lesson | undefined {
  return getLessons(locale).find((lesson) => lesson.slug === slug);
}
