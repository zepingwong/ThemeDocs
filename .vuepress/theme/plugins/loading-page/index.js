const { path } = require('@vuepress/shared-utils')

module.exports = (options, context) => ({
  name: 'plugin-loading-page',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ]
})