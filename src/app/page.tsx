'use client';

import AboutUs from "@/app/components/layout/Aboutus";
import HeroSection from "./components/layout/HeroSection";
import Navbar from "./components/layout/Navbar";
import Pricing from "./components/layout/Pricing";
import FAQ from "./components/layout/FAQ";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";

//import React from "react";

export default function Home() {
  return (
    <main>
       <Navbar />
       <HeroSection />
       <AboutUs />
       <Pricing />
       <FAQ />
       <Contact />
       <Footer />
    </main>

  );
}
