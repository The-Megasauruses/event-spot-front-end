import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Edit = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textSpace}>Edit</Text>
      <Link href="/loggedIn/profile" style={styles.textSpace}>Go Back</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  textSpace: {
    marginTop: 20
  }
});

export default Edit
