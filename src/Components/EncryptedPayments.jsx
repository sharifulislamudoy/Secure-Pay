import React from 'react';
import { FcDataEncryption, FcDataProtection } from 'react-icons/fc';
import { RiSecurePaymentFill, RiSecurePaymentLine } from 'react-icons/ri';

const EncryptedPayments = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-blue-600 sm:text-4xl mb-6">
          Your Payments Are Always Secure with Our Encrypted System
        </h2>
        <p className="text-lg text-gray-500 mb-12">
          SecurePay uses industry-standard encryption to keep your payment data safe and protected.
          Trust us for your online payment needs.
        </p>

        {/* Encryption Details Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Encryption Security Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">End-to-End Encryption</h3>
            <p className="text-gray-600 mb-6">
              We use strong end-to-end encryption to ensure that your payment details are securely transmitted
              from your device to our payment system, preventing any unauthorized access.
            </p>
            <div className="flex justify-center">
            <FcDataEncryption className='w-20 h-20'/>
            </div>
          </div>

          {/* Data Protection Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Data Protection</h3>
            <p className="text-gray-600 mb-6">
              Your data is encrypted and stored with the highest level of security. Only authorized
              personnel have access to your information in case of troubleshooting or support.
            </p>
            <div className="flex justify-center">
            <FcDataProtection className='w-20 h-20' />
            </div>
          </div>

          {/* Secure Payment Gateway Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Secure Payment Gateway</h3>
            <p className="text-gray-600 mb-6">
              Our secure payment gateway ensures that every transaction is processed safely, using
              state-of-the-art encryption technologies to prevent fraud and unauthorized charges.
            </p>
            <div className="flex justify-center">
            <RiSecurePaymentLine className='w-20 h-20' />
            </div>
          </div>
        </div>

        {/* Action Section */}
        <div className="mt-12">
          <a
            href="/about"
            className="px-8 py-3 text-lg text-white font-semibold bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Learn More About Our Security
          </a>
        </div>
      </div>
    </div>
  );
};

export default EncryptedPayments;
