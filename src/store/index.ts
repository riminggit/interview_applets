import { observable } from 'mobx'

const configStore = observable({
  phone : '',

  changePhone (now){
    this.phone = now
  },

})

export default configStore

