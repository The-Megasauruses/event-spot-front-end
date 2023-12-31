import React from "react";
import {
  View,
  Text,
  Platform,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { Link } from "expo-router";
import { Event, User } from "../store/fireStoreClassModel";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../../config";

const Home = () => {
  const [eventsList, setEventsList] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const auth = getAuth();
        console.log(auth.currentUser.uid)
        const q = query(collection(db, "users"), where("userid", "==", auth.currentUser.uid))
        console.log('q', q)
        const snapshot = await getDocs(q)
        snapshot.forEach(value => {
          // console.log('value id??', value.id)
          const newUser = {
            id: value.id,
            events: value.data().events,
            userId: value.data().userid
          }
          console.log('newUser', newUser)
          setUser(newUser)
        })
        const events = await Event.getAllEvents();
        setEventsList(events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Events</Text>
      <FlatList
        style={styles.list}
        data={eventsList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title style={styles.spacing}>{item.title}</Title>
              <Image source={{ uri: item.imgPath }} style={styles.image} />
              <Paragraph style={styles.spacing}>{item.happening_at}</Paragraph>
              <Paragraph style={styles.spacing}>{item.location}</Paragraph>
              <Paragraph style={styles.spacing}>{item.description}</Paragraph>
              <Button
                mode="contained"
                style={{ width: "40%" }}
                onPress={() =>
                  // console.log("This button should add this to my events", user.newUser)
                  // handlePress(uid)
                  User.addEventToUser(user.id, item)
                }
              >
                join
              </Button>
            </Card.Content>
          </Card>
        )}
      />
      <Link href={"/loggedIn/createEvent"} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create an event</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = {
  container: {
    marginVertical: "5%",
    alignItems: "center",
  },
  list:
    Platform.OS === "ios"
      ? {
          height: "80%",
          width: "80%",
          borderRadius: 20,
        }
      : {
          height: "80%",
          width: "80%",
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
    marginBottom: "3%",
    textAlign: "center",
  },
  spacing: {
    marginBottom: "3%",
  },
  image: {
    width: "60%",
    height: 60,
    resizeMode: "cover",
    marginBottom: "3%",
  },
  button:
    Platform.OS === "ios"
      ? {
          backgroundColor: "#663399",
          borderRadius: "30%",
          padding: 10,
          marginTop: "4%",
        }
      : {
          backgroundColor: "#663399",
          padding: 10,
          marginTop: "4%",
        },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
};

export default Home;
