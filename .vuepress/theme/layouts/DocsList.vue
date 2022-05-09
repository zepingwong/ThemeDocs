<template>
  <Common class="docslist-wrapper" :sidebar="false">
    <ModuleTransition>
      <section v-show="recoShowModule">
        <div class="page-title">
          <h1 class="title">{{$customLocales.docsList}}</h1>
        </div>
      </section>
    </ModuleTransition>

    <ModuleTransition delay="0.08">
      <div class="content">
        <div class="list-wrapper">
          <div class="list-item" v-for="(doc, index) in currentPageData" :key="index" @click="$router.push(doc.link)">
            <div class="card-wrapper">
              <div class="title">
                <router-link :to="doc.link">{{doc.title}}</router-link>
              </div>
              <div class="desc">{{ doc.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </ModuleTransition>
    <ModuleTransition delay="0.16">
      <!-- 分页 -->
      <pagination
        class="pagination"
        :total="docsList.length"
        :currentPage="currentPage"
        :perPage="6"
        @getCurrentPage="getCurrentPage"
      ></pagination>
    </ModuleTransition>
  </Common>
</template>

<script>
import { defineComponent, computed, ref } from 'vue-demi'
import Common from '../components/Common'
import moduleTransitonMixin from '../mixins/moduleTransiton'
import { ModuleTransition } from '../core/components'
import PageInfo from '../components/Page/PageInfo'
import { useInstance } from '../helpers/composable'
import { RecoIcon } from '../core/components'
export default defineComponent({
  name: 'DocsList',
  mixins: [moduleTransitonMixin],
  components: { Common, PageInfo, ModuleTransition, RecoIcon },
  setup () {
    const instance = useInstance()
    const currentPage = ref(1)
    const docsList = computed(() => {
      return instance.$docsLists
    })

    const numStyle = {
      fontSize: '.9rem',
      fontWeight: 'normal',
      color: '#999'
    }
    const currentPageData = computed(() => {
      const start = (currentPage.value - 1) * 9
      const end = currentPage.value * 9
      return docsList.value.slice(start, end)
    })
    const getCurrentPage = (current) => {
      currentPage.value = current
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 100)
    }
    return {
      docsList,
      numStyle,
      currentPage,
      currentPageData,
      getCurrentPage
    }
  }
})
</script>

<style src='../styles/theme.styl' lang="stylus"></style>
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style lang="stylus" scoped>
.docslist-wrapper
  position relative
  padding-top 5rem

  .page-title
    max-width $contentWidth
    margin: 0 auto;
    padding: 1rem 2.5rem;
    color var(--text-color)
  .content
    max-width $contentWidth
    margin 0 auto
    padding 2rem
    .list-wrapper
      display flex
      flex-wrap wrap
      justify-content space-between
      .list-item
        margin 0 auto 1.5rem
        width 45%
        transition all .5s
        .card-wrapper
          cursor pointer
          position relative
          height 140px
          box-shadow var(--box-shadow)
          border-radius 6px
          background-position center
          background-size cover
          width 100%
          text-align center
          overflow hidden
          box-sizing border-box
          padding 1rem 1rem
          .title
            position relative
            font-size 1.28rem
            line-height 46px
            display inline-block
            a
              color var(--text-color)
              text-decoration-line none
            &:after
              content ""
              position absolute
              width 100%
              height 2px
              bottom 0
              left 0
              background-color $accentColor
              visibility hidden
              -webkit-transform scaleX(0)
              transform scaleX(0)
              transition .3s ease-in-out
          .desc
            margin .6rem 0 .6rem
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            font-size 12px
        &:hover
          box-shadow var(--box-shadow-hover)
          .title
            position relative
            font-size 1.28rem
            line-height 46px
            display inline-block
            a
              color $accentColor
              text-decoration-line none
            &:after
              visibility visible
              -webkit-transform scaleX(1)
              transform scaleX(1)
@media (max-width: $MQMobile)
  .docslist-wrapper
    .page-title
      padding 0 1rem
    .content
      padding 1rem 2rem
      .list-wrapper
        .list-item
          width 100%
</style>

