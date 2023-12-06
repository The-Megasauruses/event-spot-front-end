import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import SignInScreen from './src/Sign-In';
import SignUpScreen from './src/Sign-Up';

const Stack = createStackNavigator();

const getIsSignedIn = () => {
  // custom logic
  return false;
};

const App = () => {
  const isSignedIn = getIsSignedIn();

  return (
    <NavigationContainer>
      <StatusBar style="auto" /> 
      <Stack.Navigator>
        {isSignedIn ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />

          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function HomeScreen() {
  return <View />;
}

function ProfileScreen() {
  return <View />;
}

function SettingsScreen() {
  return <View />;
}


export default App;