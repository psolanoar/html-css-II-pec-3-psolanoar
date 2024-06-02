/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'dark-brown': '#78350f',
      },
      spacing: {
        '300px': '300px',
      },
      padding: {
        '5': '5%',
        '20': '20%',
      },
      fontSize: {
        s: ['14px'],
        m: ['16px'],
        l: ['22px'],
        xl: ['26px'],
        xxl: ['30px'],
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

