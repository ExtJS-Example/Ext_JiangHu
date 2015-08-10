/**
 * 主类
 */
 MailRoom = function() {
 	this.events = ['arrive', 'mail'];
 	this.listeners = {};	// key--value	事件名--函数数组
 };
 
 /**
  * 添加一种支持的事件
  */
 MailRoom.prototype.addEvent = function(name) {
 	// 仅当name存在, 并且事件数组中不存在该事件时, 添加该事件进入事件数组
 	if(name && this.events.indexOf(name) == -1) {
 		this.events.push(name);
 	};
 };

 /**
  * 为事件添加监听函数
  */
 MailRoom.prototype.addListener = function(name, fn) {
	// 直接添加事件, 判定有添加事件的函数完成
	this.addEvent(name);
	
	// 取得事件对应的监听函数数组
	var arr = this.listeners[name];
	if(!arr) {
		arr = [fn];
	} else {
		// 事件对应的监听函数数组不为空. 并且arr中不存在fn
		if(arr.indexOf(fn) == -1) {
			arr.push(fn);
		}
	}
	this.listeners[name] = arr;
 };

 /**
  * 从事件上删除一个监听函数
  */
 MailRoom.prototype.removeListener = function(name, fn) {
 	if(this.events.indexOf(name) == -1) return;
 	
 	var arr = this.listeners[name];
 	if(!arr) return;
 	if(arr.indexOf(fn) != -1) {
 		arr.splice(arr.indexOf(fn), 1);
 	}
 };
 
 /**
  * 触发指定事件
  */
 MailRoom.prototype.fireEvent = function(name) {
 	if(this.events.indexOf(name) == -1) return;
 	
 	var arr = this.listeners[name];
 	if(!arr) return;
 	for(var i=0; i<arr.length; i++) {
 		var fn = arr[i];
 		fn.call(fn, this);
 	}
 };
 
 /**
  * 定义别名
  */
MailRoom.prototype.on=MailRoom.prototype.addListener;
MailRoom.prototype.un=MailRoom.prototype.removeListener;
MailRoom.prototype.fire=MailRoom.prototype.fireEvent;

/**
 * 测试
 */
window.onload = function() {
	var mr = new MailRoom();
	
	var fn = function() {
		document.body.innerHTML += '207室2号床，你妈到啦！<br/>';
	};
	var fn1 = function() {
		document.body.innerHTML += '高一(10)班，信件到达！<br/>';
	};
	var fn2 = function() {
		document.body.innerHTML += '测试新的事件类型！<br/>';
	};
	
	// 测试添加监听器
	mr.addListener('arrive', fn);
//	mr.fire('arrive');
	
	
	mr.addListener('mail', fn1);
	mr.fire('mail');
	
	// 测试删除监听器
	mr.un('arrive', fn);
	mr.fire('arrive');
	
	// 测试新增事件类型
	mr.on('test', fn2);
	mr.fire('test');
};




