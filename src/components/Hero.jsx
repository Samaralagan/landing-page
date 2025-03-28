import { motion } from "framer-motion";
import heroBg from "../assets/herobg.jpg";
import React, { useState } from "react";

const SlidingButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="relative flex items-center w-48 h-14 bg-blue-500 rounded-full overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sliding Circle */}
      <div
        className={`
          absolute left-0 top-1/2 -translate-y-1/2 
          w-14 h-14 bg-white rounded-full 
          transition-all duration-500 ease-in-out
          ${isHovered ? "translate-x-[calc(100%+5rem)]" : "translate-x-0"}
        `}
      >
        {/* Arrow or Icon inside the circle */}
        <div className="flex items-center justify-center w-full h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-500"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>

      {/* Button Text */}
      <span
        className={`
          absolute w-full text-white font-semibold 
          transition-all duration-500 ease-in-out
          ${
            isHovered
              ? "translate-x-[-50%] opacity-0"
              : "translate-x-0 opacity-100"
          }
        `}
      >
        Try demo
      </span>

      {/* Hovered Text */}
      <span
        className={`
          absolute w-full text-white font-semibold 
          transition-all duration-500 ease-in-out
          ${
            isHovered
              ? "translate-x-0 opacity-100"
              : "translate-x-[50%] opacity-0"
          }
        `}
      >
        Try demo
      </span>
    </button>
  );
};

const Hero = () => {
  return (
    <motion.section
      className="relative h-screen flex items-center justify-start bg-black text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Curved Border Background */}
      <div className="absolute inset-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
          className="absolute w-full h-full"
        >
          <path
            d="M0,0
                L0,800
                Q800,900 1600,800
                L1600,0
                Q800,100 0,0"
            fill="#000000"
          />
        </svg>
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          clipPath:
            'path("M0,0 L0,800 Q800,900 1600,800 L1600,0 Q800,100 0,0")',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 ml-10 md:ml-20 lg:ml-32 max-w-xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-left">
          Revealing the Treasures of the Universe
        </h1>

        <blockquote className="italic text-sm md:text-base text-gray-300 mb-8 text-left">
          "You want to wake up in the morning and think the future is going to
          be great - and that's what being a spacefaring civilization is all
          about. It's about believing in the future and thinking that the future
          will be better than the past. And I can't think of anything more
          exciting than going out there and being among the stars." - Elon Musk
        </blockquote>

        <div className="flex items-center space-x-4">
          <SlidingButton />
        </div>
      </div>

      {/* Curved Yellow Border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-orange-500" />
    </motion.section>
  );
};

export default Hero;
