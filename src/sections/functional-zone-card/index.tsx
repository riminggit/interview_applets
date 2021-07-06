import React, { useState, useRef, useEffect } from 'react';
import Taro from "@tarojs/taro";
import './index.less';
import { View,  Text, Image } from '@tarojs/components'
import { globalStore } from '../../store/global'
import configStore from '../../store/index';
import {
  mistakeBook,
  answerRecordIcon,
  readRecordIcon,
} from '../../assests/globalSvg'


const taro_env = process.env.TARO_ENV
interface IProps {

}
export default (props: IProps) => {

    const functional_list = [
        {
          icon: mistakeBook,
          font: '错题记录',
          fun: () => { }
        },
        {
          icon: answerRecordIcon,
          font: '答题记录',
          fun: () => { }
        },
        {
          icon: readRecordIcon,
          font: '浏览记录',
          fun: () => { }
        }
      ]
    
  
    return (
        <View className='functional-zone-card'>
        <View className='functional-zone-layout'>
          {
            functional_list.map((item, index) => {
              return <View key={index} className='functional-item-map' onClick={item.fun}>
                <View className='functional-item'>
                  <View className='functional-icon'>
                    <Image
                      className='functional-icon-style'
                      src={item.icon}
                    />
                  </View>
                  <View className='functional-font'>
                    <Text>{item.font}</Text>
                  </View>
                </View>
                {
                  index < functional_list.length - 1 ? <View className='cut-off-rule' /> : null
                }
              </View>
            })
          }
        </View>
      </View>
    );
};


