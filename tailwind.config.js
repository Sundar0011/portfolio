/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        rubikdirt:['Rubik Dirt','system-ui'] ,
        audiowide:["Audiowide",'serif'],
        prosto:["Prosto One",'serif'],
      },
      keyframes: {
        slideRL: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideBT: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideLR: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideML: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideMR: {
          "0%": { transform: "translateX(-50%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideTB: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideRL: "slideRL 1.5s ease-in-out forwards",
        slideBT: "slideBT 1.5s ease-in-out forwards",
        slideLR: "slideLR 1.5s ease-in-out forwards",
        slideML: "slideML 1.5s ease-in-out forwards",
        slideMR: "slideMR 1.5s ease-in-out forwards",
        slideTB: "slideTB 1.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
