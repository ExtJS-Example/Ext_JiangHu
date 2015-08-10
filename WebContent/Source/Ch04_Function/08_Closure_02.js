// 这里是一个简单的DIV工具，用来创建DIV
function DivUtil() {};
DivUtil.prototype.instanceCounter = 0;
DivUtil.prototype.createDiv = function() {
	var div = document.createElement('div');
	div.id = this.instanceCounter++;
	div.style.background = "#ffff00";
	document.body.appendChild(div);
	
	return div;
};
var divUtil = new DivUtil();

// 线程类
function Thread() {};
Thread.prototype.start = function() {
	var div = divUtil.createDiv();
	if(div.id>10) {
		div.innerHTML = '只允许起十个线程, 年轻人, 别太贪心哦!';
		return;
	}
	
	var num = div.id;
	setInterval(function() {
		div.innerHTML = '第'+div.id+'个线程正在运行中...'+(num++);
	},50);
};

function addThread() {
	var thread = new Thread();
	thread.start();
}













