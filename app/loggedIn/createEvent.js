import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import React from "react";
import { EventModel } from "../store/fireStoreClassModel";

const CreateEvent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Event</Text>

      

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => console.log("This button should add this to my events")}
      >
        Publish
      </Button>
    </View>
  );
};

const styles = {
  container: {
    marginVertical: "5%",
    alignItems: "center",
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
    marginTop: "4%",
  },
};

export default CreateEvent;
