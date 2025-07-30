import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "PKR 0",
    description: "Start trading with basic AI signals and insights.",
    features: [
      "Limited daily predictions",
      "Basic support",
      "Access to public signals",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "PKR 2,999/mo",
    description: "For serious traders who want real-time AI forecasts.",
    features: [
      "Unlimited predictions",
      "Priority support",
      "Advanced charts & alerts",
      "Private Telegram group",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "PKR 5,999/mo",
    description: "Full access to our private bot and investor tools.",
    features: [
      "Everything in Pro",
      "1-on-1 account manager",
      "Early access to features",
      "Exclusive predictions",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section className="text-white py-20" id="pricing">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold mb-6"
        >
          Choose Your Plan
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-400 mb-12"
        >
          Start free or upgrade anytime — no hidden charges, no surprises.
        </motion.p>

        

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-6 shadow-lg flex flex-col justify-between ${
                plan.highlighted
                  ? "border-blue-500 bg-[#1e293b] scale-105"
                  : "border-gray-700 bg-[#1a1f2e]"
              } transition`}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <ul className="space-y-3 text-left text-sm">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-blue-400">✔️</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="flex items-center justify-center cursor-pointer gap-2 font-semibold font-mono py-2.5 px-7 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#070F2B] hover:border hover:border-[#2D336B] bg-[#070F2B] text-white border border-[#2D336B] shadow shadow-white">
                {plan.name === "Free" ? "Get Started" : "Choose Plan"}
              </button>
            </div>
          ))}
          <br />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col md:flex-row w-[100%] mx-auto items-center" style={{ backgroundImage: "url('/bgCrypto.svg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}
        >
          <div className="flex flex-col md:flex-row w-[100%] mx-auto items-center">
            <div className="text-white p-6 md:p-10 rounded-lg w-full md:w-[100%] space-y-4 flex-1 md:mr-28">
              <p className="text-xl font-semibold tracking-wide">Crypto Prediction</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">Low fees and deep liquidity</h2>
              <p className="text-xl leading-relaxed pb-7 text-gray-200">
              At Today Trads, we ensure that you maximize your profits by offering low trading fees and deep market liquidity. Our platform is designed to provide traders with the best possible trading conditions, ensuring seamless transactions with minimal costs.
            </p>
            <button className="flex items-center justify-center cursor-pointer gap-2 font-semibold font-mono py-2.5 px-7 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#070F2B] hover:border hover:border-[#2D336B] bg-[#070F2B] text-white border border-[#2D336B] shadow shadow-white">
              Learn More
            </button>
          </div>
          <div className="p-4">
            <img src="/dollarcoin.png" alt="Low Fees" className=" mx-auto md:mx-0 mb-2" />
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
