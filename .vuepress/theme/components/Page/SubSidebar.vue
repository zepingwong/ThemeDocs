<template>
  <div class="sub-side-bar" v-show='headers.length > 0'>

    <div
      class='sub-sidebar-content'
      :style="{height: isShow ? '' : '100%'}"
    >
      <span
        :style="{display: isShow ? '' : 'flex'}"
        @click='fold'>{{ isShow ? '隐藏' : '显示' }}
      </span>
      <ul
        v-show='isShow'
        class='sub-sidebar-wrapper'
      >
        <li
          v-for="(header) in headers"
          :class="{active: isLinkActive(header),[`level-${header.level}`]: true}"
          :key= "header.title"
        >
          <router-link
            :class= "{ 'sidebar-link': true, [`reco-side-${header.slug}`]: true }"
            :to= "$page.path + '#' + header.slug"
          ><p>{{header.title}}</p></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { defineComponent, computed, ref, onBeforeMount } from 'vue-demi'
import { isActive } from '../../helpers/utils'
import { useInstance } from '../../helpers/composable'

export default defineComponent({
  setup (props, ctx) {
    const isShow = ref(true)
    const instance = useInstance()
    const headers = computed(() => {
      return instance.$showSubSideBar ? instance.$page.headers : []
    })
    const fold = () => {
      isShow.value = !isShow.value
      ctx.emit('foldSubSidebar', isShow.value)
      localStorage.setItem('showSubSidebar', isShow.value.toString())
    }
    const isLinkActive = (header) => {
      const active = isActive(instance.$route, instance.$page.path + '#' + header.slug)
      if (active) {
        setTimeout(() => {
          document.querySelector(`.reco-side-${header.slug}`).scrollIntoView()
        }, 300)
      }
      return active
    }
    onBeforeMount(() => {
      const show = localStorage.getItem("showSubSidebar")
      if (show === 'false') {
        isShow.value = false
      } else if (show === 'true') {
        isShow.value = true
      }
      ctx.emit('foldSubSidebar', isShow.value)
    })
    return { headers, isLinkActive, isShow, fold }
  }
})
</script>

<style lang="stylus" scoped>
// 右侧sub-side-bar
.sub-side-bar
  position fixed
  top 3.6rem
  bottom 0
  right 0.5rem
  overflow-y scroll
  &::-webkit-scrollbar
    width 0
    height 0


.sub-sidebar-content
  display flex
  align-items center
  span
    float left
    width 20px
    display none
  span:hover
    color $accentColor
    //鼠标悬浮变"手"
    cursor:pointer

.sub-sidebar-content:hover
  span
    display block

.sub-sidebar-wrapper
  width 11rem
  padding-left 0
  list-style none
  font-size 12px
  float right
  li
    padding .2rem 0
    cursor pointer
    border-left 1px solid var(--border-color)
    a
      padding 0.35rem 1rem 0.35rem 0
      color var(--text-color)
      p
        overflow-x hidden
        white-space nowrap
        text-overflow ellipsis
        margin 0
    &:hover
      a
        color $accentColor
    &.active
      border-left 1px solid $accentColor
      a
        color $accentColor
    &.level-1
      padding-left .4rem
    &.level-2
      padding-left .9rem
      a
        font-weight bold
    &.level-3
      padding-left 1.5rem
      a
        padding 0

@media (max-width: $MQMobile)
  .sub-side-bar
    display none
</style>

