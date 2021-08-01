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

const taro_env = process.env.TARO_ENV;
interface IProps {}
export default (props: IProps) => {
  return (
    <View className="bottom-function">
      <View className="bottom-function-list">
        <View className="bottom-function-item">
          <View className="bottom-function-item-left">
            <Image className="bottom-function-item-icon" src={facebackIcon} />
            <Text className="bottom-function-item-font">问题反馈</Text>
          </View>
          <Image className="bottom-function-item-icon" src={rightArrows} />
        </View>

        <View className="bottom-function-item">
          <View className="bottom-function-item-left">
            <Image className="bottom-function-item-icon" src={suggestIcon} />
            <Text className="bottom-function-item-font">我有建议</Text>
          </View>
          <Image className="bottom-function-item-icon" src={rightArrows} />
        </View>

        <View className="bottom-function-item">
          <View className="bottom-function-item-left">
            <Image
              className="bottom-function-item-icon"
              src={configurationIcon}
            />
            <Text className="bottom-function-item-font">首页模块配置</Text>
          </View>
          <Image className="bottom-function-item-icon" src={rightArrows} />
        </View>

        <View className="bottom-function-item">
          <View className="bottom-function-item-left">
            <Image className="bottom-function-item-icon" src={aboutIcon} />
            <Text className="bottom-function-item-font">关于本软件</Text>
          </View>
          <Image className="bottom-function-item-icon" src={rightArrows} />
        </View>
      </View>
    </View>
  );
};
