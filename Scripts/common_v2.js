
function tab(clickObj, targetObjId, num, curName){
	$(clickObj).on('click', function(){
		var dataId = parseInt($(this).attr('data-id')), that = $(this);
		if(!(that.hasClass(curName))){
			that.addClass(curName).siblings().removeClass(curName);
			for(var i = 1; i <= num; i++){
				if(i == dataId){
					$(targetObjId + i).removeClass('hide');
				}else{
					$(targetObjId + i).addClass('hide');
				}
			}
		}
	});
}

$(function(){
	tab('.m-partner-friendlink .title a', '#list', 2, 'cur');
	tab('.m-project .tabs-box a', '#detail', 5, 'cur');
	tab('.repayment-box .tabs a', '#rchart', 2, 'cur');
	tab('.m-wallet .tabs a', '#table', 2, 'cur');
	tab('.m-bid .tabs a', '#table', 3, 'cur');
	tab('.m-coupon .tabs a', '#coupon', 2, 'cur');
	tab('.m-message .tabs a', '#message', 2, 'cur');
	tab('.m-autobid .tabs a', '#item', 2, 'cur');

	// 返回顶部按钮
	$(window).scroll(function(){
		if($(window).scrollTop() > 100){
			$('.scroll-top').fadeIn(500);
			$('.nav.fixed').addClass('down');
		}else{
			$('.scroll-top').fadeOut(500);
			$('.nav.fixed').removeClass('down');
		}
	});

	$('.scroll-top').click(function(){
		$('html, body').animate({
			'scrollTop': 0
		}, 500);
	});

	function resizeToolBar(){
		var w = $(window).width();
		if(w <= 1600){
			$('.m-toolbar').css('right', '0px');
		}else{
			$('.m-toolbar').css('right', '55px');
		}
	}
	resizeToolBar();

	$(window).resize(function(){
		resizeToolBar();
	});

	// 侧边工具栏显示弹框
	$('.m-toolbar li').hover(function(){
		$(this).children('.dropdown').show(300);
	}, function(){
		$(this).children('.dropdown').hide(300);
	});

	// 提示
	$('.hd-icon.qicon').hover(function(){
		$(this).next('.tips').css('display', 'inline-block');
	}, function(){
		$(this).next('.tips').css('display', 'none');
	});

	// 收益计算器表格只有一行时增加border-bottom
	var _tr = $('.m-project .tabs-detail-5 table tbody tr');
	var len = _tr.length;
	if(len == 1){
		_tr.addClass('bb');
	}

	// 提现页面更换银行卡弹框
	$('.m-withdrawal .others').on('click', function(){
		$('#cboverlay, #cbmodal').removeClass('hide');
	});
	$('#cbmodal .close').on('click', function(){
		$('#cboverlay, #cbmodal').addClass('hide');
	});
	$('#cbmodal .add-newcard').on('click', function(){
		$('#cbmodal .pinfo').removeClass('hide');
		$('#cbmodal .btn').css('display', 'none');
	});
	$('#cbmodal .pinfo .bind').on('click', function(){
		$('#cbmodal .pinfo').addClass('hide');
		$('#cbmodal .btn').css('display', 'block');
	});

	// 推荐人输入框显示隐藏
	$('.m-passport .recommend').on('click', function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$('.m-passport .ript').hide();
		}else{
			$(this).addClass('open');
			$('.m-passport .ript').show();
		}
	});

	// 复选框选中取消
	$('.m-passport .ricon-5').on('click', function(){
		if($(this).hasClass('uncheck')){
			$(this).removeClass('uncheck');
		}else{
			$(this).addClass('uncheck');
		}
	});

	// 重置密码步骤显示隐藏
	$('.m-passport .btn.next').on('click', function(){
		$('.m-passport .slist li:nth-child(2)').addClass('cur');
		$('.m-passport .step1').addClass('hide');
		$('.m-passport .step2').removeClass('hide');
	});
	$('.m-passport .btn.complete').on('click', function(){
		$('.m-passport .slist li:nth-child(3)').addClass('cur');
		$('.m-passport .step2').addClass('hide');
		$('.m-passport .step3').removeClass('hide');
	});

});