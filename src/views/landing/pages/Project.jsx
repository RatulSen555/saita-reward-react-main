import React, { Suspense, lazy } from "react";
import Navbar from "../components/Navbar";
import projectVideo from "../../../assets/videos/project.mp4";

// Lazy Footer
const Footer = lazy(() => import("../components/Footer"));

const ProjectPage = () => {
  const projects = [
    {
      title: "SRT Staking Platform",
      description: "High-yield staking with auto-compounding rewards",
      status: "Live",
      progress: 100,
      image: "/staking.jpg"
    },
    {
      title: "Cross-Chain Bridge",
      description: "BNB Chain ⇄ Ethereum ⇄ Polygon interoperability",
      status: "Testing",
      progress: 75,
      image: "/cryptobridge.jpg"
    },
    {
      title: "Mobile Wallet",
      description: "Non-custodial wallet with DApp browser",
      status: "Development",
      progress: 40,
      image: "/mobilewallet.jpg"
    },
    {
      title: "NFT Marketplace",
      description: "Digital collectibles & tokenized assets",
      status: "Planning",
      progress: 15,
      image: "/nft.jpg"
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
          <source src={projectVideo} type="video/mp4" />
        </video>
        <div className="absolute w-full h-full bg-black opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-orbitron text-highlightGold mb-6 animate-fade-in">
            Ecosystem Projects
          </h1>
          <p className="text-xl md:text-3xl max-w-2xl mx-auto text-gray-300 animate-slide-up">
            Building the future of decentralized finance
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-24">
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-2xl border border-gray-700 hover:border-highlightGold transition-all group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-gray-100">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${
                    project.status === 'Live' ? 'text-green-400' : 
                    project.status === 'Testing' ? 'text-yellow-400' : 
                    'text-gray-400'
                  }`}>
                    {project.status}
                  </span>
                  <div className="w-24 h-2 bg-gray-700 rounded-full">
                    <div 
                      className="h-full bg-highlightGold rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap Section */}
        <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 mb-24">
          <h2 className="text-3xl font-orbitron font-semibold text-highlightGold mb-8">
            Development Roadmap
          </h2>
          <div className="relative pl-8 border-l-2 border-highlightGold/50">
            {[
              {
                date: "Q3 2024",
                title: "Mobile App Launch",
                status: "In Progress"
              },
              {
                date: "Q4 2024",
                title: "Fiat Onramp Integration",
                status: "Planned"
              },
              {
                date: "Q1 2025",
                title: "DAO Governance Launch",
                status: "Research"
              }
            ].map((milestone, index) => (
              <div key={index} className="mb-8 relative">
                <div className="absolute w-4 h-4 bg-highlightGold rounded-full -left-[25px] top-2"></div>
                <div className="text-highlightGold text-lg">{milestone.date}</div>
                <h3 className="text-xl font-semibold text-gray-100 mt-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-400">{milestone.status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-orbitron font-semibold text-highlightGold mb-6">
            Want to Build With Us?
          </h2>
          <a
            href="mailto:partners@saitarewards.com"
            className="inline-block bg-highlightGold text-black px-8 py-3 rounded-xl font-semibold hover:bg-highlightGold/90 transition-all"
          >
            Partner Inquiry →
          </a>
        </div>
      </div>

      {/* Footer */}
      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default ProjectPage;