import React, { useState, useRef, useEffect } from 'react';
import Taro from "@tarojs/taro";
import './index.less';
import { AtAvatar } from 'taro-ui'
import { View, Button, Text, Image } from '@tarojs/components'
import Loginavater from './img/avater.png'
import { weappLoginApi } from './service'
import { observer } from 'mobx-react'
import { globalStore } from '../../store/global'
import { mistakeBook, girlIcon, boyIcon2, answerRecordIcon, readRecordIcon } from './svg'

const taro_env = process.env.TARO_ENV

const functional_list = [
  {
    icon: mistakeBook,
    font: '错题记录'
  },
  {
    icon: answerRecordIcon,
    font: '答题记录'
  },
  {
    icon: readRecordIcon,
    font: '浏览记录'
  }
]


  

const MyPage: React.FC = observer(() => {

  //获取用户信息
  const getUserProfile = () => {
    Taro.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        weappLogin(res)
      }
    })
  }

  //登陆处理过程
  const cardOperate = () => {
    const noLogin = {
      h5: () => noweappLoginDispose('h5'),
      weapp: () => getUserProfile(),
      rn: () => noweappLoginDispose('rn')
    }

    const isLogin = {
      h5: () => noweapIsLoginDispose('h5'),
      weapp: () => weappIsLogin(),
      rn: () => noweapIsLoginDispose('rn')
    }

    globalStore.userInfo ? isLogin[taro_env]() : noLogin[taro_env]()


  }

  //非小程序登陆处理
  const noweappLoginDispose = (theEnv) => {
    console.log(theEnv, 'theEnv')
  }

  //非小程序已登陆处理
  const noweapIsLoginDispose = (theEnv) => {
    console.log(theEnv, 'noweapIsLoginDispose')
  }

  //小程序已登陆处理
  const weappIsLogin = () => {
    console.log('weappIsLogin')
  }

  //小程序登陆处理
  const weappLogin = (data) => {
    let params = {
      openid: Taro.getStorageSync('openId'),
      come_from: 'weapp',
      nick_name: data.userInfo.nickName,
      avatar_url: data.userInfo.avatarUrl,
      gender: data.userInfo.gender,
      city: data.userInfo.city,
      province: data.userInfo.province,
      country: data.userInfo.country,
      language: data.userInfo.language,
      rawdata: data.rawdata,
      signature: data.signature,
      encrypteddata: data.encryptedData,
      iv: data.iv,
    }

    weappLoginApi(params).then((res: any) => {
      Taro.setStorageSync('token', res.token)
      globalStore.changUserInfo(res.userInfo)
    })

  }


  return (
    <View className='my-page' style={{ height: taro_env === 'h5' ? 'calc(100vh - 50Px)' : '100vh' }}>
      <View className='header-contant'>
        <View className='user-info-card'>
          <View className='user-content' onClick={() => { cardOperate() }}>
            <View className='user-avater'>
              <AtAvatar
                circle
                size='large'
                image={globalStore.userInfo ? `${globalStore.userInfo.avatar_url}` : Loginavater}
              />
            </View>
            <View className='user-info-box'>
              {
                globalStore.userInfo ?
                  <View className='user-info'>
                    <View className='user-name'>
                      <Text>{globalStore.userInfo.nick_name}</Text>
                      {
                        globalStore.userInfo.gender === 1 ?
                          <Image
                            className='name-img'
                            src={boyIcon2}
                          /> : <Image
                            className='name-img'
                            src={girlIcon}
                          />
                      }
                    </View>
                    <View className='explain'>
                      <Text >{globalStore.userInfo.country}</Text>
                      <Text style={{ marginLeft: 10 }}>{globalStore.userInfo.province}</Text>
                      <Text style={{ marginLeft: 10 }}>{globalStore.userInfo.city}</Text>
                    </View>
                  </View>
                  : <View className='user-info'>
                    <View ><Text>登录 / 注册</Text></View>
                    <View className='explain'>部分功能只有登陆后才能使用</View>
                  </View>
              }
            </View>
          </View>
        </View>
      </View>

      <View className='functional-zone-card'>
        <View className='functional-zone-layout'>
          {
            functional_list.map((item, index) => {

              return <View key={index} className='functional-item-map'>
                <View className='functional-item'>
                  <View className='functional-icon'>
                    <Image
                      className='functional-icon-style'
                      src={item.icon}
                    />
                  </View>
                  <View className='functional-font'>
                    <Text>{item.font}</Text>
                  </View>
                </View>
                {
                  index < functional_list.length - 1 ? <View className='cut-off-rule' /> : null
                }
              </View>
            })
          }

        </View>
      </View>

    </View>
  );
});

export default MyPage;
