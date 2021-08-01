import React, { useState, useRef, useEffect } from "react";
import Taro from "@tarojs/taro";
import { AtAvatar, AtProgress } from "taro-ui";
import { View, Text, Image } from "@tarojs/components";
import Loginavater from "../../assests/img/avater.png";
import { globalStore } from "../../store/global";
import { girlIcon, boyIcon2 } from "../../assests/globalSvg";
import { isDarkColor } from "../../utils/utils";
import { toLogin } from "../../utils/login";
import { observer } from "mobx-react";

import "./index.less";

interface IProps {}
export default observer((props: IProps) => {
  const { userLevelColor } = globalStore;
  const renderLevelColor = () => {
    if (userLevelColor && isDarkColor(userLevelColor)) {
        return "#fff";
    }else {
        return "#616367";
    }
  };

  let { userInfo } = globalStore;
  return (
    <View className="user-info-card">
      <View className="user-content">
        <View className="user-avater">
          <AtAvatar
            circle
            size="large"
            image={userInfo ? `${userInfo.avatar_url}` : Loginavater}
          />
        </View>
        <View className="user-info-box">
          {globalStore.loginStatus ? (
            <View className="user-info">
              <View className="user-name">
                <Text className="user-name-text">{userInfo?.nick_name}</Text>
                {userInfo?.gender === 1 ? (
                  <Image className="name-img" src={boyIcon2} />
                ) : (
                  <Image className="name-img" src={girlIcon} />
                )}
                <View className="promote">晋升</View>
              </View>
              <View className="level-info">
                <View
                  className="designation"
                  style={{ background: globalStore.userLevelColor }}
                >
                  <Text
                    className="designation-font"
                    style={{ color: renderLevelColor() }}
                  >
                    初级工程师
                  </Text>
                </View>
                <AtProgress
                  className="level-bar"
                  percent={25}
                  color={globalStore.userLevelColor}
                  isHidePercent={false}
                  strokeWidth={8}
                />
              </View>

              <View className="explain">
                <Text>{userInfo?.country}</Text>
                <Text style={{ marginLeft: 10 }}>{userInfo?.province}</Text>
                <Text style={{ marginLeft: 10 }}>{userInfo?.city}</Text>
              </View>
            </View>
          ) : (
            <View className="user-info">
              <View
                onClick={() => {
                  toLogin();
                }}
              >
                <Text>登录 / 注册</Text>
              </View>
              <View className="explain">部分功能只有登陆后才能使用</View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
});
