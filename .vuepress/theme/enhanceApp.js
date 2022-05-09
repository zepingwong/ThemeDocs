/* eslint-disable no-proto */
import postMixin from './mixins/posts'
import localMixin from './mixins/locales'
import themeMixin from "./mixins/theme"
import { interceptRouterError, fixRouterError404 } from './helpers/other'
import { install } from 'vue-demi'

export default ({
  Vue,
  siteData,
  isServer,
  router
}) => {
  install(Vue)
  Vue.mixin(postMixin)
  Vue.mixin(localMixin)
  Vue.mixin(themeMixin)
  // if (!isServer) {
  //   addScriptToHead('//kit.fontawesome.com/51b01de608.js')
  //   registerCodeThemeCss(siteData.themeConfig.codeTheme)
  // }
  interceptRouterError(router)
  fixRouterError404(router)
}
