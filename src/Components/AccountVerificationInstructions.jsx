import React from 'react';
import { FaUserCheck, FaEnvelope, FaCheckCircle } from 'react-icons/fa';

const AccountVerificationInstructions = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-12 rounded-xl shadow-lg w-2/3 mx-auto my-10">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Verify Your SecurePay Account
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center text-center p-4">
          <FaUserCheck className="text-4xl text-indigo-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Step 1: Sign Up</h3>
          <p className="text-gray-600">Create your SecurePay account with a valid email address.</p>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <FaEnvelope className="text-4xl text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Step 2: Check Your Email</h3>
          <p className="text-gray-600">We’ll send a verification link to your registered email.</p>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <FaCheckCircle className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Step 3: Click to Verify</h3>
          <p className="text-gray-600">Click the link in the email to activate and verify your account.</p>
        </div>
      </div>
    </div>
  );
};

export default AccountVerificationInstructions;
