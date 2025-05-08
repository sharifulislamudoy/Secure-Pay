import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const TwoFactorAuthentication = () => {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleEnable2FA = () => {
    setIsLoading(true);
    setError(null);
    
    // Simulate 2FA setup process (e.g., API call to enable 2FA)
    setTimeout(() => {
      // Simulate success
      setIs2FAEnabled(true);
      setIsLoading(false);
    }, 2000);
  };

  const handleDisable2FA = () => {
    setIsLoading(true);
    setError(null);

    // Simulate 2FA disable process
    setTimeout(() => {
      // Simulate success
      setIs2FAEnabled(false);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white shadow-md rounded-xl p-8 w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Two-Factor Authentication</h2>

        <p className="text-gray-700 mb-4">
          Protect your account by enabling Two-Factor Authentication (2FA). This adds an extra layer of security
          by requiring both your password and a verification code sent to your phone to log in.
        </p>

        {is2FAEnabled ? (
          <div className="bg-green-100 border border-green-500 text-green-700 p-4 rounded-lg mb-4">
            <div className="flex items-center">
              <FaCheck className="mr-2" />
              <span className="font-semibold">Two-Factor Authentication is enabled!</span>
            </div>
            <p className="text-sm">You will now need your verification code in addition to your password during login.</p>
          </div>
        ) : (
          <div className="bg-yellow-100 border border-yellow-500 text-yellow-700 p-4 rounded-lg mb-4">
            <div className="flex items-center">
              <FaTimes className="mr-2" />
              <span className="font-semibold">Two-Factor Authentication is not enabled!</span>
            </div>
            <p className="text-sm">Enable 2FA for added security on your account.</p>
          </div>
        )}

        <div className="flex justify-center gap-4">
          {!is2FAEnabled ? (
            <button
              onClick={handleEnable2FA}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loading loading-spinner text-info"></span>
              ) : (
                <span>Enable </span>
              )}
            </button>
          ) : (
            <button
              onClick={handleDisable2FA}
              className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 flex items-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loading loading-spinner text-neutral"></span>
              ) : (
                <span>Disable</span>
              )}
            </button>
          )}
        </div>

        {error && <div className="text-red-500 text-center mt-4">{error}</div>}

        <div className="mt-6">
          <h3 className="font-semibold text-gray-800">How It Works:</h3>
          <p className="text-gray-700">
            Once you enable 2FA, you'll receive a verification code on your mobile device whenever you log in.
            This code must be entered along with your password to gain access to your account.
          </p>
          <p className="text-gray-700 mt-2">
            We use secure and reliable methods to send the 2FA code, ensuring your data stays protected.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TwoFactorAuthentication;
