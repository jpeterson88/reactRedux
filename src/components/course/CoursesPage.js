import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component{
	constructor(props, context){
		super(props,context);

		this.state = {
			course: {title: null }
		};
	}

	courseRow(course, index){
		return <div key={index}>{course.title}</div>;
	}

	render(){
		return (
			<div>
			<h1>Courses</h1>
			<CourseList courses={this.props.courses}/>
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
