/**
 * 原型继承利用了原型查找机制和函数作用于机制.
 * 对象冒充则是赤裸裸的属性拷贝, 它把父类所有的实例属性和方法全部拷贝到子类中
 */

/**
 * 对象冒充基础原理
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
	Animal.call(this);
	this.name = name;
	delete this.tail;
}

var p = new Person('大漠穷秋');
alert(p.name);
alert(p.tail);
p.happy();
p.eat();
p.run();
p.fight();

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



