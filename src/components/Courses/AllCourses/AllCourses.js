import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../../Course/Course';

const AllCourses = () => {
    const courses = useLoaderData()
    return (
        <>
            {courses.map(course => <Course key={course.id} course={course} />)}
        </>
    );
};

export default AllCourses;