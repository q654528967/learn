<template>
  <div class="hm-form-item">
    <label class="hm-form-item__label">{{label}}</label>
    <div class="hm-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HmFormItem',
  props: {
    label: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
