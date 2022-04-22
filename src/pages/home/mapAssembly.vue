<template>
  <view class="pages-body">
    <map
      id="map"
      @markertap="bindTap"
      @controltap="bindControltap"
      :controls="controls"
      :markers="markers"
      :scale="15"
      :latitude="latitude"
      :longitude="longitude"
      style="width: 100%; height: 100%"
    >
      <!-- <cover-view @click="startNav">开始导航</cover-view> -->
    </map>
  </view>
</template>

<script>
// import { mapTool } from './mapTool.js'
export default {
  data() {
    return {
      subNVue: '',
      subNVueShowDetail: '',
      msg: '',
      id: 0, // 使用 marker点击事件 需要填写id
      title: 'map',
      // longitude: 116.39742,  // 默认的是北京经纬度
      // latitude: 39.909,
      longitude: 106.220885,
      latitude: 29.590185,
      controls: [],
      markers: [
        {
          id: 'gyqy',
          latitude: '29.595587852178966',
          longitude: '106.22169495575275',
          title: '企业',
          iconPath: 'logo.png',
        },
      ],
    }
  },

  onLoad() {
    this.getDeviceLocation()
  },
  onReady() {
    this.createMap() //地图创建在页面中需要在onReady调用
  },
  methods: {
    // 创建地图
    createMap() {
      let mapContext = uni.createMapContext('map')
      mapContext.$getAppMap().showUserLocation() //显示用户位置
      let screenWidth = uni.getSystemInfoSync().screenWidth
      var coefficient = screenWidth / 750
      this.controls = [
        {
          id: 'mapType',
          controlId: 'mapType',
          position: {
            width: 72 * coefficient,
            height: 72 * coefficient,
            left: 658 * coefficient,
            top: 110 * coefficient,
          },
          iconPath: './logo.png',
          clickable: true,
        },
      ]
    },
    // 获取设备位置
    getDeviceLocation() {
      plus.geolocation.getCurrentPosition(
        function (p) {
          let longitude = p.coords.longitude
          let latitude = p.coords.latitude
          console.log(`经度:${longitude} 纬度:${latitude}`)
          this.longitude = longitude
          this.latitude = latitude
        },
        function (e) {
          console.log('Geolocation error: ' + e)
        },
        {
          enableHighAccuracy: 'true', // 是否高精确度获取位置信息
          provider: 'system', // 优先使用的定位模块
        }
      )
    },
    startNav() {
      // // 这里需要使用的时wgs8坐标系即GPS定位 设置目标位置坐标点和开始位置坐标点
      // var wgs84togcj02=mapTool.wgs84togcj02(this.longitude,this.latitude)
      // // latitude: "29.59827298936982" ; longitude: "106.21791710134177"
      // var dst = new plus.maps.Point(106.21791710134177,29.59827298936982);// 目的点
      // var src = new plus.maps.Point(wgs84togcj02[0],wgs84togcj02[1]); // 开始点
      // // 调用系统地图显示
      // plus.maps.openSysMap( dst, "测试导航到你想去的地方", src );
    },
    bindControltap(e) {
      console.log(e)
    },
    bindTap(e) {
      console.log(e)
    },
  },
}
</script>

<style>
.pages-body {
  height: 100%;
  width: 100%;
}

uni-map {
  width: 100%;
}
</style>
