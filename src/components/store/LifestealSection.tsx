const features = [
  {
    title: "Heart Stealing",
    description:
      "Every PvP kill steals a heart from your opponent. Eliminate players to grow stronger. Die and lose your progress. High risk, high reward gameplay.",
  },
  {
    title: "Heart Crafting",
    description:
      "Craft heart containers using rare materials. Withdraw hearts as items. Trade hearts with other players. Strategic resource management.",
  },
  {
    title: "Custom Enchants",
    description:
      "Discover over 50 custom enchantments. Powerful combat abilities. Unique defensive perks. Game-changing weapon effects.",
  },
  {
    title: "Custom Weapons",
    description:
      "Exclusive weapon designs with custom textures. Special abilities unique to each weapon. Collectible gear sets. Show off your power.",
  },
];

export const LifestealSection = () => {
  return (
    <section id="lifesteal" className="py-16 bg-store-bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center uppercase tracking-[0.1em] mb-12 text-store-text">
          Lifesteal Mechanics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="bg-store-card border border-store-border p-6 transition-colors duration-300 hover:border-store-accent"
            >
              <h3 className="text-lg font-bold text-store-text uppercase tracking-[0.05em] mb-4">
                {feature.title}
              </h3>
              <p className="text-sm text-store-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
