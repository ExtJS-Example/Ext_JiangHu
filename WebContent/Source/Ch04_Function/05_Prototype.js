/**
 * 空对象没有prototype属性
 */
//var obj = {};
//alert('obj的prototype: '+obj.prototype);
//alert('obj的constructor: '+obj.constructor);
//
//alert('Object的prototype: ' + Object.prototype);
//alert('Object的constructor: ' + Object.prototype.constructor);

/**
 * 普通对象实例上也没有prototype属性
 * @param {} name
 */
//Person = function(name) {
//	this.name = name;
//};
//var p = new Person('大漠穷秋');
//alert(Person.prototype);	// 类拥有 prototype 属性
//alert(p.prototype);			// 对象实例没有 prototype 属性

/**
 * obj虽然创建时很简单, 但是实际上obj还是通过构造函数Object构造出了.
 * 第29行将弹出undefined, 说明普通obj对象实例上没有prototype属性.
 * 第30行弹出的constructor属性是位于Object.prototype上的.
 * 因此可以判定, 实例obj可以通过某种机制'连接'到其构造函数的prototype属性上, 并且能访问其中的属性和方法. 
 */
//var obj = {};
//alert(obj.prototype);
//alert(obj.constructor);

/**
 * 函数对象的处理
 */
//var fn = function() {};
//alert(fn.prototype);		// 函数对象有prototype属性
//alert(fn.prototype.constructor);
//alert(fn.constructor);

/**
 * 向prototype添加自定义属性
 * 我们自己添加的sayHello方法一定是实例方法. 因为如果是静态方法的话, 里面是没有办法用this关键字的
 */
//Animal = function(name) {
//	this.name = name;
//};
//Animal.prototype.sayHello = function() {
//	alert('你好, 我是'+this.name);
//};
//var animal_1 = new Animal('动物1');
//animal_1.sayHello();
//var animal_2 = new Animal('动物2');
//animal_2.sayHello();

/**
 * 原型查找机制:
 * 如果从实例对象上没有找到指定的属性, 那么就尝试从它构造函数的prototype对象上去找; 如果还找不到, 即系找prototype对象构造函数的prototype.
 * 如果这个过程中找到了需要的属性,立即返回; 否则,一直到脚本返回null为止
 */
//Animal = function(name) {
//	this.name = name;
//}
//Animal.prototype.sayHello = function() {
//	var flag = Object.hasOwnProperty();
//	if(flag) {
//		alert('属性来自自身');
//	} else {
//		alert('属性来自原型');
//	}
//	alert('我的名字是: ' + this.name);
//}
//Person = function(name) {
//	this.name = name;
//}
//Person.prototype = new Animal('动物');	// 亮点
//var person = new Person('人');
//person.sayHello();

/**
 * 遮盖
 * 查找操作总是先检查自身对象, 然后在检查构造函数的原型
 * 原理是根据原型的查找机制, 查找到了就返回
 */
//Person = function(name) {
//	this.name = name;
//}
//Person.prototype.sayHello = function() {
//	alert('welcom : ' + this.name);
//}
//var person = new Person('大漠穷秋');
//person.sayHello = function(name) {
//	alert('热烈欢迎 : ' + this.name);
//}
//person.sayHello();

/**
 * 原型赋值机制
 */
//Person = function() {}
//var p1 = new Person();
//Person.prototype.country = '中国';
//alert(p1.country);
//var p2 = new Person();
//alert(p2.country);
 
/**
 * 模拟静态属性
 * TYPE属性被添加到Aniaml.prototype上, 可以通过对象实例进行访问, 而不能通过类名访问
 * 因此, prototype是定义'方法'的好工具, 而不是定义'属性'的最佳场所
 */
//Animal = function(name, age) {
//	this.name = name;
//	this.age = age;
//}
//Animal.prototype.TYPE = '动物';
//var animal = new Animal('大漠穷秋', '27');
//alert(animal.TYPE);
//alert(Animal.TYPE);












