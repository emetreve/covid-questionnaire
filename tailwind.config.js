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
        '0%': { top: '-6rem', opacity: 0.5 },
        '50%': { top: '-6rem', opacity: 0.7 },
        '75%': { top: '-6rem', opacity: 0.9 },
        '100%': { top: 0, opacity: 1 },
      },
      rect: {
        '0%': {
          top: '10rem',
          left: '-4.375rem',
          height: '5rem',
          width: '2.1875rem',
          backgroundColor: 'rgba(214, 209, 110, 0.2)',
        },
        '25%': {
          height: '5rem',
          backgroundColor: 'rgba(214, 209, 110, 0.4)',
        },
        '75%': {
          height: '5rem',
          backgroundColor: 'rgba(214, 209, 110, 0.8)',
        },
        '100%': {
          top: '8.75rem',
          left: '-3.75rem',
          width: '38.75rem',
          height: '5rem',
          backgroundColor: '#D6D16E',
        },
      },
      circle: {
        '0%': {
          left: '-1.875rem',
          top: '12.5rem',
          height: '4.688rem',
          width: '38.875rem',
        },
        '50%': { borderRadius: '50%', top: '13rem' },
        '100%': {
          backgroundColor: '#DD3939',
          borderRadius: '50%',
          left: '-7.5rem',
          top: '13.75rem',
          height: '14.313rem',
          width: '14.313rem',
        },
      },
      star: {
        '0%': {
          top: '28rem',
          left: '-9rem',
          height: '90px',
          opacity: 0.2,
        },
        '50%': {
          top: '16rem',
          left: '-7rem',
          height: '150px',
          opacity: 0.8,
        },
        '100%': {
          top: '2rem',
          left: '-6rem',
          height: '260px',
          opacity: 1,
        },
      },
    },
    animation: {
      'dissolve-logo': 'dissolveLandingLogo 0.8s forwards',
      'text-drop': 'textDrop 1s ease-out 700ms forwards',
      rect: 'rect 0.8s forwards',
      circle: 'circle 0.6s forwards',
      star: 'star 0.9s forwards',
    },

    fontFamily: {
      BpgArial: ['BpgArial', 'sans-serif'],
      anonymousPro: ['Anonymous Pro'],
    },
    extend: {
      colors: {
        'granular-white': '#FAF9F6',
        black: '#232323',
        'yellow-eyes': '#D6D16E',
        error: '#F15524',
      },
    },
  },
  plugins: [],
};
export default config;
