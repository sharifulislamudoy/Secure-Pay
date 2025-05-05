import React from 'react';

const HelpCenter = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
          Help Center
        </h2>
        <p className="text-lg text-gray-500 mb-12">
          Find answers to your questions and learn more about SecurePay's services.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search Help Center..."
          />
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Category 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-50">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Account</h3>
            <ul className="text-gray-600 space-y-3">
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  How to create an account?
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Password reset instructions
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Account verification
                </a>
              </li>
            </ul>
          </div>

          {/* Category 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-50">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Payments</h3>
            <ul className="text-gray-600 space-y-3">
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  How to make a payment?
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Refund policy
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Payment methods
                </a>
              </li>
            </ul>
          </div>

          {/* Category 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-50">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Security</h3>
            <ul className="text-gray-600 space-y-3">
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  How secure is my data?
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Two-factor authentication setup
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  How to report a security issue?
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">Need More Help?</h3>
          <p className="text-lg text-gray-600 mb-8">
            If you still need assistance, feel free to contact our support team.
          </p>
          <a
            href="/contactus"
            className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
