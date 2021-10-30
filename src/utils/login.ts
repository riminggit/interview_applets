import Taro from "@tarojs/taro";
import htttRequest from './request';
import { globalStore } from '../store/global'
import { dataStore } from '../store/data'
import { queryClassify, getClassifyColor } from "./service";

const taro_env = process.env.TARO_ENV

//用户查询
export async function weappLoginApi(params: any) {
    return htttRequest('api/weappLogin', params, 'POST', true);
}

//获取用户信息
export const getUserProfile = () => {
    Taro.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
            weappLogin(res)
        }
    })
}

//登陆处理过程
export const toLogin = () => {
    const noLogin = {
        h5: () => noweappLoginDispose('h5'),
        weapp: () => getUserProfile(),
        rn: () => noweappLoginDispose('rn')
    }
    noLogin[taro_env]()
}

//非小程序登陆处理
export const noweappLoginDispose = (theEnv) => {
    // console.log(theEnv, 'theEnv')
}

//小程序登陆处理
export const weappLogin = (data) => {
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
        sessionKey:Taro.getStorageSync('sessionKey'),  
    }

    weappLoginApi(params).then((res: any) => {
        Taro.setStorageSync('token', res.token)
        globalStore.changUserInfo(res.userInfo)
        globalStore.changLoginStatus()

        // 若不存在题库分类则请求
        if (!dataStore.classifyData) {
            queryClassify().then((res: any) => {
                Taro.setStorageSync("classifyData", res.data);
                dataStore.getClassify(res.data)
            });
        }

        if (!globalStore.classifyColor || !globalStore.colorList) {
            getClassifyColor().then((res: any) => {
                Taro.setStorageSync("classifyColor", res.data);
                Taro.setStorageSync("colorList", res.color);
                globalStore.getClassifyColor(res)
            });
        }

    })

}

