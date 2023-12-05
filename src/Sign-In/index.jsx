import React, { useState } from 'react';
import { View, Text, TextInput, } from 'react-native';
import { Button } from 'react-native-paper';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Handle sign-in logic (e.g., call authentication API)
    console.log('Signing in with:', email, password);
  };

  return (
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
      <Button title="Sign In" onPress={handleSignIn} />
      <Button title="Go to Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
};

export default SignInScreen;
