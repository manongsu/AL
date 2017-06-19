require.config({
    paths: {
        echarts:"../Scripts"
    }
});
/*-------------------------昨日-------------------------*/
require(
    [
        'echarts',
        'echarts/chart/line'
    ],
    function xxw_apply(ec) {
        var xxw_apply = ec.init(document.getElementById('xxw_apply'));
        var option = {
            tooltip : {trigger: 'axis',textStyle:{fontSize:11},
                axisPointer:{
                    type:"line",
                    lineStyle:{
                        color:"#063a4b",
                        width:5,
                        shadowBlur: 0,
                        shadowOffsetX:0,
                        shadowOffsetY: 0
                    }
                }
            },
            grid:{x:35,y:10,x2:15,y2:45,borderWidth:'0',borderColor:'#ff6000'},
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ["第一节 2017/ 01/01","第二节 2017/ 01/01","第三节 2017/ 01/01","第四节 2017/ 01/01","第五节 2017/ 01/01","第六节 2017/ 01/01","第七节 2017/ 01/01"],
                    axisLabel:{
                        show:true,
                        interval: 0,
                        margin:5,
                        textStyle: {
                            color: 'rgba(153,153,153,1)',
                            fontSize:11,
                        },
                        formatter:function(val) {
                            return val.split(" ").join("\n");
                        }
                    },
                    axisTick:{show:false},
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color:'#eee'
                        }
                    },
                    axisLine: {
                        lineStyle:{
                            color:'#4088bd'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel:{
                        show:true,
                        margin:5,
                        textStyle: {
                            color: 'rgba(153,153,153,1)',
                            fontSize:11,
                        },
                        formatter: '{value}%'
                    },
                    axisTick:{show:false},
                    splitNumber:4,splitLine: {
                    show: true,
                    onGap: null,
                    lineStyle: {
                        color:'#eee'
                    }
                },
                    axisLine: {
                        lineStyle:{
                            color:'#4088bd'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'提交率',
                    type:'line',
                    stack: '提交率',
                    smooth:true,
                    itemStyle : {
                        normal : {
                            areaStyle:{
                                color:'rgba(255,96,0,0.4)'
                            },
                            lineStyle:{
                                color:'#ff6000',
                                lineWidth:1
                            },
                            color:'rgba(255,96,0,1)',
                            borderWidth:3,
                        },
                        emphasis : {
                            borderWidth:1,
                            color:'#063a4b'
                        }
                    },
                    data:[20,50,30,60,45,70,90]
                }
            ]
        };
        xxw_apply.setOption(option);
    }
);
require(
    [
        'echarts',
        'echarts/chart/line'
    ],
    function xxw_listen(ec) {
        var xxw_listen = ec.init(document.getElementById('xxw_listen'));
        var option = {
            tooltip : {trigger: 'axis',textStyle:{fontSize:11},
                axisPointer:{
                    type:"line",
                    lineStyle:{
                        color:"#063a4b",
                        width:5,
                        shadowBlur: 0,
                        shadowOffsetX:0,
                        shadowOffsetY: 0
                    }
                }
            },
            grid:{x:35,y:10,x2:15,y2:45,borderWidth:'0',borderColor:'#ff6000'},
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ["第一节 2017/ 01/01","第二节 2017/ 01/01","第三节 2017/ 01/01","第四节 2017/ 01/01","第五节 2017/ 01/01","第六节 2017/ 01/01","第七节 2017/ 01/01"],
                    axisLabel:{
                        show:true,
                        interval: 0,
                        margin:5,
                        textStyle: {
                            color: 'rgba(153,153,153,1)',
                            fontSize:11,
                        },
                        formatter:function(val) {
                            return val.split(" ").join("\n");
                        }
                    },
                    axisTick:{show:false},
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color:'#eee'
                        }
                    },
                    axisLine: {
                        lineStyle:{
                            color:'#4088bd'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel:{
                        show:true,
                        margin:5,
                        textStyle: {
                            color: 'rgba(153,153,153,1)',
                            fontSize:11,
                        },
                        formatter: '{value}%'
                    },
                    axisTick:{show:false},
                    splitNumber:4,splitLine: {
                    show: true,
                    onGap: null,
                    lineStyle: {
                        color:'#eee'
                    }
                },
                    axisLine: {
                        lineStyle:{
                            color:'#4088bd'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'正确率',
                    type:'line',
                    stack: '正确率',
                    smooth:true,
                    itemStyle : {
                        normal : {
                            areaStyle:{
                                color:'rgba(255,96,0,0.4)'
                            },
                            lineStyle:{
                                color:'#ff6000'
                            },
                            color:'rgba(255,96,0,1)',
                            borderWidth:3,
                        },
                        emphasis : {
                            borderWidth:1,
                            color:'#063a4b'
                        }
                    },
                    data:[20,50,30,60,45,70,90]
                }
            ]
        };
        xxw_listen.setOption(option);
    }
);
require(
    [
        'echarts',
        'echarts/chart/line'
    ],
    function xxw_percent(ec) {
        var xxw_percent = ec.init(document.getElementById('xxw_percent'));
        var option = {
            tooltip : {trigger: 'axis',textStyle:{fontSize:11},
                axisPointer:{
                    type:"line",
                    lineStyle:{
                        color:"#063a4b",
                        width:5,
                        shadowBlur: 0,
                        shadowOffsetX:0,
                        shadowOffsetY: 0
                    }
                }
            },
            grid:{x:35,y:10,x2:15,y2:45,borderWidth:'0',borderColor:'#ff6000'},
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ["第一节 2017/ 01/01","第二节 2017/ 01/01","第三节 2017/ 01/01","第四节 2017/ 01/01","第五节 2017/ 01/01","第六节 2017/ 01/01","第七节 2017/ 01/01"],
                    axisLabel:{
                        show:true,
                        interval: 0,
                        margin:5,
                        textStyle: {
                            color: 'rgba(153,153,153,1)',
                            fontSize:11,
                        },
                        formatter:function(val) {
                            return val.split(" ").join("\n");
                        }
                    },
                    axisTick:{show:false},
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color:'#eee'
                        }
                    },
                    axisLine: {
                        lineStyle:{
                            color:'#4088bd'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel:{
                        show:true,
                        margin:5,
                        textStyle: {
                            color: 'rgba(153,153,153,1)',
                            fontSize:11,
                        }
                    },
                    axisTick:{show:false},
                    splitNumber:4,splitLine: {
                    show: true,
                    onGap: null,
                    lineStyle: {
                        color:'#eee'
                    }
                },
                    axisLine: {
                        lineStyle:{
                            color:'#4088bd'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'资料',
                    type:'line',
                    stack: '资料',
                    smooth:true,
                    itemStyle : {
                        normal : {
                            areaStyle:{
                                color:'rgba(62,134,187,0.4)'
                            },
                            lineStyle:{
                                color:'#3e86bb',
                            },
                            color:'#3e86bb',
                            borderWidth:3,
                        },
                        emphasis : {
                            borderWidth:1,
                            color:'#3e86bb'
                        }
                    },
                    symbol:"circle",
                    data:[1,2,3,4,5,6,7]
                },
                {
                    name:'作业数量',
                    type:'line',
                    stack: '作业数量',
                    smooth:true,
                    itemStyle : {
                        normal : {
                            areaStyle:{
                                color:'rgba(255,96,0,0.4)'
                            },
                            lineStyle:{
                                color:'#ff6000',
                                lineWidth:1
                            },
                            color:'rgba(255,96,0,1)',
                            borderWidth:3,
                        },
                        emphasis : {
                            borderWidth:1,
                            color:'#063a4b'
                        }
                    },
                    symbol:"circle",
                    data:[7,6,4,5,3,2,1]
                }
            ]
        };
        xxw_percent.setOption(option);
    }
);