<template>
  <div class="picker-container">
    <div class="picker-head">
      <div>&lt;</div>
      <div>{{ month }}月</div>
      <div :class="{ 'is-leap-year': isLeapYear }" @click="isLeapYear = !isLeapYear">闰年</div>
      <div>&gt;</div>
    </div>
    <div class="picker-body">body</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
const year1 = 2004,
  year2 = 2003;
export default defineComponent({
  name: 'PickerDays',
  data() {
    return {
      isLeapYear: false,
      month: new Date().getMonth() + 1,
    };
  },
  computed: {
    year() {
      return this.isLeapYear ? year1 : year2;
    },
  },
});
</script>
<style scoped>
.picker-head {
}
.is-leap-year {
  background-color: red;
}
</style>
