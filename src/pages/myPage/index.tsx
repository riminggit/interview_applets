import React, { useState, useRef, useEffect } from 'react';
import Taro from "@tarojs/taro";
import './index.less';
import { View, Button, Text, Image } from '@tarojs/components'
import { observer } from 'mobx-react'

import BottomFunction from '../../sections/app-correlation';

const taro_env = process.env.TARO_ENV

const MyPage: React.FC = observer(() => {
  return (
    <View className='my-page' style={{ height: taro_env === 'h5' ? 'calc(100vh - 50Px)' : '100vh' }}>

      <BottomFunction />
    </View>
  );
});

export default MyPage;
