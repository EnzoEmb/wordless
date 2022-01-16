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
        'flip-to-gray': 'flipToGray .75s ease-in-out 1 forwards',
        'flip-to-green': 'flipToGreen .75s ease-in-out 1 forwards',
        'flip-to-yellow': 'flipToYellow .75s ease-in-out 1 forwards',
      },
      keyframes: {
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
            backgroundColor: '#FBBF24',
            borderColor: '#FBBF24',
            color: 'white',
          },
          '100%': {
            transform: 'rotateX(0deg)',
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
            backgroundColor: '#34D399',
            borderColor: '#34D399',
            color: 'white',
          },
          '100%': {
            transform: 'rotateX(0deg)',
          },
        },
      }
    }
  },
  plugins: [],
}