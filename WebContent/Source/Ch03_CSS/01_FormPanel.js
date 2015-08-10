/**
 * 必须要记死的东西
 * 从内到外： content（实际的内容）-- padding（填充）-- border（边框）-- margin（边距）
 */
 
 Ext.onReady(function() {
 	var panel = new Ext.form.FormPanel({
 		// 这个配置项用来把表单定位到面板的中央
 		bodyStyle: {
 			padding: '80px 100px'
 		},
 		// 这个配置项很重要，尤其在有很多表单项的时候
 		defaults: {
 			width: 120
 		},
 		labelWidth: 50,
 		// 分隔符不仅仅可以是默认的冒号，还可以使用HTML标签
 		labelSeparator: '<font color="red">>></font>',
 		items: [{
 			fieldLabel: '姓名',
 			name: 'userName',
 			hiddenName: 'userName',
 			xtype: 'textfield'
 		}, {
 			id: '_gender',
 			fieldLabel: '性别',
 			name: 'gender',
// 			hiddenName: 'gender',
 			xtype: 'combo',
 			triggerAction: 'all',
 			valueField: 'genderVal',
 			displayField: 'genderName',
 			mode: 'local',
 			allowBlank: true,
 			store: new Ext.data.SimpleStore({
 				fields: ['genderVal', 'genderName'],
 				data: [
 					['male', '男'],
 					['female', '女'],
 					['other', '其它']
 				]
 			})
 		}, {
 			fieldLabel: '婚否',
 			name: 'isMarried',
 			hiddenName: 'isMarried',
 			xtype: 'checkbox',
 			inputValue: 1
 		}]
 	});
 	
 	var win = new Ext.Window({
		title: '表单提交',
		width: 400,
		height: 300,
		layout: 'fit',
		items: [panel],
		buttons: [{
			text: '提交',
			handler: function(btn) {
				var values = panel.getForm().getValues();
				
				Ext.Msg.alert('data: ' + Ext.encode(values));
			}
		}]
	});
	win.show();
 });
