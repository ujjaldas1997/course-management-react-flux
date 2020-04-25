import React, { useState, useEffect } from "react";
import CoursesList from "./CoursesList";
import { Link } from "react-router-dom";
import courseStore from "../stores/courseStores";
import { _loadCourses, _delete_course } from "../actions/courseActions";
import { toast } from "react-toastify";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) _loadCourses();
    return () => courseStore.removeChangeListener(onChange); // when component unmounts
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  function handleDelete(id) {
    _delete_course(id);
    toast.error("Course deleted!");
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CoursesList
        courses={courses}
        onDelete={handleDelete}
      />
    </>
  );
}

export default CoursesPage;
