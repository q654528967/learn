<template>
  <div id="app">
    <hm-radio-group v-model="gender">
      <hm-radio label="1">男</hm-radio>
      <hm-radio label="0">女</hm-radio>
    </hm-radio-group>
    <hm-radio label="1" v-model="gender">男</hm-radio>
    <hm-radio label="0" v-model="gender">女</hm-radio>
    <hm-radio label="1" v-model="gender"></hm-radio>
    <hm-radio label="0" v-model="gender"></hm-radio>
    <hm-switch v-model="active"></hm-switch>
    <hm-switch v-model="active" :name="username" active-color="#13ce66" inactive-color="red"></hm-switch>
    <hm-input placeholder="请输入用户名" :disabled="false" v-model="username"></hm-input>
    <hm-input showPassword clearable placeholder="请输入" type="password" v-model="username"></hm-input>
    <!-- <demo :visible="visible" :money="money" @update:money="fn1"></demo>
    <demo :visible="visible" :money.sync="money"></demo>-->
    <!-- <hm-dialog width="200px" top="300px"></hm-dialog> -->
    <hm-dialog :visible.sync="visible">
      <ul class="list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
      <template v-slot:footer>
        <hm-button type="primary" @click="visible = false">确定</hm-button>
        <hm-button @click="visible = false">取消</hm-button>
      </template>
    </hm-dialog>
    <!-- <hm-dialog>
      <template v-slot:title>
        <h3>我是标题</h3>
      </template>
    </hm-dialog>-->
    <!-- <transition name="run">
      <div v-show="visible">我是div</div>
    </transition>-->
    <hm-button @click="visible = !visible">切换</hm-button>
  </div>
</template>

<script>
import Demo from './demo/sync'
export default {
  name: 'App',
  components: {
    Demo
  },
  data () {
    return {
      visible: false,
      money: 100,
      username: 'zs',
      active: false,
      gender: '1'
    }
  },
  methods: {
    fn (e) {
      let text = e.target.innerText
      console.log(text)
    },
    handleClick () {
      alert(1)
    },
    close (e) {
      this.visible = e
    },
    fn1 (value) {
      this.money = value
    }
  },
}
</script>

<style lang="scss">
.list {
  list-style: none;
}
.run-enter-active {
  animation: run 0.5s;
}
.run-leave-active {
  animation: run 0.5s reverse;
}
@keyframes run {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.aa-enter {
  opacity: 0;
}
.aa-enter-to {
  opacity: 1;
}
.aa-enter-active {
  transition: all 0.5s linear;
}
.aa-leave {
  opacity: 1;
}
.aa-leave-to {
  opacity: 0;
}
.aa-leave-active {
  transition: all 0.5s linear;
}
.hm-input {
  width: 180px;
}
</style>
