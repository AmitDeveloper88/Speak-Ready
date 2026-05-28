import { lessons } from '../data/lessons';
import { getLessonItemLabel } from '../utils/lessonContent';

export default function Home({ onOpenLesson }) {
  const allLessons = lessons.filter((l) => l.mode === 'shadow');

  return (
    <>
      <header className="mb-6">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand">
          English speaking
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          SpeakReady
        </h1>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/70">
          Build fluency with shadowing and real conversations — no login, works
          offline.
        </p>
      </header>

      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/55">
        {allLessons.length} conversations
      </p>

      <div className="space-y-3 pb-6">
        {allLessons.map((lesson) => (
          <button
            key={lesson.id}
            type="button"
            onClick={() => onOpenLesson(lesson.id)}
            className="lesson-card w-full text-left"
          >
            <h2 className="font-semibold text-white">{lesson.title}</h2>
            {lesson.description && (
              <p className="mt-1 line-clamp-2 text-sm text-white/70">
                {lesson.description}
              </p>
            )}
            <p className="mt-3 text-xs font-medium text-brand">
              {getLessonItemLabel(lesson)} →
            </p>
          </button>
        ))}
      </div>
    </>
  );
}
