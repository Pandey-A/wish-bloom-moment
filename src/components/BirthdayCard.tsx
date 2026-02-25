import { useState } from "react";
import cardPhoto from "@/assets/card.jpeg";

const BirthdayCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [insidePage, setInsidePage] = useState(1);

  const handleCardClick = () => {
    if (isOpen) {
      setIsOpen(false);
      setInsidePage(1);
      return;
    }
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-muted-foreground font-body text-lg">Click the card to open it! 💌</p>

      <div
        className="relative cursor-pointer w-80 h-[30rem] sm:w-96 sm:h-[34rem]"
        style={{ perspective: "1200px" }}
        onClick={handleCardClick}
      >
        {/* Card back (inside - visible when open) */}
        <div
          className="absolute inset-0 rounded-2xl p-5 flex flex-col items-center justify-center text-center gap-3 border-2 border-primary/20 overflow-hidden"
          style={{ backgroundColor: "hsl(var(--card-inner))" }}
        >
          {insidePage === 1 ? (
            <>
              <div className="w-full h-72 sm:h-72 rounded-xl overflow-hidden border-2 border-gold/30 shadow-md mb-1">
                <img
                  src={cardPhoto}
                  alt="Birthday celebration"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-primary leading-snug">
                May all your dreams come true Khebu!
              </h3>
              <div className="text-3xl">🎉🥳🎊</div>
              <p className="font-display text-lg text-secondary">With all my love From Ashuuuuu ❤️</p>
              <button
                type="button"
                className="mt-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-body"
                onClick={(event) => {
                  event.stopPropagation();
                  setInsidePage(2);
                }}
              >
                Next Page →
              </button>
            </>
          ) : (
            <>
              <h3 className="font-display text-2xl sm:text-3xl text-primary leading-snug">
                A Special Message For You 💌
              </h3>
              <p className="font-body text-muted-foreground text-xs sm:text-sm leading-relaxed overflow-y-auto max-h-[22rem] pr-1">
                Happy Birthday, my Khebu ❤️
                <br />
                <br />
                My lovely Bubu, my sweet  Shona, my cute little Guudu… today is all about you. 🎂✨
                <br />
                <br />
                Since you turn 20 years old today  twenty beautiful years of spreading love, smiles, and magic wherever you go. And I feel so lucky that I get to love someone as amazing as you.
                <br />
                <br />
                On this special day, I just want you to know how incredibly precious you are to me. You light up my world in ways you dont even realize. Your smile heals my worst days, your voice is my comfort, and your presence is my biggest blessing.
                <br />
                <br />
                May this new year of your life bring you endless happiness, crazy fun adventures, success in everything you dream of, and all the love your heart can hold  especially mine. 💖
                <br />
                <br />
                Stay the same pure, kind, and beautiful soul that you are. I promise to stand beside you, celebrate you, and cherish you always.
                <br />
                <br />
                Happy 20th birthday, my  Shona.
                <br />
                I love you more than words can ever explain. 💕✨
              </p>
              <button
                type="button"
                className="mt-2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-body"
                onClick={(event) => {
                  event.stopPropagation();
                  setInsidePage(1);
                }}
              >
                ← Previous Page
              </button>
            </>
          )}
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
