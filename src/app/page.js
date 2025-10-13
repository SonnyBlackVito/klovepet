import Image from "next/image";
import Header from "@/component/Header";
import Banner from "@/component/layout/Banner";
import HeroBanner from "@/component/layout/HeroBanner";
// import AboutProject from "@/component/AboutProject";
import { AboutProjectSplit } from "@/component/AboutProjectSplit";
import { AboutProjectCute } from "@/component/AboutProjectCute";
import AboutProject from "@/component/AboutProject";
import AboutProjectAnimated from "@/component/AboutProjectAnimated";
import { AboutProjectCentered } from "@/component/AboutProjectCentered";
import MarketProblem from "@/component/MarketProblem";
import Ecosystem from "@/component/Ecosystem";
import TokenomicsSection from "@/component/TokenomicsSection";

export default function Home() {
  return (
    <div className="">
      <Header />
      <section className="">
        <HeroBanner />
      </section>
      <section>
        <AboutProjectSplit />
      </section>
      <section>
        <MarketProblem />
      </section>
      <section>
        <Ecosystem />
      </section>
      <section>
        <TokenomicsSection />
      </section>
    </div>
  );
}
