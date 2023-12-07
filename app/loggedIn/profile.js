import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import UserAvatar from "./components/userAvatar"

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {/* <UserAvatar /> */}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>john.doe@example.com</Text>
        {/* Add more profile information as needed */}
      </View>
      <Button mode="contained" icon="account-edit" onPress={() => console.log('Edit profile')}>
        Edit Profile
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  userEmail: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
  },
});

export default Profile;