import { RankCard } from "./RankCard";

const ranks = [
  {
    name: "VIP",
    tier: "vip",
    price: "$4.99",
    perks: [
      "Colored name in chat",
      "Access to /fly in spawn",
      "2 home locations",
      "VIP kit monthly",
    ],
  },
  {
    name: "MVP",
    tier: "mvp",
    price: "$9.99",
    perks: [
      "All VIP perks",
      "Access to /nick",
      "5 home locations",
      "MVP kit monthly",
      "Priority queue",
    ],
  },
  {
    name: "ELITE",
    tier: "elite",
    price: "$19.99",
    perks: [
      "All MVP perks",
      "Custom join message",
      "10 home locations",
      "Elite kit monthly",
      "Access to /heal (cooldown)",
    ],
  },
  {
    name: "LEGEND",
    tier: "legend",
    price: "$34.99",
    perks: [
      "All Elite perks",
      "Particle effects",
      "15 home locations",
      "Legend kit monthly",
      "Access to /feed",
    ],
  },
  {
    name: "MYTHIC",
    tier: "mythic",
    price: "$49.99",
    badge: "LIMITED",
    perks: [
      "All Legend perks",
      "Exclusive Mythic tag",
      "Unlimited homes",
      "Mythic kit monthly",
      "Early access to events",
      "Priority support",
    ],
  },
];

export const RanksSection = () => {
  return (
    <section id="ranks" className="py-16 bg-store-bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center uppercase tracking-[0.1em] mb-12 text-store-text">
          Ranks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {ranks.map((rank) => (
            <RankCard key={rank.name} {...rank} />
          ))}
        </div>
      </div>
    </section>
  );
};
