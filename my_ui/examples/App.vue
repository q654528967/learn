<template>
  <div id="app">
    <hm-switch v-model="active"></hm-switch>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      active: false
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
