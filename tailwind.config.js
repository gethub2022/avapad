const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  // important: '#__next',
  // darkMode: true,
  mode: 'jit',
  // future: {
  //   purgeLayersByDefault: true,
  //   applyComplexClasses: true,
  // },
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      linearBorderGradients: {
        directions: {
          tr: 'to top right',
          r: 'to right',
        },
        colors: {
          'blue-pink': ['#d65859', '#FFF'],
          'pink-red-light-brown': ['#FE5A75', '#FFF'],
        },
        background: {
          'dark-1000': '#000',
          'dark-900': '#e63f40',
          'dark-800': '#db4d4e',
          'dark-pink-red': '#4e3034',
        },
        border: {
          1: '1px',
          2: '2px',
          3: '3px',
          4: '4px',
        },
      },
      colors: {
        purple: '#a755dd',
        blue: '#FFFF00',
        pink: '#74fbee',
        green: '#7cff6b',
        red: '#ff3838',
        yellow: '#3a94a3',

        'opaque-blue': '#3a94a3',
        'opaque-pink': '#213a3e',
        'pink-red': '#FE5A75',
        'light-brown': '#213a3e',
        'light-yellow': '#FFD166',
        'cyan-blue': '#FFD166',
        'dark-pink': '#221825',
        'dark-blue': '#0F182A',
        'dark-1000': '#000',
        'dark-900': '#e63f40',
        'dark-850': '#db4d4e',
        'dark-800': '#d65859',
        'dark-700': '#d65859',
        'dark-600': '#d65859',
        'dark-500': '#d65859',
        'low-emphesis': '#575757',
        primary: '#e63f40',
        secondary: '#FFF',
        'high-emphesis': '#E3E3E3',
      },
      lineHeight: {
        '48px': '48px',
      },
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        hero: [
          '48px',
          {
            letterSpacing: '-0.02em;',
            lineHeight: '96px',
            fontWeight: 700,
          },
        ],
      },
      borderRadius: {
        none: '0',
        px: '1px',
        DEFAULT: '0.625rem',
      },
      boxShadow: {
        swap: '0px 50px 250px -47px rgba(39, 176, 230, 0.29)',
        liquidity: '0px 50px 250px -47px rgba(123, 97, 255, 0.23)',
        'pink-glow': '0px 57px 90px -47px rgba(250, 82, 160, 0.15)',
        'blue-glow': '0px 57px 90px -47px rgba(39, 176, 230, 0.17)',
        'pink-glow-hovered': '0px 57px 90px -47px rgba(250, 82, 160, 0.30)',
        'blue-glow-hovered': '0px 57px 90px -47px rgba(39, 176, 230, 0.34)',
      },
      ringWidth: {
        DEFAULT: '1px',
      },
      padding: {
        px: '1px',
        '3px': '3px',
      },
      minHeight: {
        empty: '128px',
        cardContent: '230px',
        fitContent: 'fit-content',
      },
      minHeight: {
        5: '1.25rem',
      },
      minWidth: {
        5: '1.25rem',
      },
      dropShadow: {
        currencyLogo: '0px 3px 6px rgba(15, 15, 15, 0.25)',
      },
      screens: {
        '3xl': '1600px',
      },
      animation: {
        ellipsis: 'ellipsis 1.25s infinite',
        'spin-slow': 'spin 2s linear infinite',
        fade: 'opacity 150ms linear',
      },
      keyframes: {
        ellipsis: {
          '0%': { content: '"."' },
          '33%': { content: '".."' },
          '66%': { content: '"..."' },
        },
        opacity: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
      },
    },
  },
  variants: {
    linearBorderGradients: ['responsive', 'hover', 'dark'], // defaults to ['responsive']
    extend: {
      backgroundColor: ['checked', 'disabled'],
      backgroundImage: ['hover', 'focus'],
      borderColor: ['checked', 'disabled'],
      cursor: ['disabled'],
      opacity: ['hover', 'disabled'],
      placeholderColor: ['hover', 'active'],
      ringWidth: ['disabled'],
      ringColor: ['disabled'],
    },
  },
  plugins: [
    require('tailwindcss-border-gradient-radius'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.header-border-b': {
          background:
            'linear-gradient(to right, #213a3e 0%, rgba(250, 82, 160, 0.2) 100%) left bottom no-repeat',
          backgroundSize: '100% 1px',
        },
      });
    }),
    require('@tailwindcss/forms'),
  ],
};
