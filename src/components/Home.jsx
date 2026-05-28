import {
  getCatalogTopicCount,
  situationCatalog,
} from '../data/situationCatalog';

export default function Home({ onOpenTopic }) {
  const totalTopics = getCatalogTopicCount();

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
          Real situations — tap a topic, then practice step by step.
        </p>
      </header>

      <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-white/55">
        {totalTopics} situations
      </p>

      <div className="space-y-6 pb-6">
        {situationCatalog.map((section) => (
          <section key={section.id}>
            <h2 className="mb-2 px-0.5 text-xs font-bold uppercase tracking-wide text-brand">
              {section.title}
            </h2>
            <div className="space-y-2">
              {section.topics.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => onOpenTopic(t.id)}
                  className="lesson-card flex w-full items-center gap-3 text-left"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/8 text-xs font-bold text-white/70">
                    {t.number}
                  </span>
                  <span className="min-w-0 flex-1 font-semibold text-white">
                    {t.title}
                  </span>
                  {t.situations.length > 0 && (
                    <span className="shrink-0 rounded-full bg-brand-soft px-2 py-0.5 text-[10px] font-semibold text-brand">
                      {t.situations.length}
                    </span>
                  )}
                  <span className="shrink-0 text-brand">→</span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
