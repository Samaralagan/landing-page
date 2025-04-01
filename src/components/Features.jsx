import React, { useState, useEffect, useRef } from "react";
import {
  Type,
  Image as ImageIcon,
  Code,
  MessageCircle,
  Mic,
} from "lucide-react";
import fea1 from "../assets/fea1.png";
import fea2 from "../assets/fea2.png";
import fea3 from "../assets/fea3.png";
import fea4 from "../assets/fea4.png";
import fea5 from "../assets/fea5.png";
import ser1 from "../assets/ser1.svg";
import ser2 from "../assets/ser2.svg";
import ser3 from "../assets/ser3.svg";
import ser4 from "../assets/ser4.svg";
import ser5 from "../assets/ser5.svg";

const Features = () => {
  const features = [
    {
      title: "AI Code Generation",
      description:
        "Speed up development with AI that generates high-quality, optimized code in seconds. Reduce manual effort and focus on innovation.",
      subtitle: "Speed up development with AI",
      icon: Code, // Using Lucide icon as fallback
      iconSrc: ser1,
      image: fea1,
    },
    {
      title: "AI Testing & Bug Fixing",
      description:
        "Enhance software reliability with AI that detects, analyzes, and fixes bugs automatically, cutting down debugging time and improving performance.",
      subtitle: "Enhance software reliability with AI",
      icon: Mic, // Using Lucide icon as fallback
      iconSrc: ser2,
      image: fea2,
    },
    {
      title: "AI Code Deployment",
      description:
        "Deploy applications effortlessly with AI-driven pipelines that ensure secure, scalable, and automated releases—no manual intervention needed.",
      subtitle: "Deploy applications effortlessly with AI",
      icon: Type, // Using Lucide icon as fallback
      iconSrc: ser3,
      image: fea3,
    },
    {
      title: "AI Collaborative Dev Tools",
      description:
        "Boost productivity with AI-powered tools that streamline teamwork, enforce coding standards, and simplify collaboration across distributed teams.",
      subtitle: "Boost productivity with AI",
      icon: MessageCircle, // Using Lucide icon as fallback
      iconSrc: ser4,
      image: fea4,
    },
    {
      title: "AI Real-Time Analytics & Collaboration",
      description:
        "Make informed decisions with AI-driven real-time insights that monitor performance, optimize processes, and ensure efficiency at every stage.",
      subtitle: "Make informed decisions with AI",
      icon: ImageIcon, // Using Lucide icon as fallback
      iconSrc: ser5,
      image: fea5,
    },
  ];

  const [activeFeature, setActiveFeature] = useState(features[0]);
  const [animatedItems, setAnimatedItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const featuresContainerRef = useRef(null);
  const animationTimersRef = useRef([]);

  // Handle component mount
  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
      // Clear all animation timers when component unmounts
      animationTimersRef.current.forEach((timer) => clearTimeout(timer));
      animationTimersRef.current = [];
    };
  }, []);

  // Setup Intersection Observer to detect when Features section enters or leaves the viewport
  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility based on intersection
        setIsVisible(entry.isIntersecting);

        // Reset animations when element leaves viewport
        if (!entry.isIntersecting) {
          // Clear all animation timers
          animationTimersRef.current.forEach((timer) => clearTimeout(timer));
          animationTimersRef.current = [];
          setAnimatedItems([]);
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    if (featuresContainerRef.current) {
      observer.observe(featuresContainerRef.current);
    }

    return () => {
      if (featuresContainerRef.current) {
        observer.unobserve(featuresContainerRef.current);
      }
    };
  }, [isMounted]);

  // Trigger animations when the component becomes visible
  useEffect(() => {
    if (!isMounted) return;

    if (isVisible) {
      // Clear previous timers
      animationTimersRef.current.forEach((timer) => clearTimeout(timer));
      animationTimersRef.current = [];

      // Reset animations
      setAnimatedItems([]);

      // Create new staggered animations with a slight initial delay
      const initialDelay = 100; // Small initial delay to ensure component is fully rendered

      features.forEach((_, index) => {
        const timer = setTimeout(() => {
          if (isMounted) {
            setAnimatedItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        }, initialDelay + 200 * index); // 200ms delay between each item

        animationTimersRef.current.push(timer);
      });
    }

    return () => {
      // Clear timers when effect cleanup runs
      animationTimersRef.current.forEach((timer) => clearTimeout(timer));
      animationTimersRef.current = [];
    };
  }, [isVisible, isMounted]);

  // Function to determine animation class based on index
  const getAnimationClass = (index) => {
    if (!isVisible || !animatedItems.includes(index)) {
      return "opacity-0 -translate-x-12";
    }

    return "animate-slide-in-left";
  };

  // Reset active feature when component unmounts and remounts
  useEffect(() => {
    if (isMounted) {
      setActiveFeature(features[0]);
    }
  }, [isMounted]);

  // Render feature icon (either SVG image or Lucide fallback)
  const renderFeatureIcon = (feature) => {
    const IconComponent = feature.icon;

    return (
      <>
        {/* Display the SVG image if it loaded correctly */}
        <img
          src={feature.iconSrc}
          alt=""
          className="mr-2 w-6 h-6"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "block";
          }}
        />
        {/* Fallback to Lucide icon (initially hidden) */}
        <IconComponent className="mr-2 hidden" size={18} />
      </>
    );
  };

  return (
    <div
      className="bg-gradient-to-b from-black via-gray-900 to-black"
      ref={featuresContainerRef}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] md:grid-cols-[40%_60%]">
          {/* Services Navigation */}
          <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-6">
            <h2 className="text-xl font-bold text-white mb-4">
              AI-Powered Tools for Next-Level Development
            </h2>
            <div className="flex flex-row overflow-x-auto lg:flex-col lg:overflow-visible pb-2 gap-2 lg:gap-y-6">
              {features.map((feature, index) => (
                <div
                  key={`feature-${index}-${feature.title}`}
                  onClick={() => setActiveFeature(feature)}
                  className={`
                    flex-shrink-0 w-auto md:w-full flex items-center p-3 rounded-lg cursor-pointer transition-all
                    ${
                      activeFeature.title === feature.title
                        ? "bg-[rgb(59,130,246,0.3)] text-white border-l-4 border-[rgb(59,130,246)]"
                        : "hover:bg-white/10 text-gray-300 hover:translate-x-1 hover:border-l-4 hover:border-[rgb(59,130,246)]"
                    }
                    rounded-[1.5rem_0rem_1.5rem_0rem]
                    ${getAnimationClass(index)}
                  `}
                >
                  {renderFeatureIcon(feature)}
                  <div>
                    <span className="font-semibold block text-sm">
                      {feature.title}
                    </span>
                    <span className="text-xs text-gray-400 hidden sm:block">
                      {feature.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="bg-white/10 backdrop-blur-sm p-6">
            <h1
              className="text-3xl font-bold mb-3 text-white"
              style={{ color: "rgb(59 130 246 / var(--tw-text-opacity, 1))" }}
            >
              {activeFeature.title}
            </h1>
            <p className="text-base text-gray-300 mb-4">
              {activeFeature.description}
            </p>

            <div className="bg-white/5 border border-white/20 rounded-xl overflow-hidden shadow-2xl">
              <img
                src={activeFeature.image}
                alt={activeFeature.title}
                className="w-full object-cover"
                style={{
                  height: "calc(100vh - 300px)",
                  minHeight: "250px",
                  maxHeight: "600px",
                }}
                key={`feature-image-${activeFeature.title}`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-48px);
            border-left: 4px solid transparent;
          }
          to {
            opacity: 1;
            transform: translateX(0);
            border-left: 4px solid rgb(59, 130, 246);
          }
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Features;
