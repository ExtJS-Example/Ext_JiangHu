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
	var ul = $('ul');
	ul.onmouseover = function(e) {
		e = e||window.event;
		var target = e.target||e.srcElement;
		if(target.nodeName=='SPAN') {
			target.className = 'redBorder';
			logger.innerHTML = target.innerHTML || '';
		}
	};
	ul.onmouseout = function(e) {
		e = e||window.event;
		var target = e.target||e.srcElement;
		if(target.nodeName=='SPAN') {
			target.className = 'noBorder';
			logger.innerHTML = '';
		}
	};
	
}

window.onload = function() {
	enableBubble();
}