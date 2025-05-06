import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const formVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-[#f9fafbef] p-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          {isLogin ? 'Login' : 'Register'}
        </h2>

        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.form
              key="login"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <input
                required
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
              />
              <input
                required
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Login
              </button>
            </motion.form>
          ) : (
            <motion.form
              key="register"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
                required
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
                required
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
                required
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
                required
              />

              <input
                type="text"
                placeholder="National ID or Passport Number"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
                required
              />

              <input
                type="date"
                placeholder="Date of Birth"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
                required
              />

              <input
                type="text"
                placeholder="Address"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
                required
              />

              <select
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
                required
              >
                <option value="">Select Account Type</option>
                <option value="savings">Savings Account</option>
                <option value="current">Current Account</option>
                <option value="student">Student Account</option>
              </select>

              <input
                type="text"
                placeholder="Nominee Name"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
              />

              <input
                type="text"
                placeholder="Nominee NID or Passport"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
              />

              <input
                type="text"
                placeholder="Occupation"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
              />

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              >
                Register
              </button>
            </motion.form>

          )}
        </AnimatePresence>


        // Inside your JSX
        <div className="text-center mt-4 space-y-2">
          <p className="text-sm text-gray-600">Or <span className='text-blue-500'>continue with</span></p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleProviderLogin(googleProvider)}
              className="flex items-center justify-center gap-3 border border-gray-300 bg-white text-gray-700 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 transition"
            >
              <FaGoogle  />
              Continue with Google
            </button>

            <button
              onClick={() => handleProviderLogin(githubProvider)}
              className="flex items-center justify-center gap-3 border border-gray-700 bg-black text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-900 transition"
            >
              <FaGithub className="text-white" />
              Continue with GitHub
            </button>

            <button
              onClick={() => handleProviderLogin(facebookProvider)}
              className="flex items-center justify-center gap-3 border border-blue-700 bg-white text-black px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 transition"
            >
              <FaFacebookF className='text-blue-700' />
              Continue with Facebook
            </button>
          </div>
        </div>


        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              className="text-blue-600 hover:underline font-medium"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;