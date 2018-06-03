import React, { Component } from 'react';
import CommentItem from './CommentItem';
import PropTypes from 'prop-types';

class CommentList extends Component {
	static propTypes = {
		comments: PropTypes.array,
		onDeleteComment: PropTypes.func
	};

	handleDeleteComment(index) {
		const {onDeleteComment} = this.props;

		if (onDeleteComment) {
			onDeleteComment(index);
		}
	}

	render() {
		const { comments } = this.props;

		return (
			<div>
				{
					comments.map((comment, index)=><CommentItem 
						// 这里的key 使用 index 时，会出现bug，当删除一个comment时，
						// react会复用删除掉的comment的内部结构，比如state，因为，
						//当前comment的key和删除掉的comment的key是一样的；
						key={comment.createdTime}
						index={index} 
						onDeleteComment={(_index)=>{this.handleDeleteComment(_index);}}
						comment={comment} />)
				}
			</div> 
		);
	}
}

export default CommentList;
