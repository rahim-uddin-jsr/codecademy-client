import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, [])
    return (
        <>
            <h1 className='text-2xl mb-5 font-semibold'>Show courses by category</h1>
            <ul className="menu bg-base-100">
                {
                    categories?.map(category => <li key={category.id}><Link to={`/courses/category/${category.name}`}>{category.name}</Link></li>)
                }
                <li><Link to='/courses'>AllCourses</Link></li>

            </ul></>
    );
};

export default SideBar;