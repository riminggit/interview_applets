import React, { useState, useRef, useEffect } from 'react';
import Taro from "@tarojs/taro";
import './index.less';
import { View, Text, Image } from '@tarojs/components'
import { globalStore } from '../../store/global'
import configStore from '../../store';
import {
    readFinishedIcon,
} from '../../assests/globalSvg'
import Pie from '../../components/weapp-echarts/pie-charts'

const taro_env = process.env.TARO_ENV
interface IProps {

}
export default (props: IProps) => {

    let datas = [
        { name: "雨伞雨伞雨伞雨伞雨伞雨伞雨伞雨伞", value: 30 },
        { name: "晴天", value: 28 },
        { name: "电话", value: 24 },
        { name: "手机", value: 23 },
        { name: "下雨", value: 22 },
        { name: "暴雨", value: 21 },
        { name: "多云", value: 20 },
        { name: "雨衣", value: 29 },
        { name: "屋檐雨伞雨伞雨伞雨伞雨伞雨伞雨伞雨伞雨伞", value: 28 },
        { name: "大风", value: 27 },
        { name: "台风", value: 26 },
        { name: "下雪", value: 25 },
        { name: "打雷", value: 24 },
        { name: "小雨", value: 30 },
        { name: "中雨", value: 18 },
        { name: "大雨", value: 14 },
        { name: "雷阵雨", value: 13 },
        { name: "下雪", value: 12 },
        { name: "小雪", value: 11 },
        { name: "中雪", value: 10 },
        { name: "大雪", value: 9 },
        { name: "暴雪", value: 8 },
        { name: "东风", value: 7 },
        { name: "南风", value: 6 },
        { name: "西北风", value: 5 },
        { name: "北风", value: 4 },
        { name: "闪电", value: 3 }
    ]


    return (
        <View className='this-week-read-topic-bar-echarts'>
            <View className='title'>
                <Image
                    className='icon-style'
                    src={readFinishedIcon}
                />
                <Text>已看题目统计</Text>
            </View>

            {
                taro_env === 'weapp' && <Pie canvasId='world-cloud' datas={datas} />
            }
        </View>
    );
};


