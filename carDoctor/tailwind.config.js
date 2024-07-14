
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors:{
        primaryColor:"#FF3811",
        secondaryColor:"#151515",
        darkColor: "#737373"
        
      }
    },
  },
  plugins: [require('daisyui')],
}