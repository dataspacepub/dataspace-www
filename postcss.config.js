/* configure PurgeCSS to process the stat file, and safelist a few elements */
const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [ './hugo_stats.json' ],
    defaultExtractor: (content) => {
        let els = JSON.parse(content).htmlElements;
        return els.tags.concat(els.classes, els.ids);
    },
    safelist: [
      'h3',
      'h4',
      'ul',
      'li',
      'float-left',
      'float-right'
    ]
});

/* disable PurgeCSS during development runs */
module.exports = {
  plugins: [
    require('autoprefixer'),
    ...process.env.HUGO_ENVIRONMENT === 'production'
      ? [purgecss]
      : []
  ],
  cssnano: ['default',
    {'discardComments': {'removeAll': true}}
  ]
}
