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
        'hotpink': {
          light: '#ff7ce5',
          DEFAULT: '#ff69b4',
          dark: '#ff16d1',
        },
        'primary': {
          'lightest': '#90b8c2',
          'lighter': '#78a9b4',
          'DEFAULT':'#6da2ae'
        },
        'secondary': '#1f292d',
        'tertiary': '#4f6471',
        'gray': {
          'lightest': '#F5F5F5',
          'lighter': '#d4d4d8',
          'DEFAULT': '#71717a',
          'darker': '#606060',
          'darkest': '#979797'
        },
        'orange': {
          'lighter': '#d46b29',
          'DEAFULT': '#c7703a'
        },
        'white': {
          'DEFAULT': '#ffffff',
          'darker': '#f4f4f4'
        },
        'black': '#000000',
        'red': {
          'DEFAULT': '#ef4444'
        },
        'green': {
          'DEFAULT': '#22c55e',
          'brighter': '#12a100'
        },
        'yellow': {
          'DEFAULT': '#eab308'
        }
      },
      maxHeight: {
        infinite: '9999px',
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
    extend: {
      maxHeight: ['group-hover', 'hover'],
      visibility: ['group-hover', 'hover'],
    }
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    plugin(({addUtilities}) => {
      const newUtilities = {
        ".empty-content": {
          content: "''",
        },
        ".fixed": {
          position: "fixed"
        },
        ".block": {
          display: "block"
        },
        ".transition-all": {
          "transition-property": 'all',
          "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
          "transition-duration": "150ms"
        },
        ".delay-75": {
          "transition-delay": "75ms"
        },
        ".delay-300": {
          "transition-delay": "300ms"
        },
        ".duration-75": {
          "transition-duration": "75ms"
        },
        ".duration-300": {
          "transition-duration": "300ms"
        },
        ".z-10": {
          zIndex: "10",
        },
        ".pointer-events-none": {
          pointerEvents: "none"
        },
        ".absolute": {
          position: "absolute"
        },
        ".bg-opacity-5": {
        "--tw-bg-opacity": "0.05"
        },
        ".opacity-0": {
          opacity: 0
        },
        ".opacity-100": {
          opacity: 100
        },
        ".top-0": {
          top: "0px"
        },
        ".left-0": {
          left: "0px"
        },
        ".right-0": {
          right: "0px"
        },
        ".bottom-0": {
          bottom: "0px"
        },
        ".w-full": {
          width: "100%"
        },
        ".h-full": {
          height: "100%"
        },
        ".bg-white": {
          "--tw-bg-opacity": "1",
          "background-color": "rgba(255, 255, 255, var(--tw-bg-opacity));"
        },
        ".bg-gray-50": {
        "--tw-bg-opacity": "1",
        "background-color": "rgba(249, 250, 251, var(--tw-bg-opacity))"
        },
        ".bg-red-50": {
          "--tw-bg-opacity": "1",
          "background-color": "rgba(254, 242, 242, var(--tw-bg-opacity))"
        },
        ".bg-black-trans": {
        "--tw-bg-opacity": "0.3",
        "background-color": "rgba(0, 0, 0, var(--tw-bg-opacity))"
        }
      }
      addUtilities(newUtilities, {
        variants: ["before", "after"],
      });
    }),
    plugin(function({ addBase, theme }) {
/*      addBase({
        'h1': {
          fontSize: theme('fontSize.2xl'),
          color: theme('colors.red.400')
        },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })*/
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
