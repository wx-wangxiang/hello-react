import React, { Component } from 'react';
import Room from './room';
import BathRoom from './bath-room';
import Man from './man';
import Dog from './dog';
import './index.css';

class House extends Component {
	render() {
		return (
			<div className="house">
				<Room />
				<BathRoom />
				<Man />
				<Dog />
			</div>
		);
	}
}

export default House;
