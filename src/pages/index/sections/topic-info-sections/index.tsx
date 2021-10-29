import React, { useState, useRef, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import "./index.less";
import TopicInfoCard from "../../components/topic-info-card";
import UserTopicInfoCard from "../../components/user-topic-info-card";
import { globalStore } from "../../../../store/global";
import { noreadIcon, mistakeTopicIcon } from "../../svg";

interface IProps {}
export default (props: IProps) => {
  return (
    <View className="header-content">
      <View className="topic-info-card">
        <TopicInfoCard
          levelColor={globalStore.userLevelColor}
          totalTopic={106}
          typeNum={36}
          classifyNum={12}
        />
      </View>
      {globalStore.loginStatus ? (
        <View className="topic-info-card">
          <View className="user-topic-info-card">
            <UserTopicInfoCard
              echartsId="echarts"
              point={30.3}
              title="未看题目"
              icon={noreadIcon}
              topicNum={300}
              btnTitle="随机套题"
            />
          </View>
          <View className="user-topic-info-card">
            <UserTopicInfoCard
              echartsId="echarts1"
              point={60}
              title="错题重刷"
              icon={mistakeTopicIcon}
              topicNum={20}
              btnTitle="随机选题"
              btnBackground="#F56C6C"
            />
          </View>
        </View>
      ) : null}
    </View>
  );
};
