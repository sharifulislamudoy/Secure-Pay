import React, { useState } from 'react';

const ReportProblem = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    problemDescription: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus('success');
    }, 2000);
  };

  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-blue-600 sm:text-4xl mb-6">
          Report a Problem
        </h2>
        <p className="text-lg text-gray-500 mb-12">
          Please fill out the form below to report any issues or problems you are facing with SecurePay.
        </p>

        {/* Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Problem Description */}
            <div>
              <label htmlFor="problemDescription" className="block text-gray-700 font-medium mb-2">
                Problem Description
              </label>
              <textarea
                id="problemDescription"
                name="problemDescription"
                value={formData.problemDescription}
                onChange={handleInputChange}
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                placeholder="Describe the problem you're facing"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className={`w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Report'}
              </button>
            </div>
          </form>

          {/* Submission Status */}
          {submissionStatus === 'success' && (
            <div className="mt-6 text-green-600 font-medium">
              <p>Your problem has been successfully submitted. Our support team will get back to you shortly.</p>
            </div>
          )}

          {submissionStatus === 'error' && (
            <div className="mt-6 text-red-600 font-medium">
              <p>There was an issue submitting your report. Please try again later.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportProblem;
