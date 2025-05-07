import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';

const LoginRequiredNotice = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-100 px-6 text-center rounded-xl shadow-inner">
      <FaLock className="text-5xl text-red-500 mb-4" />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Login Required</h2>
      <p className="text-gray-600 max-w-md mb-4">
        To pay your bills, view transaction history, or access your account profile, you must be logged in first.
      </p>
      <button
        onClick={handleLoginRedirect}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
      >
        Go to Login
      </button>
    </div>
  );
};

export default LoginRequiredNotice;
