import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import LogoImg from '../assets/icon.png'
import User from '../assets/user.png'
import '../Components/Navbar.css'
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {

  const { user, logout } = use(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.error('You are Successfully logged out');
      }).catch((error) => {
        console.log(error)
      });
  }

  const links = <>
    <NavLink to={'/'} className='mx-2 hover:bg-blue-800 p-3 rounded-lg text-white'>Home</NavLink>
    <NavLink to={'/pay-bills'} className='mx-2 hover:bg-blue-800 p-3 rounded-lg text-white'>Pay Bills</NavLink>
    <NavLink to={'/transactionhistory'} className='mx-2 hover:bg-blue-800 p-3 rounded-lg text-white'>Transaction History</NavLink>
    <NavLink to={'/dashboard'} className='mx-2 hover:bg-blue-800 p-3 rounded-lg text-white'>My Account</NavLink>
    <NavLink to={'/support'} className='mx-2 hover:bg-blue-800 p-3 rounded-lg text-white'> Support</NavLink>
    <NavLink to={'/about'} className='mx-2 hover:bg-blue-800 p-3 rounded-lg text-white'>About Us</NavLink>

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
          <img src={LogoImg} alt="securePay" className='rounded-full h-6' />
          <a className="text-2xl text-white">SecurePay</a>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link to={'/'}
            onClick={handleLogout}
            className="btn text-white">
            <img src={User} alt="user" className="rounded-full h-6" />
            <p>Logout</p>
          </Link>
        ) : (
          <NavLink to="/login" className="btn bg-blue-800 hover:bg-blue-900 text-white">
            <img src={User} alt="user" className="rounded-full h-6" />
            <p>Login</p>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;