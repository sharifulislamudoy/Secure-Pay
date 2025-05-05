import React from 'react';
import SocialImg from '../assets/social.png'

const About = () => {
    return (
        <div className='w-5/6 mx-auto text-black my-10'>
            <div className='w-full shadow-t-xl rounded-t-2xl'><img src={SocialImg} className='rounded-t-2xl' alt="" /></div>
            <h2 className='lg:text-2xl p-6 shadow-xl rounded-b-2xl '>At SecurePay, we’re committed to making bill payments fast, safe, and hassle-free. Our platform allows users to pay electricity, water, gas, internet, and other utility bills—all in one place. Backed by secure technology and user-friendly design, we aim to bring convenience and trust to every transaction. Whether you're at home or on the go, SecurePay ensures your payments are just a click away.</h2>
        </div>
    );
};

export default About;