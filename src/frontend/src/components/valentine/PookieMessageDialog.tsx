import { Heart, Sparkles, X } from 'lucide-react';

interface PookieMessageDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function PookieMessageDialog({ open, onClose }: PookieMessageDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog Content */}
      <div className="relative animate-pop-in w-full max-w-md">
        {/* Decorative Elements */}
        <div className="absolute -top-8 -left-8 w-24 h-24 opacity-60 animate-float">
          <img 
            src="/assets/generated/heart-stickers.dim_512x512.png" 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute -top-6 -right-10 w-20 h-20 opacity-50 animate-float" style={{ animationDelay: '1s' }}>
          <img 
            src="/assets/generated/cupid-arrow.dim_512x512.png" 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 w-16 h-16 opacity-40 animate-float" style={{ animationDelay: '2s' }}>
          <img 
            src="/assets/generated/heart-stickers.dim_512x512.png" 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="relative bg-card/95 backdrop-blur-sm rounded-3xl shadow-valentine-lg border-2 border-primary/20 p-8 space-y-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary/50 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* Header */}
          <div className="text-center space-y-3">
            <div className="flex justify-center gap-2">
              <Heart className="w-10 h-10 fill-primary text-primary animate-heart-beat" />
              <Sparkles className="w-10 h-10 text-accent animate-pulse-soft" />
              <Heart className="w-10 h-10 fill-accent text-accent animate-heart-beat" style={{ animationDelay: '0.3s' }} />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-gradient">
              My Pookie 💕
            </h2>
          </div>

          {/* Message */}
          <div className="space-y-4 text-center">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              You're the <span className="font-bold text-primary">most amazing person</span> in my life.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              Seeing you makes me <span className="font-bold text-primary">smile</span> and you're the <span className="font-bold text-primary">highlight of my day</span>.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              You're <span className="font-bold text-primary">special</span>.
            </p>
            <div className="pt-4">
              <p className="font-display text-2xl md:text-3xl text-gradient">
                Love you 💖
              </p>
            </div>
          </div>

          {/* Decorative Hearts */}
          <div className="flex justify-center gap-3 pt-2">
            <Heart className="w-6 h-6 fill-primary text-primary opacity-60" />
            <Heart className="w-8 h-8 fill-primary text-primary" />
            <Heart className="w-6 h-6 fill-accent text-accent opacity-60" />
          </div>
        </div>
      </div>
    </div>
  );
}
