import { useEffect } from 'react';
import PageHeader from './layout/PageHeader';
import ConversationPractice from './practice/ConversationPractice';
import { stopAllSpeech } from '../utils/stopAllSpeech';

export default function PracticeScreen({ lesson, onBack }) {
  useEffect(() => () => stopAllSpeech(), []);

  const handleBack = () => {
    stopAllSpeech();
    onBack();
  };

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden">
      <PageHeader compact title={lesson.title} onBack={handleBack} />

      {lesson.description && (
        <p className="mb-2 shrink-0 text-sm text-white/65">{lesson.description}</p>
      )}

      <ConversationPractice lesson={lesson} variant="shadow" />
    </div>
  );
}
