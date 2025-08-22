// src/views/landing/pages/Content.jsx
import React, { lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import digitalVideo from "../../../assets/videos/digital.mp4";

const Footer = lazy(() => import("../components/Footer"));

const Content = () => {
  const courses = [
    {
      title: "Blockchain Fundamentals",
      desc: "Master core concepts of blockchain technology and cryptocurrency ecosystems",
      duration: "6 Hours"
    },
    {
      title: "Smart Contract Development",
      desc: "Hands-on training in writing and deploying secure smart contracts",
      duration: "15 Hours"
    },
    {
      title: "Crypto Retirement Strategies",
      desc: "Learn to build and manage crypto-based retirement portfolios",
      duration: "8 Hours"
    }
  ];

  return (
    <div className="bg-black text-white font-inter overflow-x-hidden min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={digitalVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-6 text-highlightGold">
            Digital Academy
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Empowering your crypto journey through premium education and exclusive digital resources
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-6 md:px-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-orbitron font-bold text-highlightGold mb-12 text-center">
            Featured Courses
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-[#111] rounded-xl p-8 border border-gray-800 hover:border-highlightGold/50 transition-all">
                <h3 className="text-2xl font-semibold mb-4 text-highlightGold">{course.title}</h3>
                <p className="text-gray-300 mb-4">{course.desc}</p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>{course.duration}</span>
                  <button className="bg-highlightGold/10 text-highlightGold px-4 py-2 rounded-lg hover:bg-highlightGold/20 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-orbitron font-bold text-highlightGold mb-8">
                Premium Resources
              </h2>
              <ul className="space-y-6 text-gray-300">
                <li className="flex items-start gap-4">
                  <div className="text-highlightGold">▸</div>
                  <div>
                    <h4 className="text-xl font-semibold">Exclusive Webinars</h4>
                    <p className="mt-2">Live sessions with industry experts</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-highlightGold">▸</div>
                  <div>
                    <h4 className="text-xl font-semibold">SRC Toolkits</h4>
                    <p className="mt-2">Custom dashboards and analytics tools</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-highlightGold">▸</div>
                  <div>
                    <h4 className="text-xl font-semibold">Certification Programs</h4>
                    <p className="mt-2">Blockchain developer certifications</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-center"> 
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-orbitron font-bold text-highlightGold mb-8">
            Start Learning Today
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Access our full library of courses, tools, and exclusive community features
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-highlightGold text-black px-8 py-4 rounded-xl font-semibold hover:bg-highlightGold/90 transition-all">
              Explore All Courses
            </button>
            <button className="border border-highlightGold text-highlightGold px-8 py-4 rounded-xl hover:bg-highlightGold/10 transition-all">
              Join Premium
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Suspense fallback={<div className="h-20 bg-gray-800 animate-pulse" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Content;