
// modal弹框 by esther

// 基本
var Modal = function(data){
	if(!data){
		return;
	}
	if(typeof(Modal.unique) !== 'undefined'){
		return Modal.unique;
	}
	this.overlay = document.createElement('div');
	this.overlay.className = 'overlay';

	this.content = data.content;   // 内容
	this.panel = document.createElement('div');   // 弹框面板
	this.contentNode = document.createElement('div');  // 提示内容组件
	this.confirmBtn = document.createElement('a');  // 确定按钮组件
	this.closeBtn = document.createElement('span');   // 关闭按钮组件

	this.panel.className = 'modal';
	this.contentNode.className = data.contentNodeCn || 'modal-content';
	this.closeBtn.className = 'close';
	this.confirmBtn.className = 'btn ' + (data.confirmBtnCn || 'blue');
	this.confirmBtn.innerHTML = data.confirm || '确认';
	this.contentNode.innerHTML = this.content;
	this.success = data.success || function(){};   // 点击确定按钮执行方法

	Modal.unique = this;
}

Modal.prototype = {
	init: function(){
		this.panel.appendChild(this.closeBtn);
		this.panel.appendChild(this.contentNode);
		this.panel.appendChild(this.confirmBtn);

		document.body.appendChild(this.panel);
		document.body.appendChild(this.overlay);   // 遮罩层

		this.bindEvent();   // 绑定事件
		this.show();
	},

	bindEvent: function(){
		var me = this;
		this.closeBtn.onclick = function(){
			me.hide();
		};

		this.confirmBtn.onclick = function(){
			me.success();
			me.hide();
		}
	},

	show: function(){
		this.panel.style.display = 'block';
		this.overlay.style.display = 'block';
	},

	hide: function(){
		// this.panel.style.display = 'none';
		// this.overlay.style.display = 'none';
		document.body.removeChild(this.panel);
		document.body.removeChild(this.overlay);
	}
}

// 带标题普通提示框
var AlertModal = function(data){
	Modal.call(this, data);   // 继承基本模态框构造函数
	// 只允许创建一个实例
	if(typeof(AlertModal.unique) !== 'undefined'){
		return AlertModal.unique;
	}
	this.title = data.title;
	this.titleNode = document.createElement('h3');
	this.titleNode.className = 'title';
	this.titleNode.innerHTML = this.title;

	AlertModal.unique = this;
}

AlertModal.prototype = new Modal();
AlertModal.prototype.init = function(){
	this.panel.insertBefore(this.titleNode, this.panel.firstChild);  // 插入标题
	Modal.prototype.init.call(this);
}

// 带取消按钮弹框
var CancelModal = function(data){
	AlertModal.call(this, data);
	// 只允许创建一个实例
	if(typeof(CancelModal.unique) !== 'undefined'){
		return CancelModal.unique;
	}
	this.cancel = data.cancel;
	this.cancelBtn = document.createElement('a');
	this.cancelBtn.className = data.cancelBtnCn || 'cancel';
	this.cancelBtn.innerHTML = this.cancel || '取消';
	this.fail = data.cancel || function(){};  // 取消按钮执行事件

	CancelModal.unique = this;
}

CancelModal.prototype = new Modal();
CancelModal.prototype.init = function(){
	AlertModal.prototype.init.call(this);
	this.panel.appendChild(this.cancelBtn);
}
CancelModal.prototype.bindEvent = function(){
	var me = this;
	AlertModal.prototype.bindEvent.call(me);

	this.cancelBtn.onclick = function(){
		me.fail();
		me.hide();
	}
}