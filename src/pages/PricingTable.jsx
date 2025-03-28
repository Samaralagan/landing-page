import React, { useState, useEffect } from "react";
import Pricing from "../components/Pricing";

const PricingTable = () => {
  const [isMobile, setIsMobile] = useState(false);

  const features = [
    "AI Website Builder",
    "AI-Optimized Templates",
    "AI Content & Copywriting",
    "Hosting",
    "AI-Powered SEO",
    "AI Performance Optimization",
    "AI Chatbot Integration",
    "E-commerce & Sales Automation",
    "Analytics & Insights",
    "Customer Support",
  ];

  const plans = [
    {
      name: "Starter AI (For Beginners)",
      values: [
        "Basic AI drag & drop",
        "10+ industry-based templates",
        "AI text recommendations",
        "Not included",
        "Basic SEO optimization",
        "Standard page speed optimization",
        "Not included",
        "Basic Store Setup",
        "Basic Traffic Insights",
        "Email Support",
      ],
    },
    {
      name: "Pro AI (For Growing Businesses)",
      values: [
        "Advanced AI-powered design & automation",
        "50+ premium AI-generated templates",
        "Auto-blogging + AI-enhanced content",
        "Free Domain + Standard Cloud Hosting",
        "AI-driven keyword & meta enhancements",
        "AI-enhanced caching & performance boost",
        "Basic AI Chatbot",
        "AI-enhanced product recommendations",
        "AI-powered website reports",
        "Priority Support",
      ],
    },
    {
      name: "Enterprise AI (For Large-Scale Brands)",
      values: [
        "Fully automated AI website creation",
        "100+ AI-adaptive, dynamic layouts",
        "AI-generated high-converting sales copy",
        "Premium Domain + Ultra-Fast Hosting",
        "Advanced AI-powered SEO automation",
        "AI-driven CDN, speed boost & real-time optimization",
        "Advanced AI Chatbot with NLP",
        "AI-driven sales funnels & automation",
        "Predictive AI analytics & customer behavior tracking",
        "Dedicated AI-powered assistant",
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
    <div className="mt-20">
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
      <div className="mobile-view bg-[#0f1218] text-white px-4 mt-20">
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
