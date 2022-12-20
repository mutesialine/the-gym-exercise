/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#072140",
        yellow: "#fed702",
        lightgray: "#e8ecef",
        darkblue:"#072140",
        lightblue:"#3070b3"
      },
      maxWidth: {
        "8xl": "101rem", //1616
        main: "87.5rem", //1400px
      },
      spacing:{
        27.5:"6.9375rem",//111px
        32.25:"8.0625rem" //129px
      },
    fontSize:{
      large:"42px"
    }
    },
  },
  plugins: [],
};
