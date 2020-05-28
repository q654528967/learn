<template>
  <div class="hm-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  },
  name: 'HmCheckboxGroup'
}
</script>
