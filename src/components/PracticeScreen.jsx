import { useEffect } from 'react';
import PageHeader from './layout/PageHeader';
import ConversationPractice from './practice/ConversationPractice';
import { stopAllSpeech } from '../utils/stopAllSpeech';

export default function PracticeScreen({ lesson, situation, onBack }) {
  useEffect(() => () => stopAllSpeech(), []);

  const handleBack = () => {
    stopAllSpeech();
    onBack();
  };

  const title = situation?.title ?? lesson?.title ?? 'Practice';
  const subtitle = situation?.topicTitle ?? lesson?.description ?? null;
  const conversation = situation?.turns ?? null;

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden">
      <PageHeader compact title={title} onBack={handleBack} />
      {subtitle && (
        <p className="-mt-1 mb-2 shrink-0 text-sm text-white/50">{subtitle}</p>
      )}

      <ConversationPractice
        lesson={lesson}
        conversation={conversation}
        variant="shadow"
        showAlternatives={!!situation}
        autoAdvanceOnSuccess={!!situation}
      />
    </div>
  );
}
