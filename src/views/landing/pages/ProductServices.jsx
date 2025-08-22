import React, { Suspense, lazy } from "react";
import Navbar from "../components/Navbar";
import productsVideo from "../../../assets/videos/product.mp4";

// Lazy Footer
const Footer = lazy(() => import("../components/Footer"));

const ContactUs = () => {
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
          <source src={productsVideo} type="video/mp4" />
        </video>
        <div className="absolute w-full h-full bg-black opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-orbitron text-highlightGold mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl md:text-3xl max-w-2xl mx-auto text-gray-300 animate-slide-up">
            Reach out for partnerships, support, or collaboration
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-0 py-24">
        <div className="bg-gray-800 p-10 md:p-14 rounded-2xl border border-gray-700 space-y-10">
          <h2 className="text-4xl font-bold font-orbitron text-highlightGold text-center">
            Let’s Get in Touch
          </h2>

          <p className="text-gray-300 text-lg md:text-xl text-center leading-relaxed">
            Whether you're curious about crypto retirement, the Urban Halo Marketplace,
            or how our DeFi rewards work — our team is happy to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-highlightGold mb-2">📍 Office Location</h3>
                <p className="text-gray-400">Miami, Florida, United States</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-highlightGold mb-2">📧 General Support</h3>
                <p className="text-gray-400">techsupport@saitarewardscorporation.com</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-highlightGold mb-2">🤝 Business Inquiries</h3>
                <p className="text-gray-400">contactus@saitarewardscorporation.com</p>
              </div>

        
            </div>

            {/* Contact Form (non-functional placeholder) */}
            <form className="space-y-6">
              <div>
                <label className="block text-gray-200 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-4 text-white focus:border-highlightGold focus:ring-2 focus:ring-highlightGold/50"
                  placeholder="Your Full Name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-200 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-4 text-white focus:border-highlightGold focus:ring-2 focus:ring-highlightGold/50"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-200 mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-4 text-white focus:border-highlightGold focus:ring-2 focus:ring-highlightGold/50"
                  placeholder="Tell us how we can help..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-highlightGold text-black px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Send Message
              </button>
            </form>
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

export default ContactUs;
