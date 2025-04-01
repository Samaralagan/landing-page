import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import lottie from "lottie-web";
import testi1 from "../assets/testi1.png";
import testi2 from "../assets/testi2.png";
import testi3 from "../assets/testi3.png";
import testi4 from "../assets/testi4.png";
import testi5 from "../assets/testi5.png";
import testibg from "../assets/testibg.png";
import ran4 from "../assets/ran4.json"; // Changed from .gif to .json

const testimonials = [
  {
    id: 1,
    text: "Calabria Technology has completely revolutionized our development process. Their AI-powered code generation and bug-fixing tool helped us speed up our deployment cycle and reduce errors exponentially. Their real-time analytics helped us optimize workflows, making our team more productive than ever before. We've never had a smoother adoption of AI in software development.",
    name: "Benjamin M.",
    phone: "Lead Developer",
    stars: 5,
    image: testi1, // Replace with actual image path
  },
  {
    id: 2,
    text: "We've integrated Calabria Technology's AI-powered tools into our daily workflow, and the results have been exceptional. The AI-powered testing catches bugs before they even become an issue, and the optimized deployment feature ensures our software is always scalable. This platform has significantly enhanced our productivity and reduced downtime during development.",
    name: "Garcia L.",
    phone: "CTO",
    stars: 4,
    image: testi2, // Replace with actual image path
  },
  {
    id: 3,
    text: "As a coder, I was initially hesitant to use AI to write code. But as soon as I began testing Calabria Technology's software tools, I was amazed at how simple and powerful they are. The AI software is incredibly accurate, and the ability to work together as a team makes teamwork a snap. This is the future of coding, and I can't wait to see what is next.",
    name: "Takahashi T.",
    phone: "Senior Software Engineer",
    stars: 5,
    image: testi3, // Replace with actual image path
  },
  {
    id: 4,
    text: "Calabria Technology has changed the game for how our team operates in software development. The AI-assisted code generation feature enables us to significantly cut down our project timelines, while the auto bug finder keeps our code free from bugs and optimized. This platform has been a game-changer for us indeed!",
    name: "Isabella R.",
    phone: "Product Manager",
    stars: 5,
    image: testi4, // Replace with actual image path
  },
  {
    id: 5,
    text: "I have used a few AI-based development tools previously, but nothing even comes close to the productivity of Calabria Technology. The seamless integration with our existing workflow, real-time analytics, and AI-driven deployment optimization have improved our software delivery process greatly. I would highly recommend it to any development team looking to scale.",
    name: "Rodrigo K.",
    phone: "DevOps Engineer",
    stars: 5,
    image: testi5, // Replace with actual image path
  },
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const lottieContainerRef = useRef(null);
  const lottieAnimationRef = useRef(null);

  // Initialize Lottie animation
  useEffect(() => {
    if (lottieContainerRef.current) {
      // Destroy previous animation if it exists
      if (lottieAnimationRef.current) {
        lottieAnimationRef.current.destroy();
      }

      // Create new animation
      lottieAnimationRef.current = lottie.loadAnimation({
        container: lottieContainerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: ran4, // Using the imported JSON file
      });

      // Cleanup on component unmount
      return () => {
        if (lottieAnimationRef.current) {
          lottieAnimationRef.current.destroy();
        }
      };
    }
  }, []);

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`inline-block mx-1 text-3xl ${
          index < count
            ? "text-[rgb(59_130_246_/var(--tw-bg-opacity,_1))]"
            : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="relative min-h-screen  flex flex-col items-center justify-center p-4 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center">
        See What Our Clients Are Saying About US
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto">
        {/* Left side Lottie animation with effects */}
        <motion.div
          className="relative w-full md:w-1/3 flex justify-center md:justify-end mb-8 md:mb-0 md:mr-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[rgb(59_130_246_/var(--tw-bg-opacity,_1))] shadow-xl"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Lottie animation container */}
            <div ref={lottieContainerRef} className="w-full h-full"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
          <div className="absolute -inset-4 bg-[rgb(59_130_246_/var(--tw-bg-opacity,_0.2))] rounded-full blur-xl z-[-1]"></div>
        </motion.div>

        {/* Testimonial cards */}
        <div className="relative w-full md:w-2/3 h-[500px] md:h-[600px]">
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeTestimonial;
            const isNext =
              index === (activeTestimonial + 1) % testimonials.length;
            const isPrev =
              index ===
              (activeTestimonial - 1 + testimonials.length) %
                testimonials.length;

            return (
              <motion.div
                key={testimonial.id}
                className={`
                    absolute w-full max-w-3xl min-h-[400px] md:min-h-[500px] bg-white p-6 md:p-8 rounded-xl shadow-2xl
                    transition-all duration-500 ease-in-out
                    flex flex-col justify-between
                    ${
                      isActive
                        ? "z-20 top-0 rotate-0 scale-100"
                        : isNext
                        ? "z-10 top-8 -rotate-6 scale-95"
                        : isPrev
                        ? "z-10 top-8 rotate-6 scale-95"
                        : "z-0 top-16 rotate-12 scale-90 opacity-50"
                    }
                  `}
                style={{
                  backgroundImage: `url(${testibg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isActive ? 1 : isNext || isPrev ? 0.8 : 0.5,
                  scale: isActive ? 1 : isNext || isPrev ? 0.95 : 0.9,
                  rotate: isActive ? 0 : isNext ? -6 : isPrev ? 6 : 12,
                }}
                transition={{ duration: 0.5 }}
                onClick={() =>
                  setActiveTestimonial(
                    (activeTestimonial + 1) % testimonials.length
                  )
                }
              >
                <div>
                  <div className="absolute top-6 left-0 right-0 mx-auto text-[rgb(59_130_246_/var(--tw-bg-opacity,_1))]">
                    <div className="flex justify-center">
                      {renderStars(testimonial.stars)}
                    </div>
                  </div>

                  <p className="text-gray-800 mb-6 text-base md:text-lg italic leading-relaxed mt-6">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-full border-4 border-[rgb(59_130_246_/var(--tw-bg-opacity,_1))]"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[rgb(59_130_246_/var(--tw-bg-opacity,_1))] text-lg md:text-xl">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-xs md:text-sm">
                        {testimonial.phone}
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-[rgb(59_130_246_/var(--tw-bg-opacity,_1))] rounded-full absolute -left-10 top-1/2 transform -translate-y-1/2"></div>
                    <div className="w-4 h-4 md:w-6 md:h-6 bg-black rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
