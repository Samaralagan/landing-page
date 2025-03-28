import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Partners from "../components/Partners";
import CTA from "../components/CTA";
import Features from "../components/Features";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <Partners />
      <Testimonials />
      <Pricing />

      <CTA />
    </div>
  );
};

export default Home;
