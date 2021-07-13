import { observable , action } from 'mobx'
import { IuserInfo } from '../types/dataType';
import ThemeColor from "../theme/color";

class  GlobalStore {
    @observable loginStatus=false
    @observable userInfo:IuserInfo | null = null
    @observable userLevelColor=ThemeColor.orange


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

