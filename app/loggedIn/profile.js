import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button } from 'react-native';
import UserAvatar from "./components/userAvatar.js";
import mockData from '../../mockData.json';
import { Card, Title, Paragraph } from "react-native-paper";

const Profile = () => {
  return (
    <View style={styles.container}>

      <View style={styles.avatarContainer}>
        <UserAvatar />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>john.doe@example.com</Text>
        {/* Add more profile information as needed */}
      </View>

      <Text style={styles.title}>My Events</Text>
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
              <View style={styles.button}>
                <Button title='Cancel' color='#fff' onPress={() => console.log('This button should link to Create Event page')}/>
              </View>
            </Card.Content>
          </Card>
        )}
      />


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: '5%',
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: '4%',
  },
  infoContainer: {
    alignItems: 'center',
    rowGap: '10%',
    marginBottom: '3%',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    color: 'black',
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
    width: '40%'
  }
});

export default Profile;