// src/views/landing/pages/RevUP.jsx
import React, { lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import bitcoinVideo from "../../../assets/videos/bitcoin2.mp4";

const Footer = lazy(() => import("../components/Footer"));

const featureCards = [
  {
    title: "Reflections Engine",
    desc: "1% automatic redistribution to RevUP holders from every transaction"
  },
  {
    title: "Dual Burn Mechanism",
    desc: "1% RevUP burned + 1% SRT burned per transaction, increasing scarcity"
  },
  {
    title: "Treasury Growth",
    desc: "2% of every transaction funds the SRT ecosystem"
  },
  {
    title: "SRT Integration",
    desc: "Direct value injection into SRT through smart contract-level burns"
  },
  {
    title: "Deflationary Design",
    desc: "Total supply reduces with every trade, fueling long-term value"
  }
];

const RevUP = () => {
  return (
    <div className="bg-black text-white font-inter overflow-x-hidden">
      <Navbar />

      {/* ✅ Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
          <source src={bitcoinVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-8 bg-gradient-to-r from-highlightGold to-amber-200 bg-clip-text text-transparent">
            RevUP Protocol
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            The deflationary engine fueling SRT’s ecosystem through funding SRT’s treasury wallet, automated burns for both RevUP & SRT in addition to transactional reflections.
          </p>
        </div>
      </section>

      {/* ✅ Tokenomics Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 font-orbitron text-highlightGold text-center">
            Tokenomics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#111] p-8 rounded-xl border border-highlightGold/20">
              <h3 className="text-2xl font-orbitron text-highlightGold mb-6">Total Supply</h3>
              <p className="text-gray-300 text-lg">100 million</p>
              <h3 className="text-2xl font-orbitron text-highlightGold mt-8 mb-6">Circulating Supply</h3>
              <p className="text-gray-300 text-lg">100 million</p>
            </div>

            <div className="bg-[#111] p-8 rounded-xl border border-highlightGold/20">
              <h3 className="text-2xl font-orbitron text-highlightGold mb-6">Buy & Sell Tax Rates</h3>
              <ul className="space-y-4 text-gray-300">
                {[
                  "1% RevUP Reflections",
                  "1% RevUP Auto-Burn",
                  "2% SRT Treasury Growth",
                  "1% SRT Auto-Burn"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-highlightGold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm italic text-highlightGold">Deflationary mechanisms in place</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Value Proposition */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 font-orbitron text-highlightGold text-center">
            Value Proposition
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCards.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#111] border border-gray-700 rounded-xl p-8 transition-all hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,200,0,0.3)]"
              >
                <h3 className="text-xl font-semibold text-highlightGold mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Security Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 font-orbitron text-highlightGold text-center">
            Security Infrastructure
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Autonomous Contracts",
                desc: "Fully self-executing code with no admin controls"
              },
              {
                title: "Gas Optimization",
                desc: "Low-cost transactions across supported chains"
              },
              {
                title: "Future-Proof Design",
                desc: "Ready for Layer-2 integrations and scaling solutions"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#111] p-8 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-highlightGold mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Mission Section */}
      <section className="py-20 px-6 md:px-24 bg-gradient-to-br from-black to-highlightGold/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-highlightGold text-5xl mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-highlightGold">
              Our Mission
            </h2>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            To amplify and sustain SRT's value through automated revenue generation, 
            creating perpetual ecosystem growth while rewarding RevUP holders with 
            real-time reflections and deflationary benefits.
          </p>
        </div>
      </section>

      <Suspense fallback={<div className="text-center py-10">Loading footer...</div>}>
        <footer className="bg-black border-t border-gray-800">
          <Footer />
        </footer>
      </Suspense>
    </div>
  );
};

export default RevUP;
