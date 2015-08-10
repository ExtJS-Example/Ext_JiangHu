Ext.onReady(function() {
	
	// 原生alert
	var fn = function() {
		alert('导致脚本挂起, 后续代码无法执行..');
		Ext.DomHelper.insertHtml('beforeEnd', Ext.getBody().dom, '执行到这里没有?');
	};
//	fn();
	
	var fun = function() {
		Ext.Msg.alert('友情提醒', 'Ext.Msg不会导致脚本挂起');
		Ext.DomHelper.insertHtml('beforeEnd', Ext.getBody().dom, '执行到这里没有?');
	};
	fun();
	
});