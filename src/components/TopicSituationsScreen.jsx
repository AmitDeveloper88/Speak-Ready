import PageHeader from './layout/PageHeader';
import { getTopicById } from '../data/situationCatalog';
import { getSituationConversation } from '../data/situationConversations';

export default function TopicSituationsScreen({
  topicId,
  onBack,
  onSituationSelect,
}) {
  const match = getTopicById(topicId);
  if (!match) return null;

  const { topic } = match;
  const hasSituations = topic.situations.length > 0;

  return (
    <>
      <PageHeader
        title={topic.title}
        subtitle={`#${topic.number}`}
        onBack={onBack}
      />

      {topic.tagline && (
        <p className="mb-4 text-sm italic text-white/55">{topic.tagline}</p>
      )}

      {hasSituations ? (
        <>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/55">
            {topic.situations.length} situations
          </p>
          <div className="space-y-2 pb-6">
            {topic.situations.map((situation) => (
              <button
                key={situation.id}
                type="button"
                onClick={() => {
                  if (
                    getSituationConversation(topic.id, situation.id)
                  ) {
                    onSituationSelect?.(topic.id, situation.id);
                  }
                }}
                disabled={
                  !getSituationConversation(topic.id, situation.id)
                }
                className="lesson-card flex w-full items-center gap-3 text-left disabled:opacity-40"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-xs font-bold text-brand">
                  {situation.number}
                </span>
                <span className="min-w-0 flex-1 font-medium text-white">
                  {situation.title}
                </span>
                <span className="shrink-0 text-brand">→</span>
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="card p-4 text-center">
          <p className="text-sm text-white/70">
            Is topic ke situations jald aa rahe hain.
          </p>
          <p className="mt-2 text-xs text-white/45">
            Pehle Level 1 — Greetings se shuru kar rahe hain.
          </p>
        </div>
      )}
    </>
  );
}
