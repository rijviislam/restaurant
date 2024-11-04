/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      dropShadow: {
        'custom': '0px 7px 16px rgba(0, 0, 0, 0.10)',
      }
      
    },
  },
  plugins: [require("daisyui")],
};
