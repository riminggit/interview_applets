import { observable, action } from 'mobx'
import { IClassify, ITypeAndClassifyCompilations } from '../types/dataType';
import Taro from "@tarojs/taro";
import { AtAvatar } from 'taro-ui';
class DataStore {
    @observable classifyData: IClassify | null = Taro.getStorageSync("classifyData")

    @observable ITypeAndClassifyCompilations: ITypeAndClassifyCompilations | {} = Taro.getStorageSync("ITypeAndClassifyCompilations") || {}


    @action.bound
    getClassify = (data: IClassify) => {
        this.classifyData = data
    }

    @action.bound
    setITypeAndClassifyCompilations = (data: ITypeAndClassifyCompilations) => {
        this.ITypeAndClassifyCompilations = data
    }

}

export const dataStore = new DataStore()

