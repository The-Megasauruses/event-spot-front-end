import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from "../../config"

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< Updated upstream
=======
  const [displayName, setDisplayName] = useState("");
  const [validForm, setValidForm] = useState(false);
  const [errors, setErrors] = useState({})
  const [loggedIn, setLoggedIn] = React.useState(false)


  useEffect(() => {

    validateForm();
    // console.log(errors)
  }, [displayName, email, password]);


  const validateForm = () => {
    let errors = {}

    if (!email) { errors.email = "A valid email is required " };
    if (!password) { errors.password = "A valid password is required" };
    if (!displayName) { errors.displayName = "Display name is required" };

    setErrors(errors);
    setValidForm(Object.keys(errors).length === 0);
  }
>>>>>>> Stashed changes

  const handleSignUp = () => {
const auth = getAuth();
    // Handle sign-up logic (e.g., call registration API)
    console.log("Signing up with:", email, password);
    console.log('auth', auth)
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email); 
      })
      .catch(error => alert(error.message))
  
  };

  return (
    <>
    <View>
      <View>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.inputView}
        />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.inputView}
      />
      </View>
      <Button mode="contained" onPress={handleSignUp} buttonColor="#354aad">
        Sign Up
      </Button>
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
    backgroundColor: "#ffffff",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  button: {
    color: '#ffffff',
  }
})

export default SignUpScreen;
