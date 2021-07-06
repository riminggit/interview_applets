import React, { useState, useRef, useEffect } from 'react';
import Taro from "@tarojs/taro";
import './index.less';
import { View, Text, Image } from '@tarojs/components'
import { globalStore } from '../../store/global'
import configStore from '../../store/index';


import {
    interviewIcon,
} from '../../assests/globalSvg'
const taro_env = process.env.TARO_ENV
interface IProps {

}
export default (props: IProps) => {

    return (

        <View className='small-card-function-item'>
            <View className='small-card-function-item-content'>
                <View className='icon'>
                    <Image
                        className='icon-style'
                        src={interviewIcon}
                    />
                </View>
                <View className='title'>
                    <Text> 面试记录</Text>
                </View>
                <View className='sub-title'>
                    <Text> 自己记录的面试</Text>
                </View>
            </View>
        </View>

    );
};


