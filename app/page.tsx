import HeroSection from "./components/HeroSection";
import NetworkSection from "./components/NetworkSection";
import NewGamingSection from "./components/NewGamingSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="new-gamin-container pb-20 my-20">
        <NetworkSection />
        <NewGamingSection />
      </div>
    </div>
  );
}
