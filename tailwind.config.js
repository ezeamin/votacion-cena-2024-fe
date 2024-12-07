import daisyui from 'daisyui';

import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui, containerQueries],
  daisyui: {
    themes: ["dark"],
  }
};
