const colors = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    uniformColorPalette: true,
    extendedFontSizeScale: true,
    applyComplexClasses: true,
  },
  purge: {
    // needs to be set if we want to purge all unused
    // @tailwind/typography styles
    mode: 'all',
    content: ['./src/**/*.svelte', './src/**/*.html'],
  },
  theme: {
    container: {
      center: true,
    },
    boxShadow: {
      default:
        '0px 0px 3px rgba(20, 20, 20, 0.15), 0px 1px 4px rgba(20, 20, 20, 0.05)',
      noshadow: '0px 0px 0px rgba(0,0,0,0)'
    },
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};