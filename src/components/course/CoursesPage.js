import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component{
	constructor(props, context){
		super(props,context);

		this.state = {
			course: {title: null }
		};

		//bind functions to the "this" context
		this.onTitleChange = this.onTitleChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);

	}

	onTitleChange(event){
		const course = this.state.course;
		course.title = event.target.value;
		this.setState ({course: course});
	}

	onClickSave(){
		this.props.actions.createCourse(this.state.course);
	}

	courseRow(course, index){
		return <div key={index}>{course.title}</div>;
	}

	render(){
		return (
			<div>
			<h1>Courses</h1>
			{this.props.courses.map(this.courseRow)}
			<h2>Add Course</h2>
			<input
				type="text"
				onChange={this.onTitleChange}
				value={this.state.course.title}/>
			<input
				type="submit"
				value="Save"
				onClick={this.onClickSave}/>
			</div>
		);
	}
}

//prop contraints
CoursesPage.PropTypes = {
	courses: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

//map props to state after store updates
function mapStateToProps(state, ownProps){
	return{
		courses: state.courses
	};
}

//maps dispatch() function to props
function mapDispatchToProps(dispatch){
	return{
		actions: bindActionCreators(courseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
