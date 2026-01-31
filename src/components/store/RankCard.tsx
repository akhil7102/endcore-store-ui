interface RankCardProps {
  name: string;
  tier: string;
  price: string;
  perks: string[];
  badge?: string;
}

const tierColors: Record<string, { name: string; hover: string }> = {
  vip: { name: "text-[#55ff55]", hover: "hover:border-[#55ff55] hover:shadow-[0_0_15px_rgba(85,255,85,0.1)]" },
  mvp: { name: "text-[#55ffff]", hover: "hover:border-[#55ffff] hover:shadow-[0_0_15px_rgba(85,255,255,0.1)]" },
  elite: { name: "text-[#ffaa00]", hover: "hover:border-[#ffaa00] hover:shadow-[0_0_15px_rgba(255,170,0,0.1)]" },
  legend: { name: "text-[#ff55ff]", hover: "hover:border-[#ff55ff] hover:shadow-[0_0_15px_rgba(255,85,255,0.1)]" },
  mythic: { name: "text-store-accent", hover: "hover:border-store-accent hover:shadow-[0_0_20px_rgba(177,18,38,0.4)]" },
};

export const RankCard = ({ name, tier, price, perks, badge }: RankCardProps) => {
  const colors = tierColors[tier] || tierColors.vip;

  return (
    <article
      className={`relative bg-store-card border border-store-border p-6 transition-all duration-300 hover:bg-store-card-hover hover:-translate-y-1 ${colors.hover}`}
    >
      {badge && (
        <span className="absolute top-4 right-4 bg-store-accent text-store-text text-xs font-bold px-2 py-1 tracking-[0.1em]">
          {badge}
        </span>
      )}

      <div className="text-center mb-6 pb-6 border-b border-store-border">
        <h3 className={`text-xl font-bold uppercase tracking-[0.15em] ${colors.name}`}>
          {name}
        </h3>
      </div>

      <ul className="mb-6">
        {perks.map((perk, index) => (
          <li
            key={index}
            className="py-2 pl-6 relative text-store-text-secondary text-sm before:content-['›'] before:absolute before:left-0 before:text-store-accent before:font-bold"
          >
            {perk}
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-4 text-center">
        <span className="text-xl font-bold text-store-text">{price}</span>
        <button
          className={`w-full py-4 text-sm font-semibold uppercase tracking-[0.05em] border transition-all duration-150 ${
            tier === "mythic"
              ? "bg-store-accent border-store-accent hover:bg-store-accent-hover hover:border-store-accent-hover hover:shadow-[0_0_20px_rgba(177,18,38,0.4)]"
              : "bg-transparent border-store-border-light text-store-text hover:bg-store-accent hover:border-store-accent"
          }`}
        >
          Buy Now
        </button>
      </div>
    </article>
  );
};
