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
        'ul': { color: theme('colors.yellow.400') },
      })
    }),
    plugin(function({ addComponents, theme }) {
      const buttons = {
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
      }

      addComponents(buttons)
    })
  ],
}
