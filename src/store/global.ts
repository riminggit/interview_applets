import { observable , action } from 'mobx'
import { IuserInfo } from './data.d';

class  GlobalStore {
    @observable userInfo:IuserInfo | null = null


    @action.bound
    changUserInfo = (thisUsrInfo:IuserInfo) => {
        this.userInfo = thisUsrInfo
    }

}

export const globalStore = new GlobalStore()

