import { db } from "../../config";

import {
  collection,
  doc,
  addDoc,
  updateDoc,
  getDoc,
  deleteDoc,
  getDocs
} from "firebase/firestore";

class User {
  constructor(
    {userId,
    events}
  ) {
    this.userId = userId;
    this.events = events || [];
  }

  // async addEvent() {
  //   try {
  //     const eventsRef = collection(db, "events");
  //     const newEventRef = await addDoc(eventsRef, { ...this });
  //     console.log(
  //       "Event added to Firestore successfully with ID:",
  //       newEventRef.id
  //     );
  //     return newEventRef.id;
  //   } catch (error) {
  //     console.error("Error adding event to Firestore:", error);
  //     return null;
  //   }
  // }

  async addUser() {
    try {
      const userCollection = collection(db, "users");
      const userRef = await addDoc(userCollection, {...this});
      console.log("User added to Firestore successfully doc path", userRef.id);
      return userRef.id
    } catch (error) {
      console.error("Error adding user to Firestore:", error);
    }
  }

  // async getUser(userId) {
  //   try {
  //     const userRef = db.collection("users").doc(userId);
  //     const userSnapshot = await userRef.get();

  //     if (userSnapshot.exists) {
  //       const userData = userSnapshot.data();

  //       console.log("User data retrieved:", userData);
  //       return userData;
  //     } else {
  //       console.log("User not found");
  //       return null;
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //     return null;
  //   }
  // }

  async addEventToUser(userId, eventId) {
    try {
      const userRef = doc(db ,"users", userId);
      const userSnapshot = await getDoc(userRef);
      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        const updatedEvents = [...userData.events, eventId];
        await updateDoc(userRef, { events: updatedEvents });
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
  constructor({ title, location, description, tags, happening_at, imgPath }) {
    this.title = title;
    this.location = location;
    this.description = description;
    this.tags = tags;
    this.happening_at = happening_at;
    this.createdAt = Date.now();
    this.imgPath = imgPath;
    this.attendees = [];
  }

  async addEvent() {
    try {
      const eventsRef = collection(db, "events");
      const newEventRef = await addDoc(eventsRef, { ...this });
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

  static async getAllEvents() {
    try {
      const eventsRef = collection(db ,"events");
      const querySnapshot = await getDocs(eventsRef);
      const events = [];
      querySnapshot.forEach((doc) => {
        events.push({ id: doc.id, ...doc.data() });
      });
      console.log("Success, recieved events!", events);
      return events;
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  }
  
  async updateEvent(eventId, updatedEventData) {
    try {
      // const eventRef = db.collection("events").doc(eventId);
      const eventRef = doc(db, "events", eventId);
      await updateDoc(eventRef, { ...updatedEventData });
      console.log(
        "Event updated in Firestore successfully with these fields changed:",
        updatedEventData
      );
    } catch (error) {
      console.error("Error updating event in Firestore:", error);
    }
  }

  async removeEvent(eventId) {
    try {
      const eventRef = doc(db, "events", eventId);
      await deleteDoc(eventRef);
      console.log(
        "Event deleted from Firestore successfully with id:",
        eventId
      );
    } catch (error) {
      console.error("Error deleting event from Firestore:", error);
    }
  }

  //   example input would be:
  //  const criteria1 = { tile: 'event 1' } or const criteria = {host: 'rhett' }
  //  usage:
  //  const matchingEvents = await Event.serchEvents(criteria1)
  
}

export { User, Event };
