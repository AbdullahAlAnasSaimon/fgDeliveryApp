import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase';

const auth = getAuth(app);
export const StateContext = createContext();


const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const info = {
    userLogin,
  }
  return (
    <StateContext.Provider value={info}>
      {children}
    </StateContext.Provider>
  )
}

export default AuthContext;

const styles = StyleSheet.create({})