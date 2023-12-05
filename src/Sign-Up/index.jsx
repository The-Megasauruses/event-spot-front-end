import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Handle sign-up logic (e.g., call registration API)
    console.log('Signing up with:', email, password);
  };

  return (
    <View>
      <Text>Sign Up</Text>
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
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignUpScreen;
