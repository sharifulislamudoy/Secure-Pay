import React from 'react';
import { FaUserPlus, FaEnvelope, FaLock } from 'react-icons/fa';

const HowToCreateAccount = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-12 rounded-xl shadow-lg w-2/3 mx-auto my-10">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        How to Create an Account
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center text-center p-4">
          <FaUserPlus className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Step 1: Sign Up</h3>
          <p className="text-gray-600">Click the "Register" button on the homepage to start creating your SecurePay account.</p>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <FaEnvelope className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Step 2: Enter Details</h3>
          <p className="text-gray-600">Fill in your name, email, password, and other required information in the form.</p>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <FaLock className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Step 3: Secure Your Account</h3>
          <p className="text-gray-600">Verify your email and set up security features like phone verification or 2FA (if enabled).</p>
        </div>
      </div>
    </div>
  );
};

export default HowToCreateAccount;