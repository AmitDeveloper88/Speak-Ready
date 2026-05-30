import { useState } from 'react';
import {
  getCatalogTopicCount,
  situationCatalog,
} from '../data/situationCatalog';
import { getSituationConversation } from '../data/situationConversations';

function MenuChevron() {
  return (
    <svg
      className="menu-chevron"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function PracticeIcon() {
  return (
    <span className="menu-practice-icon" aria-hidden>
      <svg
        viewBox="0 0 24 24"
        width="14"
        height="14"
        fill="currentColor"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

/** @param {string} sectionTitle e.g. "Level 1: Starting Conversations" */
function sectionLevelLabel(sectionTitle) {
  const match = sectionTitle.match(/^Level\s*(\d+)/i);
  return match ? `L${match[1]}` : null;
}

export default function Home({ onSituationSelect }) {
  const totalTopics = getCatalogTopicCount();
  const [expandedTopicId, setExpandedTopicId] = useState(null);

  const toggleTopic = (topicId) => {
    setExpandedTopicId((prev) => (prev === topicId ? null : topicId));
  };

  return (
    <>
      <header className="mb-5">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand">
          English speaking
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          SpeakReady
        </h1>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/70">
          Choose a level, open a topic, then pick a lesson to practice.
        </p>
      </header>

      <div className="mb-5 flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5">
        <span className="text-xs font-semibold uppercase tracking-wide text-white/45">
          Curriculum
        </span>
        <span className="h-3 w-px bg-white/15" aria-hidden />
        <span className="text-sm font-bold text-white">{totalTopics} topics</span>
        <span className="ml-auto text-[10px] font-semibold text-brand">
          Tap to expand
        </span>
      </div>

      <nav className="space-y-5 pb-6" aria-label="Practice topics">
        {situationCatalog.map((section) => {
          const levelLabel = sectionLevelLabel(section.title);
          const titleWithoutLevel = section.title.replace(
            /^Level\s*\d+:\s*/i,
            ''
          );

          return (
            <section key={section.id} className="menu-section">
              <div className="menu-section-head">
                {levelLabel && (
                  <span className="menu-section-level">{levelLabel}</span>
                )}
                <span className="min-w-0 truncate">{titleWithoutLevel}</span>
              </div>

              <div>
                {section.topics.map((t) => {
                  const isExpanded = expandedTopicId === t.id;
                  const hasSubs = t.situations.length > 0;
                  const readyCount = hasSubs
                    ? t.situations.filter((s) =>
                        getSituationConversation(t.id, s.id)
                      ).length
                    : 0;

                  return (
                    <div key={t.id} className="menu-accordion-item">
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        onClick={() => toggleTopic(t.id)}
                        className={`menu-trigger ${
                          isExpanded ? 'menu-trigger-expanded' : ''
                        }`}
                      >
                        <span className="menu-num">{t.number}</span>
                        <span className="menu-trigger-title">{t.title}</span>
                        {hasSubs && (
                          <span className="menu-count">{t.situations.length}</span>
                        )}
                        <MenuChevron />
                      </button>

                      {isExpanded && (
                        <div className="menu-subpanel">
                          {hasSubs ? (
                            <ul className="menu-sublist" role="list">
                              {t.situations.map((situation) => {
                                const hasContent = Boolean(
                                  getSituationConversation(
                                    t.id,
                                    situation.id
                                  )
                                );
                                return (
                                  <li key={situation.id}>
                                    <button
                                      type="button"
                                      disabled={!hasContent}
                                      onClick={() => {
                                        if (hasContent) {
                                          onSituationSelect?.(
                                            t.id,
                                            situation.id
                                          );
                                        }
                                      }}
                                      className={`menu-subitem ${
                                        hasContent
                                          ? 'menu-subitem-ready'
                                          : ''
                                      }`}
                                    >
                                      <span className="menu-subnum">
                                        {situation.number}
                                      </span>
                                      <span className="menu-subtitle">
                                        {situation.title}
                                      </span>
                                      {hasContent ? (
                                        <PracticeIcon />
                                      ) : (
                                        <span className="menu-soon">Soon</span>
                                      )}
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                          ) : (
                            <p className="menu-empty">
                              Is topic ke lessons jald aa rahe hain.
                            </p>
                          )}
                          {hasSubs && readyCount > 0 && (
                            <p className="px-3 pb-1 pt-0.5 text-center text-[10px] text-white/35">
                              {readyCount} of {t.situations.length} ready
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </nav>
    </>
  );
}
