import React, { useState } from "react";
import { ChevronRight, Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [hoveredBlog, setHoveredBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "The Future of Event Management",
      author: "Sarah Johnson",
      date: "March 15, 2025",
      excerpt:
        "Explore the cutting-edge technologies transforming the event management landscape...",
      image: "/api/placeholder/400/250",
      content: `Event management is undergoing a revolutionary transformation driven by technological innovations. Artificial intelligence, virtual reality, and data analytics are reshaping how we plan, execute, and experience events.

From AI-powered personalization to immersive virtual experiences, the future of event management is about creating more engaging, intelligent, and adaptive event solutions that connect people in unprecedented ways.

Key trends include:
- AI-driven attendee matching
- Real-time sentiment analysis
- Hybrid event platforms
- Sustainable event technologies`,
    },
    {
      id: 2,
      title: "Sustainable Event Practices",
      author: "Michael Chen",
      date: "February 28, 2025",
      excerpt:
        "Discover innovative strategies for creating eco-friendly and sustainable events...",
      image: "/api/placeholder/400/250",
      content: `Sustainability is no longer a buzzword but a critical consideration in event management. Modern event planners are adopting innovative approaches to reduce environmental impact while delivering exceptional experiences.

Key sustainable event strategies include:
- Zero-waste catering
- Digital-first approach
- Carbon offset programs
- Sustainable venue selection
- Eco-friendly transportation options`,
    },
    {
      id: 3,
      title: "Networking in the Digital Age",
      author: "Emma Rodriguez",
      date: "January 20, 2025",
      excerpt:
        "Revolutionize your event networking with advanced digital connection tools...",
      image: "/api/placeholder/400/250",
      content: `Digital networking has transformed how professionals connect during events. Advanced platforms now offer AI-powered matchmaking, real-time communication tools, and seamless virtual interaction capabilities.

Innovative networking features:
- AI-driven connection recommendations
- Interactive digital business cards
- Virtual meetup rooms
- Real-time skill and interest matching`,
    },
    {
      id: 4,
      title: "Hybrid Event Strategies",
      author: "David Kim",
      date: "December 10, 2024",
      excerpt:
        "Blending physical and virtual experiences for maximum event engagement...",
      image: "/api/placeholder/400/250",
      content: `Hybrid events have emerged as a powerful model, combining in-person and virtual experiences. This approach offers unprecedented flexibility, accessibility, and engagement for event participants.

Hybrid event advantages:
- Global audience reach
- Flexible participation options
- Enhanced content accessibility
- Cost-effective scaling
- Improved data collection and analytics`,
    },
  ];

  const renderBlogCard = (blog) => (
    <div
      key={blog.id}
      className="perspective-1000 h-[450px] group 
        max-md:h-auto max-md:perspective-none 
        max-md:bg-white/10 max-md:rounded-xl max-md:overflow-hidden"
      onMouseEnter={() => setHoveredBlog(blog.id)}
      onMouseLeave={() => setHoveredBlog(null)}
    >
      {/* Desktop Flip Card Effect (Large Screens) */}
      <div
        className={`relative w-full h-full transition-all duration-700 ease-in-out transform-style-3d 
        max-md:hidden
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
              onClick={() => setSelectedBlog(blog)}
              className="w-full bg-[rgb(59,130,246)] text-white py-2 rounded-[0.75rem_0rem_0.75rem_0rem] flex items-center justify-center hover:bg-blue-600 transition"
            >
              Read More <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile and Tablet Layout (Small and Medium Screens) */}
      <div
        className="hidden max-md:block cursor-pointer"
        onClick={() => setSelectedBlog(blog)}
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
    </div>
  );

  const renderBlogContent = (blog) => (
    <div className="bg-[#1E293B] rounded-xl overflow-hidden max-w-4xl mx-auto">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-96 object-cover"
      />
      <div className="p-6 md:p-8">
        <button
          onClick={() => setSelectedBlog(null)}
          className="mb-4 flex items-center text-[rgb(59,130,246)] hover:text-blue-400"
        >
          <ChevronRight className="mr-2" /> Back to Blog List
        </button>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {blog.title}
        </h2>
        <div className="flex flex-col md:flex-row items-start md:items-center mb-6 text-gray-400 space-y-2 md:space-y-0">
          <div className="flex items-center mr-0 md:mr-6">
            <User size={20} className="mr-2" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={20} className="mr-2" />
            <span>{blog.date}</span>
          </div>
        </div>
        <div className="text-gray-300 leading-relaxed space-y-4">
          {blog.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0F172A] py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          {selectedBlog ? "Blog Details" : "Our Latest Blogs"}
        </h1>

        {selectedBlog ? (
          renderBlogContent(selectedBlog)
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogs.map(renderBlogCard)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
