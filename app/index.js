import React, { useEffect } from 'react'
import { Redirect } from 'expo-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";


const index = () => {
  [loggedIn, setLoggedIn] = React.useState(false)
  
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      if(user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false);
      }
    })

    return () => unsubscribe();
  }, []);

  if (loggedIn) {
    return <Redirect href="/loggedIn/home" />
  } else {
    return <Redirect href="/loggedOut/signIn" />
  }

export default index