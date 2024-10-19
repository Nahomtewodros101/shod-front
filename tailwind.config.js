/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Arima: ['"Arima"', 'sans-serif'], 
      },
      colors: {
        mybg: "#ada6a6",
        selectionBg: "#ffeb3b",
        selectionText: "#000",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        "::selection": {
          "background-color": "#ffeb3b",
          color: "#000",
        },
      });
    },
  ],
};
