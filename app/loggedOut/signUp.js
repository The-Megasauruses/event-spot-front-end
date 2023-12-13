import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { User } from '../store/fireStoreClassModel';
import { app } from "../../config";
import { Link, Redirect } from 'expo-router';


const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [validForm, setValidForm] = useState(false);
  const [errors, setErrors] = useState({})
  const [loggedIn, setLoggedIn] = React.useState(false)


  useEffect(() => {

    validateForm();
  }, [displayName, email, password]);


  const validateForm = () => {
    let errors = {}

    if (!email) { errors.email = "A valid email is required " };
    if (!password) { errors.password = "A valid password is required" };
    if (!displayName) { errors.displayName = "Display name is required" };

    setErrors(errors);
    setValidForm(Object.keys(errors).length === 0);
  }

  const handleSignUp = () => {
    const auth = getAuth();
    if (validForm) {
      // Handle sign-up logic (e.g., call registration API)

      console.log("Signing up with:", email, password);
      console.log('auth', auth)
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Registered with:', user.email);
          updateProfile(user, { displayName: displayName })
          setLoggedIn(true);
          userData = {userid: auth.currentUser.uid, events: []};
          const newUser = new User({...userData});
          newUser.addUser()
        })
        .catch(error => alert(error.message))
    }

  };

  return (
    <>
    {loggedIn && 
        <Redirect href="/loggedIn/home" />
    }
      <View style={{ 'marginTop': 250 }}>
        <View>
          <TextInput
            placeholder="Display Name"
            value={displayName}
            onChangeText={(text) => setDisplayName(text)}
            style={styles.inputView}
          />
          {errors.displayName &&
            <View style={styles.errorsView}>
              <Text style={styles.errors}>{errors.displayName}</Text>
            </View>
          }
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.inputView}
          />
          {errors.email &&
            <View style={styles.errorsView}>
              <Text style={styles.errors}>{errors.email}</Text>
            </View>
          }

          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.inputView}
          />
          {errors.password &&
            <View style={styles.errorsView}>
              <Text style={styles.errors}>{errors.password}</Text>
            </View>
          }
        </View>
        <Button mode="contained" onPress={handleSignUp} style={styles.button} buttonColor='#354aad'>
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
    alignItems: 'center'
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
    marginTop: 25,
  },
  errors: {
    color: "#ff0033",
    textAlign: "center",
  },
  errorsView: {
    color: "#ff0033",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    opacity: 0.5,
    width: 200,
    marginLeft: 25
  }

})

export default SignUpScreen;
