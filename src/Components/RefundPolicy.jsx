import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white shadow-md rounded-xl p-8 w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Refund Policy</h2>

        <p className="text-gray-700 mb-4">
          At <strong>SecurePay</strong>, we strive to provide the best experience for our users. If you are not
          satisfied with a payment or believe there was an error, please review the policy below.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>
            <strong>Eligibility:</strong> Refunds are only eligible for transactions made within the last 7 days and
            must be reported within that period.
          </li>
          <li>
            <strong>Refund Process:</strong> Users must contact our support team with proof of payment and a brief
            explanation of the issue.
          </li>
          <li>
            <strong>Non-Refundable Cases:</strong> Payments made to the wrong receiver, or for services already delivered,
            are not eligible for a refund.
          </li>
          <li>
            <strong>Processing Time:</strong> Refunds are typically processed within 5–10 business days to the original
            payment method.
          </li>
          <li>
            <strong>Dispute Resolution:</strong> If a refund cannot be granted, users may escalate the issue through our
            internal review process.
          </li>
        </ul>

        <p className="text-gray-600 mt-6">
          For further assistance, please contact our support team at{' '}
          <a href="mailto:support@securepay.com" className="text-blue-600 underline">
            support@securepay.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
