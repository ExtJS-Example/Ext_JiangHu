/**
 * Ext.Element的数据结构超级简单, {id:'', dom: ''}
 * id是可以自己指定的, 如果不指定, Ext总是会调用Ext.id()这个工具函数, 自动生成一个全局唯一的id.
 * 也就是说, 只要是Ext.Element实例, 总是有id的, dom属性用来存储原生HTML标签的引用.
 * 好处: 对上层代码暴露更友好,更敏捷的工具函数.
 * 
 * Ext.Element最常用的两个工具函数: Ext.Element.get()和Ext.Element.fly()
 */

/**
 * Ext.encode = Ext.util.JSON.encode;
 * Ext.encode()是Ext.util.JSON.encode()的快捷方式
 */
function extGet() {
	var el = Ext.get('myDiv');
	console.log(el);
	console.log(Ext.encode(el));
	alert(Ext.encode(el) + ' -- dom: ' + el.dom);
};

/**
 * 就是取出Element元素中的dom属性
 */
function extGetDom() {
	var div = Ext.getDom('myDiv');		// 直接获取原生标签
	alert(div);
	var el = Ext.get('myDiv');	// 首先获取到一个Ext.Element
	alert(Ext.getDom(el));		// 然后再从Ext.Element中获取底层元素
};

/**
 * fly: 飞啊
 */
function extFly() {
	var div = Ext.fly('myDiv');
	alert(Ext.encode(div) + '--- dom: ' + div.dom);
}