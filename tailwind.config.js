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
      'circle-reverse': {
        '0%': {
          backgroundColor: '#DD3939',
          borderRadius: '50%',
          left: '-8.5rem',
          top: '13.75rem',
          height: '14.313rem',
          width: '9.3rem',
        },
        '50%': { borderRadius: '50%', top: '10rem' },
        '100%': {
          left: '-2.875rem',
          top: '8.5rem',
          height: '3.6rem',
          width: '30.8rem',
        },
      },
      star: {
        '0%': {
          top: '28rem',
          left: '-9rem',
          height: '5.625rem',
          opacity: 0.2,
        },
        '100%': {
          top: '2rem',
          left: '-6rem',
          height: '16.25rem',
          opacity: 1,
        },
      },
      'circle-to-star': {
        '0%': {
          backgroundColor: '#DD3939',
          borderRadius: '50%',
          left: '-8.5rem',
          top: '13.75rem',
          height: '11rem',
          width: '11rem',
        },
        '50%': { borderRadius: '50%' },
        '100%': {
          width: '9rem',
          borderRadius: '50%',
          top: '3rem',
          left: '-4rem',
          height: '9rem',
        },
      },
      'star-to-circle': {
        '0%': {
          top: '2rem',
          left: '-6rem',
          height: '16.25rem',
          opacity: 1,
        },
        '100%': {
          top: '20rem',
          left: '-5rem',
          height: '9.5rem',
          opacity: 0,
        },
      },
    },
    animation: {
      'dissolve-logo': 'dissolveLandingLogo 0.8s forwards',
      'text-drop': 'textDrop 1s ease-out 700ms forwards',
      rect: 'rect 0.8s forwards',
      circle: 'circle 0.6s forwards',
      'circle-reverse': 'circle-reverse 0.6s backwards',
      star: 'star 0.9s forwards',
      'circle-to-star': 'circle-to-star 1s backwards',
      'star-to-circle': 'star-to-circle 1s forwards',
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
