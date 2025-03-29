import React, { useState } from "react";
import {
  getCookieConsentValue,
  resetCookieConsentValue,
} from "react-cookie-consent";

const CookiePreferences = ({ onClose }) => {
  const [preferences, setPreferences] = useState({
    analytics: getCookieConsentValue("analytics") === "true",
    functional: getCookieConsentValue("functional") === "true",
  });

  const handleSave = () => {
    document.cookie = `analytics=${preferences.analytics}; path=/; max-age=${
      365 * 24 * 60 * 60
    }`;
    document.cookie = `functional=${preferences.functional}; path=/; max-age=${
      365 * 24 * 60 * 60
    }`;
    onClose();
  };

  const handleRejectAll = () => {
    resetCookieConsentValue();
    document.cookie = "analytics=false; path=/; max-age=0";
    document.cookie = "functional=false; path=/; max-age=0";
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-80 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96 text-center">
        <h2 className="text-lg font-bold mb-4">Manage Cookie Preferences</h2>

        <label className="block my-2">
          <input
            type="checkbox"
            checked={preferences.analytics}
            onChange={() =>
              setPreferences({
                ...preferences,
                analytics: !preferences.analytics,
              })
            }
          />{" "}
          Enable Analytics Cookies
        </label>

        <label className="block my-2">
          <input
            type="checkbox"
            checked={preferences.functional}
            onChange={() =>
              setPreferences({
                ...preferences,
                functional: !preferences.functional,
              })
            }
          />{" "}
          Enable Functional Cookies
        </label>

        <div className="mt-4">
          <button
            onClick={handleSave}
            className="bg-green-500 px-4 py-2 rounded text-white mx-2"
          >
            Save Preferences
          </button>
          <button
            onClick={handleRejectAll}
            className="bg-red-500 px-4 py-2 rounded text-white mx-2"
          >
            Reject All
          </button>
        </div>

        <button
          onClick={onClose}
          className="block mt-4 text-gray-600 underline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CookiePreferences;
