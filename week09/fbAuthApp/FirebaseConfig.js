// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ1FZ-ZREJszZwAmsf9eIbExdYoiPUoFI",
  authDomain: "auth-e3ba3.firebaseapp.com",
  projectId: "auth-e3ba3",
  storageBucket: "auth-e3ba3.appspot.com",
  messagingSenderId: "1009907450257",
  appId: "1:1009907450257:web:0673be6a70db097fbd5a30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
