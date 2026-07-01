/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0F766E',
        secondary: '#14B8A6',
        accent: '#22C55E',
        warning: '#F59E0B',
        background: '#F8FAFC',
        darkText: '#0F172A',
        grayText: '#64748B'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
};
