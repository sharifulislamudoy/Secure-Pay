import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Components/Footer';
import LoadingSpinner from '../Components/LoadingSpinner';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timeout);
    },[location.pathname]);

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    return (
        <div className='bg-[#f9fafbef]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster position="top-right" reverseOrder={false}></Toaster>
        </div>
    );
};

export default Root;