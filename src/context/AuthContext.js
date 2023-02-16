import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase';

const auth = getAuth(app);
export const StateContext = createContext();


const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const userSignUp = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => unsubscribe();
  }, [])

  const info = {
    user,
    userLogin,
    userSignUp

  }
  return (
    <StateContext.Provider value={info}>
      {children}
    </StateContext.Provider>
  )
}

export default AuthContext;

const styles = StyleSheet.create({})