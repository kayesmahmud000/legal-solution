/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily:{
            poppins:['Poppins','sans-serif'],
            EBGaramond:['EB Garamond', 'serif'],
        },
        color:{
            btn_custom:'#B68C5A',
        },
      },
    },
    plugins: [],
  }