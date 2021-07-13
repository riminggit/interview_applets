import React, { useState, useRef, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import "./index.less";
import { observer } from "mobx-react";
import { dataStore } from "../../../../store/data";
import { queryClassify } from '../../service'
import {IClassify} from '../../../../types/dataType'

const taro_env = process.env.TARO_ENV;

const TopicStore: React.FC = observer(() => {
  const { classifyData }  = dataStore


  useEffect(() => {
     if(!classifyData) {
        queryClassify().then((res: any) => {
            console.log(res,"====")
            dataStore.getClassify(res.data)
        })
     }
  }, []);

  // const [searchCondition,setSearchCondition] = useState<string>('')

  // const changeSearchCondition = (val,e) =>{
  //   setSearchCondition(val)
  // }
  return <View className="classify">
      {
          classifyData?.rows.map((item,index)=>{
               return <View className='classify-item'> 
                   <Text>{item.name}</Text>
               </View>
          })
      }

  </View>;
});

export default TopicStore;
