import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link href="/loggedIn/search">Go to Search</Link>
      <Link href="/loggedIn/profile">Go to Profile</Link>
    </View>
  )
}

export default Home