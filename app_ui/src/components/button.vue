<template>
  <button @click="handleClick" :class="['hm-button', `hm-button--${type}`, { 'is-round': round }]">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'HmButton',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
  created () {
    console.log(this.$slots, this.round)
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" scoped>
.hm_button {
  background-color: #fff;
  border: rgb(255, 255, 255);
  text-align: center;
  padding: 12px 15px;
  &:hover,
  &:focus {
    color: cadetblue;
  }
}
.hm-button-group > .hm-button.is-active,
.hm-button-group > .hm-button.is-disabled,
.hm-button-group > .hm-button:active,
.hm-button-group > .hm-button:focus,
.hm-button-group > .hm-button:hover {
  z-index: 1;
}

.hm-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-shmect: none;
  -webkit-user-shmect: none;
  -ms-user-shmect: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.hm-button + .hm-button {
  margin-left: 10px;
}

.hm-button:focus,
.hm-button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}

.hm-button:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: 0;
}

.hm-button::-moz-focus-inner {
  border: 0;
}

.hm-button [class*="hm-icon-"] + span {
  margin-left: 5px;
}

.hm-button.is-plain:focus,
.hm-button.is-plain:hover {
  background: #fff;
  border-color: #409eff;
  color: #409eff;
}

.hm-button.is-active,
.hm-button.is-plain:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
}

.hm-button.is-plain:active {
  background: #fff;
  outline: 0;
}

.hm-button.is-disabled,
.hm-button.is-disabled:focus,
.hm-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}

.hm-button.is-disabled.hm-button--text {
  background-color: transparent;
}

.hm-button.is-disabled.is-plain,
.hm-button.is-disabled.is-plain:focus,
.hm-button.is-disabled.is-plain:hover {
  background-color: #fff;
  border-color: #ebeef5;
  color: #c0c4cc;
}

.hm-button.is-loading {
  position: rhmative;
  pointer-events: none;
}

.hm-button.is-loading:before {
  pointer-events: none;
  content: "";
  position: absolute;
  left: -1px;
  top: -1px;
  right: -1px;
  bottom: -1px;
  border-radius: inherit;
  background-color: rgba(255, 255, 255, 0.35);
}

.hm-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

.hm-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

.hm-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.hm-button--primary:focus,
.hm-button--primary:hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}

.hm-button--primary.is-active,
.hm-button--primary:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #fff;
}

.hm-button--primary:active {
  outline: 0;
}

.hm-button--primary.is-disabled,
.hm-button--primary.is-disabled:active,
.hm-button--primary.is-disabled:focus,
.hm-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}

.hm-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
}

.hm-button--primary.is-plain:focus,
.hm-button--primary.is-plain:hover {
  background: #409eff;
  border-color: #409eff;
  color: #fff;
}

.hm-button--primary.is-plain:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #fff;
  outline: 0;
}

.hm-button--primary.is-plain.is-disabled,
.hm-button--primary.is-plain.is-disabled:active,
.hm-button--primary.is-plain.is-disabled:focus,
.hm-button--primary.is-plain.is-disabled:hover {
  color: #8cc5ff;
  background-color: #ecf5ff;
  border-color: #d9ecff;
}

.hm-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}

.hm-button--success:focus,
.hm-button--success:hover {
  background: #85ce61;
  border-color: #85ce61;
  color: #fff;
}

.hm-button--success.is-active,
.hm-button--success:active {
  background: #5daf34;
  border-color: #5daf34;
  color: #fff;
}

.hm-button--success:active {
  outline: 0;
}

.hm-button--success.is-disabled,
.hm-button--success.is-disabled:active,
.hm-button--success.is-disabled:focus,
.hm-button--success.is-disabled:hover {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}

.hm-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
}

.hm-button--success.is-plain:focus,
.hm-button--success.is-plain:hover {
  background: #67c23a;
  border-color: #67c23a;
  color: #fff;
}

.hm-button--success.is-plain:active {
  background: #5daf34;
  border-color: #5daf34;
  color: #fff;
  outline: 0;
}

.hm-button--success.is-plain.is-disabled,
.hm-button--success.is-plain.is-disabled:active,
.hm-button--success.is-plain.is-disabled:focus,
.hm-button--success.is-plain.is-disabled:hover {
  color: #a4da89;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}

.hm-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}

.hm-button--warning:focus,
.hm-button--warning:hover {
  background: #ebb563;
  border-color: #ebb563;
  color: #fff;
}

.hm-button--warning.is-active,
.hm-button--warning:active {
  background: #cf9236;
  border-color: #cf9236;
  color: #fff;
}

.hm-button--warning:active {
  outline: 0;
}

.hm-button--warning.is-disabled,
.hm-button--warning.is-disabled:active,
.hm-button--warning.is-disabled:focus,
.hm-button--warning.is-disabled:hover {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}

.hm-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
}

.hm-button--warning.is-plain:focus,
.hm-button--warning.is-plain:hover {
  background: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
}

.hm-button--warning.is-plain:active {
  background: #cf9236;
  border-color: #cf9236;
  color: #fff;
  outline: 0;
}

.hm-button--warning.is-plain.is-disabled,
.hm-button--warning.is-plain.is-disabled:active,
.hm-button--warning.is-plain.is-disabled:focus,
.hm-button--warning.is-plain.is-disabled:hover {
  color: #f0c78a;
  background-color: #fdf6ec;
  border-color: #faecd8;
}

.hm-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}

.hm-button--danger:focus,
.hm-button--danger:hover {
  background: #f78989;
  border-color: #f78989;
  color: #fff;
}

.hm-button--danger.is-active,
.hm-button--danger:active {
  background: #dd6161;
  border-color: #dd6161;
  color: #fff;
}

.hm-button--danger:active {
  outline: 0;
}

.hm-button--danger.is-disabled,
.hm-button--danger.is-disabled:active,
.hm-button--danger.is-disabled:focus,
.hm-button--danger.is-disabled:hover {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}

.hm-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
}

.hm-button--danger.is-plain:focus,
.hm-button--danger.is-plain:hover {
  background: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
}

.hm-button--danger.is-plain:active {
  background: #dd6161;
  border-color: #dd6161;
  color: #fff;
  outline: 0;
}

.hm-button--danger.is-plain.is-disabled,
.hm-button--danger.is-plain.is-disabled:active,
.hm-button--danger.is-plain.is-disabled:focus,
.hm-button--danger.is-plain.is-disabled:hover {
  color: #f9a7a7;
  background-color: #fef0f0;
  border-color: #fde2e2;
}

.hm-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}

.hm-button--info:focus,
.hm-button--info:hover {
  background: #a6a9ad;
  border-color: #a6a9ad;
  color: #fff;
}

.hm-button--info.is-active,
.hm-button--info:active {
  background: #82848a;
  border-color: #82848a;
  color: #fff;
}

.hm-button--info:active {
  outline: 0;
}

.hm-button--info.is-disabled,
.hm-button--info.is-disabled:active,
.hm-button--info.is-disabled:focus,
.hm-button--info.is-disabled:hover {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}

.hm-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
}

.hm-button--info.is-plain:focus,
.hm-button--info.is-plain:hover {
  background: #909399;
  border-color: #909399;
  color: #fff;
}

.hm-button--info.is-plain:active {
  background: #82848a;
  border-color: #82848a;
  color: #fff;
  outline: 0;
}

.hm-button--info.is-plain.is-disabled,
.hm-button--info.is-plain.is-disabled:active,
.hm-button--info.is-plain.is-disabled:focus,
.hm-button--info.is-plain.is-disabled:hover {
  color: #bcbec2;
  background-color: #f4f4f5;
  border-color: #e9e9eb;
}

.hm-button--text,
.hm-button--text.is-disabled,
.hm-button--text.is-disabled:focus,
.hm-button--text.is-disabled:hover,
.hm-button--text:active {
  border-color: transparent;
}

.hm-button--medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.hm-button--mini,
.hm-button--small {
  font-size: 12px;
  border-radius: 3px;
}

.hm-button--medium.is-round {
  padding: 10px 20px;
}

.hm-button--medium.is-circle {
  padding: 10px;
}

.hm-button--small,
.hm-button--small.is-round {
  padding: 9px 15px;
}

.hm-button--small.is-circle {
  padding: 9px;
}

.hm-button--mini,
.hm-button--mini.is-round {
  padding: 7px 15px;
}

.hm-button--mini.is-circle {
  padding: 7px;
}

.hm-button--text {
  color: #409eff;
  background: 0 0;
  padding-left: 0;
  padding-right: 0;
}

.hm-button--text:focus,
.hm-button--text:hover {
  color: #66b1ff;
  border-color: transparent;
  background-color: transparent;
}

.hm-button--text:active {
  color: #3a8ee6;
  background-color: transparent;
}

.hm-button-group {
  display: inline-block;
  vertical-align: middle;
}

.hm-button-group::after,
.hm-button-group::before {
  display: table;
  content: "";
}

.hm-button-group::after {
  clear: both;
}

.hm-button-group > .hm-button {
  float: left;
  position: rhmative;
}

.hm-button-group > .hm-button + .hm-button {
  margin-left: 0;
}

.hm-button-group > .hm-button:first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.hm-button-group > .hm-button:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.hm-button-group > .hm-button:first-child:last-child {
  border-radius: 4px;
}

.hm-button-group > .hm-button:first-child:last-child.is-round {
  border-radius: 20px;
}

.hm-button-group > .hm-button:first-child:last-child.is-circle {
  border-radius: 50%;
}

.hm-button-group > .hm-button:not(:first-child):not(:last-child) {
  border-radius: 0;
}

.hm-button-group > .hm-button:not(:last-child) {
  margin-right: -1px;
}

.hm-button-group > .hm-dropdown > .hm-button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left-color: rgba(255, 255, 255, 0.5);
}

.hm-button-group .hm-button--primary:first-child {
  border-right-color: rgba(255, 255, 255, 0.5);
}

.hm-button-group .hm-button--primary:last-child {
  border-left-color: rgba(255, 255, 255, 0.5);
}

.hm-button-group .hm-button--primary:not(:first-child):not(:last-child) {
  border-left-color: rgba(255, 255, 255, 0.5);
  border-right-color: rgba(255, 255, 255, 0.5);
}

.hm-button-group .hm-button--success:first-child {
  border-right-color: rgba(255, 255, 255, 0.5);
}

.hm-button-group .hm-button--success:last-child {
  border-left-color: rgba(255, 255, 255, 0.5);
}

.hm-button-group .hm-button--success:not(:first-child):not(:last-child) {
  border-left-color: rgba(255, 255, 255, 0.5);
  border-right-color: rgba(255, 255, 255, 0.5);
}

.hm-button-group .hm-button--warning:first-child {
  border-right-color: rgba(255, 255, 255, 0.5);
}

.hm-button-group .hm-button--warning:last-child {
  border-left-color: rgba(255, 255, 255, 0.5);
}

.hm-button-group .hm-button--warning:not(:first-child):not(:last-child) {
  border-left-color: rgba(255, 255, 255, 0.5);
  border-right-color: rgba(255, 255, 255, 0.5);
}

.hm-button-group .hm-button--danger:first-child {
  border-right-color: rgba(255, 255, 255, 0.5);
}

.hm-button-group .hm-button--danger:last-child {
  border-left-color: rgba(255, 255, 255, 0.5);
}

.hm-button-group .hm-button--danger:not(:first-child):not(:last-child) {
  border-left-color: rgba(255, 255, 255, 0.5);
  border-right-color: rgba(255, 255, 255, 0.5);
}

.hm-button-group .hm-button--info:first-child {
  border-right-color: rgba(255, 255, 255, 0.5);
}

.hm-button-group .hm-button--info:last-child {
  border-left-color: rgba(255, 255, 255, 0.5);
}

.hm-button-group .hm-button--info:not(:first-child):not(:last-child) {
  border-left-color: rgba(255, 255, 255, 0.5);
  border-right-color: rgba(255, 255, 255, 0.5);
}
</style>
