export const Footer = () => {
  const links = ["Store", "Discord", "Support", "Terms"];

  return (
    <footer className="bg-store-bg-tertiary border-t border-store-border py-12">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center gap-6 text-center">
        <span className="text-lg font-bold uppercase tracking-[0.15em] text-store-accent">
          EndCore
        </span>

        <nav className="flex gap-8 flex-wrap justify-center">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-store-text-secondary hover:text-store-text transition-colors duration-150"
            >
              {link}
            </a>
          ))}
        </nav>

        <p className="text-xs text-store-text-muted">
          © 2024 EndCore. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
