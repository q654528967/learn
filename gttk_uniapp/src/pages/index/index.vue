<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <button @click="reqData">test</button>
    <uni-badge text="1"></uni-badge>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import http from "@/utils/http";
import { onLoad } from "@dcloudio/uni-app";
import { isEmpty } from "lodash-es";
const reqData = () => {
  http
    .request({
      url: "/crm-server-manage-start/manage/account/dcAccount/list",
      loading: true,
      data: { pageSize: 10, pageNo: 1, pageType: "myDuty", flag: 4 },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
onLoad((e: AnyObject | undefined) => {
  console.log(e);
  // enterpriseWechatLogin(e);
});
const enterpriseWechatLogin = async (e: AnyObject | undefined) => {
  if (typeof e === "object") {
    const { VITE_BACK_URL, VITE_APP_ID } = import.meta.env;
    let that = this;
    let backUrl = "";
    let state = String(e.state) || null;

    if (state) {
      backUrl = encodeURIComponent(VITE_BACK_URL);
    }
    if (isEmpty(e.code)) {
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${VITE_APP_ID}&redirect_uri=${VITE_BACK_URL}&response_type=code&scope=snsapi_base&state=${e.mark}#wechat_redirect`;
    } else {
      // 此时微信认证通过，返回了code
      try {
        const LoginRes = await http.request({
          url: `/sys/weChatLogin?code=${e.code}`,
        });
        if (LoginRes.success) {
          uni.setStorageSync("userToken", LoginRes.result.token);
          uni.setStorageSync("userInfo", LoginRes.result.userInfo);
        }
        console.log("成功登录");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
// reqData();
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
