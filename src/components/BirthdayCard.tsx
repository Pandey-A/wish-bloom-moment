import { useState } from "react";
import cardPhoto from "@/assets/birthday-card-photo.webp";

const BirthdayCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-muted-foreground font-body text-lg">Click the card to open it! 💌</p>

      <div
        className="relative cursor-pointer w-72 h-96 sm:w-80 sm:h-[26rem]"
        style={{ perspective: "1200px" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Card back (inside - visible when open) */}
        <div
          className="absolute inset-0 rounded-2xl p-5 flex flex-col items-center justify-center text-center gap-3 border-2 border-primary/20 overflow-hidden"
          style={{ backgroundColor: "hsl(var(--card-inner))" }}
        >
          {/* Photo inside the card */}
          <div className="w-full h-32 sm:h-36 rounded-xl overflow-hidden border-2 border-gold/30 shadow-md mb-1">
            <img
              src={cardPhoto}
              alt="Birthday celebration"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-display text-2xl sm:text-3xl text-primary leading-snug">
            May all your dreams come true!
          </h3>
          <p className="font-body text-muted-foreground text-xs sm:text-sm leading-relaxed">
            On this special day, I want you to know how amazing you are. 
            You bring so much joy to everyone around you. 
            Here's to another year of incredible adventures! 🌟
          </p>
          <div className="text-3xl">🎉🥳🎊</div>
          <p className="font-display text-lg text-secondary">With all my love ❤️</p>
        </div>

        {/* Card front (cover) - flips open */}
        <div
          className={`
            absolute inset-0 rounded-2xl flex flex-col items-center justify-center text-center gap-3
            bg-gradient-to-br from-primary via-accent to-secondary
            border-2 border-primary/30 shadow-xl
            transition-transform duration-700 origin-left
            ${isOpen ? "[transform:rotateY(-180deg)]" : ""}
          `}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Decorative ribbon */}
          <div className="absolute top-0 right-8 w-8 h-16 bg-gold/80 rounded-b-lg shadow-md" />
          <div className="absolute top-0 right-5 w-3 h-12 bg-gold/60 rounded-b-sm" />

          <div className="text-6xl animate-bounce-in" style={{ animationDelay: "0.2s" }}>
            🎂
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-primary-foreground drop-shadow-md px-4">
            Happy Birthday!
          </h2>
          <div className="flex gap-2 text-3xl mt-2">
            <span className="animate-bounce-in" style={{ animationDelay: "0.4s" }}>🎈</span>
            <span className="animate-bounce-in" style={{ animationDelay: "0.6s" }}>🎁</span>
            <span className="animate-bounce-in" style={{ animationDelay: "0.8s" }}>🎉</span>
          </div>
          <p className="font-body text-primary-foreground/80 text-sm mt-4">
            ✨ Tap to open ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;
