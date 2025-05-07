import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className='bg-[#1E293B]'>
            <div className="footer sm:footer-horizontal  text-base-content p-10">
            <nav>
                <h6 className="footer-title">Quick Links</h6>
                <Link to={"/"} className="link link-hover">Home</Link>
                <Link to={'/paybills'} className="link link-hover">Pay Bills</Link>
                <Link to={'/transactionhistory'} className="link link-hover">Transaction History</Link>
                <a className="link link-hover">My Account</a>
                <Link to={'/login'} className="link link-hover">Login / Register</Link>
            </nav>
            
            <nav>
                <h6 className="footer-title">Company</h6>
                <Link to={"/about"} className="link link-hover">About Us</Link>
                <Link to={'/privacy-policy'} className="link link-hover">Privacy Policy</Link>
                <Link to={'/terms'} className="link link-hover">Terms & Conditions</Link>
                <Link to={'/careers'} className="link link-hover">Careers</Link>
            </nav>
            <nav>
                <h6 className="footer-title"> Support</h6>
                <Link to={'/faq'} className="link link-hover">FAQs</Link>
                <Link to={'/contactus'} className="link link-hover">Contact Us</Link>
                <Link to={'/helpcenter'} className="link link-hover">Help Center</Link>
                <Link to={'/reportproblem'} className="link link-hover">Report a Problem</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Secure Payments (Trust Badges)</h6>
                <Link to={'/sslsecured'} className="link link-hover">SSL Secured</Link>
                <Link to={'/encrypted-payment'} className="link link-hover">Encrypted Payments</Link>
                <Link to={'/trusted-users'} className="link link-hover">Trusted by 10,000+ Users</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <Link to={'https://www.facebook.com/sharifulislamudoy56'}><FaFacebook /></Link>
                    <Link to={'https://www.instagram.com/s_h_a_r_i_f_u_l_1039/'}><FaInstagram /></Link>
                    <Link to={'https://www.youtube.com/@SharifulIslamUdoy'}><FaYoutube /></Link>
                </div>
            </nav>
            </div>
            <p className='text-center pb-6'>Copyright © {new Date().getFullYear()} - All right reserved by SecurePay</p>
        </footer>
    );
};

export default Footer;