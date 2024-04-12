/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mycolor: "rgb(255, 69, 0)",
        co:"rgb(95, 70, 218)"
    },
    borderColor:{
      mycolor: "rgb(255, 69, 0)",
      co:"rgb(95, 70, 218)"
    },
    backgroundColor:{
      mycolor: "rgb(255, 69, 0)",
    }
    },
  },
  plugins: [],
}

