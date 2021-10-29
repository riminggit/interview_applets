import React, { useState, useRef, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import "./index.less";
import { observer } from "mobx-react";
import { globalStore } from "../../store/global";
import { dataStore } from "../../store/data";
import { AtSearchBar } from "taro-ui";
import ClassifyList from "./sections/classif-list";
import TenHopTopic from "../../sections/ten-hop-topic";
import ToLogin from "../../components/to-login";

const taro_env = process.env.TARO_ENV;
const TopicStore: React.FC = observer(() => {
  // const { classifyData } = dataStore;

  const [searchCondition, setSearchCondition] = useState<string>("");
  const changeSearchCondition = (val, e) => {
    setSearchCondition(val);
  };

  return (
    <View
      className="topic-store"
      style={{ height: taro_env === "h5" ? "calc(100vh - 50Px)" : "100vh" }}
    >
      {globalStore.loginStatus ? (
        <View>
          <View className="search-bar ">
            <AtSearchBar
              value={searchCondition}
              onChange={(val, e) => {
                changeSearchCondition(val, e);
              }}
              placeholder="请输入题目标题"
            />
          </View>
          <View className="classift-list-content">
            <ClassifyList />
          </View>
          <View className="ten-hot-topic-content">
            <TenHopTopic />
          </View>
        </View>
      ) : (
        <ToLogin />
      )}
    </View>
  );
});

export default TopicStore;
