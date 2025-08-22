// src/views/landing/pages/UrbanHalo.jsx
import React, { Suspense, lazy } from "react";
import Navbar from "../components/Navbar";
import marketplaceVideo from "../../../assets/videos/marketplace.mp4";

const Footer = lazy(() => import("../components/Footer"));

const UrbanHalo = () => {
  return (
    <div className="bg-black text-white font-inter overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
          <source src={marketplaceVideo} type="video/mp4" />
        </video>
        <div className="absolute w-full h-full bg-black opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-orbitron text-highlightGold mb-6 animate-fade-in">
            Marketplace by SRC
          </h1>
          <p className="text-xl md:text-3xl max-w-2xl mx-auto text-gray-300 animate-slide-up">
            Where Crypto Culture Meets Premium Lifestyle
          </p>
        </div>
      </section>

      {/* Marketplace Button */}
      <div className="max-w-4xl mx-auto px-6 md:px-20 py-24 text-center">
        <p className="text-lg text-gray-300 mb-6">
          Discover exclusive apparel and premium crypto merch handpicked by the SRC team
        </p>
        <a
          href="https://saitarewardscorporationmarketplace.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-highlightGold text-black font-bold text-lg px-8 py-4 rounded-lg shadow-md hover:bg-highlightGold/90 hover:text-black transition-all"
        >
          View Our Store
        </a>
      </div>

      <Suspense fallback={<div className="text-center py-10">Loading footer...</div>}>
        <footer className="bg-black border-t border-gray-800">
          <Footer />
        </footer>
      </Suspense>
    </div>
  );
};

export default UrbanHalo;
