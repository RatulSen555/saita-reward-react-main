// src/views/landing/pages/Marketing.jsx
import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import footerVideo from "../../../assets/videos/footervideo.mp4";

const Footer = lazy(() => import("../components/Footer"));

const Marketing = () => {
  const plans = [
    {
      label: "Individual (1-Day Push)",
      price: "$50/day",
      paypal: "https://www.paypal.com/ncp/payment/7HN92K59G25QY",
      coinbase: "https://commerce.coinbase.com/checkout/e81bcdae-3433-4437-8e91-160e13f3a7a2",
    },
    {
      label: "Weekly (7-Day Sprint)",
      price: "$320/week",
      paypal: "https://www.paypal.com/ncp/payment/7HN92K59G25QY",
      coinbase: "https://commerce.coinbase.com/checkout/14c6d8f1-5384-4356-ab41-563056174eeb",
    },
    {
      label: "Monthly (Full Growth Cycle)",
      price: "$699/month (Save $300)",
      paypal: "https://www.paypal.com/ncp/payment/7HN92K59G25QY",
      coinbase: "https://commerce.coinbase.com/checkout/0d1b50db-970d-45f9-b3cb-ee4423cd099e",
    },
  ];

  const bundles = [
    {
      label: "Daily Bundle — $99/day",
      paypal: "https://www.paypal.com/ncp/payment/E4NDA84UMBHEE",
      coinbase: "https://commerce.coinbase.com/checkout/673015d2-470b-471d-94e9-66fc76d37ccf",
    },
    {
      label: "Weekly Bundle — $699/week",
      paypal: "https://www.paypal.com/ncp/payment/E4NDA84UMBHEE",
      coinbase: "https://commerce.coinbase.com/checkout/1be93576-56e3-4d07-afd3-20d50a795cfe",
    },
    {
      label: "Monthly Bundle — $1,999/month",
      paypal: "https://www.paypal.com/ncp/payment/E4NDA84UMBHEE",
      coinbase: "https://commerce.coinbase.com/checkout/8b80815e-f3b5-4fbf-904b-a84220a5f95e",
    },
  ];

  return (
    <div className="bg-black text-white font-inter overflow-x-hidden relative min-h-screen pb-24">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
          <source src={footerVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-orbitron text-yellow-400 mb-6">Marketing Division</h1>
          <p className="text-xl md:text-3xl max-w-3xl mx-auto text-gray-300">
            Position your brand for virality with AI-powered writing & Web3 strategy.
          </p>
        </div>
      </section>

      {/* Description List */}
      <section className="py-20 px-6 md:px-20 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-orbitron text-highlightGold mb-6">
            MARKETING (AI Writing + Strategic Discovery)
          </h2>
          <ul className="space-y-4 text-lg text-gray-300 text-left mx-auto max-w-3xl">
            {[
              "Access 2M+ viral tweet library",
              "4,000+ handpicked viral tweets (10 niches)",
              "Custom tweet inspiration engine",
              "Daily AI-written tweets",
              "Thread ideas, hooks & tweet finishers",
              "Complete Twitter Analytics",
              "Schedule all threads & tweets",
              "Unlimited usage for all writing tools"
            ].map((feat, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-highlightGold">✔</span>
                {feat}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 px-6 md:px-20 bg-[#0a0a0a] border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-orbitron text-highlightGold mb-12">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div key={idx} className="bg-[#111] p-6 rounded-xl border border-highlightGold/30 hover:shadow-[0_0_20px_#FFD70080] transition-all text-left">
                <h3 className="text-2xl font-bold text-highlightGold mb-2">{plan.label}</h3>
                <p className="text-xl text-white mb-4">{plan.price}</p>
                <div className="flex flex-col gap-3">
                  <a href={plan.paypal} target="_blank" rel="noopener noreferrer" className="bg-highlightGold text-black py-2 px-4 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition">
                    Buy with PayPal
                  </a>
                  <a href={plan.coinbase} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 to-orange-400 text-black py-2 px-4 rounded-lg font-semibold hover:from-orange-500 hover:to-pink-400 transition">
                    Buy with Crypto
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Section */}
      <section className="py-16 px-6 md:px-20 bg-black border-t border-gray-800 text-center">
        <h2 className="text-3xl font-bold font-orbitron text-highlightGold mb-8"> Bundle Pricing</h2>
        <div className="bg-[#111] max-w-3xl mx-auto p-8 rounded-xl border border-highlightGold/20 space-y-6">
          {bundles.map((bundle, idx) => (
            <div key={idx} className="bg-[#1a1a1a] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">{bundle.label}</h3>
              <div className="flex justify-center gap-4 flex-wrap">
                <a href={bundle.paypal} target="_blank" className="bg-highlightGold text-black py-2 px-6 rounded-md font-semibold hover:bg-yellow-500 hover:text-black transition">
                  PayPal
                </a>
                <a href={bundle.coinbase} target="_blank" className="bg-gradient-to-r from-pink-500 to-orange-400 text-black py-2 px-6 rounded-md font-semibold hover:from-orange-500 hover:to-pink-400 transition">
                  Crypto
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <Link
          to="/how-to-buy"
          className="inline-block bg-gradient-to-r from-highlightGold to-amber-500 text-black px-8 py-3 rounded-full font-bold hover:bg-gradient-to-l hover:text-black transition-all duration-300"
        >
          Buy SRT Now →
        </Link>
      </div>

      <Suspense fallback={<div className="text-center py-10">Loading footer...</div>}>
        <footer className="bg-black border-t border-gray-800">
          <Footer />
        </footer>
      </Suspense>
    </div>
  );
};

export default Marketing;
