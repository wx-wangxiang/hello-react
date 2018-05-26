import React, { Component } from 'react';

class BlackBorderContainer extends Component {
	render() {
		console.log(this.props.children);
		return (
			<div className="black-border">
				{this.props.children}
			</div>
		);
	}
}

class Lesson extends Component {

	clickHandler(index, title) {
		console.log(`${index} - ${title}`);
	}

	render() {
		const { index, lesson } = this.props;

		return (
			<BlackBorderContainer>
				<div className="lesson" onClick={ ()=>{ this.clickHandler(index, lesson.title); } }>
					<h1>{ lesson.title }</h1>
					<p>{ lesson.description }</p>
				</div>
			</BlackBorderContainer>
		)
	}
}

class LessonsList extends Component {
	render() {
		const { lessons } = this.props;

		return (
			<div className="lessons-list">
				{ lessons.map((lesson, index) => <Lesson key={ index } index={index} lesson={ lesson } />) }
			</div>
		)
	}
}

class Man extends Component {
	constructor() {
		super();
		this.state = {
			lessons: [
			  	{ title: 'Lesson 1: title', description: 'Lesson 1: description' },
			  	{ title: 'Lesson 2: title', description: 'Lesson 2: description' },
			  	{ title: 'Lesson 3: title', description: 'Lesson 3: description' },
			  	{ title: 'Lesson 4: title', description: 'Lesson 4: description' },
			  	{ title: 'Lesson 5: title', description: 'Lesson 5: description' },
			  	{ title: 'Lesson 6: title', description: 'Lesson 6: description' }
			]
		};
	}

	render() {
		return (
			<div className="man">
				this is man
				<LessonsList lessons={ this.state.lessons } />
			</div>
		);
	}
}

export default Man;
