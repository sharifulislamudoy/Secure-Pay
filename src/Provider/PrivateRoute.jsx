import React, { use, useContext } from 'react';
import { AuthContext } from './AuthProvider';
import LoginRequiredNotice from '../Components/LoginRequiredNotice';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user } =useContext(AuthContext);

    const location = useLocation();

    if (!user){
        return <Navigate to={'/login-required'} state={{from:location}} replace></Navigate>;
    }
    return children;
};

export default PrivateRoute;