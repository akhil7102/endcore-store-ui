const rules = [
  "All purchases are final and non-refundable.",
  "Chargebacks will result in a permanent ban.",
  "Purchased items may change with server updates.",
  "Account sharing may void your purchases.",
  "Staff decisions regarding purchases are final.",
];

export const RulesSection = () => {
  return (
    <section id="rules" className="py-16 bg-store-bg">
      <div className="max-w-[700px] mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold uppercase tracking-[0.1em] mb-12 text-store-text">
          Rules & Disclaimer
        </h2>

        <ul className="bg-store-card border border-store-border p-6 mb-6 text-left">
          {rules.map((rule, index) => (
            <li
              key={index}
              className="py-4 pl-6 relative text-store-text-secondary text-sm border-b border-store-border last:border-b-0 before:content-['•'] before:absolute before:left-0 before:text-store-accent before:font-bold"
            >
              {rule}
            </li>
          ))}
        </ul>

        <p className="text-xs text-store-text-muted italic">
          This store is not affiliated with or endorsed by Mojang Studios. Minecraft is a trademark of Mojang Synergies AB.
        </p>
      </div>
    </section>
  );
};
