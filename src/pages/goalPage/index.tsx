import React, { useState, useRef, useEffect } from 'react';
import Taro from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import './index.less';
import { observer } from 'mobx-react';
import * as moment from 'moment';
import { globalStore } from '../../store/global';
import { AtSearchBar, AtCalendar } from 'taro-ui';
import MyCalendar from '../../components/myCalendar/index';
import GlobalType from './sections/global-type';
import CardList from '../../components/card-list/index';
import ToLogin from '../../components/to-login';

const goalInfo = [
  {
    goal_type: 2,
    custom_goals: '今天搞定xxx今天搞定xxx今天搞定xxx今天搞定xxx今天搞定xxx今天搞定xxx今天搞定xxx',
    classify_id_list: [
      { id: 121111123, name: 'ssssqqqqqqqqqqqqqqqqqqqqqqq', isFinish: false },
      { id: 12112123, name: 'ssss', isFinish: true },
      { id: 123213, name: 'ssss', isFinish: true },
      { id: 121443, name: 'ssss', isFinish: false },
    ],
    type_id_list: [
      { id: 1213, name: 'ssss', isFinish: false },
      { id: 121123, name: 'ssss', isFinish: true },
      { id: 123213, name: 'ssss', isFinish: true },
      { id: 121443, name: 'ssss', isFinish: false },
    ],
    topic_id_list: [
      { id: 1213, name: 'ssss', isFinish: false },
      { id: 121123, name: 'ssss', isFinish: true },
      { id: 123213, name: 'ssss', isFinish: true },
      { id: 121443, name: 'ssss', isFinish: false },
    ],
    create_at: moment().format('YYYY-MM'),
    start_at: moment().format('YYYY-MM'),
    end_at: moment().format('YYYY-MM'),
    goals_status: 1,
  },
  {
    goal_type: 1,
    custom_goals: '今天搞定xxx今天搞定xxx今天搞定xxx',
    classify_id_list: [{ id: 1213, name: 'ssss', isFinish: false }],
    type_id_list: [{ id: 1213, name: 'ssss', isFinish: false }],
    topic_id_list: [{ id: 1213, name: 'ssss', isFinish: false }],
    create_at: moment().format('YYYY-MM'),
    start_at: moment().format('YYYY-MM'),
    end_at: moment().format('YYYY-MM'),
    goals_status: 1,
  },
  {
    goal_type: 2,
    custom_goals: '今天搞定xxx今天搞定xxx今天搞定xxx',
    classify_id_list: [{ id: 1213, name: 'ssss', isFinish: false }],
    type_id_list: [{ id: 1213, name: 'ssss', isFinish: false }],
    topic_id_list: [{ id: 1213, name: 'ssss', isFinish: false }],
    create_at: moment().format('YYYY-MM'),
    start_at: moment().format('YYYY-MM'),
    end_at: moment().format('YYYY-MM'),
    goals_status: 1,
  },
  {
    goal_type: 4,
    custom_goals: '今天搞定xxx今天搞定xxx今天搞定xxx',
    classify_id_list: [{ id: 1213, name: 'ssss', isFinish: false }],
    type_id_list: [{ id: 1213, name: 'ssss', isFinish: false }],
    topic_id_list: [{ id: 1213, name: 'ssss', isFinish: false }],
    create_at: moment().format('YYYY-MM'),
    start_at: moment().format('YYYY-MM'),
    end_at: moment().format('YYYY-MM'),
    goals_status: 1,
  },
  {
    goal_type: 3,
    custom_goals: '今天搞定xxx今天搞定xxx今天搞定xxx',
    classify_id_list: [{ id: 1213, name: 'ssss', isFinish: false }],
    type_id_list: [{ id: 1213, name: 'ssss', isFinish: false }],
    topic_id_list: [{ id: 1213, name: 'ssss', isFinish: false }],
    create_at: moment().format('YYYY-MM'),
    start_at: moment().format('YYYY-MM'),
    end_at: moment().format('YYYY-MM'),
    goals_status: 1,
  },
];

const taro_env = process.env.TARO_ENV;
const TopicStore: React.FC = observer(() => {
  const [searchCondition, setSearchCondition] = useState<string>('');
  const changeSearchCondition = (val, e) => {
    setSearchCondition(val);
  };

  return (
    <View className='goal-store' style={{ height: taro_env === 'h5' ? 'calc(100vh - 50Px)' : '100vh' }}>
      {globalStore.loginStatus ? (
        <View>
          <View className="search-bar">
            <AtSearchBar
              value={searchCondition}
              onChange={(val, e) => {
                changeSearchCondition(val, e);
              }}
              placeholder="请输入自定义目标"
            />
          </View>
          <View className="global-content">
            <View className="global-type">
              <GlobalType />
            </View>
            <View className="global-calendar">
              <MyCalendar />
            </View>

            <View className="global-list">
              <View className="global-list-title">
                <View className="global-title-line" style={{ background: '#F56C6C' }} />
                <View className="global-list-title-font">我的目标</View>
              </View>
              <View className="card-list-content-outer-verticle">
                {goalInfo.map((item, index) => {
                  return (
                    <View className="card-list-item">
                      <CardList goalInfo={item} identifying={`identifying${index}`} />
                    </View>
                  );
                })}
              </View>
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
