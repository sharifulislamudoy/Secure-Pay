import React, { useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const ReportSecurityIssue = () => {
  const [issueDetails, setIssueDetails] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleIssueDetailsChange = (e) => {
    setIssueDetails(e.target.value);
  };

  const handleContactEmailChange = (e) => {
    setContactEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!issueDetails || !contactEmail) {
      alert('Please fill in all fields.');
      return;
    }

    setLoading(true);
    setConfirmationMessage('');

    // Simulate sending the security issue report (e.g., through an API or email)
    setTimeout(() => {
      setLoading(false);
      setConfirmationMessage('Your security issue has been reported. Our team will investigate it as soon as possible.');
      setIssueDetails('');
      setContactEmail('');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white shadow-md rounded-xl p-8 w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Report a Security Issue</h2>

        <p className="text-gray-700 mb-4">
          If you have encountered any security vulnerabilities or suspicious activity on your account, please report it immediately.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="issueDetails" className="block text-gray-800 font-semibold">Describe the Issue</label>
            <textarea
              id="issueDetails"
              name="issueDetails"
              value={issueDetails}
              onChange={handleIssueDetailsChange}
              rows="4"
              className="border w-full p-3 rounded-md mt-2 text-gray-600"
              placeholder="Provide detailed information about the issue or suspicious activity..."
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contactEmail" className="block text-gray-800 font-semibold">Your Email</label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              value={contactEmail}
              onChange={handleContactEmailChange}
              className="border w-full p-3 rounded-md mt-2 text-gray-600"
              placeholder="Enter your email for follow-up"
              required
            />
          </div>

          <div className="flex justify-center mb-4">
            <button
              type="submit"
              className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 flex justify-center items-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner text-read"></span>
              ) : (
                <>
                  <FaExclamationTriangle /> Submit Report
                </>
              )}
            </button>
          </div>
        </form>

        {confirmationMessage && (
          <div className="bg-green-100 border border-green-500 text-green-700 p-4 rounded-lg mb-4">
            <div className="flex items-center">
              <FaExclamationTriangle className="mr-2" />
              <span className="font-semibold">Thank you for your report!</span>
            </div>
            <p>{confirmationMessage}</p>
          </div>
        )}

        <div className="mt-6">
          <h3 className="font-semibold text-gray-800">What Happens Next?</h3>
          <p className="text-gray-700">
            Our security team will review your report and take necessary actions. You will be contacted via email if further details are needed.
          </p>
          <p className="text-gray-700 mt-2">
            In case of an urgent issue, please contact our support team directly at <strong>support@securepay.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReportSecurityIssue;
