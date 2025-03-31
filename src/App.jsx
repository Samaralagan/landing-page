import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PricingTable from "./pages/PricingTable";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieConsent, { resetCookieConsentValue } from "react-cookie-consent";
import { useState, useEffect, useRef } from "react";
import CookiePreferences from "./components/CookiePreferences";

// Particles component for global background
const Particles = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Initialize particles
    const particleCount = 70;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(
          Math.random() * 100 + 155
        )}, 255, ${Math.random() * 0.4 + 0.1})`,
        speedX: Math.random() * 0.4 - 0.2,
        speedY: Math.random() * 0.4 - 0.2,
      });
    }

    particlesRef.current = particles;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

function App() {
  const [showPreferences, setShowPreferences] = useState(false);

  return (
    <Router>
      {/* Global particles background */}
      <Particles />

      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricingTable" element={<PricingTable />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </div>

      {/* GDPR Cookie Banner */}
      <CookieConsent
        location="bottom"
        buttonText="Accept All"
        declineButtonText="Reject All"
        enableDeclineButton
        cookieName="userConsent"
        style={{
          background: "#222",
          color: "#fff",
          padding: "15px",
          zIndex: 9999,
        }}
        buttonStyle={{
          background: "#00c896",
          color: "#fff",
          fontSize: "14px",
          marginRight: "10px",
        }}
        declineButtonStyle={{
          background: "#f44336",
          color: "#fff",
          fontSize: "14px",
        }}
        expires={365}
        onAccept={() => console.log("User accepted cookies")}
        onDecline={() => console.log("User declined cookies")}
      >
        <p>This website uses cookies to enhance your experience.</p>
        <button
          onClick={() => setShowPreferences(true)}
          style={{
            marginLeft: "10px",
            color: "#00c896",
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          Manage Preferences
        </button>
      </CookieConsent>

      {/* Cookie Preferences Modal */}
      {showPreferences && (
        <CookiePreferences onClose={() => setShowPreferences(false)} />
      )}
    </Router>
  );
}

export default App;
