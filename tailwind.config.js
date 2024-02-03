/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
"./src/**/*.{html,js,jsx}"  ],
  theme: {
    extend: {
      colors: {
        blue: "#008AFF",
        yellow: "#FDCC49",
        "dark-grey": "#757575",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
        tourney: ["Tourney", "sans-serif"],
      },
      content: {
        fluterdevtext: "url(./assets/FlutterDeveloperText.png)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

