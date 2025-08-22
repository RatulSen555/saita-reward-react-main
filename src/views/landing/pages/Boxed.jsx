// src/views/landing/pages/Boxed.jsx
import React, { lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import boxedVideo from "../../../assets/videos/boxed.mp4";

const Footer = lazy(() => import("../components/Footer"));

const boxedSets = [
  {
    title: "Starter Pack",
    contents: ["SRT Beginner's Guide", "Basic Wallet", "$50 SRT Credit"],
    price: "299"
  },
  {
    title: "Investor Pack", 
    contents: ["Hardware Wallet", "Premium Courses", "500 SRT Tokens"],
    price: "1499"
  },
  {
    title: "Enterprise Suite",
    contents: ["Custom Merchandise", "Dedicated Support", "5000 SRT + NFT"],
    price: "4999"
  }
];

const Boxed = () => {
  return (
    <div className="bg-black text-white font-inter overflow-x-hidden">
      <Navbar />

      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={boxedVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-orbitron text-highlightGold mb-4">
            SRC Boxed Sets
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Curated packages combining physical products, digital assets, and exclusive benefits
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-orbitron font-bold text-highlightGold mb-12 text-center">
            Featured Collections
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boxedSets.map((set, index) => (
              <div key={index} className="bg-[#111] rounded-xl p-8 border border-gray-800 hover:border-highlightGold/50 transition-all">
                {/* Removed image element */}
                <h3 className="text-2xl font-semibold text-highlightGold mb-6 text-center border-b border-highlightGold/30 pb-4">
                  {set.title}
                </h3>
                <ul className="space-y-3 text-gray-300 mb-6">
                  {set.contents.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] rounded-lg">
                      <span className="text-highlightGold">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-2xl font-bold text-highlightGold">${set.price}</span>
                  <button className="bg-highlightGold text-black px-6 py-2 rounded-lg hover:bg-highlightGold/90 transition-colors font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Boxed;