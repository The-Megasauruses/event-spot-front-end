import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image, Button } from "react-native";
import UserAvatar from "./components/userAvatar.js";
import mockData from "../../mockData.json";
import { Card, Title, Paragraph } from "react-native-paper";
import { getAuth, signOut } from "firebase/auth";
import { Redirect } from "expo-router";
import { EventModel, UserModel } from "../store/fireStoreClassModel.js";
import { collection, query, where, getDocs, arrayRemove, updateDoc, doc, getDoc  } from "firebase/firestore";
import { db } from "../../config";


const Profile = () => {
  const auth = getAuth();
  const [loggedIn, setLoggedIn] = useState(true);
  const [user, setUser] = useState({});
  console.log(auth);
  console.log("logged in?", loggedIn);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const q = query(collection(db, "users"), where ("userid", "==", auth.currentUser.uid))
        const snapshot = await getDocs(q)
        console.log('snapshot', snapshot)
        snapshot.forEach(value => {
          console.log('value id??', value.id)
          const newUser = {
            id: value.id,
            events: value.data().events,
            userId: value.data().userid
          }
          console.log('newUser', newUser)
          setUser(newUser)
        })
      } catch (error) {
        console.error("Error getting events", error)
      }
    }
    fetchEvents()
  }, [])

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        setLoggedIn(false);
      })
      .catch((error) => {
        // An error happened.
        console.log("something happened", error);
      });
  };
  const handleRemoveEvent = async (item) => {
    
  const docRef = doc(db, "users", user.id);
  console.log('id')
  console.log('object to remove', item)
  console.log('docRef', docRef)
    const res = await updateDoc(docRef, {
      events: arrayRemove(item)
    })
    docSnap = await getDoc(docRef)
    if(docSnap.exists()){
      setUser(docSnap.data())
    } else {
      console.log('no such document')
    }
  }

  return (
    <>
      {!loggedIn && <Redirect href="/loggedOut/signIn" />}
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <UserAvatar />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.userName}>
            {auth.currentUser
              ? auth.currentUser.displayName || "Profile Name"
              : "Profile Name"}
          </Text>
          <Text style={styles.userdata}>
            {auth.currentUser ? auth.currentUser.email || "Email" : "Email"}
          </Text>
          {/* Add more profile information as needed */}
          <View style={styles.button}>
            <Button title="Log out" color="#fff" onPress={handleSignOut} />
          </View>
        </View>

        <Text style={styles.title}>My Events</Text>
        <FlatList
          style={styles.list}
          data={user.events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Content>
                <Title style={styles.spacing}>{item.title}</Title>
                <Image source={{ uri: item.imgPath }} style={styles.image} />
                <Paragraph style={styles.spacing}>
                  {item.happening_at}
                </Paragraph>
                <Paragraph style={styles.spacing}>{item.location}</Paragraph>
                <Paragraph style={styles.spacing}>{item.description}</Paragraph>
                <View style={styles.button}>
                  <Button
                    title="Cancel"
                    color="#fff"
                    onPress={() =>
                      // console.log(
                      //   "This button should link to Create Event page", item
                      // )
                      handleRemoveEvent(item)
                    }
                  />
                </View>
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: "5%",
    alignItems: "center",
  },
  avatarContainer: {
    marginBottom: "4%",
  },
  infoContainer:
    Platform.OS === "ios"
      ? {
          alignItems: "center",
          rowGap: "10%",
          marginBottom: "3%",
        }
      : {
          alignItems: "center",
          marginBottom: "3%",
        },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  userdata: {
    fontSize: 16,
    color: "black",
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
          padding: 5,
          width: "40%",
        }
      : {
          backgroundColor: "#663399",
          padding: 5,
          width: "40%",
        },
});

export default Profile;
