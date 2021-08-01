import React, { useState, useRef, useEffect } from "react";
import Taro from "@tarojs/taro";
import "./index.less";
import { View, Text, Image } from "@tarojs/components";
import { observer } from "mobx-react";
import { rightArrows } from "../../assests/globalSvg";
import { getClassifyColor } from "../../utils/service";
import { isDarkColor } from "../../utils/utils";
import { globalStore } from "../../store/global";

const taro_env = process.env.TARO_ENV;
interface IProps {
  styles?: React.CSSProperties;
}

export default observer((props: IProps) => {
  // const classifyColor = Taro.getStorageSync("classifyColor");
  // const colorList = Taro.getStorageSync("colorList");
  const { classifyColor, colorList } = globalStore;

  const renderColor = (type) => {
    if (
      classifyColor &&
      classifyColor[type] &&
      isDarkColor(classifyColor[type])
    ) {
      return "#fff";
    } else {
      return "#616367";
    }
  };

  const mock = [
    {
      classify: "HTML",
      title: "HTTP请求：HTTP有几种请求方法及其用途？",
    },
    {
      classify: "JavaScript",
      title: "HTTP请求：HTTP有几种请求方法及其用途？",
    },
  ];

  useEffect(() => {
    if (!classifyColor && colorList?.length < 1) {
      getClassifyColor().then((res: any) => {
        Taro.setStorageSync("classifyColor", res.data);
        Taro.setStorageSync("colorList", res.color);
        globalStore.getClassifyColor(res);
      });
    }
  }, []);

  return (
    <View className="ten-hop-topic" style={{ ...props?.styles }}>
      <View className="content">
        <View className="title">
          <View>
            <Text>近期热题</Text>
          </View>
          <View className="title-right">
            <Text className="title-font">更多</Text>
            <Image className="bottom-function-item-icon" src={rightArrows} />
          </View>
        </View>

        <View className="topic_list">
          {mock.map((item, index) => {
            return (
              <View className="topic_item">
                <View
                  className="topic_classify"
                  style={{
                    backgroundColor: classifyColor[item.classify],
                    color: renderColor(item.classify),
                  }}
                >
                  <Text
                    className={
                      item.classify.length < 6
                        ? "font-size-large"
                        : "font-size-small"
                    }
                  >
                    {item.classify}
                  </Text>
                </View>
                <View className="topic_title">
                  <Text>{item.title}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
});
