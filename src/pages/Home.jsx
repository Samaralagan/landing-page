import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Partners from "../components/Partners";
import Features from "../components/Features";
import FAQ from "../components/FAQ";

// Zoom Animation Wrapper Component
const ZoomAnimationWrapper = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.9,
        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.7,
            ease: "easeOut",
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Global Scroll Zoom Effect
const GlobalZoomEffect = () => {
  const { scrollY } = useScroll();

  // Create a scale transformation based on scroll position
  const scale = useTransform(
    scrollY,
    [0, 500], // When scroll is between 0 and 500
    [1, 0.9] // Scale from 1 to 0.9
  );

  return (
    <motion.div
      style={{
        scale,
        transformOrigin: "top center",
        width: "100%",
      }}
    />
  );
};

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Global Zoom Effect */}
      <GlobalZoomEffect />

      <ZoomAnimationWrapper>
        <Hero />
      </ZoomAnimationWrapper>

      <ZoomAnimationWrapper>
        <Features />
      </ZoomAnimationWrapper>

      <ZoomAnimationWrapper>
        <HowItWorks />
      </ZoomAnimationWrapper>

      <ZoomAnimationWrapper>
        <Partners />
      </ZoomAnimationWrapper>

      <ZoomAnimationWrapper>
        <Testimonials />
      </ZoomAnimationWrapper>

      <ZoomAnimationWrapper>
        <Pricing />
      </ZoomAnimationWrapper>

      <ZoomAnimationWrapper>
        <FAQ />
      </ZoomAnimationWrapper>
    </div>
  );
};

export default Home;
