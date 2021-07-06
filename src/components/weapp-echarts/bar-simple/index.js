import React from 'react'
import { View } from '@tarojs/components'
import * as echarts from '../../ec-canvas/echarts'

import './index.less'

function initChart(canvas, argument) {
  const chart = echarts.init(canvas, null, {
    width: argument.width,
    height: argument.height
  })
  canvas.setChart(chart)
  const model = {
    xCates: ['HTML', 'CSS', 'JavaScript', 'Vue', 'React', 'Node', '工程化', '网络工程', '性能优化', '安全', '数据结构与算法', '编程题', '业务场景', '移动端', '软技能', '音频/视频', '可视化', '原创', '其他'],
    data: [120, 200, 150, 80, 70, 110, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130],
    colorList: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3", "#4BABDE", "#FFDE76", "#E43C59", "#37A2DA"]
  }

  const option = {
    xAxis: {
      type: 'category',
      data: model.xCates
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: model.data,
      type: 'bar',
      itemStyle: {
        normal: {
          //每根柱子颜色设置
          color: function (params) {
            let colorList = model.colorList;
            return colorList[params.dataIndex];
          }
        }
      },
    }]
  }

  chart.setOption(option)
  return chart
}

export default class Echarts extends React.Component {

  state = {
    ec: {
      onInit: (canvas, argument) => {
        let arg = {
          height:300,
          width:300,
        }
        initChart(canvas,arg)
      }
    }
  }

  render() {
    return (
      <View className='echarts'>
        <ec-canvas id='mychart-dom-area' canvas-id='mychart-area' ec={this.state.ec}></ec-canvas>
      </View>
    )
  }
}

