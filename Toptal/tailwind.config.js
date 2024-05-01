/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgGray: '#d2d6e2',
      },
      boxShadow: {
        custom: '0px 8px 16px 0px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
