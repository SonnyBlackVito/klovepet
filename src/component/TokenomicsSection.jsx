"use client";

import Image from "next/image";

const TokenomicsSection = () => {
  const tokenomicsData = [
    {
      label: "Community Rewards",
      value: "300,000,000",
      color: "#E63946",
      percentage: "25%",
      image: "/images/token_image_1.png",
    },
    {
      label: "Ecosystem Partnerships",
      value: "200,000,000",
      color: "#F26457",
      percentage: "25%",
      image: "/images/token_image_2.png",
    },
    {
      label: "Development & Operations",
      value: "150,000,000",
      color: "#FFFFFF",
      percentage: "5%",
      image: "/images/token_image_3.png",
    },
    {
      label: "Investors & Partners",
      value: "150,000,000",
      color: "#FF6B6B",
      percentage: "20%",
      image: "/images/token_image_4.png",
    },
    {
      label: "Marketing",
      value: "100,000,000",
      color: "#FFB4AB",
      percentage: "20%",
      image: "/images/token_image_5.png",
    },
    {
      label: "Team & Advisors",
      value: "100,000,000  (3-year vesting)",
      color: "#F5F5F5",
      percentage: "5%",
      image: "/images/token_image_6.png",
    },
  ];

  return (
    <div
      className="bg-[#FEFBEA] tokenomics-sparkle-bg py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative"
      style={{
        backgroundImage: `
        linear-gradient(180deg, 
          rgba(254,251,234,1) 0%, 
          rgba(254,251,234,0.95) 15%,
          rgba(234, 225, 200, 0.6) 35%, 
          rgba(255, 246, 231, 0.4) 55%, 
          rgba(237, 219, 192, 0.3) 75%, 
          rgba(250, 233, 200, 0.2) 100%
        ),
        radial-gradient(ellipse at 25% 25%, rgba(229,210,163,0.3) 0%, transparent 60%),
        radial-gradient(ellipse at 75% 75%, rgba(190,162,115,0.25) 0%, transparent 65%),
        radial-gradient(circle at 50% 40%, rgba(254,251,234,0.5) 0%, transparent 50%),
        radial-gradient(circle at 80% 60%, rgba(176,155,123,0.2) 0%, transparent 55%),
        radial-gradient(circle at 30% 70%, rgba(229,210,163,0.2) 0%, transparent 50%)
      `,
      }}>
      <div className="sparkle-overlay" />

      {/* Header Section */}
        
        <div className="flex overflow-x-hidden overflow-y-hidden mb-8 sm:mb-12 md:mb-16 pt-5" >
          <div className="flex flex-col relative z-10 w-full">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal  max-w-6xl"
              style={{
                color: "#F26457",
                WebkitTextStroke: "1px #876046",
                fontFamily: "'Luckiest Guy', cursive",
                textShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
              }}>
              <span className="block sm:inline">Blockchain</span>{" "}
              <span className="relative inline-block">
                &{/* Paw prints animation - hidden on mobile */}
                <div
                  className="hidden lg:block absolute top-0 left-full h-[320px] pointer-events-none "
                  style={{
                    marginLeft: "10px",
                    width: "1200px",
                    height:"320px"
                  }}>
                  {[
                    { delay: 0, top: 5, isLeft: true, color: "#F26457" },
                    { delay: 0.3, top: 50, isLeft: false, color: "#FF7F6E" },
                    { delay: 0.6, top: 5, isLeft: true, color: "#F26457" },
                    { delay: 0.9, top: 50, isLeft: false, color: "#FF7F6E" },
                  ].map((paw, index) => (
                    <div
                      key={index}
                      className={`absolute text-4xl xl:text-5xl ${
                        paw.isLeft ? "animate-paw-walk" : "animate-paw-walk-alt"
                      }`}
                      style={{
                        animationDelay: `${paw.delay}s`,
                        top: `${paw.top}px`,
                        left: "0",
                        filter: `drop-shadow(0 4px 8px ${paw.color}40) brightness(1.1)`,
                        WebkitFilter: `drop-shadow(0 4px 8px ${paw.color}40) brightness(1.1)`,
                      }}>
                      🐾
                    </div>
                  ))}
                </div>
              </span>{" "}
              <span className="block sm:inline">Tokenomics</span>
            </h2>

            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-3 sm:mt-4 font-bold max-w-4xl"
              style={{
                color: "#333",
                fontFamily: "'SVN-Gilroy', sans-serif",
                textShadow: "0px 4px 6px rgba(0, 0, 0, 0.15)",
              }}>
              Built on Solana Chain for low fees and fast transactions.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>A dedicated Sub-chain will
              follow.
            </p>
          </div>
        </div>
      


      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-12 xl:gap-16 min-h-[400px] sm:min-h-[500px] relative z-10">
        {/* Left Side - Data List */}
        <div className="w-full lg:flex-1 max-w-[900px]">
          {/* Mobile & Small Tablet: Single Column */}
          <div className="flex flex-col gap-6 sm:gap-8 md:hidden">
            {tokenomicsData.map((item, index) => (
              <div key={index} className="flex gap-3 sm:gap-4 items-center">
                <div className="flex-shrink-0">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                    <Image
                      src={item.image}
                      alt={item.label}
                      width={80}
                      height={80}
                      // fill
                      className=" object-contain"
                      priority
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 sm:gap-2 flex-1">
                  <p
                    style={{ fontFamily: "'Luckiest Guy', cursive" }}
                    className="text-lg sm:text-xl text-black leading-tight">
                    {item.label}
                  </p>
                  <p className="text-xs sm:text-sm text-black font-normal">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Medium+ Screens: Two Columns */}
          <div className="hidden md:flex gap-8 lg:gap-10 xl:gap-12">
            {[0, 1].map((colIndex) => (
              <div
                key={colIndex}
                className="flex flex-col gap-6 lg:gap-8 flex-1">
                {tokenomicsData
                  .slice(colIndex * 3, colIndex * 3 + 3)
                  .map((item, index) => (
                    <div key={index + colIndex * 3}>
                      <div className="flex gap-3 lg:gap-4 items-center">
                        <div className="flex-shrink-0">
                          <div className="relative w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28">
                            <Image
                              src={item.image}
                              alt={item.label}
                              width={120}
                              height={120}
                              className="object-contain"
                              priority
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 lg:gap-2 flex-1">
                          <p
                            style={{ fontFamily: "'Luckiest Guy', cursive" }}
                            className="text-lg lg:text-xl xl:text-2xl text-black leading-tight">
                            {item.label}
                          </p>
                          <p className="text-xs lg:text-sm xl:text-base text-black font-normal">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Pizza Token Chart */}
        <div className="relative animate-tokenomics-reveal hover:animate-tokenomics-glow w-full lg:w-auto flex justify-center">
          <div className="relative max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] xl:max-w-[800px] w-full h-auto transition-all duration-300 hover:scale-105 lg:hover:scale-110 hover:brightness-105 hover:drop-shadow-[0_0_20px_rgba(186,142,54,0.8)] lg:hover:drop-shadow-[0_0_30px_rgba(186,142,54,1)]">
            <Image
              src="/images/pizza_token.png"
              alt="Tokenomics Chart"
              width={400}
              height={400}
              className="object-fill"
              priority
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes tokenomicsReveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes tokenomicsFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes tokenomicsGlow {
          0%,
          100% {
            filter: brightness(1) drop-shadow(0 0 20px rgba(106, 78, 221, 0.5));
          }
          50% {
            filter: brightness(1.2)
              drop-shadow(0 0 40px rgba(106, 78, 221, 0.8));
          }
        }

        @keyframes tokenomicsPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-tokenomics-reveal {
          animation: tokenomicsReveal 2s ease-out forwards,
            tokenomicsFloat 4s ease-in-out infinite 2s;
        }

        .animate-tokenomics-glow:hover {
          animation: tokenomicsGlow 2s ease-in-out infinite,
            tokenomicsPulse 1.5s ease-in-out infinite;
        }

        @media (max-width: 1024px) {
          .animate-tokenomics-reveal {
            animation: tokenomicsReveal 1.5s ease-out forwards;
          }
        }
      `}</style>
    </div>
  );
};

export default TokenomicsSection;
