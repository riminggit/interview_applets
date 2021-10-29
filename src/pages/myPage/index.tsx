import React from "react";
import "./index.less";
import { View } from "@tarojs/components";
import { observer } from "mobx-react";

import FunctionCorrelation from "../../sections/function-correlation";

const taro_env = process.env.TARO_ENV;

const MyPage: React.FC = observer(() => {
  return (
    <View
      className="my-page"
      style={{ height: taro_env === "h5" ? "calc(100vh - 50Px)" : "100vh" }}
    >
      <FunctionCorrelation />
    </View>
  );
});

export default MyPage;
