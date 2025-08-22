import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom"; // Added missing import
import Navbar from "../components/Navbar";
import walletVideo from "../../../assets/videos/wallet.mp4";
import "./terms.css";

const Footer = lazy(() => import("../components/Footer"));

const ConnectWallet = () => {
  const supportedWallets = [
    {
      name: "MetaMask",
      desc: "Connect via browser extension or mobile app",
      icon: "/metamask-icon.svg",
      link: "https://metamask.io"
    },
    {
      name: "WalletConnect",
      desc: "Cross-platform mobile connection",
      icon: "/walleticon.svg",
      link: "https://walletconnect.com"
    },
    {
      name: "Trust Wallet",
      desc: "Mobile-first decentralized wallet",
      icon: "/newwalet.svg",
      link: "https://trustwallet.com"
    }
  ];

  return (
    <div className="bg-black text-white font-inter overflow-x-hidden min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute w-full h-full object-cover opacity-50"
        >
          <source src={walletVideo} type="video/mp4" />
        </video>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-8 bg-gradient-to-r from-highlightGold to-amber-200 bg-clip-text text-transparent">
            Connect Your Wallet
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Securely access your SRC dashboard and manage your crypto retirement portfolio
          </p>

          {/* Wallet Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportedWallets.map((wallet, index) => (
              <a
                key={index}
                href={wallet.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#111] border border-gray-800 rounded-2xl p-8 transition-all hover:border-highlightGold hover:transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center">
                  <img 
                    src={wallet.icon} 
                    alt={wallet.name}
                    className="w-20 h-20 mb-6 object-contain group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-2xl font-semibold mb-2">{wallet.name}</h3>
                  <p className="text-gray-400 text-center">{wallet.desc}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Buy Now Button */}
          <div className="mt-12">
            <Link 
              to="/how-to-buy" 
              className="inline-block bg-gradient-to-r from-highlightGold to-amber-500 text-black hover:text-black px-8 py-3 rounded-full font-bold hover:bg-gradient-to-l transition-all duration-300"
            >
              Buy SRT Now
              <svg 
                className="w-5 h-5 inline-block ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Compliance Note */}
          <p className="text-sm text-gray-500 mt-12 max-w-2xl mx-auto">
            SRC never accesses your private keys. All transactions require explicit approval.
            <br />
            <a href="/legal" className="text-highlightGold hover:text-amber-200">
              View Security Protocols
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <Suspense fallback={<div className="h-32 bg-black animate-pulse" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default ConnectWallet;