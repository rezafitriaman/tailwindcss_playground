module.exports = {
  purge: [
    './src/**/*.hbs',
    './src/**/*.ts',
    './src/**/*.scss',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        hotpink: {
          light: '#ff7ce5',
          DEFAULT: '#ff69b4',
          dark: '#ff16d1',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
