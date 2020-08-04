<template>
  <div class="hm-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  name: 'HmForm'
}
</script>

<style lang="scss" scoped>
.hm-form--inline .hm-form-item,
.hm-form--inline .hm-form-item__content {
  display: inline-block;
  vertical-align: top;
}
.hm-form-item::after,
.hm-form-item__content::after {
  clear: both;
}
.hm-form--labhm-left .hm-form-item__label {
  text-align: left;
}
.hm-form--labhm-top .hm-form-item__label {
  float: none;
  display: inline-block;
  text-align: left;
  padding: 0 0 10px;
}
.hm-form--inline .hm-form-item {
  margin-right: 10px;
}
.hm-form--inline .hm-form-item__label {
  float: none;
  display: inline-block;
}
.hm-form--inline.hm-form--labhm-top .hm-form-item__content {
  display: block;
}
.hm-form-item {
  margin-bottom: 22px;
}
.hm-form-item::after,
.hm-form-item::before {
  display: table;
  content: "";
}
.hm-form-item .hm-form-item {
  margin-bottom: 0;
}
.hm-form-item--mini.hm-form-item,
.hm-form-item--small.hm-form-item {
  margin-bottom: 18px;
}
.hm-form-item .hm-input__validateIcon {
  display: none;
}
.hm-form-item--medium .hm-form-item__content,
.hm-form-item--medium .hm-form-item__label {
  line-height: 36px;
}
.hm-form-item--small .hm-form-item__content,
.hm-form-item--small .hm-form-item__label {
  line-height: 32px;
}
.hm-form-item--small .hm-form-item__error {
  padding-top: 2px;
}
.hm-form-item--mini .hm-form-item__content,
.hm-form-item--mini .hm-form-item__label {
  line-height: 28px;
}
.hm-form-item--mini .hm-form-item__error {
  padding-top: 1px;
}
.hm-form-item__labhm-wrap {
  float: left;
}
.hm-form-item__labhm-wrap .hm-form-item__label {
  display: inline-block;
  float: none;
}
.hm-form-item__label {
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.hm-form-item__content {
  line-height: 40px;
  position: relative;
  font-size: 14px;
}
.hm-form-item__content::after,
.hm-form-item__content::before {
  display: table;
  content: "";
}
.hm-form-item__content .hm-input-group {
  vertical-align: top;
}
.hm-form-item__error {
  color: #f56c6c;
  font-size: 12px;
  line-height: 1;
  padding-top: 4px;
  position: absolute;
  top: 100%;
  left: 0;
}
.hm-form-item__error--inline {
  position: relative;
  top: auto;
  left: auto;
  display: inline-block;
  margin-left: 10px;
}
.hm-form-item.is-required:not(.is-no-asterisk)
  .hm-form-item__labhm-wrap
  > .hm-form-item__label:before,
.hm-form-item.is-required:not(.is-no-asterisk) > .hm-form-item__label:before {
  content: "*";
  color: #f56c6c;
  margin-right: 4px;
}
.hm-form-item.is-error .hm-input__inner,
.hm-form-item.is-error .hm-input__inner:focus,
.hm-form-item.is-error .hm-textarea__inner,
.hm-form-item.is-error .hm-textarea__inner:focus {
  border-color: #f56c6c;
}
.hm-form-item.is-error .hm-input-group__append .hm-input__inner,
.hm-form-item.is-error .hm-input-group__prepend .hm-input__inner {
  border-color: transparent;
}
.hm-form-item.is-error .hm-input__validateIcon {
  color: #f56c6c;
}
.hm-form-item--feedback .hm-input__validateIcon {
  display: inline-block;
}
</style>