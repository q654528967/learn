<template>
  <div ref="pickerRef">
    <input type="text" @focus="onFocus" />
    <div v-show="visible">
      <component :is="comp" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PickerDays from './PickerDays.vue';
export default defineComponent({
  name: 'date-picker',
  model: {
    event: 'change',
  },
  props: {
    value: {
      type: null,
    },
  },
  data() {
    return {
      visible: false,
      comp: 'picker-days',
    };
  },
  components: { PickerDays },
  mounted() {
    document.body.addEventListener('click', this.onClickBody);
  },
  beforeUnmount() {
    document.body.removeEventListener('click', this.onClickBody);
  },
  methods: {
    onFocus() {
      this.visible = true;
    },
    onBlur() {
      this.visible = false;
    },
    onClickBody(e: Event) {
      let pickerRef = this.$refs.pickerRef as HTMLElement;
      if (pickerRef.contains(e.target as HTMLElement)) {
        return;
      }
      this.visible = false;
    },
  },
});
</script>
