"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="text-white py-20 relative overflow-hidden">

      <div className="absolute  right-[-8%]   top-0 z-10 opacity-80 w-full h-auto max-w-[200px] md:max-w-[500px] 2xl:min-w-[600px]"> <img src="/ball.svg" alt="Hero" /> </div>
      <div className="absolute left-1 top-0 z-10 w-full h-auto max-w-[200px] md:max-w-[400px] 2xl:min-w-[700px]"> <img src="/tri.svg" alt="Hero"  /> </div>
      <div className="absolute top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full"> <img src="/back.svg" alt="Hero" className="w-full h-auto mx-auto" /> </div>
      
      

      <div className="relative z-10 max-w-7xl mx-auto px-2 text-center space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm uppercase tracking-widest text-gray-400 font-mono"
        >
          #1 Most Trusted AI Platform
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          AI-Powered Crypto <br className="hidden md:block" />
          <span className="">Trading Insights</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-2xl mx-auto text-gray-300 text-lg"
        >
          Unlock the power of AI-driven market predictions for Binance. Make smarter trading decisions,
          execute faster trades, and invest with confidence like never before.
        </motion.p>

        {/* Trustpilot stars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center items-center gap-2 text-sm text-gray-300"
        >
          <span className="text-white font-semibold">Trustpilot</span>
          <span className="text-yellow-400 text-lg">★★★★★</span>
          <span>4.8/5 based on 1343 reviews</span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="flex justify-center gap-4 mt-6"
        >
          <button className="flex items-center justify-center cursor-pointer gap-2 font-semibold font-mono py-2.5 px-7 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#070F2B] hover:border hover:border-[#2D336B] bg-[#070F2B] text-white border border-[#2D336B] shadow shadow-white">
            Get 3 Days Free Trial
          </button>
          <button className="flex items-center justify-center cursor-pointer gap-2 font-semibold font-mono py-2.5 px-7 rounded-lg transition-all duration-300 hover:bg-[#070F2B] hover:text-white shadow shadow-white bg-white text-[#070F2B] border">
            Learn More
          </button>
          <br />
        
        </motion.div>
          <div className="mt-12 md:mt-24 relative z-10 w-[90%] md:w-[100%] mx-auto ">
        <img src="/heroGraph.svg" alt="Trading analytics graph" className=" " />
        
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
