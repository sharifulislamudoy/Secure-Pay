import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import LoginRequiredNotice from '../Components/LoginRequiredNotice';

const PrivateRoute = ({ children }) => {

    const { user } =use(AuthContext);
    // console.log(user)

    if (user && user?.email){
        return children;
    }
    return <LoginRequiredNotice></LoginRequiredNotice>
};

export default PrivateRoute;