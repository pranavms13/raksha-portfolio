module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      70: '70vh',
    },
    extend: {},
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
      black: '#f7f7f7',
      gray: '#f7f7f7',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
