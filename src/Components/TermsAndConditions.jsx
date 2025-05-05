import React from 'react';
import { Link } from 'react-router';

const TermsAndConditions = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-white shadow-lg rounded-2xl my-10">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Terms & Conditions
      </h1>

      <section className="space-y-6 text-gray-700 text-sm leading-relaxed">
        <p>
          Welcome to <strong>SecurePay</strong>. These terms and conditions outline the rules and regulations for the use of our banking services. By accessing this website and using our services, you accept these terms in full.
        </p>

        <div>
          <h2 className="font-semibold text-lg text-blue-600">1. Account Registration</h2>
          <p>
            You must provide accurate and complete information when registering. You are responsible for maintaining the confidentiality of your login credentials and all activities under your account.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg text-blue-600">2. Acceptable Use</h2>
          <p>
            You agree not to misuse SecurePay services or help anyone else do so. Prohibited activities include unauthorized access, data scraping, or using our services for fraudulent activities.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg text-blue-600">3. Transactions & Payments</h2>
          <p>
            All transactions are subject to verification. We reserve the right to delay or deny a transaction if we suspect fraudulent or suspicious activity.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg text-blue-600">4. Privacy Policy</h2>
          <p>
            Our <Link to={'/privacy-policy'} href="/privacy-policy" className="text-blue-500 underline">Privacy Policy</Link> explains how we handle your personal data. By using our services, you agree to the terms of our privacy policy.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg text-blue-600">5. Termination</h2>
          <p>
            SecurePay reserves the right to suspend or terminate your account at any time for breach of these terms or any suspicious activity.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg text-blue-600">6. Changes to Terms</h2>
          <p>
            We may update these terms from time to time. Continued use of SecurePay after changes means you accept the revised terms.
          </p>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Last updated: May 5, 2025
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
