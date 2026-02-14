import { Heart, ArrowLeft } from 'lucide-react';

interface BadBadDialogProps {
  open: boolean;
  onGoBack: () => void;
}

export default function BadBadDialog({ open, onGoBack }: BadBadDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onGoBack}
      />

      {/* Dialog Content */}
      <div className="relative animate-pop-in">
        {/* Decorative Elements */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 opacity-70">
          <img 
            src="/assets/generated/heart-stickers.dim_512x512.png" 
            alt="" 
            className="w-full h-full object-contain animate-bounce-gentle"
          />
        </div>

        <div className="bg-card/95 backdrop-blur-sm rounded-3xl shadow-valentine-lg border-2 border-primary/20 p-8 max-w-sm space-y-6">
          {/* Message */}
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-2">
              <Heart className="w-12 h-12 fill-primary text-primary animate-heart-beat" />
              <Heart className="w-12 h-12 fill-accent text-accent animate-heart-beat" style={{ animationDelay: '0.2s' }} />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-gradient">
              no you're pookie
            </h2>
          </div>

          {/* Go Back Button */}
          <button
            onClick={onGoBack}
            className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold text-lg py-4 px-6 rounded-2xl shadow-valentine transition-all duration-200 active:scale-95 hover:shadow-valentine-lg border-2 border-primary/10 flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
