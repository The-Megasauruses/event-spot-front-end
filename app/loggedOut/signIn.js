import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { Link } from 'expo-router';


const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInButton = () => {

    console.log('Signing in with:', email, password);
  };

  return (
    <>
      <View>
        <Text>Sign In</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.button}>
        <Button mode="outlined" onPress={handleSignInButton}>
          Sign In
        </Button>
        <Link href={"/loggedOut/signUp"} asChild>
          <TouchableOpacity>
            <Text>Not a member?  Register</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#5271ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    backgroundColor: "#5271ff",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  button: {
    color: 'black'
  }

});


export default SignInScreen;
