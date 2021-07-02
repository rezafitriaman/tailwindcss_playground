const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.hbs',
      './src/**/*.{js,jsx,ts,tsx,vue}',
      './src/**/*.{css,scss}',
    ],
  },
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
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': {
          fontSize: theme('fontSize.2xl'),
          color: theme('colors.red.400')
        },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    }),
    plugin(function({ addComponents, theme }) {
      const basicStyle = {
        /*'.header-brand': {
          fontWeight: `${theme('fontWeight.bold')}`,
          color: theme('colors.white'),
          fontSize: theme('fontSize.xs'),
          '@media (min-width: 768px)': {
            fontSize: theme('fontSize.base'),
          }
        },*/
        '.btn': {
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          fontWeight: `${theme('fontWeight.semibold')}`,
          boxShadow: `${theme('boxShadow.md')}`,
        },
        '.btn-pink': {
          color: theme('colors.white'),
          backgroundColor: theme('colors.pink.400'),
          '&:hover': {
            backgroundColor: theme('colors.hotpink.dark')
          },
        },
        '.btn-red': {
          color: theme('colors.white'),
          backgroundColor: theme('colors.red.400'),
          '&:hover': {
            backgroundColor: theme('colors.red.900')
          },
        },
      }
      addComponents(basicStyle)
    })
  ],
}
