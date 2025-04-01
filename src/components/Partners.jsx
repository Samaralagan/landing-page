import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import par1 from "../assets/par1.png";
import par2 from "../assets/par2.png";
import par3 from "../assets/par3.png";
import par4 from "../assets/par4.png";
import par5 from "../assets/par5.png";
import par6 from "../assets/par6.png";
import par7 from "../assets/par7.png";

const Partners = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredLogo, setHoveredLogo] = useState(null);

  // Replace these with your actual logo paths
  const partnerLogos = [
    {
      src: par1,
      alt: "Open AI",
      link: "https://openai.com/",
    },
    {
      src: par2,
      alt: "Cloud Flare",
      link: "https://www.cloudflare.com/en-gb/",
    },
    {
      src: par3,
      alt: "Pay Pal",
      link: "https://www.paypal.com/fr/home",
    },
    {
      src: par4,
      alt: "Git Hub",
      link: "https://github.com/",
    },
    {
      src: par5,
      alt: "Jira",
      link: "https://www.atlassian.com/?clickid=QVpUDp071xycW4u0tbx%3AHw3XUksy3BSNR0gFyQ0&irgwc=1&utm_medium=paid-affiliate&utm_source=impact&ircid=17715&irpid=29332&irmpname=FlexOffers.com%2C%20LLC&irmptype=mediapartner&irshareid=1257364&irmpgroupname=%22Non-Tech%20Sub-Affiliate%20Networks%22&iraid=1548455&utm_content=N%2FA---No-U-value_image-campaign-brand-default-na-120x90-na-jsm-1548455&irclkid=QVpUDp071xycW4u0tbx%3AHw3XUksy3BSNR0gFyQ0&utm_campaign=P%3Ajsm%7CO%3Appm%7CV%3Aimpact%7CG%3Aus%7CL%3Aen%7CF%3Aaware%7CT%3Ainterest%7CA%3Aimage%7CD%3Aalld&gad_source=1&gclid=Cj0KCQjwna6_BhCbARIsALId2Z18-jMHpmoZUNTR774cFLL1EPfkUpmcOWopddqcW1QH7CTtT8VkX9UaApDVEALw_wcB",
    },
    {
      src: par6,
      alt: "Sentry",
      link: "https://sentry.io/welcome/",
    },

    {
      src: par7,
      alt: "Codeium",
      link: "https://codeium.com/",
    },
  ];

  return (
    <section className="py-16  bg-opacity-90">
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
