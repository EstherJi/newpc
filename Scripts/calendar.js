
// 日历calendar

var Calendar = _self = {
	data: {
		today: new Date(),
		year: new Date().getFullYear(),
		month: new Date().getMonth(),
		day: new Date().getDate()
	},

	init: function(){
		this.calendar();
	},

	getFirstDay: function(year = _self.data.year, month = _self.data.month){
		return new Date(year, month, 1);
	},

	getFirstDayOfWeek: function(year = _self.data.year, month = _self.data.month){
		var firstDay = this.getFirstDay(year, month);
		return firstDay.getDay();
	},

	getDaysPerMonth: function(month = _self.data.month){
		var daysPerMonth = new Array(31, 28 + this.isLeap(_self.data.year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);  // 每月天数
		return daysPerMonth[month];
	},

	changeMonthOrYear: function(year, month){
		$('.calendar table tbody').remove();
		$('.calendar table').append('<tbody></tbody>');
		this.calendar(this.getFirstDayOfWeek(year, month), this.getDaysPerMonth(month), year, month);
	},

	backToCurMonth: function(){
		$('.calendar table tbody').remove();
		$('.calendar table').append('<tbody></tbody>');
		this.calendar();
	},

	isLeap: function(year){
		return year % 4 == 0 ? (year % 100 != 0 ? 1 : (year % 400 == 0 ? 1 : 0)) : 0;
	},

	calendar: function(dayOfWeek = this.getFirstDayOfWeek(), monthDays = this.getDaysPerMonth(_self.data.month), year = _self.data.year, month = _self.data.month){
		var row = Math.ceil((dayOfWeek + monthDays) / 7);     // 日历行数
		for(var i = 0; i < row; i++){
			$('.calendar table tbody').append('<tr></tr>');
			for(var j = 0; j < 7; j++){
				var idx = i * 7 + j;   // 单元格序号
				var date = idx - dayOfWeek + 1;  // 日期

				// 当前判断的是今日，添加.cur，实际返回回款日判断  
				var color = (date <= 0 || date > monthDays) ? 'gray' : (year == _self.data.year ? (month == _self.data.month ? (date == _self.data.day ? 'cur' : '') : '') : '');
				(date <= 0 || date > monthDays) ? date = '&nbsp;' : date = idx - dayOfWeek + 1;

				// 函数返回日、提示信息的数组
				if(color == 'cur'){
					var str = '<span>李先生企业资金周转</span><span>回款：15,307.50元</span>';   // str，返回的提示信息
					$('.calendar table tbody tr').last().append('<td data-value="' + (year + '-' + month + '-' + date) + '" class="f-pr ' + color + '">' + date + '<p class="tips">' + str + '</p></td>');
				}else{
					$('.calendar table tbody tr').last().append('<td data-value="' + (year + '-' + month + '-' + date) + '" class="' + color + '">' + date + '</td>');
				}
				
			}
		}
	}
}