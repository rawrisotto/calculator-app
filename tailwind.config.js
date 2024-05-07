/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme1-text-100': 'hsl(0, 0%, 100%)',
        'theme1-text-600': 'hsl(221, 14%, 31%)',
        'theme1-keys-bg-1': 'hsl(225, 21%, 49%)',
        'theme1-keys-sh-1': 'hsl(224, 28%, 35%)',
        'theme1-keys-bg-2': 'hsl(6, 63%, 50%)',
        'theme1-keys-sh-2': 'hsl(6, 70%, 34%)',
        'theme1-keys-bg-3': 'hsl(30, 25%, 89%)',
        'theme1-keys-sh-3': 'hsl(28, 16%, 65%)',
        'theme1-bg-500': 'hsl(222, 26%, 31%)',
        'theme1-bg-600': 'hsl(223, 31%, 20%)',
        'theme1-bg-900': 'hsl(224, 36%, 15%)',

        'theme2-text-100': 'hsl(0, 0%, 100%)',
        'theme2-text-600': 'hsl(60, 10%, 19%)',
        'theme2-keys-bg-1': 'hsl(185, 42%, 37%)',
        'theme2-keys-sh-1': 'hsl(185, 58%, 25%)',
        'theme2-keys-bg-2': 'hsl(25, 98%, 40%)',
        'theme2-keys-sh-2': 'hsl(25, 99%, 27%)',
        'theme2-keys-bg-3': 'hsl(45, 7%, 89%)',
        'theme2-keys-sh-3': 'hsl(35, 11%, 61%)',
        'theme2-bg-100': 'hsl(0, 0%, 90%)',
        'theme2-bg-200': 'hsl(0, 5%, 81%)',
        'theme2-bg-300': 'hsl(0, 0%, 93%)',

        'theme3-text-100': 'hsl(0, 0%, 100%)',
        'theme3-text-500': 'hsl(52, 100%, 62%)',
        'theme3-text-900': 'hsl(198, 20%, 13%)',
        'theme3-keys-bg-1': 'hsl(281, 89%, 26%)',
        'theme3-keys-sh-1': 'hsl(285, 91%, 52%)',
        'theme3-keys-bg-2': 'hsl(176, 100%, 44%)',
        'theme3-keys-sh-2': 'hsl(177, 92%, 70%)',
        'theme3-keys-bg-3': 'hsl(268, 47%, 21%)',
        'theme3-keys-sh-3': 'hsl(290, 70%, 36%)',
        'theme3-bg-800': 'hsl(268, 71%, 12%)',
        'theme3-bg-900': ' hsl(268, 75%, 9%)',
      },
      fontFamily: {
        'base': ['League Spartan', 'sans-serif']
      },
      fontSize: {
        'base': '32px'
      }
    },
  },
  plugins: [],
}

