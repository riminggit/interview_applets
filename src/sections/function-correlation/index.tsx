import React, { useState, useRef, useEffect } from "react";
import Taro from "@tarojs/taro";
import "./index.less";
import { View, Text, Image } from "@tarojs/components";
import { globalStore } from "../../store/global";
import configStore from "../../store";
import {
  rightArrows,
  aboutIcon,
  facebackIcon,
  suggestIcon,
  configurationIcon,
} from "../../assests/globalSvg";

import FunCard from "../../components/fun-card";

const taro_env = process.env.TARO_ENV;
interface IProps {}
export default (props: IProps) => {
  return (
    <View className="function-correlation">
      <View className="function-correlation-list">
        <FunCard
          mainIcon={facebackIcon}
          title="问题反馈"
          explain="出现问题可以跟作者反馈哦～"
        />

        <FunCard
          mainIcon={suggestIcon}
          title="我有建议"
          explain="如果有好点子也可以告诉作者"
          styles={{ marginLeft: 8 }}
        />
      </View>
      <View className="function-about-app">
        <View className="function-item">
          <View className="function-item-header">
            <Image className="function-item-icon" src={aboutIcon} />
            <Text className="function-item-font">关于本软件</Text>
          </View>
          <View className="function-item-content">
             1、的风水大师大师大师大师大师的阿斯顿阿斯顿爱上但是爱上大声点阿斯顿爱上大声点阿斯顿阿斯顿是的阿斯顿阿嗲声嗲气
          </View>
        </View>
      </View>
    </View>
  );
};
