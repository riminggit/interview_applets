import React, { useState, useRef, useEffect, ReactChild } from "react";
import Taro from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import { toImgBase64 } from "../../../../utils/utils";
import { isDarkColor } from "../../../../utils/utils";
import { globalStore } from "../../../../store/global";
import "./index.less";

interface IProps {
  tabList: any[];
  activityTab: number;
  onChange: Function;
  children?: ReactChild;
}

const taro_env = process.env.TARO_ENV;

export default (props: IProps) => {
  const { tabList, activityTab, onChange, children } = props;
  const { classifyColor } = globalStore;

  const judgeColor = (color) => {
    if (isDarkColor(color)) {
      return "#fff";
    }
    return "#616367";
  };

  return (
    <View className="mytabs">
      <View className="tabs">
        {tabList?.map((item, index) => {
          return (
            <View
              className="tabs-item"
              style={
                activityTab === index
                  ? {
                    //   background: classifyColor[item.name],
                    //   color: judgeColor(classifyColor[item.name]),
                    background:"#d6e4ff",
                    color:judgeColor('#d6e4ff')
                    }
                  : undefined
              }
              onClick={() => {
                onChange(index);
              }}
            >
              <Image
                className="classify-item-icon"
                src={toImgBase64(item.img_svg)}
              />
              <Text
                className={
                  item.name.length < 6 ? "font-size-large" : "font-size-small"
                }
              >
                {item.name}
              </Text>
            </View>
          );
        })}
      </View>
      <View className="pane">{children}</View>
    </View>
  );
};
