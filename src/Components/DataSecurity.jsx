import React from 'react';

const DataSecurity = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white shadow-md rounded-xl p-8 w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">How Secure Is My Data?</h2>

        <p className="text-gray-700 mb-4">
          At <strong>SecurePay</strong>, protecting your personal and financial information is our highest priority.
          Here's how we ensure your data stays safe:
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>
            <strong>End-to-End Encryption:</strong> All data, including payment and personal details, is encrypted
            during transmission using SSL/TLS protocols.
          </li>
          <li>
            <strong>Secure Authentication:</strong> We use secure sign-in methods and optional two-factor authentication
            (2FA) for added protection.
          </li>
          <li>
            <strong>Data Storage:</strong> Sensitive information is stored securely using encrypted databases on
            trusted cloud services with restricted access.
          </li>
          <li>
            <strong>Regular Security Audits:</strong> Our platform undergoes regular vulnerability scanning and code
            audits to identify and fix security gaps.
          </li>
          <li>
            <strong>No Sharing Without Consent:</strong> We never sell or share your data with third parties without your explicit consent.
          </li>
        </ul>

        <p className="text-gray-600 mt-6">
          If you have questions or concerns about your data privacy, feel free to reach out to us at{' '}
          <a href="mailto:privacy@securepay.com" className="text-blue-600 underline">
            privacy@securepay.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default DataSecurity;
