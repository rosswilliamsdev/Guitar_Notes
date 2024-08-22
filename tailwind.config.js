/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["Playfair SC", "serif"],
      },
      backgroundImage: {
        "index-bg": "url('src/assets/index_background.jpg')",
      },
    },
  },
  plugins: [],
};
