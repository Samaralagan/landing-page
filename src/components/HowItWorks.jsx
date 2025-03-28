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
    <section className="relative bg-blackshining text-white py-16 px-4 min-h-screen flex flex-col items-center overflow-x-hidden">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
        HOW IT WORKS
      </h2>

      <div className="hidden md:block relative w-full max-w-5xl h-[500px]">
        <div className="relative w-full h-full">
          {getRotatedBoxes().map((box, index) => {
            const positions = [
              "absolute bottom-0 left-0",
              "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10",
              "absolute top-0 right-0",
            ];

            return (
              <div
                key={box.id}
                className={`
                  ${positions[index]} 
                  bg-white text-black p-6 rounded-xl shadow-lg w-80 
                  cursor-pointer transition-all duration-700 ease-in-out
                  ${
                    index === 1
                      ? "scale-110 hover:scale-115"
                      : "opacity-80 hover:scale-110"
                  }
                  hover:shadow-white
                `}
                onClick={() => handleClick(box.id)}
              >
                <div className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 rounded-full text-sm">
                  {box.id}
                </div>
                <div className="text-2xl mb-2">{box.icon}</div>
                <h3 className="text-lg font-bold">{box.title}</h3>
                <p className="mt-2">{box.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="md:hidden w-full max-w-md overflow-hidden">
        {getRotatedBoxes().map((box, index) => (
          <div
            key={box.id}
            className={`
              static mb-4
              bg-white text-black p-6 rounded-xl shadow-lg 
              cursor-pointer transition-all duration-700 ease-in-out
              ${
                index === 1
                  ? "scale-105 border-4 border-purple-500 hover:scale-110"
                  : "opacity-80 hover:scale-110"
              }
              w-full
              hover:shadow-white
            `}
            onClick={() => handleClick(box.id)}
          >
            <div className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 rounded-full text-sm">
              {box.id}
            </div>
            <div className="text-2xl mb-2">{box.icon}</div>
            <h3 className="text-lg font-bold">{box.title}</h3>
            <p className="mt-2">{box.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
