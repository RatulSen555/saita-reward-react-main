import React, { Suspense, lazy, useState } from "react";
import Navbar from "../components/Navbar";
import tokenVideo from "../../../assets/videos/token.mp4";

const Footer = lazy(() => import("../components/Footer"));

const tokenLogos = [
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

const diamondTokens = [
  { name: "ECOS Token", image: "/ecos.png" },
  { name: "CHICA Token", image: "/chica.png" },
  { name: "CRYPTO CRACKER", image: "/cryptocrackers.png" },
  { name: "BANANA BUCK", image: "/banana.png" },
  { name: "CALIFAS", image: "/califa.png" },
];

const Token = () => {
  const [, setCopied] = useState(false);
  const CONTRACT_ADDRESS = "0x1234...abcd";

  const copyAddress = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-black text-white font-inter overflow-x-hidden">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
          <source src={tokenVideo} type="video/mp4" />
        </video>
        <div className="absolute w-full h-full bg-gradient-to-t from-black/90 to-black/50" />
        <div className="relative z-10 text-center px-4 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold font-orbitron text-highlightGold mb-4 animate-pulse">
            SRT Token
          </h1>
          <p className="text-xl md:text-3xl max-w-2xl mx-auto text-gray-300 bg-black/30">
            The Utility Token Powering the SRT Ecosystem
          </p>
        </div>
      </section>

      {/* Polished Ecosystem Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-black to-[#0a0a0a] border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-8">
            <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-highlightGold bg-clip-text">
              SRT Ecosystem Tokens
            </h3>
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Rewarding Participation through:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Reflections', 'QRP Rewards', 'Market Cap Milestones', 'Staking/Farming'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 p-4 bg-[#111] rounded-xl border border-highlightGold/10 hover:border-highlightGold/30 transition-all">
                    <span className="text-highlightGold">✦</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative group flex justify-center">
            <img 
              src="/new srt coin logo.png" 
              alt="SRT Coin Logo" 
              className="w-100 h-100 transition-transform duration-500 coin-glow hover" 
            />
            <div className="absolute inset-0 bg-highlightGold/5 blur-3xl opacity-30 -z-10" />
          </div>
        </div>
      </section>

      {/* Enhanced Diamond Hand Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-[#0a0a0a] to-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold font-orbitron text-highlightGold">
              Diamond Hand Rewards Program
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Quarterly distributed token airdrops to our most loyal holders
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {diamondTokens.map((token, idx) => (
              <div key={idx} className="group relative p-6 rounded-2xl bg-[#111] border border-highlightGold/10 hover:border-highlightGold/30 transition-all">
                <div className="absolute inset-0 bg-highlightGold/5 blur-xl opacity-0" />
                <div className="flex flex-col items-center gap-6">
                  <img 
                    src={token.image} 
                    alt={token.name} 
                    className="w-32 h-32 object-contain" 
                  />
                  <span className="text-highlightGold font-semibold text-lg">{token.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Polished Supported Tokens Section */}
       <section className="py-20 px-6 md:px-20 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-orbitron text-highlightGold mb-12">
            Supported Tokens
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {tokenLogos.map((token, idx) => (
              <div key={idx} className="flex flex-col items-center p-4 transition-all group hover:bg-[#111] rounded-xl">
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

export default Token;