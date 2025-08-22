// src/views/landing/pages/RewardList.jsx
import React, { lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import bitcoinVideo from "../../../assets/videos/Bitcoin1.mp4";

const Footer = lazy(() => import("../components/Footer"));

const collectibles = [
  {
    name: "Digital Collectibles",
    items: [
      { name: "Golden SRT NFT" },
      { name: "Founder Badges" },
      { name: "Ecosystem Achievements" },
    ],
    desc: "Exclusive digital assets representing milestones and contributions",
  },
  {
    name: "Physical Vault Items",
    items: [
      { name: "SRC Security Card" },
      { name: "Hardware Wallet" },
      { name: "Crypto Art Prints" },
    ],
    desc: "Tangible assets with integrated blockchain technology",
  },
  {
    name: "Premium Memberships",
    items: [
      { name: "Diamond Tier" },
      { name: "Founder Circle" },
      { name: "Ecosystem Partner" },
    ],
    desc: "Exclusive access and benefits for long-term holders",
  },
];

const RewardList = () => {
  return (
    <div className="bg-black text-white font-inter overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={bitcoinVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-orbitron text-highlightGold mb-4">
            Collectibles & Vault
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Secure storage and exclusive digital/physical collectibles for SRC
            ecosystem participants
          </p>
        </div>
      </section>

      {/* ✅ Collectibles Grid (Clean, No images) */}
      <section className="py-20 px-6 md:px-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-orbitron font-bold text-highlightGold mb-12 text-center">
            Featured Collections
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {collectibles.map((collection, index) => (
              <div
                key={index}
                className="bg-[#111] rounded-xl p-8 border border-gray-800 hover:border-highlightGold/50 transition-all"
              >
                <h3 className="text-2xl font-semibold text-highlightGold mb-6">
                  {collection.name}
                </h3>
                <p className="text-gray-300 mb-8">{collection.desc}</p>
                <div className="space-y-3">
                  {collection.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-900 px-4 py-3 rounded-md border border-gray-700 text-highlightGold text-sm font-medium"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vault Security Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-900/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-orbitron font-bold text-highlightGold mb-8">
            Secure Digital Vault
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <div className="flex items-start gap-4">
                <div className="text-highlightGold text-2xl">▸</div>
                <div>
                  <h4 className="text-xl font-semibold text-highlightGold">
                    Multi-Chain Storage
                  </h4>
                  <p className="text-gray-300">
                    Supports assets across 12+ blockchains
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-highlightGold text-2xl">▸</div>
                <div>
                  <h4 className="text-xl font-semibold text-highlightGold">
                    Institutional Security
                  </h4>
                  <p className="text-gray-300">
                    Military-grade encryption and multi-sig protection
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-highlightGold text-2xl">▸</div>
                <div>
                  <h4 className="text-xl font-semibold text-highlightGold">
                    Insurance Backed
                  </h4>
                  <p className="text-gray-300">
                    $100M custody insurance through Lloyd's of London
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">{/* Optional image */}</div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default RewardList;
