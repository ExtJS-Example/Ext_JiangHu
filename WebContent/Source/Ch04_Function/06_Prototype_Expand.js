/**
 * 除了节约资源之外, 向构造函数的原型上添加自定义的属性和方法也是扩展ＪＳ内置对象的重要手段．
 * 扩展对象：Array, Number, String, Date, Error, Function
 */

/**
 * Array的14个原生方法中, 最让人不爽的地方有两个:
 * 1. 没有提供查找工具函数
 * 2. 没有提供删除指定位置上元素的函数
 * So, Let's expand them
 */
 Array.prototype.indexOf = function(obj) {
 	for(var i=0, len=this.length; i<len; i++) {
 		if(this[i]==obj)	return i;	
 	}
 	return -1;
 };
function arrayIndexOfTest() {
	var arr = [1,2,3,4,5,6,7];
	var index = arr.indexOf(5);
	alert('5在数组中的索引是: '+index);
}

Array.prototype.remove = function(obj) {
	var index = this.indexOf(obj);
	if(index!=-1) {
		// Array.splice(index, count, new1,new2....newN) index:从该下标开始删除; count:删除指定元素的数量; newElements:插入的新元素
//		this.splice(index, 1);
//		this.splice(index, 2, ['test', 10]);
		this.splice(index, 2, 'add1','add2');
	}
	return this;
};
function arrayRemoveTest() {
	var arr = [1,2,3,4,5,6,7];
	arr.remove(4);
	alert(arr);
}


/**
 * Ext为Number类扩展了一个工具方法constrain(), 这个方法用来判断数值是否处于某一特定的区间[min,max]
 * 如果处于该区间, 返回原来的值; 如果小于min, 返回min; 如果大于max, 返回max
 * 主要代码: return Math.min(Math.max(this, min), max);
 */
function numberConstrainTest() {
	alert('number:15, interval:[10,20] --- resutl:'+Number(15).constrain(10,20));
	alert('number:5, interval:[10,20] --- resutl:'+Number(5).constrain(10,20));
	alert('number:25, interval:[10,20] --- resutl:'+Number(25).constrain(0,20));
}

/**
 * String -- format() 静态
 */
//Ext.onReady(function() {
//	var str = String.format('<div>姓名: {0}<br/>年龄:{1}</div>', '大漠穷秋', '26');
//	document.body.innerHTML = str;
//}) 
function regReplace() {
	var str = '我是猪 我是猪';
	alert(str.replace(/我/g, function() {
		alert(arguments);
		return '你';
	}));
}

/**
 * 给定一数n, 不使用循环, 返回[1,2,..n]这样的数组
 * 利用replace()函数的天然循环方式
 */
function getArr(n) {
	var a = [],
		b = [],
		m = 0;
	a.length = n+1;		//填充6个空值, toString()时中间会产生5个逗号
	a.toString().replace(/,/g, function() {
		b.push(++m);
	});
	alert(b);
	return b;
}

/**
 * 
 */
Ext.onReady(function() {
	var fn = function(userName) {
		document.body.innerHTML = userName;
	};
	window.setInterval(fn.createCallback('大漠穷秋'), 2000);
});


