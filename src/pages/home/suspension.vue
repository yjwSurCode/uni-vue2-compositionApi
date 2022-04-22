<template>
  <view class="suspension">
    <view class="bottom">
      <view class="ontop" :style="'opacity: ' + (scrollShow == true ? '1' : '0')" @tap="goTop">
        <image src="../../static/image/home/tuc.svg" class="top_img"></image>
        <view>图层</view>
        <image src="../../static/image/home/cej.svg" class="top_img"></image>
        <view>测距 </view>
        <image src="../../static/image/home/fank.svg" class="top_img"></image>
        <view>反馈</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      showsever: false,
      iconList: [
        {
          icon: 'icon-sousou',
          name: '搜索',
          link: '/pages/views/home/search',
        },
        {
          icon: 'icon-kefu',
          name: '客服',
          link: '',
          tel: '123456',
        },
      ],
    }
  },
  props: {
    scrollShow: {
      //监听页面滚动
      type: Boolean,
      default: false,
    },
    colors: {
      type: String,
    },
  },
  methods: {
    onshowsever() {
      //控制top按钮的显示
      let shows = !this.showsever
      this.setData({
        showsever: shows,
      })
    },
    goTop() {
      //回到顶部
      uni.pageScrollTo({
        scrollTop: 0,
      })
    },
    jumpServer(item) {
      //跳转
      if (item.link !== '') {
        uni.navigateTo({
          url: item.link,
        })
      } else {
        //拨打电话
        uni.makePhoneCall({
          phoneNumber: item.tel,
        })
      }
    },
  },
}
</script>
<style scoped lang="scss">
.suspension {
  position: fixed;
  bottom: 12vh;
  right: 3%;
  width: 80upx;
  z-index: 200;
}

.suspension .top {
  width: 100%;
  padding-bottom: 20upx;
  transition: all 0.3s;
  transform: scale(0.4) translateY(80%);
  opacity: 0;
  .serve {
    width: 0upx;
    height: 0upx;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border-radius: 50%;
    margin-bottom: 20upx;
  }
}

.topon {
  width: 100%;
  transition: all 0.3s;
  opacity: 1;
  transform: none;
  .serve {
    width: 70upx;
    height: 70upx;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border-radius: 50%;
    margin-bottom: 20upx;
  }
}

.suspension .bottom .serve {
  width: 70upx;
  height: 70upx;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border-radius: 50%;
  margin-bottom: 20upx;
}

.suspension .serve:active {
  opacity: 0.8;
}

.serve .iconfont {
  font-size: 32upx;
  display: block;
  text-align: center;
  line-height: 70upx;
}

.ontop {
  width: 80upx;
  // height: 70upx;
  padding: rpx(10) rpx(10) rpx(20) rpx(10);
  background-color: rgba(255, 255, 255);
  border-radius: rpx(10);
  transition: all 0.3s;
  top: rpx(80);
  position: fixed;
}

.ontop:active {
  opacity: 0.8;
}

.ontop .top_img {
  width: 45upx;
  height: 55upx;
  display: block;
  margin: 0 auto;
  padding-top: 15upx;
  overflow: hidden;
}
</style>
