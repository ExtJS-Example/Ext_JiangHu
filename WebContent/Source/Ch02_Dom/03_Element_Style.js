/**
 * 使用Element.setStyle这个工具函数可以为元素设置某个单独的样式属性值
 */

Ext.onReady(function() {
	Ext.fly('myBtn').on({
		click: function() {
			Ext.fly('myDiv').setStyle('backgroundColor', '#ffff00');		
		}
	});	
	
	// 问HTML元素动态增删CSS
	Ext.fly('myDiv').addClassOnOver('div_mouse_on');
	
	// 高亮, 有动画效果, 默认ffffff
	Ext.fly('myBtn2').on({
		click: function() {
			Ext.fly('myDiv').highlight();		
		}
	});
});