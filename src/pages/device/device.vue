<template>
  <view :style="{ height: '100%' }">
    <u-navbar
      :is-back="false"
      :shadow="false"
      :border="false"
      :title-color="'#fff'"
      :is-fixed="true"
      :title="barTitle"
      :background="background"
    ></u-navbar>
    <scroll-view scroll-y="true" :style="{ height: '100%' }">
      <!-- 岸电初始化-->
      <view class="init" v-if="pageStatus === 1">
        <!-- <image class="bg" scr="../../static/image/bg2.jpg" /> -->
        <view class="bg"></view>
        <view class="block">
          <view class="block-item">
            <view class="block-item-name">船舶名称：</view>
            <u-field
              class="block-item-name-input"
              label=""
              label-width="10"
              v-model="mobile"
              placeholder="请输入船舶名称"
            >
            </u-field>
          </view>
          <view class="block-item">
            <view class="block-item-name">船舶MMSI：</view>
            <u-field
              class="block-item-name-input"
              label=""
              label-width="10"
              v-model="mobile"
              label=""
              placeholder="自动与系统关联"
            >
            </u-field>
          </view>
          <view class="block-item">
            <view class="block-item-name">船舶建造时间：</view>
            <u-field
              v-model="mobile"
              class="block-item-name-input"
              label=""
              label-width="10"
              placeholder="请输入船舶建造时间"
            >
            </u-field>
          </view>
          <view class="block-item">
            <view class="block-item-name">船员人数：</view>
            <u-field
              v-model="mobile"
              class="block-item-name-input"
              label=""
              label-width="10"
              placeholder="请输入船员人数"
            >
            </u-field>
          </view>
        </view>
        <view class="nextStep">下一步</view>
      </view>
      <!-- 下一步-->
      <view class="init" v-if="pageStatus === 2">
        <image class="bg" scr="../../static/image/bg2.jpg"></image>
        <view class="block">
          <view class="block-item">
            <view class="block-item-name">电压：</view>
            <u-field
              v-model="mobile"
              class="block-item-name-input"
              label=""
              label-width="10"
              placeholder="请输入电压"
              defalutValue="1000V"
            >
            </u-field>
          </view>
          <view class="block-item">
            <view class="block-item-name">频率：</view>
            <u-field
              v-model="mobile"
              class="block-item-name-input"
              label=""
              label-width="10"
              placeholder="请输入频率"
              defalutValue="1000V"
            >
            </u-field>
          </view>
          <view class="block-item">
            <view class="block-item-name">电流：</view>
            <u-field
              v-model="mobile"
              class="block-item-name-input"
              label=""
              label-width="10"
              placeholder="请输入电流"
              defalutValue="63A"
            >
            </u-field>
          </view>
        </view>

        <view class="step">
          <u-button class="step-btn" type="success" :custom-style="{ backgroundColor: '#ee3d33' }">保存</u-button>
          <u-button class="step-btn" type="primary" :custom-style="{ backgroundColor: '#ee3d33' }">写卡</u-button>
          <u-button class="step-btn" type="primary" :custom-style="{ backgroundColor: '#ee3d33' }">上传</u-button>
        </view>
      </view>
    </scroll-view>
  </view>
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
      show: true,
      content: '东临碣石，以观沧海',
      background: { backgroundColor: '#ee3d33' }, //#fc1e37
      mobile: '',
    })
    const count = ref(0)
    const barTitle = ref('长江海事局')
    const pageStatus = ref(1)

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
      pageStatus,
    }
  },
})
</script>

<style lang="scss" scoped>
.init {
  // TODO
  height: 100%; //height: 100%;

  .bg {
    height: rpx(500);
    width: 100%;
    // background-image: url('../../static/image/bg2.jpg');
    background-image: url('../../static/image/device-bg.png');
    background-size: 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 0px;
  }
}

.block {
  background-color: white;
  top: rpx(300);
  margin: rpx(50) rpx(50);
  padding: rpx(50);
  box-shadow: 0px 1px 3px 3px rgba(223, 223, 223, 0.5);
  z-index: 999;
  position: relative;
  top: rpx(200);
  border-radius: rpx(30);

  &-item-name {
    color: black;
    font-size: rpx(30);
    margin-top: rpx(10);

    &-input {
      color: rgb(0, 0, 0);
      border: 1px solid #ee3d33;
      border-bottom-style: solid;
      border-right-style: none;
      border-top-style: none;
      border-left-style: none;
    }
  }
}

.nextStep {
  position: relative;
  top: rpx(200);
  color: white;
  font-size: rpx(40);
  text-align: center;
  margin: rpx(50) rpx(80);
  padding: rpx(20) rpx(50);
  border-radius: rpx(10);
  background-color: #ee3d33;
}

.step {
  position: relative;
  top: rpx(200);
  display: flex;
  &-btn {
  }
}

::v-deep .u-border-bottom:after,
.u-border-left:after,
.u-border-right:after,
.u-border-top-bottom:after,
.u-border-top:after,
.u-border:after {
  content: ' ';
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  box-sizing: border-box;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  width: 199.8%;
  height: 199.7%;
  -webkit-transform: scale(0.5, 0.5);
  transform: scale(0.5, 0.5);
  border: 0 solid #f00;
  z-index: 2;
}

.block-item-name-input {
}
</style>
