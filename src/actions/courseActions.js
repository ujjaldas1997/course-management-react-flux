import { saveCourse, getCourses, deleteCourse } from "../api/courseApi";
import dispatcher from "../AppDispatcher";
import actionTypes from "./actionTypes";

export function _saveCourse(course) {
  return saveCourse(course).then((response) => {
    dispatcher.dispatch({
      actionType: course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE,
      course: response,
    });
  });
}

export function _loadCourses() {
  return getCourses().then((response) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: response,
    });
  });
}

export function _delete_course(id) {
  return deleteCourse(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSE,
      id: id,
    });
  });
}
