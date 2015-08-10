Ext.onReady(function() {
//	var updateClock = function() {
//		Ext.fly('clock').update(new Date().format('g:i:s A'));
//	};
//	var task = {
//		run: updateClock,
//		interval: 1000
//	};
//	var runner = new Ext.util.TaskRunner();
//	runner.start(task);
//	
	/**
	 * Ext还提供了一个静态工具类TaskMgr, 以上代码还可以写成如下形式
	 */
	Ext.TaskMgr.start({
		run: function() {
			Ext.fly('clock').update(new Date().format('g:i:s A'));
		},
		interval: 1000
	});
});