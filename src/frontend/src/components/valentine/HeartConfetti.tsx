import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
}

export default function HeartConfetti() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    // Generate confetti pieces
    const pieces: ConfettiPiece[] = [];
    const colors = [
      'oklch(0.65 0.22 350)',
      'oklch(0.75 0.20 340)',
      'oklch(0.88 0.15 10)',
      'oklch(0.70 0.18 355)',
    ];

    for (let i = 0; i < 20; i++) {
      pieces.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 1.5,
        size: 16 + Math.random() * 16,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    setConfetti(pieces);
  }, []);

  return (
    <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            top: '-10%'
          }}
        >
          <Heart
            className="fill-current"
            style={{
              width: `${piece.size}px`,
              height: `${piece.size}px`,
              color: piece.color
            }}
          />
        </div>
      ))}
    </div>
  );
}
