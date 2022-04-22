<template>
  <!-- 点击初始化铅封 -->
  <view class="init">
    <u-navbar back-text="返回" :title="barTitle"></u-navbar>
    <image class="bg" scr="../../static/image/bg3.PNG" />
    <view class="block">
      <view class="block-item">
        <view class="block-item-name">船舶名称</view>
        <u-field v-model="mobile" label="手机号" placeholder="请输入船舶名称"> </u-field>
      </view>
      <view class="block-item">
        <view class="block-item-name">船舶MMSI</view>
        <u-field v-model="mobile" label="手机号" placeholder="自动与系统关联"> </u-field>
      </view>
      <view class="block-item">
        <view class="block-item-name">船舶建造时间</view>
        <u-field v-model="mobile" label="手机号" placeholder="请输入船舶建造时间"> </u-field>
      </view>
      <view class="block-item">
        <view class="block-item-name">船员人数</view>
        <u-field v-model="mobile" label="手机号" placeholder="请输入船员人数"> </u-field>
      </view>
    </view>

    <view class="nextStep">下一步</view>

    <view>
      <u-modal v-model="show" :content="content"></u-modal>
    </view>
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
    })
    const count = ref(0)
    const barTitle = ref('更换')

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
  height: rpx(100);
}
</style>
