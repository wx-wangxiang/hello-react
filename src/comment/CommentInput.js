import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {
	static propTypes = {
		onSubmit: PropTypes.func
	};

	constructor() {
		super();
		this.state = {
			username: '',
			content: ''
		};
	}

	componentWillMount() {
		this._loadUserName();
	}

	componentDidMount() {
		this.textareaEle.focus();
	}

	_saveUserName(name) {
		localStorage.setItem('username', name);
	}

	_loadUserName() {
		const username = localStorage.getItem('username');

		if (username) {
			this.setState({
				username
			});
		}
	}

	handleUserNameBlur(event) {
		const username = event.target.value;

		this._saveUserName(username);
	}

	userNameChangeHandler(event) {
		const username = event.target.value;

		this.setState({
			username
		});
	}

	contentChangeHandler(event) {
		const content = event.target.value;

		this.setState({
			content
		});
	}

	submitHandler() {
		const { username, content } = this.state;
		const { onSubmit } = this.props;

		if (onSubmit) {
			onSubmit({ 
				username, 
				content,
				createdTime: +new Date()
			});
		}
		this.setState({
			content: ''
		});
	}

	render() {
		return (
			<div className="comment-input">
				<div className="comment-field">
					<span className="comment-field-name">用户名：</span>
					<div className="comment-field-input">
						<input type="text" 
							value={ this.state.username }
							onBlur={(e)=>{this.handleUserNameBlur(e);}}
							onChange={ (e)=>{ this.userNameChangeHandler(e); } } />
					</div>
				</div>
				<div className="comment-field">
					<span className="comment-field-name">评论内容：</span>
					<div className="comment-field-input">
						<textarea type="text"
							ref={(el)=>{this.textareaEle = el;}}
							value={ this.state.content } 
							onChange={ (e)=>{ this.contentChangeHandler(e); } } >
						</textarea>
					</div>
				</div>
				<div className="comment-field-button">
					<button onClick={ ()=>{ this.submitHandler(); } }>发布</button>
				</div>
			</div>
		);
	}
}

export default CommentInput;
