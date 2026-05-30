import { useState, useEffect } from 'react';
import Home from './components/Home';
import PracticeScreen from './components/PracticeScreen';
import AppShell from './components/layout/AppShell';
import { getLessonById } from './data/lessons';
import { getSituationConversation } from './data/situationConversations';
import { stopAllSpeech } from './utils/stopAllSpeech';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [lessonId, setLessonId] = useState(null);
  const [situation, setSituation] = useState(null);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.toggle(
      'practice-locked',
      screen === 'practice'
    );
    return () => document.documentElement.classList.remove('practice-locked');
  }, [screen]);

  const handleOpenSituation = (topic, situationId) => {
    const data = getSituationConversation(topic, situationId);
    if (!data) return;
    setSituation(data);
    setLessonId(null);
    setScreen('practice');
  };

  const handleBackFromPractice = () => {
    stopAllSpeech();
    setScreen('home');
    setSituation(null);
    setLessonId(null);
  };

  const lesson = lessonId ? getLessonById(lessonId) : null;

  return (
    <AppShell fillHeight={screen === 'practice'}>
      {screen === 'home' && <Home onSituationSelect={handleOpenSituation} />}
      {screen === 'practice' && (situation || lesson) && (
        <PracticeScreen
          lesson={lesson}
          situation={situation}
          onBack={handleBackFromPractice}
        />
      )}
    </AppShell>
  );
}
