export default {
  computed: {
    $mode() {
      const modeOptions = ['dark', 'auto', 'light']
      const mode = this.$themeConfig?.modeConfig?.mode || 'auto'
      return modeOptions.indexOf(mode) !== -1 ? mode : 'auto'
    },
    $modeSwitch() {
      return this.$themeConfig?.modeConfig?.modeSwitch !== false
    }
  }
}
