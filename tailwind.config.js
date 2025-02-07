const colors = require("./src/ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        gilroyBold: ["Gilroy-Bold"],
        gilroyLight: ["Gilroy-Light"],
        gilroyMedium: ["Gilroy-Medium"],
        gilroyRegular: ["Gilroy-Regular"],
        gilroySemibold: ["Gilroy-SemiBold"],
      },
      colors,
    },
  },
  plugins: [],
};
