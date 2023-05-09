/** @type {import('tailwindcss').Config} */

const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    keyframes: {
      dissolveLandingLogo: {
        '0%': { transform: 'scale(100)' },
        '100%': { transform: 'scale(1)' },
      },
      textDrop: {
        '0%': { top: '-80px', opacity: 0.5 },
        '50%': { top: '-80px', opacity: 0.7 },
        '75%': { top: '-80px', opacity: 0.9 },
        '100%': { top: 0, opacity: 1 },
      },
    },
    animation: {
      'dissolve-logo': 'dissolveLandingLogo 0.7s forwards',
      'text-drop': 'textDrop 1s forwards',
    },
    fontFamily: {
      BpgArial: ['BpgArial', 'sans-serif'],
    },
    extend: {
      colors: {
        'granular-white': '#FAF9F6',
      },
    },
  },
  plugins: [],
};
export default config;
