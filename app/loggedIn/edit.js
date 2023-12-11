import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { getAuth, updateProfile } from "firebase/auth";
import { useState } from "react";

const Edit = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const auth = getAuth();
  const user = auth.currentUser;

  const update = () => {
      updateProfile(user, {
        displayName: name || user.displayName,
        photoURL: photo || user.photoURL,
      })
        .then(() => {
          console.log("Profile name/photo updated!");
          console.log(user.displayName, user.photoURL);
        })
        .catch((error) => {
          console.log("Profile did not update!", error.message);
        });
    }

  console.log(user);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <View style={styles.card}>
        <View>
          <TextInput
            placeholder="Update Display Name"
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Update Profile Pic (URL)"
            value={photo}
            onChangeText={(text) => setPhoto(text)}
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.button}>
        <Button
          title="Update Profile"
          color="white"
          onPress={() => update()}
        />
      </View>

      <View style={styles.card}>
        <TextInput
          placeholder="Update Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Update Email"
          color="white"
          onPress={() => console.log('This should update email')
          }
        />
      </View>

      <View style={styles.card}>
        <TextInput
          placeholder="Update Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Update Password"
          color="white"
          onPress={() => console.log('This should update passowrd')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: "5%",
    alignItems: "center",
  },
  card: {
    marginVertical: 5,
    borderRadius: 20,
    width: "80%",
    backgroundColor: "#add8e6",
    padding: "3%",
  },
  title: {
    color: "#663399",
    fontSize: 20,
    fontFamily: Platform.OS === "ios" ? "Arial-BoldMT" : "Roboto",
    textDecorationLine: "underline",
    textDecorationColor: "#663399",
    textDecorationStyle: "double",
    marginBottom: "3%",
    textAlign: "center",
  },
  button:
    Platform.OS === "ios"
      ? {
          backgroundColor: "#663399",
          borderRadius: "30%",
          padding: 5,
          marginVertical: "3%",
        }
      : {
          backgroundColor: "#663399",
          padding: 5,
          marginVertical: "3%",
        },
  input: {
    marginVertical: "5%",
    borderBottomColor: "#663399",
    borderBottomWidth: 1,
  },
});

export default Edit;
