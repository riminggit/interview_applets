import { Component } from 'react'
import { Provider, observer, inject } from 'mobx-react'
import Taro from "@tarojs/taro";
import configStore from './store'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import './app.less'

const store = {
  configStore
}


class App extends Component {
  constructor(props) {
    super(props);

    process.env.TARO_ENV === 'weapp' ? Taro.getSystemInfo({
      success: function (e) {
        // 判断是否是苹果11及以上手机  top44是苹果样式不一
        if (e.safeArea.top > 20 && e.model.indexOf("iPhone") > -1) {
          configStore.changePhone('iphonex')
        } else {
          configStore.changePhone(e.model)
        }
      }
    }) : null;

  }

  componentDidMount() {

  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // this.props.children 就是要渲染的页面
  render() {
    return (
      <Provider store={store} >
        {this.props.children}
      </Provider>
    )
  }
}

export default App
