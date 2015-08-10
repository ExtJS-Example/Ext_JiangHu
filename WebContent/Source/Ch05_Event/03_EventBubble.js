/**
 *根据id取得元素的工具函数。感觉JQuery也是这样搞的 
 */
var $ = function(id) {
	return document.getElementById(id);
};

/**
 * 启用冒泡函数
 */
function enableBubble() {
	var logger = $('logger');
	var div = $('div1');
	var els = div.getElementsByTagName('*');
	
	var fn1 = function(e) {
		this.className = 'redBorder';
		logger.innerHTML = '鼠标进入：' + this.nodeName;
	};
	var fn2 = function(e) {
		this.className = 'noBorder';
		logger.innerHTML = '';
	};
	
	for(var i=0; i<els.length; i++) {
		var el = els[i];
		el.addEventListener("mouseover", fn1, false);
		el.addEventListener("out", fn2, false);
	}
}

/**
 * 禁用冒泡函数
 */
function disableBubble() {
	var logger = $('logger');
	var div = $('div1');
	var els = div.getElementsByTagName('*');
	
	var fn1 = function(e) {
		this.className = 'redBorder';
		logger.innerHTML = '鼠标进入：' + this.nodeName;
		if(e) {
			e.stopPropagation();
		} else if(window.event) {
			window.event.cancleBubble = true;
		}
	};
	var fn2 = function(e) {
		this.className = 'noBorder';
		logger.innerHTML = '';
	};
	
	for(var i=0; i<els.length; i++) {
		var el = els[i];
		el.addEventListener("mouseover", fn1, false);
		el.addEventListener("out", fn2, false);
	}
}

window.onload = function() {
	enableBubble();
}