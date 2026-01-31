import { Header } from "@/components/store/Header";
import { Hero } from "@/components/store/Hero";
import { RanksSection } from "@/components/store/RanksSection";
import { CratesSection } from "@/components/store/CratesSection";
import { LifestealSection } from "@/components/store/LifestealSection";
import { RulesSection } from "@/components/store/RulesSection";
import { Footer } from "@/components/store/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-store-bg text-store-text font-sans">
      <Header />
      <Hero />
      <RanksSection />
      <CratesSection />
      <LifestealSection />
      <RulesSection />
      <Footer />
    </div>
  );
};

export default Index;
