import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className='bg-[#1E293B]'>
            <div className="footer sm:footer-horizontal  text-base-content p-10">
            <nav>
                <h6 className="footer-title">Quick Links</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Pay Bills</a>
                <a className="link link-hover">Transaction History</a>
                <a className="link link-hover">My Account</a>
                <a className="link link-hover">Login / Register</a>
            </nav>
            <nav>
                <h6 className="footer-title">Bill Categories</h6>
                <a className="link link-hover">Electricity Bill</a>
                <a className="link link-hover">Water Bill</a>
                <a className="link link-hover">Gas Bill</a>
                <a className="link link-hover">Internet Bill</a>
                <a className="link link-hover">Mobile Recharge</a>
            </nav>
            
            <nav>
                <h6 className="footer-title">Company</h6>
                <Link to={"about"} className="link link-hover">About Us</Link>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Terms & Conditions</a>
                <a className="link link-hover">Careers</a>
            </nav>
            <nav>
                <h6 className="footer-title"> Support</h6>
                <a className="link link-hover">FAQs</a>
                <a className="link link-hover">Contact Us</a>
                <a className="link link-hover">Help Center</a>
                <a className="link link-hover">Report a Problem</a>
            </nav>
            <nav>
                <h6 className="footer-title">Secure Payments (Trust Badges)</h6>
                <a className="link link-hover">SSL Secured</a>
                <a className="link link-hover">Encrypted Payments</a>
                <a className="link link-hover">Trusted by 10,000+ Users</a>
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <Link><FaFacebook /></Link>
                    <Link><FaInstagram /></Link>
                    <Link><FaYoutube /></Link>
                </div>
            </nav>
            </div>
            <p className='text-center pb-6'>Copyright © {new Date().getFullYear()} - All right reserved by SecurePay</p>
        </footer>
    );
};

export default Footer;