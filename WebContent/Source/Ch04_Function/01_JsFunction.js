/**
 * 工具函数namespace雏形版, 替我们分包
 * 命名空间原理版本
 * @param {} pkg
 */
//function ns(pkg) {
//	if(!pkg) return null;
//
//	var arr = pkg.split('.'),
//		obj = {},
//		result = obj;
//	obj = obj[arr[0]] = {};		// 等价于 obj[arr[0]]={}; obj=obj[arr[0]] 改变了obj的引用
//	for(var i=1; i<arr.length; i++) {
//		obj = obj[arr[i]] = {};
//	}
//	return result;
//}
//var pkg = ns('com.magus.tec');
//alert(pkg.com.magus);

/**
 * 命名空间可用版, 改进如下:
 * 1. 把命名空间建立在代表当前浏览器窗口的window下面
 * 2. 相同的命名空间不能重复创建
 * @param {} pkg
 */
//function ns(pkg) {
//	if(!pkg) return null;
//
//	var arr = pkg.split('.');
//	var obj = window[arr[0]] = window[arr[0]]||{};	// 关键点: 如果不存在赋为空. 个人感觉中间的一层可以不要? 如果不存在的话, 将空间变量保存在window中
//	var result = obj;
//	for(var i=1; i<arr.length; i++) {
//		obj = obj[arr[i]] = obj[arr[i]]||{};		// 关键点: 同上, 有的话直接拿来用
//	}
//	return result;
//}
//ns('com.momo.test');		// 执行完后,com已经是window中的属性了
//com.momo.test.fn = function() {
//	// ... 这里是第一次定义的函数
//	alert('for test');
//};
//ns('com.momo.test');
//alert(com.momo.test.fn);

/**
 * 嵌套函数实例
 */
//function outerFn() {
//	function innerFn() {
//		alert('内部的嵌套函数被调用了');
//	}
//	innerFn();
//}
//outerFn();

/**
 * 想办法让outerFn外部的代码也能调用内部定义的innerFn函数
 */
//function outerFn() {
//	function innerFn() {
//		alert('爬上墙头等红杏!');
//	}
//	return innerFn;
//}
//var cache = outerFn();
//cache();

/**
 * 词法作用域的具体示例
 */
//var outName = '大漠穷秋';
//function outerFn() {
//	var name = '漠漠';
//	function innerFn() {
//		alert('['+name+', '+outName+'] 爬上墙头等红杏.');
//	}
//	return innerFn;
//};
//var cache = outerFn();
//cache();

/**
 * call/apply
// */
//function myFunc() {
//	alert(this.name);
//};
//myFunc.call({name: '大漠'});
//myFunc.apply({name: '穷秋'});
//function add(a,b) {
//	alert(a+b);
//};
//add.call({},1,2);
//add.apply({}, [1,2]);

/**
 * 自执行, ()匿名函数调用运算符
 */
//(function() {
//	alert('匿名函数自执行了!');
//})();

/**
 * 函数也是数据
 */
/**
 * 本例直接声明了一个函数, 在脚本引擎解析期间, 这个函数就会被创建
 */ 
//function myFunc() {
//	alert('This is my function');
//}
//alert(myFunc);

/**
 * 本例定义了一个变量, 只有当脚本真正执行到这一行时, 函数才会被创建出来
 */ 
//var myFunc = function() {
//	alert('This is my function');
//};
//alert(myFunc);

/**
 * 函数动态添加/删除属性
 */
//var obj = {};
//obj.sayHello = function() {
//	alert('I am the attribute of obj');
//};
//obj.sayHello();
//delete obj.sayHello;
//obj.sayHello();

/**
 * new Function()
 * 1. 运行时才创建  2.其作用域为顶级作用域window
 */
//function outerFn() {
//	var name = '大漠穷秋';
//	var innerFn = new Function('alert(name)');
//	return innerFn;
//}
//var cache = outerFn();
//cache();

/**
 * 函数的length属性
 * 这个属性是函数定义的形参的个数
 */
//function myFunction(arg1, arg2) {}
//alert(myFunction.length);

/**
 * arguments属性		伪数组
 */
//function myFun() {
//	var str = '';
//	for(var i=0; i<arguments.length; i++) {
//		str += arguments[i];
//	}
//	alert(str);
//};
//myFun(1, 'hah', 343, [1,2.3,3,4]);

/**
 * callee
 * 在arguments属性中定义的,指向函数自己, 在实现递归是可以使用这个属性方便编码
 */
//(function test() {
//	alert(arguments.callee);
//})();

/**
 * 利用callee实现简单递归
 */
//function myFun(num) {
//	if(num<=1) {
//		return 1;
//	}  else {
//		return num*arguments.callee(num-1);
//	}
//};
//alert(myFun(10));

/**
 * 使用caller属性模拟"调用轨迹"打印器
 */
//function printStackTrace(fn) {
//	var s = '';
//	while(fn.caller) {
//		s += fn.caller;
//		s += '\n<--\n';
//		fn = fn.caller;
//	}
//	alert(s);
//}
//function test3() {
//	printStackTrace(test3);
//}
//function test2() {
//	test3();
//}
//function test1() {
//	test2();
//}
//function test0() {
//	test1();
//}
//test0();

/**
 * 构造函数, 也是一种函数, 只不过他可以和new关键字配合起来产生新的对象而已
 */
// Animal = function(name, age) {
// 	this.name = name;
// 	this.age = age;
// }
// var animal = new Animal('大漠穷秋', 27);
// alert(animal.name+'--'+animal.age);

//var fn = function(){};
//fn.myName = 'momo';
//alert(fn.myName);
//delete  fn.myName;
//alert(fn.myName);
//
//delete fn.arguments;
//alert(fn.arguments);

/**
 * 模拟静态属性
 * 因为JS中没有Static关键字, 所以可以在构造函数中做点小文章
 */
Animal = function(name, age) {
	this.name = name;
	this.age = age;
	Animal.instanceCounter++;
}
Animal.instanceCounter = 0;
var animal_1 = new Animal('大漠穷秋1', 27);
alert(Animal.instanceCounter+'--'+animal_1.instanceCounter);
var animal_2 = new Animal('大漠穷秋2', 27);
alert(Animal.instanceCounter+'--'+animal_2.instanceCounter);








