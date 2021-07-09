
// 柱状图
import React from "react";
import { View } from "@tarojs/components";
import { EChart } from "echarts-taro3-react";
import "./index.less";


export default class Pie extends React.Component<any, any> {

    componentDidMount() {
        let { dataName, color, dataValue } = this.props
        const defautOption = {
            grid: {
                left: '0',
                right: '0',
                bottom: '1%',
                top: '1%',
                // containLabel: true,
            },
            xAxis: [
                {
                    splitLine: {
                        show: false,
                    },
                    type: 'value',
                    show: false,
                },
            ],
            yAxis: [
                {
                    splitLine: {
                        show: false,
                    },
                    axisLine: {
                        //y轴
                        show: false,
                    },
                    type: 'category',
                    axisTick: {
                        show: false,
                    },
                    data: dataName,
                    axisLabel: {
                        verticalAlign: 'bottom',
                        align: 'left',
                        padding: [0, 0, 6, 10],
                    },
                },
            ],
            series: [
                {
                    name: '图表',
                    type: 'bar',
                    barWidth: 10, // 柱子宽度
                    label: {
                        show: true,
                        position: 'right', // 位置
                        color: color ? color : '#595959',
                        fontSize: 14,
                        fontWeight: 'bold', // 加粗
                        distance: 5, // 距离
                        verticalAlign: 'bottom',
                        align: 'right',
                        padding: [0, 15, 6, 0],
                    }, // 柱子上方的数值
                    itemStyle: {
                        barBorderRadius: [0, 20, 20, 0], // 圆角（左上、右上、右下、左下）
                        color: function () {
                            return 'rgb(' + [
                                Math.round(Math.random() * 200 + 55),
                                Math.round(Math.random() * 200 + 55),
                                Math.round(Math.random() * 200 + 55)
                            ].join(',') + ')';
                        }
                    },
                    data: dataValue,
                },
            ],
        };
        this.barChart.refresh(defautOption);
    }

    barChart: any;

    refBarChart = (node) => (this.barChart = node);


    render() {
        return (
            <View>
                <EChart ref={this.refBarChart} canvasId={this.props.canvasId} />
            </View>
        );
    }
}