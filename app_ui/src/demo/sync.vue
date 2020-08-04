<template>
  <div>
    demo ---{{money}}
    <button @click="fn">修改</button>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    money: null
  },
  methods: {
    fn () {
      this.$emit('update:money', 200)
    }
  },
}
</script>

<style lang="sass" scoped>

</style>