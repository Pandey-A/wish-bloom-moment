import { useState } from "react";

interface BirthdayCakeProps {
  onBlowCandles: () => void;
}

const BirthdayCake = ({ onBlowCandles }: BirthdayCakeProps) => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [smokeVisible, setSmokeVisible] = useState(false);

  const handleBlow = () => {
    if (!candlesLit) return;
    setCandlesLit(false);
    setSmokeVisible(true);
    onBlowCandles();
    setTimeout(() => setSmokeVisible(false), 1500);
  };

  const candles = [
    { left: "25%", color: "hsl(340, 65%, 55%)" },
    { left: "38%", color: "hsl(40, 70%, 65%)" },
    { left: "50%", color: "hsl(270, 60%, 80%)" },
    { left: "62%", color: "hsl(15, 85%, 65%)" },
    { left: "75%", color: "hsl(160, 50%, 75%)" },
  ];

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Cake SVG */}
      <div className="relative w-64 h-52 sm:w-80 sm:h-64">
        {/* Candles */}
        {candles.map((c, i) => (
          <div
            key={i}
            className="absolute bottom-[65%] -translate-x-1/2"
            style={{ left: c.left }}
          >
            {/* Candle stick */}
            <div
              className="w-2.5 h-12 rounded-t-sm mx-auto"
              style={{ backgroundColor: c.color }}
            />
            {/* Flame or smoke */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              {candlesLit ? (
                <div className="animate-flame">
                  <div
                    className="w-3 h-5 rounded-full"
                    style={{
                      background:
                        "radial-gradient(ellipse at bottom, hsl(43, 90%, 55%), hsl(15, 85%, 65%), transparent)",
                    }}
                  />
                </div>
              ) : smokeVisible ? (
                <div className="animate-smoke w-2 h-2 rounded-full bg-muted-foreground/30" />
              ) : null}
            </div>
          </div>
        ))}

        {/* Cake layers */}
        <svg viewBox="0 0 320 260" className="w-full h-full">
          {/* Bottom layer */}
          <ellipse cx="160" cy="220" rx="140" ry="25" fill="hsl(30, 60%, 75%)" />
          <rect x="20" y="180" width="280" height="40" fill="hsl(30, 60%, 75%)" rx="4" />
          <ellipse cx="160" cy="180" rx="140" ry="25" fill="hsl(340, 80%, 88%)" />
          {/* Frosting drips bottom */}
          {[40, 80, 120, 200, 250].map((x, i) => (
            <ellipse key={i} cx={x} cy={195} rx={8} ry={12 + i * 2} fill="hsl(340, 80%, 88%)" opacity={0.8} />
          ))}

          {/* Middle layer */}
          <ellipse cx="160" cy="180" rx="110" ry="20" fill="hsl(15, 85%, 65%)" />
          <rect x="50" y="145" width="220" height="35" fill="hsl(15, 85%, 65%)" rx="4" />
          <ellipse cx="160" cy="145" rx="110" ry="20" fill="hsl(40, 70%, 65%)" />
          {/* Frosting drips middle */}
          {[70, 130, 190, 240].map((x, i) => (
            <ellipse key={i} cx={x} cy={158} rx={6} ry={10 + i} fill="hsl(40, 70%, 65%)" opacity={0.8} />
          ))}

          {/* Top layer */}
          <ellipse cx="160" cy="145" rx="85" ry="16" fill="hsl(270, 60%, 80%)" />
          <rect x="75" y="115" width="170" height="30" fill="hsl(270, 60%, 80%)" rx="4" />
          <ellipse cx="160" cy="115" rx="85" ry="16" fill="hsl(340, 65%, 55%)" />

          {/* Decorations */}
          {[100, 130, 160, 190, 220].map((x, i) => (
            <circle key={i} cx={x} cy={192} r={4} fill="hsl(43, 90%, 55%)" />
          ))}
        </svg>
      </div>

      {/* Blow button */}
      <button
        onClick={handleBlow}
        disabled={!candlesLit}
        className={`
          px-8 py-3 rounded-full font-body font-semibold text-lg transition-all duration-300
          ${candlesLit
            ? "bg-primary text-primary-foreground animate-pulse-glow hover:scale-105 cursor-pointer"
            : "bg-muted text-muted-foreground cursor-default"
          }
        `}
      >
        {candlesLit ? "🎂 Blow the Candles! 🎂" : "✨ Wishes Made! ✨"}
      </button>
    </div>
  );
};

export default BirthdayCake;
