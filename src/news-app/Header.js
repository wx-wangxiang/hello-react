import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="header-inner">
					<ul className="header-container">
						<li className="header-item">推荐</li>
						<li className="header-item">新闻</li>
						<li className="header-item">娱乐</li>
						<li className="header-item">体育</li>
						<li className="header-item">图片</li>
						<li className="header-item">财经</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Header;
