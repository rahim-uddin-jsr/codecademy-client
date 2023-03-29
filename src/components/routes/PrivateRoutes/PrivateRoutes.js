import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import loadingImg from '../../../images/loading.svg'
import { AuthContext } from '../../../contexts/UserContext/UserContext';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className='w-full'>
            <img className='text-center mx-auto' src={loadingImg} alt="" />
            <p className='text-center'>Loading...</p>
        </div>
    }
    console.log(loading);
    if (user?.uid) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoutes;