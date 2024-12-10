import { FlatList, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Text, View } from "@/components/Themed";
import React, { useState, useEffect } from "react";
import { db } from "@/FirebaseConfig";
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function TabTwoScreen() {
  const [userName, setUserName] = useState("");
  const [userComment, setUserComment] = useState(""); // Separate state for comment
  const [data, setData] = useState([]);

  useEffect(() => {
    // Real-time data fetching
    const unsubscribe = onSnapshot(collection(db, "Comment"), (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(docs);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const addUser = async () => {
    if (!userName.trim() || !userComment.trim()) {
      alert("Both fields are required!");
      return;
    }

    const userObj = {
      name: userName,
      comment: userComment,
    };

    try {
      const docRef = await addDoc(collection(db, "Comment"), userObj);
      setUserName(""); // Clear input fields
      setUserComment("");
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error.message);
    }
  };

  const deleteItem = async (buttonID) => {
    try {
      await deleteDoc(doc(db, "Comment", buttonID));
      console.log("Document deleted with ID: ", buttonID);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leave a Comment!</Text>

      <View style={styles.inputContainer}>
        <TextInput
          value={userName}
          placeholder="Your Name"
          onChangeText={setUserName}
          style={styles.input}
        />
        <TextInput
          value={userComment}
          placeholder="Your Comment"
          onChangeText={setUserComment}
          style={styles.input}
        />
        <Button mode="contained" onPress={addUser} style={styles.addButton}>
          Add Comment
        </Button>
      </View>
      <Text style={styles.commentHeader}>Comments:</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.commentContainer}>
            <Text style={styles.commentName}>{item.name}</Text>
            <Text style={styles.commentText}>{item.comment}</Text>
            <Button
              onPress={() => deleteItem(item.id)}
              mode="outlined"
              style={styles.deleteButton}
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
    justifyContent: "flex-start",
    width: "80%",
    margin: "auto",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    backgroundColor: "white",
  },
  addButton: {
    marginTop: 10,
    width: 200,
    margin: "auto",
    marginTop: 50,
    backgroundColor: "#394F49"
    
  },
  commentHeader: {
    fontSize: 25,
    marginBottom: 20,
  },
  commentContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    borderColor: "#ddd",
    borderWidth: 1,
    display: "flex"
  },
  commentName: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
  },
  commentText: {
    fontSize: 18,
    marginBottom: 10,
  },
  deleteButton: {
    alignSelf: "flex-start",
    borderColor: "#394F49",
    color: "#394F49"
  },
});
