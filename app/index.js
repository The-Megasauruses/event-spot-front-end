import React, { useEffect, useState } from 'react'
import { Redirect } from 'expo-router'
import firestore from '@react-native-firebase/firestore';

const index = () => {
  const [userData, setUserData] = useState(null);
  const [eventData, setEventDat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
  })

  return (
    <Redirect href="/loggedIn/home" />
  )
}

export default index