import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Import images for icons and plan images
import iconCore from "../assets/price1.png";
import iconOverdrive from "../assets/price2.png";
import iconTeam from "../assets/price3.png";

// Particle component
const Particles = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Initialize particles
    const particleCount = 50;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(
          Math.random() * 100 + 155
        )}, 255, ${Math.random() * 0.5 + 0.1})`,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
      });
    }

    particlesRef.current = particles;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

const SlidingButton = ({ text, featured, textColor, bgColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Wave button image URL
  const waveImageUrl =
    "https://firebasestorage.googleapis.com/v0/b/fire-fotos-8e3f9.appspot.com/o/img%2Fbtn-wave.png?alt=media&token=267962fb-78ee-4fcb-a559-034579dc675d";

  return (
    <button
      className={`
        relative flex items-center justify-center w-full h-14 
        overflow-hidden group
        transition-all duration-500 ease-in-out
        ${
          featured
            ? `${bgColor} ${textColor}`
            : "bg-blue-600 text-white hover:bg-blue-500"
        }
        ${
          isHovered
            ? "rounded-[0rem_0.75rem_0rem_0.75rem]"
            : "rounded-[0.75rem_0rem_0.75rem_0rem]"
        }
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Wave Effect */}
      <div
        className="wave absolute w-full bg-[rgb(255,255,255,0.2)] left-0 bottom-0 transition-all duration-500 ease-in-out"
        style={{
          height: isHovered ? "100%" : "0%",
          zIndex: 0,
        }}
      >
        <div
          className="wave-before absolute w-full h-[22px] bottom-full left-0"
          style={{
            backgroundImage: `url(${waveImageUrl})`,
            backgroundSize: "contain",
            animation: "wave 2s linear infinite",
            zIndex: 0,
          }}
        />
      </div>

      {/* Sliding Circle */}
      <div
        className={`
          absolute left-4 top-1/2 -translate-y-1/2 
          w-10 h-10 bg-white rounded-full 
          transition-all duration-500 ease-in-out z-10
          ${isHovered ? "translate-x-[calc(100%-3rem)]" : "translate-x-0"}
        `}
      >
        {/* Arrow or Icon inside the circle */}
        <div className="flex items-center justify-center w-full h-full">
          <ArrowRight className="w-5 h-5 text-blue-500" />
        </div>
      </div>

      {/* Button Text */}
      <span
        className={`
          absolute w-full font-semibold uppercase tracking-wider z-10
          transition-all duration-500 ease-in-out
          ${
            isHovered
              ? "translate-x-[-50%] opacity-0"
              : "translate-x-0 opacity-100"
          }
        `}
      >
        {text}
      </span>

      {/* Hovered Text */}
      <span
        className={`
          absolute w-full font-semibold uppercase tracking-wider z-10
          transition-all duration-500 ease-in-out
          ${
            isHovered
              ? "translate-x-0 opacity-100"
              : "translate-x-[50%] opacity-0"
          }
        `}
      >
        {text}
      </span>
    </button>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

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
    <div className="min-h-screen bg-[#050B1A] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Add particles background */}
      <Particles />

      <div className="w-full max-w-5xl relative z-10">
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
                <div className="w-full">
                  {plan.featured ? (
                    <SlidingButton
                      text="Get Started"
                      featured={true}
                      bgColor="bg-[#1A2B4A]"
                      textColor={plan.textColor}
                    />
                  ) : (
                    <SlidingButton text="Get Started" featured={false} />
                  )}
                </div>

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

      {/* Add wave animation styles */}
      <style jsx>{`
        @keyframes wave {
          to {
            background-position-x: 118px;
          }
        }
      `}</style>
    </div>
  );
};

export default Pricing;
