// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhOEQ5ht9JlY2y5Nt-AshgnPnrLqJ9vNY",
  authDomain: "n322-class-e4d87.firebaseapp.com",
  projectId: "n322-class-e4d87",
  storageBucket: "n322-class-e4d87.appspot.com",
  messagingSenderId: "883916453823",
  appId: "1:883916453823:web:3d861c6698d7e3b9da530a",
  measurementId: "G-J0Y7YNZCPM",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let auth;
// Initialize Firebase
if (Platform.OS === "web") {
  // For web, use a different persistence method
  auth = initializeAuth(app);
} else {
  // For mobile, use React Native AsyncStorage
  const app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
}

export { auth, db };
