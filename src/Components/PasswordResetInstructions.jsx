import React from 'react';
import { FaLockOpen, FaEnvelopeOpenText, FaKey } from 'react-icons/fa';

const PasswordResetInstructions = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-12 rounded-xl shadow-lg w-2/3 mx-auto my-10">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        How to Reset Your Password
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center text-center p-4">
          <FaEnvelopeOpenText className="text-4xl text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Step 1: Go to Forgot Password</h3>
          <p className="text-gray-600">Click on the "Forgot Password?" link from the login page.</p>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <FaLockOpen className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Step 2: Enter Your Email</h3>
          <p className="text-gray-600">Enter the email associated with your SecurePay account.</p>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <FaKey className="text-4xl text-red-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Step 3: Check Email & Reset</h3>
          <p className="text-gray-600">Open the password reset email and follow the link to set a new password.</p>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetInstructions;
