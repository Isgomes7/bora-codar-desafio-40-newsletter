/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html, js}'],
  theme: {
    extend: {
      spacing: {
        'small': '5px',
        'gap': '10px',
        'trim-small': '15px',
        'box-spacing': '20px',
        'trim': '30px',
        'large': '50px',
        'big': '100px',
        'x-big': '150px',
      },
      colors: {
        'black-01' : '#09090A',
        'black-02' : '#202024',
        'gray-01' : '#C4C4CC',
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}