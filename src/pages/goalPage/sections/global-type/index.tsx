import React, { useState, useRef, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import "./index.less";
import { finishIcon, abandonIcon, addIcon,fenleiIcon } from "../../svg";
interface IProps {}
export default (props: IProps) => {
  const [searchCondition, setSearchCondition] = useState<string>("");
  const changeSearchCondition = (val, e) => {
    setSearchCondition(val);
  };

  return (
    <View className="goal-type-content">
      <View className="goal-card">
        <View className="card-content">
          <Image className="icon-style" src={addIcon} />
          <View className="goal-card-font">
            <Text>新增一条目标</Text>
          </View>
        </View>
      </View>
      <View className="goal-card">
        <View className="card-content">
          <Image className="icon-style" src={finishIcon} />
          <View className="goal-card-font">
            <Text>已完成</Text>
          </View>
        </View>
      </View>

      <View className="goal-card">
        <View className="card-content">
          <Image className="icon-style" src={abandonIcon} />
          <View className="goal-card-font">
            <Text>已放弃</Text>
          </View>
        </View>
      </View>


      <View className="goal-card">
        <View className="card-content">
          <Image className="icon-style" src={fenleiIcon} />
          {/* <View className="goal-card-font">
            <Text>分类</Text>
          </View> */}
        </View>
      </View>

    </View>
  );
};
