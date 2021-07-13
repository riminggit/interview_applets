import React, { useState, useRef, useEffect } from "react";
import Taro from "@tarojs/taro";
import "./index.less";
import { View, Text, Image } from "@tarojs/components";
import { globalStore } from "../../store/global";
import configStore from "../../store";
import { topicSwotUpIcon, recommendIcon3 } from "../../assests/globalSvg";

import moment from "moment";
const taro_env = process.env.TARO_ENV;
interface IProps {
  styles?:React.CSSProperties,
  mainIcon:string,
  subIcon?:string,
  title?:string,
  explain?:string,
  onClick?:Function,

}
export default (props: IProps) => {
  return (
    <View className="fun-card" style={{...props?.styles}} onClick={()=>{props.onClick}}>
      <View className="fun-card-content">
        <Image className="fun-card-icon" src={props.mainIcon} />
        <View  className="fun-card-font">
           <Text>
              {props.title}
           </Text>
        </View>
        <View  className="explain">
           <Text>
              {props.explain}
           </Text>
        </View>
      </View>
      {
        props.subIcon ? <Image className="fun-subIcon" src={props.subIcon} /> : null
      }
    </View>
  );
};
