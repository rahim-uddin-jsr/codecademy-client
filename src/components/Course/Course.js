import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, title, thumbImg, tutorName, rating, totalRating, isBestSallier } = course;
    return (
        <Link to={`/course/${id}`}>
            <div className="h-[345px] cursor-pointer relative text-start card card-compact w-[240px] rounded-none p-1 bg-base-100 shadow-xl">
                <figure><img src={thumbImg} alt="Shoes" /></figure>
                <div className="p-2 ">
                    <h2 className="card-title">{title}</h2>
                    <p className='mt-0 text-slate-300 link'> {tutorName} </p>
                    {/* <p className='mt-3'>{shortDescription}</p> */}
                    <p className='my-3 '>
                        <span className=' text-xl font-semibold text-yellow-600 '>{rating} </span>
                        <Rating className='text-yellow-500' initialRating={rating} readonly={true} emptySymbol={<FaRegStar />} fullSymbol={<FaStar />} /> ({totalRating})
                    </p>
                    {isBestSallier &&
                        <span className='bg-yellow-600 mt text-white p-1'>Best Seller</span>}

                </div>
            </div>
        </Link>
    );
};

export default Course;