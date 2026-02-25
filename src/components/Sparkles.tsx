import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
}

const Sparkles = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const s: Sparkle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 4 + Math.random() * 8,
      delay: Math.random() * 4,
    }));
    setSparkles(s);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute animate-sparkle text-gold"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            animationDelay: `${s.delay}s`,
            fontSize: s.size,
          }}
        >
          ✦
        </div>
      ))}
    </div>
  );
};

export default Sparkles;
