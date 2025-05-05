import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-white shadow-lg rounded-2xl my-10">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Privacy Policy
      </h1>

      <section className="space-y-6 text-gray-700 text-sm leading-relaxed">
        <p>
          At <strong>SecurePay</strong>, we are committed to protecting your personal information and your right to privacy. This Privacy Policy describes how your information is collected, used, and shared when you use our services.
        </p>

        <div>
          <h2 className="font-semibold text-lg text-blue-600">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us such as your name, email, phone number, billing details, and any other information submitted through our platform.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg text-blue-600">2. How We Use Your Information</h2>
          <p>
            Your information is used to provide and improve our services, process transactions, respond to inquiries, detect fraud, and comply with legal obligations.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg text-blue-600">3. Information Sharing</h2>
          <p>
            We do not sell or rent your personal data. We may share it with trusted partners for processing payments, analytics, or regulatory compliance — all under strict confidentiality agreements.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg text-blue-600">4. Data Security</h2>
          <p>
            SecurePay uses encryption, firewalls, and secure server environments to protect your personal information. All financial data is SSL secured.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg text-blue-600">5. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information. You can request a data report or contact us for changes at any time.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg text-blue-600">6. Cookies & Tracking</h2>
          <p>
            We use cookies and similar technologies to improve user experience and analyze traffic. You can choose to disable cookies through your browser settings.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg text-blue-600">7. Updates to This Policy</h2>
          <p>
            This Privacy Policy may be updated occasionally to reflect changes in legal, regulatory, or operational requirements.
          </p>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Last updated: May 5, 2025
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
