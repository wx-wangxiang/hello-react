import React, { Component } from 'react';
import getDefaultStylePost from './getDefaultStylePost';

const Post = getDefaultStylePost({color: 'red'}, 'soap');

class BathRoom extends Component {
	render() {
		return (
			<div className="bathroom">
				this is bathroom
				<Post style={{color: 'blue', fontSize: '13px'}} />
				<Post style={{fontSize: '12px'}} />
			</div>
		);
	}
}

export default BathRoom;
