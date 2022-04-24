# uni-chat

基于 composition-api + uni-app + ts + vue-cli 开发,在 uni-app 中使用 vue3.0 的语法。

h5 预览：http://buqiyuan.gitee.io/uni-chat/

apk download: https://static-fa3f0f3d-b02a-4b84-9744-c7591c652c4d.bspapp.com/uni-chat.apk

后台地址：https://github.com/buqiyuan/uni-chat-server

gh-pages 自动发布脚本
file-saver 下载应用 saveAs(downloadLink, 'uni-chat.apk')

uview-ui@1.8.5


body {
overflow: hidden;
}

setTimeout(() => {
root.$Router.replace({
name: 'index',
})
}, 100)

禁止页面滚动
"style": {
"navigationBarTitleText": "我的",
"enablePullDownRefresh": false,
"disableScroll": true
}

mainfest.json
    //禁止与手机状态栏重叠
    "statusbar": {
      "immersed": false
    }

样式问题
scroll-view 100% 100vh

marginBottom:50px

// uni-ui 规则如下配置
//pages 数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
// rpx 计算所支持的最大设备宽度，单位 px，默认值为 960
// 设备实际宽度超出 rpx 计算所支持的最大宽度时，rpx 计算所采用的固定屏幕宽度，单位 px，默认值为 375
// 不显示滚动条
"condition" : { //模式配置，仅开发期间生效
"current": 0, //当前激活的模式(list 的索引项)
"list": [
{
"name": "login", //模式名称
"path": "pages/login/login", //启动页面，必选
"query": "" //启动参数，在页面的 onLoad 函数里面得到
}
]
}

全局背景颜色：#1296db

微信开发者是 dist！！！！！！
dist
