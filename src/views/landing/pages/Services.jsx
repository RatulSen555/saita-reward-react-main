// src/views/landing/pages/Services.jsx
import React, { lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import servicesVideo from "../../../assets/videos/services.mp4";

const Services = () => {
  const services = [
    {
      title: "💬 SHILLING (Automated Influence Engine)",
      description: "Convert attention into clicks. Look organic. Plug like a pro.",
      features: [
        "Auto-DM replies",
        "Auto-plug your links in replies",
        "Evergreen tweet library",
        "Hide URL previews for stealth shills",
        "Daily tweet & thread scheduling",
        "Re-write & finish tweet options",
        "Add unlimited accounts to rotate shills"
      ]
    },
    {
      title: "🧨 RAIDING (Engagement Booster)",
      description: "Comment. Retweet. Reply. 5x faster.",
      features: [
        "Engage with tweets 5x faster using CRM lists",
        "Auto-retweet support squad",
        "Create custom CRM lists",
        "Import from DMs or past tweets",
        "Thread delay to dodge detection",
        "Engage with specific lists only"
      ]
    },
    {
      title: "📢 MARKETING (AI Writing + Strategic Discovery)",
      description: "Position your brand for virality. With zero effort.",
      features: [
        "Access 2M+ viral tweet library",
        "4,000+ handpicked viral tweets (10 niches)",
        "Custom tweet inspiration engine",
        "Daily AI-written tweets",
        "Thread ideas, hooks & tweet finishers",
        "Complete Twitter Analytics",
        "Schedule all threads & tweets",
        "Unlimited usage for all writing tools"
      ]
    }
  ];

  const planData = {
    Shilling: {
      prices: ["$40/day", "$250/week", "$699/month (Save $300)"],
      paypal: "https://www.paypal.com/ncp/payment/22H9FCYTQVBV6",
      coinbase: [
        "https://commerce.coinbase.com/checkout/703be7a2-5fd3-4937-a406-40dda64ed740",
        "https://commerce.coinbase.com/checkout/d0097108-3167-4832-a02a-c4b348850e45",
        "https://commerce.coinbase.com/checkout/41f7a2a5-b8cf-46c9-8567-f4e568906b38"
      ]
    },
    Raiding: {
      prices: ["$40/day", "$250/week", "$699/month (Save $300)"],
      paypal: "https://www.paypal.com/ncp/payment/DCTP9W83D98FS",
      coinbase: [
        "https://commerce.coinbase.com/checkout/966cb4cf-231a-48b8-aa33-c89d236fb6cf",
        "https://commerce.coinbase.com/checkout/17b8f855-bc9b-4915-8094-eb018d6ffec3",
        "https://commerce.coinbase.com/checkout/a4d39adc-c71c-4164-b353-d92a1a4d3ca3"
      ]
    },
    Marketing: {
      prices: ["$50/day", "$320/week", "$699/month (Save $300)"],
      paypal: "https://www.paypal.com/ncp/payment/7HN92K59G25QY",
      coinbase: [
        "https://commerce.coinbase.com/checkout/e81bcdae-3433-4437-8e91-160e13f3a7a2",
        "https://commerce.coinbase.com/checkout/14c6d8f1-5384-4356-ab41-563056174eeb",
        "https://commerce.coinbase.com/checkout/0d1b50db-970d-45f9-b3cb-ee4423cd099e"
      ]
    }
  };

  const bundle = {
    paypal: "https://www.paypal.com/ncp/payment/E4NDA84UMBHEE",
    coinbase: [
      "https://commerce.coinbase.com/checkout/673015d2-470b-471d-94e9-66fc76d37ccf",
      "https://commerce.coinbase.com/checkout/1be93576-56e3-4d07-afd3-20d50a795cfe",
      "https://commerce.coinbase.com/checkout/8b80815e-f3b5-4fbf-904b-a84220a5f95e"
    ]
  };

  return (
    <div className="bg-black text-white font-inter overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-60">
          <source src={servicesVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-orbitron bg-gradient-to-r from-highlightGold to-amber-200 bg-clip-text text-transparent mb-4">
            SRC Service Hub
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Plug into automated influence, viral marketing, and community power.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 md:px-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((svc, i) => (
            <div key={i} className="bg-[#111] rounded-xl p-6 border border-gray-800 hover:border-highlightGold transition-all">
              <h3 className="text-xl md:text-2xl font-bold text-highlightGold font-orbitron mb-2">{svc.title}</h3>
              <p className="text-gray-300 mb-4">{svc.description}</p>
              <ul className="text-sm text-gray-400 space-y-2">
                {svc.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-highlightGold">✔</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 💳 Aligned Pricing Plans */}
      <section className="py-20 px-6 md:px-20 bg-[#0a0a0a] border-t border-gray-800 text-center">
        <h2 className="text-3xl font-bold font-orbitron text-highlightGold mb-12">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {["Shilling", "Raiding", "Marketing"].map((type, idx) => (
            <div key={type} className="space-y-6">
              <h3 className="text-2xl font-bold text-highlightGold font-orbitron mb-2 text-center">{type}</h3>
              {["Daily", "Weekly", "Monthly"].map((label, tierIdx) => (
                <div key={label} className="bg-[#111] p-6 rounded-xl border border-highlightGold/30 hover:shadow-[0_0_20px_#FFD70080] transition-all">
                  <h4 className="text-xl text-white font-semibold mb-2">{label} Plan</h4>
                  <p className="text-gray-300 mb-4">{planData[type].prices[tierIdx]}</p>
                  <div className="flex flex-col gap-3">
                    <a
                      href={planData[type].paypal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-highlightGold text-black py-2 px-4 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition"
                    >
                      PayPal
                    </a>
                    <a
                      href={planData[type].coinbase[tierIdx]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-pink-500 to-orange-400 text-black py-2 px-4 rounded-lg font-semibold hover:from-orange-500 hover:to-pink-400 transition"
                    >
                      Crypto
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* 💎 Bundle Section */}
      <section className="py-20 px-6 md:px-20 bg-black border-t border-gray-800 text-center">
        <h2 className="text-3xl font-bold font-orbitron text-highlightGold mb-8">Bundle Pricing</h2>
        <div className="bg-[#111] max-w-3xl mx-auto p-8 rounded-xl border border-highlightGold/20 space-y-6">
          {["Daily", "Weekly", "Monthly"].map((label, idx) => (
            <div key={label} className="bg-[#1a1a1a] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">{label} Bundle — {["$99/day", "$699/week", "$1,999/month"][idx]}</h3>
              <div className="flex justify-center gap-4 flex-wrap">
                <a href={bundle.paypal} target="_blank" rel="noopener noreferrer"
                  className="bg-highlightGold text-black py-2 px-6 rounded-md font-semibold hover:bg-yellow-500 transition">
                  PayPal
                </a>
                <a href={bundle.coinbase[idx]} target="_blank" rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-orange-400 text-black py-2 px-6 rounded-md font-semibold hover:from-orange-500 hover:to-pink-400 transition">
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

export default Services;
