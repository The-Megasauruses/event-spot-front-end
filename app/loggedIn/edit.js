import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";

const Edit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <View style={styles.card}>
        <View>
          <TextInput
            placeholder="Your Updated Name"
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Your Updated Email"
            secureTextEntry
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.button}>
        <Button
          title="Update Profile"
          color="white"
          onPress={() => console.log("This should update my profile")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: "5%",
    alignItems: "center",
  },
  card: {
    marginVertical: 5,
    borderRadius: 20,
    width: '80%',
    backgroundColor: "#add8e6",
    padding: '3%',
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
  button: {
    backgroundColor: "#663399",
    borderRadius: "30%",
    padding: 5,
    marginTop: "3%",
  },
  input: {
    marginVertical: '5%',
    borderBottomColor: "#663399",
    borderBottomWidth: 1,
  },
});

export default Edit;
