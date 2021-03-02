// import { Component } from 'react'
// import { connect } from 'react-redux'
// import { View, Button, Text } from '@tarojs/components'
// import { add, minus, asyncAdd } from '../../actions/counter'
// import './index.less'

import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import styles from './index.less';
import type { queryTagParams } from './data.d';
import { AtTabBar } from 'taro-ui'
import { useDispatch, useSelector } from 'react-redux';



const Index: React.FC = () => {
  const dispatch = useDispatch();

  const [tarBar, setTarBar] = useState(0);
  const { counter } = useSelector(state => ({
    counter: state.counter.num
  }))


  const handleCancel = (value) => {
    setTarBar(value);
  };


  return (
    <View>
      <View><Text>{counter}</Text></View>
      {/* <AtTabBar
        fixed
        tabList={[
          { title: '待办事项', iconType: 'bullet-list', text: 'new' },
          { title: '拍照', iconType: 'camera' },
          { title: '文件夹', iconType: 'folder', text: '100', max: 99 }
        ]}
        onClick={handleCancel}
        current={tarBar}
      /> */}
    </View>
  );
};

export default Index;







// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion
// type PageStateProps = {
//   counter: {
//     num: number
//   }
// }
// type PageDispatchProps = {
//   add: () => void
//   dec: () => void
//   asyncAdd: () => any
// }
// type PageOwnProps = {}
// type PageState = {}
// type IProps = PageStateProps & PageDispatchProps & PageOwnProps
// interface Index {
//   props: IProps;
// }

// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   add () {
//     dispatch(add())
//   },
//   dec () {
//     dispatch(minus())
//   },
//   asyncAdd () {
//     dispatch(asyncAdd())
//   }
// }))
// class Index extends Component {
//   componentWillReceiveProps (nextProps) {
//     console.log(this.props, nextProps)
//   }

//   componentWillUnmount () { }

//   componentDidShow () { }

//   componentDidHide () { }

//   render () {
//     return (
//       <View className='index'>
//         <Button className='add_btn' onClick={this.props.add}>+</Button>
//         <Button className='dec_btn' onClick={this.props.dec}>-</Button>
//         <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
//         <View><Text>{this.props.counter.num}</Text></View>
//         <View><Text>Hello, World</Text></View>
//       </View>
//     )
//   }
// }

// export default Index
