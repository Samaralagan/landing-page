import React, { useState } from "react";
import Marquee from "react-fast-marquee";

const Partners = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredLogo, setHoveredLogo] = useState(null);

  // Replace these with your actual logo paths
  const partnerLogos = [
    {
      src: "/api/placeholder/200/100",
      alt: "Partner 1",
      link: "https://partner1.com",
    },
    {
      src: "/api/placeholder/200/100",
      alt: "Partner 2",
      link: "https://partner2.com",
    },
    {
      src: "/api/placeholder/200/100",
      alt: "Partner 3",
      link: "https://partner3.com",
    },
    {
      src: "/api/placeholder/200/100",
      alt: "Partner 4",
      link: "https://partner4.com",
    },
    {
      src: "/api/placeholder/200/100",
      alt: "Partner 5",
      link: "https://partner5.com",
    },
    {
      src: "/api/placeholder/200/100",
      alt: "Partner 6",
      link: "https://partner6.com",
    },
    {
      src: "/api/placeholder/200/100",
      alt: "Partner 7",
      link: "https://partner7.com",
    },
  ];

  return (
    <section className="py-16 bg-black bg-opacity-90">
      <h2 className="text-4xl md:text-5xl font-bold  mb-12 md:mb-16 text-center">
        Our Trusted Partners
      </h2>

      <div className="overflow-hidden w-full">
        <Marquee
          pauseOnHover={false}
          speed={50}
          gradient={false}
          play={!isPaused}
        >
          <div
            className="flex w-full justify-between gap-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {partnerLogos.map((logo, index) => (
              <a
                key={index}
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  transition-all duration-300 ease-in-out inline-block
                  ${
                    hoveredLogo === index
                      ? "scale-110 -translate-y-2 shadow-lg"
                      : "scale-100 translate-y-0 shadow-none"
                  }
                `}
                onMouseEnter={() => setHoveredLogo(index)}
                onMouseLeave={() => setHoveredLogo(null)}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-40 h-20 object-contain grayscale hover:grayscale-0"
                />
              </a>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Partners;
