import { observable , action } from 'mobx'
import { IuserInfo } from '../types/dataType';
import ThemeColor from "../theme/color";
import Taro from "@tarojs/taro";
class  GlobalStore {
    @observable loginStatus=false
    @observable userInfo:IuserInfo | null = null
    @observable userLevelColor=ThemeColor.orange

    @observable classifyColor:object = Taro.getStorageSync("classifyColor")
    @observable colorList:string[] = Taro.getStorageSync("colorList")

    @observable openId:string = ""
    @observable sessionKey:string = ""

    @action.bound
    changOpenId = (data) => {
       this.openId = data
    }

    @action.bound
    changSessionKey = (data) => {
       this.sessionKey = data
    }

    @action.bound
    getClassifyColor = (res) => {
       this.classifyColor = res.data
       this.colorList = res.color
    }

    @action.bound
    changUserInfo = (thisUsrInfo:IuserInfo) => {
        this.userInfo = thisUsrInfo
    }

    @action.bound
    changLoginStatus = () => {
        this.loginStatus = !this.loginStatus
    }

}

export const globalStore = new GlobalStore()

