"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { FaRocket } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavbarBg("bg-white/10 backdrop-blur-md");
      } else {
        setNavbarBg("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50  flex justify-between items-center transition-all duration-300 ${navbarBg} border-b border-white/30 shadow-lg px-4 md:px-8`}
      >
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            loading="lazy"
            className="w-40  ml-25 mt-2 py-0 px-4  mr-[10%]  md:w-52 2xl:w-72 h-full  "
            width={-200}
            height={-50}
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex mr-25 py-7 items-center gap-1 md:gap-2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="#home"
              className="cursor-pointer text-lg 2xl:text-2xl font-medium p-4 rounded hover:text-primary"
              style={{ fontFamily: 'monospace' }}
            >
              Home
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="#about"
              className="cursor-pointer text-lg 2xl:text-2xl font-medium p-4 rounded hover:text-primary"
              style={{ fontFamily: 'monospace' }}
            >
              About
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="#pricing"
              className="cursor-pointer text-lg 2xl:text-2xl font-medium p-4 rounded hover:text-primary"
              style={{ fontFamily: 'monospace' }}
            >
              Pricing
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="#faq"
              className="cursor-pointer text-lg 2xl:text-2xl font-medium p-4 rounded hover:text-primary"
              style={{ fontFamily: 'monospace' }}
            >
              FAQ's
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href="#contact"
              className="cursor-pointer text-lg 2xl:text-2xl font-medium p-4 rounded hover:text-primary"
              style={{ fontFamily: 'monospace' }}
            >
              Contact
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-4 ml-4"
          >
            <Link
              href="#"
              className="flex items-center justify-center cursor-pointer gap-2 font-semibold font-mono py-2.5 px-7 rounded-lg transition-all duration-300 hover:bg-[#070F2B] hover:text-white shadow shadow-white bg-white text-[#070F2B] border" style={{ fontFamily: 'monospace' }}
            >
              Join Now
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center cursor-pointer gap-2 font-semibold font-mono py-2.5 px-7 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#070F2B] hover:border hover:border-[#2D336B] bg-[#070F2B] text-white border border-[#2D336B] shadow shadow-white"
              style={{ fontFamily: 'monospace' }}
            >
              Free 3 days trial <FaRocket />
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-white"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white/10 backdrop-blur-md flex flex-col items-center justify-center text-white">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-8 right-8"
          >
            <X size={24} />
          </button>
          <Link
            href="#home"
            className="cursor-pointer text-2xl font-medium p-4 rounded hover:text-primary"
            style={{ fontFamily: 'monospace' }}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="cursor-pointer text-2xl font-medium p-4 rounded hover:text-primary"
            style={{ fontFamily: 'monospace' }}
          >
            About
          </Link>
          <Link
            href="#pricing"
            className="cursor-pointer text-2xl font-medium p-4 rounded hover:text-primary"
            style={{ fontFamily: 'monospace' }}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="cursor-pointer text-2xl font-medium p-4 rounded hover:text-primary"
            style={{ fontFamily: 'monospace' }}
          >
            FAQ's
          </Link>
          <Link
            href="#"
            className="cursor-pointer text-2xl font-medium p-4 rounded hover:text-primary"
            style={{ fontFamily: 'monospace' }}
          >
            Contact
          </Link>
          <div className="flex flex-col items-center gap-4 mt-8">
            <Link
              href="#"
              className="flex items-center justify-center cursor-pointer gap-2 font-semibold font-mono py-2.5 px-7 rounded-lg transition-all duration-300 hover:bg-[#070F2B] hover:text-white shadow shadow-white bg-white text-[#070F2B] border w-full"
            >
              Login
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center cursor-pointer gap-2 font-semibold font-mono py-2.5 px-7 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#070F2B] hover:border hover:border-[#2D336B] bg-[#070F2B] text-white border border-[#2D336B] shadow shadow-white w-full"
            >
              Free 3 days trial
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;


