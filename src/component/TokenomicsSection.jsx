"use client";

import Image from "next/image";


const TokenomicsSection = () => {
  const tokenomicsData = [
    {
      label: "Fan Reward",
      value: "250,000,000",
      color: "#E63946",
      percentage: "25%",
    },
    {
      label: "Eco System",
      value: "250,000,000",
      color: "#F26457",
      percentage: "25%",
    },
    {
      label: "Team Advisor",
      value: "50,000,000",
      color: "#FFFFFF", 
      percentage: "5%",
    },
    {
      label: "Dao Community",
      value: "200,000,000",
      color: "#FF6B6B", 
      percentage: "20%",
    },
    {
      label: "Marketing",
      value: "200,000,000",
      color: "#FFB4AB", 
      percentage: "20%",
    },
    {
      label: "PreSale",
      value: "50,000,000",
      color: "#F5F5F5",
      percentage: "5%",
    },
  ];

  return (
    <div 
      className="tokenomics-sparkle-bg py-20 px-8 md:px-12 lg:px-16 xl:px-20 relative"
      style={{
        background: "linear-gradient(150deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0.1) 50%, rgba(185, 179, 179, 0.3) 85%, rgba(52, 48, 48, 0.3) 100%)"
      }}
    >
      <div className="sparkle-overlay" />
      
      {/* Header Section */}
      <div className="flex flex-col  mb-16 relative z-10">
        <h2 
          className="text-8xl font-normal leading-normal max-w-6xl "
          style={{
            color: "#F26457",
            WebkitTextStroke: "2px #876046",
            fontFamily: "'Luckiest Guy', cursive",
          }}
        >
          Blockchain & Tokenomics
        </h2>
        <p 
          className="text-2xl md:text-1xl mt-4"
          style={{
            color: "#333",
            // WebkitTextStroke: "1.5px #876046",
            fontFamily: "'Luckiest Guy', cursive",
          }}
        >
          Built on BNB Chain for low fees and fast transactions. A dedicated Sub-chain will follow.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20 min-h-[700px] relative z-10">
        {/* Left Side - Data List */}
        <div className="flex-1 max-w-[800px]">
          <div className="flex gap-12">
            {/* First Column */}
            <div className="flex flex-col gap-8 flex-1">
              {tokenomicsData.slice(0, 3).map((item, index) => (
                <div key={index}>
                  <div className="flex gap-4 items-start">
                    <div 
                      className="w-[86px] h-[44px] shadow-lg"
                      style={{ 
                        backgroundColor: item.color,
                        border: item.color === "#FFFFFF" || item.color === "#F5F5F5" ? "2px solid #E63946" : "none"
                      }}
                    />
                    <div className="flex flex-col gap-2 flex-1">
                      <p className="text-xl font-bold text-white leading-tight">
                        {item.label}
                      </p>
                      <p className="text-sm text-white font-normal">
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
                    <div 
                      className="w-[86px] h-[44px] mt-0.5 shadow-lg"
                      style={{ 
                        backgroundColor: item.color,
                        border: item.color === "#FFFFFF" || item.color === "#F5F5F5" ? "2px solid #E63946" : "none"
                      }}
                    />
                    <div className="flex flex-col gap-2 flex-1">
                      <p className="text-xl font-bold text-white leading-tight">
                        {item.label}
                      </p>
                      <p className="text-sm text-white font-normal">
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
          <div className="relative max-w-[400px] w-full h-auto transition-all duration-300 hover:scale-110 hover:brightness-115 hover:drop-shadow-[0_0_30px_rgba(106,78,221,0.7)]">
            <Image
              src="/tokenomics.png"
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