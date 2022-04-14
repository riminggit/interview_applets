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

export default observer(() => {
  const { userLevelColor } = globalStore;
  const renderLevelColor = () => {
    if (userLevelColor && isDarkColor(userLevelColor)) {
      return "#fff";
    } else {
      return "#616367";
    }
  };

  const { userInfo } = globalStore;

  const genderRender = () => {
    if (userInfo?.gender === 1) {
      return <Image className="name-img" src={boyIcon2} />
    } else if (userInfo?.gender === 2) {
      return <Image className="name-img" src={girlIcon} />
    }
  }

  const levelInfoRender = () => {
    return <View className="level-info">
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
  }

  const siteRender = () => {
    if (userInfo?.country) {
      return <View className="explain">
        <Text>{userInfo?.country}</Text>
        <Text style={{ marginLeft: 10 }}>{userInfo?.province}</Text>
        <Text style={{ marginLeft: 10 }}>{userInfo?.city}</Text>
      </View>
    }
  }

  return (
    <View className="user-info-card">
      <View className="user-content">
        <View
          className="user-avater"
          onClick={() => {
            !userInfo && toLogin();
          }}
        >
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
                {genderRender()}
                <View className="promote">晋升</View>
              </View>
              {levelInfoRender()}
              {siteRender()}
            </View>
          ) : (
            <View className="user-no-info">
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
