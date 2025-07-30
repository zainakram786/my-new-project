"use client";

import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "Can I request an addition of a new token?",
      answer: "Yes, you can request the addition of new tokens. Please contact our support team with your request.",
    },
    {
      question: "What is blockchain technology?",
      answer: "Blockchain is a decentralized, distributed ledger technology that records transactions across many computers. It's the underlying technology for cryptocurrencies like Bitcoin.",
    },
    {
      question: "What is Bitcoin?",
      answer: "Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
    },
    {
      question: "Who created Bitcoin?",
      answer: "Bitcoin was invented by an unknown person or group of people using the name Satoshi Nakamoto and released as open-source software in 2009.",
    },
    {
      question: "What is cryptocurrency?",
      answer: "A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on blockchain technology.",
    },
    {
      question: "How to Order cryptocurrency wallet?",
      answer: "To order a cryptocurrency wallet, you typically download a software wallet application, purchase a hardware wallet, or use an exchange's built-in wallet. The process varies depending on the type of wallet you choose.",
    },
    {
      question: "How does cryptocurrency wallet work?",
      answer: "A cryptocurrency wallet stores the public and private keys that are used to send and receive cryptocurrencies. It doesn't actually hold the cryptocurrency itself, but rather provides access to your holdings on the blockchain.",
    },
    {
      question: "How many devices can I login my Crypto account to?",
      answer: "The number of devices you can log in to your Crypto account typically depends on the platform or service you are using. Please refer to the specific platform's terms of service or support documentation for details.",
    },
  ];

  return (
    <section id="faq" className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold mb-12"
        >
          FAQ's
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.4 }}
              className="bg-[#021633] p-6 rounded-lg shadow-lg text-left"
            >
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
