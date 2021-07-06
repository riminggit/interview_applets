
import React from 'react';
import Taro from "@tarojs/taro";
import { View, Text } from '@tarojs/components'
import './index.less';

const taro_env = process.env.TARO_ENV
const Footer: React.FC = () => {


    return (
        <View className='footer' style={ taro_env === 'weapp' ?{bottom:5 } : {}}>
            <View>
                <Text>@作者：日明  </Text>
                <Text style={{ paddingLeft: 20 }}>联系方式：暂无</Text>
            </View> <View>
                <Text>如果觉得有用，请不要忘了给作者打赏一杯咖啡钱哦</Text>
            </View>
        </View>
    );
};

export default Footer;




