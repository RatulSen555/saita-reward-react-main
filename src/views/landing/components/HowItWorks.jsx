import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const steps = [
  {
    title: "Buy and Hold",
    desc: "Purchase SRC-related tokens on PancakeSwap or FOF Chain Swap and hold them in your wallet"
  },
  {
    title: "Earn Rewards Automatically",
    desc: "Our smart contracts distribute rewards in other cryptocurrencies automatically - no staking required"
  },
  {
    title: "Access Benefits",
    desc: "As rewards accumulate, retain full control with no lock-ups or third-party restrictions"
  },
  {
    title: "Reinvest or Use",
    desc: "Use rewards to reinvest, shop on Urban Halo, or convert into other assets"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-highlightGold text-center mb-12">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-xl bg-[#111] border border-gray-700"
            >
              <div className="text-highlightGold text-2xl mb-4">0{index + 1}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-gray-300 text-sm md:text-base">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <Link
            to="/how-to-buy"
            className="inline-block bg-highlightGold text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition"
          >
            Start Earning Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;