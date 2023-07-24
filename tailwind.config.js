/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4070F4",
        secondary: "#0E2431",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        header: "3rem",
        body: ["3.5rem", "3.5rem", "2rem", "2rem"],
        h2: ["2rem", "2rem", "1.25rem", "1.25rem"],
        normal: ["1rem", "1rem", "0.938rem", "0.938rem"],
      },
      fontWeight: {
        default: "600",
      },
      margin: {
        mb1: "0.5rem",
        mb2: "1rem",
        mb3: "1.5rem",
        mb4: "2rem",
        mb5: "2.5rem",
        mb6: "3rem",
      },
      zIndex: {
        back: -10,
        normal: 1,
        tooltip: 10,
        fixed: 100,
      },
    },
  },
  plugins: [],
};
