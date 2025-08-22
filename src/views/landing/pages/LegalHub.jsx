import React, { Suspense, lazy } from "react";
import Navbar from "../components/Navbar";
import legalVideo from "../../../assets/videos/legal.mp4";

// Lazy Footer
const Footer = lazy(() => import("../components/Footer"));

const LegalHub = () => {
  const legalDocuments = [
    {
      title: "Terms of Service",
      description: "Legal agreement governing use of our platform and services",
      link: "/terms",
      icon: "📜"
    },
    {
      title: "Privacy Policy",
      description: "How we collect, use, and protect your personal information",
      link: "/privacy",
      icon: "🔏"
    },
    {
      title: "Risk Disclosure",
      description: "Understanding risks in cryptocurrency investments",
      link: "/risk-disclosure",
      icon: "⚠️"
    },
    {
      title: "AML Policy",
      description: "Anti-Money Laundering compliance procedures",
      link: "/aml-policy",
      icon: "🕵️"
    }
  ];

  return (
    <div className="bg-black text-white font-inter overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={legalVideo} type="video/mp4" />
        </video>
        <div className="absolute w-full h-full bg-black opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-orbitron text-highlightGold mb-6 animate-fade-in">
            Legal Hub
          </h1>
          <p className="text-xl md:text-3xl max-w-2xl mx-auto text-gray-300 animate-slide-up">
            Transparency and Compliance at the Core
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-24">
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {/* Legal Documents */}
          <div className="space-y-8">
            <h2 className="text-3xl font-orbitron font-semibold text-highlightGold mb-8">
              Legal Documentation
            </h2>
            <div className="grid gap-6">
              {legalDocuments.map((doc, index) => (
                <a
                  key={index}
                  href={doc.link}
                  className="group bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-highlightGold transition-all flex items-center gap-6"
                >
                  <div className="text-4xl w-20 h-20 flex items-center justify-center bg-gray-900 rounded-xl group-hover:bg-highlightGold/20 transition-all">
                    {doc.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100 group-hover:text-highlightGold transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-gray-400 mt-2">{doc.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Compliance Section */}
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <h2 className="text-3xl font-orbitron font-semibold text-highlightGold mb-6">
              Compliance Center
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-gray-900 rounded-xl">
                <h3 className="text-xl font-semibold text-highlightGold mb-3">
                  Regulatory Status
                </h3>
                <p className="text-gray-300">
                  SRC is registered in Florida, USA (Document #L23000123456)
                </p>
              </div>

              <div className="p-6 bg-gray-900 rounded-xl">
                <h3 className="text-xl font-semibold text-highlightGold mb-3">
                  Disclosures
                </h3>
                <ul className="list-disc pl-6 space-y-3 text-gray-300">
                  <li>Tokens are utility assets, not securities</li>
                  <li>No guaranteed returns</li>
                  <li>Volatility risks apply</li>
                  <li>US citizens restricted from certain services</li>
                </ul>
              </div>

              <div className="p-6 bg-gray-900 rounded-xl">
                <h3 className="text-xl font-semibold text-highlightGold mb-3">
                  Audits & Verification
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-transperent rounded-lg p-2">
                    <img 
                      src="/smart-contract.png" 
                      alt="CertiK Audit" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-gray-300">Smart Contract Audited</span>
                </div>
              </div>
            </div>
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

export default LegalHub;