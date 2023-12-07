import { View, Text } from 'react-native'
import React from 'react'
import { usePathname } from 'expo-router'

const Search = () => {

  const path = usePathname()  

  return (
    <View>
      <Text>Search</Text>
    </View>
  )
}

export default Search