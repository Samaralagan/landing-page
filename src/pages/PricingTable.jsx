import React, { useState, useEffect } from "react";
import Pricing from "../components/Pricing";

const PricingTable = () => {
  const [isMobile, setIsMobile] = useState(false);

  const features = [
    "AI Code Generation",
    "AI Testing & Bug Fixing",
    "AI Deployment & Scaling",
    "AI Collaboration & Workflow",
    "Basic Git Integration",
    "Advanced Git Integration",
    "AI Code Review",
    "Security Enhancements",
    "Real-Time Collaboration",
    "Custom AI Enhancements",
    "Enterprise-Grade Security",
    "Access to New Features",
    "Dedicated 24/7 Support",
  ];

  const plans = [
    {
      name: "Solo",
      values: [
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "❌",
        "❌",
        "❌",
        "❌",
        "❌",
        "❌",
        "❌",
        "❌",
      ],
    },
    {
      name: "Professional Plan",
      values: [
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "❌",
        "❌",
        "❌",
        "❌",
      ],
    },
    {
      name: "Enterprise Plan",
      values: [
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
        "✔️",
      ],
    },
  ];

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on initial load
    checkMobileView();

    // Add resize listener
    window.addEventListener("resize", checkMobileView);

    // Cleanup listener
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  const DesktopView = () => (
    <div className="mt-28">
      <div className="mb-10">
        <Pricing />
      </div>
      <div className="pricing-table desktop-view bg-[#0f1218] text-white mx-auto max-w-6xl px-4">
        <div className="pricing-header bg-[#f5f5f5] text-[#0f1218] font-bold flex rounded-t-xl overflow-hidden">
          <div className="pricing-header-cell flex-1 p-4 text-center text-lg">
            Features
          </div>
          {plans.map((plan, index) => (
            <div
              key={index}
              className="pricing-header-cell flex-1 p-4 text-center text-lg"
            >
              {plan.name}
            </div>
          ))}
        </div>

        <div className="rounded-b-xl overflow-hidden">
          {features.map((feature, featureIndex) => (
            <div
              key={featureIndex}
              className="pricing-row flex border-b border-[#2a2f3b] 
              hover:bg-[rgba(59,130,246,0.1)] transition-all duration-300 ease-in-out 
              hover:border-l-4 hover:border-l-blue-500 group"
            >
              <div className="pricing-feature flex-1 p-4 font-medium group-hover:text-blue-400 transition-colors">
                {feature}
              </div>
              {plans.map((plan, planIndex) => (
                <div
                  key={planIndex}
                  className="pricing-value flex-1 p-4 text-center 
                  group-hover:text-blue-300 transition-colors duration-300 ease-in-out"
                >
                  {plan.values[featureIndex]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const MobileView = () => {
    const [expandedFeature, setExpandedFeature] = useState(0);

    return (
      <div className="mobile-view bg-[#0f1218] text-white px-4 mt-28">
        <div className="mb-10">
          <Pricing />
        </div>
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            className="mobile-feature-row mb-4 bg-[rgba(42,47,59,0.3)] rounded-lg overflow-hidden"
          >
            <div
              className="mobile-feature-header bg-[#2a2f3b] p-4 font-bold text-base flex justify-between items-center cursor-pointer"
              onClick={() =>
                setExpandedFeature(
                  featureIndex === expandedFeature ? -1 : featureIndex
                )
              }
            >
              <span className="flex-grow">{feature}</span>
              <span className="ml-2 transform transition-transform duration-300 ease-in-out">
                {expandedFeature === featureIndex ? "▲" : "▼"}
              </span>
            </div>

            {expandedFeature === featureIndex && (
              <div className="mobile-feature-table w-full">
                {plans.map((plan, planIndex) => (
                  <div
                    key={planIndex}
                    className="mobile-feature-plan flex border-b border-[#2a2f3b] last:border-b-0"
                  >
                    <div
                      className="mobile-plan-name w-2/5 p-3 font-medium 
                      bg-[rgba(255,255,255,0.05)] flex items-center"
                    >
                      {plan.name}
                    </div>
                    <div
                      className="mobile-plan-value w-3/5 p-3 flex items-center 
                      text-sm break-words"
                    >
                      {plan.values[featureIndex]}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-[#0f1218]">
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
};

export default PricingTable;
