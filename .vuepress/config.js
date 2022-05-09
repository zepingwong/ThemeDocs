const head = require('./config/head')
const theme = require('./config/theme')
const plugins = require('./config/plugins')
module.exports = {
  head: head,
  title: '汽水味的夏天-ThemeDocs',
  base: '/ThemeDocs/',
  locales: {
    '/': {
      lang: 'zh-CN'
    },
    '/en/': {
      lang: 'en-US'
    }
  },
  themeConfig: theme,
  markdown: {
    "lineNumbers": true
  },
  plugins: plugins
}
