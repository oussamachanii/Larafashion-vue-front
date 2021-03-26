module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        current: {
          // dark: "#BE123C",
          // DEFAULT: "#E11D48",
          dark: "#171717",
          DEFAULT: "#171717",
          // DEFAULT: "#373033",
          // dark: "#171717",
          light: "#373033",
        },
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // require("@tailwindcss/forms"),
  ],
};
