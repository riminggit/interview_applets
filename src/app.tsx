import { Component } from 'react'
import { Provider } from 'mobx-react'

import configStore from './store'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import './app.less'

const store = {
  configStore
}

class App extends Component {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store} >
        {this.props.children}
      </Provider>
    )
  }
}

export default App
