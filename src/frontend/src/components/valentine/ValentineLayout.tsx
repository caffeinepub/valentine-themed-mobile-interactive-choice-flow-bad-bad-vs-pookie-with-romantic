import { type ReactNode } from 'react';
import { Heart } from 'lucide-react';

interface ValentineLayoutProps {
  children: ReactNode;
}

export default function ValentineLayout({ children }: ValentineLayoutProps) {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'valentine-app'
  );

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/assets/generated/valentine-bg.dim_1080x1920.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="fixed inset-0 z-0 valentine-gradient opacity-80" />

      {/* Floating Heart Decorations */}
      <div className="fixed top-10 left-8 z-10 animate-float opacity-40">
        <Heart className="w-8 h-8 fill-primary text-primary" />
      </div>
      <div className="fixed top-32 right-12 z-10 animate-float opacity-30" style={{ animationDelay: '1s' }}>
        <Heart className="w-6 h-6 fill-accent text-accent" />
      </div>
      <div className="fixed bottom-40 left-16 z-10 animate-float opacity-35" style={{ animationDelay: '2s' }}>
        <Heart className="w-7 h-7 fill-primary text-primary" />
      </div>
      <div className="fixed bottom-20 right-8 z-10 animate-float opacity-25" style={{ animationDelay: '0.5s' }}>
        <Heart className="w-5 h-5 fill-accent text-accent" />
      </div>

      {/* Main Content */}
      <main className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 pb-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} · Built with <Heart className="inline w-4 h-4 fill-primary text-primary animate-heart-beat" /> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
