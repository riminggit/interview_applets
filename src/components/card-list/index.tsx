import React, { useState, useRef, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import { AtCheckbox } from "taro-ui";
import "./index.less";
import * as moment from "moment";

import { finishIconSeal, abandonIcon, setIcon, closeIcon } from "./svg";

interface IGoalInfo {
  goal_type?: string | number;
  custom_goals?: string;
  classify_id_list?: Array<any>;
  type_id_list?: Array<any>;
  topic_id_list?: Array<any>;
  create_at?: Date | string;
  start_at?: Date | string;
  end_at?: Date | string;
  goals_status?: string | number;
}

interface IProps {
  goalInfo: IGoalInfo;
  identifying: string | number;
}
export default (props: IProps) => {
  const { goalInfo, identifying } = props;
  const [title, setTitle] = useState<string>("");
  const end_at = moment(goalInfo.end_at);
  const start_at = moment(goalInfo.start_at);
  const [deadLine, setDeadLine] = useState<number>(0);
  const [showSet, setShowSet] = useState<boolean>(false);
  const [checkedList, setCheckedList] = useState<Array<string>>([]);
  const [checkboxOption, setCheckboxOption] = useState<Array<any>>([]);
  const [cardListBoxHeight, setCardListBoxHeight] = useState(0);
  const cardListBoxHeightRef = useRef<any>(cardListBoxHeight);
  cardListBoxHeightRef.current = cardListBoxHeight;

  useEffect(() => {
    getTitleName();
    manageData();
    setDeadLine(end_at.diff(start_at, "day"));

    Taro.nextTick(() => {
      const query = Taro.createSelectorQuery();
      query
        .selectAll(`.${identifying}`)
        .boundingClientRect()
        .exec(function (res) {
          setCardListBoxHeight(res?.[0][0]?.height);
        });
    });
  }, []);

  const manageData = () => {
    switch (goalInfo.goal_type) {
      case 2:
        classifyManage();
        break;
      case 3:
        typeManage();
        break;
      case 4:
        topicManage();
        break;
      default:
        break;
    }
  };

  const classifyManage = () => {
    let arr = [] as any;
    let selectArr = [] as any;
    goalInfo?.classify_id_list?.forEach((item) => {
      arr.push({
        value: item.id,
        label: item.name,
        disabled: item.isFinish,
      });
      item.isFinish && selectArr.push(item.id);
    });
    setCheckedList(selectArr);
    setCheckboxOption(arr);
  };

  const typeManage = () => {
    let arr = [] as any;
    let selectArr = [] as any;
    goalInfo?.type_id_list?.forEach((item) => {
      arr.push({
        value: item.id,
        label: item.name,
        disabled: item.isFinish,
      });
      item.isFinish && selectArr.push(item.id);
    });
    setCheckedList(selectArr);
    setCheckboxOption(arr);
  };

  const topicManage = () => {
    let arr = [] as any;
    let selectArr = [] as any;
    goalInfo?.topic_id_list?.forEach((item) => {
      arr.push({
        value: item.id,
        label: item.name,
        disabled: item.isFinish,
      });
      item.isFinish && selectArr.push(item.id);
    });
    setCheckedList(selectArr);
    setCheckboxOption(arr);
  };

  const getTitleName = () => {
    switch (goalInfo.goal_type) {
      case 1:
        setTitle("自定义目标");
        break;
      case 2:
        setTitle("模块目标");
        break;
      case 3:
        setTitle("知识点目标");
        break;
      case 4:
        setTitle("题目目标");
        break;
      default:
        break;
    }
  };

  const changeCradShow = () => {
    setShowSet(!showSet);
  };

  const handleChange = (value) => {
    setCheckedList(value);
  };
  closeIcon;
  return (
    <View className="card-list">
      {!showSet ? (
        <View className={`card-list-box ${identifying}`}>
          <View className="card-list-header">
            <View className="card-list-goal-type">{title}</View>
            {goalInfo.goals_status === 1 ? (
              <Image
                className="card-list-header-icon"
                src={setIcon}
                onClick={changeCradShow}
              />
            ) : null}
          </View>
          <View className="card-list-time">
            <View className="card-create-time">
              <View className="card-time-des">创建时间:</View>
              {goalInfo.create_at}
            </View>
            <View className="card-start-end-time">
              <View className="card-time-des">期限:</View>
              <View className="card-strat-time">{goalInfo.start_at}</View>
              <View className="card-strat-time-interval">~</View>
              <View className="card-end-time">{goalInfo.end_at}</View>
            </View>
          </View>
          <View className="card-list-content">
            {goalInfo.goal_type === 1 ? (
              <View className="card-list-goal-content1">
                {goalInfo.custom_goals}
              </View>
            ) : null}
            {goalInfo.goal_type === 2 ? (
              <View className="card-list-goal-content2">
                <View className="card-list-content-font">
                  {goalInfo.custom_goals}
                </View>
                <AtCheckbox
                  options={checkboxOption}
                  selectedList={checkedList}
                  onChange={handleChange}
                />
              </View>
            ) : null}
            {goalInfo.goal_type === 3 ? (
              <View className="card-list-goal-content3">
                <View className="card-list-content-font">
                  {goalInfo.custom_goals}
                </View>
                <AtCheckbox
                  options={checkboxOption}
                  selectedList={checkedList}
                  onChange={handleChange}
                />
              </View>
            ) : null}
            {goalInfo.goal_type === 4 ? (
              <View className="card-list-goal-content4">
                <View className="card-list-content-font">
                  {goalInfo.custom_goals}
                </View>
                <AtCheckbox
                  options={checkboxOption}
                  selectedList={checkedList}
                  onChange={handleChange}
                />
              </View>
            ) : null}
          </View>
          <View className="card-footer">
            <View className="card-deadLine">
              {deadLine > 0 && deadLine < 5 ? (
                <View className="card-deadLine-content">剩余{deadLine}天</View>
              ) : null}
            </View>
            <View className="card-footer-status-icon">
              {goalInfo.goals_status === 2 ? (
                <Image className="card-list-icon-style" src={abandonIcon} />
              ) : null}
              {goalInfo.goals_status === 3 ? (
                <Image className="card-list-icon-style" src={finishIconSeal} />
              ) : null}
            </View>
          </View>
        </View>
      ) : (
        <View
          className="card-operate"
          style={{ height: cardListBoxHeightRef.current }}
        >
          <View className="card-list-header">
            <View></View>
            <Image
              className="card-list-header-icon"
              src={closeIcon}
              onClick={changeCradShow}
            />
          </View>
          <View
            className="card-operate-content"
            style={{ height: cardListBoxHeightRef.current - 45 }}
          >
            {/* {goalInfo.goal_type === 1 ? (
              <Button className="btn-max-w" size="mini" type="primary" style={{marginBottom:12}}>
                目标完成
              </Button>
            ) : null} */}
            <Button
              className="btn-max-w"
              size="mini"
              type="primary"
              style={{ marginBottom: 20 }}
            >
              目标完成
            </Button>
            <Button className="btn-max-w" size="mini" type="warn">
              放弃目标
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};
