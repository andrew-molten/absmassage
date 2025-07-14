/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx', './posts/**/*.mdx'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
