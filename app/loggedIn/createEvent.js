import { Text, TextInput, View } from "react-native";
import { Button } from "react-native-paper";
import { Event } from "../store/fireStoreClassModel";
import { db } from "../../config";
import { useState, useEffect } from "react";

// constructor(
//   title,
//   host,
//   eventURL,
//   location,
//   description=null,
//   tags,
//   happeningAt,
//   imgPath,
//   attendees
// ) {
//   this.title = title;
//   this.host = host;
//   this.eventURL = eventURL;
//   this.location = location;
//   this.description = description;
//   this.tags = tags || [];
//   this.happeningAt = happeningAt;
//   this.createdAt = Date.now();
//   this.imgPath = imgPath;
//   this.attendees = attendees || [];

const CreateEvent = () => {
  let [tagString, setTagString] = useState("");

  let [date, setDate] = useState({
    date: "",
    time: "",
  });

  let [location, setLocation] = useState({
    street: "",
    cityState: "",
    zip: "",
  });

  let [form, setForm] = useState({
    // "id": 1,
    title: "",
    // host: "",
    // "eventURL": "https://event-spot.com/events/518712",
    location: "",
    description: "",
    tags: [],
    happening_at: "",
    // created_at: "",
    // updated_at: "",
    imgPath: "",
    // "attendees": []
  });

  useEffect(() => {
    let locationString = `${location.street}  ${location.cityState} ${location.zip}`;
    setForm({ ...form, location: locationString });
  }, [location]);

  useEffect(() => {
    let dateString = `${date.date} @ ${date.time}`;
    setForm({ ...form, happening_at: dateString });
  }, [date]);

  useEffect(() => {
    let tagsArr = tagString.split(", ");
    setForm({ ...form, tags: tagsArr });
  }, [tagString]);

  const handlePublish = async () => {
    try {
      const newEvent = new Event({ ...form });
      const eventId = newEvent.addEvent();
      console.log("Event added with ID:", eventId);
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Event</Text>

      <View style={styles.card}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setForm({ ...form, title: text })}
          value={form.title}
          placeholder="Event Title"
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => setLocation({ ...location, street: text })}
          value={location.street}
          placeholder="Street: 1234 Street Ave"
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => setLocation({ ...location, cityState: text })}
          value={location.cityState}
          placeholder="City, State: Seattle, WA"
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => setLocation({ ...location, zip: text })}
          value={location.zip}
          placeholder="Zip: 98106"
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => setForm({ ...form, description: text })}
          value={form.description}
          placeholder="Description"
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => setDate({ ...date, date: text })}
          value={date.date}
          placeholder="Date: 1/23/24"
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => setDate({ ...date, time: text })}
          value={date.time}
          placeholder="Time: 5:30pm"
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => setTagString(text)}
          value={tagString}
          placeholder="Tags: technology, computers"
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => setForm({ ...form, imgPath: text })}
          value={form.imgPath}
          placeholder="Banner Image: https://picsum.photos/699"
        />
      </View>

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => handlePublish(form)}
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
  card: {
    alignItems: "center",
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
  input: {
    width: '100%',
    fontSize: 18,
    padding: 5,
    marginBottom: 5,
    borderBottomColor: "#663399",
    borderBottomWidth: 1,
  },
  button:
    Platform.OS === "ios"
      ? {
          backgroundColor: "#663399",
          borderRadius: "30%",
          padding: 5,
          marginTop: "4%",
        }
      : {
          backgroundColor: "#663399",
          padding: 5,
          marginTop: "4%",
        },
};

export default CreateEvent;
