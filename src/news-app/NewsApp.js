import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import 'normalize.css';
import './news.css';

class NewsApp extends Component {
	render() {
		return (
			<div>
				<Header />
				<Content />
			</div>
		);
	}
}

export default NewsApp;
