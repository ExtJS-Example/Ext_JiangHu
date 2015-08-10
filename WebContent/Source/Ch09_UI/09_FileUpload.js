
Ext.onReady(function() {
	/**
	 * 用户交互式
	 */
	Ext.Msg.show({
		title: '提示',
		msg: '此操作无法回退, 是否继续?',
		buttons: Ext.Msg.YESNO,
		fn: function(btnId, text, opt) {
			if(btnId=='yes') {
				Ext.DomHelper.insertHtml('beforeEnd', Ext.getBody().dom, '你选择了确定!');
			} else if(btnId=='no') {
				Ext.DomHelper.insertHtml('beforeEnd', Ext.getBody().dom, '你选择了取消!');
			}
		}
	});
	
	/**
	 * 带输入栏
	 */
	Ext.Msg.show({
		title: '提示',
		msg: '你的名字是?',
		buttons: Ext.Msg.OK,
		prompt: true,
		fn: function(btnId, text, opt) {
			Ext.DomHelper.insertHtml('beforeEnd', Ext.getBody().dom, '你的名字是: '+text);
		},
		icon: Ext.Msg.QUESTION,
		width: 300
		
	});
	
	
});