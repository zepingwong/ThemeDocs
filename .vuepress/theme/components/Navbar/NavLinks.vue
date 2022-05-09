<template>
  <nav class="nav-links" v-if="userLinks.length || repoLink">
    <!-- user links -->
    <div
      class="nav-item"
      v-for="item in userLinks"
      :key="item.link"
    >
      <DropdownLink v-if="item.type === 'links'" :item="item" />
      <NavLink v-else :item="item" />
    </div>

    <!-- repo link -->
    <a
      v-if="repoLink"
      :href="repoLink"
      class="repo-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <reco-icon :icon="`icon-${repoLabel.toLowerCase()}`" />
      {{ repoLabel }}
      <OutboundLink/>
    </a>
  </nav>
</template>

<script>
import { defineComponent, computed } from 'vue-demi'
import { RecoIcon } from '../../core/components'
import DropdownLink from '../DropdownLink'
import { resolveNavLinkItem } from '../../helpers/utils'
import NavLink from './NavLink'
import { useInstance } from '../../helpers/composable'

export default defineComponent({
  components: { NavLink, DropdownLink, RecoIcon },
  setup () {
    const instance = useInstance()
    const nav= computed(() =>{
      const _nav= instance.$themeLocaleConfig?.navConfig || instance.$themeConfig?.navConfig || {}
      let navList = []
      Object.keys(_nav).map((key) => {
        navList.push({
          key: key,
          ..._nav[key]
        })
      })
      const locales = instance.$site.locales || {}
      navList = navList.filter((item) => {
          return instance.$localePath === '/' ? true : item.key !== 'category' && item.key !== 'timeLine' && item.key !==  'tag' && item.key !==  'docs'
      })
      navList.map((item) => {
        item['link'] = item.key === 'home' ? instance.$localePath :
          item.key === 'docs' ? instance.$localePath + 'docslist/' :
            item.key === 'timeLine' ? instance.$localePath + 'timeline/' :
              item.key === ('tag' || 'category') ? instance.$localePath + item.key + '/' :
                item?.link ?  item?.link : ''

        item['text'] = item.text || instance.$customLocales[item.key]
        item['icon'] = item.icon || 'icon-' + item.key
        item['items'] = item.key === 'category' ? instance.$categories.list.map(i => {
          i.link = i.path
          i.text = i.name
          return i
        }) : item?.items
        return item
      })


      if (locales && Object.keys(locales).length > 1) {
        const currentLink = instance.$page.path
        const routes = instance.$router.options.routes
        const themeLocales = instance.$themeConfig?.locales || {}
        const languageDropdown = {
          text: instance.$customLocales.selectText,
          icon: 'icon-language',
          items: Object.keys(locales).map(path => {
            const locale = locales[path]
            const text = themeLocales[path] && themeLocales[path].label || locale.lang
            let link = ''
            // Stay on the current page
            if (locale.lang === instance.$lang) {
              link = currentLink
            } else {
              // Try to stay on the same page
              link = currentLink.replace(instance.$localePath, path)
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path
              }
            }
            return {text, link}
          })
        }
        return [...navList, languageDropdown]
      }
      return navList
    })
    const userLinks = computed(() => {
      return (nav.value || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        })
      })
    })
    const repoLink = computed(() => {
      const { repo } = instance.$themeConfig
      if (repo) {
        return /^https?:/.test(repo)
          ? repo
          : `https://github.com/${repo}`
      }
      return ''
    })
    const repoLabel = computed(() => {
      if (!instance.repoLink) return ''
      if (instance.$themeConfig.repoLabel) {
        return instance.$themeConfig.repoLabel
      }
      const repoHost = instance.repoLink.match(/^https?:\/\/[^/]+/)[0]
      const platforms = ['GitHub', 'GitLab', 'Bitbucket']
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i]
        if (new RegExp(platform, 'i').test(repoHost)) {
          return platform
        }
      }
      return 'Source'
    })
    return { nav, userLinks, repoLink, repoLabel }
  }
})
</script>
<style lang="stylus">
.nav-links
  display inline-block
  a
    line-height 1.4rem
    color var(--text-color)
    &:hover, &.router-link-active
      color $accentColor
      .iconfont
        color $accentColor
  .nav-item
    position relative
    display inline-block
    margin-left 1.5rem
    line-height 2rem
    &:first-child
      margin-left 0
  .repo-link
    margin-left 1.5rem
@media (max-width: $MQMobile)
  .nav-links
    .nav-item, .repo-link
      margin-left 0
@media (min-width: $MQMobile)
  .nav-item > a:not(.external)
    &:hover, &.router-link-active
      margin-bottom -2px
</style>
