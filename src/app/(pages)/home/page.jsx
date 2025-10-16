"use client";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import EcosystemSection from "./sections/EcosystemSection";
import MarketSection from "./sections/MarketSection";
import RoadmapSection from "./sections/RoadmapSection";
import TokenomicSection from "./sections/TokenomicSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <EcosystemSection />
      <MarketSection />
      <RoadmapSection />
      <TokenomicSection />
    </main>
  );
}
