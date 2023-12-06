import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'

const Search = () => {

  const params = useLocalSearchParams();
  console.log(params.page);
  return (
    <View>
      <Text>{params.page}</Text>
      <Link href="/loggedIn/home">Go Back</Link>
    </View>
  )
}

export default Search