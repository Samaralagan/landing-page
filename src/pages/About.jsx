import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-black text-white">
      {/* Two-Column Section */}
      <div className="flex flex-col lg:flex-row min-h-screen pt-20 md:pt-24 lg:pt-0">
        {/* Left Column - Heading */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-16 bg-[#0a0a0a]">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
              Discover
              <span className="block text-[rgb(59,130,246)] mt-2">
                Our Story
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
              Pioneering exceptional event experiences through innovative
              solutions and unparalleled expertise.
            </p>
          </div>
        </div>

        {/* Right Column - Content Sections */}
        <div className="w-full lg:w-1/2 bg-black flex flex-col justify-center p-6 md:p-12 lg:p-16">
          {/* First Section */}
          <div className="mb-8 md:mb-12 pb-8 md:pb-12 border-b border-[#222]">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-6">
                <img
                  src="/api/placeholder/300/200"
                  alt="Event Innovation"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4 text-[rgb(59,130,246)]">
                  Event Innovation
                </h2>
                <p className="text-sm md:text-base text-gray-300">
                  Transforming event experiences with cutting-edge technology
                  and creative strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="mt-4 md:mt-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-6">
                <img
                  src="/api/placeholder/300/200"
                  alt="Strategic Planning"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4 text-[rgb(59,130,246)]">
                  Strategic Approach
                </h2>
                <p className="text-sm md:text-base text-gray-300">
                  Delivering tailored event solutions that exceed expectations
                  and drive success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-black p-6 md:p-12 lg:p-16">
        <h2 className="text-3xl md:text-4xl text-center mb-12 md:mb-16 text-[rgb(59,130,246)]">
          Our Evolutionary Journey
        </h2>
        <div className="relative">
          {/* Vertical Timeline - Mobile View */}
          <div className="block lg:hidden">
            {[
              {
                year: 2010,
                title: "Founding",
                description:
                  "Established with a vision to revolutionize event management.",
              },
              {
                year: 2015,
                title: "First Major Expansion",
                description: "Expanded national operations and client base.",
              },
              {
                year: 2020,
                title: "Digital Transformation",
                description:
                  "Integrated cutting-edge technology into event planning.",
              },
              {
                year: 2025,
                title: "Global Reach",
                description:
                  "Became a leading global event management platform.",
              },
            ].map((item) => (
              <div key={item.year} className="mb-8 p-6 bg-[#111] rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="text-xl font-bold text-[rgb(59,130,246)] mr-4">
                    {item.year}
                  </span>
                  <h3 className="text-xl text-[rgb(59,130,246)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#333]"></div>

            <div className="relative">
              {[
                {
                  year: 2010,
                  title: "Founding",
                  description:
                    "Established with a vision to revolutionize event management.",
                },
                {
                  year: 2015,
                  title: "First Major Expansion",
                  description: "Expanded national operations and client base.",
                },
                {
                  year: 2020,
                  title: "Digital Transformation",
                  description:
                    "Integrated cutting-edge technology into event planning.",
                },
                {
                  year: 2025,
                  title: "Global Reach",
                  description:
                    "Became a leading global event management platform.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-1/2">
                    <div
                      className={`bg-[#111] p-6 rounded-lg shadow-lg ${
                        index % 2 === 0 ? "mr-12 text-right" : "ml-12 text-left"
                      }`}
                    >
                      <h3 className="text-2xl text-[rgb(59,130,246)] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[rgb(59,130,246)] w-8 h-8 rounded-full"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold text-[rgb(59,130,246)]">
                    {item.year}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
