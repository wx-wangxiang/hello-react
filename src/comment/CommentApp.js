import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './comment.css';

class CommentApp extends Component {
	constructor() {
		super();
		this.state = {
			comments: []
		};
	}

	componentWillMount() {
		this._loadComments();
	}

	//评论 持久化
	_saveComments(comments) {
		localStorage.setItem('comments', JSON.stringify(comments));
	}

	//从localstorage中 加载评论
	_loadComments() {
		const comments = JSON.parse(localStorage.getItem('comments'));

		if (comments) {
			this.setState({
				comments
			});
		}
	}

	handleSubmit(comment) {
		const comments = this.state.comments.concat(Array.of(comment));


		this.setState({
			comments
		});
		this._saveComments(comments);
	}

	// 删除评论
	handleDeleteComment(index) {
		const comments = this.state.comments;

		comments.splice(index, 1);
		this.setState({
			comments
		});
		this._saveComments(comments);
	}
	
	render() {
		return (
			<div className="wrapper">
				<CommentInput onSubmit={ (comment)=>{ this.handleSubmit(comment); } } />
				<CommentList 
					onDeleteComment={(index)=>{this.handleDeleteComment(index)}}
					comments={ this.state.comments } />
			</div>
		);
	}
}

export default CommentApp;
