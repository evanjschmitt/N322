import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { auth } from "../FirebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { router } from "expo-router";
import { TextInput, Button } from "react-native-paper";

export default function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) router.replace("/(tabs)");
    } catch (error) {
      console.log(error);
      alert("Failed to sign in: " + error.message);
    }
  };

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) router.replace("/(tabs)");
    } catch (error) {
      console.log(error);
      alert("Failed to sign up: " + error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginHolder}>
        <Text style={styles.title}>Sign In or Create Account</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={email}
          keyboardType="email-address"
          placeholder="Email Address..."
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
        />
        <TextInput
          style={styles.input}
          value={password}
          secureTextEntry={true}
          placeholder="Password..."
          onChangeText={(text) => setPassword(text)}
          mode="outlined"
        />
        <View style={styles.buttonGroup}>
          <Button mode="contained" onPress={signUp} style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
            
          </Button>
          <Button mode="contained" onPress={signIn} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C5EDAC",
    justifyContent: "center",
    alignItems: "center",
  },
  loginHolder: {
    width: "90%",
    maxWidth: 400,
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  input: {
    height: 50,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "#65743A",
  },
  buttonText: {
    fontSize: 18
  }
});
