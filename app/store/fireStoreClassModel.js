import { db } from "../../config";
import {collection, doc , addDoc, updateDoc, getDoc, deleteDoc } from "firebase/firestore"

class User {
  constructor(
    userName = null,
    email = null,
    homeTown = null,
    phone = null,
    avatarUrl = null,
    events
  ) {
    this.email = email;
    this.userName = userName;
    this.homeTown = homeTown;
    this.phone = phone;
    this.avatarUrl = avatarUrl;
    this.events = events || [];
  }

  async addUser(userData) {
    try {
      // const userRef = collection(db ,"users").doc(userId);
      const userCollection = collection(db, 'users' );
      const newUser = new User(...userData);
      const userRef = await addDoc(userCollection, newUser)
      console.log("User added to Firestore successfully doc path", userRef.id);
    } catch (error) {
      console.error("Error adding user to Firestore:", error);
    }
  }

  async getUser(userId) {
    try {
      const userRef = db.collection("users").doc(userId);
      const userSnapshot = await userRef.get();

      if (userSnapshot.exists) {
        const userData = userSnapshot.data();

        console.log("User data retrieved:", userData);
        return userData;
      } else {
        console.log("User not found");
        return null;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  }

  async addEventToUser(userId, eventId) {
    try {
      const userRef = db.collection("users").doc(userId);
      const userSnapshot = await userRef.get();

      if (userSnapshot.exists) {
        const userData = userSnapshot.data();
        const updatedEvents = [...userData.events, eventId];

        await userRef.update({ events: updatedEvents });
        console.log("Event added to user successfully");
      } else {
        console.log("User not found");
      }
    } catch (error) {
      console.error("Error adding event to user:", error);
    }
  }
}

class Event {
  constructor({
    title,
    location,
    description,
    tags,
    happening_at,
    imgPath
  }) {
    this.title = title;
    this.location = location;
    this.description = description;
    this.tags = tags ;
    this.happening_at = happening_at;
    this.createdAt = Date.now();
    this.imgPath = imgPath;
    this.attendees = [];
  }

  async addEvent() {
    try {
      const eventsRef = collection(db ,"events");
      const newEventRef = await addDoc(eventsRef , {...this});
      console.log(
        "Event added to Firestore successfully with ID:",
        newEventRef.id
      );
      return newEventRef.id;
    } catch (error) {
      console.error("Error adding event to Firestore:", error);
      return null;
    }
  }

  async getEventById(eventId) {
    try {
      const eventRef = doc(db, "events", eventId);
      const eventSnapshot = await getDoc(eventRef);
  
      if (!eventSnapshot.empty) {
        const eventData = eventSnapshot.docs[0].data();
        console.log("Event data retrieved:", eventData);
        return eventData;
      } else {
        console.log("Event not found");
        return null;
      }
    } catch (error) {
      console.error("Error fetching event data:", error);
      return null;
    }
  }
  
  async updateEvent(eventId, updatedEventData) {
    try {
      // const eventRef = db.collection("events").doc(eventId);
      const eventRef = doc(db, "events", eventId);
      await updateDoc(eventRef , {...updatedEventData});
      console.log("Event updated in Firestore successfully with these fields changed:", updatedEventData);
    } catch (error) {
      console.error("Error updating event in Firestore:", error);
    }
  }

  async removeEvent(eventId) {
    try {
      const eventRef = doc(db, "events", eventId )
      await deleteDoc(eventRef);
      console.log("Event deleted from Firestore successfully with id:", eventId );
    } catch (error) {
      console.error("Error deleting event from Firestore:", error);
    }
  }

  //   example input would be:
  //  const criteria1 = { tile: 'event 1' } or const criteria = {host: 'rhett' }
  //  usage:
  //  const matchingEvents = await Event.serchEvents(criteria1)
  async searchEvents(criteria) {
    try {
      const eventsRef = db.collection("events");
      let queryRef = eventsRef;
      Object.entries(criteria).forEach(([field, value]) => {
        queryRef = queryRef.where(field, ">=", value);
      });
      const querySnapshot = await queryRef.get(); 
      const events = [];

      querySnapshot.forEach((doc) => {
        const eventData = doc.data();
        events.push(eventData);
      });

      console.log("Events matching the query:", events);
      return events;
    } catch (error) {
      console.error("Error searching events:", error);
      return [];
    }
  }
}

export { User, Event };
