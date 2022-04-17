/**
 * @description 分析智能手机浏览器 版本信息
 */
//#ifdef H5
export const browser = {
  versions: (function () {
    const u = navigator.userAgent,
      app = navigator.appVersion
    return {
      //移动终端浏览器版本信息
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
      iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
      isWeixin: u.toLowerCase().match(/MicroMessenger/i)?.[0] == 'micromessenger', //  是否是微信打开的浏览器
      isMQQbrowser: u.toLowerCase().match(/MQQbrowser/i)?.[0] == 'mqqbrowser', //  是否是微信打开的浏览器
    }
  })(),
  language: navigator?.language?.toLowerCase(),
}
//#endif

//  是否是 ios系统
export function isIos() {
  if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
    return true
  } else {
    return false
  }
}
// 是否是安卓系统
export function isAndroid() {
  return browser.versions.android
}

// 是否是移动端
export function isMobile() {
  return browser.versions.mobile
}

export function isWeixin() {
  return browser.versions.isWeixin
}

export function isMQQbrowser() {
  return browser.versions.isMQQbrowser
}
