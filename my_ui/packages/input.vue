<template>
  <div :class="['hm-input', {'is-disabled':disabled}, 'hm-input--suffix']">
    <input
      :type="showP? 'text': type"
      :placeholder="placeholder"
      :class="['hm-input__inner']"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    />
    <span class="hm-input__suffix">
      <span class="el-input__suffix-inner">
        <i
          class="el-icon-circle-close hm-input__clear"
          v-if="clearable && value"
          @click="clearWord"
        ></i>
        <i class="el-icon-view" v-if="showPassword" @click="showP = !showP"></i>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showP: false
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  name: 'HmInput',
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clearWord () {
      this.$emit('input', '')
    }
  }
}
</script>

<style lang="scss" scoped>
.hm-input__suffix {
  z-index: 900;
  i {
    line-height: 40px;
    cursor: pointer;
    & + i {
      margin-left: 2px;
    }
  }
}
.hm-textarea {
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
  font-size: 14px;
}
.hm-textarea__inner {
  display: block;
  resize: vertical;
  padding: 5px 15px;
  line-height: 1.5;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  font-size: inherit;
  color: #606266;
  background-color: #fff;
  background-image: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hm-textarea__inner::-webkit-input-placeholder {
  color: #c0c4cc;
}
.hm-textarea__inner:-ms-input-placeholder {
  color: #c0c4cc;
}
.hm-textarea__inner::-ms-input-placeholder {
  color: #c0c4cc;
}
.hm-textarea__inner::placeholder {
  color: #c0c4cc;
}
.hm-textarea__inner:hover {
  border-color: #c0c4cc;
}
.hm-textarea__inner:focus {
  outline: 0;
  border-color: #409eff;
}
.hm-textarea .hm-input__count {
  color: #909399;
  background: #fff;
  position: absolute;
  font-size: 12px;
  bottom: 5px;
  right: 10px;
}
.hm-textarea.is-disabled .hm-textarea__inner {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}
.hm-textarea.is-disabled .hm-textarea__inner::-webkit-input-placeholder {
  color: #c0c4cc;
}
.hm-textarea.is-disabled .hm-textarea__inner:-ms-input-placeholder {
  color: #c0c4cc;
}
.hm-textarea.is-disabled .hm-textarea__inner::-ms-input-placeholder {
  color: #c0c4cc;
}
.hm-textarea.is-disabled .hm-textarea__inner::placeholder {
  color: #c0c4cc;
}
.hm-textarea.is-exceed .hm-textarea__inner {
  border-color: #f56c6c;
}
.hm-textarea.is-exceed .hm-input__count {
  color: #f56c6c;
}
.hm-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
}
.hm-input::-webkit-scrollbar {
  z-index: 11;
  width: 6px;
}
.hm-input::-webkit-scrollbar:horizontal {
  height: 6px;
}
.hm-input::-webkit-scrollbar-thumb {
  border-radius: 5px;
  width: 6px;
  background: #b4bccc;
}
.hm-input::-webkit-scrollbar-corner {
  background: #fff;
}
.hm-input::-webkit-scrollbar-track {
  background: #fff;
}
.hm-input::-webkit-scrollbar-track-piece {
  background: #fff;
  width: 6px;
}
.hm-input .hm-input__clear {
  color: #c0c4cc;
  font-size: 14px;
  cursor: pointer;
  -webkit-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hm-input .hm-input__clear:hover {
  color: #909399;
}
.hm-input .hm-input__count {
  height: 100%;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #909399;
  font-size: 12px;
}
.hm-input .hm-input__count .hm-input__count-inner {
  background: #fff;
  line-height: initial;
  display: inline-block;
  padding: 0 5px;
}
.hm-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.hm-input__prefix,
.hm-input__suffix {
  position: absolute;
  top: 0;
  -webkit-transition: all 0.3s;
  text-align: center;
  height: 100%;
  color: #c0c4cc;
}
.hm-input__inner::-webkit-input-placeholder {
  color: #c0c4cc;
}
.hm-input__inner:-ms-input-placeholder {
  color: #c0c4cc;
}
.hm-input__inner::-ms-input-placeholder {
  color: #c0c4cc;
}
.hm-input__inner::placeholder {
  color: #c0c4cc;
}
.hm-input__inner:hover {
  border-color: #c0c4cc;
}
.hm-input.is-active .hm-input__inner,
.hm-input__inner:focus {
  border-color: #409eff;
  outline: 0;
}
.hm-input__suffix {
  right: 5px;
  transition: all 0.3s;
  z-index: 900;
}
.hm-input__suffix-inner {
  pointer-events: all;
}
.hm-input__prefix {
  left: 5px;
  transition: all 0.3s;
}
.hm-input__icon {
  height: 100%;
  width: 25px;
  text-align: center;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  line-height: 40px;
}
.hm-input__icon:after {
  content: "";
  height: 100%;
  width: 0;
  display: inline-block;
  vertical-align: middle;
}
.hm-input__validateIcon {
  pointer-events: none;
}
.hm-input.is-disabled .hm-input__inner {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}
.hm-input.is-disabled .hm-input__inner::-webkit-input-placeholder {
  color: #c0c4cc;
}
.hm-input.is-disabled .hm-input__inner:-ms-input-placeholder {
  color: #c0c4cc;
}
.hm-input.is-disabled .hm-input__inner::-ms-input-placeholder {
  color: #c0c4cc;
}
.hm-input.is-disabled .hm-input__inner::placeholder {
  color: #c0c4cc;
}
.hm-input.is-disabled .hm-input__icon {
  cursor: not-allowed;
}
.hm-input.is-exceed .hm-input__inner {
  border-color: #f56c6c;
}
.hm-input.is-exceed .hm-input__suffix .hm-input__count {
  color: #f56c6c;
}
.hm-input--suffix .hm-input__inner {
  padding-right: 30px;
}
.hm-input--prefix .hm-input__inner {
  padding-left: 30px;
}
.hm-input--medium {
  font-size: 14px;
}
.hm-input--medium .hm-input__inner {
  height: 36px;
  line-height: 36px;
}
.hm-input--medium .hm-input__icon {
  line-height: 36px;
}
.hm-input--small {
  font-size: 13px;
}
.hm-input--small .hm-input__inner {
  height: 32px;
  line-height: 32px;
}
.hm-input--small .hm-input__icon {
  line-height: 32px;
}
.hm-input--mini {
  font-size: 12px;
}
.hm-input--mini .hm-input__inner {
  height: 28px;
  line-height: 28px;
}
.hm-input--mini .hm-input__icon {
  line-height: 28px;
}
.hm-input-group {
  line-height: normal;
  display: inline-table;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}
.hm-input-group > .hm-input__inner {
  vertical-align: middle;
  display: table-chml;
}
.hm-input-group__append,
.hm-input-group__prepend {
  background-color: #f5f7fa;
  color: #909399;
  vertical-align: middle;
  display: table-chml;
  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 0 20px;
  width: 1px;
  white-space: nowrap;
}
.hm-input-group--prepend .hm-input__inner,
.hm-input-group__append {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.hm-input-group--append .hm-input__inner,
.hm-input-group__prepend {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.hm-input-group__append:focus,
.hm-input-group__prepend:focus {
  outline: 0;
}
.hm-input-group__append .hm-button,
.hm-input-group__append .hm-shmect,
.hm-input-group__prepend .hm-button,
.hm-input-group__prepend .hm-shmect {
  display: inline-block;
  margin: -10px -20px;
}
.hm-input-group__append button.hm-button,
.hm-input-group__append div.hm-shmect .hm-input__inner,
.hm-input-group__append div.hm-shmect:hover .hm-input__inner,
.hm-input-group__prepend button.hm-button,
.hm-input-group__prepend div.hm-shmect .hm-input__inner,
.hm-input-group__prepend div.hm-shmect:hover .hm-input__inner {
  border-color: transparent;
  background-color: transparent;
  color: inherit;
  border-top: 0;
  border-bottom: 0;
}
.hm-input-group__append .hm-button,
.hm-input-group__append .hm-input,
.hm-input-group__prepend .hm-button,
.hm-input-group__prepend .hm-input {
  font-size: inherit;
}
.hm-input-group__prepend {
  border-right: 0;
}
.hm-input-group__append {
  border-left: 0;
}
.hm-input-group--append .hm-shmect .hm-input.is-focus .hm-input__inner,
.hm-input-group--prepend .hm-shmect .hm-input.is-focus .hm-input__inner {
  border-color: transparent;
}
.hm-input__inner::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}
</style>
