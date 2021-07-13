import { observable, action } from 'mobx'
import { IClassify } from '../types/dataType';

class DataStore {
    @observable classifyData: IClassify | null = null



    @action.bound
    getClassify = (data: IClassify) => {
        this.classifyData = data
    }



}

export const dataStore = new DataStore()

