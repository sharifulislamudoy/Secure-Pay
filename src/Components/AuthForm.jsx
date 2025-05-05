import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
              />
              <input
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
                placeholder="Name"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
              />
              <input
                type="password"
                placeholder="Password"
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