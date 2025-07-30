'use client';

import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 text-white">
      <div className="max-w6-xl mx-auto px-4">
        <div className=" flex-col md:flex-row items-center gap-10">
          <div className="text-center justify-between mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center justify-between text-lg md:text-4xl font-semibold drop-shadow-md md:leading-[4.5rem]"
            >
              How “TradeToday” AI Forecasts Financial <br /> Market Trends
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-[90%] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:pt-10 md:col-span-2"
            >
              <img
                src="/marketgraph.svg"
                alt="Team working with AI and crypto"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
           
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-4 2xl:space-y-8 md:mt-6 pt-8"
            >
               
              <div className="space-y-2 2xl:space-y-4">
                🔍 Data-Driven Precision Our AI processes massive datasets,
                including economic news, OHLC+Volume, 60+ indicators, and key
                support/resistance levels, to deliver highly accurate forecasts
                beyond human intuition.
              </div>

              <div className="">
                📊 Real-Time Market Sentiment When you add work to your Slate
                calendar we automatically calculate useful insights.
              </div>

              <div className="">
                🤖 Advanced AI Predictions Our cutting-edge ensemble model
                blends machine learning and deep learning for unparalleled
                accuracy, helping you make smarter and more informed trading
                decisions.
              </div>
              
            </motion.div>
            
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mb-8 w-[90%] md:w-[70%] mx-auto"
          >
                <h2 className="text-lg md:text-5xl font-semibold drop-shadow-lg md:leading-[4.5rem]">Why Choose Us?</h2>
                <p className="text-xs sm:text-base md:text-lg mt-2">
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="p-4 w-[95%] md:w-[80%] mx-auto"
              >
  <div className="overflow-x-auto">
    <table className="w-full border-separate border-spacing-0 text-white text-center text-xs sm:text-sm md:text-base border border-white">
      <thead className="bg-white text-black">
        <tr>
          <th className="py-4 px-2 md:py-8 md:px-6 border border-white">Features</th>
          <th className="py-4 px-2 md:py-8 md:px-6 border border-white">Trade Today</th>
          <th className="py-4 px-2 md:py-8 md:px-6 border border-white">Competitors</th>
        </tr>
      </thead>
      <tbody className="bg-[#011229]">
        <tr>
          <td className="py-4 px-2 md:py-8 md:px-6 border border-white">AI & Deep Learning</td>
          <td className="py-4 px-2 md:py-8 md:px-6 border border-white text-green-500 text-xl md:text-2xl">✔</td>
          <td className="py-4 px-2 md:py-8 md:px-6 border border-white text-red-500 text-xl md:text-2xl">✘</td>
        </tr>
        <tr>
          <td className="py-4 px-2 md:py-8 md:px-6 border border-white">Real-Time Sentiment Analysis</td>
          <td className="py-4 px-2 md:py-8 md:px-6 border border-white text-green-500 text-xl md:text-2xl">✔</td>
          <td className="py-4 px-2 md:py-8 md:px-6 border border-white text-red-500 text-xl md:text-2xl">✘</td>
        </tr>
        <tr>
          <td className="py-4 px-2 md:py-8 md:px-6 border border-white">60+ Technical Indicators</td>
          <td className="py-4 px-2 md:py-8 md:px-6 border border-white text-green-500 text-xl md:text-2xl">✔</td>
          <td className="py-4 px-2 md:py-8 md:px-6 border border-white text-red-500 text-xl md:text-2xl">✘</td>
        </tr>
        <tr>
          <td className="py-4 px-2 md:py-8 md:px-6 border border-white">Support/Resistance Predictions</td>
          <td className="py-4 px-2 md:py-8 md:px-6 border border-white text-green-500 text-xl md:text-2xl">✔</td>
          <td className="py-4 px-2 md:py-8 md:px-6 border border-white text-red-500 text-xl md:text-2xl">✘</td>
        </tr>
        <tr>
          <td className="py-4 px-2 md:py-8 md:px-6 border border-white">Market Trend Detection</td>
          <td className="py-4 px-2 md:py-8 md:px-6 border border-white text-green-500 text-xl md:text-2xl">✔</td>
          <td className="py-4 px-2 md:py-8 md:px-6 border border-white text-red-500 text-xl md:text-2xl">✘</td>
        </tr>
      </tbody>
    </table>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
