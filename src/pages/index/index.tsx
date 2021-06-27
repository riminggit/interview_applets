
import React, { useState, useRef, useEffect } from 'react';
import Taro from "@tarojs/taro";
import { View, Button, Text } from '@tarojs/components'
import './index.less';
import { getOpenId } from './service'
// import type { queryTagParams } from './data.d';

const taro_env = process.env.TARO_ENV

const Index: React.FC = () => {
  useEffect(() => {
    taro_env === 'weapp' ? weappIniteLogin() : null;
  }, [])

  //登陆处理过程
  const weappIniteLogin = () => {
    weappLoginDispose()
  }

  //小程序登陆处理
  const weappLoginDispose = () => {
    checkWeappIslogin()
  }

  //检查微信小程序是否还在登陆
  const checkWeappIslogin = () => {
    Taro.checkSession({
      success: function () {
        //session_key 未过期，并且在本生命周期一直有效
        weappLogin()
      },
      fail: function () {
        // session_key 已经失效，需要重新执行登录流程
        // 登录
        weappLogin()
      }
    })
  }

  //小程序登_调用Taro.login()获取登录凭证code
  const weappLogin = () => {
    Taro.clearStorageSync()
    Taro.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          getOpenId({ code: res.code }).then((res:any) => {
            Taro.setStorageSync('openId', res.openid)
          }).catch((err) => {
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }

  return (
    <View>
      <View><Text>01111</Text></View>
    </View>
  );
};

export default Index;




