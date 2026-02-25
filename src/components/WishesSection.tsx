const wishes = [
  { emoji: "🌟", text: "May your day be as bright as your smile!" },
  { emoji: "🎈", text: "Wishing you endless happiness and laughter!" },
  { emoji: "💫", text: "May this year bring you everything you've dreamed of!" },
  { emoji: "🎁", text: "You deserve all the wonderful things life has to offer!" },
  { emoji: "🌈", text: "Here's to a year full of magic and adventures!" },
  { emoji: "💖", text: "You make the world a better place just by being you!" },
];

const WishesSection = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <h2 className="font-display text-4xl sm:text-5xl text-center text-primary mb-8">
        Birthday Wishes ✨
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {wishes.map((wish, i) => (
          <div
            key={i}
            className="animate-bounce-in rounded-xl p-5 bg-card border border-primary/10 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
            style={{ animationDelay: `${i * 0.15}s`, opacity: 0 }}
          >
            <span className="text-3xl mb-2 block">{wish.emoji}</span>
            <p className="font-body text-foreground/80 text-sm leading-relaxed">{wish.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishesSection;
