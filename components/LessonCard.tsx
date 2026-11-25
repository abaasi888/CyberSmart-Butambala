"use client";

import Link from "next/link";
import type { Lesson } from "@/content/lessons";
import { T } from "@/components/T";
import { useLocale } from "@/components/LocaleProvider";

export function LessonCard({ lesson, translatedLesson, index }: { lesson: Lesson; translatedLesson: Lesson; index: number }) {
  const { locale } = useLocale();
  const content = locale === "lg" ? translatedLesson : lesson;

  return (
    <article className="lesson-card">
      <p className="card-kicker"><T k="lessons.module" /> {String(index + 1).padStart(2, "0")}</p>
      <h2>{content.title}</h2>
      <p>{content.summary}</p>
      <ul className="tag-list" aria-label={content.systemsSecurityCore}>
        <li>{content.systemsSecurityCore}</li>
      </ul>
      <Link className="text-link" href={`/lessons/${content.slug}/`}>
        <T k="common.viewLesson" /><span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
