import React, { Suspense, lazy } from "react";
import Navbar from "../components/Navbar";
// Corrected path


// Lazy Footer
const Footer = lazy(() => import("../components/Footer"));

const RetirementPlan = () => {
  return (
    <div className="bg-black text-white font-inter overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Video */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={retirementVideo} type="video/mp4" />
        </video>
        <div className="absolute w-full h-full bg-black opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-orbitron text-highlightGold mb-6 animate-fade-in">
            Crypto Retirement Revolution
          </h1>
          <p className="text-xl md:text-3xl max-w-2xl mx-auto text-gray-300 animate-slide-up">
            Secure your future with automated, cross-chain retirement planning powered by blockchain technology.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-24">
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {/* Plan Benefits */}
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-highlightGold transition-all duration-300">
            <h2 className="text-3xl font-orbitron font-semibold text-highlightGold mb-6">
              ✨ Key Features
            </h2>
            <ul className="space-y-6">
              {[
                "Automated smart contract rewards",
                "Cross-chain compatibility (BNB, ETH, MATIC)",
                "Tax-optimized growth strategies",
                "Instant liquidity access",
                "Portfolio insurance options",
                "Multi-signature security"
              ].map((feature, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-4 text-lg text-gray-300 hover:text-highlightGold transition-colors"
                >
                  <span className="text-highlightGold mt-1">▹</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* How It Works */}
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-highlightGold transition-all duration-300">
            <h2 className="text-3xl font-orbitron font-semibold text-highlightGold mb-6">
              🚀 How It Works
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Deposit Assets",
                  desc: "Secure transfer of supported cryptocurrencies into your retirement vault",
                  icon: "💼"
                },
                {
                  step: "2",
                  title: "Automated Growth",
                  desc: "Smart contracts compound rewards through staking, farming, and reflections",
                  icon: "📈"
                },
                {
                  step: "3",
                  title: "Withdraw Anytime",
                  desc: "Flexible access to funds with optimized tax strategies",
                  icon: "🏦"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex gap-6 items-start group"
                >
                  <div className="text-highlightGold text-2xl w-12 h-12 flex items-center justify-center bg-gray-900 rounded-full group-hover:bg-highlightGold/20 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100 group-hover:text-highlightGold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 animate-pulse-slow">
          <button className="bg-highlightGold text-black px-10 py-4 rounded-full text-xl font-semibold hover:bg-highlightGold/90 transition-all transform hover:scale-105 shadow-lg shadow-highlightGold/20">
            Start Your Future Now →
          </button>
        </div>

        {/* Investment Visualization */}
        <div className="mt-24 border-t border-gray-800 pt-24">
          <h2 className="text-4xl font-orbitron font-bold text-highlightGold text-center mb-16">
            Projected Growth
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { year: "Year 1", return: "18-24%", color: "bg-green-500" },
              { year: "Year 5", return: "142-180%", color: "bg-blue-500" },
              { year: "Year 10", return: "400-600%", color: "bg-purple-500" }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-highlightGold transition-all"
              >
                <div className={`w-16 h-16 rounded-full ${item.color} mb-6 animate-float`}></div>
                <h3 className="text-2xl font-semibold text-gray-100">{item.year}</h3>
                <p className="text-3xl font-bold text-highlightGold mt-2">{item.return}</p>
                <p className="text-gray-400 mt-2">Average Annual Return</p>
              </div>
            ))}
          </div>
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

export default RetirementPlan;
