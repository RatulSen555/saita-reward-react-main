import React, { Suspense, lazy } from "react";
import Navbar from "../components/Navbar";
import buyingVideo from "../../../assets/videos/buying.mp4";

// Lazy Footer
const Footer = lazy(() => import("../components/Footer"));

const HowToBuy = () => {
  return (
    <div className="bg-black text-white font-inter overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Video */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={buyingVideo} type="video/mp4" />
        </video>
        <div className="absolute w-full h-full bg-black opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-orbitron text-highlightGold animate-fade-in">
            Welcome to the Swap Station
          </h1>
          <p className="text-xl md:text-3xl max-w-2xl mx-auto text-gray-300 animate-slide-up">
            Instantly swap your tokens securely with our trusted partners.
          </p>
        </div>
      </section>

   {/* Main Swap Card - Centered & Responsive */}
<div className="flex items-center justify-center min-h-[60vh] px-6">
  <div className="bg-[#111] border border-highlightGold/20 p-6 md:p-8 rounded-2xl text-center hover:border-highlightGold transition-all w-full max-w-md">
    <img
      src="/logos/pancakeswap-cake-logo.svg"
      alt="PancakeSwap Logo"
      className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-6"
    />
    <h2 className="text-2xl md:text-3xl font-orbitron text-highlightGold mb-4">
      Buy via PancakeSwap
    </h2>
    <a
      href="https://pancakeswap.finance/swap?outputCurrency=0x6dd1C1c6E1c9EBeF0C82221aBAB30bf648756005"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-highlightGold text-black font-semibold py-3 px-6 rounded-lg hover:bg-highlightGold/90 hover:text-black transition-all text-sm md:text-base"
    >
      Launch Swap →
    </a>
  </div>
</div>


      {/* Footer */}
      <Suspense fallback={<div className="text-center py-10">Loading footer...</div>}>
        <footer className="bg-black border-t border-gray-800">
          <Footer />
        </footer>
      </Suspense>
    </div>
  );
};

export default HowToBuy;
