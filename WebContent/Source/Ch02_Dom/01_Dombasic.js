/**
 * 作用: 一般页面里	ID是唯一的, 用于准备定位一个元素
 * 语法: document.getElementById(id)
 * 参数: id为必选项, 格式为字符串 
 * 返回值: 对象, 返回相同id对象中的第一个, 按在页面中出现的次序, 如果无符合条件的对象, 则返回null
 */
function findDiv() {
	var div = document.getElementById('myDiv');
	alert(div);
};

/**
 * 作用: 按HTML标签名查询, 返回一个相同标签元素的数组
 * 语法: object.getElementsByTagName(tagname) object可以是document或event.srcElement.parentElement等
 * 参数: name为必选项, 格式为字符串, 根据HTML标签检索 
 * 返回值: 数组对象; 如果无符合条件的对象, 则返回空数组
 */
function findP() {
	var arr = document.getElementsByTagName('p');
	alert(arr[0].innerHTML);
	// 注意: 标签之间的空行和回车也要算节点
//	alert(document.getElementById('myDiv').childNodes[0]);
};

/**
 * 作用: 按照HTML标签名称创建标签
 * 语法: document.createElement(tagName)
 * 参数: tagName为必选项, 格式为字符串
 * 返回值: 标签对象
 * 因为新建的标签没有内容, 不显示. 使用FireBug中的HTML视图查看
 */
function creatDiv() {
	var newDiv = document.createElement('adfe');
	newDiv.id = 'newDiv';
//	document.body.appendChild(newDiv);	//  把新标签添加到现有文档的结尾处, 可以重复添加
	document.body.insertBefore(newDiv, document.getElementById('myDiv'));	// 添加到某标签前面
};

/**
 * 
 * 移除标签
 * removeChild()
 */
function removeP() {
	var p = document.getElementsByTagName('p')[0];
	p.parentNode.removeChild(p);
};

/**
 * 改变ID
 * 把ID当作属性修改即可
 */
function changeId() {
	var div = document.getElementById('myDiv');
	div.id = 'testNewId';
}

/**
 * 暗藏属性innerHTML
 * 虽然不是W3C的标准属性, 但是却非常重要
 */
function getHTML() {
	var div = document.getElementById('myDiv');
	alert(div.innerHTML);
}

/**
 * 虽说innerHTML的效率要比document.createElement高
 * 但唯一麻烦的是拼接字符串, 要自己取舍
 */
function changeHTML() {
	var div = document.getElementById('myDiv');
	div.innerHTML = '<div>嵌入新的div</div>';
}

/**
 * 操作css方法一: 按样式名称一个一个去改
 * 缺点: 繁琐, 程序灵活性不高, 团队协作不好, 效率低下
 * 结论: 不到万不得已, 尽量不用这种方式
 */
function setStyle() {
	var div = document.getElementById('myDiv');
	div.style.background = '#ffff00';
	div.style.width = 300 + 'px';
	div.style.height = 50 + 'px';
}

/**
 * 操作css方法二: 使用外部CSS文件批量改
 * 有点, 对比上边的就可以了
*/
function useCss() {
	var div = document.getElementById('myDiv');
	div.className = 'myDiv';
}