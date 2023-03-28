import React from 'react';
import { FaCheck, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from "react-to-pdf";

const CourseDetails = () => {

    const details = useLoaderData()
    const { id, title, thumbImg, tutorName, rating, totalRating, totalStudentss, preRequirements, shortDescription, isBestSallier, topicsLearn } = details;
    return (

        <div className="mt-10 w-[530px] mx-auto relative text-start card card-compact w-full rounded-none p-1 bg-base-100 shadow-xl">
            <figure><img className='w-full' src={thumbImg} alt="Shoes" /></figure>
            <div className="p-2 ">
                <h2 className="card-title">{title}</h2>
                <p className='mt-0 text-slate-300 link'> {tutorName} </p>
                <p className='mt-3'>{shortDescription}</p>
                <p className='my-3 '>
                    <span className=' text-xl font-semibold text-yellow-600 '>{rating} </span>
                    <Rating className='text-yellow-500' initialRating={rating} readonly={true} emptySymbol={<FaRegStar />} fullSymbol={<FaStar />} /> ({totalRating})
                </p>
                {isBestSallier &&
                    <>
                        <span className='bg-yellow-600 mt text-white p-1'>Best Seller</span>
                        <br />
                    </>
                }
                <Link to={`/premium-access/${id}`} className="btn btn-primary btn-xs mt-5 sm:btn-sm md:btn-md lg:btn-lg">Get premium Access</Link>


                {

                    topicsLearn &&
                    <>
                        <h2 className='text-2xl font-semibold mb-3 mt-5'>What you'll learn</h2>
                        <ul>
                            {topicsLearn.map(topic =>
                                <div className=' flex items-start'>
                                    <FaCheck className='text-sm' />
                                    <li className='ml-2'>{topic}</li></div>)}
                        </ul>
                    </>


                }
                {
                    preRequirements &&
                    <>
                        <h2 className='text-2xl mb-3 mt-5 font-semibold'>Requirements</h2>

                        <ul className='list-disc '>
                            {preRequirements.map(requesters => <li className='list-item ml-5'>{requesters}</li>)}
                        </ul>
                    </>
                }


            </div>
        </div>
    );
};

export default CourseDetails;