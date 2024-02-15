/** @type {import('tailwindcss').Config} */
const sizes = {
  0: '0px',
  1: '4px',
  1.5: '6px',
  2: '8px',
  3: '12px',
  3.5: '14px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  11: '44px',
  12: '48px',
  13: '52px',
  14: '56px',
  15: '60px',
  16: '64px',
  17: '68px',
  18: '72px',
  19: '76px',
  20: '80px',
  21: '84px',
  22: '88px',
  23: '92px',
  24: '96px',
  25: '100px',
  26: '104px',
  27: '108px',
  28: '112px',
  29: '116px',
  30: '120px',
  31: '124px',
  32: '128px',
  33: '132px',
  34: '136px',
  35: '140px',
  full: '9999px'
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    borderRadius: { ...sizes },
    padding: { ...sizes },
    margin: { ...sizes },
    fontSize: { ...sizes },
    spacing: { ...sizes },
    screens: {
      mobile: '320px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px'
    },
    extend: {
      zIndex: {
        first: 99999,
        modal: 100000
      },
      gridTemplateColumns: {
        globalLayout: '285px 1fr'
      },
      colors: {
        gray: {
          50: '#EDEDED',
          100: '#D6D6D6',
          200: '#B6B6B8',
          300: '#9E9DA0',
          400: '#8F8F8F',
          500: '#5A595C',
          550: '#333333',
          600: '#222222',
          700: '#141414',
          800: '#0E0E0E',
          900: '#090909'
        },
        applicationStatus: {
          applied: '#DE9489',
          relaunched: '#D289DE',
          interviewObtained: '#88DEA0'
        },
        toast: {
          error: '#EF707E',
          success: '#119B92'
        }
      }
    }
  }
}
