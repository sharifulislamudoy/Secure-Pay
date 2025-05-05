import React from 'react';

const faqData = [
  {
    question: 'Is SecurePay safe for online transactions?',
    answer:
      'Yes, SecurePay is SSL secured and uses advanced encryption to keep your data and money safe during all transactions.',
  },
  {
    question: 'How can I pay my utility bills using SecurePay?',
    answer:
      'You can pay your utility bills by logging in, navigating to "Pay Bills", choosing the bill type, and completing payment securely.',
  },
  {
    question: 'Can I access SecurePay from outside Bangladesh?',
    answer:
      'Absolutely! SecurePay is accessible from anywhere with internet access. Just log in with your credentials.',
  },
  {
    question: 'What should I do if I forget my password?',
    answer:
      'Click on “Forgot Password” on the login page, and we’ll guide you through the secure password recovery process.',
  },
];

const FAQs = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Frequently Asked Questions</h2>

      <div className="join join-vertical w-full space-y-2">
        {faqData.map((item, index) => (
          <div key={index} className="collapse collapse-arrow join-item border border-base-300 bg-base-100 rounded-lg">
            <input type="checkbox" className="peer" />
            <div className="bg-white collapse-title text-lg font-semibold text-gray-800 peer-checked:bg-blue-50 peer-checked:text-blue-700 transition-all duration-300">
              {item.question}
            </div>
            <div className="bg-white collapse-content text-gray-600 leading-relaxed transition-all duration-300">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
