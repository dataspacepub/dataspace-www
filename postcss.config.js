module.exports = {
  plugins: {
      '@fullhuman/postcss-purgecss': {
          content: [
              './layouts/**/*.html',
              './static/js/*.js',
              './assets/js/*.js'
            ],
            safelist: [
              'h3',
              'h4',
              'ul',
              'li',
              'float-left',
              'float-right'
          ]
      },
      autoprefixer: {},
      cssnano: {preset: 'default'}
  }
};
