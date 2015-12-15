import React from 'react'

export default class Echarts extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    var myChart = echarts.init(this.refs.chart, 'macarons')
    var option = {
      tooltip: {
        show: true
      },
      legend: {
        data: ['销量']
      },
      xAxis: [{
        type: 'category',
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      }],
      yAxis: [{
        type: 'value'
      }],
      series: [{
        "name": "销量",
        "type": "bar",
        "data": [5, 20, 40, 10, 10, 20]
      }]
    }
    myChart.setOption(option)

    var myChart2 = echarts.init(this.refs.chart2, 'macarons')
    var option2 = {
      title: {
        text: '某楼盘销售情况',
        subtext: '纯属虚构'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['意向', '预购', '成交']
      },
      toolbox: {
        show: true,
        feature: {
          mark: {
            show: true
          },
          dataView: {
            show: true,
            readOnly: false
          },
          magicType: {
            show: true,
            type: ['line', 'bar', 'stack', 'tiled']
          },
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          }
        }
      },
      calculable: true,
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }],
      yAxis: [{
        type: 'value'
      }],
      series: [{
        name: '成交',
        type: 'line',
        smooth: true,
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default'
            }
          }
        },
        data: [10, 12, 21, 54, 260, 830, 710]
      }, {
        name: '预购',
        type: 'line',
        smooth: true,
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default'
            }
          }
        },
        data: [30, 182, 434, 791, 390, 30, 10]
      }, {
        name: '意向',
        type: 'line',
        smooth: true,
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default'
            }
          }
        },
        data: [1320, 1132, 601, 234, 120, 90, 20]
      }]
    }
    myChart2.setOption(option2)
  }

  render() {
    return (
      <div className="db-g db-padding">
        <div className="u-sm-8">
          <div className="db-panel">
            <div ref="chart" style={ {height: '450px'} }></div>
          </div>
        </div>
        <div className="u-sm-8">
          <div className="db-panel">
            <div ref="chart2" style={ {height: '450px'} }></div>
          </div>
        </div>
      </div>
    )
  }

}
