module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'key': '0 3px 0 0 #e5e7eb',
      },
      animation: {
        'flip-to-gray': 'flipToGray .75s ease-in-out 0s 1 forwards running',
        'flip-to-green': 'flipToGreen .75s ease-in-out 0s 1 forwards running',
        'flip-to-yellow': 'flipToYellow .75s ease-in-out 0s 1 forwards running',
        'dialog-in': 'modalIn .3s ease-out',
        'fade-in': 'fadeIn .2s ease-out',
        'input-letter': 'inputLetter .2s ease-out',
      },
      keyframes: {
        inputLetter: {
          '0%': {
            transform: 'scale(1.2)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        modalIn: {
          '0%': {
            transformOrigin: 'center',
            transform: 'scale(0.9)',
            opacity: '0',
          },
          '100%': {
            transformOrigin: 'center',
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        flipToGray: {
          '0%': {
            transform: 'rotateX(0deg)',
            backgroundColor: 'white',
            borderColor: '#e5e7eb',
            color: 'black',
          },
          '50%': {
            transform: 'rotateX(-90deg)',
            backgroundColor: 'white',
            borderColor: '#e5e7eb',
            color: 'black',
          },
          '51%': {
            backgroundColor: '#9CA3AF',
            borderColor: '#9CA3AF',
            color: 'white',
          },
          '100%': {
            transform: 'rotateX(0deg)',
            backgroundColor: '#9CA3AF',
            borderColor: '#9CA3AF',
            color: 'white',
          },
        },
        flipToGreen: {
          '0%': {
            transform: 'rotateX(0deg)',
            backgroundColor: 'white',
            borderColor: '#e5e7eb',
            color: 'black',
          },
          '50%': {
            transform: 'rotateX(-90deg)',
            backgroundColor: 'white',
            borderColor: '#e5e7eb',
            color: 'black',
          },
          '51%': {
            backgroundColor: '#34D399',
            borderColor: '#34D399',
            color: 'white',
          },
          '100%': {
            transform: 'rotateX(0deg)',
            backgroundColor: '#34D399',
            borderColor: '#34D399',
            color: 'white',
          },
        },
        flipToYellow: {
          '0%': {
            transform: 'rotateX(0deg)',
            backgroundColor: 'white',
            borderColor: '#e5e7eb',
            color: 'black',
          },
          '50%': {
            transform: 'rotateX(-90deg)',
            backgroundColor: 'white',
            borderColor: '#e5e7eb',
            color: 'black',
          },
          '51%': {
            backgroundColor: '#FBBF24',
            borderColor: '#FBBF24',
            color: 'white',
          },
          '100%': {
            transform: 'rotateX(0deg)',
            backgroundColor: '#FBBF24',
            borderColor: '#FBBF24',
            color: 'white',
          },
        },
      }
    }
  },
  plugins: [],
}