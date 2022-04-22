import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)

import { router, RouterMount } from './router'
Vue.use(router)

// import store from './store/'
// import IconFont from '@/components/icon-font.vue'
// Vue.component('IconFont', IconFont)

Vue.config.productionTip = false

// 使用Vue.prototype.$message.error(res.msg)
Vue.prototype.$message = {
  error: (msg: string) => uni.showToast({ title: msg }),
  info: (msg: string) => uni.showToast({ title: msg }),
  success: (msg: string) => uni.showToast({ title: msg, icon: 'success' }),
}


import uView from 'uview-ui'
Vue.use(uView)

const app = new App({
  // store,
})

// #ifdef H5
RouterMount(app, router, '#app')
// #endif

// #ifndef H5
app.$mount() //为了兼容小程序及app端必须这样写才有效果
// #endif
