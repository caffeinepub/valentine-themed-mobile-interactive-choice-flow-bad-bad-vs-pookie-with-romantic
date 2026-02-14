import { useState } from 'react';
import ValentineLayout from './components/valentine/ValentineLayout';
import ChoiceCard from './components/valentine/ChoiceCard';
import BadBadDialog from './components/valentine/BadBadDialog';
import PookieMessageDialog from './components/valentine/PookieMessageDialog';
import HeartConfetti from './components/valentine/HeartConfetti';

type ViewState = 'choice' | 'bad-bad' | 'pookie';

function App() {
  const [view, setView] = useState<ViewState>('choice');
  const [showConfetti, setShowConfetti] = useState(false);

  const handleBadBadSelect = () => {
    setView('bad-bad');
  };

  const handlePookieSelect = () => {
    setShowConfetti(true);
    setView('pookie');
    // Reset confetti after animation
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const handleGoBack = () => {
    setView('choice');
  };

  return (
    <ValentineLayout>
      {showConfetti && <HeartConfetti />}
      
      {view === 'choice' && (
        <ChoiceCard
          onBadBadSelect={handleBadBadSelect}
          onPookieSelect={handlePookieSelect}
        />
      )}

      <BadBadDialog
        open={view === 'bad-bad'}
        onGoBack={handleGoBack}
      />

      <PookieMessageDialog
        open={view === 'pookie'}
        onClose={handleGoBack}
      />
    </ValentineLayout>
  );
}

export default App;
