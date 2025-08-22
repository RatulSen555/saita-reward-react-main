// src/views/landing/pages/Newsletter.jsx
import React, { Suspense, lazy, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import newsletterVideo from "../../../assets/videos/newsletter.mp4";

// Lazy Footer
const Footer = lazy(() => import("../components/Footer"));

const NewsletterPage = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
    }
  };

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
          <source src={newsletterVideo} type="video/mp4" />
        </video>
        <div className="absolute w-full h-full bg-black opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <div className="flex flex-col items-center gap-4 mb-6">
            
            <h1 className="text-5xl md:text-7xl font-bold font-orbitron text-highlightGold">
              Stay Informed
            </h1>
          </div>
          <p className="text-xl md:text-3xl max-w-2xl mx-auto text-gray-300">
            Get exclusive updates on product launches and ecosystem growth
          </p>
        </div>
      </section>

           {/* Updated Main Content Based on Official Document */}
      <div className="max-w-3xl mx-auto px-6 md:px-0 py-24">
        <div className="bg-gray-800 p-10 md:p-14 rounded-2xl border border-gray-700 space-y-8">
          <h2 className="text-4xl font-bold font-orbitron text-highlightGold text-center">
            News & Updates
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed text-center">
            Subscribe to receive the latest announcements from Saita Rewards Corporation. 
            Stay informed on token milestones, retirement automation features, new Urban Halo launches, 
            educational content, and special project updates.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-100 mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-4 focus:border-highlightGold focus:ring-2 focus:ring-highlightGold/50 transition-all"
                placeholder="your@email.com"
                disabled={status === "loading"}
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-highlightGold text-black px-8 py-4 rounded-lg font-semibold hover:bg-highlightGold/90 transition-all disabled:opacity-75 flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <span className="animate-spin">🌀</span>
                  Submitting...
                </>
              ) : (
                "Join Newsletter"
              )}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-center">
                Subscription failed. Please try again.
              </p>
            )}

            {status === "success" && (
              <p className="text-green-400 text-center">
                ✅ You're now subscribed! Stay tuned.
              </p>
            )}

            <p className="text-gray-400 text-sm text-center">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>


      {/* Footer */}
      <Suspense fallback={<div className="h-20 bg-gray-800 animate-pulse" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default NewsletterPage;