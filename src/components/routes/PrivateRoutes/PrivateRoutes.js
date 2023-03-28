import React from 'react';
import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext/UserContext';

const PrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthContext)
    // const navigate = useNavigate()
    // console.log(user);
    if (user?.uid) {
        return children
    }

    return <Navigate to='/login'></Navigate>

};

export default PrivateRoutes;