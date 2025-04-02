import React, { useState, useRef, useEffect } from "react";
import {
  ChevronRight,
  Calendar,
  User,
  ArrowRight,
  ChevronLeft,
  ChevronDown,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [hoveredBlog, setHoveredBlog] = useState(null);
  const [hoveredButtons, setHoveredButtons] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileCurrent, setMobileCurrent] = useState(0);
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const mobileSliderRef = useRef(null);

  // Wave button image URL
  const waveImageUrl =
    "https://firebasestorage.googleapis.com/v0/b/fire-fotos-8e3f9.appspot.com/o/img%2Fbtn-wave.png?alt=media&token=267962fb-78ee-4fcb-a559-034579dc675d";

  const blogs = [
    {
      id: 1,
      title: "How AI Cuts Development Time by 50%: A Deep Dive into Automation",
      author: "Admin",
      date: "March 15, 2025",
      excerpt:
        "Imagine this: You cut down the amount of time you spend creating software without compromising on quality by 50%...",
      image: blog1,
      content: `Imagine this: `,
    },
    {
      id: 2,
      title:
        "The Future of AI in Software Development: 8 ways AI is Reshaping Code, Testing, and Innovation",
      author: "Admin",
      date: "February 28, 2025",
      excerpt:
        "Artificial Intelligence (AI) has already revolutionized companies globally, and using AI in software development is not different...",
      image: blog2,
      content: `ties are endless.`,
    },
    {
      id: 3,
      title:
        "AI Code Generation: The Future of Smarter and Error-Free Programming",
      author: "Admin",
      date: "January 20, 2024",
      excerpt:
        "With the rapidly increasing speed and evolving nature of software programming, developers never cease searching for methods in which they can automate and optimize their work...",
      image: blog3,
      content: `ten and created.`,
    },
    {
      id: 4,
      title:
        "AI vs. Human Developers: The Battle of Code, Creativity, and Innovation",
      author: "Admin",
      date: "December 10, 2023",
      excerpt:
        "As AI continues to make unprecedented advancements, the one question on everybody's mind is: will AI replace human developers in the near future?...",
      image: blog4,
      content: `hello`,
    },
  ];

  const handleButtonHover = (id, isHovered) => {
    setHoveredButtons((prev) => ({
      ...prev,
      [id]: isHovered,
    }));
  };

  const slidesPerView = 3;
  const totalSlides = Math.ceil(blogs.length / slidesPerView);
  const totalMobileSlides = blogs.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextMobileSlide = () => {
    setMobileCurrent((prev) => (prev === totalMobileSlides - 1 ? 0 : prev + 1));
  };

  const prevMobileSlide = () => {
    setMobileCurrent((prev) => (prev === 0 ? totalMobileSlides - 1 : prev - 1));
  };

  // Navigate to /blog instead of blog/:id
  const handleReadMoreClick = (e) => {
    e.stopPropagation(); // Prevent triggering the parent div's onClick
    navigate("/blog");
  };

  const handleBlogClick = (blog) => {
    navigate(`/blog/${blog.id}`, { state: { blog } });
  };

  const handleViewMoreClick = () => {
    navigate("/blog");
  };

  const renderBlogCard = (blog) => (
    <div
      key={blog.id}
      className="perspective-1000 h-[450px] group hidden md:block"
      onMouseEnter={() => setHoveredBlog(blog.id)}
      onMouseLeave={() => setHoveredBlog(null)}
    >
      {/* Desktop Flip Card Effect (Large Screens) */}
      <div
        className={`relative w-full h-full transition-all duration-700 ease-in-out transform-style-3d 
        ${hoveredBlog === blog.id ? "rotate-y-180 scale-105" : "scale-100"}
        group-hover:shadow-2xl`}
      >
        {/* Front of Card */}
        <div className="absolute w-full h-full backface-hidden bg-white/10 rounded-xl overflow-hidden flex flex-col">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-[rgb(59,130,246)] mb-2 flex items-center justify-center h-full text-center">
              {blog.title}
            </h3>
            <div className="mt-auto">
              <div className="flex items-center justify-between border-t border-gray-700 pt-4">
                <div className="flex items-center text-gray-400">
                  <User size={16} className="mr-2" />
                  <span className="text-sm">{blog.author}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{blog.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div
          className={`absolute w-full h-full bg-[#1E293B] rounded-xl p-6 flex flex-col justify-between rotate-y-180 backface-hidden 
          ${hoveredBlog === blog.id ? "" : "hidden"}`}
        >
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-xl font-bold text-[rgb(59,130,246)] mb-4 text-center">
              {blog.title}
            </h3>
            <p className="text-gray-300 mb-4 text-center">{blog.excerpt}</p>
          </div>

          <div>
            <button
              onClick={handleReadMoreClick}
              className="relative w-full bg-[rgb(59,130,246)] text-white py-2 rounded-[0.75rem_0rem_0.75rem_0rem] flex items-center justify-center hover:bg-blue-600 transition overflow-hidden"
              onMouseEnter={() => handleButtonHover(blog.id, true)}
              onMouseLeave={() => handleButtonHover(blog.id, false)}
            >
              {/* Wave Effect */}
              <div
                className="wave absolute w-full bg-[rgb(255,255,255,0.2)] left-0 bottom-0 transition-all duration-500 ease-in-out"
                style={{
                  height: hoveredButtons[blog.id] ? "100%" : "0%",
                  zIndex: 0,
                }}
              >
                <div
                  className="wave-before absolute w-full h-[22px] bottom-full left-0"
                  style={{
                    backgroundImage: `url(${waveImageUrl})`,
                    backgroundSize: "contain",
                    animation: "wave 2s linear infinite",
                    zIndex: 0,
                  }}
                />
              </div>
              <span className="relative z-10">Read More</span>
              <ArrowRight className="ml-2 relative z-10" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Render mobile blog card
  const renderMobileBlogCard = (blog) => (
    <div
      key={blog.id}
      className="cursor-pointer bg-white/10 rounded-xl overflow-hidden h-full w-full"
      onClick={() => handleBlogClick(blog)}
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-[rgb(59,130,246)] mb-2 line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {blog.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-400">
            <User size={16} className="mr-2" />
            <span className="text-xs">{blog.author}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Calendar size={16} className="mr-2" />
            <span className="text-xs">{blog.date}</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Calculate visible blogs based on current slide for desktop
  const visibleBlogs = blogs.slice(
    currentSlide * slidesPerView,
    Math.min(currentSlide * slidesPerView + slidesPerView, blogs.length)
  );

  return (
    <div className=" py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Our Latest Blogs
        </h1>

        {/* Desktop Slider - Hidden on Mobile */}
        <div className="relative hidden md:block">
          <div ref={sliderRef} className="overflow-hidden">
            <div
              className="grid grid-cols-3 gap-6"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1.5rem",
              }}
            >
              {visibleBlogs.map(renderBlogCard)}
            </div>
          </div>

          {/* Navigation Arrows - Desktop */}
          {blogs.length > slidesPerView && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[rgb(59,130,246)] text-white h-12 w-12 rounded-full flex items-center justify-center hover:bg-blue-600 transition z-10 shadow-lg"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-[rgb(59,130,246)] text-white h-12 w-12 rounded-full flex items-center justify-center hover:bg-blue-600 transition z-10 shadow-lg"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Slider Indicators - Desktop */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all ${
                    currentSlide === index
                      ? "w-8 bg-[rgb(59,130,246)]"
                      : "w-3 bg-gray-600"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Mobile Slider - Only shown on Mobile/Tablet */}
        <div className="relative block md:hidden">
          <div ref={mobileSliderRef} className="overflow-hidden">
            <div className="w-full h-full">
              {renderMobileBlogCard(blogs[mobileCurrent])}
            </div>
          </div>

          {/* Navigation Arrows - Mobile */}
          {blogs.length > 1 && (
            <>
              <button
                onClick={prevMobileSlide}
                className="absolute left-0 top-1/2 -translate-y-12 -translate-x-3 bg-[rgb(59,130,246)] text-white h-8 w-8 rounded-full flex items-center justify-center hover:bg-blue-600 transition z-10 shadow-lg"
              >
                <ChevronLeft size={16} />
              </button>

              <button
                onClick={nextMobileSlide}
                className="absolute right-0 top-1/2 -translate-y-12 translate-x-3 bg-[rgb(59,130,246)] text-white h-8 w-8 rounded-full flex items-center justify-center hover:bg-blue-600 transition z-10 shadow-lg"
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}

          {/* Slider Indicators - Mobile */}
          {totalMobileSlides > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: totalMobileSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setMobileCurrent(index)}
                  className={`h-2 rounded-full transition-all ${
                    mobileCurrent === index
                      ? "w-6 bg-[rgb(59,130,246)]"
                      : "w-2 bg-gray-600"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleViewMoreClick}
            className="relative bg-[rgb(59,130,246)] text-white py-3 px-8 rounded-[0.75rem_0rem_0.75rem_0rem] flex items-center justify-center hover:bg-blue-600 transition overflow-hidden shadow-lg"
            onMouseEnter={() => handleButtonHover("viewMore", true)}
            onMouseLeave={() => handleButtonHover("viewMore", false)}
          >
            {/* Wave Effect */}
            <div
              className="wave absolute w-full bg-[rgb(255,255,255,0.2)] left-0 bottom-0 transition-all duration-500 ease-in-out"
              style={{
                height: hoveredButtons["viewMore"] ? "100%" : "0%",
                zIndex: 0,
              }}
            >
              <div
                className="wave-before absolute w-full h-[22px] bottom-full left-0"
                style={{
                  backgroundImage: `url(${waveImageUrl})`,
                  backgroundSize: "contain",
                  animation: "wave 2s linear infinite",
                  zIndex: 0,
                }}
              />
            </div>
            <span className="relative z-10 text-lg font-medium">
              View More Blogs
            </span>
            <ChevronDown className="ml-2 relative z-10" size={20} />
          </button>
        </div>
      </div>

      {/* Add wave animation styles */}
      <style jsx>{`
        @keyframes wave {
          to {
            background-position-x: 118px;
          }
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Blogs;
