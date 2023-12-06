import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Handle sign-in logic (e.g., call authentication API)
    console.log('Signing in with:', email, password);
  };

  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      <View style={styles.inputView}>
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
        <Button mode="outlined" onPress={handleSignIn}>
          Sign In
        </Button>
        <Button mode="outlined" onPress={() => navigation.navigate('SignUp')}>
          Not a member?  Register
        </Button>
      </View>
    </View>
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
