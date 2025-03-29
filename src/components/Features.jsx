import React, { useState } from "react";
import {
  Type,
  Image as ImageIcon,
  Code,
  MessageCircle,
  Mic,
} from "lucide-react";
import fea1 from "../assets/fea1.png";
import fea2 from "../assets/fea2.png";
import fea3 from "../assets/fea3.png";
import fea4 from "../assets/fea4.png";
import fea5 from "../assets/fea5.png";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState({
    title: "AI Text Generator",
    description:
      "Say goodbye to writer's block. Generate high-quality, engaging text instantly with our advanced AI writing assistant. Perfect for blogs, articles, marketing copy, and creative writing.",
    subtitle: "Say goodbye to writer's block · AI",
    icon: Type,
    image: fea1,
  });

  const features = [
    {
      title: "AI Text Generator",
      description:
        "Say goodbye to writer's block. Generate high-quality, engaging text instantly with our advanced AI writing assistant. Perfect for blogs, articles, marketing copy, and creative writing.",
      subtitle: "Say goodbye to writer's block · AI",
      icon: Type,
      image: fea1,
    },
    {
      title: "AI Image Generator",
      description:
        "Transform your ideas into stunning visuals. Our AI image generation tool creates unique, high-resolution images based on your text descriptions, helping you bring creativity to life.",
      subtitle: "Create visual content instantly · AI",
      icon: ImageIcon,
      image: fea2,
    },
    {
      title: "AI Code Generator",
      description:
        "Accelerate your development process with AI-powered code generation. Write clean, efficient code across multiple programming languages with intelligent suggestions and complete code blocks.",
      subtitle: "Write code with AI assistance · AI",
      icon: Code,
      image: fea3,
    },
    {
      title: "AI Chat Bot",
      description:
        "Engage with an intelligent conversational assistant that understands context, provides instant responses, and helps with a wide range of tasks from customer support to personal assistance.",
      subtitle: "Intelligent conversation partner · AI",
      icon: MessageCircle,
      image: fea4,
    },
    {
      title: "AI Speech to Text",
      description:
        "Convert spoken words into accurate, formatted text with our advanced speech recognition technology. Supports multiple languages and handles complex vocabulary with ease.",
      subtitle: "Convert speech to written text · AI",
      icon: Mic,
      image: fea5,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] md:grid-cols-[40%_60%]">
          {/* Services Navigation */}
          <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-6">
            <h2 className="text-xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <div className="flex flex-row overflow-x-auto lg:flex-col lg:overflow-visible pb-2 gap-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  onClick={() => setActiveFeature(feature)}
                  className={`
                    flex-shrink-0 w-auto md:w-full flex items-center p-3 rounded-lg cursor-pointer transition-all
                    ${
                      activeFeature.title === feature.title
                        ? "bg-[rgb(59,130,246,0.3)] text-white border-l-4 border-[rgb(59,130,246)]"
                        : "hover:bg-white/10 text-gray-300 hover:translate-x-1 hover:border-l-4 hover:border-[rgb(59,130,246)]"
                    }
                    rounded-[1.5rem_0rem_1.5rem_0rem]
                  `}
                >
                  <feature.icon className="mr-2" size={18} />
                  <div>
                    <span className="font-semibold block text-sm">
                      {feature.title}
                    </span>
                    <span className="text-xs text-gray-400 hidden sm:block">
                      {feature.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="bg-white/10 backdrop-blur-sm p-6">
            <h1
              className="text-3xl font-bold mb-3 text-white"
              style={{ color: "rgb(59 130 246 / var(--tw-text-opacity, 1))" }}
            >
              {activeFeature.title}
            </h1>
            <p className="text-base text-gray-300 mb-4">
              {activeFeature.description}
            </p>

            <div className="bg-white/5 border border-white/20 rounded-xl overflow-hidden shadow-2xl">
              <img
                src={activeFeature.image}
                alt={activeFeature.title}
                className="w-full object-cover"
                style={{
                  height: "calc(100vh - 300px)",
                  minHeight: "250px",
                  maxHeight: "600px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
