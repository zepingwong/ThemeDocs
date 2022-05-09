<template>
  <Common :sidebarItems="sidebarItems" :showModule="recoShowModule">
    <component v-if="$frontmatter.home" :is="homeCom"/>
    <Page v-else :sidebar-items="sidebarItems"/>
    <Footer v-if="$frontmatter.home" class="footer" />
  </Common>
</template>

<script>
import { defineComponent, computed } from 'vue-demi'
import HomeBlog from '../components/HomeBlog'
import HomeDocs from '../components/HomeDocs'
import Page from '../components/Page'
import Footer from '../components/Footer'
import Common from '../components/Common'
import { resolveSidebarItems } from '../helpers/utils'
import moduleTransitonMixin from '../mixins/moduleTransiton'
import { useInstance } from '../helpers/composable'

export default defineComponent({
  mixins: [moduleTransitonMixin],
  components: { HomeBlog, HomeDocs, Page, Common, Footer },
  setup () {
    const instance = useInstance()
    const sidebarItems = computed(() => {
      const { $page, $site, $localePath } = instance
      if ($page) {
        return resolveSidebarItems(
          $page,
          $page.regularPath,
          $site,
          $localePath
        )
      } else {
        return []
      }
    })
    const homeCom = computed(() => {
      const type = instance.$frontmatter?.type || instance.$themeConfig?.type || 'docs'
      return type === 'blog' ? 'HomeBlog' : type === 'HomeBlog' ? 'HomeBlog' :  'HomeDocs'
    })
    return { sidebarItems, homeCom }
  }
})
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src='../styles/theme.styl' lang="stylus"></style>
