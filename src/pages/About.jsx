import React from "react";
import { motion } from "framer-motion";
import about from "../assets/about.png";
import vision from "../assets/vision.png";

const About = () => {
  return (
    <div className=" text-white mx-4 md:mx-8 lg:mx-12 xl:mx-16">
      {/* Two-Column Section */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 py-12 mt-16 md:mt-20 lg:mt-24">
        {/* Left Column - Heading */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-gray-900 rounded-lg shadow-2xl border border-blue-500/30 h-auto">
          <div className="text-center lg:text-left space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Experience Our Grown
              <span className="block text-[rgb(59,130,246)] mt-2">
                From Our Story
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
              Building the future of software development through the adoption
              of AI-based solutions for increased efficiency, performance, and
              scalability.
            </p>
          </div>
        </div>

        {/* Right Column - Content Sections */}
        <div className="w-full lg:w-1/2 bg-gray-900 rounded-lg shadow-2xl border border-blue-500/30 flex flex-col justify-center p-6 h-auto space-y-6">
          {/* First Section */}
          <div className="pb-6 border-b border-[#222]">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-1/3">
                <img
                  src={about}
                  alt="Event Innovation"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold text-[rgb(59,130,246)]">
                  Innovation
                </h2>
                <p className="text-sm md:text-base text-gray-300">
                  Revolutionizing the software development life cycle by
                  employing AI agents, transforming coding, testing, bug fixing,
                  and deployment processes. this is for about us page innovation
                  part i adjusted
                </p>
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-1/3">
                <img
                  src={vision}
                  alt="Strategic Planning"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold text-[rgb(59,130,246)]">
                  Strategic Approach
                </h2>
                <p className="text-sm md:text-base text-gray-300">
                  Offering AI-based solutions that automate core development
                  processes, enhance productivity, and provide maximum
                  performance in any sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-gray-900 rounded-lg shadow-2xl border border-blue-500/30 p-6 md:p-8 lg:p-10">
        <h2 className="text-3xl md:text-4xl text-center mb-12 md:mb-16 text-[rgb(59,130,246)]">
          Our Evolutionary Journey
        </h2>
        <div className="relative">
          {/* Vertical Timeline - Mobile View */}
          <div className="block lg:hidden">
            {[
              {
                year: 2022,
                title: "Founding",
                description:
                  "Transformed software development with AI automation.",
              },
              {
                year: 2023,
                title: "AI Integration",
                description:
                  "Integrated AI-driven code generation and bug fixation.",
              },
              {
                year: 2024,
                title: "Platform Expansion",
                description:
                  " Launched an AI for testing, optimization, and deployment.",
              },
              {
                year: 2025,
                title: "Global Reach",
                description:
                  "Became a top AI platform with scalable enterprise solutions.",
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
                  year: 2022,
                  title: "Founding",
                  description:
                    "Established with a vision to revolutionize event management.",
                },
                {
                  year: 2023,
                  title: "First Major Expansion",
                  description: "Expanded national operations and client base.",
                },
                {
                  year: 2024,
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
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[rgb(59,130,246)] w-8 h-8 rounded-full mb-[1.2rem]
"
                  ></div>
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
