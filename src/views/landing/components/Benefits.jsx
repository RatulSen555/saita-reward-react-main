import React from "react";
import "./Benefits.css";

const tokenList = [
  { name: "ECOS Token", description: "Enhances liquidity and rewards long-term holders." },
  { name: "CHICA Token", description: "Adds playful, engaging ecosystem experiences." },
  { name: "CRYPTO CRACKER", description: "Provides simple, reliable reward system." },
  { name: "BANANA BUCK", description: "Energizes ecosystem with dynamic opportunities." },
  { name: "CALIFAS", description: "Promotes sustainable growth and consistency." }
];

const Benefits = () => {
  return (
    <section className="w-full py-24 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        {/* Text and Tokens */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold font-orbitron text-highlightGold mb-6">
            Diamond Hand Rewards Program
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Quarterly program rewarding loyal SRT ecosystem holders with automated distributions.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {tokenList.map((token, index) => (
              <div
                key={index}
                className="bg-[#111] border border-gray-700 rounded-xl p-6 transition-all hover:border-highlightGold/50 token-card group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-highlightGold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-semibold text-highlightGold mb-3 relative z-10">
                  {token.name}
                </h3>
                <p className="text-gray-300 relative z-10">{token.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Diamond Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <img
            src="/saita_hand_trans.png"
            alt="Diamond Hand"
            className="w-full max-w-xl h-auto animate-float-slow hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <div className="absolute inset-0 glow-effect opacity-30 hover:opacity-50 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

export default Benefits;