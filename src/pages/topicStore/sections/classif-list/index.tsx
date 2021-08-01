import React, { useState, useRef, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import "./index.less";
import { observer } from "mobx-react";
import { dataStore } from "../../../../store/data";
import { queryClassify } from "../../../../utils/service";
import { toImgBase64 } from "../../../../utils/utils";

const taro_env = process.env.TARO_ENV;

const TopicStore: React.FC = observer(() => {
  const { getClassify, classifyData } = dataStore;

  useEffect(() => {
    if (!classifyData) {
      queryClassify().then((res: any) => {
        Taro.setStorageSync("classifyData", res.data);
        getClassify(res.data);
      });
    }
  }, []);

  // const [searchCondition,setSearchCondition] = useState<string>('')

  // const changeSearchCondition = (val,e) =>{
  //   setSearchCondition(val)
  // }
  
  return (
    <View className="classify">
      <View className="classify-content">
        {classifyData?.rows?.map((item, index) => {
          return (
            <View className="classify-item">
              <Image
                className="classify-item-icon"
                src={toImgBase64(item.img_svg)}
              />
              <View className="classify-item-font">
                <Text
                  className={
                    item.name.length < 6 ? "font-size-large" : "font-size-small"
                  }
                >
                  {item.name}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
});

export default TopicStore;
