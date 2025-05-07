import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router';

const AuthForm = () => {

  const { createUser, setUser, signIn } = useContext(AuthContext);



  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const phone = form.phone.value;
    const id = form.id.value;
    const photo = form.photo.value;
    const birth = form.birth.value;
    const address = form.address.value;
    const accountType = form.accountType.value;
    const nName = form.nName.value;
    const nid = form.nid.value;
    const occupation = form.occupation.value;
  
    const userData = {
      name,
      email,
      password,
      phone,
      id,
      photo,
      birth,
      address,
      accountType,
      nomineeName: nName,
      nomineeId: nid,
      occupation,
    };
  
    // 👉 Save data to localStorage
    localStorage.setItem("registrationData", JSON.stringify(userData));
  
    console.log("User data saved to localStorage:", userData);
  
    createUser(email, password, phone)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(from, {replace: true});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/pay-bills';

  const handleLogin= (e)=> {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email,password)
    .then((result) => {
      const user =result.user;
      navigate(from, {replace: true});
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
    });
  }



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
            onSubmit={handleLogin}
              key="login"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <input
              name='email'
                required
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
              />
              <input
              name='password'
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
              />
              <button
                type="submit"
                className="w-full btn bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
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
              onSubmit={handleRegister}
            >
              <input
                name='name'
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
              // required
              />

              <input
                name='email'
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
              // required
              />

              <input
                name='password'
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
              // required
              />

              <input
                name='phone'
                type="tel"
                placeholder="Mobile Number"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
              // required
              />

              <input
                name='id'
                type="text"
                placeholder="National ID or Passport Number"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
              // required
              />
              <input
                name='photo'
                type="text"
                placeholder="Photo URL"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
              // required
              />

              <input
                name='birth'
                type="date"
                placeholder="Date of Birth"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
              // required
              />

              <input
                name='address'
                type="text"
                placeholder="Address"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
              // required
              />

              <select
                name='accountType'
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
              // required
              >
                <option value="">Select Account Type</option>
                <option value="savings">Savings Account</option>
                <option value="current">Current Account</option>
                <option value="student">Student Account</option>
              </select>

              <input
                name='nName'
                type="text"
                placeholder="Nominee Name"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
              />

              <input
                name='nid'
                type="text"
                placeholder="Nominee NID or Passport"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-400 text-black"
              />

              <input
                name='occupation'
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


        <div className="text-center mt-4 space-y-2">
          <p className="text-sm text-gray-600">Or <span className='text-blue-500'>continue with</span></p>
          <div className="flex flex-col gap-3">
            <button
              className="flex items-center justify-center gap-3 border border-gray-300 bg-white text-gray-700 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 transition"
            >
              <FaGoogle />
              Continue with Google
            </button>

            <button
              className="flex items-center justify-center gap-3 border border-gray-700 bg-black text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-900 transition"
            >
              <FaGithub className="text-white" />
              Continue with GitHub
            </button>

            <button
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