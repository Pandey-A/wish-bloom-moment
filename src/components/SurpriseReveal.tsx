import { useState, useEffect, useCallback } from "react";

interface Firework {
  id: number;
  x: number;
  y: number;
  color: string;
  particles: { angle: number; speed: number; size: number }[];
}

const COLORS = [
  "hsl(340, 65%, 55%)",
  "hsl(40, 90%, 55%)",
  "hsl(15, 85%, 65%)",
  "hsl(270, 60%, 80%)",
  "hsl(160, 50%, 75%)",
  "hsl(43, 90%, 65%)",
];

const SurpriseReveal = () => {
  const [revealed, setRevealed] = useState(false);
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const [typedText, setTypedText] = useState("");
  const fullMessage = "You are one in a million. Never forget how incredibly special you are. The world is brighter because you exist. 💫";

  const launchFireworks = useCallback(() => {
    const newFw: Firework[] = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: 10 + Math.random() * 80,
      y: 20 + Math.random() * 40,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      particles: Array.from({ length: 12 }, () => ({
        angle: Math.random() * 360,
        speed: 30 + Math.random() * 60,
        size: 3 + Math.random() * 4,
      })),
    }));
    setFireworks(newFw);
    setTimeout(() => setFireworks([]), 2000);
  }, []);

  const handleReveal = () => {
    if (revealed) return;
    setRevealed(true);
    launchFireworks();
    // Re-launch fireworks a couple more times
    setTimeout(launchFireworks, 800);
    setTimeout(launchFireworks, 1600);
  };

  // Typewriter effect
  useEffect(() => {
    if (!revealed) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullMessage.length) {
        setTypedText(fullMessage.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [revealed]);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 text-center">
      {/* Fireworks overlay */}
      {fireworks.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {fireworks.map((fw) => (
            <div
              key={fw.id}
              className="absolute"
              style={{ left: `${fw.x}%`, top: `${fw.y}%` }}
            >
              {fw.particles.map((p, pi) => {
                const rad = (p.angle * Math.PI) / 180;
                const tx = Math.cos(rad) * p.speed;
                const ty = Math.sin(rad) * p.speed;
                return (
                  <div
                    key={pi}
                    className="absolute rounded-full"
                    style={{
                      width: p.size,
                      height: p.size,
                      backgroundColor: fw.color,
                      boxShadow: `0 0 6px ${fw.color}, 0 0 12px ${fw.color}`,
                      animation: `firework-particle 1.2s ease-out forwards`,
                      ["--fw-tx" as string]: `${tx}px`,
                      ["--fw-ty" as string]: `${ty}px`,
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      )}

      {!revealed ? (
        <div className="space-y-6">
          <h2 className="font-display text-4xl sm:text-5xl text-primary">
            A Special Surprise Awaits... 🎁
          </h2>
          <p className="font-body text-muted-foreground">
            Click the gift to unwrap your surprise!
          </p>
          <button
            onClick={handleReveal}
            className="text-8xl animate-pulse-glow rounded-3xl p-6 hover:scale-110 transition-transform duration-300 cursor-pointer inline-block"
          >
            🎁
          </button>
        </div>
      ) : (
        <div className="space-y-6 animate-bounce-in">
          <div className="text-6xl mb-4">🎆✨🎇</div>
          <h2 className="font-display text-4xl sm:text-5xl bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-text-shimmer">
            A Message Just For You
          </h2>
          <div className="bg-card rounded-2xl p-8 border-2 border-gold/30 shadow-xl min-h-[120px]">
            <p className="font-body text-lg sm:text-xl text-foreground/90 leading-relaxed italic">
              "{typedText}"
              <span className="inline-block w-0.5 h-5 bg-primary animate-pulse ml-1" />
            </p>
          </div>
          <div className="flex justify-center gap-4 text-4xl">
            {["🌟", "💖", "🎂", "🥳", "🎈"].map((e, i) => (
              <span
                key={i}
                className="animate-bounce-in"
                style={{ animationDelay: `${0.8 + i * 0.15}s`, opacity: 0 }}
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SurpriseReveal;
