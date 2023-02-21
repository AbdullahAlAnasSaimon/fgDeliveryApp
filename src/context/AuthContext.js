// import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../../firebase';
import { useQuery } from 'react-query';

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

  const logOut = () =>{
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => unsubscribe();
  }, [])

  // delivery history data fetching
  const {data: deliveriedHistory, isLoading, refetch} = useQuery({
    queryKey: ["deliveryHistory"],
    queryFn: async () =>{
      const res = await fetch(`https://fg-server.vercel.app/delivered-orders?email=${user?.email}`);
      const data = await res.json();
      return data;
    }
  })

  const info = {
    user,
    userLogin,
    userSignUp,
    logOut,
    loading,
    deliveriedHistory
  }
  return (
    <StateContext.Provider value={info}>
      {children}
    </StateContext.Provider>
  )
}

export default AuthContext;

// const styles = StyleSheet.create({})