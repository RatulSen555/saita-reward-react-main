/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#000000",         
        highlightGold: "#FFD700",   // Buttons, Highlights
        cryptoBlue: "#3B82F6",      // Links, Secondary Buttons
        darkGreen: "#0D9488",       // Success color
        textMain: "#FFFFFF",        // Main Text
        textSecondary: "#A0A0A0",   // Light Gray Text

        // ✅ NEW Custom Color
        saitaDark: "#0d0d0d",
      },
      boxShadow: {
        card: "0 4px 12px rgba(0,0,0,0.15)",
      },
      borderRadius: {
        primary: "20px",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
  },
  plugins: [],
};
