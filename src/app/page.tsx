'use client';

import AboutUs from "@/app/components/layout/Aboutus";
import HeroSection from "./components/layout/HeroSection";
import Navbar from "./components/layout/Navbar";
import Pricing from "./components/layout/Pricing";
import FAQ from "./components/layout/FAQ";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";
import { motion } from "framer-motion";
import MouseAnimation from "./components/layout/MouseAnimation";

//import React from "react";

export default function Home() {
  return (
    <motion.main
    initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <MouseAnimation />
       <Navbar />
       <HeroSection />
       <AboutUs />
       <Pricing />
       <FAQ />
       <Contact />
       <Footer />
    </motion.main>

  );
}
