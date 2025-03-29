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
import { useState } from "react";
// import CookiePreferences from "./components/CookiePreferences";
import CookiePreferences from "./components/CookiePreferences";

function App() {
  const [showPreferences, setShowPreferences] = useState(false);

  return (
    <Router>
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

      {/* GDPR Cookie Banner */}
      <CookieConsent
        location="bottom"
        buttonText="Accept All"
        declineButtonText="Reject All"
        enableDeclineButton
        cookieName="userConsent"
        style={{ background: "#222", color: "#fff", padding: "15px" }}
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
