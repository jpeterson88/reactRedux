import * as types from './actionTypes';

//change import to point to real API when ready
import courseApi from '../api/mockCourseApi'

export function loadCoursesSuccess(courses){
	return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses(){
	//thunks always return a function that accepts a dispatch
	return function (dispatch){
		return courseApi.getAllCourses().then(courses => {
			dispatch(loadCoursesSuccess(courses));
		}).catch(error => {throw error;});
	};
}
