import React from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import AppImg from '../assets/app.png'

const AppDownload = () => {
  return (
    <section className="w-11/12 mx-auto my-16 bg-blue-50 rounded-2xl p-8 lg:flex items-center justify-between">
      {/* Left Text Content */}
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Download the SecurePay App
        </h2>
        <p className="text-gray-600 mb-6">
          Get faster, safer, and smarter digital payment experience at your fingertips. Download our app from your favorite app store today.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#"
            className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl shadow hover:opacity-90 transition"
          >
            <FaGooglePlay className="text-2xl" />
            <div>
              <p className="text-xs">GET IT ON</p>
              <p className="text-sm font-semibold">Google Play</p>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl shadow hover:opacity-90 transition"
          >
            <FaApple className="text-2xl" />
            <div>
              <p className="text-xs">Download on the</p>
              <p className="text-sm font-semibold">App Store</p>
            </div>
          </a>
        </div>
      </div>

      {/* Right Image/Mockup */}
      <div className="lg:w-1/2 flex justify-center">
       <a href="">
       <img
        src={AppImg}
          alt="SecurePay App Mockup"
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-50"
        />
       </a>
      </div>
    </section>
  );
};

export default AppDownload;
