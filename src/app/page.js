import Image from "next/image";
import Header from "@/component/Header";
import HeroBanner from "@/component/layout/HeroBanner";
// import AboutProject from "@/component/AboutProject";
import { AboutProjectSplit } from "@/component/AboutProjectSplit";
import MarketProblem from "@/component/MarketProblem";
import Ecosystem from "@/component/Ecosystem";
import TokenomicsSection from "@/component/TokenomicsSection";

export default function Home() {
  return (
    <div className="">
        {/* <section className="bg-red-200 items-center "> */}
          <Header />
          {/* </section> */}
      <section className="">
        <HeroBanner />
      </section>
      <section className="#about">
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
