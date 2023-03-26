import React, { useContext, useRef } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext/UserContext';

const Login = () => {
    const { user, loginWithEmailPass, logInWithGoogle, logInWithGithub } = useContext(AuthContext)
    const emailRef = useRef('')
    const passwordRef = useRef('')
    console.log(user);
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        loginWithEmailPass(email, password)
            .then((result) => {
                alert('user login successful')
                navigate('/')
            }).catch(error => {
                alert(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        logInWithGoogle()
            .then((result) => {
                alert('user login successful')
                navigate('/')
            }).catch(error => {
                alert(error.message)
            })
    }
    const handleGithubSignIn = () => {
        logInWithGithub()
            .then((result) => {
                alert('user login successful')
                navigate('/')
            }).catch(error => {
                alert(error.message)
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="">
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
                                <button type='submit' className="btn  btn-primary">Login</button>
                            </div>
                            <p>or</p>
                        </form>
                        <div className=" w-full mx-auto mb-5 flex flex-col">
                            <button onClick={handleGoogleSignIn} className="btn mb-2  bg-white hover:bg-gray-100 text-gray-800 active"><FaGoogle className='text-xl mr-1' />  Google Sign In</button>
                            <button on onClick={handleGithubSignIn} className="btn bg-white hover:bg-gray-100 text-gray-800 active"><FaGithub className='text-xl mr-1' />  GithUb Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;