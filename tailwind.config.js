/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        softSkyBlue: '#a6c9e3',
        mutedLavenderBlue: '#b9cfe6',
        paleAqua: '#c8e0ed',
        powderBlue: '#d5ebf7',
        dustyTurquoise: '#a1cfd9',
        DarkSoftSkyBlue: '#6a9db9',
        DeepMutedLavenderBlue: '#7d96b8',
        NavyPaleAqua: '#6c8ba3',
        MidnightPowderBlue: '#547d9a',
        StormyDustyTurquoise: '#749fa9',
      },
    },
  },
  plugins: [],
};
