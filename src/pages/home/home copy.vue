<template>
  <view class="login">
    <view class="home">
      <div class="map">
        <!-- <map style="width: 100%; height: 100%" /> -->
      </div>
      <!-- 顶部 -->
      <!-- <headers :colors="colors" :locations="locations" :swiperList="swiperList"></headers> -->

      <!-- 列表 -->
      <!-- <classList :categoryList="categoryList"></classList> -->

      <!-- <recommend :colors="colors" :dataList="dataList" :loading="loading" bottoms="100"></recommend> -->
      <!-- 右侧悬浮菜单栏 -->
      <!-- <suspension :scrollShow="scrollShow" :colors="colors"></suspension> -->
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed, ref } from '@vue/composition-api'
import headers from './header.vue'
import classList from './classList.vue'
import suspension from './suspension.vue'

export default defineComponent({
  name: 'Login',
  components: { headers, classList, suspension },
  setup(_, { root }) {
    const state = reactive({
      username: '',
      scrollShow: '',
      loginLoading: false,
      registerLoading: false,
      swiperList: [],
      categoryList: [],
    })
    const count = ref(0)
    const colors = ref('')
    const locations = ref({ latlng: { lat: '', lng: '' } })

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
      colors,
      locations,
    }
  },
})
</script>

<style lang="scss" scoped>
.aa {
  color: #e8e5e5;
}
</style>
