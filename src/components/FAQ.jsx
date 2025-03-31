import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [waveButtonHover, setWaveButtonHover] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);
  const faqContainerRef = useRef(null);
  const observerRef = useRef(null);
  const initialLoadRef = useRef(true);

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

  // Function to trigger animations
  const triggerAnimations = () => {
    // Clear any existing animations
    setAnimatedItems([]);

    // Force a repaint to ensure CSS transitions work correctly
    if (faqContainerRef.current) {
      void faqContainerRef.current.offsetHeight;
    }

    // Set a timeout to ensure the DOM has updated
    setTimeout(() => {
      // Animate items one by one with a delay
      faqs.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedItems((prev) => [...prev, index]);
        }, 100 * index);
      });
    }, 50);
  };

  // Setup Intersection Observer
  useEffect(() => {
    // Create a new IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        // When the element enters the viewport
        if (entry.isIntersecting) {
          // For initial load, delay slightly to ensure everything is rendered
          if (initialLoadRef.current) {
            setTimeout(() => {
              triggerAnimations();
              initialLoadRef.current = false;
            }, 300);
          } else {
            // For subsequent views, trigger immediately
            triggerAnimations();
          }
        } else {
          // When element leaves viewport, reset animations
          setAnimatedItems([]);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px",
      }
    );

    // Start observing the FAQ container
    if (faqContainerRef.current) {
      observerRef.current.observe(faqContainerRef.current);
    }

    // Cleanup function
    return () => {
      if (observerRef.current && faqContainerRef.current) {
        observerRef.current.unobserve(faqContainerRef.current);
      }
    };
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Wave button image URL
  const waveImageUrl =
    "https://firebasestorage.googleapis.com/v0/b/fire-fotos-8e3f9.appspot.com/o/img%2Fbtn-wave.png?alt=media&token=267962fb-78ee-4fcb-a559-034579dc675d";

  // Function to determine animation class based on index
  const getAnimationClass = (index) => {
    if (!animatedItems.includes(index)) {
      return "opacity-0 translate-y-4"; // Initial hidden state
    }

    // Odd indices come from right, even from left
    if (index % 2 === 0) {
      return "animate-fade-in-left";
    } else {
      return "animate-fade-in-right";
    }
  };

  return (
    <div className="bg-[#050B1A] min-h-screen py-16 px-4" ref={faqContainerRef}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Featured Articles
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-[#0E1629] border border-[#1A2B4A] rounded-lg overflow-hidden transition-all duration-300 ${getAnimationClass(
                index
              )}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-[#162A4A] transition-colors"
              >
                <span className="text-white text-lg font-medium">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <ChevronDown
                    className="text-[rgb(59_130_246_/var(--tw-text-opacity,1))]"
                    size={24}
                  />
                ) : (
                  <ChevronRight
                    className="text-[rgb(59_130_246_/var(--tw-text-opacity,1))]"
                    size={24}
                  />
                )}
              </button>

              {activeIndex === index && (
                <div className="p-6 pt-0 text-gray-300 text-base">
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
          <Link to="/contact" className="inline-block">
            {/* Wave Effect Button with Synchronized Border Radius Change */}
            <a
              className={`wave-button bg-[rgb(59_130_246_/var(--tw-bg-opacity,1))] text-white px-8 py-3 transition-all duration-500 relative overflow-hidden inline-block ${
                waveButtonHover
                  ? "rounded-[0rem_0.75rem_0rem_0.75rem]"
                  : "rounded-[0.75rem_0rem_0.75rem_0rem]"
              }`}
              onMouseEnter={() => setWaveButtonHover(true)}
              onMouseLeave={() => setWaveButtonHover(false)}
              href="javascript:void(0);"
              onClick={(e) => {
                e.preventDefault();
                // Your navigation logic here
              }}
            >
              <span className="relative z-10">CONTACT US</span>

              <div
                className="wave absolute w-full bg-[rgb(255,255,255,0.2)] left-0 bottom-0 transition-all duration-500 ease-in-out"
                style={{
                  height: waveButtonHover ? "100%" : "0%",
                }}
              >
                <div
                  className="wave-before absolute w-full h-[22px] bottom-full left-0"
                  style={{
                    backgroundImage: `url(${waveImageUrl})`,
                    backgroundSize: "contain",
                    animation: "wave 2s linear infinite",
                  }}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>

      {/* Add these styles to your component */}
      <style jsx>{`
        @keyframes wave {
          to {
            background-position-x: 118px;
          }
        }

        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.5s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FAQ;
