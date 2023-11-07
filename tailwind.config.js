/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        title: "url('../assets/images/hero/img-green.svg')",
      },
      maxWidth: {
        base: "92.5rem",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        28: "1.75rem",
        35: "2.1875rem",
        40: "2.5rem",
        42: "2.625rem",
      },
      colors: {
        brand: {
           lightgreen:'#13A54D',
           solidgreen:'#0C4A25',
           normalgreen:'#006D2C'
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
