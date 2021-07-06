
// 柱状图
import React from "react";
import { View } from "@tarojs/components";
import { EChart } from "echarts-taro3-react";
import "./index.less";


export default class Pie extends React.Component<any, any> {

    componentDidMount() {
        let handred = 100
        let { point, color, bgcolor } = this.props
        const defautOption = {
            title: {
                text: point + '%',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    color: color ? color : '#3a99ef',
                    fontSize: '12'
                },
            },
            series: [{
                name: 'circle',
                type: 'pie',
                clockWise: true,
                radius: ['50%', '66%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                hoverAnimation: false,
                data: [{
                    value: point,
                    name: '占比',
                    itemStyle: {
                        normal: {
                            color: { // 颜色渐变
                                colorStops: [{
                                    offset: 0,
                                    color: color ? color : '#3a99ef' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: bgcolor ? bgcolor : '#5eb0fb' // 100% 处的颜色
                                }]
                            },
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    }
                }, {
                    name: '剩余',
                    value: handred - point,
                    itemStyle: {
                        normal: {
                            color: '#d8ebfc'
                        }
                    }
                }]
            }]
        }
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