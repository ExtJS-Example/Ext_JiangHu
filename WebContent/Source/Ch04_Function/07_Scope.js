/**
 * JS是一门以函数为中心的语言，每个函数都有自己的“执行环境”。这些执行环境是彼此独立的，但又存在某种“神秘的”联系。
 * 每发生一次函数调用，脚本引擎（可以想象成是运行在浏览器中的虚拟机）就需要预先为函数创建一个“执行环境”。
 * 建立“执行环境”的三个重要步骤：1.创建“活动对象”；2.分配“作用域链”；3.“绑定this”。
 */

/**
 * 外部函数outer开始执行时，建立“执行环境”的过程开始了
 * step1：创建“活动对象”，暂且称为ActiveObj。此时outer函数的“活动对象”是这样的--ActiveObj：{outerArg0:0，outerVar：undefined，inner：undefined}
 * step2：分配作用域链。为outer建立函数对象的时候，默认往作用域链里push一个“顶级作用域”window对象，此时作用域链是这样的[window]；
 * 		  开始调用outer时，把第一步的“活动对象”插入到这个链表的头部，此时outer的作用域链就变成了[ActiveObj，window]。
 * step3：绑定this。函数内部的this默认都指向全局对象window。
 * 以上就是引擎执行外层的outer函数所需要做的事情。
 */
//var userName = '大漠穷秋';
//function outer(outerArg0) {
//	var outerVar = 1;
//	function inner(innerArg0) {
//		var innerVar = 1;
//	}
//	alert(this.userName);
//}
//outer(0);

/**
 * 这是一道经典的面试题
 * test的“活动对象”是ActiveObj[name:undefined], test的“作用域链”是[ActiveObj, window]
 * 因此，第一次弹出框的结果是：undefined；第二次弹出框的结果是：local。
 * 如果把 var name = 'local'; 这句话去掉的话，第一次弹出的就是’global’。
 */
//var name = 'global';
//function test() {
//	alert(name);
//	var name = 'local';
//	alert(name);
//}
//test();

/**
 * 脚本引擎执行内部函数inner的流程
 * inner('in')就是一个函数调用，在调用inner之前，除了为inner构建“执行环境”之外，还要多做一件事，那就是把outer的“执行环境”先保存起来。
 * step1：创建“活动对象”。ActiveObj：{innerArg0:0，innerVar：undefined}；
 * step2：分配“作用域链”。因为inner是被定义在outer内部的，所以它的默认作用域链是[{outer的活动对象}，window]。然后再把第一步的“活动对象”插入到头部，
 * 	      变成[ActiveObj，{outer的活动对象}，window]
 * step3：绑定this。这里还是没有手工修改inner的this，所以默认指向的仍然是window。
 */
var userName = '大漠穷秋';
function outer(outerArg0) {
	alert(userName);
	var outerVar = 1;
	function inner(innerArg0) {
		var innerVar = 2;
		alert(this.userName);
	}
	inner('in');
	alert(outerVar);
}
outer('out');


/**
 * 标识符解析
 * inner的作用域链结构是：[{innerArg0：0，innerVar：undefined},{outerArg0：0，outerVar：undefined，inner：undefined},window]
 * 很显然，在alert时，innerVar来自作用域链数组的第一个对象，outerArg0和outerVar来自第二个对象，而userName来自全局对象window
 * 这个处理过程叫做“标识符解析”，其实就是一个属性查找过程：从作用域链中的第一个对象依次往后查找，如果再对象上找到了需要的属性就立即返回，如果一直找到window还一无所获，最后返回undefined。
 */
//var userName = '大漠穷秋';
//function outer(outerArg0) {
//	var outerVar = 1;
//	function inner(innerArg0) {
//		var innerVar = 2;
//		alert('outerArg0: '+outerArg0+'---outerVar: '+outerVar+'---innerVar: '+innerVar+'---this.userName:'+this.userName);
//	}
//	inner('in');
//	alert(outerVar);
//}
//outer('out');

/**
 * 见证奇迹的时刻：当outer函数执行并返回之后，我们能想到一个办法来运行inner，这个时候inner的作用域里面依然存在outer的那些参数和局部变量，那么本来属于outer的这些参数在outer执行完之后仍然可以访问到。
 * 被返回出来的这个inner函数，以及它的作用域链，就叫做一个函数“闭包”
 */
//function outer(outerArg0) {
//	var outVar = 1;
//	function inner() {
//		alert(outerArg0+'---'+outVar);
//	}
//	return inner;
//}
//var fn = outer(110);
//fn();

/**
 * 修改作用域链和this
 * 在某些特殊情况下，操纵和控制作用域链和this是非常必须的编码技巧。
 * JS提供了一个原生操作符with，可以用来动态修改作用域链；另外还提供了call和apply两种函数调用方式，以便动态绑定函数中的this
 * 确实，with稍微有点深奥。没有把握的话尽量不用
 */
//var user = {
//	userName: '大漠穷秋',
//	pwd: '123456'
//};
//function outer(outerArg0) {
//	var outerVar = 1;
//	with(user) {
//		function inner(innerArg0) {
//			var innerVar =2;
//			alert(userName + '----' + pwd);		// funck， 不可用
////			alert(this.userName + '----' + this.pwd);	// fuck，undefined
////			alert(user.userName + '----' + user.pwd);	// 这样可用
//			alert(outerArg0 + "----" + outerVar + '----' + innerVar);
//		}
//	}
//	inner('inner');
//	alert(outerVar);
//}
//outer('outer');

/**
 * 这里把with语句放在inner函数里，就可以直接访问userName和pwd属性了
 */
//var user = {
//	userName: '大漠穷秋',
//	pwd: '123456'
//};
//function outer(outerArg0) {
//	var outerVar = 1;
//	function inner(innerArg0) {
//		with(user) {
//			var innerVar =2;
//			alert(userName + '----' + pwd);		// 把with语句放在inner里面，这句就可用了
//			alert(outerArg0 + "----" + outerVar + '----' + innerVar);
//		}
//	}
//	inner('inner');
//	alert(outerVar);
//}
//outer('outer');

/**
 * 使用call/apply来改一改函数中的this
 */

/**
 * 注意this的指向 
 * 无论何时，JS会默认把this放到function内部。它是基于一种简单的思想：
 * 1. 如果函数直接是某个对象的成员，那么this的值就是这个对象
 * 2. 如果函数不是某个对象的成员，那么this的值变设为某种全局对象（如浏览器的window对象）
 */
//var testvar = 'window attribute';
//var o3 = {
//    testvar: '3',
//    testvar2: '3**',
//    fun: function() {
//    	// 此时this指向的是当前对象o3
//        alert('o3: ' + this.testvar);
//        alert('o3: ' + this.testvar2);
//        var inner = function() {
//        	// 此时this指向的是全局对象window
//            alert('o3-inner:' + this.testvar);
//            alert('o3-inner:' + this.testvar2);
//        }
//        inner();
//    }
//}
//o3.fun();