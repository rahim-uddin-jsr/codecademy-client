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
    const handleTheme = (e) => {
        const isChecked = e.target.checked;

        if (!isChecked) {
            console.log('checked');
            localStorage.setItem('theme', 'light')
        }
        else {
            localStorage.setItem('theme', 'dark')
        }

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }

        // Whenever the user explicitly chooses light mode
        // localStorage.theme = 'light'

        // Whenever the user explicitly chooses dark mode
        // localStorage.theme = 'dark'

        // Whenever the user explicitly chooses to respect the OS preference
        // localStorage.removeItem('theme')

    }
    const sunStyles = `${localStorage.theme === 'dark' ? "swap-on" : "swap-off"} fill-current w-8 h-8`
    const moonStyles = `${localStorage.theme === 'dark' ? "swap-off" : "swap-on"} fill-current w-8 h-8`

    return (
        <div>
            <div className="navbar bg-base-100 bg-white dark:bg-slate-800 dark:text-white">
                <div className="flex-1">
                    <NavLink to='/' className="btn btn-ghost normal-case text-xl">
                        <img width={40} src={logo} alt="Codecademy logo" />

                        <p className='ml-3'>Codecademy</p></NavLink>
                </div>
                <div className="flex">
                    <ul className="menu menu-horizontal px-1 gap-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/courses'>Courses</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                        <li><NavLink to='/frequently-asked-question'>Faq</NavLink></li>
                        <li><NavLink to='/login'>Login</NavLink></li>
                        <li><NavLink to='/register'>Register</NavLink></li>
                    </ul>
                    <label className="swap swap-rotate" >

                        {/* <!-- this hidden checkbox controls the state --> */}
                        <input type="checkbox" onClick={handleTheme} />

                        {/* <!-- sun icon --> */}
                        <svg className={sunStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* {  <!-- moon icon -->} */}
                        <svg className={moonStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>
                {/* user Profile picture shown */}
                {!user?.uid ?
                    <div className="dropdown  dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="">
                                <FaUserAlt className='text-3xl' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100  dark:bg-slate-400 dark:text-white rounded-box w-52">
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
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100  dark:bg-slate-400 dark:text-white rounded-box w-52">
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