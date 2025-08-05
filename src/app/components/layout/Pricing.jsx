import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "$0/3 days",
    description: "Capture ideas and find them quickly.",
    features: [
      "Limited AI trading signals per day",
      "Basic market trend analysis",
      "Delayed data updates",
      "Community support",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$10.00/month",
    description: "Capture ideas and find them quickly.",
    features: [
      "Unlimited AI-generated buy/sell signals",
      "Real-time market analysis & trend detection",
      "Stop-loss & take-profit recommendations",
      "Instant alerts & notifications",
      "AI-powered risk management tools",
      "Email & chat support",
    ],
    highlighted: true,
  },
];

const Pricing = () => {
  return (
    <>
      <section className="text-white py-20 " id="pricing">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-gray-400 mb-16">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg p-8 flex flex-col ${plan.highlighted ? "border-1 border-white-600" : "border-1"}`}>
                <h3 className="text-2xl font-bold text-left mb-4">{plan.name}</h3>
                <p className="text-3xl text-left font-extrabold mb-6">{plan.price}</p>
                <p className="text-gray-300 mb-8 text-left">{plan.description}</p>
                <ul className="space-y-3 text-left mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-9">
                    
                      <span className="text-white">&#10003;</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-auto font-bold py-3 px-6 rounded-lg ${plan.highlighted ? "bg-white text-blue-600" : "bg-blue-500 text-white"}`}>
                  {plan.name === "Free" ? "Get Started" : "Choose Plan"}
                </button>
              </div>
            ))}
          </div>
        </div>
       
      </section>

      <div className="relative text-white rounded-2xl py-10  w-full max-w-6xl mx-auto m-1 px-4 display-flex" style={{backgroundImage: "url('/bgCrypto.svg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>

          <div className="flex flex-col md:flex-row w-full items-center py-1 md:py-10 px-4 gap-5">
            
              <div className="text-white p-2 md:p-10 rounded-lg w-full md:w-1/3 space-y-8 flex-1">
                <p className="text-xl font-semibold tracking-wide">Crypto Prediction</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">Low fees and deep liquidity</h2>
                <p className="text-xl leading-relaxed pb-7 text-gray-200">
                  At Today Trads, we ensure that you maximize your profits by offering low trading fees and deep market liquidity. Our platform is designed to provide traders with the best possible trading conditions, ensuring seamless transactions with minimal costs.
                </p>
                <button className="flex items-center justify-center cursor-pointer gap-2 font-semibold font-mono py-2.5 px-7 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#070F2B] hover:border hover:border-[#2D336B] bg-[#070F2B] text-white border border-[#2D336B] shadow shadow-white">
                  Learn More
                </button>
              </div>
              <div className=" ">
                <img src="/dollarcoin.png" alt="Low Fees" className=" mx-auto md:mx-0 mb-2" />
              </div>
              
          </div>
      </div>
    </>
  );
};

export default Pricing;
