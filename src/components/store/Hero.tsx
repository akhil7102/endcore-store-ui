export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6 pt-[calc(60px+4rem)] pb-16"
      style={{
        background: "linear-gradient(180deg, #0b0b0b 0%, #111111 50%, #0b0b0b 100%)",
      }}
    >
      <div className="max-w-[800px]">
        <p className="text-lg font-medium text-store-accent mb-4 tracking-[0.1em]">
          Custom Lifesteal • Custom Enchants • Custom Weapons
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-[0.2em] mb-6 text-store-text">
          EndCore Season 2
        </h1>
        <p className="text-xl text-store-text-secondary mb-12">
          Fight. Steal hearts. Dominate the server.
        </p>
        <a
          href="#ranks"
          className="inline-block px-8 py-4 text-sm font-semibold uppercase tracking-[0.05em] bg-store-accent text-store-text border border-store-accent hover:bg-store-accent-hover hover:border-store-accent-hover transition-all duration-150"
        >
          Enter Store
        </a>
      </div>
    </section>
  );
};
