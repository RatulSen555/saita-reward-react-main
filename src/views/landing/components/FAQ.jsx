// src/views/landing/components/FAQ.jsx
import React from "react";

const tokens = [
  { name: "BTC", logo: "/logos/bitcoin-btc-logo.svg" },
  { name: "BNB", logo: "/logos/bnb-bnb-logo.svg" },
  { name: "USDC", logo: "/logos/usd-coin-usdc-logo.svg" },
  { name: "XRP", logo: "/logos/xrp-xrp-logo.svg" },
  { name: "PEPE", logo: "/logos/pepe-pepe-logo.svg" },
  { name: "BONK", logo: "/logos/bonk1-bonk-logo.svg" },
  { name: "SHIBA INU", logo: "/logos/shiba-inu-shib-logo.svg" },
  { name: "ETH", logo: "/logos/ethereum-eth-logo.svg" },
  { name: "SOL", logo: "/logos/solana-sol-logo.svg" },
  { name: "ADA", logo: "/logos/cardano-ada-logo.svg" },
  { name: "LINK", logo: "/logos/chainlink-link-logo.svg" },
  { name: "JASMY", logo: "/logos/jasmy-jasmy-logo.svg" },
  { name: "USDT", logo: "/logos/tether-usdt-logo.svg" },
  { name: "LUNA", logo: "/logos/terra-luna-icon.svg" },
  { name: "CAKE", logo: "/logos/pancakeswap-cake-logo.svg" },
  { name: "AVAX", logo: "/logos/avalanche-avax-logo.svg" },
];

const FAQ = () => {
  return (
    <section className="w-full py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center font-orbitron">
          Supported Tokens
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-20">
          {tokens.map((token, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-4 transition-all group hover:bg-[#111] rounded-xl"
            >
              <div className="w-16 h-16 mb-4 relative">
                <div className="absolute inset-0 bg-highlightGold/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={token.logo}
                  alt={token.name}
                  className="w-full h-full object-contain rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_#FFD700]"
                />
              </div>
              <h4 className="text-lg font-semibold text-highlightGold">{token.name}</h4>
            </div>
          ))}
        </div>

        {/* Abstract Section remains same */}
      </div>
    </section>
  );
};

export default FAQ;