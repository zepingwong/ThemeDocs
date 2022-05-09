<template>
	<div class="color-switch" v-if="$modeSwitch !== false" >
		<a class="color-button" @click.prevent="selectMode">
      <reco-icon :icon="'icon-'+currentMode"></reco-icon>
		</a>
	</div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue-demi"
import { RecoIcon } from '../../core/components'
import applyMode from './applyMode'
import { useInstance } from "../../helpers/composable"

export default defineComponent({
  name: 'ModeSettings',
  components: {
    RecoIcon
  },
  setup() {
    const instance = useInstance()
    const currentMode = ref('auto')
    const modeOptions = ['dark', 'auto', 'light']
    const selectMode = () => {
      let index = modeOptions.indexOf(currentMode.value)
      index = index === modeOptions.length-1 ? 0 : index+1
      currentMode.value = modeOptions[index]
      applyMode(currentMode.value)
      localStorage.setItem('mode', currentMode.value)
    }
    onMounted(() => {
      if (instance.$modeSwitch === false) {
        // 为 'auto' 模式设置监听器
        if (instance.$mode === 'auto') {
          window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
            applyMode(instance.$mode)
          })
          window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
            applyMode(instance.$mode)
          })
        }
        applyMode(instance.$mode)
      } else {
        // modeSwitch 开启时默认使用用户主动设置的模式
        currentMode.value = localStorage.getItem('mode') || instance.$mode
        // Dark and Light auto switches
        // 为了避免在 server-side 被执行，故在 Vue 组件中设置监听器
        window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
          currentMode.value === 'auto' && applyMode(currentMode.value)
        })
        window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
          currentMode.value === 'auto' && applyMode(currentMode.value)
        })
        applyMode(currentMode.value)
      }
    })
    return {
      currentMode,
      selectMode
    }
  }
})
</script>

<style lang="stylus">
.color-switch {
	position: relative;
	margin-right: 1em;
  cursor pointer;
	.color-button {
		align-items: center;
		height: 100%;
		.iconfont {
			font-size 1.4rem
			color: $accentColor
		}
	}
}
</style>
