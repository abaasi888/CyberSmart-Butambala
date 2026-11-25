"use client";

import type { TranslationKey } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";

export function T({ k }: { k: TranslationKey }) {
  const { t } = useLocale();
  return <>{t(k)}</>;
}
