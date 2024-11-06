/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: '#140f1e'
      },
      fontFamily: {
        pixel: ['Pixel'],
        rubik: ['Rubik']
      }
    },
    screens: {
      sm: '320px', 
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}