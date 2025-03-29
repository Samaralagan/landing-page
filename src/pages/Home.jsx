import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Partners from "../components/Partners";
import Features from "../components/Features";
import FAQ from "../components/FAQ";

// CSS styles to override min-height
const overrideStyles = {
  "& > div": {
    minHeight: "auto !important",
  },
};

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
      className="min-h-auto"
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
  // Apply CSS after component mounts to override min-height
  useEffect(() => {
    // Create a style element
    const styleElement = document.createElement("style");

    // Add CSS to override min-height for all component sections
    styleElement.textContent = `
      /* Override min-height for all section components */
      .section-override > * {
        min-height: auto !important;
      }
      
      /* Override specifically for components that might have nested structures */
      .section-override [class*="min-h-"], 
      .section-override [class*="min-height"] {
        min-height: auto !important;
      }
      
      /* Target specific component classes if needed */
      .hero-section, .features-section, .how-it-works-section,
      .partners-section, .testimonials-section, .pricing-section,
      .faq-section {
        min-height: auto !important;
      }
    `;

    // Append the style element to the document head
    document.head.appendChild(styleElement);

    // Clean up function to remove style element when component unmounts
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="relative overflow-hidden section-override">
      {/* Global Zoom Effect */}
      <GlobalZoomEffect />

      <ZoomAnimationWrapper>
        <div className="hero-section">
          <Hero />
        </div>
      </ZoomAnimationWrapper>

      <ZoomAnimationWrapper>
        <div className="features-section">
          <Features />
        </div>
      </ZoomAnimationWrapper>

      <ZoomAnimationWrapper>
        <div className="how-it-works-section">
          <HowItWorks />
        </div>
      </ZoomAnimationWrapper>

      <ZoomAnimationWrapper>
        <div className="partners-section">
          <Partners />
        </div>
      </ZoomAnimationWrapper>

      <ZoomAnimationWrapper>
        <div className="testimonials-section">
          <Testimonials />
        </div>
      </ZoomAnimationWrapper>

      <ZoomAnimationWrapper>
        <div className="pricing-section">
          <Pricing />
        </div>
      </ZoomAnimationWrapper>

      <ZoomAnimationWrapper>
        <div className="faq-section">
          <FAQ />
        </div>
      </ZoomAnimationWrapper>
    </div>
  );
};

export default Home;
