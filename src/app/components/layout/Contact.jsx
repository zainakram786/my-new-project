"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold mb-6"
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-400 mb-12"
        >
          Have questions or need support? Reach out to us!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-[#070F2B] p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-2">Email: support@tradetoday.io</p>
            <p className="mb-2">Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Crypto Lane, Blockchain City, BC 12345</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-[#070F2B] p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full p-2 rounded-md bg-[#021633] border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full p-2 rounded-md bg-[#021633] border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea id="message" name="message" rows="4" className="mt-1 block w-full p-2 rounded-md bg-[#021633] border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"></textarea>
              </div>
              <button type="submit" className="flex items-center justify-center cursor-pointer gap-2 font-semibold font-mono py-2.5 px-7 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#070F2B] hover:border hover:border-[#2D336B] bg-[#070F2B] text-white border border-[#2D336B] shadow shadow-white">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
