"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#070F2B] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            loading="lazy"
            className="w-40 md:w-52 2xl:w-72 h-full mx-auto mb-4"
            width={150}
            height={150}
          />
          <p className="text-gray-400">
            AI-Powered Crypto Trading Insights
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-6 mb-8"
        >
          <Link href="#home" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link href="#about" className="hover:text-blue-400 transition-colors">About</Link>
          <Link href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</Link>
          <Link href="#faq" className="hover:text-blue-400 transition-colors">FAQ's</Link>
          <Link href="#contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-500 text-sm"
        >
          &copy; {new Date().getFullYear()} TradeToday. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
