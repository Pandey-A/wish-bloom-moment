import { useState, useEffect, useCallback } from "react";
import birthdayGifts from "@/assets/image-1.jpeg";
import birthdayCupcakes from "@/assets/image-2.jpeg";
import birthdayDecorations from "@/assets/image-3.jpeg";
import birthdayFlowers from "@/assets/image-5.jpeg";
import birthdayPlace from "@/assets/image-4.jpeg";

const slides = [
  { src: birthdayGifts, caption: "You and me just meant to be together forever!" },
  { src: birthdayCupcakes, caption: "Love is the sweetest treat of all and I want it all from you! 🧁" },
  { src: birthdayDecorations, caption: "Everything's set for your special day you were born the cutest baby 🎊" },
  { src: birthdayFlowers, caption: "When I hold your hand my world becomes very special! 🌸" },
  { src: birthdayPlace, caption: "I want to travel everywhere with you! " },
];

const PhotoCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <h2 className="font-display text-4xl sm:text-5xl text-center text-primary mb-8">
        Celebration Gallery 📸
      </h2>

      <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-primary/10 bg-card">
        {/* Images */}
        <div className="relative aspect-video overflow-hidden">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-all duration-500 ease-in-out"
              style={{
                opacity: i === current ? 1 : 0,
                transform: i === current ? "scale(1)" : "scale(1.05)",
              }}
            >
              <img
                src={slide.src}
                alt={slide.caption}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Gradient overlay for caption */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-foreground/60 to-transparent" />
            </div>
          ))}

          {/* Caption */}
          <div className="absolute bottom-4 inset-x-0 text-center z-10">
            <p className="font-body text-primary-foreground text-lg sm:text-xl font-medium drop-shadow-lg px-4">
              {slides[current].caption}
            </p>
          </div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors z-10 shadow-md"
            aria-label="Previous"
          >
            ◀
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors z-10 shadow-md"
            aria-label="Next"
          >
            ▶
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 py-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoCarousel;
