/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif:  ['"Playfair Display"', 'Georgia', 'serif'],
        sans:   ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream:  '#F5F0E8',
        cream2: '#EDE7D9',
        ink:    '#1C1810',
        forest: '#2D5016',
        sage:   '#5A7A3A',
        terra:  '#C4541A',
        gold:   '#B8882A',
        muted:  '#7A6E5F',
      },
    },
  },
  plugins: [],
}
