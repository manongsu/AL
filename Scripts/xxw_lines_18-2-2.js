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
            grid:{x:35,y:10,x2:10,y2:20,borderWidth:'0',borderColor:'#ff6000'},
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ["周一","周二","周三","周四","周五","周六","周日"],
                    axisLabel:{
                        show:true,
                        interval: 0,
                        margin:5,
                        textStyle: {
                            color: 'rgba(153,153,153,1)',
                            fontSize:11,
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
                    name:'昨日充电量',
                    type:'line',
                    stack: '总量',
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
                    data:[1200,832,1010,1304,900,230,1900]
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
            grid:{x:35,y:10,x2:10,y2:20,borderWidth:'0',borderColor:'#ff6000'},
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ["周一","周二","周三","周四","周五","周六","周日"],
                    axisLabel:{
                        show:true,
                        interval: 0,
                        margin:5,
                        textStyle: {
                            color: 'rgba(153,153,153,1)',
                            fontSize:11,
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
                    name:'昨日充电量',
                    type:'line',
                    stack: '总量',
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
                    data:[1200,832,1010,1304,900,230,1900]
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
            grid:{x:35,y:10,x2:10,y2:20,borderWidth:'0',borderColor:'#ff6000'},
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ["周一","周二","周三","周四","周五","周六","周日"],
                    axisLabel:{
                        show:true,
                        interval: 0,
                        margin:5,
                        textStyle: {
                            color: 'rgba(153,153,153,1)',
                            fontSize:11,
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
                    name:'报名',
                    type:'line',
                    stack: '报名',
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
                    data:[20,50,30,60,45,70,90]
                },
                {
                    name:'听课',
                    type:'line',
                    stack: '听课',
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
                    data:[10,60,20,70,35,80,100]
                }
            ]
        };
        xxw_percent.setOption(option);
    }
);