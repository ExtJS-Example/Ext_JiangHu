// 简易树
var tree = {
	id: '001',
	text: '根',
	children: [{
		id: '002',
		text: '子1'
	}, {
		id: '003',
		text: '子2'
	}, {
		id: '004',
		text: '子3',
		children: [{
			id: '005',
			text: '孙1'
		}, {
			id: '006',
			text: '孙2'
		}]
	}]
};

// 创建一个p标签元素并添加到当前body的末尾
function println(msg){
	var p = document.createElement('p');
	p.innerHTML = msg;
	document.body.appendChild(p);
}

/**
 * 简单的递归遍历
 * Tree是一个典型的JavaScript对象, 其结构也是典型的Json.
 * 此例的代码虽然简单,却非常关键,稍作修改就可以用了进行节点查找,过滤操作
 */
function visit(node) {
	println(node.id + '-->' + node.text);
	if(node.children && node.children.length) {
		for(var i=0; i<node.children.length; i++) {
			visit(node.children[i]);
		}
	}
}

/**
 * 最简单的节点查找
 * 这里的代码非常简陋,只是为了说明运行机制.
 * doFind函数就是冲visit函数改进而来, 这里增加了一个启动函数find, 这也非常符合递归函数的一般出来方式.
 */
function doFind(node, name, value, result){
	if(node[name] == value) {
		result.push(node);
		return;
	}
	if(node.children && node.children.length) {
		for(var i=0; i<node.children.length; i++) {
			doFind(node.children[i], name, value, result);
		}
	}
}

function find(name, value) {
	var result = [];
	doFind(tree, name, value, result);
	return result[0];
}

window.onload = function() {
	visit(tree);
	
	var node = find('text', '孙1');
	alert(node.text);
};
