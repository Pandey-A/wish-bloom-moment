import { useEffect, useState } from "react";

interface Balloon {
  id: number;
  left: number;
  color: string;
  size: number;
  duration: number;
  delay: number;
}

const COLORS = [
  "hsl(340, 65%, 55%)",   // primary pink
  "hsl(40, 70%, 65%)",    // gold
  "hsl(15, 85%, 65%)",    // coral
  "hsl(270, 60%, 80%)",   // lavender
  "hsl(160, 50%, 75%)",   // mint
  "hsl(340, 80%, 88%)",   // pink-light
];

const Balloons = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const initial: Balloon[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 40 + Math.random() * 30,
      duration: 8 + Math.random() * 8,
      delay: Math.random() * 6,
    }));
    setBalloons(initial);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {balloons.map((b) => (
        <div
          key={b.id}
          className="absolute animate-balloon-rise"
          style={{
            left: `${b.left}%`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            bottom: "-100px",
          }}
        >
          <div
            className="rounded-full relative"
            style={{
              width: b.size,
              height: b.size * 1.2,
              backgroundColor: b.color,
              borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
            }}
          >
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full"
              style={{
                width: 2,
                height: b.size * 0.8,
                background: `linear-gradient(to bottom, ${b.color}, transparent)`,
              }}
            />
            <div
              className="absolute top-[20%] left-[25%] rounded-full"
              style={{
                width: b.size * 0.15,
                height: b.size * 0.25,
                background: "rgba(255,255,255,0.4)",
                transform: "rotate(-30deg)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Balloons;
