/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ECF4F4",
        primary: "#22A699",
        secondary: "#F24C3D",
        black: "#011210",
        "dark-grey": "#082724",
        "medium-grey": "#18534D",
        "light-grey": "#588F8A",
      },
    },
  },
  plugins: [],
};
