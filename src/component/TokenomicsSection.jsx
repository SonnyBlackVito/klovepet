"use client";

import Image from "next/image";

const TokenomicsSection = () => {
  const tokenomicsData = [
    {
      label: "Community Rewards",
      value: "300,000,000",
      color: "#E63946",
      percentage: "25%",
      image: "/images/token_image_1.png"
    },
    {
      label: "Ecosystem Partnerships",
      value: "200,000,000",
      color: "#F26457",
      percentage: "25%",
      image: "/images/token_image_2.png"
    },
    {
      label: "Development & Operations",
      value: "150,000,000",
      color: "#FFFFFF",
      percentage: "5%",
      image: "/images/token_image_3.png"
    },
    {
      label: "Investors & Partners",
      value: "150,000,000",
      color: "#FF6B6B",
      percentage: "20%",
      image: "/images/token_image_4.png"
    },
    {
      label: "Marketing",
      value: "100,000,000",
      color: "#FFB4AB",
      percentage: "20%",
      image: "/images/token_image_5.png"
    },
    {
      label: "Team & Advisors",
      value: "100,000,000",
      color: "#F5F5F5",
      percentage: "5%",
      image: "/images/token_image_6.png"
    },
  ];

  return (
    <div
      className="bg-[#FEFBEA] tokenomics-sparkle-bg py-20 px-8 md:px-12 lg:px-16 xl:px-20 relative"
      style={{
        backgroundImage: `
        linear-gradient(180deg, 
          rgba(254,251,234,1) 0%, 
          rgba(254,251,234,0.95) 15%,
          rgba(229,210,163,0.6) 35%, 
          rgba(190,162,115,0.4) 55%, 
          rgba(176,155,123,0.3) 75%, 
          rgba(125,116,99,0.2) 100%
        ),
        radial-gradient(ellipse at 25% 25%, rgba(229,210,163,0.3) 0%, transparent 60%),
        radial-gradient(ellipse at 75% 75%, rgba(190,162,115,0.25) 0%, transparent 65%),
        radial-gradient(circle at 50% 40%, rgba(254,251,234,0.5) 0%, transparent 50%),
        radial-gradient(circle at 80% 60%, rgba(176,155,123,0.2) 0%, transparent 55%),
        radial-gradient(circle at 30% 70%, rgba(229,210,163,0.2) 0%, transparent 50%)
      `,
      }}
    >
      <div className="sparkle-overlay" />
      
      {/* Header Section */}
      <div className="flex flex-col relative z-10 mb-16">
        <h2
          className="text-8xl  font-normal leading-normal max-w-6xl"
          style={{
            color: "#F26457",
            WebkitTextStroke: "2px #876046",
            fontFamily: "'Luckiest Guy', cursive",
            textShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
          }}
        >
          Blockchain & Tokenomics
        </h2>
        <p
          className="text-2xl bold md:text-3xl mt-4"
          style={{
            color: "#333",
            fontFamily: "'SVN-Gilroy', sans-serif",
            textShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
          }}
        >
          Built on Solana Chain for low fees and fast transactions.
          <br />
          A dedicated
          Sub-chain will follow.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 min-h-[500px] relative z-10">
        {/* Left Side - Data List */}
        <div className="flex-1 max-w-[800px]">
          <div className="flex gap-12">
            {/* First Column */}
            <div className="flex flex-col gap-8 flex-1">
              {tokenomicsData.slice(0, 3).map((item, index) => (
                <div key={index}>
                  <div className="flex gap-4 items-start">
                    <div>
                      <Image 
                        src={item.image}
                        alt={item.label}
                        width={60}
                        height={60}
                        className="w-full h-auto object-contain"
                        priority
                      
                      />
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <p className="text-xl text-black  leading-tight">
                        {item.label}
                      </p>
                      <p className="text-sm text-black font-normal">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Column */}
            <div className="flex flex-col gap-8 flex-1">
              {tokenomicsData.slice(3, 6).map((item, index) => (
                <div key={index + 3}>
                  <div className="flex gap-4 items-start">
                    {/* <div 
                      className="w-[86px] h-[44px] mt-0.5 shadow-lg"
                      style={{ 
                        backgroundColor: item.color,
                        border: item.color === "#FFFFFF" || item.color === "#F5F5F5" ? "2px solid #E63946" : "none"
                      }}
                    /> */}
                    <div>
                      <Image 
                        src={item.image}
                        alt={item.label}
                        width={60}
                        height={60}
                        className="w-full h-auto object-contain"
                        priority
                      
                      />
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <p className="text-xl text-black  leading-tight">
                        {item.label}
                      </p>
                      <p className="text-sm text-black font-normal">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Chart Image */}
        <div className="relative animate-tokenomics-reveal hover:animate-tokenomics-glow">
          <div className="relative max-w-[400px] w-full h-auto transition-all duration-300 hover:scale-110 hover:brightness-105 hover:drop-shadow-[0_0_30px_rgba(41,36,36,0.7)]">
            <Image
              src="/images/pizza_token.png"
              alt="Tokenomics Chart"
              width={400}
              height={400}
              className="w-full h-auto object-contain"
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
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes tokenomicsGlow {
          0%, 100% {
            filter: brightness(1) drop-shadow(0 0 20px rgba(106, 78, 221, 0.5));
          }
          50% {
            filter: brightness(1.2) drop-shadow(0 0 40px rgba(106, 78, 221, 0.8));
          }
        }

        @keyframes tokenomicsPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-tokenomics-reveal {
          animation: tokenomicsReveal 2s ease-out forwards, tokenomicsFloat 4s ease-in-out infinite 2s;
        }

        .animate-tokenomics-glow:hover {
          animation: tokenomicsGlow 2s ease-in-out infinite, tokenomicsPulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TokenomicsSection;