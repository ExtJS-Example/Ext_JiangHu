/**
 * 没有事件系统之前的轮询模式
 */
// var arrived = false;
// var counter = 0;
// var timer = window.setInterval(function() {
// 	if(arrived) {
// 		window.clearInterval(timer);
// 		document.body.innerHTML = '到达！';
// 		return;
// 	}
// 	document.body.innerHTML = '我妈来了吗？第['+counter+']此轮询';
// 	counter++;
// }, 500);
//
// // 只执行一次
// window.setTimeout(function() {
// 	arrived = true;
// }, 5000);

// 2级事件模型
/**
 * 2级事件模型
 * 只单击一次有效果，单击多次没效果
 */
window.onload = function() {
	var btn = document.createElement('input');
	btn.setAttribute('type', 'button');
	btn.setAttribute('value', '对讲机按钮');
	btn.addEventListener('click', function(e) {
		document.body.innerHTML += '<br/>通知班主任，学生家长驾到！<br/>';
	}, true);
	btn.addEventListener('click', function(e) {
		document.body.innerHTML += '<br/>通知学生，学生家长到了。。<br/>';
	}, true);
	
	document.body.appendChild(btn);
}















