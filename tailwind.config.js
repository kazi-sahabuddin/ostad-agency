/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "da-green-light": "#D7F5DC",
        "da-green": "#20B15A",
        "da-grey": "#8B8B8B",
        "da-orange": "#F55F1D",
        "da-grey-light": "#F8FFF9",
      },
    },
    fontFamily: {
      poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
