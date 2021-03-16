module.exports = {
  plugins: {
      '@fullhuman/postcss-purgecss': {
          content: [
              './layouts/**/*.html',
              './static/js/*.js',
              './assets/js/*.js'
            ],
          whitelist: [
              'h3',
              'h4',
              'ul',
              'li'
          ]
      },
      autoprefixer: {},
      cssnano: {preset: 'default'}
  }
};
