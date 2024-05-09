/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'text-color': '#000000',
      'bg-color': '#E4E4D9',
      'highlight-h1': '#ACFF79',
      'highlight-link': '#E1FF26',
      'moon': '#101010',
      'dm-text-color': '#E7E3E3',
      'dm-bg-color': '#3B3737',
      'dm-highlight-h1': '#000000',
      'dm-highlight-link': '#50B837',
      'dm-moon': '#E8EDFF',
    },
    extend: {
      fontFamily: {
        inriaSans: ['Inria Sans', 'sans serif'] 
      }
    },
  },
  plugins: [],
}

