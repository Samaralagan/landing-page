import React, { useState } from "react";

const HowItWorks = () => {
  const [rotation, setRotation] = useState(0);
  const [activeBox, setActiveBox] = useState(2);

  const boxes = [
    {
      id: 1,
      title: "What's in the Box?",
      description:
        "Discover coffee pouches, classic or flavored options, and creamer packets.",
      icon: "☕",
    },
    {
      id: 2,
      title: "FLIP-FLOP HUB",
      description: "A hub that allows you to change gear styles with ease.",
      icon: "🚲",
    },
    {
      id: 3,
      title: "THE ULTIMATE SLEEPING EXPERIENCE",
      description: "Luxury pillows with goose down and high-end materials.",
      icon: "🛏️",
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
    <section className="bg-blackshining text-white py-8 md:py-12 px-4 flex flex-col items-center overflow-x-hidden">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center">
        HOW IT WORKS
      </h2>

      {/* Desktop & Tablet layout */}
      <div className="hidden md:block relative w-full max-w-5xl">
        <div
          className="relative w-full"
          style={{ height: "clamp(350px, 50vh, 500px)" }}
        >
          {getRotatedBoxes().map((box, index) => {
            // Adjusted positions for better tablet layout
            const positions = [
              "absolute bottom-0 left-0 md:bottom-4 md:left-4",
              "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10",
              "absolute top-0 right-0 md:top-4 md:right-4",
            ];

            // Adjusted box sizes based on device width
            const boxSizes =
              index === 1 ? "w-64 sm:w-72 md:w-80" : "w-56 sm:w-64 md:w-72";

            return (
              <div
                key={box.id}
                className={`
                  ${positions[index]} 
                  ${boxSizes}
                  bg-white text-black p-4 md:p-6 rounded-xl shadow-lg
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
                <div className="text-xl md:text-2xl mb-2">{box.icon}</div>
                <h3 className="text-base md:text-lg font-bold">{box.title}</h3>
                <p className="mt-2 text-sm md:text-base">{box.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden w-full max-w-md overflow-hidden flex flex-col gap-4">
        {getRotatedBoxes().map((box, index) => (
          <div
            key={box.id}
            className={`
              bg-white text-black p-5 rounded-xl shadow-lg 
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
            <div className="text-xl mb-2">{box.icon}</div>
            <h3 className="text-lg font-bold">{box.title}</h3>
            <p className="mt-2">{box.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
