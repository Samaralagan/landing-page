import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/PricingTable", label: "PricingTable" },
    { path: "/blog", label: "Blog" },
  ];

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const SignUpButton = ({ mobile }) => {
    return (
      <Link
        to="https://app.calabriatechnology.com/"
        className={`
          relative z-10 group
          bg-blue-900 text-white 
          px-4 py-2 
          text-sm font-bold 
          transition-all duration-500
          ${mobile ? "" : "ml-4"}
          ${
            mobile
              ? "rounded-[0.75rem_0rem_0.75rem_0rem]"
              : "rounded-[0.75rem_0rem_0.75rem_0rem]"
          }
          hover:rounded-[0rem_0.75rem_0rem_0.75rem]
          before:content-[''] 
          before:absolute 
          before:-inset-1 
          before:bg-blue-500 
          before:opacity-50 
          before:blur-xl 
          before:-z-10
          after:content-[''] 
          after:absolute 
          after:inset-0 
          after:border-2 
          after:border-blue-500 
          after:rounded-[inherit]
        `}
      >
        Sign Up
      </Link>
    );
  };

  return (
    <nav
      className={`
      mt-4 fixed top-0 left-0 right-0 z-50 flex justify-center
    `}
    >
      <div
        className={`
        w-10/12 transition-all duration-300 ease-in-out
        rounded-[3rem_0rem_3rem_0rem]
        ${
          isScrolled
            ? "bg-white/60 backdrop-blur-md shadow-md"
            : "bg-white/30 backdrop-blur-sm shadow-sm"
        }
      `}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Company Logo" className="h-8 w-auto" />
          </Link>

          {/* Hamburger Menu and Signup Button for Mobile and Tablet (1024px and below) */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 focus:outline-none font-bold"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <SignUpButton mobile={true} />
          </div>

          {/* Desktop Navigation (larger than 1024px) */}
          <div className="hidden lg:flex space-x-6 relative items-center">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {isActive(link.path) && (
                  <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <div
                      className="bg-blue-500"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "0.75rem 0rem 0.75rem 0rem",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    ></div>
                  </div>
                )}
                <Link
                  to={link.path}
                  className={`
                    relative z-10 transition-colors duration-300 pb-1 px-3 py-2 rounded-lg
                    ${
                      isActive(link.path)
                        ? "text-white font-bold text-lg"
                        : "text-white hover:text-gray-100 text-base font-bold"
                    }
                  `}
                >
                  <span className="relative">
                    {link.label}
                    {!isActive(link.path) && (
                      <span
                        className="
                          absolute left-0 -bottom-1 h-0.5 bg-blue-600
                          origin-left
                          w-0 group-hover:w-full
                          transition-all duration-300 ease-out
                        "
                      />
                    )}
                  </span>
                </Link>
              </div>
            ))}

            {/* Desktop Signup Button */}
            <SignUpButton mobile={false} />
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={toggleMenu}
                    className={`
                      block px-4 py-3 rounded-md text-base font-bold
                      ${
                        isActive(link.path)
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
