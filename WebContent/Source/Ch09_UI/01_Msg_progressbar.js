Ext.onReady(function() {
//	var pbar = new Ext.ProgressBar({
//		id: 'pbar',
//		width: 300,
//		renderTo: Ext.getBody()
//	});	
	
	// 无具体进度, 定时停止
//	pbar.wait({
//		interval: 100,
//		increment: 15,
//		duration: 5000,
//		text: '加载中, 请稍后..'
//	});
	
	// 无具体进度, 手动停止(和wait一块儿使用)
//	var btn = new Ext.Button({
//		text: '停止',
//		handler: function() {
//			pbar.reset();
//			pbar.updateText('强制结束');
//		},
//		renderTo: Ext.getBody()
//	});

	// 模拟显示实时进度
//	var i=0;
//	var task = {
//		run: function() {
//			i += 0.1;
//			pbar.updateProgress(i, '加载进度: '+Math.round(i*100)+'%');
//			if(Math.round(i*100)==100) {
//				pbar.updateText('加载完成');
//				Ext.TaskMgr.stop(task);
//			}
//		},
//		interval: 500
//	};
//	Ext.TaskMgr.start(task);


	var pbar = new Ext.ProgressBar({
		id: 'pbar',
		width: 300,
		value: 0,
		renderTo: Ext.getBody()
	});	
	// 真实的Ajax加载实时进度
	var task = {
		run: function() {
			Ext.Ajax.request({
				url: 'ProgressBar.jsp',
				params: {curr: pbar.value},
				success: function(response) {
					var value = parseFloat(response.responseText);
					pbar.updateProgress(value, Math.round(parseInt(value*100))+'%');
					if(Math.round(parseInt(value)*100)==100) {
						pbar.updateText('加载完成');
						Ext.TaskMgr.stop(task);
					}
				},
				failure: function(response) {
					Ext.DomHelper.insertHtml('beforeEnd', Ext.getBody().dom, '加载失败');
				}
			});
		},
		interval: 500
	};
	Ext.TaskMgr.start(task);
});