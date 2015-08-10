Ext.onReady(function() {
	var win=new Ext.Window({
		title:'切换主题',
		width:600,
		height:400,
		renderTo:Ext.getBody(),
		bbar:[
			{
				text:'切换主题',
				handler:function(){
					Ext.util.CSS.swapStyleSheet('default-skin','../ext-3.2.0/resources/css/xtheme-gray.css');
				}
			}
		]
	});
	win.show();
});