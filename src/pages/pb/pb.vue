<template>
  <!-- height: calc(100vh - var(--message-scroll-height)); -->
  <scroll-view scroll-y="true" :style="{ height: '100%' }">
    <!-- <u-navbar back-text="返回" :is-back="false" :title="barTitle"></u-navbar> -->
    <view class="login">
      <!-- <image class="bg" scr="../../static/image/pb/pb1.png" /> -->
      <u-image class="img" width="100%" height="500rpx" :src="img"></u-image>
      <view class="text">零排放</view>
      <view class="block">
        <view class="zerobox">
          <u-image class="img" width="100rpx" height="100rpx" src="../../static/image/pb/zero.svg"></u-image>
          <view class="box-text">零排放</view>
          <u-image class="icon" width="50rpx" height="50rpx" src="../../static/user/to.png"></u-image>
        </view>
        <view class="standard">
          <u-image class="img" width="100rpx" height="100rpx" src="../../static/image/pb/standard.svg"></u-image>
          <view class="box-text">达标排放</view>
          <u-image class="icon" width="50rpx" height="50rpx" src="../../static/user/to.png"></u-image>
        </view>
      </view>
    </view>
  </scroll-view>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'Login',
  setup(_, { root }) {
    const state = reactive({
      username: '',
      password: '',
      loginLoading: false,
      registerLoading: false,
      img: '../../static/image/pb/pb1.png',
    })

    const count = ref(0)
    const barTitle = ref('选择铅封')

    // 提交过程中禁用按钮
    const isDisabled = computed(() => {
      return state.registerLoading || state.loginLoading
    })

    // 用户登录
    const login = async () => {
      //     await loadChatData()
    }

    const toRegister = () => {
      root.$Router.replace({
        name: 'index',
      })
    }

    return {
      ...toRefs(state),
      isDisabled,
      login,
      count,
      barTitle,
      toRegister,
    }
  },
})
</script>

<style lang="scss" scoped>
.bg {
  height: rpx(200);
}

.img {
  border-radius: 0px 20px;
}
.text {
  color: white;
  width: 100%;
  text-align: center;
  position: absolute;
  top: rpx(200);
  font-weight: bold;
  font-size: rpx(60);
}

.block {
  // background-color: white;
  // top: rpx(300);
  // margin: rpx(50) rpx(50);
  // padding: rpx(50);
  // box-shadow: 0px 1px 3px 3px rgba(223, 223, 223, 0.5);
  // z-index: 999;
  position: relative;
  top: rpx(-115);
  // border-radius: rpx(30);

  .zerobox,
  .standard {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: rpx(50) rpx(50);
    padding: rpx(30);
    border-radius: rpx(10);
    background-color: white;
    box-shadow: 0px 1px 3px 3px rgba(223, 223, 223, 0.5);

    .box-text {
      color: rgb(27, 27, 27);
      font-size: rpx(40);
      font-weight: 450;
    }
  }
}
</style>
