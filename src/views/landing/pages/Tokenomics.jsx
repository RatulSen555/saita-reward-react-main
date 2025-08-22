// src/views/landing/pages/Raiding.jsx
import React, { Suspense, lazy } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import cryptoVideo from "../../../assets/videos/CRYPTO.mp4";

const Footer = lazy(() => import("../components/Footer"));

const Raiding = () => {
  return (
    <div className="bg-black text-white font-inter overflow-x-hidden relative min-h-screen pb-24">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
          <source src={cryptoVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-orbitron text-yellow-500 mb-6">Raiding Division</h1>
          <p className="text-xl md:text-3xl max-w-3xl mx-auto text-gray-300">
            Engage with tweets 5x faster. Auto-retweet, import CRM lists, dodge detection — all while supporting the SRC Corporation.
          </p>
        </div>
      </section>

      {/* What is Raiding Description */}
      <section className="py-20 px-6 md:px-20 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-orbitron text-highlightGold mb-6">
            RAIDING (Engagement Booster)
          </h2>
          <ul className="space-y-4 text-lg text-gray-300 text-left mx-auto max-w-3xl">
            {[
              "Engage with tweets 5x faster using CRM lists",
              "Auto-retweet support squad",
              "Create custom CRM lists",
              "Import from DMs or past tweets",
              "Thread delay to dodge detection",
              "Engage with specific lists only"
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-highlightGold">✔</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-6 md:px-20 bg-[#0a0a0a] border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-orbitron text-highlightGold mb-12">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                label: "Individual (1-Day Push)",
                price: "$40/day",
                paypal: "https://www.paypal.com/ncp/payment/DCTP9W83D98FS",
                crypto: "https://commerce.coinbase.com/checkout/966cb4cf-231a-48b8-aa33-c89d236fb6cf"
              },
              {
                label: "Weekly (7-Day Sprint)",
                price: "$250/week",
                paypal: "https://www.paypal.com/ncp/payment/DCTP9W83D98FS",
                crypto: "https://commerce.coinbase.com/checkout/17b8f855-bc9b-4915-8094-eb018d6ffec3"
              },
              {
                label: "Monthly (Full Growth Cycle)",
                price: "$699/month",
                paypal: "https://www.paypal.com/ncp/payment/DCTP9W83D98FS",
                crypto: "https://commerce.coinbase.com/checkout/a4d39adc-c71c-4164-b353-d92a1a4d3ca3"
              }
            ].map((plan, idx) => (
              <div key={idx} className="bg-[#111] p-6 rounded-xl border border-highlightGold/30 hover:shadow-[0_0_20px_#FFD70080] transition-all text-left">
                <h3 className="text-2xl font-bold text-highlightGold mb-2">{plan.label}</h3>
                <p className="text-xl text-white mb-4">{plan.price}</p>
                <div className="flex flex-col gap-3">
                  <a
                    href={plan.paypal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-highlightGold text-black py-2 px-4 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition"
                  >
                    Buy with PayPal
                  </a>
                  <a
                    href={plan.crypto}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-pink-500 to-orange-400 text-black py-2 px-4 rounded-lg font-semibold hover:from-orange-500 hover:to-pink-400 transition"
                  >
                    Buy with Crypto
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Pricing */}
      <section className="py-16 px-6 md:px-20 bg-black border-t border-gray-800 text-center">
        <h2 className="text-3xl font-bold font-orbitron text-highlightGold mb-8"> Bundle Pricing</h2>
        <div className="bg-[#111] max-w-3xl mx-auto p-8 rounded-xl border border-highlightGold/20 space-y-6">
          {[
            {
              label: "Daily Bundle — $99/day",
              paypal: "https://www.paypal.com/ncp/payment/E4NDA84UMBHEE",
              crypto: "https://commerce.coinbase.com/checkout/673015d2-470b-471d-94e9-66fc76d37ccf"
            },
            {
              label: "Weekly Bundle — $699/week",
              paypal: "https://www.paypal.com/ncp/payment/E4NDA84UMBHEE",
              crypto: "https://commerce.coinbase.com/checkout/1be93576-56e3-4d07-afd3-20d50a795cfe"
            },
            {
              label: "Monthly Bundle — $1,999/month",
              paypal: "https://www.paypal.com/ncp/payment/E4NDA84UMBHEE",
              crypto: "https://commerce.coinbase.com/checkout/8b80815e-f3b5-4fbf-904b-a84220a5f95e"
            }
          ].map((bundle, idx) => (
            <div key={idx} className="bg-[#1a1a1a] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">{bundle.label}</h3>
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href={bundle.paypal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-highlightGold text-black py-2 px-6 rounded-md font-semibold hover:bg-yellow-500 hover:text-black transition"
                >
                  PayPal
                </a>
                <a
                  href={bundle.crypto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-orange-400 text-black py-2 px-6 rounded-md font-semibold hover:from-orange-500 hover:to-pink-400 transition"
                >
                  Crypto
                </a>
              </div>
            </div>
          ))}
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

export default Raiding;
