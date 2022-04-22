<template>
  <scroll-view scroll-y="true" :style="{ height: '100%' }">
    <!-- <u-navbar
      :is-back="false"
      :shadow="false"
      :border="false"
      :title-color="'#FFF'"
      :is-fixed="true"
      :title="barTitle"
      :background="{ backgroundColor: '#d04c2e' }"
    ></u-navbar> -->
    <!-- 111111 -->
    <view class="qposition" v-if="pageStatus === 1 || pageStatus === 2">
      <u-image class="img" width="100%" height="500rpx" :src="img"></u-image>
      <view class="text">阀门选择</view>
      <view class="block">
        <view class="zerobox">
          <u-image class="img" width="100rpx" height="100rpx" src="../../static/image/pb/fam1.svg"></u-image>
          <view class="box-text">生活污水直排管路阀门</view>
          <u-image class="icon" width="50rpx" height="50rpx" src="../../static/user/to.png"></u-image>
        </view>
        <view class="standard">
          <u-image class="img" width="100rpx" height="100rpx" src="../../static/image/pb/fam2.svg"></u-image>
          <view class="box-text">生活污水达标排放管路阀门</view>
          <u-image class="icon" width="50rpx" height="50rpx" src="../../static/user/to.png"></u-image>
        </view>
        <view class="standard">
          <u-image class="img" width="100rpx" height="100rpx" src="../../static/image/pb/fam3.svg"></u-image>
          <view class="box-text">油污水达标排放管路阀门</view>
          <u-image class="icon" width="50rpx" height="50rpx" src="../../static/user/to.png"></u-image>
        </view>
      </view>
      <view class="nextStep">下一步</view>
    </view>
    <!--222222222 弹窗 -->
    <view class="qmodel" v-if="pageStatus === 2">
      <u-modal
        v-model="show"
        title="铅封"
        :show-cancel-button="true"
        @confirm="handleConfirm"
        @cancel="handleCancel"
        confirm-text="是"
        cancel-text="否"
      >
        <view class="slot-content">
          <view class="modalContent">是否需要铅封/盲断</view>
        </view>
      </u-modal>
    </view>

    <!--333333333 需要铅封 -->
    <!-- <view class="need" v-if="pageStatus === 3">
      <view class="block-item">
        <view class="block-item-name">铅封/盲断编号</view>
        <u-field v-model="needMobile" label="铅封/盲断编号" placeholder="NFC手机靠近标签自动读取或手动输入"> </u-field>
      </view>
      <view class="block-item">
        <view class="block-item-name">铅封/盲断机构</view>
        <u-field v-model="needMobile" label="铅封/盲断机构" placeholder="" value="长江引航中心"> </u-field>
      </view>
      <view class="block-item">
        <view class="block-item-name">铅封/盲断人员</view>
        <u-field v-model="needMobile" label="铅封/盲断人员" placeholder="请输入" value="郭旭测试"> </u-field>
      </view>
      <view class="block-item">
        <view class="block-item-name">铅封/盲断时间</view>
        <u-field v-model="needMobile" label="铅封/盲断时间" placeholder="请输入" value="2022-4-21"> </u-field>
      </view>
      <view class="block-item">
        <view class="block-item-name">铅封/盲断地址</view>
        <u-field v-model="needMobile" label="铅封/盲断地址" placeholder="手机定位自动填入"> </u-field>
      </view>

      <view class="step">
        <u-button type="success">保存</u-button>
        <u-button type="primary">写卡</u-button>
        <u-button type="primary">上传</u-button>
      </view>
    </view> -->
    <view class="need" v-if="pageStatus === 3">
      <view class="bg"></view>
      <view class="block">
        <view class="block-item">
          <view class="block-item-name">铅封/盲断编号：</view>
          <u-field
            class="block-item-name-input"
            label=""
            label-width="10"
            v-model="needMobile.id"
            placeholder="NFC手机靠近标签自动读取或手动输入"
          >
          </u-field>
        </view>
        <view class="block-item">
          <view class="block-item-name">铅封/盲断机构：</view>
          <u-field
            class="block-item-name-input"
            label=""
            label-width="10"
            v-model="needMobile.id"
            label=""
            placeholder="自动与系统关联"
          >
          </u-field>
        </view>
        <view class="block-item">
          <view class="block-item-name">铅封/盲断时间：</view>
          <u-field
            v-model="needMobile.id"
            class="block-item-name-input"
            label=""
            label-width="10"
            placeholder="请输入铅封/盲断时间"
          >
          </u-field>
        </view>
        <view class="block-item">
          <view class="block-item-name">铅封/盲断地址：</view>
          <u-field
            v-model="needMobile.id"
            class="block-item-name-input"
            label=""
            label-width="10"
            placeholder="请输入铅封/盲断地址"
          >
          </u-field>
        </view>
      </view>
      <view class="step">
        <u-button class="step-btn" type="success" :custom-style="{ backgroundColor: '#d04d2f' }">保存</u-button>
        <u-button class="step-btn" type="primary" :custom-style="{ backgroundColor: '#d04d2f' }">写卡</u-button>
        <u-button class="step-btn" type="primary" :custom-style="{ backgroundColor: '#d04d2f' }">上传</u-button>
      </view>
    </view>

    <!--333333333333 不需要铅封 -->
    <view class="unwanted" v-if="pageStatus === 4">
      <view class="block-item">
        <view class="block-item-name">核查机构</view>
        <u-field v-model="unwantedMobile" label="核查机构" placeholder="长江引航中心"> </u-field>
      </view>
      <view class="block-item">
        <view class="block-item-name">核查人员</view>
        <u-field v-model="unwantedMobile" label="核查人员" placeholder="" value="郭旭测试"> </u-field>
      </view>
      <view class="block-item">
        <view class="block-item-name">核实时间</view>
        <u-field v-model="unwantedMobile" label="铅封/盲断人员" placeholder="请输入" value="2022-4-21"> </u-field>
      </view>
      <view class="block-item">
        <view class="block-item-name">核实地址</view>
        <u-field v-model="unwantedMobile" label="手机号" placeholder="手机定位自动填入"> </u-field>
      </view>
      <view class="block-item">
        <view class="block-item-name">不铅封/盲断原因</view>
        <u-dropdown>
          <u-dropdown-item v-model="unwantedValue" title="不铅封/盲断原因" :options="unwantedOptions"></u-dropdown-item>
        </u-dropdown>
      </view>

      <view class="step">
        <u-button type="success">保存</u-button>
        <u-button type="primary">写卡</u-button>
        <u-button type="primary">上传</u-button>
      </view>
    </view></scroll-view
  >
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
      img: '../../static/image/pb/pb2.png',
      show: true,
      content: '是否需要铅封/盲断',
      needMobile: { id: '' }, //{},
      unwantedMobile: '222', //{},
    })
    const count = ref(0)
    const barTitle = ref('选择铅封')
    const pageStatus = ref(1)

    const unwantedValue = ref(1)
    const unwantedOptions = ref([
      {
        label: '船舶已拆除管系',
        value: 1,
      },
      {
        label: '新船未安装应急排放管道',
        value: 2,
      },
      {
        label: '其他',
        value: 3,
      },
    ])

    // 提交过程中禁用按钮
    const isDisabled = computed(() => {
      return state.registerLoading || state.loginLoading
    })

    const handleConfirm = async () => {
      //     await loadChatData()
    }
    const handleCancel = async () => {
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
      barTitle,
      handleConfirm,
      handleCancel,
      count,
      toRegister,
      pageStatus,
      unwantedValue,
      unwantedOptions,
    }
  },
})
</script>

<style lang="scss" scoped>
.bg {
  height: rpx(100);
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
  border: 0 solid #d04d2f;
  z-index: 2;
}

.qposition {
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
    position: relative;
    top: rpx(-115);
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
        font-size: rpx(30);
        font-weight: 400;
      }
    }
  }
  .nextStep {
    position: relative;
    top: rpx(100);
    color: white;
    font-size: rpx(40);
    text-align: center;
    margin: rpx(50) rpx(80);
    padding: rpx(20) rpx(50);
    border-radius: rpx(10);
    background-color: #d04c2e;
  }
}

.qmodel {
  .modalContent {
    margin: rpx(30);
    text-align: center;
    color: #2979ff;
    font-weight: bold;
  }
}

.need {
  .bg {
    height: rpx(500);
    width: 100%;
    // background-image: url('../../static/image/bg2.jpg');
    background-image: url('../../static/image/pb/pb2.png');
    background-size: 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 0px;
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

  .step {
    position: relative;
    top: rpx(200);
    display: flex;
    &-btn {
    }
  }
}
</style>
