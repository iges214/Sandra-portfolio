/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xlNav: "1100px", // Custom breakpoint
      },
      colors: {
        deepNavy: "#06021D",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        circularFade: {
          "0%": {
            transform: "rotate(0deg) translateX(40px) rotate(0deg)",
            opacity: 0,
          },
          "25%": {
            opacity: 1,
          },
          "50%": {
            transform: "rotate(180deg) translateX(40px) rotate(-180deg)",
            opacity: 0.5,
          },
          "75%": {
            opacity: 1,
          },
          "100%": {
            transform: "rotate(360deg) translateX(40px) rotate(-360deg)",
            opacity: 0,
          },
        },

        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        pulseBg: {
          "0%, 100%": { backgroundColor: "#06021D" },
          "50%": { backgroundColor: "#09042a" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        fadeIn: "fadeIn 0.4s ease-in-out",
        pulseBg: "pulseBg 2.5s ease-in-out infinite",
        spinSlow: "spin 4s linear infinite",
        circularFade: "circularFade 6s linear infinite",
      },
    },
  },
  plugins: [],
};
