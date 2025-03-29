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
      image: "/api/placeholder/600/400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex">
      <div className="container mx-auto grid md:grid-cols-[30%_70%] gap-0">
        {/* Services Navigation */}
        <div className="bg-white/5 backdrop-blur-sm p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white mb-6">
            Our AI Services
          </h2>
          {features.map((feature) => (
            <div
              key={feature.title}
              onClick={() => setActiveFeature(feature)}
              className={`
                flex items-center p-4 rounded-lg cursor-pointer transition-all duration-300
                ${
                  activeFeature.title === feature.title
                    ? "bg-[rgb(59,130,246,0.3)] text-white border-l-4 border-[rgb(59,130,246)]"
                    : "hover:bg-white/10 text-gray-300 hover:translate-x-2 hover:border-l-4 hover:border-[rgb(59,130,246)]"
                }
                relative
                rounded-[1.5rem_0rem_1.5rem_0rem]  /* Changed border-radius */
              `}
            >
              <feature.icon className="mr-4" size={24} />
              <div>
                <span className="font-semibold block">{feature.title}</span>
                <span className="text-xs text-gray-400">
                  {feature.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white/10 backdrop-blur-sm p-12 flex items-center">
          <div className="w-full">
            <h1
              className="text-5xl font-bold mb-6 text-white"
              style={{ color: "rgb(59 130 246 / var(--tw-text-opacity, 1))" }}
            >
              {activeFeature.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {activeFeature.description}
            </p>

            <div className="bg-white/5 border border-white/20 rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src={activeFeature.image}
                alt={activeFeature.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
