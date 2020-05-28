<template>
  <label class="hm-radio">
    <span class="hm-radio__input" :class="{'is-checked': label==model}">
      <span class="hm-radio__inner">
        <input :name="name" :value="label" type="radio" class="hm-radio__original" v-model="model" />
      </span>
    </span>
    <span class="hm-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      return !!this.RadioGroup
    }
  },
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  name: 'HmRadio'
}
</script>

<style lang="scss" scoped>
@charset "UTF-8";
.hm-radio,
.hm-radio--medium.is-bordered .hm-radio__label {
  font-size: 14px;
}
.hm-radio,
.hm-radio__input {
  white-space: nowrap;
  line-height: 1;
  outline: 0;
}
.hm-radio,
.hm-radio__inner,
.hm-radio__input {
  position: relative;
  display: inline-block;
}
.hm-radio {
  color: #606266;
  font-weight: 500;
  cursor: pointer;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.hm-radio.is-bordered {
  padding: 12px 20px 0 10px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 40px;
}
.hm-radio.is-bordered.is-checked {
  border-color: #409eff;
}
.hm-radio.is-bordered.is-disabled {
  cursor: not-allowed;
  border-color: #ebeef5;
}
.hm-radio__input.is-disabled .hm-radio__inner,
.hm-radio__input.is-disabled.is-checked .hm-radio__inner {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
}
.hm-radio.is-bordered + .hm-radio.is-bordered {
  margin-left: 10px;
}
.hm-radio--medium.is-bordered {
  padding: 10px 20px 0 10px;
  border-radius: 4px;
  height: 36px;
}
.hm-radio--mini.is-bordered .hm-radio__label,
.hm-radio--small.is-bordered .hm-radio__label {
  font-size: 12px;
}
.hm-radio--medium.is-bordered .hm-radio__inner {
  height: 14px;
  width: 14px;
}
.hm-radio--small.is-bordered {
  padding: 8px 15px 0 10px;
  border-radius: 3px;
  height: 32px;
}
.hm-radio--small.is-bordered .hm-radio__inner {
  height: 12px;
  width: 12px;
}
.hm-radio--mini.is-bordered {
  padding: 6px 15px 0 10px;
  border-radius: 3px;
  height: 28px;
}
.hm-radio--mini.is-bordered .hm-radio__inner {
  height: 12px;
  width: 12px;
}
.hm-radio:last-child {
  margin-right: 0;
}
.hm-radio__input {
  cursor: pointer;
  vertical-align: middle;
}
.hm-radio__input.is-disabled .hm-radio__inner {
  cursor: not-allowed;
}
.hm-radio__input.is-disabled .hm-radio__inner::after {
  cursor: not-allowed;
  background-color: #f5f7fa;
}
.hm-radio__input.is-disabled .hm-radio__inner + .hm-radio__label {
  cursor: not-allowed;
}
.hm-radio__input.is-disabled.is-checked .hm-radio__inner::after {
  background-color: #c0c4cc;
}
.hm-radio__input.is-disabled + span.hm-radio__label {
  color: #c0c4cc;
  cursor: not-allowed;
}
.hm-radio__input.is-checked .hm-radio__inner {
  border-color: #409eff;
  background: #409eff;
}
.hm-radio__input.is-checked .hm-radio__inner::after {
  -webkit-transform: translate(-50%, -50%) scale(1);
  transform: translate(-50%, -50%) scale(1);
}
.hm-radio__input.is-checked + .hm-radio__label {
  color: #409eff;
}
.hm-radio__input.is-focus .hm-radio__inner {
  border-color: #409eff;
}
.hm-radio__inner {
  border: 1px solid #dcdfe6;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: #fff;
  cursor: pointer;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.hm-radio__inner:hover {
  border-color: #409eff;
}
.hm-radio__inner::after {
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: #fff;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%) scale(0);
  transform: translate(-50%, -50%) scale(0);
  -webkit-transition: -webkit-transform 0.15s ease-in;
  transition: -webkit-transform 0.15s ease-in;
  transition: transform 0.15s ease-in;
  transition: transform 0.15s ease-in, -webkit-transform 0.15s ease-in;
}
.hm-radio__original {
  opacity: 0;
  outline: 0;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
}
.hm-radio:focus:not(.is-focus):not(:active):not(.is-disabled) .hm-radio__inner {
  -webkit-box-shadow: 0 0 2px 2px #409eff;
  box-shadow: 0 0 2px 2px #409eff;
}
.hm-radio__label {
  font-size: 14px;
  padding-left: 10px;
}
</style>
