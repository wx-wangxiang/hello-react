import React, { Component } from 'react';

//百分比换算器
class Input extends Component {
	changeHandler(event) {
		const { onInput = '' } = this.props;

		if (onInput) {
			onInput(event.target.value);
		}
	}
	render() {
		return (
			<input type="text" onChange={(e)=>{ this.changeHandler(e); }}/>
		);
	}
}

class PercentageShower extends Component {
	static defaultProps = {
		num: 0
	}

	transToPercent(num) {
		console.log(this);
		return `${(num * 100).toFixed(2)} %`;
	}

	render() {
		const { num } = this.props;

		return (
			<span>{this.transToPercent(num)}</span>
		)
	}
}

class PercentageApp extends Component {
	constructor() {
		super();
		this.state = {
			num: 0
		};
	}

	onInputHandler(num) {
		this.setState({
			num
		});
	}

	render() {
		return (
			<div className="percentage-app">
				<PercentageShower num={this.state.num} />
				<Input onInput={(val)=>{this.onInputHandler(val)}} />
			</div>
		)
	}
}

//屏幕
class Screen extends Component {
	static defaultProps = {
		showContent: '无内容'
	}
	componentDidMount() {}

	render() {
		return (
			<div className="screen">
				<p ref={(dom)=>{this.pEle = dom;}} onClick={()=>{console.log(this.pEle.offsetHeight);}}>{ this.props.showContent }</p>
			</div>
		);
	}
}

//电脑
class Computer extends Component {
	constructor() {
		super();
		this.state = {
			status: 'off',
			showContent: '显示器关了'
		};
	}

	clickHandler() {
		if (this.state.status === 'off') {
			this.setState({
				status: 'on',
				showContent: '显示器亮了'
			});
		} else {
			this.setState({
				status: 'off',
				showContent: '显示器关了'
			});
		}
	}

	render() {
		return (
			<div>
				<button type="button" onClick={ ()=>{ this.clickHandler() }}>{ this.state.status }</button>
				<Screen showContent={ this.state.showContent }/>
				<PercentageApp />
			</div>
		);
	}
}

//房间
class Room extends Component {
	render() {
		return (
			<div className="room">
				this is a room
				<Computer />
			</div>
		);
	}
}

export default Room;
