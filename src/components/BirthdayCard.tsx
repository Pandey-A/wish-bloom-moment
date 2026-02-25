import { useState } from "react";

const BirthdayCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-muted-foreground font-body text-lg">Click the card to open it! 💌</p>

      <div
        className="relative cursor-pointer perspective-[1000px] w-72 h-96 sm:w-80 sm:h-[26rem]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Card back (inside) */}
        <div
          className="absolute inset-0 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 border-2 border-primary/20"
          style={{ backgroundColor: "hsl(var(--card-inner))" }}
        >
          <div className="text-5xl mb-2">🎁</div>
          <h3 className="font-display text-2xl sm:text-3xl text-primary leading-relaxed">
            May all your dreams come true!
          </h3>
          <p className="font-body text-muted-foreground text-sm leading-relaxed">
            On this special day, I want you to know how amazing you are. 
            You bring so much joy to everyone around you. 
            Here's to another year of incredible adventures! 🌟
          </p>
          <div className="mt-2 text-4xl">🎉🥳🎊</div>
          <p className="font-display text-xl text-secondary">With all my love ❤️</p>
        </div>

        {/* Card front (cover) */}
        <div
          className={`
            absolute inset-0 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3
            bg-gradient-to-br from-primary via-accent to-secondary
            border-2 border-primary/30 shadow-xl
            transition-transform duration-700 origin-left backface-hidden
            ${isOpen ? "[transform:rotateY(-180deg)]" : ""}
          `}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="text-6xl animate-bounce-in" style={{ animationDelay: "0.2s" }}>
            🎂
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-primary-foreground drop-shadow-md">
            Happy Birthday!
          </h2>
          <div className="flex gap-2 text-3xl mt-2">
            <span className="animate-bounce-in" style={{ animationDelay: "0.4s" }}>🎈</span>
            <span className="animate-bounce-in" style={{ animationDelay: "0.6s" }}>🎁</span>
            <span className="animate-bounce-in" style={{ animationDelay: "0.8s" }}>🎉</span>
          </div>
          <p className="font-body text-primary-foreground/80 text-sm mt-4">
            Tap to open your card
          </p>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;
