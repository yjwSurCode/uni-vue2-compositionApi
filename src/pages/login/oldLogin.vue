<template>
  <view class="login">
    <view class="logo">
      <image class="title-img" src="../../static/image/logo.jpg"></image>
      <div class="title-text">监控船舶登陆页面</div>
    </view>
    <!-- <view @click="toRegister">注册2</view> -->
    <u-form labelPosition="left" :model="loginModel" :rules="rules" ref="form1" class="formbox">
      <u-form-item label="" prop="userInfo.name" borderBottom ref="item1" class="phone">
        <image class="phone-image" src="../../static/image/phone.svg" />

        <u-input
          v-model="loginModel.userInfo.name"
          placeholder="请输入手机号"
          :clearable="true"
          :border="false"
        ></u-input>
      </u-form-item>

      <u-form-item label="" prop="userInfo.name" borderBottom ref="item1" class="phone">
        <image class="phone-image" src="../../static/image/phone.svg" />

        <u-input v-model="loginModel.userInfo.name" placeholder="请输入密码" type="password" :border="false"></u-input>
      </u-form-item>

      <u-form-item label="" prop="userInfo.name" borderBottom ref="item1" class="phone">
        <image class="phone-image" src="../../static/image/phone.svg" />

        <u-input v-model="loginModel.userInfo.name" placeholder="请输入验证码" :border="false"></u-input>

        <vue-img-verify class="verify" @getImgCode="getImgCode" ref="vueImgVerify" />
      </u-form-item>
    </u-form>

    <button type="primary" class="submitBtn" @click="submit('customForm')">提交</button>

    <view class="mark">
      <view class="mark-forgot">忘记密码</view>
      <view class="mark-register">注册</view>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from '@vue/composition-api'
import vueImgVerify from '../../components/verify.vue'
import store from '@/store'

export default defineComponent({
  name: 'Login',
  components: { vueImgVerify },
  setup(_, { root }) {
    const state = reactive({
      username: '',
      password: '',
      loginLoading: false,
      registerLoading: false,

      //form
      rules: {
        'userInfo.name': {
          type: 'string',
          required: true,
          message: '请填写姓名',
          trigger: ['blur', 'change'],
        },
        'userInfo.sex': {
          type: 'string',
          max: 1,
          required: true,
          message: '请选择男或女',
          trigger: ['blur', 'change'],
        },
      },
      loginModel: {
        userInfo: {
          name: '',
          sex: '',
        },
      },
    })

    // 提交过程中禁用按钮
    const isDisabled = computed(() => {
      return state.registerLoading || state.loginLoading
    })

    // 用户名或密码为空
    const isEmpty = () => {
      return state.username.trim() == '' || state.password.trim() == ''
    }
    // 登录/注册 成功后加载聊天信息
    const loadChatData = async () => {
      uni.showLoading({
        title: '聊天数据加载中',
      })
      // await store.dispatch('chat/connectSocket')
      uni.hideLoading()
      setTimeout(() => {
        root.$Router.replace({
          name: 'index',
        })
      }, 100)
    }

    // 用户登录
    const login = async () => {
      if (isEmpty()) {
        return uni.showToast({ title: '用户名或密码不能为空', icon: 'none' })
      }
      state.loginLoading = true
      const { username, password } = state
      const user = { username, password }
      const data = await store.dispatch('app/login', user).finally(() => (state.loginLoading = false))
      if (data) {
        await loadChatData()
      }
    }
    // 注册用户
    const register = async () => {
      if (isEmpty()) {
        return uni.showToast({ title: '用户名或密码不能为空', icon: 'none' })
      }
      state.registerLoading = true
      const { username, password } = state
      const user = { username, password, createTime: Date.now() }
      const data = 1111 // = await store.dispatch('app/register', user).finally(() => (state.registerLoading = false))
      if (data) {
        await loadChatData()
      }
    }

    const getImgCode = (code:any) => {
      // this.imgCode = code
      // console.log('验证码: ' + this.imgCode)
    }
    // 点击按钮获取验证码
    const handleClick = () => {
      // this.imgCode = this.$refs.vueImgVerify.draw()
      // console.log('验证码: ' + this.imgCode)
    }

    const toRegister = () => {
      console.log('1232131')

      setTimeout(() => {
        root.$Router.replace({
          name: 'register',
        })
      }, 100)
    }

    return {
      ...toRefs(state),
      isDisabled,
      login,
      register,
      toRegister,
    }
  },
})
</script>

<style lang="scss" scoped>
.login ::v-deep {
}
.logo {
  height: 400upx;
  background-color: #0c4498;
  text-align: center;
  padding: 50upx;
  // height: 160upx;
  // width: 160upx;
  // display: block;
  // border-radius: 50%;
  // margin: 0 auto;
  // margin-top: 150upx;
}
.title {
  &-img {
    width: 200upx;
    height: 200upx;
  }
  &-text {
    font-size: 40upx;
    margin: 10upx;
    color: white;
  }
}
.formbox {
  margin-top: rpx(50);
}
.phone {
  padding: rpx(10) rpx(100);

  &-image {
    width: rpx(50);
    height: rpx(50);
  }
}

.submitBtn {
  border-radius: rpx(100);
  // width: 80%;
  margin: rpx(100);
}
.verify {
  width: rpx(100);
  height: rpx(50);
}

.mark {
}
</style>
