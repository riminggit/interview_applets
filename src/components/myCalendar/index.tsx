import React, { useState, useRef, useEffect } from "react";
import { View, Button, Text } from "@tarojs/components";
import "./index.less";
import * as moment from "moment";
import Calendar from "custom-calendar-taro";

interface IProps {
  clickDay?: Function;
}
export default (props: IProps) => {
  const [currentView, setCurrentView] = useState<string>(
    moment().format("YYYY-MM")
  );

  const [selectedDate, setSelectedDate] = useState<string>(
    moment().format("YYYY-MM-DD")
  );

  const [clickDate, setClickDate] = useState<Date>();

  const customStyleGenerator = {
    extraInfoStyle: {
      position: "absolute",
      fontSize: "0.5rem",
      top: "-0.35rem",
    },
    dateStyle: {
      marginTop: "0.6rem",
      borderRadius: "30%",
    },
    markStyle: {
      top: "2.4rem",
      bottom: "0",
      right: "50%",
      transform: "translateX(50%)",
    },
    containerStyle: {
      display: "flex",
      justifyContent: "center",
      height: "3.5rem",
    },
  };

  // 设置当前的视图
  const setThisCurrentView = (date) => {
    setCurrentView(date);
  };

  const onSelectMyDate = (date) => {
    // setSelectedDate(date.start);
  };

  const onThisDayClick = (data) => {
    setClickDate(data.value);
    props.clickDay && props.clickDay();
  };

  return (
    <View className="my-calendar">
      <Calendar
        view={"month"}
        marks={[
          { value: "2021-08-11", color: "red", markSize: "9px" },
          { value: "2021-08-12", color: "pink", markSize: "9px" },
          { value: "2021-08-13", color: "gray", markSize: "9px" },
          { value: "2021-08-14", color: "yellow", markSize: "9px" },
          { value: "2021-08-15", color: "darkblue", markSize: "9px" },
          { value: "2021-08-16", color: "pink", markSize: "9px" },
          { value: "2021-08-23", color: "green", markSize: "9px" },
        ]}
        extraInfo={[
          { value: "2021-08-21", text: "生日", color: "red" },
          { value: "2021-08-22", text: "休假", color: "darkblue" },
          { value: "2021-08-23", text: "会议", color: "gray" },
        ]}
        isMultiSelect={false} //是否范围选择
        selectedDateColor="#346fc2"
        bodyStyle={{
          height: "20rem",
        }}
        onSelectDate={onSelectMyDate} //选择的方法
        selectedDate={selectedDate} //选中的日期
        currentView={currentView}
        onCurrentViewChange={setThisCurrentView}
        customStyleGenerator={() => customStyleGenerator}
        onDayClick={onThisDayClick}
      />
    </View>
  );
};
