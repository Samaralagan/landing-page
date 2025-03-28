import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 overflow-x-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 max-w-6xl">
        {/* Contact Information Section */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-2xl border border-blue-500/30">
          <h2 className="text-3xl font-bold mb-6 text-blue-500">
            Contact Information
          </h2>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Phone className="text-blue-500 w-6 h-6" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-500 w-6 h-6" />
              <span>contact@yourcompany.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-500 w-6 h-6" />
              <span>123 Tech Lane, Innovation City, ST 12345</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="mt-8 flex space-x-6">
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-2xl border border-blue-500/30">
          <h2 className="text-3xl font-bold mb-6 text-blue-500">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black border border-blue-500/50 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black border border-blue-500/50 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full bg-black border border-blue-500/50 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto mt-8 max-w-6xl">
        <div className="bg-gray-900 p-4 rounded-lg border border-blue-500/30">
          <h2 className="text-3xl font-bold mb-4 text-blue-500 text-center">
            Our Location
          </h2>
          <div className="w-full h-96 overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.982146144674!2d-73.98823548468239!3d40.748817179278846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623861174688!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
