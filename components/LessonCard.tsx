import Link from "next/link";
import type { Lesson } from "@/content/lessons";
import { T } from "@/components/T";

export function LessonCard({ lesson, index }: { lesson: Lesson; index: number }) {
  return (
    <article className="lesson-card">
      <p className="card-kicker">MODULE {String(index + 1).padStart(2, "0")}</p>
      <h2>{lesson.title}</h2>
      <p>{lesson.summary}</p>
      <ul className="tag-list" aria-label="Systems security topics">
        {lesson.systemsSecurityCore.slice(0, 3).map((topic) => <li key={topic}>{topic}</li>)}
      </ul>
      <Link className="text-link" href={`/lessons/${lesson.slug}/`}>
        <T k="common.viewLesson" /><span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
