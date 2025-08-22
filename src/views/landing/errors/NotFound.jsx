import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../landing/components/Navbar";
import errorVideo from "../../../assets/videos/error.mp4";

const NotFound = () => {
  return (
    <div className="bg-black text-white font-inter overflow-x-hidden min-h-screen">
      <Navbar />
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src={errorVideo} type="video/mp4" />
        </video>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-8xl md:text-9xl font-bold font-orbitron text-highlightGold mb-6">
            404
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-300 mb-8">
            Lost in the blockchain? Let's get you back on track
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-highlightGold text-black px-8 py-4 rounded-xl font-semibold hover:bg-highlightGold/90 transition-all transform hover:scale-105"
            >
              Return Home →
            </Link>
            
            <a
              href="mailto:support@saitarewards.com"
              className="border border-highlightGold text-highlightGold px-8 py-4 rounded-xl hover:bg-highlightGold/10 transition-all"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;