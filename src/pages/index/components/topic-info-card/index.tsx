
import React, { useState, useRef, useEffect } from 'react';
import Taro from "@tarojs/taro";
import { View, Text, Image } from '@tarojs/components'
import './index.less';
import { baseInfoIcon } from '../../svg'
import moment from 'moment'
const taro_env = process.env.TARO_ENV
// import BarSimple from "../../../../components/weapp-echarts/bar-simple";

interface IProps {
    levelColor?: string;
    totalTopic?: string | number;
    classifyNum?: string | number;
    typeNum?: string | number;
}
export default (props: IProps) => {

    return (
        <View className='info-card'>
            <View className='info-card-content'>
                <View className='info-card-title'>
                    <Image
                        className='info-card-title-img'
                        src={baseInfoIcon}
                    />
                    <Text className='info-card-title-font'>基础信息</Text>
                </View>
                <View className='info-card-content-item'>
                    <View>
                        <Text className='info-card-item-title'>当前题目数量</Text>
                    </View>
                    <View className='info-card-item-font'>
                        <Text>{props.totalTopic}</Text>
                    </View>
                </View>
                <View className='info-card-topic-type'>
                    <View className='info-card-content-item'>
                        <View>
                            <Text className='info-card-item-title'>类型数</Text>
                        </View>
                        <View className='info-card-item-font'>
                            <Text>{props.classifyNum}</Text>
                        </View>
                    </View>
                    <View className='info-card-content-item'>
                        <View>
                            <Text className='info-card-item-title'>知识点数</Text>
                        </View>
                        <View className='info-card-item-font'>
                            <Text>{props.typeNum}</Text>
                        </View>
                    </View>
                </View>
                {
                    taro_env === 'weapp' ? <View className='info-card-footer-time'>
                        {moment().format("YYYY-MM-DD")} 数据
                    </View> : null
                }

            </View>
        </View>
    );
};





