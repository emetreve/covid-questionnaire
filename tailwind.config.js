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
          width: '17rem',
          borderRadius: '50%',
          top: '1rem',
          left: '-8rem',
          height: '17rem',
        },
      },
      'circle-from-star': {
        '100%': {
          backgroundColor: '#DD3939',
          borderRadius: '50%',
          left: '-7.5rem',
          top: '13.75rem',
          height: '14.313rem',
          width: '14.313rem',
        },
        '50%': { borderRadius: '50%' },
        '0%': {
          width: '11rem',
          borderRadius: '50%',
          top: '1rem',
          left: '-3rem',
          height: '11rem',
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
      heart: {
        '0%': {
          top: '2rem',
          left: '10rem',
          height: '5.25rem',
          opacity: 0.2,
        },
        '100%': {
          top: '8rem',
          left: '18rem',
          height: '11.25rem',
          opacity: 1,
        },
      },
      'star-to-heart': {
        '0%': {
          top: '0rem',
          left: '11rem',
          height: '16.25rem',
          opacity: 1,
        },
        '50%': {
          opacity: ' 0.6',
        },
        '100%': {
          top: '13rem',
          left: '24rem',
          height: '1.625rem',
          opacity: 0,
        },
      },
      'star-back': {
        '0%': {
          top: '13rem',
          left: '6rem',
          height: '5.25rem',
          opacity: 0.2,
        },
        '100%': {
          top: '2rem',
          left: '-6rem',
          height: '16.25rem',
          opacity: 1,
        },
      },
      'heart-to-star': {
        '100%': {
          top: '1rem',
          left: '-8rem',
          height: '15rem',
          opacity: 0,
        },
        '0%': {
          top: '12rem',
          left: '10rem',
          height: '11.25rem',
          opacity: 1,
        },
      },
      'fade-in': {
        '0%': {
          opacity: 0,
        },
        '100%': {
          opacity: 1,
        },
      },
      'heart-zoom': {
        '0%': {
          top: '25rem',
          left: '84rem',
        },
        '100%': {
          transform: 'scale(25)',
          top: '40rem',
          left: '20rem',
        },
      },
      'thank-you-fade-in': {
        '0%': {
          opacity: 0,
        },

        '25%': {
          opacity: 0,
        },
        '75%': {
          opacity: 0,
        },
        '85%': {
          opacity: 0.5,
        },
        '100%': {
          opacity: 1,
        },
      },
      'sparkle-top': {
        '0%': {
          opacity: 0,
        },

        '25%': {
          opacity: 0,
        },
        '75%': {
          opacity: 0,
          top: '30rem',
          left: '50rem',
        },
        '85%': {
          opacity: 0.5,
        },
        '100%': {
          opacity: 1,
          top: '27rem',
          left: '45rem',
        },
      },
      'sparkle-bottom': {
        '0%': {
          opacity: 0,
        },

        '25%': {
          opacity: 0,
        },
        '75%': {
          opacity: 0,
          top: '35rem',
          right: '52rem',
        },
        '85%': {
          opacity: 0.5,
        },
        '100%': {
          opacity: 1,
          top: '37rem',
          right: '49rem',
        },
      },
      'heart-color': {
        '0%': {
          fill: '#F39494',
        },
        '100%': {
          fill: '#232323',
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
      heart: 'heart 0.9s forwards',
      'star-to-heart': 'star-to-heart 1s forwards',
      'star-back': 'star-back 1s forwards',
      'heart-to-star': 'heart-to-star 1s forwards',
      'fade-in': 'fade-in 0.7s forwards',
      'heart-zoom': 'heart-zoom  2s forwards',
      'thank-you-fade-in': 'thank-you-fade-in 1.9s forwards',
      'sparkle-top': 'sparkle-top 2.5s forwards',
      'sparkle-bottom': 'sparkle-bottom 2.5s forwards',
      'circle-from-star': 'circle-from-star 1s forwards',
      'heart-color': 'heart-color 1.5s forwards',
    },

    fontFamily: {
      BpgArial: ['BpgArial', 'sans-serif'],
      anonymousPro: ['Anonymous Pro'],
      'helvetica-cap': ['helvetica-cap'],
      'helvetica-bold': ['helvetica-bold'],
    },
    extend: {
      colors: {
        'granular-white': '#FAF9F6',
        black: '#232323',
        'yellow-eyes': '#D6D16E',
        error: '#F15524',
        turquoise: '#208298',
        gray: '#232323',
        'gray-input': 'rgba(35, 35, 35, 0.7)',
      },
    },
  },
  plugins: [],
};
export default config;
