const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        lightBlue: colors.sky,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
