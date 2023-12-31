import { db } from "../../config";
import {
  collection,
  doc,
  addDoc,
  query,
  where,
  updateDoc,
  getDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";

class User {
  constructor({ userId, events }) {
    this.userId = userId;
    this.events = events || [];
  }


  static async addUser(userData) {
    try {
      const userCollection = collection(db, "users");
      const userRef = await addDoc(userCollection, userData);
      console.log("User added to Firestore successfully doc path", userRef.id);
      return userRef.id;
    } catch (error) {
      console.error("Error adding user to Firestore:", error);
    }
  }


  static async getUser(uid) {

    try {
      const queryData = await getDocs(collection(db, "users"));
      let allUsers = [];
      queryData.docs.forEach((obj) => allUsers.push(obj.data()));
      return allUsers;
    } catch (e) {
      console.error(e.message);
    }
  }

  static async getUser(uid) {
    try {
      console.log("this is on line 44:" , db, uid)
      const queryRef = query(collection(db, "users"), where("userId", "==", uid));
      console.log("this is the queryRef:",queryRef);
      const userSnapshot = await getDocs(queryRef);
      
      if (userSnapshot[0]) {
        const userData = userSnapshot[0].id;
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

  static async addEventToUser(userId, event) {
    try {
      // console.log(userId, event)
      // const userRef = collection(db, "users");
      // const queryRef = query(userRef, where("id", "==", userId));
      // const userSnapshot = await getDocs(queryRef);
      // console.log('userSnapshot', userSnapshot)
      const userRef = doc(db, "users", userId)
      const userSnapshot = await getDoc(userRef)
      console.log('response', userSnapshot.data())
      if (userSnapshot) {
        const userData = userSnapshot.data();
        console.log('userData', userData)
        const updatedEvents = [...userData.events, event];
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

 static async addEvent(event) {
    try {
      const eventsRef = collection(db, "events");
      const newEventRef = await addDoc(eventsRef, event);
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
      const eventsRef = collection(db, "events");
      const querySnapshot = await getDocs(eventsRef);
      const events = [];
      querySnapshot.forEach((doc) => {
        events.push({ id: doc.id, ...doc.data() });
      });
      // console.log("Success, recieved events!", events);


      return events;
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  }

  static async updateEvent(eventId, updatedEventData) {
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

  static async removeEvent(eventId) {
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
