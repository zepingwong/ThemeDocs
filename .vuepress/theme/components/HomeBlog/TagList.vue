<template>
  <div class="tags">
    <hr>
    <h4 v-if="$tags.list.length !== 0"><reco-icon icon="icon-tag" /> {{$customLocales.tag}}</h4>
    <span
      v-for="(item, index) in tags"
      v-show="!item.pages || (item.pages && item.pages.length > 0)"
      :key="index"
      :class="{'active': item.name === currentTag}"
      :style="{ 'backgroundColor': getOneColor() }"
      @click="tagClick(item)">{{item.name}}
    </span>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue-demi'
import { getOneColor } from '../../helpers/other'
import { useInstance } from '../../helpers/composable'
import { RecoIcon } from '../../core/components'
export default defineComponent({
  components: { RecoIcon },
  props: {
    currentTag: {
      type: String,
      default: ''
    }
  },
  setup (props, ctx) {
    const instance = useInstance()
    const tags = computed(() => {
      return [{ name: instance.$customLocales.all, path: '/tag/' }, ...instance.$tagesList]
    })

    const tagClick = tag => {
      ctx.emit('getCurrentTag', tag)
    }

    return { tags, tagClick, getOneColor }
  }
})
</script>

<style lang="stylus" scoped>
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
</style>
