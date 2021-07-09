import React, { useState, useRef, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import "./index.less";
import { observer } from "mobx-react";

import { weappIniteLogin } from "../../utils/webappLogin";
import { globalStore } from "../../store/global";

import UserLoginInfoCard from "../../sections/user-login-info-card";
import TopicInfoSections from "./sections/topic-info-sections";
import UserFunction from "./sections/user-function";
import FunctionalZoneCard from "../../sections/functional-zone-card";
import ThisWeekReadTopicBarEcharts from "../../sections/this-week-read-topic-bar-echarts";
import FinishedTopicPie from "../../sections/finished-topic-pie";
import EveryDayTopic from "../../sections/every-day-topic";
import SwotUp from "../../sections/swot-up";
import NecessarilyTopic from "../../sections/necessarily-topic";

const taro_env = process.env.TARO_ENV;

const Index: React.FC = observer(() => {
  //  const [barCharRef,setBarCharRef] = useState()

  useEffect(() => {
    taro_env === "weapp" ? weappIniteLogin() : null;
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
      <View>
        <FunctionalZoneCard />
      </View>
      <View>
        <EveryDayTopic />
      </View>
      <View className='before-interviews'>
         <SwotUp/>
         <NecessarilyTopic/>
      </View>
      <View>
        <FinishedTopicPie />
      </View>
      <View>
        <ThisWeekReadTopicBarEcharts />
      </View>
    </View>
  );
});

export default Index;
