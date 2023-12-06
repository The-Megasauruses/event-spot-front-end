import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

const Profile = () => {
  
  const stackable = () => {
    router.push('/loggedIn/edit');
  }

  return (
    <View>
      <Text>Profile</Text>
      <Link href="/loggedIn/home">Go Back</Link>
      <Link href="/loggedIn/edit" asChild>
        {/* <Pressable onPress={stackable}> */}
          <Text>Go to Edit</Text>
        {/* </Pressable> */}
      </Link>
    </View>
  )
}

export default Profile