<template>
  <scroll-view scroll-y="true" :style="{ height: '100%' }">
    <view class="login">
      <view class="home">
        <view class="map">
          <map-assembly style="width: 100%; height: 100%" />
        </view>
        <!-- 顶部 -->
        <headers :colors="colors" :locations="locations" :swiperList="swiperList"></headers>

        <!-- 列表 -->
        <classList :categoryList="categoryList"></classList>

        <!-- 右侧悬浮菜单栏 -->
        <suspension :scrollShow="scrollShow" :colors="colors"></suspension>
      </view>
    </view>
  </scroll-view>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed, ref } from '@vue/composition-api'
import headers from './header.vue'
import classList from './classList.vue'
import suspension from './suspension.vue'
import mapAssembly from './mapAssembly.vue'

export default defineComponent({
  name: 'Login',
  components: { headers, classList, suspension, mapAssembly },
  setup(_, { root }) {
    const state = reactive({
      username: '',
      scrollShow: '',
      loginLoading: false,
      registerLoading: false,
      swiperList: [],
      categoryList: [
        {
          //分类列表
          id: 1,
          name: '铅封查询',
          img: '../../static/image/home/1.svg',
        },
        {
          //分类列表
          id: 2,
          name: '零排地图',
          img: '../../static/image/home/2.svg',
        },
        {
          //分类列表
          id: 3,
          name: '充电站',
          img: '../../static/image/home/3.svg',
        },
        {
          //分类列表
          id: 4,
          name: '污染物接收',
          img: '../../static/image/home/4.svg',
        },
        {
          //分类列表
          id: 5,
          name: '评级报告',
          img: '../../static/image/home/5.svg',
        },
        {
          //分类列表
          id: 6,
          name: '海事头条',
          img: '../../static/image/home/6.svg',
        },
        {
          //分类列表
          id: 7,
          name: '我的反馈',
          img: '../../static/image/home/7.svg',
        },
        {
          //分类列表
          id: 8,
          name: '我的评论',
          img: '../../static/image/home/8.svg',
        },

        {
          //分类列表
          id: 9,
          name: '我的问答',
          img: '../../static/image/home/9.svg',
        },
        {
          //分类列表
          id: 10,
          name: '安全助手',
          img: '../../static/image/home/10.svg',
        },
        {
          //分类列表
          id: 11,
          name: '交通艇',
          img: '../../static/image/home/11.svg',
        },
        {
          //分类列表
          id: 12,
          name: '找工作',
          img: '../../static/image/home/12.svg',
        },
        {
          //分类列表
          id: 13,
          name: '送药上门',
          img: '../../static/image/home/13.svg',
        },

        {
          //分类列表
          id: 14,
          name: '休闲娱乐',
          img: '../../static/image/home/14.svg',
        },
        {
          //分类列表
          id: 15,
          name: '船品专区',
          img: '../../static/image/home/15.svg',
        },
      ],
    })
    const count = ref(0)
    const colors = ref('#1296db') //  ref('#fe2338')
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
.map {
  height: 60vh;
}
</style>
