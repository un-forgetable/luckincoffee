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
// 折线图1模块制作
(function() {
  var yearData = [
    {
      year: "2020", // 年份
      data: [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: "2021", // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".line .chart"));
  // 2.指定配置
  var option = {
    // 通过这个color修改两条线的颜色
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      trigger: "axis"
    },
    legend: {
      // 如果series 对象有name 值，则 legend可以不用写data
      // 修改图例组件 文字颜色
      textStyle: {
        color: "#4c9bfd"
      },
      // 这个10% 必须加引号
      right: "10%"
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true, // 显示边框
      borderColor: "#012f4a", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a" // 分割线颜色
        }
      }
    },
    series: [
      {
        name: "新增粉丝",
        type: "line",
        // true 可以让我们的折线显示带有弧度
        smooth: true,
        data: yearData[0].data[0]
      },
      {
        name: "新增游客",
        type: "line",
        smooth: true,
        data: yearData[0].data[1]
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });

  // 5.点击切换效果
  $(".line h2").on("click", "a", function() {
    // alert(1);
    // console.log($(this).index());
    // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    // 需要重新渲染
    myChart.setOption(option);
  });
})();
// 折线图2 模块制作
(function() {
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  var option = {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      top: "0%",
      data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },

    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        // x轴更换数据
        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "26",
          "28",
          "29",
          "30"
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
        name: "邮件营销",
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
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          30,
          40,
          30,
          40,
          30,
          40,
          20,
          60,
          50,
          40
        ]
      },
      {
        name: "联盟广告",
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
          130,
          10,
          20,
          40,
          30,
          40,
          80,
          60,
          20,
          40,
          90,
          40,
          20,
          140,
          30,
          40,
          130,
          20,
          20,
          40,
          80,
          70,
          30,
          40,
          30,
          120,
          20,
          99,
          50,
          20
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
          text: '兰州市 8 个行政区县样本量分配表',
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
