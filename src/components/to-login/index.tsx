import React, { useState, useRef, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Button } from "@tarojs/components";
import { toLogin } from "../../utils/login";
import "./index.less";
interface IProps {}
export default (props: IProps) => {


  return (
    <View className="to-login">

    <Button
      type='primary'
      className="btn-max-w"
      onClick={() => {
        toLogin();
      }}
    >
      点击登陆
    </Button>
    <View className="to-login-des">
       部分功能仅支持登陆后使用，请点击上面按钮进行登陆
    </View>
  </View>
  );
};
