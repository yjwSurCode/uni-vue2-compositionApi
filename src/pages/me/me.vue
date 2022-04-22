<template>
  <view>
    <view class="header" v-bind:class="{ status: isH5Plus }">
      <view class="userinfo">
        <view class="face"><image :src="userinfo.face"></image></view>
        <view class="info">
          <view class="username">{{ userinfo.username }}</view>
          <view class="company">{{ userinfo.company }}</view>
          <!-- <view class="integral">积分:{{ userinfo.integral }}</view> -->
        </view>
      </view>
      <view class="setting"><image src="../../static/user/setting.png"></image></view>
    </view>
    <view class="orders">
      <view class="box">
        <view
          class="label"
          v-for="(row, index) in orderTypeLise"
          :key="row.name"
          hover-class="hover"
          @tap="toOrderType(index)"
        >
          <view class="icon"
            ><view class="badge" v-if="row.badge > 0">{{ row.badge }}</view
            ><image :src="'../../static/user/' + row.icon"></image
          ></view>
          {{ row.name }}
        </view>
      </view>
    </view>
    <view class="list" v-for="(list, list_i) in severList" :key="list_i">
      <view
        class="li"
        v-for="(li, li_i) in list"
        @tap="toPage(list_i, li_i)"
        v-bind:class="{ noborder: li_i == list.length - 1 }"
        hover-class="hover"
        :key="li.name"
      >
        <view class="icon"><image :src="'../../static/user/sever/' + li.icon"></image></view>
        <view class="text">{{ li.name }}</view>
        <image class="to" src="../../static/user/to.png"></image>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      //#ifdef APP-PLUS
      isH5Plus: true,
      //#endif
      //#ifndef APP-PLUS
      isH5Plus: false,
      //#endif
      userinfo: {},
      orderTypeLise: [
        //name-标题 icon-图标 badge-角标
        { name: '船舶维护', icon: 'l1.png' },
        { name: '我的权限', icon: 'l2.png', badge: 2 },
        { name: '技术支持', icon: 'jis.png' },
        // { name: '待评价', icon: 'l4.png', badge: 9 },
        // { name: '退换货', icon: 'l5.png', badge: 0 },
      ],
      severList: [
        [
          { name: '积分明细', icon: 'mingxi.png' },
          { name: '意见反馈', icon: 'kefu.png' },
          { name: '系统使用', icon: 'security.png' },
        ],
        [
          { name: '修改密码', icon: 'point.png' },
          { name: '切换账户', icon: 'choujiang.png' },
          { name: '退出登录', icon: 'tuic.png' },
        ],
      ],
    }
  },
  onLoad() {
    //加载
    this.init()
  },
  methods: {
    init() {
      //用户信息
      this.userinfo = {
        face: '../../static/image/logo.jpg',
        username: '郭旭测试',
        company: '长江引航中心',
        integral: '1435',
      }
    },
    //用户点击订单类型
    toOrderType(index) {
      uni.showToast({ title: this.orderTypeLise[index].name })
    },
    //用户点击列表项
    toPage(list_i, li_i) {
      // uni.showToast({ title: this.severList[list_i][li_i].name })
      console.log()
      if (this.severList[list_i][li_i].name == '退出登录') {
        setTimeout(() => {
          this.$Router.replace({
            name: 'login',
          })
        }, 100)
      }
    },
  },
}
</script>

<style lang="scss">
page {
  background-color: #fff;
}
.header {
  &.status {
    padding-top: var(--status-bar-height);
  }
  background-color: #f83347;
  width: 100%;
  height: 30vw;
  padding: 0 4%;
  display: flex;
  align-items: center;
  .userinfo {
    width: 90%;
    display: flex;
    .face {
      flex-shrink: 0;
      width: 15vw;
      height: 15vw;
      image {
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
    }
    .info {
      display: flex;
      flex-flow: wrap;
      padding-left: 30upx;
      .username {
        width: 100%;
        color: #1c4d8d; //#00fff0; //rgb(0, 253, 232);
        font-size: 40upx;
      }
      .company {
        width: 100%;
        color: #fff;
        font-size: 30upx;
      }
      .integral {
        display: flex;
        align-items: center;
        padding: 0 20upx;
        height: 40upx;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 20upx;
        font-size: 24upx;
      }
    }
  }
  .setting {
    flex-shrink: 0;
    width: 6vw;
    height: 6vw;
    image {
      width: 100%;
      height: 100%;
    }
  }
}
.hover {
  background-color: #eee;
}
.orders {
  background-color: #fe2338;
  width: 100%;
  height: 11vw;
  padding: 0 4%;
  margin-bottom: calc(11vw + 40upx);
  display: flex;
  align-items: flex-start;
  border-radius: 0 0 100% 100%;
  margin-top: -1upx;
  .box {
    width: 98%;
    padding: 0 1%;
    height: 22vw;
    background-color: #fefefe;
    border-radius: 24upx;
    box-shadow: 0 0 20upx rgba(0, 0, 0, 0.15);
    margin-bottom: 40upx;
    display: flex;
    align-items: center;
    justify-content: center;
    .label {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: wrap;
      width: 100%;
      height: 16vw;
      color: #666666;
      font-size: 26upx;
      .icon {
        position: relative;
        width: 7vw;
        height: 7vw;
        margin: 0 1vw;
        .badge {
          position: absolute;
          width: 4vw;
          height: 4vw;
          background-color: #ec6d2c;
          top: -1vw;
          right: -1vw;
          border-radius: 100%;
          font-size: 20upx;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        image {
          width: 7vw;
          height: 7vw;
          z-index: 9;
        }
      }
    }
  }
}
.list {
  width: 100%;
  border-bottom: solid 26upx #f1f1f1;
  .li {
    width: 100%;
    height: 100upx;
    padding: 0 4%;
    border-bottom: solid 1upx #e7e7e7;
    display: flex;
    align-items: center;
    &.noborder {
      border-bottom: 0;
    }
    .icon {
      flex-shrink: 0;
      width: 50upx;
      height: 50upx;
      image {
        width: 50upx;
        height: 50upx;
      }
    }
    .text {
      padding-left: 20upx;
      width: 100%;
      color: #666;
    }
    .to {
      flex-shrink: 0;
      width: 40upx;
      height: 40upx;
    }
  }
}
</style>
