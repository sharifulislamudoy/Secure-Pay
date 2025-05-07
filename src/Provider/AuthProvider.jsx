import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(() => {
    const storedData = localStorage.getItem('registrationData');
    return storedData ? JSON.parse(storedData) : null;
  });
  const createUser = (email, password, phone) => {
    return createUserWithEmailAndPassword(auth, email, password, phone);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setUserData(null);
      localStorage.removeItem('registrationData');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    userData,
    setUserData,
    createUser,
    signIn,
    logout: logOut,
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
