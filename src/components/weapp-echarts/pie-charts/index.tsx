
// 柱状图
import React from "react";
import { View } from "@tarojs/components";
import { EChart } from "echarts-taro3-react";
import "./index.less";


export default class Pie extends React.Component<any, any> {

    componentDidMount() {
        let { datas } = this.props
        const defautOption = {

            color: ['#37a2da', '#32c5e9', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293', '#e7bcf3', '#8378ea'],
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            toolbox: {
                show: true,

            },
            series: [
                {
                    name: 'pie',
                    type: 'pie',
                    radius: '65%',
                    center: ["50%", "50%"],
                    data: datas
                }
            ]
        };

        this.pie.refresh(defautOption);
    }

    pie: any;

    refpie = (node) => (this.pie = node);

    render() {
        return (
            <View>
                <EChart ref={this.refpie} canvasId={this.props.canvasId} />
            </View>
        );
    }
}