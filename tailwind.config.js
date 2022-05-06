const colors = {
  slate: {
    50: '#EEF3F5',
    100: '#F2F7F9',
    200: '#EEF3F5',
    300: '#DFEDF2',
    800: '#314955',
    900: '#233841',
    DEFAULT: '#616569',
  },
  primary: 'var(--color-primary)',
  primaryAlt: 'var(--color-primaryAlt)',
  secondary: 'var(--color-secondary)',
  border: 'var(--color-border)',
  inputBg: 'var(--color-inputBg)',
  alert: 'var(--color-alert)',
  alertAlt: 'var(--color-alertAlt)',
  primaryText: 'var(--color-primaryText)',
  btnText: 'var(--color-btnText)',
  primaryBg: 'var(--color-primaryBg)',
  secondaryBg: 'var(--color-secondaryBg)',
  mapBase: 'var(--color-mapBase)',
  mapWater: 'var(--color-mapWater)',
  mapPath: 'var(--color-mapPath)',
  mapDivisor: 'var(--color-mapDivisor)',
  mapText: 'var(--color-mapText)',
  mapPin: 'var(--color-mapPin)',
};

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
    },
    fontFamily: {
      'open-sans': ['"Open Sans"'],
    },
  },
  plugins: [],
};
