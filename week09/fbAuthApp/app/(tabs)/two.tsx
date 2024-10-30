import { FlatList, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Text, View } from "@/components/Themed";
import { useState } from "react";
import { db } from "@/FirebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function TabTwoScreen() {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState();

  const addUser = async () => {
    console.log(userName);
    const userObj = {
      name: userName,
    };
    await addDoc(collection(db, "ReactUser"), userObj)
      .then((docRef) => {
        console.log("Document written with ID:", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error.message);
      });
  };

  const showNames = async () => {
    console.log("hi");
    try {
      const querySnapshot = await getDocs(collection(db, "ReactUser"));
      const docs = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data())
        docs.push(doc.id, " => ", doc.data());
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
        placeholder="What's Your Name?"
        onChangeText={(text) => setUserName(text)}
      ></TextInput>
      <Button style={styles.button} mode="contained" onPress={addUser}>
        Join Us :)
      </Button>
      <Button style={styles.button} mode="contained" onPress={showNames}>
        View Name List
      </Button>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>
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
});
