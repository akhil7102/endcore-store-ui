export const Header = () => {
  const navLinks = ["Home", "Ranks", "Crates", "Lifesteal", "Rules"];

  return (
    <header className="fixed top-0 left-0 right-0 h-[60px] bg-store-bg/95 border-b border-store-border z-50 backdrop-blur-sm">
      <nav className="flex items-center justify-between h-full max-w-[1200px] mx-auto px-6">
        <a href="#" className="text-2xl font-bold uppercase tracking-[0.15em] text-store-accent">
          EndCore
        </a>
        <ul className="flex gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium uppercase tracking-[0.05em] text-store-text-secondary hover:text-store-text transition-colors duration-150"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
