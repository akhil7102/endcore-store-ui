interface CrateCardProps {
  name: string;
  tier: string;
  description: string;
  loot: string;
  price: string;
}

const tierStyles: Record<string, { name: string; hover: string }> = {
  common: {
    name: "text-[#888888]",
    hover: "hover:border-[#888888] hover:shadow-[0_0_15px_rgba(136,136,136,0.15)]",
  },
  op: {
    name: "text-[#5555ff]",
    hover: "hover:border-[#5555ff] hover:shadow-[0_0_15px_rgba(85,85,255,0.15)]",
  },
  mythic: {
    name: "text-store-accent",
    hover: "hover:border-store-accent hover:shadow-[0_0_20px_rgba(177,18,38,0.4)]",
  },
};

export const CrateCard = ({ name, tier, description, loot, price }: CrateCardProps) => {
  const styles = tierStyles[tier] || tierStyles.common;

  return (
    <article
      className={`bg-store-card border border-store-border p-6 transition-all duration-300 hover:bg-store-card-hover hover:-translate-y-1 ${styles.hover}`}
    >
      <h3 className={`text-lg font-bold uppercase tracking-[0.1em] mb-4 ${styles.name}`}>
        {name}
      </h3>

      <p className="text-store-text-secondary text-sm mb-6">{description}</p>

      <div className="bg-store-bg-tertiary p-4 mb-6 border-l-2 border-store-border-light">
        <span className="block text-xs font-semibold uppercase tracking-[0.1em] text-store-text-muted mb-2">
          Possible Loot
        </span>
        <p className="text-sm text-store-text-secondary">{loot}</p>
      </div>

      <div className="flex items-center justify-between gap-4">
        <span className="text-lg font-bold text-store-text">{price}</span>
        <button
          className={`px-8 py-4 text-sm font-semibold uppercase tracking-[0.05em] border transition-all duration-150 ${
            tier === "mythic"
              ? "bg-store-accent border-store-accent hover:bg-store-accent-hover hover:border-store-accent-hover hover:shadow-[0_0_20px_rgba(177,18,38,0.4)]"
              : "bg-transparent border-store-border-light text-store-text hover:bg-store-accent hover:border-store-accent"
          }`}
        >
          Buy
        </button>
      </div>
    </article>
  );
};
