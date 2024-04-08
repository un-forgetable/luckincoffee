// 柱状图模块1
(function() {
  // 1实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 2. 指定配置项和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图表的大小
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "在校学生",
          "机关干部",
          "自由职业者",
          "企业管理者",
          "专业人员",
          "普通工人",
          "商业服务业职工",
          "个体经营者/承包商",
          "普通职员",
          "农林牧渔劳动者",
          "退休",
          "暂无职业"
        ],
        axisTick: {
          alignWithLabel: true
        },
        // 修改刻度标签 相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6) ",
          fontSize: "12"
        },
        // 不显示x坐标轴的样式
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        // 修改刻度标签 相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6) ",
          fontSize: 12
        },
        // y轴的线条改为了 2像素
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 2
          }
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "调查人数",
        type: "bar",
        barWidth: "35%",
        data: [38, 18, 57, 134, 126, 67, 105, 66, 124, 41, 7, 17],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        }
      }
    ]
  };
  // 3. 把配置项给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 柱状图2
(function() {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6","#8B78F6"];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  // 2. 指定配置和数据
  var option = {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
      // containLabel: true
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["瑞幸","喜茶或奈雪","古茗或书亦","蜜雪冰城","Mannner","Tims"],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      },
      {
        data: [611,  468,  241,  294,  54,  21],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        data: [36.18,  27.71,  14.27,  17.41,  3.2,  1.24],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 20,
          // 此时的color 可以修改柱子的颜色
          color: function(params) {
            // params 传进来的是柱子对象
            // console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: "right",
          distance:5,
          offset:[0,1.5],
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: "{c}%"
        }
      },
      {
        name: "框",
        type: "bar",
        barCategoryGap: 50,
        barWidth: 15,
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100,100],
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        }
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 男女比例图模块制作
(function() {
  var img = 'data:image/png;base64,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';
const man =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAByCAMAAADzq6aiAAABpFBMVEUAAAAA//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A///ZqXRjAAAAi3RSTlMAAQIDBAYICQoMDQ4RExQWGBkaGxweHyAmJyksLTU4OTo7PD5AQkZHTk9QUVJTVFVYWVpgZGhqa21ucXJzdHZ5fX+AgYKDhoeIi5CRk5WWmZqbn6ChoqOlpqeoqaqsrrW2t7i5uru8vcPFx8jQ0tTX293e4OHi4+Tl5+jr7e7v8PHy8/T2+fr7/P3+d8xxFQAAAmtJREFUaN7t2vlb0zAYB/AAm1zeyKGIByKiQ9zwxgMRhifMCYooh4qgzrMw2awKKhZs80+7jbqkkGzpm/mDz/N+f1rfJZ9nT9ulTVNCiqfu0nTSspJPL9eRUmTnyBp1s/Zgt753/BvlshzS9c7a1BP7nJ53coOXEbt0vPoluinfGzTAJ1SQCbi31xaB9j4weJMKcwsMvhODH6BetS0GnRog2Ewl2Q8ED8vAQ0CwRQa2AMFdMnAP9Kh8EXtLZVBwQgxOgc/DTjF4CgwGDJE3H4D/mbtEoNb4NbbZG9MaYCtfbfQSVXpDdvW013tWq3tRKe/5wbifV8pLcB3dfv3jOmf07wBdRyIDsdH4bZZYLPZ8cXU1NZP5cIeV46P3Brrri2ll4YRDfcR5Eym4ExpeU99JNMq9ps8UELNZ5m01KCjJbRJwhALzUDJA21DQOSgE71Na2p9owMGUELRYA2u2qG7Mcu0dIcifCaSvGNhHTG4LQQQRRBBBBBFEEEG/4C/2/aIKuMDd/gnBt6zBSxXwBdt4LwSjrEGPCniBbdwQPxtdzu/CWhWwJp2fU0qepHb+dvdIO1EBSZt7U2xHZDOfjtxMauEoUQNJW+64mCcKTODDg9FQkKiCJBiKDobVpvhqoI/8Y3AlnclKCcHhbGkYQQQRRBBBBBFEEMH/Brzm6T2ULd3VAs97ekezpX5P6aJP8ICnd+79iw5PqdXvYtk8v1ybu9Gv/MqVPlX4Xes6zfXuXS9d5Upn/K+ePc53nnNXVwNz+dIkYDmuYshdPxvf8rdU5b6Z4cSDoBXC1kcpy5w6xpfaJ00rPX6kQKc/RsXweS7aQLIAAAAASUVORK5CYII=';
const woman =
    'data:image/png;base64,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';
var sexData = [{
    name: '男性',
    value: 403
}, {
    name: '女性',
    value: 398
}];

var data = [];
var color = ['#00FFFF', "#C424FF", '#ffa800', '#ff5b00', '#ff3000']
for (var i = 0; i < sexData.length; i++) {
    data.push(
      { value: sexData[i].value,
        name: sexData[i].name,
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: color[i],
                shadowColor: color[i],
            }
        }
      }
    );
}
var seriesOption = [
  {
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [90, 94],//选择内外圈半径
    hoverAnimation: true,
    legendHoverLink: true,//图例选择时高亮
    itemStyle: {
        normal: {
            label: {
                show: true,
                // position: [0, -20],
                color: '#ddd',
                formatter: function(params) {
                    var percent = 0;
                    var total = 0;
                    for (var i = 0; i < sexData.length; i++) {
                        total += sexData[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(2);
                    if (params.name !== '') {
                        return params.name + '：' + percent + '%';
                    } else {
                        return '';
                    }
                },
            },
            labelLine: {
                length: 20,
                show: true,
                color: '#00ffff',
                width: 30
            }
        }
    },
    data: data
}];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".line .chart"));
  // 2.指定配置
  var option = {
    color: color,
    graphic: {
        elements: [{
                type: "image",
                z: 3,
                style: {
                    image: img,
                    width: 178*0.9,
                    height: 178*0.9
                },
                left: 'center',
                top: 'center',
                position: [100, 100]
            }, {
                type: 'image',
                z: 3,
                style: {
                    image: woman,
                    width: 65*0.9,
                    height: 100*0.9
                },
                left: '50%',
                top: 'center'
            },
            {
                type: 'image',
                z: 3,
                style: {
                    image: man,
                    width: 65*0.9,
                    height: 100*0.9
                },
                right: '50%',
                top: 'center'
            }
        ]
    },
    tooltip: {
        show: true
    },
    toolbox: {
        show: false
    },
    series: seriesOption
}

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });

})();
// 收入分布 模块制作
(function() {
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  var option = {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      top: "0%",
      data: ["现实消费者","潜在消费者"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },

    grid: {
      left: "10",
      top: "30",
      right: "35",
      bottom: "10",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        // x轴更换数据
        data: [
          "小于1500元",
          "1501-3000元",
          "3001-6000元",
          "6001-10000元",
          "大于10000元",
        ],
        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "现实消费者",
        type: "line",
        smooth: true,
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: "2"
        },
        // 填充颜色设置
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 设置拐点
        symbol: "circle",
        // 拐点大小
        symbolSize: 8,
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        data: [
          18,
          53,
          143,
          206,
          10
        ]
      },
      {
        name: "潜在消费者",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [
          93,
          215,
          34,
          22,
          7
        ]
      }
    ]
  };
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 饼形图1
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  // 2.指定配置
  var option = {
    color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab","#17C1AB"],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },

    legend: {
      bottom: "0%",
      // 修改小图标的大小
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "10"
      }
    },
    series: [
      {
        name: "年龄分布",
        type: "pie",
        // 这个radius可以修改饼形图的大小
        // radius 第一个值是内圆的半径 第二个值是外圆的半径
        radius: ["40%", "60%"],
        center: ["50%", "45%"],
        avoidLabelOverlap: false,
        // 图形上的文字
        label: {
          show: false,
          position: "center"
        },
        // 链接文字和图形的线是否显示
        labelLine: {
          show: false
        },
        data: [
          { value: 227, name: "15-24岁" },
          { value: 157, name: "25-29岁" },
          { value: 236, name: "30-34岁" },
          { value: 111, name: "35-39岁" },
          { value: 56, name: "40-44岁" },
          { value: 14, name: "45-49岁" }
        ]
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 饼形图2 地区分布模块
(function() {
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  var option = {
    color: [
      "#E95B56",
      "#EE8A33",
      "#F6DB6B",
      "#A8CED4",
      "#46C3B4",
      "#7954E5",
      "#4A5DE4",
      "#3A82DC"
    ],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [
      {
        name: "地区分布",
        type: "pie",
        radius: ["10%", "70%"],
        center: ["50%", "50%"],
        roseType: "radius",
        // 图形的文字标签
        label: {
          fontSize: 10
        },
        // 链接图形和文字的线条
        labelLine: {
          // length 链接图形的线条
          length: 6,
          // length2 链接文字的线条
          length2: 8
        },
        data: [
          { value: 578, name: "价格" },
          { value: 311, name: "外观设计" },
          { value: 193, name: "产品质量" },
          { value: 173, name: "联名热度和话题度" },
          { value: 162, name: "品牌" },
          { value: 139, name: "功能性" },
          { value: 131, name: "品牌认可度" },
          { value: 28, name: "特别活动" }
        ]
      }
    ]
  };
  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 模拟飞行路线模块地图模块
(function() {
  var myChart = echarts.init(document.querySelector(".map .chart"));
//   myChart.showLoading();//绘制地区生产总值
// $.get('https://geo.datav.aliyun.com/areas_v3/bound/620100_full.json', function (geoJson) {
//   myChart.hideLoading();
//   echarts.registerMap('HK', geoJson);
//   myChart.setOption(
//     (option = {
//       title: {
//         text: '兰州市 8 个行政区县样本量分配表',
//         subtext: 'Data from Aliyun',
//         sublink:
//           'https://datav.aliyun.com/portal/school/atlas/area_selector'
//       },
//       tooltip: {
//         trigger: 'item',
//         formatter: '{b}<br/>{c} (亿元)'
//       },
//       toolbox: {
//         show: true,
//         orient: 'vertical',
//         left: 'right',
//         top: 'center',
//         feature: {
//           dataView: { readOnly: false },
//           restore: {},
//           saveAsImage: {}
//         }
//       },
//       visualMap: {
//         min: 50,
//         max: 1100,
//         text: ['High', 'Low'],
//         realtime: false,
//         calculable: true,
//          textStyle: {
//             color: '#ffffff'
//         },
//         inRange: {
//           color: [
//           '#313695',
//           '#4575b4',
//           '#74add1',
//           '#abd9e9',
//           '#e0f3f8',
//           '#ffffbf',
//           '#fee090',
//           '#fdae61',
//           '#f46d43',
//           '#d73027',
//           '#a50026'
//         ]
//         }
//       },
//       series: [
//         {
//           name: '兰州市8个行政区地区生产总值（亿元）',
//           type: 'map',
//           map: 'HK',
//           label: {
//             show: true
//           },
//           data: [
//             { name: '城关区', value: 1061.23 },
//             { name: '皋兰县', value: 81.00 },
//             { name: '榆中县', value: 171.74 },
//             { name: '安宁区', value: 240.75 },
//             { name: '七里河区', value: 492.06 },
//             { name: '西固区', value: 391.46 },
//             { name: '永登县', value: 112.61 },
//             { name: '红古区', value: 100.01 }
//             ],
//           // 自定义名称映射
//           nameMap: {
//             城关区: '城关区',
//             皋兰县: '皋兰县',
//             榆中县: '榆中县',
//             安宁区: '安宁区',
//             七里河区: '七里河区',
//             西固区: '西固区',
//             永登县: '永登县',
//             红古区: '红古区',
//           }
//         }
//       ]
//     })
//   );
// });
  var uploadedDataURL = "js/lanzhou.json";
  var geoCoordMap = {
    永登县: [103.262203,36.634428],
    皋兰县: [103.99933,36.371254],
    红古区: [103.155814,36.274177],
    西固区: [103.522331,36.170369],
    安宁区: [103.694038,36.13329],
    城关区: [103.881032,36.091115],
    七里河区: [103.794326,35.98673],
    榆中县: [104.234975,35.98443]
  }
  var customerBatteryCityData = [
      {name: "皋兰县", value: 27},
      {name: "红古区", value: 34},
      {name: "永登县", value: 38},
      {name: "西固区", value: 133},
      {name: "安宁区", value: 82},
      {name: "城关区", value: 360},
      {name: "七里河区", value: 167},
      {name: "榆中县", value: 58},
  ]
  $.getJSON(uploadedDataURL, function(geoJson) {
      echarts.registerMap('lanzhou', geoJson);
      option = {
        title: {
          text: '兰州市 8 个行政区县抽样分布',
          subtext: 'Data from Aliyun',
          textStyle:{
            color:"#fff",
          },
          sublink:
            'https://datav.aliyun.com/portal/school/atlas/area_selector'
        },
          tooltip: {
              // borderWidth: 0,
              trigger: 'item',
              show: true,
              enterable: true,
              textStyle:{
                  fontSize:20,
                  color: '#fff'
              },
              backgroundColor: 'rgba(0,2,89,0.8)',
              formatter: '{b}<br />{c}'
          },
          geo: [
            {
              map: 'lanzhou',
              aspectScale: 0.9,
              roam: false, // 是否允许缩放
              zoom: 0.95, // 默认显示级别
              layoutSize: '95%',
              layoutCenter: ['50%', '50%'],
              itemStyle: {
                normal: {
                  areaColor: {
                    type: 'linear-gradient',
                    x: 0,
                    y: 400,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                      offset: 0,
                      color: 'rgba(37,108,190,0.3)' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: 'rgba(15,169,195,0.3)' // 50% 处的颜色
                    }],
                    global: true // 缺省为 false
                  },
                  borderColor: '#4ecee6',
                  borderWidth: 1
                },
                emphasis: {
                  areaColor: {
                    type: 'linear-gradient',
                    x: 0,
                    y: 300,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                      offset: 0,
                      color: 'rgba(37,108,190,1)' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: 'rgba(15,169,195,1)' // 50% 处的颜色
                    }],
                    global: true // 缺省为 false
                  }
                }
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#0160AD'
                },
                label: {
                  show: 0,
                  color: '#fff'
                }
              },
              zlevel: 3
            },
            {
              map: 'lanzhou',
              aspectScale: 0.9,
              roam: false, // 是否允许缩放
              zoom: 0.95, // 默认显示级别
              layoutSize: '95%',
              layoutCenter: ['50%', '50%'],
              itemStyle: {
                normal: {
                  borderColor: 'rgba(192,245,249,.6)',
                  borderWidth: 2,
                  shadowColor: '#2C99F6',
                  shadowOffsetY: 0,
                  shadowBlur: 120,
                  areaColor: 'rgba(29,85,139,.2)'
                }
              },
              zlevel: 2,
              silent: true
            },
            {
              map: 'lanzhou',
              aspectScale: 0.9,
              roam: false, // 是否允许缩放
              zoom: 0.95, // 默认显示级别
              layoutSize: '95%',
              layoutCenter: ['50%', '51.5%'],
              itemStyle: {
                // areaColor: '#005DDC',
                areaColor: 'rgba(0,27,95,0.4)',
                borderColor: '#004db5',
                borderWidth: 1
              },
              zlevel: 1,
              silent: true
            }
          ],
          series: [
            {//设置不显示标签
              geoIndex: 0,
              // coordinateSystem: 'geo',
              showLegendSymbol: true,
              type: 'map',
              roam: true,
              label: {
                normal: {
                  show: false,
                  textStyle: {
                    color: '#fff'
                  }
                },
                emphasis: {
                  show: false,
                  textStyle: {
                    color: '#fff'
                  }
                }
              },
  
              itemStyle: {
                normal: {
                  borderColor: '#2ab8ff',
                  borderWidth: 1.5,
                  areaColor: '#12235c'
                },
                emphasis: {
                  areaColor: '#2AB8FF',
                  borderWidth: 0,
                  color: 'red'
                }
              },
              map: 'lanzhou', // 使用
              data: customerBatteryCityData
              // data: this.difficultData //热力图数据   不同区域 不同的底色
            },
            {//柱形侧边
              type: 'lines',
              zlevel: 5,
              effect: {
                show: false,
                // period: 4, //箭头指向速度，值越小速度越快
                // trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                // symbol: 'arrow', //箭头图标
                // symbol: imgDatUrl,
                symbolSize: 5 // 图标大小
              },
              lineStyle: {
                width: 17, // 尾迹线条宽度
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgb(199,145,41)' // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: 'rgb(199,145,41)' // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: 'rgb(223,176,32)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgb(223,176,32)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgb(199,145,41)' // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                },
                opacity: 1, // 尾迹线条透明度
                curveness: 0 // 尾迹线条曲直度
              },
              label: {
                show: 0,
                position: 'end',
                formatter: '245'
              },
              silent: true,
              data: lineData()
            },
            {//柱形盖子
              type: 'scatter',
              coordinateSystem: 'geo',
              geoIndex: 0,
              zlevel: 5,
              label: {
                show: false,
                position: 'bottom',
                formatter: (params) => this.data[params.dataIndex].value,
                padding: [4, 8],
                backgroundColor: '#003F5E',
                borderRadius: 5,
                borderColor: '#67F0EF',
                borderWidth: 1,
                color: '#67F0EF'
              },
              symbol: 'diamond',
              symbolSize: [17, 8],
              itemStyle: {
                color: '#ffd133',
                opacity: 1
              },
              silent: true,
              data: scatterData()
            },
            {//柱形底部
              type: 'scatter',
              coordinateSystem: 'geo',
              geoIndex: 0,
              zlevel: 4,
              label: {
                formatter: '{b}',
                position: 'bottom',
                color: '#fff',
                fontSize: 12,
                distance: 10,
                show: true
              },
              symbol: 'diamond',
              symbolSize: [17, 8],
              itemStyle: {
                // color: '#F7AF21',
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgb(199,145,41)' // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: 'rgb(199,145,41)' // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: 'rgb(223,176,32)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgb(223,176,32)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgb(199,145,41)' // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                },
                opacity: 1
                // shadowColor: '#fff',
                // shadowBlur: 5,
                // shadowOffsetY: 2
              },
              silent: true,
              data: scatterData2()
            }
            // {
            //   type: 'effectScatter',
            //   coordinateSystem: 'geo',
            //   geoIndex: 0,
            //   symbol: 'circle',
            //   symbolSize: 4,
            //   showEffectOn: 'render',
            //   rippleEffect: {
            //     brushType: 'fill',
            //     scale: 10
            //   },
            //   hoverAnimation: true,
            //   label: {
            //     // formatter: (p) => {
            //     //   console.log(p, 99999)
            //     //   return p.data[2]
            //     // },
            //     formatter: '{b}',
            //     position: 'bottom',
            //     color: '#fff',
            //     fontSize: 14,
            //     distance: 10,
            //     show: true
            //   },
            //   itemStyle: {
            //     color: '#bacac6'
            //   },
            //   zlevel: 5,
            //   data: this.scatterData2
            // }
          ]
        }
     myChart.setOption(option);
  })

    
  // 动态计算柱形图的高度（定一个max）
  function lineMaxHeight () {
      const maxValue = Math.max(...customerBatteryCityData.map(item => item.value))
      return 0.9/maxValue
  }
      // 柱状体的主干
  function lineData () {
      return customerBatteryCityData.map((item) => {
        return {
          coords: [geoCoordMap[item.name], [geoCoordMap[item.name][0], geoCoordMap[item.name][1] + item.value * lineMaxHeight()]]
        }
      })
  }
  // 柱状体的顶部
  function scatterData () {
      return customerBatteryCityData.map((item) => {
        return [geoCoordMap[item.name][0], geoCoordMap[item.name][1] + item.value * lineMaxHeight()]
      })
  }
  // 柱状体的底部
  function scatterData2 () {
      return customerBatteryCityData.map((item) => {
        return {
          name: item.name,
          value: geoCoordMap[item.name]
        }
      })
  }
  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();


////认同度图绘制
// option = {
//   tooltip:{
//     show:true,
//     trigger: 'item',
//   },                
//   angleAxis: {
//     type: 'category',
//     data: [
//       '我认可瑞幸咖啡' + ' \n ' + '和贵州茅台的联名',
//       '即使同类产品更优惠' + ' \n ' + '我还是会先考虑瑞幸咖啡',
//       '使用瑞幸咖啡的产品' + ' \n ' + '会让我感到快乐和满足',
//       '为了跟大家有共同话题' + ' \n ' + '我一定要购买酱香拿铁',
//       '我乐于向周围的人推荐' + ' \n ' + '瑞幸咖啡的产品'
//     ]
//   },
//   radiusAxis: {},
//   polar: {},
//   series: [
//     {
//       type: 'bar',
//       data: [52,	92,	100,	97,	42],
//       coordinateSystem: 'polar',
//       name: '非常认同',
//       stack: 'a',
//       itemStyle: {
//         color: "#C0F1ED"
//       },
//       emphasis: {
//         focus: 'series'
//       }
//     },
//     {
//       type: 'bar',
//       data: [493,	356,	426,	334,	171],
//       coordinateSystem: 'polar',
//       name: '比较认同',
//       itemStyle: {
//         color: "#32D6D7"
//       },
//       stack: 'a',
//       emphasis: {
//         focus: 'series'
//       }
//     },
//     {
//       type: 'bar',
//       data: [142,	299,	195,	265,	199],
//       coordinateSystem: 'polar',
//       name: '一般',
//       itemStyle: {
//         color: "#FFDF34"
//       },
//       stack: 'a',
//       emphasis: {
//         focus: 'series'
//       }
//     },
//     {
//       type: 'bar',
//       data: [51,	19,	38,	37,	211],
//       coordinateSystem: 'polar',
//       name: '比较不认同',
//       itemStyle: {
//         color: "#D7D6FE"
//       },
//       stack: 'a',
//       emphasis: {
//         focus: 'series'
//       }
//     },
//     {
//       type: 'bar',
//       data: [63,	35,	42,	68,	178],
//       coordinateSystem: 'polar',
//       name: '很不认同',
//       itemStyle: {
//         color: "#ACD6FE"
//       },
//       stack: 'a',
//       emphasis: {
//         focus: 'series'
//       }
//     }
//   ],
//   legend: {
//     show: true,
//     bottom: "0%",
//     data: ['很不认同', '比较不认同', '一般', '比较认同', '非常认同']
//   }
// };
