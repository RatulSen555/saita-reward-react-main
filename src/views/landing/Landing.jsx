import React, { Suspense, lazy } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";

// Lazy-loaded Components
const FAQ = lazy(() => import("./components/FAQ"));
const Footer = lazy(() => import("./components/Footer"));

const Landing = () => {
  return (
    <div className="bg-primary text-white font-inter overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative flex items-center justify-center">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-20 bg-secondary border-t border-dark">
        <About />
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 md:px-20 bg-primary border-t border-dark">
        <HowItWorks />
      </section>

      {/* Lazy Load Remaining Sections */}
      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
       

     

        {/* Footer */}
        <footer className="border-t border-dark">
          <Footer />
        </footer>
      </Suspense>
    </div>
  );
};

export default Landing;