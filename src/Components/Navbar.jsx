import React from 'react';
import { NavLink } from 'react-router';
import LogoImg from '../assets/icon.png'
import User from '../assets/user.png'
import '../Components/Navbar.css'

const Navbar = () => {

    const links = <>
        <NavLink to={'/'} className='mx-2 hover:bg-blue-800 p-3 rounded-lg'>Home</NavLink>
        <NavLink to={'/paybills'} className='mx-2 hover:bg-blue-800 p-3 rounded-lg'>Pay Bills</NavLink>
        <NavLink to={'/transactionhistory'} className='mx-2 hover:bg-blue-800 p-3 rounded-lg'>Transaction History</NavLink>
        <NavLink to={'/myaccount'} className='mx-2 hover:bg-blue-800 p-3 rounded-lg'>My Account</NavLink>
        <NavLink to={'/support'} className='mx-2 hover:bg-blue-800 p-3 rounded-lg'> Support</NavLink>
        <NavLink to={'/about'} className='mx-2 hover:bg-blue-800 p-3 rounded-lg'>About Us</NavLink>

    </>

    return (
        <div className="navbar bg-[#1E3A8A] shadow-sm">
            <div className="navbar-start">
                <div className="dropdown mr-3">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2.5">
                        {links}
                    </ul>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={LogoImg} alt="securepay" className='rounded-full h-6' />
                    <a className="text-2xl">SecurePay</a>
                </div>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink className='btn bg-blue-800'>
                    <img src={User} alt="" className='rounded-full h-6'/>
                    <p>Login</p>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;