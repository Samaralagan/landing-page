import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Import images for icons and plan images
import iconCore from "../assets/price1.png";
import iconOverdrive from "../assets/price2.png";
import iconTeam from "../assets/price3.png";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = {
    monthly: [
      {
        name: "Core",
        price: 19,
        description: "Best for solo creators",
        features: [
          "100MB Cloud storage",
          "100+ prompt templates",
          "5 projects",
          "24/7 support",
        ],
        iconColor: "cyan",
        icon: iconCore,
        iconBg: "bg-[#001E33]",
        textColor: "text-[#00A2FF]",
        bgColor: "bg-[#0E1629]",
      },
      {
        name: "Overdrive",
        price: 79,
        description: "Most popular plan",
        features: [
          "All Starter features",
          "1TB additional storage",
          "Unlimited projects",
          "Analytics",
        ],
        iconColor: "blue",
        icon: iconOverdrive,
        iconBg: "bg-[#001A3E]",
        textColor: "text-[#4D9AFF]",
        bgColor: "bg-[#0A1E3A]",
        featured: true,
      },
      {
        name: "Team",
        price: 39,
        description: "Exclusively for teams",
        features: [
          "All Overdrive features",
          "10TB additional storage",
          "50% off per member",
          "Real-time collaboration",
        ],
        iconColor: "blue",
        icon: iconTeam,
        iconBg: "bg-[#001E3D]",
        textColor: "text-[#3E7BFF]",
        bgColor: "bg-[#0E1629]",
      },
    ],
    annual: [
      {
        name: "Core",
        price: 190,
        description: "Best for solo creators",
        features: [
          "100MB Cloud storage",
          "100+ prompt templates",
          "5 projects",
          "24/7 support",
        ],
        iconColor: "cyan",
        icon: iconCore,
        iconBg: "bg-[#001E33]",
        textColor: "text-[#00A2FF]",
        bgColor: "bg-[#0E1629]",
      },
      {
        name: "Overdrive",
        price: 790,
        description: "Most popular plan",
        features: [
          "All Starter features",
          "1TB additional storage",
          "Unlimited projects",
          "Analytics",
        ],
        iconColor: "blue",
        icon: iconOverdrive,
        iconBg: "bg-[#001A3E]",
        textColor: "text-[#4D9AFF]",
        bgColor: "bg-[#0A1E3A]",
        featured: true,
      },
      {
        name: "Team",
        price: 390,
        description: "Exclusively for teams",
        features: [
          "All Overdrive features",
          "10TB additional storage",
          "50% off per member",
          "Real-time collaboration",
        ],
        iconColor: "blue",
        icon: iconTeam,
        iconBg: "bg-[#001E3D]",
        textColor: "text-[#3E7BFF]",
        bgColor: "bg-[#0E1629]",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#050B1A] flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12">
          Flexible pricing for teams of all sizes
        </h2>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-8 md:mb-12 relative">
          <div className="bg-[#0E1629] rounded-full p-1 flex items-center relative z-10">
            <button
              className={`px-4 md:px-8 py-2 rounded-full transition-colors duration-300 relative z-20 ${
                !isAnnual ? "bg-blue-600 text-white" : "text-gray-400"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 md:px-8 py-2 rounded-full transition-colors duration-300 relative z-20 ${
                isAnnual ? "bg-blue-600 text-white" : "text-gray-400"
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual
            </button>
            {/* Animated Highlight */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`absolute top-1 bottom-1 bg-[#283B5E] rounded-full transition-all duration-300 z-10 ${
                isAnnual ? "left-1/2" : "left-1"
              }`}
              style={{
                width: "calc(50% - 0.25rem)",
              }}
            />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row md:justify-center md:items-center md:-space-x-4 space-y-8 md:space-y-0">
          {plans[isAnnual ? "annual" : "monthly"].map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className={`
                w-full md:w-[350px] ${plan.bgColor} rounded-3xl 
                flex flex-col justify-center
                relative
                ${index === 1 ? "md:z-10 md:pt-14 md:scale-110" : "pt-6 md:z-0"}
                transition-all duration-300
                border border-[#1A2B4A]
                ${plan.featured ? "border-2 border-[#1A2B4A]" : ""}
                ${index === 1 ? "md:h-[600px]" : "md:h-[500px]"}
                self-center
              `}
            >
              {/* Rounded Icon */}
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                w-20 h-20 rounded-full bg-[#162A4A] flex items-center justify-center"
              >
                <div
                  className={`w-[80px] h-[80px] rounded-full flex items-center justify-center 
                  ${plan.iconBg}`}
                >
                  <img
                    src={plan.icon}
                    alt={`${plan.name} icon`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Plan Content */}
              <div className="px-8 pt-12 pb-6 flex flex-col flex-grow justify-center">
                {/* Plan Name */}
                <h3
                  className={`text-2xl font-bold text-center mb-2 uppercase tracking-wider ${plan.textColor}`}
                >
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-center mb-4">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold text-white">
                    ${plan.price}
                    <span className="text-sm text-gray-400 ml-1">
                      / {isAnnual ? "year" : "mo"}
                    </span>
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-0.5 bg-[#1A2B4A] mb-6"></div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 mr-3 ${plan.textColor}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  onMouseEnter={() => setHoveredPlan(plan.name)}
                  onMouseLeave={() => setHoveredPlan(null)}
                  className={`
                  w-full py-3 font-semibold uppercase tracking-wider
                  flex items-center justify-center
                  ${
                    plan.featured
                      ? `${plan.textColor} bg-[#1A2B4A] hover:bg-[#243A5E]`
                      : "bg-blue-600 text-white hover:bg-blue-500"
                  }
                  transition-colors duration-300
                  rounded-[0.75rem_0rem_0.75rem_0rem]
                  hover:rounded-[0rem_0.75rem_0rem_0.75rem]
                `}
                >
                  {hoveredPlan === plan.name ? (
                    <ArrowRight className="w-5 h-5" />
                  ) : (
                    "Get Started"
                  )}
                </Link>

                {/* Limited Time Offer */}
                {plan.featured && (
                  <div className={`text-center text-xs ${plan.textColor} mt-4`}>
                    - Limited time offer -
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
