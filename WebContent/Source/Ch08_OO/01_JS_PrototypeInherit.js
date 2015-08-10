/**
 * 放在原型上的属性和方法将会成为该类的实例方法
 */

/**
 * 原型继承
 */
//Animal = function(tail) {
//	this.tail = tail||'动物的尾巴';
//};
//
//Animal.prototype = {
//	happy: function() {
//		alert('摇动>'+this.tail);
//	},
//	eat: function() {
//		alert('动物吃生的!');
//	},
//	run: function() {
//		alert('动物四条腿跑!');
//	},
//	fight: function() {
//		alert('动物往死里打!');
//	}
//};
//
//Animal.prototype.constructor = Animal;
//
//var a = new Animal('蓬松的尾巴!');
//a.happy();
//
//var b = new Animal('长尾巴!');
//b.happy();


/**
 * 子类prototype赋值为父类实例
 */
//Animal = function(tail) {
//	this.tail = tail||'动物的尾巴';
//};
//Animal.prototype = {
//	happy: function() {
//		alert('摇动>'+this.tail);
//	},
//	eat: function() {
//		alert('动物吃生的!');
//	},
//	run: function() {
//		alert('动物四条腿跑!');
//	},
//	fight: function() {
//		alert('动物往死里打!');
//	}
//};
//Animal.prototype.constructor = Animal;
//
//Person = function(name) {
//	this.name = name;
//};
//Person.prototype = new Animal();
//
//
//var p = new Person('大漠穷秋');
//alert(p.tail);
//alert(p.name);
//p.happy();
//p.eat();
//p.run();
//p.fight();


/**
 * 删除不需要的属性
 */
//Animal = function(tail) {
//	this.tail = tail||'动物的尾巴';
//};
//Animal.prototype = {
//	happy: function() {
//		alert('摇动>'+this.tail);
//	},
//	eat: function() {
//		alert('动物吃生的!');
//	},
//	run: function() {
//		alert('动物四条腿跑!');
//	},
//	fight: function() {
//		alert('动物往死里打!');
//	}
//};
//Animal.prototype.constructor = Animal;
//
//Person = function(name) {
//	this.name = name;
//};
//Person.prototype = new Animal();
//delete Person.prototype.tail;
//var p = new Person('大漠穷秋');
////alert(p.tail);
////alert(typeof p);
//alert(p.constructor);


/**
 * 重置Person
 */
Animal = function(tail) {
	this.tail = tail||'动物的尾巴';
};
Animal.prototype = {
	happy: function() {
		alert('摇动>'+this.tail);
	},
	eat: function() {
		alert('动物吃生的!');
	},
	run: function() {
		alert('动物四条腿跑!');
	},
	fight: function() {
		alert('动物往死里打!');
	}
};
Animal.prototype.constructor = Animal;

Person = function(name) {
	this.name = name;
};
Person.prototype = new Animal();
delete Person.prototype.tail;
Person.prototype.constructor = Person;
var p = new Person('大漠穷秋');
alert(p.constructor);
alert(p.constructor==Person);















