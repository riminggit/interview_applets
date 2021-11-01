import React, { useState, useRef, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import "./index.less";
import { observer } from "mobx-react";

import { weappIniteLogin } from "../../utils/webappLogin";
import { globalStore } from "../../store/global";

import UserLoginInfoCard from "../../sections/user-login-info-card";
import TopicInfoSections from "./sections/topic-info-sections";
import FunctionalZoneCard from "../../sections/functional-zone-card";
import ThisWeekReadTopicBarEcharts from "../../sections/this-week-read-topic-bar-echarts";
import FinishedTopicPie from "../../sections/finished-topic-pie";
import EveryDayTopic from "../../sections/every-day-topic";
import FunCard from "../../components/fun-card";

import {
  topicSwotUpIcon,
  recommendIcon3,
  importTopicIcon,
} from "../../assests/globalSvg";

const taro_env = process.env.TARO_ENV;

const Index: React.FC = observer(() => {
  //  const [barCharRef,setBarCharRef] = useState()

  useEffect(() => {
    (taro_env === "weapp" &&  !Taro.getStorageSync('openId'))? weappIniteLogin() : null;
  }, []);

  return (
    <View
      className="index-page"
      style={{ minHeight: taro_env === "h5" ? "calc(100vh - 50Px)" : "100vh" }}
    >
      <View className="user-login-info-card">
        <UserLoginInfoCard />
      </View>
      <View>
        <TopicInfoSections />
      </View>
      {globalStore.loginStatus ? (
        <View>
          <View>
            <FunctionalZoneCard />
          </View>
          <View>
            <EveryDayTopic />
          </View>
          <View className="before-interviews">
            <FunCard
              mainIcon={topicSwotUpIcon}
              title="面试前突袭"
              explain="赶紧刷套题压压惊吧"
              subIcon={recommendIcon3}
            />
            <FunCard
              mainIcon={importTopicIcon}
              title="重点题专题"
              explain="相信我,多看几遍不会吃亏"
              styles={{ marginLeft: 8 }}
            />
          </View>
          <View>
            <FinishedTopicPie />
          </View>
          <View>
            <ThisWeekReadTopicBarEcharts />
          </View>
        </View>
      ) : (
        <View className="to-login-box">
        <View className="to-login-des">
          部分功能仅支持登陆后使用，请点击上面按钮进行登陆
        </View>
        </View>
      )}
    </View>
  );
});

export default Index;
