import React, { useState, useRef, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import "./index.less";
import { observer } from "mobx-react";
import { globalStore } from "../../store/global";
import { AtSearchBar } from "taro-ui";
import ClassifyList from "./sections/classif-list";
const taro_env = process.env.TARO_ENV;

const TopicStore: React.FC = observer(() => {
  // const [searchCondition,setSearchCondition] = useState<string>('')

  // const changeSearchCondition = (val,e) =>{
  //   setSearchCondition(val)
  // }
  return (
    <View
      className="topic-store"
      style={{ height: taro_env === "h5" ? "calc(100vh - 50Px)" : "100vh" }}
    >
      <ClassifyList />
      {/* <AtSearchBar value={searchCondition} onChange={(val,e)=>{changeSearchCondition(val,e)}}/> */}
    </View>
  );
});

export default TopicStore;
