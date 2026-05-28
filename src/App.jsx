import { useState, useEffect } from 'react';
import Home from './components/Home';
import PracticeScreen from './components/PracticeScreen';
import AppShell from './components/layout/AppShell';
import { getLessonById } from './data/lessons';
import { stopAllSpeech } from './utils/stopAllSpeech';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [lessonId, setLessonId] = useState(null);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.toggle(
      'practice-locked',
      screen === 'practice'
    );
    return () => document.documentElement.classList.remove('practice-locked');
  }, [screen]);

  const handleOpenLesson = (id) => {
    setLessonId(id);
    setScreen('practice');
  };

  const handleBack = () => {
    stopAllSpeech();
    setScreen('home');
    setLessonId(null);
  };

  const lesson = lessonId ? getLessonById(lessonId) : null;

  return (
    <AppShell fillHeight={screen === 'practice'}>
      {screen === 'home' && <Home onOpenLesson={handleOpenLesson} />}
      {screen === 'practice' && lesson && (
        <PracticeScreen lesson={lesson} onBack={handleBack} />
      )}
    </AppShell>
  );
}
