import { motion } from "framer-motion";
import heroBg from "../assets/herobg.jpg";
import React, { useState, useEffect } from "react";
import { Link as LucideLink } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const SlidingButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Wave button image URL
  const waveImageUrl =
    "https://firebasestorage.googleapis.com/v0/b/fire-fotos-8e3f9.appspot.com/o/img%2Fbtn-wave.png?alt=media&token=267962fb-78ee-4fcb-a559-034579dc675d";

  return (
    <Link to="https://app.calabriatechnology.com/" className="no-underline">
      {" "}
      {/* Wrap button with Link component */}
      <button
        className={`
          relative flex items-center w-48 h-14 bg-blue-500 overflow-hidden group
          transition-all duration-500 ease-in-out
          ${
            isHovered
              ? "rounded-[1.5rem_1.5rem_1.5rem_1.5rem]"
              : "rounded-[1.5rem_1.5rem_1.5rem_1.5rem]"
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
            absolute left-0 top-1/2 -translate-y-1/2 
            w-14 h-14 bg-white rounded-full 
            transition-all duration-500 ease-in-out z-10
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
    absolute w-full text-white font-semibold z-10
    transition-all duration-500 ease-in-out
    ${isHovered ? "translate-x-[-50%] opacity-0" : "translate-x-0 opacity-100"}
  `}
          style={{ padding: "0px 60px" }}
        >
          GetStarted
        </span>

        {/* Hovered Text */}
        <span
          className={`
    absolute w-full text-white font-semibold z-10
    transition-all duration-500 ease-in-out
    ${isHovered ? "translate-x-0 opacity-100" : "translate-x-[50%] opacity-0"}
  `}
          style={{ padding: "0px 60px 0px 43px" }}
        >
          GetStarted
        </span>
      </button>
    </Link>
  );
};

const TypedHeading = () => {
  const headingLines = [
    "Next-Gen Development:",
    "Faster Workflow,",
    "Fewer Errors",
  ];

  const [displayedText, setDisplayedText] = useState(["", "", ""]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [completedCycles, setCompletedCycles] = useState(0);

  useEffect(() => {
    const typingSpeed = 70; // typing speed in ms
    const deletingSpeed = 30; // deleting speed in ms
    const pauseBetweenLines = 1000; // pause after a line is completely typed
    const pauseBeforeRestart = 2000; // pause before starting over

    if (isTyping) {
      // If we're typing and haven't reached the end of the current line
      if (currentCharIndex < headingLines[currentLineIndex].length) {
        const timer = setTimeout(() => {
          setDisplayedText((prev) => {
            const newText = [...prev];
            newText[currentLineIndex] = headingLines[
              currentLineIndex
            ].substring(0, currentCharIndex + 1);
            return newText;
          });
          setCurrentCharIndex((prev) => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timer);
      }
      // If we've finished typing the current line
      else {
        // If there are more lines to type
        if (currentLineIndex < headingLines.length - 1) {
          const timer = setTimeout(() => {
            setCurrentLineIndex((prev) => prev + 1);
            setCurrentCharIndex(0);
          }, pauseBetweenLines);
          return () => clearTimeout(timer);
        }
        // If we've finished typing all lines
        else {
          const timer = setTimeout(() => {
            // After displaying all lines completely, start deleting
            setIsTyping(false);
            setIsDeleting(true);
            setCurrentLineIndex(headingLines.length - 1);
          }, pauseBeforeRestart);
          return () => clearTimeout(timer);
        }
      }
    }

    if (isDeleting) {
      // If the current line still has text to delete
      if (displayedText[currentLineIndex].length > 0) {
        const timer = setTimeout(() => {
          setDisplayedText((prev) => {
            const newText = [...prev];
            newText[currentLineIndex] = newText[currentLineIndex].substring(
              0,
              newText[currentLineIndex].length - 1
            );
            return newText;
          });
        }, deletingSpeed);
        return () => clearTimeout(timer);
      }
      // If we've deleted the current line
      else {
        // If there are more lines to delete
        if (currentLineIndex > 0) {
          const timer = setTimeout(() => {
            setCurrentLineIndex((prev) => prev - 1);
          }, 100);
          return () => clearTimeout(timer);
        }
        // If we've deleted all lines
        else {
          // Restart the typing process
          const timer = setTimeout(() => {
            setIsTyping(true);
            setIsDeleting(false);
            setCompletedCycles((prev) => prev + 1);
            setCurrentLineIndex(0);
            setCurrentCharIndex(0);
          }, 500);
          return () => clearTimeout(timer);
        }
      }
    }
  }, [
    currentCharIndex,
    currentLineIndex,
    displayedText,
    headingLines,
    isTyping,
    isDeleting,
    completedCycles,
  ]);

  return (
    <h1 className="text-6xl font-bold mb-6 text-left">
      {displayedText.map((line, index) => (
        <span key={index} className="block h-[4.5rem]">
          {line}
          {/* Show blinking cursor on the active line */}
          {currentLineIndex === index && (
            <span className="inline-block w-[5px] h-[60px] bg-white ml-1 align-middle animate-blink" />
          )}
        </span>
      ))}
    </h1>
  );
};

const Hero = () => {
  return (
    <motion.section
      className="relative  flex flex-col justify-start bg-black text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Desktop Layout (visible on lg and up) */}
      <div className="relative w-full h-screen hidden lg:block">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />

        {/* Content Container for Desktop */}
        <div className="absolute z-10 inset-0 flex items-center">
          <div
            className="ml-16 max-w-[46rem]
"
          >
            {/* Animated typing heading component - only for desktop */}
            <TypedHeading />

            <blockquote className="italic text-base text-gray-300 mb-20 text-left">
              Develop, test, and deploy smarter with AI-driven code completion,
              automated testing, and one-click deployment. Revolutionize your
              development experience with cutting-edge AI technology designed
              for speed, productivity, and predictability.
            </blockquote>

            <div className="flex items-center space-x-4">
              <SlidingButton />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile and Tablet Layout (visible on md and below, hidden on lg and up) */}
      <div className="flex flex-col w-full min-h-screen lg:hidden">
        {/* Image Container - Adjusted height */}
        <div className="w-full h-72 md:h-96 bg-black">
          <img
            src={heroBg}
            alt="Space technology"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Container - Reduced padding and made height auto with min-height */}
        <div className="px-6 md:px-20 py-8 bg-black flex-1 flex flex-col justify-center">
          {/* Normal static heading for mobile and tablet */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-left">
            Next-Gen Development: Faster Workflow, Fewer Errors
          </h1>

          <blockquote className="italic text-sm md:text-base text-gray-300 mb-6 text-left">
            Develop, test, and deploy smarter with AI-driven code completion,
            automated testing, and one-click deployment. Revolutionize your
            development experience with cutting-edge AI technology designed for
            speed, productivity, and predictability.
          </blockquote>

          <div className="flex items-center space-x-4 mb-4">
            <SlidingButton />
          </div>
        </div>
      </div>

      {/* Curved Yellow Border - Changed to orange as in the image */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-blue-500" />

      {/* Add wave and cursor blinking animations */}
      <style jsx>{`
        @keyframes wave {
          to {
            background-position-x: 118px;
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .animate-blink {
          animation: blink 0.8s infinite;
        }
      `}</style>
    </motion.section>
  );
};

export default Hero;
