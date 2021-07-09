import React, { useState, useRef, useEffect } from 'react';
import Taro from "@tarojs/taro";
import './index.less';
import { View, Text, Image } from '@tarojs/components'
import { globalStore } from '../../store/global'
import configStore from '../../store';
import {
    weekIcon,
} from '../../assests/globalSvg'
import BarHorizontalSimple from '../../components/weapp-echarts/bar-horizontal-simple'

const taro_env = process.env.TARO_ENV
interface IProps {

}
export default (props: IProps) => {

    const name = ['aytyt', 'brrrrrrrrr', 'cytytyyyyyyyyyyyyyy', 'drt', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e']
    const value = [32, 43, 63, 79, 34, 43, 63, 79, 34, 43, 63, 79, 34, 43, 63, 79, 79, 79, 79, 79, 79]

    const getCanvasId = () =>{
        let id = 'barHorizontalSimpleCharts-h1'
        const valueLength = value.length
        if(valueLength <= 5 ){
            id = 'barHorizontalSimpleCharts-h1'
        }else if(valueLength > 5 && valueLength <=10) {
            id = 'barHorizontalSimpleCharts-h2'
        }else if(valueLength > 10 && valueLength <=15) {
            id = 'barHorizontalSimpleCharts-h3'
        }else if(valueLength > 15 && valueLength <=20) {
            id = 'barHorizontalSimpleCharts-h4'
        }else {
            id = 'barHorizontalSimpleCharts-h5'
        }
        return id
    }
    
    return (
        <View className='this-week-read-topic-bar-echarts'>
            <View className='title'>
                <Image
                    className='icon-style'
                    src={weekIcon}
                />
                <Text>本周刷题统计图</Text>
            </View>

            {
                taro_env === 'weapp' && <BarHorizontalSimple canvasId={getCanvasId()} dataName={name} dataValue={value} />
            }
        </View>
    );
};


