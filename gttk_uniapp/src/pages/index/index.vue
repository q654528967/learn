<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <button @click="reqData">test</button>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import http from "@/utils/http";

const reqData = () => {
  http
    .request({
      url: "/crm-server-manage-start/manage/account/dcAccount/list",
      loading: true,
      data: { pageSize: 10, pageNo: 1, pageType: "myDuty", flag: 4 },
    })
    .then((res) => {
      console.log(res);
    });
};
reqData();
const title = ref("Hello");
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
