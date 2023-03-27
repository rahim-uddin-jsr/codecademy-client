import { Outlet, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import SideBar from './SideBar/SideBar';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className='flex mt-20'>
            <div className="w-3/12">
                <SideBar />
            </div>
            <div className="grow grid container w-full justify-items-center lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 gap-5 ">
                <Outlet />
            </div>
        </div>
    );
};

export default Courses;