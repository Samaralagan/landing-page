import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "Hi Aunty, I am your youngest client or student to start diet with you because I was pre-diabetic & obese because I was very pampered. It was so impossible in the starting. Papa was writing this months from my side but I thought I should do it. I'm big friends. Lost 12 kgs in 3 months and look smarter and become popular in your speciality is the school tiffin food. I am happy to be healthy and fit.",
    name: "Roohika",
    phone: "8800704223",
    stars: 5,
    image: "/api/placeholder/200/200", // Replace with actual image path
  },
  {
    id: 2,
    text: "Another amazing testimonial about transformative experience and personal growth through nutrition guidance. Experienced significant improvements in my overall health and wellness approach.",
    name: "Sarah Johnson",
    phone: "1234567890",
    stars: 4,
    image: "/api/placeholder/200/200", // Replace with actual image path
  },
  {
    id: 3,
    text: "Third testimonial highlighting the incredible impact of personalized nutrition and diet planning. Discovered a completely new way of understanding my body's nutritional needs.",
    name: "Michael Chen",
    phone: "9876543210",
    stars: 5,
    image: "/api/placeholder/200/200", // Replace with actual image path
  },
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center">
        Testimonial
      </h2>

      <div className="relative w-full max-w-3xl h-[500px] md:h-[600px]">
        {testimonials.map((testimonial, index) => {
          const isActive = index === activeTestimonial;
          const isNext =
            index === (activeTestimonial + 1) % testimonials.length;
          const isPrev =
            index ===
            (activeTestimonial - 1 + testimonials.length) % testimonials.length;

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
                bg-[url('/path/to/texture.png')] bg-cover bg-no-repeat
              `}
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
  );
};

export default Testimonials;
