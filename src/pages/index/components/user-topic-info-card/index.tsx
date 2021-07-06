
import React, { useState, useRef, useEffect } from 'react';
import Taro from "@tarojs/taro";
import { View, Text, Image } from '@tarojs/components'
import './index.less';
import Pie from '../../../../components/weapp-echarts/pie-schedule-simple'

const taro_env = process.env.TARO_ENV

interface IProps {
    levelColor?: string;
    echartsId: string;
    point: number | string;
    title: string;
    btnTitle?: string;
    icon?: string;
    topicNum: string | number;
    btnBackground?: string;
}
export default (props: IProps) => {

    return (
        <View className='user-topic-info-card'>
            <View className='user-topic-info-charts'>
                {
                    taro_env === 'weapp' && <Pie point={props.point} canvasId={props.echartsId} ></Pie>
                }
            </View>
            <View className='info-content'>
                <View className='info-content-title'>
                    {
                        props.icon ? <Image
                            className='info-card-title-img'
                            src={props.icon}
                        /> : null
                    }

                    <Text className='info-content-title-font'>{props.title}</Text>
                </View>
                <View className='info-content-explain'>
                    {props.topicNum}
                </View>
                <View className='info-content-btn' style={{ background: props.btnBackground ? props.btnBackground : '#67C23A' }}>
                    <Text className='info-content-title-font'>{props.btnTitle}</Text>
                </View>
            </View>
        </View>
    );
};





