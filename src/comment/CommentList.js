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
						key={index} 
						index={index} 
						onDeleteComment={(_index)=>{this.handleDeleteComment(_index);}}
						comment={comment} />)
				}
			</div> 
		);
	}
}

export default CommentList;
