import React, { useState } from 'react';
import { View} from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {

    console.log('Signing in with:', email, password);
  };

  return (
    <View>
      <Text>Login</Text>
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
      <Button mode="outlined" onPress={handleSignIn}>Login</Button>
      <Button  mode="outlined" onPress={() => navigation.navigate('SignUp')}>SignUp</Button>
    </View>
  );
};

export default SignInScreen;
