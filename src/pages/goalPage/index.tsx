import React, { useState, useRef, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import "./index.less";
import { observer } from "mobx-react";
import { globalStore } from "../../store/global";
import { AtSearchBar } from "taro-ui";
import GlobalType from "./sections/global-type";

const taro_env = process.env.TARO_ENV;
const TopicStore: React.FC = observer(() => {
  const [searchCondition, setSearchCondition] = useState<string>("");
  const changeSearchCondition = (val, e) => {
    setSearchCondition(val);
  };

  return (
    <View
      className="goal-store"
      style={{ height: taro_env === "h5" ? "calc(100vh - 50Px)" : "100vh" }}
    >
      <View className="search-bar ">
        <AtSearchBar
          value={searchCondition}
          onChange={(val, e) => {
            changeSearchCondition(val, e);
          }}
          placeholder="请输入自定义目标"
        />
      </View>
      <View className="global-content">
        <View className="global-type">
          <GlobalType />
        </View>
        <View className="global-list">
          <View className="global-list-title">
            <View
              className="global-title-line"
              style={{ background: "#F56C6C" }}
            />
            <View className="global-list-title-font">快到期的目标</View>
          </View>
        </View>
        <View className="global-list">
          <View className="global-list-title">
            <View
              className="global-title-line"
              style={{ background: "#a0d911" }}
            />
            <View className="global-list-title-font">进行中目标</View>
          </View>
        </View>
      </View>
    </View>
  );
});

export default TopicStore;
