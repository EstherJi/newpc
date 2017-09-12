$(function(){
	getMonthAmount();
	getMonthNumbers();

	$(window).scroll(function(){
		var h = $(window).height() + $(window).scrollTop();
		var isLoad = true;  // 标志位，加载完数据设置为false，防止重复请求数据

		if(h > $('#chart15').offset().top){
			getOverdueChart();
		}else if(h > $('#chart13').offset().top){
			getFinancingAreaNumbers();
			getFinancingMapNumbers();
		}else if(h > $('#chart11').offset().top){
			getFinancierInfo();
			getFinancierDetail();
		}else if(h >$('#chart7').offset().top){
			getAreaNumbers();
			getMapNumbers();
		}else if(h > $('#chart5').offset().top){
			getInvestorInfo();
			getInvestorDetail();
		}else if(h > $('#chart3').offset().top){
			getSingleInvestment();
			getTenInvestment();
		}
	});
});

function getMonthAmount(){
	var chart = echarts.init(document.getElementById('chart1'));
	var option = {
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    color: ['#39a6ff'],
	    grid: {
	        left: '1%',
	        right: '1%',
	        bottom: '5%',
	        top: '5%',
	        containLabel: true
	    },
	    xAxis: [
	        {
	            type: 'category',
	            data: ['2月', '3月', '4月', '5月', '6月', '7月', '8月'],
	            axisLine: {
	                lineStyle: {
	                    color: 'rgb(227, 234, 239)',
	                    width: 1
	                }
	            },
	            axisTick: {
	                show: false
	            },
	            splitLine: {
	                lineStyle: {
	                    color: 'rgb(227, 234, 239)'
	                },
	                show: true
	            },
	            axisLabel: {
	                textStyle: {
	                    color: 'rgb(103, 103, 112)'
	                }
	            }
	        }
	    ],
	    yAxis: [
	        {
	            type: 'value',
	            axisLine: {
	                lineStyle: {
	                    color: 'rgb(227, 234, 239)',
	                    width: 1
	                }
	            },
	            splitLine: {
	                lineStyle: {
	                    color: 'rgb(227, 234, 239)'
	                },
	                show: true
	            },
	            splitArea: {
	                show: false
	            },
	            axisTick: {
	                show: false
	            },
	            axisLabel: {
	                textStyle: {
	                    color: 'rgb(103, 103, 112)'
	                }
	            }
	        }
	    ],
	    series: [
	        {
	            name: '交易金额',
	            type: 'bar',
	            stack: '金额',
	            data: [182, 191, 234, 290, 330, 310, 101],
	            barWidth: 22
	        } 
	    ]
	};
	chart.setOption(option);
}

function getMonthNumbers(){
	var chart = echarts.init(document.getElementById('chart2'));
	var option = {
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    color: ['#39a6ff'],
	    grid: {
	        left: '1%',
	        right: '1%',
	        bottom: '5%',
	        top: '5%',
	        containLabel: true
	    },
	    xAxis: [
	        {
	            type: 'category',
	            data: ['2月', '3月', '4月', '5月', '6月', '7月', '8月'],
	            axisLine: {
	                lineStyle: {
	                    color: 'rgb(227, 234, 239)',
	                    width: 1
	                }
	            },
	            axisTick: {
	                show: false
	            },
	            splitLine: {
	                lineStyle: {
	                    color: 'rgb(227, 234, 239)'
	                },
	                show: true
	            },
	            axisLabel: {
	                textStyle: {
	                    color: 'rgb(103, 103, 112)'
	                }
	            }
	        }
	    ],
	    yAxis: [
	        {
	            type: 'value',
	            axisLine: {
	                lineStyle: {
	                    color: 'rgb(227, 234, 239)',
	                    width: 1
	                }
	            },
	            splitLine: {
	                lineStyle: {
	                    color: 'rgb(227, 234, 239)'
	                },
	                show: true
	            },
	            splitArea: {
	                show: false
	            },
	            axisTick: {
	                show: false
	            },
	            axisLabel: {
	                textStyle: {
	                    color: 'rgb(103, 103, 112)'
	                }
	            }
	        }
	    ],
	    series: [
	        {
	            name: '交易笔数',
	            type: 'bar',
	            stack: '笔数',
	            data: [182, 191, 234, 290, 330, 310, 101],
	            barWidth: 22
	        } 
	    ]
	};
	chart.setOption(option);
}

function getSingleInvestment(){
	var chart = echarts.init(document.getElementById('chart3'));
	var option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: '{a} <br/>{b} : {c} ({d}%)'
	    },
	    color: ['#0790ff', '#c1e3ff'],
	    legend: {
	        orient: 'horizontal',
	        x: 'center',
	        y: 'bottom',
	        itemGap: 20,
	        textStyle: {
	            color: 'rgb(120, 120, 128)',
	            fontSize: 14
	        },
	        data: ['最大单户','其他']
	    },
	    series : [
	        {
	            name: '最大单户投资余额占比',
	            type: 'pie',
	            radius: '100px',
	            center: ['50%', '45%'],
	            data:[
	                {value: 70, name: '最大单户', selected: true},
	                {value: 310, name: '其他'}
	            ],
	            itemStyle: {
	                normal: {
	                    label: {
	                        show: false
	                    },
	                    labelLine: {
	                        show: false
	                    }
	                }
	            }
	        }
	    ]
	};
	chart.setOption(option);
}

function getTenInvestment(){
	var chart = echarts.init(document.getElementById('chart4'));
	var option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: '{a} <br/>{b} : {c} ({d}%)'
	    },
	    color: ['#ff5c33', '#ffd6cc'],
	    legend: {
	        orient: 'horizontal',
	        x: 'center',
	        y: 'bottom',
	        itemGap: 20,
	        textStyle: {
	            color: 'rgb(120, 120, 128)',
	            fontSize: 14
	        },
	        data: ['最大十户','其他']
	    },
	    series : [
	        {
	            name: '最大十户投资余额占比',
	            type: 'pie',
	            radius: '100px',
	            center: ['50%', '45%'],
	            data:[
	                {value: 70, name: '最大十户', selected: true},
	                {value: 310, name: '其他'}
	            ],
	            itemStyle: {
	                normal: {
	                    label: {
	                        show: false
	                    },
	                    labelLine: {
	                        show: false
	                    }
	                }
	            }
	        }
	    ]
	};
	chart.setOption(option);
}

function getInvestorInfo(){
	var chart = echarts.init(document.getElementById('chart5'));
	var option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: '{a} <br/>{b} : {c} ({d}%)'
	    },
	    color: ['#ff448a', '#39a6ff'],
	    legend: {
	        orient: 'horizontal',
	        x: 'center',
	        y: 'bottom',
	        itemGap: 20,
	        textStyle: {
	            color: 'rgb(120, 120, 128)',
	            fontSize: 14
	        },
	        data: ['女性投资人', '男性投资人']
	    },
	    series : [
	        {
	            name: '投资人基本情况',
	            type: 'pie',
	            radius: '100px',
	            center: ['50%', '45%'],
	            data:[ 
	                {value: 100, name: '女性投资人', selected: true},
	                {value: 310, name: '男性投资人'}
	            ],
	            itemStyle: {
	                normal: {
	                    label: {
	                        show: false
	                    },
	                    labelLine: {
	                        show: false
	                    }
	                }
	            }
	        }
	    ]
	};
	chart.setOption(option);
}

function getInvestorDetail(){
	var chart = echarts.init(document.getElementById('chart6'));
	var option = {
		tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
		color: ['#39a6ff', '#ff448a'],
	    xAxis: [
	        {
	            type: 'value',
	            axisLine: {
	                show: false
	            },
	            axisLabel: {
	                textStyle: {
	                    color: 'rgb(103, 103, 112)',
	                    fontSize: 14
	                },
	                show: false
	            },
	            splitLine: {
	                show: false
	            },
	            axisTick: {
	                show: false
	            }
	        }
	    ],
	    yAxis: [
	        {
	            type: 'category',
	            data: ['50岁以上', '35～50岁', '25～35岁', '25岁以下'],
	            axisLine: {
	                show: false
	            },
	            axisTick: {
	                show: false
	            },
	            splitLine: {
	                show: false
	            },
	            axisLabel: {
	                textStyle: {
	                    color: 'rgb(103, 103, 112)',
	                    fontSize: 14
	                }
	            }
	        }
	    ],
	    series: [
	        {
	            name: '男性投资人',
	            type: 'bar',
	            stack: '投资人总量',
	            itemStyle: {
	                normal: {
	                    label: {
	                        show: true,
	                        position: 'insideRight'
	                    }
	                }
	            },
	            data: [320, 302, 301, 334],
	            barWidth: 22
	        },
	        {
	            name: '女性投资人',
	            type: 'bar',
	            stack: '投资人总量',
	            itemStyle: {
	                normal: {
	                    label: {
	                        show: true,
	                        position: 'insideRight'
	                    }
	                }
	            },
	            data: [120, 132, 101, 134],
	            barWidth: 22
	        }
	    ],
	    grid: {
	    	left: '18%',
	    	right: '1%',
	    	top: '20%',
	    	bottom: '5%',
	        borderWidth: 0
	    }
	};
	chart.setOption(option);
}

function getAreaNumbers(){
	var chart = echarts.init(document.getElementById('chart7'));
	var option = {
		tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
		color: ['#39a6ff'],
	    xAxis: [
	        {
	            type: 'value',
	            axisLine: {
	                show: false
	            },
	            axisLabel: {
	                textStyle: {
	                    color: 'rgb(103, 103, 112)',
	                    fontSize: 14
	                },
	                show: false
	            },
	            splitLine: {
	                show: false
	            },
	            axisTick: {
	                show: false
	            }
	        }
	    ],
	    yAxis: [
	        {
	            type: 'category',
	            data: ['北京', '山东', '江苏', '浙江', '广东'],
	            axisLine: {
	                show: false
	            },
	            axisTick: {
	                show: false
	            },
	            splitLine: {
	                show: false
	            },
	            axisLabel: {
	                textStyle: {
	                    color: 'rgb(103, 103, 112)',
	                    fontSize: 14
	                }
	            }
	        }
	    ],
	    series: [
	        {
	            name: '人数',
	            type: 'bar',
	            stack: '投资人地域分布',
	            itemStyle: {
	                normal: {
	                    label: {
	                        show: true,
	                        position: 'insideRight'
	                    }
	                }
	            },
	            data: [220, 202, 201, 243, 300],
	            barWidth: 22
	        }
	    ],
	    grid: {
	    	left: '16%',
	    	right: '1%',
	    	top: '1%',
	    	bottom: '5%',
	        borderWidth: 0
	    }
	};
	chart.setOption(option);
}

function randomData() {
    return Math.round(Math.random() * 1000);
}

function getMapNumbers(){
	var chart = echarts.init(document.getElementById('chart8'));
	var option = {
	    visualMap: {
	        min: 0,
	        max: 1000,
	        left: 'left',
	        top: 'bottom',
	        text: ['多','少'],           
	        calculable: true,
	        color: ['#52b2ff', '#83c7ff', '#a8d8ff', '#daeeff']
	    },
	    series: [
	        {
	            name: '投资人',
	            type: 'map',
	            mapType: 'china',
	            label: {
	                normal: {
	                    show: true
	                },
	                emphasis: {
	                    show: true
	                }
	            },
	            itemStyle: {
                    normal: {
                        borderWidth: .5,
                        borderColor: '#fafbfd',
                        areaColor: "#e6eaf5",
                    },
                    emphasis: {
                        borderWidth: .5,
                        borderColor: '#fafbfd',
                        areaColor: '#0790ff',
                    }
                },
	            data:[
	                {name: '广东',value: randomData()},
	                {name: '浙江',value: randomData()},
	                {name: '江苏',value: randomData()},
	                {name: '山东',value: randomData()},
	                {name: '北京',value: randomData()}
	            ],
	            mapLocation: {
	                width: 478,
	                height: 388
	            }
	        }
	    ]
	};
	chart.setOption(option);
}

// 融资人信息

// function getSingleFinancing(){
// 	var chart = echarts.init(document.getElementById('chart9'));
// 	var option = {
// 	    tooltip : {
// 	        trigger: 'item',
// 	        formatter: '{a} <br/>{b} : {c} ({d}%)'
// 	    },
// 	    color: ['#0790ff', '#c1e3ff'],
// 	    legend: {
// 	        orient: 'horizontal',
// 	        x: 'center',
// 	        y: 'bottom',
// 	        itemGap: 20,
// 	        textStyle: {
// 	            color: 'rgb(120, 120, 128)',
// 	            fontSize: 14
// 	        },
// 	        data: ['最大单户','其他']
// 	    },
// 	    series : [
// 	        {
// 	            name: '最大单户融资余额占比',
// 	            type: 'pie',
// 	            radius: '100px',
// 	            center: ['50%', '45%'],
// 	            data:[
// 	                {value: 70, name: '最大单户', selected: true},
// 	                {value: 310, name: '其他'}
// 	            ],
// 	            itemStyle: {
// 	                normal: {
// 	                    label: {
// 	                        show: false
// 	                    },
// 	                    labelLine: {
// 	                        show: false
// 	                    }
// 	                }
// 	            }
// 	        }
// 	    ]
// 	};
// 	chart.setOption(option);
// }

// function getTenFinancing(){
// 	var chart = echarts.init(document.getElementById('chart10'));
// 	var option = {
// 	    tooltip : {
// 	        trigger: 'item',
// 	        formatter: '{a} <br/>{b} : {c} ({d}%)'
// 	    },
// 	    color: ['#ff5c33', '#ffd6cc'],
// 	    legend: {
// 	        orient: 'horizontal',
// 	        x: 'center',
// 	        y: 'bottom',
// 	        itemGap: 20,
// 	        textStyle: {
// 	            color: 'rgb(120, 120, 128)',
// 	            fontSize: 14
// 	        },
// 	        data: ['最大十户','其他']
// 	    },
// 	    series : [
// 	        {
// 	            name: '最大十户融资余额占比',
// 	            type: 'pie',
// 	            radius: '100px',
// 	            center: ['50%', '45%'],
// 	            data:[
// 	                {value: 70, name: '最大十户', selected: true},
// 	                {value: 310, name: '其他'}
// 	            ],
// 	            itemStyle: {
// 	                normal: {
// 	                    label: {
// 	                        show: false
// 	                    },
// 	                    labelLine: {
// 	                        show: false
// 	                    }
// 	                }
// 	            }
// 	        }
// 	    ]
// 	};
// 	chart.setOption(option);
// }

function getFinancierInfo(){
	var chart = echarts.init(document.getElementById('chart11'));
	var option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: '{a} <br/>{b} : {c} ({d}%)'
	    },
	    color: ['#ff448a', '#39a6ff'],
	    legend: {
	        orient: 'horizontal',
	        x: 'center',
	        y: 'bottom',
	        itemGap: 20,
	        textStyle: {
	            color: 'rgb(120, 120, 128)',
	            fontSize: 14
	        },
	        data: ['女性融资人', '男性融资人']
	    },
	    series : [
	        {
	            name: '投资人基本情况',
	            type: 'pie',
	            radius: '100px',
	            center: ['50%', '45%'],
	            data:[ 
	                {value: 100, name: '女性融资人', selected: true},
	                {value: 310, name: '男性融资人'}
	            ],
	            itemStyle: {
	                normal: {
	                    label: {
	                        show: false
	                    },
	                    labelLine: {
	                        show: false
	                    }
	                }
	            }
	        }
	    ]
	};
	chart.setOption(option);
}

function getFinancierDetail(){
	var chart = echarts.init(document.getElementById('chart12'));
	var option = {
		tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
		color: ['#39a6ff', '#ff448a'],
	    xAxis: [
	        {
	            type: 'value',
	            axisLine: {
	                show: false
	            },
	            axisLabel: {
	                textStyle: {
	                    color: 'rgb(103, 103, 112)',
	                    fontSize: 14
	                },
	                show: false
	            },
	            splitLine: {
	                show: false
	            },
	            axisTick: {
	                show: false
	            }
	        }
	    ],
	    yAxis: [
	        {
	            type: 'category',
	            data: ['50岁以上', '35～50岁', '25～35岁', '25岁以下'],
	            axisLine: {
	                show: false
	            },
	            axisTick: {
	                show: false
	            },
	            splitLine: {
	                show: false
	            },
	            axisLabel: {
	                textStyle: {
	                    color: 'rgb(103, 103, 112)',
	                    fontSize: 14
	                }
	            }
	        }
	    ],
	    series: [
	        {
	            name: '男性融资人',
	            type: 'bar',
	            stack: '融资人总量',
	            itemStyle: {
	                normal: {
	                    label: {
	                        show: true,
	                        position: 'insideRight'
	                    }
	                }
	            },
	            data: [320, 302, 301, 334],
	            barWidth: 22
	        },
	        {
	            name: '女性融资人',
	            type: 'bar',
	            stack: '融资人总量',
	            itemStyle: {
	                normal: {
	                    label: {
	                        show: true,
	                        position: 'insideRight'
	                    }
	                }
	            },
	            data: [120, 132, 101, 134],
	            barWidth: 22
	        }
	    ],
	    grid: {
	    	left: '18%',
	    	right: '1%',
	    	top: '20%',
	    	bottom: '5%',
	        borderWidth: 0
	    }
	};
	chart.setOption(option);
}

function getFinancingAreaNumbers(){
	var chart = echarts.init(document.getElementById('chart13'));
	var option = {
		tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
		color: ['#39a6ff'],
	    xAxis: [
	        {
	            type: 'value',
	            axisLine: {
	                show: false
	            },
	            axisLabel: {
	                textStyle: {
	                    color: 'rgb(103, 103, 112)',
	                    fontSize: 14
	                },
	                show: false
	            },
	            splitLine: {
	                show: false
	            },
	            axisTick: {
	                show: false
	            }
	        }
	    ],
	    yAxis: [
	        {
	            type: 'category',
	            data: ['北京', '山东', '江苏', '浙江', '广东'],
	            axisLine: {
	                show: false
	            },
	            axisTick: {
	                show: false
	            },
	            splitLine: {
	                show: false
	            },
	            axisLabel: {
	                textStyle: {
	                    color: 'rgb(103, 103, 112)',
	                    fontSize: 14
	                }
	            }
	        }
	    ],
	    series: [
	        {
	            name: '人数',
	            type: 'bar',
	            stack: '融资人地域分布',
	            itemStyle: {
	                normal: {
	                    label: {
	                        show: true,
	                        position: 'insideRight'
	                    }
	                }
	            },
	            data: [220, 202, 201, 243, 300],
	            barWidth: 22
	        }
	    ],
	    grid: {
	    	left: '16%',
	    	right: '1%',
	    	top: '1%',
	    	bottom: '5%',
	        borderWidth: 0
	    }
	};
	chart.setOption(option);
}

function getFinancingMapNumbers(){
	var chart = echarts.init(document.getElementById('chart14'));
	var option = {
	    visualMap: {
	        min: 0,
	        max: 1000,
	        left: 'left',
	        top: 'bottom',
	        text: ['多','少'],           
	        calculable: true,
	        color: ['#52b2ff', '#83c7ff', '#a8d8ff', '#daeeff']
	    },
	    series: [
	        {
	            name: '融资人',
	            type: 'map',
	            mapType: 'china',
	            label: {
	                normal: {
	                    show: true
	                },
	                emphasis: {
	                    show: true
	                }
	            },
	            itemStyle: {
                    normal: {
                        borderWidth: .5,
                        borderColor: '#fafbfd',
                        areaColor: "#e6eaf5",
                    },
                    emphasis: {
                        borderWidth: .5,
                        borderColor: '#fafbfd',
                        areaColor: '#0790ff',
                    }
                },
	            data:[
	                {name: '广东',value: randomData()},
	                {name: '浙江',value: randomData()},
	                {name: '江苏',value: randomData()},
	                {name: '山东',value: randomData()},
	                {name: '北京',value: randomData()}
	            ],
	            mapLocation: {
	                width: 478,
	                height: 388
	            }
	        }
	    ]
	};
	chart.setOption(option);
}

function getOverdueChart(){
	var chart = echarts.init(document.getElementById('chart15'));
	var option = {
	    tooltip: {
	        axisPointer: {
	            lineStyle: {
	                width: 0
	            }
	        }
	    },
	    color: ['rgba(7, 144, 255, .24)'],
	    grid: {
	        left: '1%',
	        right: '1%',
	        top: '5%',
	        bottom: '8%',
	        containLabel: true
	    },
	    calculable: true,
	    xAxis: [
	        {
	            type: 'category',
	            boundaryGap: false,
	            data: ['2月', '3月', '4月', '5月', '6月', '7月', '8月'],
	            axisLine: {
	                show: false,
	                lineStyle: {
	                    color: 'rgb(251, 252, 253)',
	                    width: 1
	                }
	            },
	            axisTick: {
	                show: false
	            },
	            splitLine: {
	                lineStyle: {
	                    color: 'rgb(227, 234, 239)',
	                    width: 1
	                },
	                show: true
	            },
	            axisLabel: {
	                textStyle: {
	                    color: 'rgb(103, 103, 112)',
	                    align: 'center'
	                }
	            }
	        }
	    ],
	    yAxis: [
	        {
	            type: 'value',
	            axisLine: {
	                show: true,
	                lineStyle: {
	                    color: 'rgb(227, 234, 239)',
	                    width: 1
	                }
	            },
	            splitLine: {
	                lineStyle: {
	                    color: 'rgb(227, 234, 239)',
	                    width: 1
	                },
	                show: true
	            },
	            axisTick: {
	                show: false
	            },
	            axisLabel: {
	                textStyle: {
	                    color: 'rgb(103, 103, 112)'
	                }
	            },
	            splitArea: {
	                show: true,
	                areaStyle: {
	                    color: ['#fff', '#fbfcfd']
	                }
	            }
	        }
	    ],
	    series: [
	        {
	            name: '逾期金额',   
	            type: 'line',
	            smooth: true,
	            itemStyle: {
	                normal: {
	                    areaStyle: {
	                        type: 'default'
	                    }
	                }
	            },
	            data: [60, 72, 81, 94, 160, 130, 110]
	        }
	    ]
	};
	chart.setOption(option);
}