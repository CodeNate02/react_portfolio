/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'space-landscape':"url('assets/bg/bg-landscape.jpg')",
        'space-portrait': "url('assets/bg/bg-portrait.jpg')",
        
      },
      fontFamily:{
        tmrw:['"Tomorrow"','sans-serif'],
        kumbh:['"Kumbh Sans"','sans-serif'],
        raleway:['"Raleway"','sans-serif']
      },
      colors:{
        blue:{
          a:"#4B8CFB",
          b:"#005CFA",
          c:"#0049C7",
          d:"#25447A",
          e:"#001F54"
        }
      }
    },
  },
  plugins: [],
}
