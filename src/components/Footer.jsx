import React from "react";
import { Facebook, Youtube, X, Linkedin } from "lucide-react";
import LogoFooter from "../assets/logowhite.png"; // Update this import path

const Footer = () => {
  return (
    <footer className="bg-[#0A0A1A] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src={LogoFooter} alt="Logo" className="h-8 w-auto" />
          </div>
          <p className="text-gray-300 text-sm">
            Transform your software development process with our AI-powered
            platform. Streamline code generation, bug fixing, deployment, and
            collaboration for enhanced productivity and scalability.
          </p>
        </div>

        {/* Useful Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="grid grid-cols-2 lg:grid-cols-2 gap-4">
            <li>
              <a href="/" className="hover:text-blue-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-blue-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/PricingTable"
                className="hover:text-blue-400 transition-colors"
              >
                Pricing Table
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-blue-400 transition-colors">
                Blogs
              </a>
            </li>
            <li>
              <a
                href="/Terms"
                className="hover:text-blue-400 transition-colors"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe & Social */}
        <div className="space-y-4">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-4">
              Subscribe our newsletter
            </h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-[#1A1A2E] text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61575018712518"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.youtube.com/@CalabriaTechnology"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://x.com/CalabriaTech"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <X size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/calabriatechnology/"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
        <p>Copyright © 2024 Dataly. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
