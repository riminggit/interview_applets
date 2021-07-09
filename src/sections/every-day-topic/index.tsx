import React, { useState, useRef, useEffect } from "react";
import Taro from "@tarojs/taro";
import "./index.less";
import { View, Text, Image } from "@tarojs/components";
import { globalStore } from "../../store/global";
import configStore from "../../store";

import moment from "moment";
const taro_env = process.env.TARO_ENV;
interface IProps {}
export default (props: IProps) => {
  return (
    <View className="every-day-topic">
      <View className="header">
        <View className="card_type">
          <Text>每日一题</Text>
        </View>
        <View className="time">
          <Text> {moment().format("YYYY-MM-DD")}</Text>
        </View>
      </View>
      <View className='topic-title'>
        <Text>说出前端框架设计模式(MVVM或MVP又或MVC)的含义及其原理</Text>
      </View>
    </View>
  );
};
