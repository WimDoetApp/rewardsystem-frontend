import {Injectable, Input} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

    @Input()
    inputData1 = null;
    @Input()
    inputData2 = null;

    xAxisData = [];
    data1 = [];
    data2 = [];
    customData = [];

    constructor() {
        if( this.inputData1 === null || this.inputData2 === null) {
            for (var i = 0; i < 100; i++) {
                this.xAxisData.push('Type ' + i);
                this.inputData1 === null ? this.data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5) : this.data1 = this.inputData1;
                this.inputData2 === null ? this.data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5) : this.data2 = this.inputData2;
            }
        } else {
            this.data1 = this.inputData1;
            this.data2 = this.inputData2;
        }
    }

    PieOption = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['Example1', 'Example2', 'Example3']
        },
        roseType: 'angle',
        series: [
            {
                name: 'PieChart',
                type: 'pie',
                radius: [0, '50%'],
                data: [
                    {value: 235, name: 'Example1'},
                    {value: 210, name: 'Example2'},
                    {value: 162, name: 'Example3'}
                ]
            }
        ]
    };

    LineOption = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
        }]
    };

    BarOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220]
            }
        ]
    };

    // BarOptionCustom = {
    //   tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
    //       type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    //     }
    //   },
    //   grid: {
    //     left: '3%',
    //     right: '4%',
    //     bottom: '3%',
    //     containLabel: true
    //   },
    //   xAxis: [
    //     {
    //       type: 'category',
    //       data: ['jan', 'feb', 'maa', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
    //       axisTick: {
    //         alignWithLabel: true
    //       }
    //     }
    //   ],
    //   yAxis: [
    //     {
    //       type: 'value'
    //     }
    //   ],
    //   series: [
    //     {
    //       name: 'punten',
    //       type: 'bar',
    //       barWidth: '60%',
    //       data: this.customData
    //     }
    //   ]
    // };

    AnimationBarOption = {
        legend: {
            data: ['Example data1', 'Example data2'],
            align: 'left'
        },
        /* toolbox: {
            // y: 'bottom',
            feature: {
                magicType: {
                    type: ['stack', 'tiled']
                },
                dataView: {},
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        }, */
        tooltip: {},
        xAxis: {
            data: this.xAxisData,
            silent: false,
            splitLine: {
                show: false
            }
        },
        yAxis: {},
        series: [{
            name: 'Example data1',
            type: 'bar',
            data: this.data1,
            animationDelay: function (idx) {
                return idx * 10;
            }
        }, {
            name: 'Example data2',
            type: 'bar',
            data: this.data2,
            animationDelay: function (idx) {
                return idx * 10 + 100;
            }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };

    getBarOption() {
        return this.BarOption;
    }

    getLineOption() {
        return this.LineOption;
    }

    getPieOption() {
        return this.PieOption;
    }

    getAnimationBarOption() {
        return this.AnimationBarOption;
    }

    // getBarOptionCustom(args) {
    //   for (let i = 0; i < args.length; i++) {
    //     this.customData.push(args[i]);
    //   }
    //   return this.BarOptionCustom;
    // }
}
