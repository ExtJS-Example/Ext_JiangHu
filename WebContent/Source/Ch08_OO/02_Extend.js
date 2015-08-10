Ext.onReady(function() {
	/**
	 * 1. 子类不提供构造函数
	 */
//	Animal = function(config) {
//		Ext.apply(this, config);
//		this.tail = '动物的尾巴';
//		this.eyes = 2;
//	};
//	
//	Animal.prototype = {
//		happy: function() {
//			alert('Happy: 摇尾巴!');
//		},
//		eat: function() {
//			alert('Eat: 动物吃生的!');
//		},
//		run: function() {
//			alert('Run: 动物四条腿跑!');
//		},
//		fight: function() {
//			alert('Fight: 动物往死里打!');
//		}
//	};
//
//	Animal.prototype.constructor = Animal;
//	
//	Person = Ext.extend(Animal, {
//		tail: null,
//		happy: function() {
//			alert('Happy: 人微笑!');
//		},
//		eat: function() {
//			alert('Eat: 人吃熟的!');
//		},
//		run: function() {
//			alert('Run: 人2条腿跑!');
//		},
//		fight: Ext.emptyFn
//	});
//	
//	var p = new Person({name: '大漠穷秋'});
//	alert(p.name);
//	alert(p.tail);
//	alert(p.eyes);
//	p.happy();
//	p.eat();
//	p.run();
//	p.fight();
	
	
	
	/**
	 * 2 子类提供显式构造函数
	 */
//	Animal = function(config) {
//		Ext.apply(this, config);
//		this.tail = '动物的尾巴';
//		this.eyes = 2;
//	};
//	
//	Animal.prototype = {
//		happy: function() {
//			alert('Happy: 摇尾巴!');
//		},
//		eat: function() {
//			alert('Eat: 动物吃生的!');
//		},
//		run: function() {
//			alert('Run: 动物四条腿跑!');
//		},
//		fight: function() {
//			alert('Fight: 动物往死里打!');
//		}
//	};
//
//	Animal.prototype.constructor = Animal;
//	
//	Person = function(config) {
//		Person.superclass.constructor.call(this, config);
//	};
//	Ext.extend(Person, Animal, {
//		tail: null,
//		happy: function() {
//			alert('Happy: 人微笑!');
//		},
//		eat: function() {
//			alert('Eat: 人吃熟的!');
//		},
//		run: function() {
//			alert('Run: 人2条腿跑!');
//		},
//		fight: Ext.emptyFn
//	});
//	
//	var p = new Person({name: '大漠穷秋'});
//	alert(p.name);
//	alert(p.tail);
//	alert(p.eyes);
//	p.happy();
//	p.eat();
//	p.run();
//	p.fight();
	
	
	/**
	 * 3. 子类提供隐式构造函数
	 */
	Animal = function(config) {
		Ext.apply(this, config);
		this.tail = '动物的尾巴';
		this.eyes = 2;
	};
	
	Animal.prototype = {
		happy: function() {
			alert('Happy: 摇尾巴!');
		},
		eat: function() {
			alert('Eat: 动物吃生的!');
		},
		run: function() {
			alert('Run: 动物四条腿跑!');
		},
		fight: function() {
			alert('Fight: 动物往死里打!');
		}
	};

	Animal.prototype.constructor = Animal;
	
	Person = Ext.extend(Animal, {
		constructor: function(config) {
			Person.superclass.constructor.call(this, config);
		},
		happy: function() {
			alert('Happy: 人微笑!');
		},
		eat: function() {
			alert('Eat: 人吃熟的!');
		},
		run: function() {
			alert('Run: 人2条腿跑!');
		},
		fight: Ext.emptyFn
	});
	
	var p = new Person({name: '大漠穷秋'});
	alert(p.name);
	alert(p.tail);
	alert(p.eyes);
	p.happy();
	p.eat();
	p.run();
	p.fight();
});










