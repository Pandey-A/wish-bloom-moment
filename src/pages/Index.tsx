import { useState } from "react";
import Balloons from "@/components/Balloons";
import Sparkles from "@/components/Sparkles";
import Confetti from "@/components/Confetti";
import BirthdayCake from "@/components/BirthdayCake";
import BirthdayCard from "@/components/BirthdayCard";
import WishesSection from "@/components/WishesSection";
import PhotoCarousel from "@/components/PhotoCarousel";
import SurpriseReveal from "@/components/SurpriseReveal";

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleBlowCandles = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 100);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Balloons />
      <Sparkles />
      <Confetti active={showConfetti} />

      <div className="relative z-10 flex flex-col items-center gap-20 py-12 px-4 sm:py-20">
        {/* Hero */}
        <div className="text-center space-y-4 animate-bounce-in">
          <p className="font-body text-muted-foreground text-lg tracking-widest uppercase">
            🎉 It's Your Special Day Khebu 🎉
          </p>
          <h1
            className="font-display text-6xl sm:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-text-shimmer"
          >
            Happy Birthday My Love!
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-md mx-auto">
            Today is all about YOU. Now let's celebrate! 🥳
          </p>
        </div>

        {/* Cake Section */}
        <section className="animate-bounce-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
          <BirthdayCake onBlowCandles={handleBlowCandles} />
        </section>

        {/* Photo Carousel */}
        <section className="w-full">
          <PhotoCarousel />
        </section>

        {/* Birthday Card */}
        <section className="animate-bounce-in" style={{ animationDelay: "0.5s", opacity: 0 }}>
          <BirthdayCard />
        </section>

        {/* Wishes */}
        {/* <section className="w-full">
          <WishesSection />
        </section> */}

        {/* Surprise Reveal */}
        <section className="w-full py-8">
          <SurpriseReveal />
        </section>

        {/* Footer */}
        <footer className="text-center py-8 animate-bounce-in" style={{ animationDelay: "1s", opacity: 0 }}>
          <p className="font-display text-3xl text-primary">
            🎂 Cheers to another amazing year! 🎂
          </p>
          <div className="flex justify-center gap-3 mt-4 text-4xl">
            {["🎈", "🎁", "🎊", "🥳", "🎉", "💖", "✨"].map((e, i) => (
              <span
                key={i}
                className="animate-balloon-float"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                {e}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
