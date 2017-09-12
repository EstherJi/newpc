
$(function(){
	getChart1();
	getChart2();
	getChart3();
	getChart4();
})

function getChart1(){
	var chart = echarts.init(document.getElementById('chart1'));
	var option = {
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    color: ['#646d8c', '#39a6ff', '#fed136', '#ff5c33'],
	    legend: {
	        orient: 'vertical',
	        x: 'right',
	        y: 'center',
	        itemGap: 20,
	        data:['25岁以下','25-30岁','31-35岁','36岁以上'],
	        textStyle: {
	            color: 'rgb(120, 120, 128)',
	            fontSize: 14
	        }
	    },
	    title: {
	        text: '员工整体年龄结构',
	        x: 'center',
	        y: 'bottom',
	        textStyle: {
	            color: 'rgb(69, 69, 80)',
	            fontSize: 16,
	            fontWeight: 'normal'
	        }
	    },
	    series: [
	        {
	            name:'员工整体年龄结构',
	            type:'pie',
	            radius: ['75px', '100px'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '24',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:335, name:'25岁以下'},
	                {value:310, name:'25-30岁'},
	                {value:234, name:'31-35岁'},
	                {value:135, name:'36岁以上'}            
	            ]
	        }
	    ]
	};
	chart.setOption(option);
}


function getChart2(){
	var chart = echarts.init(document.getElementById('chart2'));
	var option = {
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    color: ['#646d8c', '#39a6ff', '#ff5c33'],
	    legend: {
	        orient: 'vertical',
	        x: 'right',
	        y: 'center',
	        itemGap: 20,
	        data:['大专及本科','硕士及博士','其他'],
	        textStyle: {
	            color: 'rgb(120, 120, 128)',
	            fontSize: 14
	        }
	    },
	    title: {
	        text: '员工整体学历情况',
	        x: 'center',
	        y: 'bottom',
	        textStyle: {
	            color: 'rgb(69, 69, 80)',
	            fontSize: 16,
	            fontWeight: 'normal'
	        }
	    },
	    series: [
	        {
	            name:'员工整体学历情况',
	            type:'pie',
	            radius: ['75px', '100px'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '24',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:335, name:'大专及本科'},
	                {value:310, name:'硕士及博士'},
	                {value:234, name:'其他'}         
	            ]
	        }
	    ]
	};
	chart.setOption(option);
}

function getChart3(){
	var chart = echarts.init(document.getElementById('chart3'));
	var option = {
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    color: ['#646d8c', '#39a6ff', '#fed136', '#ff5c33'],
	    legend: {
	        orient: 'vertical',
	        x: 'right',
	        y: 'center',
	        itemGap: 20,
	        data:['25岁以下','25-30岁','31-35岁','36岁以上'],
	        textStyle: {
	            color: 'rgb(120, 120, 128)',
	            fontSize: 14
	        }
	    },
	    title: {
	        text: "技术人员年龄结构",
	        x: 'center',
	        y: 'bottom',
	        textStyle: {
	            color: 'rgb(69, 69, 80)',
	            fontSize: 16,
	            fontWeight: 'normal'
	        }
	    },
	    series: [
	        {
	            name:'技术人员年龄结构',
	            type:'pie',
	            radius: ['75px', '100px'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '24',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:335, name:'25岁以下'},
	                {value:310, name:'25-30岁'},
	                {value:234, name:'31-35岁'},
	                {value:135, name:'36岁以上'}            
	            ]
	        }
	    ]
	};
	chart.setOption(option);
}

function getChart4(){
	var chart = echarts.init(document.getElementById('chart4'));
	var option = {
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    color: ['#646d8c', '#39a6ff', '#ff5c33'],
	    legend: {
	        orient: 'vertical',
	        x: 'right',
	        y: 'center',
	        itemGap: 20,
	        data:['大专及本科','硕士及博士','其他'],
	        textStyle: {
	            color: 'rgb(120, 120, 128)',
	            fontSize: 14
	        }
	    },
	    title: {
	        text: '技术人员学历情况',
	        x: 'center',
	        y: 'bottom',
	        textStyle: {
	            color: 'rgb(69, 69, 80)',
	            fontSize: 16,
	            fontWeight: 'normal'
	        }
	    },
	    series: [
	        {
	            name:'技术人员学历情况',
	            type:'pie',
	            radius: ['75px', '100px'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '24',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:335, name:'大专及本科'},
	                {value:310, name:'硕士及博士'},
	                {value:234, name:'其他'}         
	            ]
	        }
	    ]
	};
	chart.setOption(option);
}