import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../../images/icons8-learning-64.png";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from '../../../contexts/UserContext/UserContext';

const Navigation = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut().then((result) => {
            alert('logOut successful')
            console.log(user);
        }).catch(error => {
            alert(error.message)
        })
    }
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
                {/* user Profile picture shown */}
                {!user?.uid ?
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
                    :
                    <div className="dropdown dropdown-end  tooltip tooltip-left" data-tip={user?.displayName}>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full"  >

                                <img src={user?.photoURL} alt="THIS IS USER PROFILE IMAGE" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink to='/profile' className="justify-between">
                                    Profile
                                </NavLink>
                            </li>
                            <li><NavLink onClick={handleLogout}>Logout</NavLink></li>
                        </ul>
                    </div>
                }


            </div>
        </div>
    );
};

export default Navigation;