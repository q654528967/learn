<template>
  <div class="hm-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null,
  },
  name: 'HmRadioGroup'
}
</script>

<style lang="scss" scoped>
</style>
