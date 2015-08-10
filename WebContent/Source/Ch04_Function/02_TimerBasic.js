/**
 * 使用Timer创建一个简单的页面计时器
 */
//var fn = function() {
//	var date = new Date();
//	document.body.innerHTML = date.toLocaleString();
//};
////window.setTimeout(fn, 1000);
//window.setInterval(fn, 1000);

/**
 * 回调函数的另一种写法
 */
//window.setInterval(function() {
//	var date = new Date();
//	document.body.innerHTML = date.toLocaleString();
//}, 1000);

/**
 * 给回调函数传递参数
 * 外层的匿名函数有两个目的: 1.不要立即去执行fn; 2.给fn传参数
 */
//var fn = function(userName) {
//    var date = new Date();
//    document.body.innerHTML = userName + date.toLocaleString();
//}
//window.setInterval(function() {
//    return fn('大漠穷秋');
//}, 1000);

/**
 * 自己写一个工具函数来创造这种通用的'回调函数'
 */
//var createCallback = function(fn, args) {
//	return function() {
//		fn.call(window, args);
//	};
//};
//var fn = function(userName) {
//	var date = new Date();
//	document.body.innerHTML = userName + date.toLocaleString();
//};
//window.setInterval(createCallback(fn, '大漠穷秋'), 1000);
