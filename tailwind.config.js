const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme');
const typographyStyles = require('./typography')
const typographyPlugin = require('@tailwindcss/typography')
const headlessuiPlugin = require('@headlessui/tailwindcss')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,mjs,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      '2xs': ['0.75rem', { lineHeight: '1.25rem' }],
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    typography: typographyStyles,
    extend: {
      boxShadow: {
        glow: '0 0 4px rgb(0 0 0 / 0.1)',
      },
      maxWidth: {
        lg: '33rem',
        '2xl': '40rem',
        '3xl': '50rem',
        '5xl': '66rem',
      },
      opacity: {
        1: '0.01',
        2.5: '0.025',
        7.5: '0.075',
        15: '0.15',
      },
      colors: {
        sky: colors.sky,
        teal: colors.teal,
        rose: colors.rose,
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        blue: {
          100: '#E1F2FF',
          200: '#51C8FF',
          300: '#0095FF',
          400: '#0077FF',
          500: '#0653A0',
          600: '#002A3A',
        },
        red: {
          100: '#FCEFF3',
          200: '#E94168',
        },
        gray: {
          100: '#FAFAFD',
          300: '#88ABB8',
          400: '#4F6B87',
        },
        purple: {
          100: '#F7F3FC',
          200: '#A06FDD',
          500: '#7127F6', // CTA
          700: '#5b0aed',
        },
        yellow: {
          100: '#FAF2E5',
          200: '#F1A33C',
        },
        green: {
          100: '#E2F7E9',
          200: '#2ACE5A',
          300: '#34c759',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
     
    },
  },
  plugins: [typographyPlugin, headlessuiPlugin],
}
