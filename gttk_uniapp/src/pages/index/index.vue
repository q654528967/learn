<template>
  <view class="app-container">
    <custom-tabs
      key="ggfd"
      type="c1"
      :value="tabsVal"
      @change="changeIndex"
      tabCenter
      :defaultTextStyle="{
        width: '50%',
        padding: '0',
        color: '#999',
      }"
      :activeTextStyle="{
        width: '50%',
        padding: '0',
        color: '#4873c1',
        fontSize: '1rem',
      }"
      :activeLineStyle="{
        backgroundColor: '#4873c1',
      }"
    >
      <custom-tab-pane label="标签一" name="c1_1">
        <uni-list>
          <uni-list-item title="列表文字" />
          <uni-list-item title="列表文字" rightText="右侧文字" />
          <uni-list-item
            title="列表文字"
            note="列表描述信息"
            rightText="右侧文字"
          />
        </uni-list>
      </custom-tab-pane>
      <custom-tab-pane label="标签2" name="c1_2"
        >gdfgfhghfgfdgffff</custom-tab-pane
      >
    </custom-tabs>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tabsVal = ref(0);
const changeIndex = (e) => {
  console.log("选中:", e);
};
</script>

<style></style>
