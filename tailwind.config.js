/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
"./src/**/*.{html,js,jsx}"  ],
  theme: {
    extend: {
      colors: {
        blue: "#008AFF",
        "blue-50": "#5296CF",
        "blue-900": "#101318",
        "blue-100": "rgba(16, 19, 24, 1)",
        "blue-200": "rgba(16, 19, 24, 0)",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
        tourney: ["Tourney", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1400px",
    },
  },
  plugins: [],
}

