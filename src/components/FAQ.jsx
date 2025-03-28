import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Getting a JavaScript console error",
      answer:
        "JavaScript console errors can occur due to various reasons such as syntax errors, undefined variables, or network issues. We recommend checking the specific error message and reviewing your code carefully.",
    },
    {
      question: "Accepted currencies for product billing",
      answer:
        "We currently accept major currencies including USD, EUR, GBP, and several others. Our payment system supports multiple international payment methods to ensure convenient transactions.",
    },
    {
      question: "Cancelling a website subscription",
      answer:
        "To cancel your website subscription, log into your account, navigate to the billing section, and select the 'Cancel Subscription' option. We recommend reviewing our cancellation policy for any potential prorated refunds.",
    },
    {
      question: "Setting up new domain and page",
      answer:
        "Setting up a new domain involves purchasing a domain name, configuring DNS settings, and linking it to your hosting provider. Our support team can guide you through this process step by step.",
    },
    {
      question: "Getting started with our application",
      answer:
        "To get started, create an account, choose a subscription plan, and follow our onboarding tutorial. Our comprehensive documentation and support team are available to assist you throughout the process.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#050B1A] min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Featured Articles
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#0E1629] border border-[#1A2B4A] rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-[#162A4A] transition-colors"
              >
                <span className="text-white text-lg font-medium">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <ChevronDown className="text-purple-500" size={24} />
                ) : (
                  <ChevronRight className="text-purple-500" size={24} />
                )}
              </button>

              {activeIndex === index && (
                <div
                  className="p-6 pt-0 text-gray-300 text-base"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl text-white mb-4">
            Didn't find an answer to your question?
          </h3>
          <p className="text-gray-400 mb-6">
            Get in touch with us for details on additional services and custom
            work pricing
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
