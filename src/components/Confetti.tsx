import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  color: string;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

const COLORS = [
  "hsl(340, 65%, 55%)",
  "hsl(40, 90%, 55%)",
  "hsl(15, 85%, 65%)",
  "hsl(270, 60%, 80%)",
  "hsl(160, 50%, 75%)",
  "hsl(340, 80%, 88%)",
  "hsl(43, 90%, 55%)",
];

interface ConfettiProps {
  active: boolean;
}

const Confetti = ({ active }: ConfettiProps) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (!active) return;
    const newPieces: ConfettiPiece[] = Array.from({ length: 60 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 6 + Math.random() * 8,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 1,
      rotation: Math.random() * 360,
    }));
    setPieces(newPieces);
    const timer = setTimeout(() => setPieces([]), 5000);
    return () => clearTimeout(timer);
  }, [active]);

  if (!active || pieces.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute animate-confetti"
          style={{
            left: `${p.left}%`,
            top: "-20px",
            width: p.size,
            height: p.size * 1.5,
            backgroundColor: p.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            transform: `rotate(${p.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
