import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentItem extends Component {
	static propTypes = {
		comment: PropTypes.object.isRequired,
		onDeleteComment: PropTypes.func,
		index: PropTypes.number
	};

	constructor() {
		super();
		this.state = {
			timeString: ''
		};
	}

	componentWillMount() {
		this._updateTimeString();
		this._timer = setInterval(()=>{
			this._updateTimeString();
		}, 5000);
	}

	componentWillUnmount() {
		clearInterval(this._timer);
	}

	_updateTimeString() {
		const { createdTime } = this.props.comment; // 创建时的时间戳
		const duration = (+new Date() - createdTime) / 1000; // 秒
		const timeString = duration >= 60 
			? `${Math.round(duration / 60)}分钟前` 
			: `${Math.round(Math.max(duration, 1))}秒前`;

		this.setState({
			timeString
		});
	}


	//删除评论
	handleDeleteComment() {
		const { onDeleteComment, index } = this.props;

		if (onDeleteComment) {
			onDeleteComment(index);
		}
	}

	render() {
		return (
			<div className="comment">
				<div className="comment-user">
					<span className="comment-username">{this.props.comment.username}  </span>：
				</div>
				<p>{this.props.comment.content}</p>
				<span className="comment-createdtime">{this.state.timeString}</span>
				<span className="comment-delete" onClick={()=>{this.handleDeleteComment();}}>删除</span>
			</div>
		)
	}
}

export default CommentItem;
