import React, { useState, useRef, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import "./index.less";
import { observer } from "mobx-react";
import { globalStore } from "../../store/global";
import { dataStore } from "../../store/data";
import { AtSearchBar } from "taro-ui";
import MyTabs from "./sections/mytabs";
import MyPane from "./sections/mypane";
import ToLogin from "../../components/to-login";
import VirtualList from "@tarojs/components/virtual-list";

const taro_env = process.env.TARO_ENV;
const virtualListItemSize = 100;

const TopicStore: React.FC = observer(() => {
  const classifyData =
    Taro.getStorageSync("classifyData") || dataStore.classifyData;
  const { ITypeAndClassifyCompilations } = dataStore;

  const [searchCondition, setSearchCondition] = useState<string>("");
  const changeSearchCondition = (val, e) => {
    setSearchCondition(val);
  };

  const [currentTabs, setCurrentTabs] = useState<number>(0);
  const handleClick = (value) => {
    // console.log(value);
    setCurrentTabs(value);
  };

  const [virtualListLoading, setVirtualListLoading] = useState<boolean>(false);

  const listReachBottom = () => {
    Taro.showLoading();
    // 如果 loading 与视图相关，那它就应该放在 `this.state` 里
    // 我们这里使用的是一个同步的 API 调用 loading，所以不需要
    setVirtualListLoading(true);
    // setTimeout(() => {
    //   const { data } = this.state
    //   this.setState({
    //     data: data.concat(buildData(data.length))
    //   }, () => {
    //     setVirtualListLoading(false)
    //     Taro.hideLoading()
    //   })
    // }, 1000)
  };

  return (
    <View
      className="collect-store"
      style={{ height: taro_env === "h5" ? "calc(100vh - 50Px)" : "100vh" }}
    >
      {globalStore.loginStatus ? (
        <View>
          <View className="search-bar ">
            <AtSearchBar
              value={searchCondition}
              onChange={(val, e) => {
                changeSearchCondition(val, e);
              }}
              placeholder="请输入收藏题目标题"
            />
          </View>
          <View className="collect-store-content">
            <View className="tabs-content">
              <MyTabs
                tabList={classifyData?.rows}
                activityTab={currentTabs}
                onChange={handleClick}
              >
                {classifyData?.rows?.map((item, index) => {
                  return (
                    <MyPane activityTab={currentTabs} index={index}>
                      <View className="pane-content">
                        这是第{index + 1}页内容
                        {/* <VirtualList
                        className="List"
                        height='calc(100vh - 255px)'
                        itemData={data}
                        itemCount={dataLen}
                        itemSize={virtualListItemSize}
                        width="100%"
                        onScroll={({ scrollDirection, scrollOffset }) => {
                          if (
                            // 避免重复加载数据
                            !virtualListLoading &&
                            // 只有往前滚动我们才触发
                            scrollDirection === "forward" &&
                            // 5 = (列表高度 / 单项列表高度)
                            // 100 = 滚动提前加载量，可根据样式情况调整
                            scrollOffset > (dataLen - 5) * itemSize + 100
                          ) {
                            this.listReachBottom();
                          }
                        }}
                      >
                        {Row}
                      </VirtualList> */}
                      </View>
                    </MyPane>
                  );
                })}
              </MyTabs>
            </View>
          </View>
        </View>
      ) : (
        <ToLogin />
      )}
    </View>
  );
});

export default TopicStore;
