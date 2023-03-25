import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../../images/icons8-learning-64.png";
import { FaUserAlt } from "react-icons/fa";

const Navigation = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <NavLink to='/' className="btn btn-ghost normal-case text-xl">
                        <img width={40} src={logo} alt="Codecademy logo" />

                        <p className='ml-3'>Codecademy</p></NavLink>
                </div>
                <div className="flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/login'>Login</NavLink></li>
                        <li><NavLink to='/register'>Register</NavLink></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="">
                            <FaUserAlt className='text-3xl' />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink to='/login' className="justify-between">
                                Login
                            </NavLink>
                        </li>
                        <li><NavLink to='/register'>Register</NavLink></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://picsum.photos/200" alt="THIS IS USER PROFILE IMAGE" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink to='/profile' className="justify-between">
                                Profile
                            </NavLink>
                        </li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navigation;