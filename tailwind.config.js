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
      }
    }
  },
  plugins: [],
}