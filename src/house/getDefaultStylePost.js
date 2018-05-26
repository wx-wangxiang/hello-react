import React, { Component } from 'react';

const getDefaultStylePost = function(defaultStyle, content) {
	class Post extends Component {
		constructor() {
			super();
			this.state = {
				style: defaultStyle,
				content
			};
		}

		componentWillMount() {
			const { style={} } = this.props;

			this.setState({
				style: {
					...this.state.style,
					...style
				}
			});
		}

		render() {
			return (
				<p style={this.state.style}>{this.state.content}</p>
			);
		}
	}

	return Post;
}

export default getDefaultStylePost;
