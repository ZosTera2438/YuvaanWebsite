module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'gold':'#facd38',
        'deepGold':'#d4af37',
        'blackText':'#2c2825'
      },
      fontFamily: {
        'compoteFont': ['compote','sans-serif'],
        'latoFont':['Lato','sans-serif'],
      },
    },
  },
  // ...
}