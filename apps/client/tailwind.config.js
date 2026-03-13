// tailwind.config.js
module.exports = {
  darkMode: "class", // ← system default
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "450px",
        tablet: "991px",
      },
      fontFamily: {
        satisfy: ["Satisfy", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
