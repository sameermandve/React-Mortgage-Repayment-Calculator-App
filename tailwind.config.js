/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lime: "hsl(61, 70%, 52%)",
      alphaLime: "hsla(61, 70%, 52%,0.2)",
      errorRed: "hsl(4, 69%, 50%)",
      white: "hsl(0, 0%, 100%)",
      customSlate: {
        100: "hsl(202, 86%, 94%)",
        300: "hsl(203, 41%, 72%)",
        500: "hsl(200, 26%, 54%)",
        700: "hsl(200, 24%, 40%)",
        900: "hsl(202, 55%, 16%)",
      },
      resultBg: "#0E2431",
      outputSectionBG: "#133040",
    },
    extend: {
      fontFamily: {
        plusSans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
