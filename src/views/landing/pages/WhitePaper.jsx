import React, { Suspense, lazy } from "react";
import Navbar from "../components/Navbar";
import blockchainVideo from "../../../assets/videos/blockchain.mp4";

// Lazy Footer
const Footer = lazy(() => import("../components/Footer"));

const About = () => {
  return (
    <div className="bg-black text-white font-inter overflow-x-hidden">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={blockchainVideo} type="video/mp4" />
        </video>
        <div className="absolute w-full h-full bg-black opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-orbitron text-white drop-shadow-lg mb-6">
            Who We Are
          </h1>
          <p className="text-xl md:text-3xl max-w-2xl mx-auto text-gray-300">
            Discover how <span className="text-highlightGold">Saita Rewards Corporation</span> bridges blockchain and traditional finance.
          </p>
        </div>
      </section>

      {/* ✅ About Content */}
      <section className="relative overflow-hidden bg-black py-32 px-6 md:px-20 border-t border-highlightGold/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          {/* Text Column */}
          <div className="md:w-1/2 space-y-10">
            <h3 className="text-4xl md:text-6xl font-orbitron font-bold bg-gradient-to-r from-highlightGold to-amber-200 bg-clip-text text-transparent">
              About SRC
            </h3>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              <strong>Saita Rewards Corporation (SRC)</strong> is a U.S.-based company registered in Miami, Florida. We are dedicated to bridging the gap between traditional finance and blockchain innovation by developing automated, sustainable, and forward-thinking financial solutions.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our core focus is to offer cryptocurrency-based retirement tools that reward long-term holders through automated, cross-chain smart contract systems. By eliminating the complexity of manual investing and the limitations of traditional retirement accounts, SRC empowers individuals to take financial control on their own terms.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our vision is to evolve into a fully licensed, 100% digital cryptocurrency retirement plan provider. We aim to deliver retirement rewards without the waiting period or gatekeeping of conventional systems — powered entirely by smart contracts and crypto infrastructure.
            </p>
          </div>

          {/* Image Column */}
          <div className="md:w-1/2 relative h-[600px] flex items-center justify-center">
            <div className="relative z-10 group w-full max-w-2xl">
              <div className="absolute inset-0 bg-white/10 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-xl" />
              <img
                src="/updated-saita-reward.png"
                alt="SRC Headquarters"
                className="max-w-full h-auto max-h-[900px] object-contain rounded-4xl"
              />
              {/* Floating particles */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-white/80 rounded-full animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.2}s`,
                      filter: "blur(1px)"
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <Suspense fallback={<div className="text-center py-10">Loading footer...</div>}>
        <footer className="bg-black border-t border-gray-800">
          <Footer />
        </footer>
      </Suspense>
    </div>
  );
};

export default About;
