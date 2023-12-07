import React from "react";
import { View, Text, Platform } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const Home = () => {
  return (
    <View style={{ marginVertical: "5%", alignItems: "center" }}>
      <Text style={styles.title}>Upcoming Events</Text>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.spacing}>Event Title</Title>
          <Card.Cover
            source={require("../../assets/eventSpot.png")}
            style={styles.image}
          />
          <Paragraph style={styles.spacing}>Date: 1/23/24 @ 5:00pm</Paragraph>
          <Paragraph style={styles.spacing}>
            Location: Code Fellows Campus, Seattle WA
          </Paragraph>
          <Paragraph style={styles.spacing}>
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = {
  card: {
    width: "80%",
    borderRadius: 20,
    backgroundColor: "#add8e6",
  },
  title: {
    color: "#ffb6c1",
    fontSize: 20,
    fontFamily: Platform.OS === "ios" ? "Kailasa-Bold" : "Roboto",
    textDecorationLine: "underline",
    textDecorationColor: "#ffb6c1",
    textDecorationStyle: "double",
    marginVertical: 10,
    textAlign: "center",
  },
  spacing: {
    marginBottom: 10,
  },
  image: {
    width: 160,
    height: 60,
    resizeMode: "cover",
    marginBottom: 10,
  },
};

export default Home;
