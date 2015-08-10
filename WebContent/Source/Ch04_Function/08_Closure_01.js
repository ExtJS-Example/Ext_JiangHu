/**
 * 闭包的官方定义：闭包是一个表达式（通常是一个函数），可以有任意参数，连同绑定这些参数的环境一起构成。
 * 其实，闭包不是一个单纯的东西，它是函数及其作用域链组成的“综合体”。
 * 构造闭包的一般步骤：
 * 1. 在函数A内部定义一个函数B
 * 2. 通过调用A把B的引用返回出来，赋值给其他作用域中的变量C
 * 3. 通过C执行B
 */

function myEffect() {
	// 获取Table中被点击的行
	var console = document.getElementById('console'),
		trs = document.getElementsByTagName('tr');
		
	for(var i=0; i<trs.length; i++) {
		var tr = trs[i];
		tr.onmouseover = function() {
			this.style.background = '#ff0000';
		};
		tr.onmouseout = function() {
			this.style.background = '#ffffff';
		};
		
		tr.onclick = (function() {
			var num = i;
			return function() {
				console.innerHTML = '您点击了第 ' + num + ' 行';
			};
		})();
	}
	
}































