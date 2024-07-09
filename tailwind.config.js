/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'sans-serif'],
      },
      fontSize: {
        xs: ['10px', '15px'],
        sm: ['12px', '18px'],
        base: ['14px', '20px'],
        mid: ['18px', '25px'],
      },
      colors: {
        'light-gray': '#A0AEC0',
      },
      width: {
        '100': '1600px',
        '80': '730px',
        '60': '261px',
        '55': '245px',
        '50': '227px',
        '20': '90px',
      },
      lineHeight: {
        '0': '5px',
      },
    },
  },
  plugins: [],
}

