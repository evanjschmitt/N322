import { FlatList, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Text, View } from "@/components/Themed";
import { useEffect, useState } from "react";
import { db } from "@/FirebaseConfig";
import { collection, addDoc, getDocs, onSnapshot } from "firebase/firestore";

export default function TabTwoScreen() {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "ReactUser"), (snapshot) => {
      const docs = [];
      snapshot.forEach((doc) => {
        docs.push({ id: doc.id, ...doc.data() });
        console.log(doc.id, " => ", doc.data());
      });
      setData(docs);
    });
    return () => unsubscribe();
  }, []);

  const addUser = async () => {
    console.log(userName);
    const userObj = {
      name: userName,
    };
    try {
      const docRef = await addDoc(collection(db, "ReactUser"), userObj);
      setUserName("");
      console.log("Document written with ID:", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error.message);
    }
  };

  const showNames = async () => {
    console.log("hi");
    try {
      const querySnapshot = await getDocs(collection(db, "ReactUser"));
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ id: doc.id, ...doc.data() });
      });
      setData(docs);
    } catch (e) {
      console.error("Error viewing document: ", e.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.2)"
      />
      <Text>Join our email list!</Text>
      <TextInput
        value={userName}
        style={styles.nameInput}
        placeholder="What's Your Name?"
        onChangeText={(text) => setUserName(text)}
      />
      <Button style={styles.button} mode="contained" onPress={addUser}>
        Join Us :)
      </Button>
      <Button style={styles.button} mode="contained" onPress={showNames}>
        View Name List
      </Button>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Button style={styles.button} mode="contained">{item.name}</Button>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 2,
    width: "80%",
  },
  button: {
    marginTop: 20,
  },
  nameInput: {
    height: 40, // Make the input box height more standard
    width: "80%", // Add width to make it easier to type into
    marginVertical: 10,
  },
});
