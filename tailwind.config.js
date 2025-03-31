/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d1117",
        secondary: "#161b22",
        accent: "#58a6ff",
      },
      fontFamily: {
        sans: ["Orbitron", "sans-serif"], // Make Orbitron the default sans font
        orbitron: ["Orbitron", "sans-serif"], // Also available as a specific font class
      },
    },
  },
  plugins: [],
};
