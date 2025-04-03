import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Youtube,
  X,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    error: null,
  });

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set submitting state
    setStatus({ submitting: true, success: null, error: null });

    // Get environment variables
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Validate that we have all required environment variables
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        submitting: false,
        success: null,
        error:
          "Missing EmailJS configuration. Please check your environment variables.",
      });
      return;
    }

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );

      if (result.text === "OK") {
        // Reset form on success
        setFormData({ name: "", email: "", message: "" });
        setStatus({
          submitting: false,
          success: "Your message has been sent successfully!",
          error: null,
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending form:", error);
      setStatus({
        submitting: false,
        success: null,
        error: error.message || "An unexpected error occurred",
      });
    }
  };

  return (
    <div className="min-h-screen text-white pt-32 px-4 overflow-x-hidden">
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
            <a
              href="https://www.facebook.com/profile.php?id=61575018712518"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-8 h-8" />
            </a>
            <a
              href="https://www.youtube.com/@CalabriaTechnology"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-8 h-8" />
            </a>
            <a
              href="https://x.com/CalabriaTech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
              aria-label="X (Twitter)"
            >
              <X className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/company/calabriatechnology/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-2xl border border-blue-500/30">
          <h2 className="text-3xl font-bold mb-6 text-blue-500">
            Send Us a Message
          </h2>

          {status.success && (
            <div className="mb-4 p-3 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
              {status.success}
            </div>
          )}

          {status.error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-400">
              {status.error}
            </div>
          )}

          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
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
              disabled={status.submitting}
              className={`w-full bg-blue-500 text-white py-3 rounded-lg transition-colors ${
                status.submitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-blue-600"
              }`}
            >
              {status.submitting ? "Sending..." : "Send Message"}
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
              title="Calabria Technology Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
