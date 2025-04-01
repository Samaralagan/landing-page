import React, { useState, useEffect } from "react";
import how1 from "../assets/how1.svg";
import how2 from "../assets/how2.svg";
import how3 from "../assets/how3.svg";
import ran1 from "../assets/ran1.png";
import ran3 from "../assets/ran1.gif";

const HowItWorks = () => {
  const [rotation, setRotation] = useState(0);
  const [activeBox, setActiveBox] = useState(2);
  const [gifOpacity, setGifOpacity] = useState(0);

  // Effect for fading in and out the GIF
  useEffect(() => {
    const fadeInOut = () => {
      // Fade in
      const fadeIn = setInterval(() => {
        setGifOpacity((prev) => {
          if (prev >= 1) {
            clearInterval(fadeIn);
            return 1;
          }
          return prev + 0.05;
        });
      }, 100);

      // Schedule fade out after fade in completes
      setTimeout(() => {
        const fadeOut = setInterval(() => {
          setGifOpacity((prev) => {
            if (prev <= 0) {
              clearInterval(fadeOut);
              // Schedule next fade in
              setTimeout(fadeInOut, 1000);
              return 0;
            }
            return prev - 0.05;
          });
        }, 100);
      }, 4000); // Show fully for 4 seconds
    };

    // Start the initial fade in
    fadeInOut();

    // Clean up intervals on unmount
    return () => {
      clearInterval();
    };
  }, []);

  const boxes = [
    {
      id: 1,
      title: "Automated Code Generation",
      description:
        "AI generates optimized code instantly based on your input, speeding up development.",
      icon: how1,
    },
    {
      id: 2,
      title: "AI-Powered Testing & Bug Fixing",
      description:
        "Detects and resolves bugs automatically during development, ensuring smooth progress.",
      icon: how2,
    },
    {
      id: 3,
      title: "Optimized Deployment & Analytics",
      description:
        "Deploy optimized code and monitor real-time performance, boosting overall efficiency.",
      icon: how3,
    },
  ];

  const handleClick = (clickedId) => {
    if (clickedId === activeBox) return;

    const currentIndex = boxes.findIndex((box) => box.id === activeBox);
    const clickedIndex = boxes.findIndex((box) => box.id === clickedId);

    let newRotation = rotation;
    const rotationDiff = (clickedIndex - currentIndex + 3) % 3;

    if (rotationDiff === 1) {
      newRotation = (rotation + 1) % 3;
    } else if (rotationDiff === 2) {
      newRotation = (rotation - 1 + 3) % 3;
    }

    setRotation(newRotation);
    setActiveBox(clickedId);
  };

  const getRotatedBoxes = () => {
    return [
      boxes[(0 + rotation) % 3],
      boxes[(1 + rotation) % 3],
      boxes[(2 + rotation) % 3],
    ];
  };

  return (
    <section className="bg-blackshining text-white py-8 md:py-12 px-4 flex flex-col items-center overflow-x-hidden relative">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center">
        HOW IT WORKS
      </h2>

      {/* Desktop layout */}
      <div className="hidden md:block relative w-full max-w-5xl">
        <div
          className="relative w-full"
          style={{ height: "clamp(350px, 50vh, 500px)" }}
        >
          {/* ran3 GIF on the left side with fade effect */}
          <div
            className="absolute z-20"
            style={{
              left: "-170px",
              top: "50%",
              transform: "translateY(-50%)",
              opacity: gifOpacity,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <img
              src={ran3}
              alt="Fading Animation"
              className="w-32 md:w-40 lg:w-48 h-auto object-contain"
            />
          </div>

          {/* ran1 image on the extreme right side with bouncing effect */}
          <div
            className="absolute z-20"
            style={{
              right: "-205px", // Move it further to the right edge
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <div
              className="animate-bounce"
              style={{
                animation: "bounce 2s infinite ease-in-out",
                animationDuration: "3s",
              }}
            >
              <img
                src={ran1}
                alt="Bouncing Element"
                className="w-32 md:w-40 lg:w-48 h-auto object-contain"
              />
            </div>
          </div>

          {getRotatedBoxes().map((box, index) => {
            const positions = [
              "absolute bottom-0 left-0 md:bottom-4 md:left-4",
              "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10",
              "absolute top-0 right-0 md:top-4 md:right-4",
            ];

            const boxSizes =
              index === 1 ? "w-64 sm:w-72 md:w-80" : "w-56 sm:w-64 md:w-72";

            return (
              <div
                key={box.id}
                className={`
                  ${positions[index]} 
                  ${boxSizes}
                  bg-white text-black p-6 rounded-xl shadow-lg
                  flex flex-col items-center text-center
                  cursor-pointer transition-all duration-700 ease-in-out
                  ${
                    index === 1
                      ? "scale-105 hover:scale-110"
                      : "opacity-80 hover:scale-105"
                  }
                  hover:shadow-white
                `}
                onClick={() => handleClick(box.id)}
              >
                <div className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 rounded-full text-sm">
                  {box.id}
                </div>
                <img
                  src={box.icon}
                  alt={box.title}
                  className="w-12 h-12 md:w-16 md:h-16 mb-3"
                />
                <h3 className="text-base md:text-lg font-bold">{box.title}</h3>
                <p className="mt-2 text-sm md:text-base">{box.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile & Tablet layout */}
      <div className="md:hidden w-full max-w-md overflow-hidden flex flex-col gap-4">
        {/* ran3 GIF for mobile at the top with fade effect */}
        <div className="w-full flex justify-start mb-6">
          <div
            style={{
              opacity: gifOpacity,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <img
              src={ran3}
              alt="Fading Animation"
              className="w-24 h-auto object-contain"
            />
          </div>
        </div>

        {getRotatedBoxes().map((box, index) => (
          <div
            key={box.id}
            className={`
              bg-white text-black p-5 rounded-xl shadow-lg 
              flex flex-col items-center text-center
              cursor-pointer transition-all duration-500 ease-in-out
              ${
                index === 1
                  ? "scale-105 border-2 border-purple-500"
                  : "opacity-90"
              }
              w-full
              hover:shadow-white hover:scale-105
            `}
            onClick={() => handleClick(box.id)}
          >
            <div className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 rounded-full text-sm">
              {box.id}
            </div>
            <img
              src={box.icon}
              alt={box.title}
              className="w-12 h-12 md:w-16 md:h-16 mb-3"
            />
            <h3 className="text-lg font-bold">{box.title}</h3>
            <p className="mt-2">{box.description}</p>
          </div>
        ))}

        {/* ran1 image for mobile at the bottom */}
        <div className="w-full flex justify-center mt-6">
          <div className="animate-bounce" style={{ animationDuration: "3s" }}>
            <img
              src={ran1}
              alt="Bouncing Element"
              className="w-24 h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Add custom keyframes for smoother bounce animation */}
      <style jsx>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-bounce {
          animation: bounce 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
