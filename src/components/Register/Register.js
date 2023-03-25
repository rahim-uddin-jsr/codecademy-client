import React, { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext/UserContext';

const Register = () => {
    const { createAccountWithEmailPass, updateUserProfile, logOut } = useContext(AuthContext)
    const firstNameRef = useRef('')
    const lastNameRef = useRef('')
    const photoUrlRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const displayName = firstNameRef.current.value + ' ' + lastNameRef.current.value;
        const photoURL = photoUrlRef.current.value;
        const profileDetailsTOUpdate = { displayName, photoURL };
        console.log(profileDetailsTOUpdate);
        createAccountWithEmailPass(email, password)
            .then((result) => {
                updateUserProfile(profileDetailsTOUpdate)
                    .then((result) => {
                        logOut().then(() => {
                            alert('please login first')
                            navigate('/login')
                        })
                        alert('user created')
                    }).catch(error => {
                        alert(error.message)
                    })
                alert('user profile Updated')
            }).catch(error => {
                alert(error.message)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6"></p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input ref={firstNameRef} type="text" placeholder="First Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input ref={lastNameRef} type="text" placeholder="Last Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input ref={photoUrlRef} type="url" placeholder="Photo Url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input ref={emailRef} type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input ref={passwordRef} type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;