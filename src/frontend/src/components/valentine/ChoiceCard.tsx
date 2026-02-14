import { Heart } from 'lucide-react';

interface ChoiceCardProps {
  onBadBadSelect: () => void;
  onPookieSelect: () => void;
}

export default function ChoiceCard({ onBadBadSelect, onPookieSelect }: ChoiceCardProps) {
  return (
    <div className="animate-pop-in">
      {/* Decorative Heart Stickers */}
      <div className="absolute -top-12 -left-8 w-24 h-24 opacity-60 animate-bounce-gentle">
        <img 
          src="/assets/generated/heart-stickers.dim_512x512.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute -top-8 -right-12 w-20 h-20 opacity-50 animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
        <img 
          src="/assets/generated/cupid-arrow.dim_512x512.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Main Card */}
      <div className="relative bg-card/95 backdrop-blur-sm rounded-3xl shadow-valentine-lg border-2 border-primary/20 p-8 space-y-8">
        {/* Heading */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Heart className="w-16 h-16 fill-primary text-primary animate-heart-beat" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-gradient">
            What are you?
          </h1>
        </div>

        {/* Options */}
        <div className="space-y-4">
          <button
            onClick={onBadBadSelect}
            className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold text-xl py-6 px-8 rounded-2xl shadow-valentine transition-all duration-200 active:scale-95 hover:shadow-valentine-lg border-2 border-primary/10"
          >
            bad bad
          </button>

          <button
            onClick={onPookieSelect}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl py-6 px-8 rounded-2xl shadow-valentine transition-all duration-200 active:scale-95 hover:shadow-valentine-lg"
          >
            pookie
          </button>
        </div>
      </div>
    </div>
  );
}
