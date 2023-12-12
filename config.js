'use strict';

import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, getReactNativePersistence} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import * as firebase from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCR49mDOeKhqKvPkwqO9keVfaDCfmajulQ",
  authDomain: "event-spot-f47e4.firebaseapp.com",
  projectId: "event-spot-f47e4",
  storageBucket: "event-spot-f47e4.appspot.com",
  messagingSenderId: "706132398628",
  appId: "1:706132398628:web:6cbace0ec0c0e1c6787eb1",
  measurementId: "G-TS1HV1Y541"
};


console.log(firebaseConfig)

const app = !firebase.apps ? initializeApp(firebaseConfig, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
}) : firebase.app()

const db = getFirestore(app);
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
const auth = getAuth(app);
console.log('app', app)


export {db, app, auth};