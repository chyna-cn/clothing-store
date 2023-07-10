/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundColor:{
    'mustard' :'#D1A250' ,
    'black' : '#000000',
    'white' : "#FFFFFF",
    'skyblue' : "#87CEEB",
    'brown' : '#815538',

    },
    colors :{
      'mustard' :'#D1A250' ,
      'white' : '#FFFFFF',
      'black' : '#000000'

    },
    fontFamily:{
      poppins : ['poppins', 'sans-serif']
    },
    extend: {
      backgroundImage : {
        'banner' : "url('./components/images/banner.jpg')"
      }
    },
  },
  plugins: [],
}

