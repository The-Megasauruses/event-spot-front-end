// import firestore from "@react-native-firebase/firestore";

// class UserModel {
//   constructor(firstName, lastName, email, homeTown, phone, avatarUrl, events) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.homeTown = homeTown;
//     this.phone = phone;
//     this.avatarUrl = avatarUrl;
//     this.events = events || [];
//   }

//   static async addUser(userId, userData) {
//     try {
//       const userRef = firestore().collection("users").doc(userId);
//       const newUser = new UserModel(...userData);
//       await userRef.set(newUser);
//       console.log("User added to Firestore successfully");
//     } catch (error) {
//       console.error("Error adding user to Firestore:", error);
//     }
//   }

//   static async getUser(userId) {
//     try {
//       const userRef = firestore().collection("users").doc(userId);
//       const userSnapshot = await userRef.get();

//       if (userSnapshot.exists) {
//         const userData = userSnapshot.data();

//         console.log("User data retrieved:", userData);
//         return userData;
//       } else {
//         console.log("User not found");
//         return null;
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//       return null;
//     }
//   }

//   static async addEventToUser(userId, EventId) {
//     try {
//       const userRef = firestore().collection("user").doc(userId);
//       const userSnapshot = await userRef.get();

//       if (userSnapshot.exists) {
//         const userData = userSnapshot.data();
//         const updatedEvents = [...userData.events, eventId];

//         await userRef.update({ events: updatedEvents });
//         console.log("Event added to user successfully");
//       } else {
//         console.log("User not found");
//       }
//     } catch (error) {
//       console.error("Error adding event to user:", error);
//     }
//   }
// }

// class EventModel {
//   constructor(
//     title,
//     host,
//     eventURL,
//     location,
//     description,
//     tags,
//     happeningAt,
//     imgPath,
//     attendees
//   ) {
//     this.title = title;
//     this.host = host;
//     this.eventURL = eventURL;
//     this.location = location;
//     this.description = description;
//     this.tags = tags || [];
//     this.happeningAt = happeningAt;
//     this.createdAt = Date.now();
//     this.imgPath = imgPath;
//     this.attendees = attendees || [];
//   }

//   static async addEvent(eventData) {
//     try {
//       const eventsRef = firestore().collection("events");
//       const newEventRef = await eventsRef.add(eventData);
//       console.log(
//         "Event added to Firestore successfully with ID:",
//         newEventRef.id
//       );
//       return newEventRef.id;
//     } catch (error) {
//       console.error("Error adding event to Firestore:", error);
//       return null;
//     }
//   }

//   static async getEventById(eventId) {
//     try {
//       const eventRef = firestore().collection("events").doc(eventId);
//       const eventSnapshot = await eventRef.get();

//       if (eventSnapshot.exists) {
//         const eventData = eventSnapshot.data();
//         console.log("Event data retrieved:", eventData);
//         return eventData;
//       } else {
//         console.log("Event not found");
//         return null;
//       }
//     } catch (error) {
//       console.error("Error fetching event data:", error);
//       return null;
//     }
//   }

//   static async updateEvent(eventId, updatedEventData) {
//     try {
//       const eventRef = firestore().collection("events").doc(eventId);
//       await eventRef.update(updatedEventData);
//       console.log("Event updated in Firestore successfully");
//     } catch (error) {
//       console.error("Error updating event in Firestore:", error);
//     }
//   }

//   static async removeEvent(eventId) {
//     try {
//       const eventRef = firestore().collection("events").doc(eventId);
//       await eventRef.delete();
//       console.log("Event deleted from Firestore successfully");
//     } catch (error) {
//       console.error("Error deleting event from Firestore:", error);
//     }
//   }

//   //   example input would be:
//   //  const criteria1 = { tile: 'event 1' } or const criteria = {host: 'rhett' }
//   //  usage:
//   //  const matchingEvents = await EventModel.serchEvents(criteria1)
//   static async searchEvents(criteria) {
//     try {
//       const eventsRef = firestore().collection("events");
//       let queryRef = eventsRef;
//       Object.entries(criteria).forEach(([field, value]) => {
//         queryRef = queryRef.where(field, ">=", value);
//       });

//       const events = [];

//       querySnapshot.forEach((doc) => {
//         const eventData = doc.data();
//         events.push(eventData);
//       });

//       console.log("Events matching the query:", events);
//       return events;
//     } catch (error) {
//       console.error("Error searching events:", error);
//       return [];
//     }
//   }
// }

// export { UserModel, EventModel };
