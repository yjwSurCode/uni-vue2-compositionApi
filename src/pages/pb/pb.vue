<template>
  <view class="login">
    <div @click="toRegister">pbpbpbppbbp</div>
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
    })
    const count = ref(0)

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
      toRegister,
    }
  },
})
</script>

<style lang="scss" scoped></style>
