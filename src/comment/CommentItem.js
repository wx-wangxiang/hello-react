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

	_getProcessed(content) {
		const processedContent = content
			.replace(/&/g, '&amp;') // 这段代码一定要放第一位，不然后面的replace会把转义后的'&'替换掉
			.replace(/</g, "&lt;")
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#039;')
			.replace(/`([\s\S]+?)`/, '<code>$1</code>');

		return processedContent;
	}

	//删除评论
	handleDeleteComment() {
		const { onDeleteComment, index } = this.props;

		if (onDeleteComment) {
			onDeleteComment(index);
		}
	}

	render() {
		const {comment} = this.props;

		return (
			<div className="comment">
				<div className="comment-user">
					<span className="comment-username">{comment.username}  </span>：
				</div>
				<p dangerouslySetInnerHTML={{__html: this._getProcessed(comment.content)}} />
				<span className="comment-createdtime">{this.state.timeString}</span>
				<span className="comment-delete" onClick={()=>{this.handleDeleteComment();}}>删除</span>
			</div>
		)
	}
}

export default CommentItem;
