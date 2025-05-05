import React from 'react';
import CountUp from 'react-countup';
import { FaUsers } from 'react-icons/fa';

const TrustedUsers = () => {
  return (
    <section className="bg-blue-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center justify-center mb-4 text-blue-600">
          <FaUsers className="text-4xl mr-2" />
          <h2 className="text-4xl font-extrabold">Trusted by</h2>
        </div>
        <h3 className="text-5xl font-bold text-gray-800 mt-4 mb-4">
          <CountUp end={10000} duration={3} separator="," />+ Users
        </h3>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Join thousands of happy customers who securely manage their bills and finances through SecurePay.
        </p>
      </div>
    </section>
  );
};

export default TrustedUsers;
