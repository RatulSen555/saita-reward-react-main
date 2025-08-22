import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const paragraphs = [
    "Saita Rewards Corporation (SRC) is a U.S.-based company registered in Miami, Florida. We are dedicated to bridging the gap between traditional finance and blockchain innovation by developing automated, sustainable, and forward-thinking financial solutions.",
    "Our core focus is to offer cryptocurrency-based retirement tools that reward long-term holders through automated, cross-chain smart contract systems. By eliminating the complexity of manual investing and the limitations of traditional retirement accounts, SRC empowers individuals to take financial control on their own terms.",
    "Our vision is to evolve into a fully licensed, 100% digital cryptocurrency retirement plan provider. We aim to deliver retirement rewards without the waiting period or gatekeeping of conventional systems - powered entirely by smart contracts and crypto infrastructure."
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative overflow-hidden bg-black py-32 px-6 md:px-20 border-t border-highlightGold/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        {/* Text Content */}
        <motion.div 
          className="md:w-1/2 space-y-10"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
        >
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-orbitron font-bold bg-gradient-to-r from-highlightGold to-amber-200 bg-clip-text text-transparent"
          >
            Who We Are
          </motion.h3>

          {paragraphs.map((text, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>

{/* Image Section */}
<motion.div 
  className="md:w-1/2 relative h-[600px] flex items-center justify-center" // Increased height
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeInOut" }}
>
  <div className="relative z-10 group w-full max-w-2xl"> {/* Increased max width */}
    {/* White glowing backdrop */}
    <div className="absolute inset-0 bg-white/10 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-xl" />

    {/* Main image with white border */}
      <motion.img
      src="/updated-saita-reward.png"
      alt="SRC Headquarters"
      className="max-w-full h-auto max-h-[900px] object-contain rounded-4xl"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5 }}
    />

    {/* White floating particles */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      {[...Array(12)].map((_, i) => ( // Increased particle count
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white/80 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.2}s`,
            filter: "blur(1px)"
          }}
        />
      ))}
    </div>
  </div>
</motion.div>
      </div>
    </div>
  );
};

export default About;