import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className='flex mt-20'>
            <div className="w-3/12">
                side bar
            </div>
            <div className="grow grid container w-full justify-items-center lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 gap-5 ">
                {courses.map(course => <Course key={course.id} course={course} />)}
            </div>
        </div>
    );
};

export default Courses;