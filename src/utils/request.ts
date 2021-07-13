import Taro from "@tarojs/taro";
import { baseUrl } from "./apiConfig"
import { globalStore } from '../store/global'

// api请求封装
const htttRequest = function (url: string, paramet: object, method: any, showToast: Boolean) {

  // 获取token
  const token = Taro.getStorageSync('token')

  // console.log(token,"token")

  if (showToast) {
    Taro.showLoading({
      title: '加载中',
    })
  }

  return new Promise<{}>((resolve, reject) => {
    Taro.request({
      url: baseUrl + url,
      data: paramet,
      method: method,
      header: {
        'content-type': 'application/json',
        'authorization': token,
      }
    }).then((res) => {
      Taro.hideLoading()
      switch (res.data.code) {
        case 200:
          return resolve(res.data)

        case 401:
          globalStore.changLoginStatus()
          // token校验失败
          Taro.navigateTo({
            url: '/pages/login/index'
          })
          Taro.clearStorageSync()
          return reject(res.data)

        default:
          setTimeout(() => {
            Taro.showToast({
              title: res.data.msg,
              icon: 'none',
            })
          }, 500);

      }
    }).catch(err => {
      Taro.showToast({
        title: '小程序数据请求失败',
        icon: 'none'
      })
      return reject(err)
    })
  })
}

export default htttRequest
