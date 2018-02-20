const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const env = process.env.SPIKE_ENV

module.exports = {
  devtool: 'source-map',
  ignore: ['**/layout.html', 'assets/**/_*', 'views/**/_*', '**/.*', 'readme.md', 'yarn.lock', 'package-lock.json', 'netlify.toml'],
  dumpDirs: ['views', 'assets', 'netlify'],
  reshape: htmlStandards({
    locals: (ctx) => { return { pageId: pageId(ctx), foo: 'bar' } },
    minify: env === 'production'
  }),
  postcss: cssStandards({
    paths: ['node_modules'],
    minify: env === 'production',
    warnForDuplicates: env !== 'production'
  }),
  babel: jsStandards()
}
