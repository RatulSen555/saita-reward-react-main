import React from "react";
import { Link } from "react-router-dom";
import blockchainVideo from "../../../assets/videos/BLOCKCHAIN 3.mp4";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src={blockchainVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute w-full h-full bg-black opacity-50"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold font-orbitron leading-tight text-white drop-shadow-lg">
          Pioneering a New Era of Retirement Planning with Cryptocurrency
        </h1>
        <p className="mt-6 text-lg md:text-2xl max-w-xl mx-auto text-gray-300">
          Fully digital, automated, and flexible - our vision is to evolve into a licensed crypto retirement plan.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <Link
            to="/services"
            className="bg-highlightGold/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-highlightGold/40 transition border border-highlightGold"
          >
            Explore Our Vision
          </Link>
          <Link
            to="/srt"
            className="bg-highlightGold text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition"
          >
            Learn How It Works
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;