import Image from "next/image";
import Header from "@/component/Header";
import HeroBanner from "@/component/layout/HeroBanner";
// import AboutProject from "@/component/AboutProject";
import { AboutProjectSplit } from "@/component/AboutProjectSplit";
import MarketProblem from "@/component/MarketProblem";
import Ecosystem from "@/component/Ecosystem";
import TokenomicsSection from "@/component/TokenomicsSection";
import RoadMap from "@/component/RoadMap";
import Artists from "@/component/Artists";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Header />
      
      <section className="relative w-full">
        <HeroBanner />
      </section>
      
      <section id="about" className="relative w-full">
        <AboutProjectSplit />
      </section>
      
      <section className="relative w-full">
        <MarketProblem />
      </section>
      
      <section className="relative w-full">
        <Ecosystem />
      </section>
      
      <section className="relative ">
        <TokenomicsSection />
      </section>
      
      <section className="relative w-full">
        <RoadMap />
      </section>

      <section>
        <Artists />
      </section>
    </div>
  );
}