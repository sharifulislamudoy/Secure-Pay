import React from 'react';

const About = () => {
    return (
        <div className="w-11/12 lg:w-4/5 mx-auto py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-blue-700 mb-4">About SecurePay</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    SecurePay is a modern digital banking platform committed to simplifying your financial life. We help you pay bills, track transactions, and manage finances with ease and complete security.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <img
                        src="https://img.freepik.com/free-vector/secure-payment-concept-illustration_114360-5443.jpg"
                        alt="SecurePay Illustration"
                        className="rounded-xl shadow-md"
                    />
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why Choose SecurePay?</h2>
                    <ul className="space-y-4 text-gray-600">
                        <li>✅ 24/7 Bill Payment Support</li>
                        <li>✅ Fast & Secure Transactions</li>
                        <li>✅ Real-Time Transaction History</li>
                        <li>✅ Multi-platform Access (Web, Mobile)</li>
                        <li>✅ Trusted by thousands of users</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;