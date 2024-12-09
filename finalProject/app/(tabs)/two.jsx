import { FlatList, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Text, View } from "@/components/Themed";
import React, { useState, useEffect } from "react";
import { db } from "@/FirebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore"; // Import doc here

export default function TabTwoScreen() {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data in real-time from Firestore collection
    const unsubscribe = onSnapshot(collection(db, "ReactUser"), (snapshot) => {
      const docs = [];
      snapshot.forEach((doc) => {
        docs.push({ id: doc.id, ...doc.data() });
        console.log(doc.id, " => ", doc.data());
      });
      setData(docs);
    });

    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const addUser = async () => {
    const userObj = {
      name: userName,
    };

    try {
      const docRef = await addDoc(collection(db, "ReactUser"), userObj);
      setUserName(""); // Clear input after adding
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error.message);
    }
  };

  const deleteItem = async (buttonID) => {
    console.log(buttonID);
    try {
      await deleteDoc(doc(db, "ReactUser", buttonID)); // Use doc function here
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Tab Two</Text>
      </View>

      <View>
        <Text style={styles.title}>Add your name to mailing list</Text>
        <TextInput
          autoCapitalize="none"
          value={userName}
          placeholder="Add Person's Name"
          onChangeText={(text) => setUserName(text)}
        />
        <Button mode="contained" onPress={addUser}>
          Add Person
        </Button>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Button
              onPress={() => deleteItem(item.id)}
              style={styles.btn}
              mode="outlined"
            >
              Delete
            </Button>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  btn: {
    marginTop: 10,
  },
});
