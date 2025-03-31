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
    console.log(formData);
  };

  return (
    <div className="min-h-screen  text-white pt-24 px-4 overflow-x-hidden">
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
              <a
                href="tel:+116615912047"
                className="hover:text-blue-400 transition-colors"
              >
                +1 16615912047
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-500 w-6 h-6" />
              <a
                href="mailto:info@calabriatechnology.com"
                className="hover:text-blue-400 transition-colors"
              >
                info@calabriatechnology.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-500 w-6 h-6" />
              <a
                href="https://www.google.com/maps?q=159+Wooster+St,+New+York,+NY+10012,+United+States"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                159 Wooster St, New York, NY 10012, United States
              </a>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.617910586249!2d-74.00193132397355!3d40.72642707139141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598e6b1d3315%3A0xdfe3eac582834c72!2s159%20Wooster%20St%2C%20New%20York%2C%20NY%2010012%2C%20USA!5e0!3m2!1sen!2slk!4v1743421204264!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            {/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
