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
        sans: ["Inter", "system-ui", "sans-serif"], // Make Inter the default font
        display: ["Inter", "system-ui", "sans-serif"], // Can use variable weights for headers
      },
    },
  },
  plugins: [],
};
