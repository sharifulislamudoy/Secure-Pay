import React from 'react';
import { FaUserCheck, FaListAlt, FaMoneyCheckAlt, FaCheckCircle } from 'react-icons/fa';

const HowToMakePayment = () => {
  const steps = [
    {
      icon: <FaUserCheck className="text-blue-500 text-3xl" />,
      title: '1. Log In to Your Account',
      description: 'Use your SecurePay credentials to log in to your account securely.',
    },
    {
      icon: <FaListAlt className="text-blue-500 text-3xl" />,
      title: '2. Select “Make a Payment”',
      description: 'Go to the dashboard and choose the Make a Payment option.',
    },
    {
      icon: <FaMoneyCheckAlt className="text-blue-500 text-3xl" />,
      title: '3. Enter Payment Details',
      description: 'Fill in the amount, receiver ID, and select your payment method.',
    },
    {
      icon: <FaCheckCircle className="text-green-500 text-3xl" />,
      title: '4. Confirm and Pay',
      description: 'Double-check your details and click Confirm to process the payment.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">How to Make a Payment</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 bg-gray-100 p-4 rounded-lg">
              {step.icon}
              <div>
                <h3 className="font-semibold text-lg text-blue-600">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToMakePayment;
