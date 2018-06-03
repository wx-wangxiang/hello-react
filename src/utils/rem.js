const rem = function() {
	// 获取html DOM元素
	const htmlDOM = document.getElementsByTagName('html')[0];
	
	setFontSize(htmlDOM);
	window.addEventListener('resize', ()=>{
		setFontSize(htmlDOM);
	})
};

const setFontSize = function(htmlDOM) {
	// 获取屏幕宽度
	const deviceWidth = document.documentElement.clientWidth || document.body.clientWidth;
	// 计算出 基准 fontSize
	const fontSize = deviceWidth / 10;

	// 设置html的fontSize
	htmlDOM.style.fontSize = fontSize + 'px';
}

export default rem;
