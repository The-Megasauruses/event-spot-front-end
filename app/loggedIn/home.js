import React from "react";
import { View, Text, Platform, Image, FlatList, Button } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import mockData from '../../mockData.json';

const Home = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Events</Text>
      <FlatList
        style={styles.list}
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title style={styles.spacing}>{item.title}</Title>
              <Image
                source={{ uri: item.imgPath }} 
                style={styles.image}
              />
              <Paragraph style={styles.spacing}>
                {item.date}
              </Paragraph>
              <Paragraph style={styles.spacing}>
                {item.location}
              </Paragraph>
              <Paragraph style={styles.spacing}>
                {item.description}
              </Paragraph>
              {/* <Button mode="contained" style={{width: '40%'}} onPress={() => console.log('This button should add this event')}>
                join
              </Button> */}
            </Card.Content>
          </Card>
        )}
      />
      <View style={styles.button}>
        <Button title='Create an Event' color='#fff' onPress={() => console.log('This button should link to Create Event page')}/>
      </View>
    </View>
  );
};

const styles = {
  container: {
    marginVertical: "5%", 
    alignItems: "center",
  },
  list: {
    height: '80%',
    width: "80%",
    borderRadius: 20,
  },
  card: {
    backgroundColor: "#add8e6",
    marginVertical: 5,
  },
  title: {
    color: "#663399",
    fontSize: 20,
    fontFamily: Platform.OS === "ios" ? "Arial-BoldMT" : "Roboto",
    textDecorationLine: "underline",
    textDecorationColor: "#663399",
    textDecorationStyle: "double",
    marginBottom: '3%',
    textAlign: "center",
  },
  spacing: {
    marginBottom: '3%',
  },
  image: {
    width: '60%',
    height: 60,
    resizeMode: "cover",
    marginBottom: '3%',
  },
  button: {
    backgroundColor: "#663399",
    borderRadius: '30%',
    padding: 5,
    marginTop: '3%',
  }
};

export default Home;
