import React, { useState, useRef, useEffect, ReactChild } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { toImgBase64 } from "../../../../utils/utils";
import { isDarkColor } from "../../../../utils/utils";
import { globalStore } from "../../../../store/global";
import "./index.less";

interface IProps {
  activityTab: number;
  children?: ReactChild;
  index: number;
}

const taro_env = process.env.TARO_ENV;

export default (props: IProps) => {
  const { activityTab, children, index } = props;
  const { classifyColor } = globalStore;

  const isShow = () => {
    if (activityTab === index) {
      return true;
    }
    return false;
  };

  return (
    <View className="mypane"  style={{ display: isShow() ? "block" : "none" }}>
      <View className="pane-box">
        {children}
      </View>
    </View>
  );
};
