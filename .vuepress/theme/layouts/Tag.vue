<template>
  <!-- 公共布局 -->
  <Common class="tag-wrapper" :sidebar="false">
    <!-- 标签集合 -->
    <ModuleTransition>
      <div v-show="recoShowModule" class="tags">
        <span
          v-for="(item, index) in tags"
          v-show="!item.pages || (item.pages && item.pages.length > 0)"
          :key="index"
          :class="{'active': item.name === $currentTags.key}"
          :style="{ 'backgroundColor': getOneColor() }"
          @click="tagClick(item)">{{item.name}}
        </span>
      </div>
    </ModuleTransition>

    <!-- 博客列表 -->
    <ModuleTransition delay="0.08">
      <note-abstract
        v-show="recoShowModule"
        class="list"
        :data="posts"
        :currentTag="$currentTags.key"
        @paginationChange="paginationChange"></note-abstract>
    </ModuleTransition>
  </Common>
</template>

<script>
import { defineComponent, computed } from 'vue-demi'
import Common from '../components/Common'
import NoteAbstract from '../components/NoteAbstract'

import { ModuleTransition } from '../core/components'
import { sortPostsByStickyAndDate, filterPosts } from '../helpers/postData'
import moduleTransitonMixin from '../mixins/moduleTransiton'
import { useInstance } from '../helpers/composable'
import { getOneColor } from '../helpers/other'
export default defineComponent({
  mixins: [moduleTransitonMixin],
  components: { Common, NoteAbstract, ModuleTransition },
  setup (props, ctx) {
    const instance = useInstance()
    const tags = computed(() => {
      return [{ name: instance.$customLocales.all, path: '/tag/' }, ...instance.$tagesList]
    })
    // 时间降序后的博客列表
    const posts = computed(() => {
      let posts = instance.$currentTags.pages
      posts = filterPosts(posts)
      sortPostsByStickyAndDate(posts)
      return posts
    })
    const getCurrentTag = (tag) => {
      ctx.emit('currentTag', tag)
    }
    const tagClick = (tagInfo) => {
      if (instance.$route.path !== tagInfo.path) {
        instance.$router.push({ path: tagInfo.path })
      }
    }
    const paginationChange = (page) => {
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 100)
    }
    return { posts, getCurrentTag, tagClick, paginationChange, getOneColor, tags }
  }
})
</script>

<style src="../styles/theme.styl" lang="stylus"></style>
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style lang="stylus" scoped>
.tag-wrapper
  max-width: $contentWidth;
  margin: 0 auto;
  padding: 4.6rem 2.5rem 0;
.tags
  margin 30px 0
  span
    vertical-align: middle;
    margin: 4px 4px 10px;
    padding: 4px 8px;
    display: inline-block;
    cursor: pointer;
    border-radius: $borderRadius
    background: #fff;
    color: #fff;
    line-height 13px
    font-size: 13px;
    box-shadow var(--box-shadow)
    transition: all .5s
    &:hover
      transform scale(1.04)
    &.active
      transform scale(1.2)
@media (max-width: $MQMobile)
  .tag-wrapper
    padding: 4.6rem 1rem 0;
</style>
