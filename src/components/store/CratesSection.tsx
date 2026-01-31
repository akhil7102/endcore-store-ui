import { CrateCard } from "./CrateCard";

const crates = [
  {
    name: "Common Crate",
    tier: "common",
    description: "A basic crate containing useful starter items and resources.",
    loot: "Iron gear, food supplies, basic enchant books, building blocks",
    price: "$2.99",
  },
  {
    name: "OP Crate",
    tier: "op",
    description: "Packed with powerful gear and rare enchantments for serious players.",
    loot: "Diamond gear, OP enchant books, golden apples, rare weapons",
    price: "$7.99",
  },
  {
    name: "Mythic Crate",
    tier: "mythic",
    description: "The ultimate crate. Exclusive items found nowhere else on the server.",
    loot: "Custom weapons, exclusive armor sets, hearts, mythic enchants",
    price: "$14.99",
  },
];

export const CratesSection = () => {
  return (
    <section id="crates" className="py-16 bg-store-bg">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center uppercase tracking-[0.1em] mb-12 text-store-text">
          Crates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {crates.map((crate) => (
            <CrateCard key={crate.name} {...crate} />
          ))}
        </div>
      </div>
    </section>
  );
};
