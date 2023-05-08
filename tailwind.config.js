/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        BpgArial: ['BpgArial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
