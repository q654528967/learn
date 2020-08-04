<template>
  <div id="app">
    <hm-form :model="model">
      <hm-form-item label="用户名">
        <hm-input v-model="model.username" placeholder="请输入用户名"></hm-input>
      </hm-form-item>
      <hm-form-item label="选择">
        <hm-switch v-model="model.active"></hm-switch>
      </hm-form-item>
    </hm-form>
    <!-- <hm-checkbox v-model="active">是否选中</hm-checkbox>
    <hm-checkbox-group v-model="hobby">
      <hm-checkbox label="抽烟"></hm-checkbox>
      <hm-checkbox label="喝酒"></hm-checkbox>
      <hm-checkbox label="烫头"></hm-checkbox>
    </hm-checkbox-group>-->
  </div>
</template>

<script>
import Demo from './demo/sync'
export default {
  name: 'App',
  data () {
    return {
      test: true,
      model: {
        username: '',
        active: false
      },
      active: false,
      hobby: [
        '抽烟',

      ]
    }
  }
}
</script>

<style lang="scss">
</style>
