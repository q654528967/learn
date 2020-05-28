<template>
  <div class="hm-switch" :class="{'is-checked':value}" @click="handleClick">
    <input ref="input" type="checkbox" class="hm-switch__input" :name="name" />
    <span class="hm-switch__core" ref="core">
      <span class="hm-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  name: 'HmSwitch',
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      this.$refs.input.value = !this.value
      await this.$nextTick()
      this.setColor()
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () {
    this.$refs.input.value = this.value
    this.setColor()
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
.hm-switch {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
}
.hm-switch.is-disabled .hm-switch__core,
.hm-switch.is-disabled .hm-switch__label {
  cursor: not-allowed;
}
.hm-switch__core,
.hm-switch__label {
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
}
.hm-switch__label {
  -webkit-transition: 0.2s;
  transition: 0.2s;
  height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: #303133;
}
.hm-switch__label.is-active {
  color: #409eff;
}
.hm-switch__labhm--left {
  margin-right: 10px;
}
.hm-switch__labhm--right {
  margin-left: 10px;
}
.hm-switch__label * {
  line-height: 1;
  font-size: 14px;
  display: inline-block;
}
.hm-switch__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
.hm-switch__core {
  margin: 0;
  position: relative;
  width: 40px;
  height: 20px;
  border: 1px solid #dcdfe6;
  outline: 0;
  border-radius: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #dcdfe6;
  -webkit-transition: border-color 0.3s, background-color 0.3s;
  transition: border-color 0.3s, background-color 0.3s;
}
.hm-switch__core:after {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  border-radius: 100%;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  width: 16px;
  height: 16px;
  background-color: #fff;
}
.hm-switch.is-checked .hm-switch__core {
  border-color: #409eff;
  background-color: #409eff;
}
.hm-switch.is-checked .hm-switch__core::after {
  left: 100%;
  margin-left: -17px;
}
.hm-switch.is-disabled {
  opacity: 0.6;
}
.hm-switch--wide .hm-switch__label.hm-switch__labhm--left span {
  left: 10px;
}
.hm-switch--wide .hm-switch__label.hm-switch__labhm--right span {
  right: 10px;
}
.hm-switch .labhm-fade-enter,
.hm-switch .labhm-fade-leave-active {
  opacity: 0;
}
</style>
