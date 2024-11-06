import { StyleSheet, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../FirebaseConfig";
import { setPersistence, browserLocalPersistence } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { router } from "expo-router";
import { TextInput, Button } from "react-native-paper";

export default function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // router.replace("/(tabs)");
        setUser(user);
      } else {
        console.log("no user");
      }
    });
  });

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) router.replace("/(tabs)");
    } catch (error) {
      console.log(error);
      alert("Failed to sign in" + error.message);
    }
  };

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) router.replace("/(tabs)");
    } catch (error) {
      console.log(error);
      alert("Failed to sign up" + error.message);
    }
  };

  return (
    <SafeAreaView>
      {user ? (
        router.replace("/(tabs)")
      ) : (
        <>
          <Text>Sign In/Create Account</Text>

          <TextInput
            autoCapitalize="none"
            value={email}
            keyboard-type="email-address"
            placeholder="Email Address..."
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            value={password}
            secureTextEntry={true}
            placeholder="Password..."
            onChangeText={(text) => setPassword(text)}
          />

          <Button mode="outlined" onPress={signUp}>
            <Text>Sign Up</Text>
          </Button>

          <Button mode="outlined" onPress={signIn}>
            <Text>Sign In</Text>
          </Button>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
});

// import { useEffect, useState } from 'react';
// import { onAuthStateChanged, setPersistence, signInWithEmailAndPassword, browserLocalPersistence } from 'firebase/auth';
// import { auth } from './firebaseConfig'; // Make sure this imports your Firebase configuration

// export default function AuthProvider() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Set persistence to LOCAL for web, so session persists on page reload
//     setPersistence(auth, browserLocalPersistence)
//       .then(() => {
//         // Listen to the auth state changes
//         onAuthStateChanged(auth, (currentUser) => {
//           if (currentUser) {
//             setUser(currentUser);
//           } else {
//             setUser(null);
//           }
//         });
//       })
//       .catch((error) => {
//         console.error("Error setting persistence:", error);
//       });
//   }, []);

//   const handleSignIn = (email, password) => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log("User signed in:", userCredential.user);
//         setUser(userCredential.user);
//       })
//       .catch((error) => {
//         console.error("Error signing in:", error);
//       });
//   };

//   return (
//     <div>
//       {user ? (
//         <p>Welcome, {user.email}!</p>
//       ) : (
//         <p>Please log in.</p>
//       )}
//       {/* Add a sign-in form or button to trigger handleSignIn */}
//     </div>
//   );
// }
